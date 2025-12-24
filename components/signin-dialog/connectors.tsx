import { authorizerInstance } from '@/services/authorizer'
import Image from 'next/image'
import { SiweMessage, generateNonce } from 'siwe'
import { toast } from 'sonner'
import { story } from 'viem/chains'
import { Connector, useAccount, useConnect, useConnectors, useSignMessage } from 'wagmi'

export default function Connectors({
  tokenHandler,
}: {
  tokenHandler?: (token: string, refreshToken?: string) => void
}) {
  const connectors = useConnectors()
  const { connectAsync } = useConnect()
  const { status, address } = useAccount()
  const { signMessage } = useSignMessage()
  const connectHandler = async (connector: Connector) => {
    try {
      if (status == 'connected') {
        signConnectMessage(address)
      } else {
        await connectAsync(
          {
            connector,
            chainId: story.id,
          },
          {
            onSuccess: (data) => {
              toast.success('Wallet connected successfully')
              signConnectMessage(data.accounts[0])
            },
          }
        )
      }
    } catch (error: any) {
      toast.error(`Error while connecting wallet: ${error.message}`)
    }
  }
  const signConnectMessage = (connectedAccount: `0x${string}`) => {
    try {
      const domain = window.location.hostname
      const origin = window.location.origin
      const statement = `Sign in with Story Mainnet to the app.`
      const siweMessage = new SiweMessage({
        scheme: undefined,
        domain,
        address: connectedAccount,
        statement,
        uri: origin,
        version: '1',
        chainId: story.id,
        nonce: generateNonce(),
      })
      const message = siweMessage.prepareMessage()
      toast.info('Please sign the message to login PunkGame')
      signMessage(
        { message, account: connectedAccount },
        {
          onSuccess: (data) =>
            getTokenFromSiwe({
              message,
              signature: data,
            }),
        }
      )
    } catch (error: any) {
      console.error('Error while signing message:', error, connectedAccount)
      toast.error(`Error while signing message: ${error.message}`)
    }
  }
  const getTokenFromSiwe = async ({ message, signature }: { message: string; signature: string }) => {
    try {
      const res = (await authorizerInstance.graphqlQuery({
        query: `mutation Siwe {
          siwe(
              params: {
                  message: "${message.replace(/(?:\r\n|\r|\n)/g, '\\n')}"
                  signature: "${signature}"
              }
          ) {
              message
              should_show_otp_screen
              access_token
              id_token
              refresh_token
              expires_in
          }
      }`,
      })) as any
      if (res?.siwe?.access_token) {
        tokenHandler?.(res.siwe.access_token, res.siwe.refresh_token)
      }
    } catch (error: any) {
      toast.error(`Error while getting token from siwe: ${error.message}`)
      return null
    }
  }
  return (
    <div className=''>
      {connectors
        .filter((connector) => connector.type == 'injected')
        .map((connector) => (
          <button
            key={connector.id}
            onClick={() => connectHandler(connector)}
            className='flex items-center gap-3 text-sm font-semibold cursor-pointer px-2 py-2.5 hover:bg-white/10 rounded-md w-full'>
            <Image
              src={connector.icon || ''}
              width={32}
              height={32}
              alt={connector.name}
              className='rounded-md overflow-hidden'
            />
            {connector.name}
          </button>
        ))}
    </div>
  )
}

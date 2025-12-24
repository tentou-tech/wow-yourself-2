'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createConfig, http, WagmiProvider } from 'wagmi'
import { story } from 'wagmi/chains'

const queryClient = new QueryClient()
export const config = createConfig({
  chains: [story],
  transports: {
    [story.id]: http(),
  },
})

export function Web3Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

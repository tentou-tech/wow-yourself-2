import { Authorizer } from '@authorizerdev/authorizer-js'

export const authorizerInstance = new Authorizer({
  authorizerURL: process.env.NEXT_PUBLIC_AUTHORIZER_URL as string,
  redirectURL: process.env.NEXT_PUBLIC_AUTHORIZER_REDIRECT_URL as string,
  clientID: process.env.NEXT_PUBLIC_AUTHORIZER_CLIENT_ID as string,
})

import { User } from '@/models/user'
import axiosInstance from './axios'
import { authorizerInstance } from './authorizer'
import { AuthToken } from '@authorizerdev/authorizer-js'
import { getAccessToken } from '@/lib/token'

export const signUp = async (username: string, email: string, password: string) => {
  const res = await authorizerInstance.signup({
    nickname: username,
    email: email,
    password: password,
    confirm_password: password,
    redirect_uri: process.env.NEXT_PUBLIC_AUTHORIZER_REDIRECT_URL,
  })
  return res
}

export const login = async (email: string, password: string): Promise<AuthToken | void> => {
  const response = await authorizerInstance.login({
    email: email,
    password: password,
    scope: ['offline_access'],
  })
  return response
}
export const getUserProfile = async (): Promise<User | undefined> => {
  const response = await axiosInstance.get('/user/profile')
  return response.data?.authorizer_users?.[0]
}
export const updateUserProfile = async (data: {
  birthdate?: string
  gender?: string
  bio?: string
  nickname?: string
  picture?: string
  email?: string
}): Promise<User | undefined> => {
  const response = await axiosInstance.put('/user/update-profile', data)
  return response.data?.authorizer_users?.[0]
}
export const updatePassword = async (data: {
  old_password?: string
  new_password?: string
  confirm_new_password?: string
}) => {
  const token = getAccessToken()
  const response = await authorizerInstance.updateProfile(data, {
    Authorization: `Bearer ${token}`,
  })
  return response
}
export const resendVerifyEmail = async (email: string, identifier?: 'basic_auth_signup' | 'update_email') => {
  await authorizerInstance.graphqlQuery({
    query: `mutation ResendVerifyEmail($identifier: String!, $email: String!) {
        resend_verify_email(params: {identifier: $identifier, email: $email}) {
            message
        }
    }`,
    variables: {
      email,
      identifier,
    },
  })
}

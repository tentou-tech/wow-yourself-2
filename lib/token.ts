import { cookiesInstance } from '@/services/cookies'

export const setAccessToken = (token: string) => {
  localStorage.setItem('access_token', token)
  sessionStorage.setItem('access_token', token)
  cookiesInstance.set('token', token)
}

export const getAccessToken = (): string | null => {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem('access_token') || sessionStorage.getItem('access_token') || cookiesInstance.get('token') || null

}

export const removeAccessToken = () => {
  localStorage.removeItem('access_token')
  sessionStorage.removeItem('access_token')
  cookiesInstance.remove('token')
  removeRefreshToken()
}

export const setRefreshToken = (token: string) => {
  localStorage.setItem('refresh_token', token)
}

export const getRefreshToken = (): string | null => {
  return localStorage.getItem('refresh_token') || null
}

export const removeRefreshToken = () => {
  localStorage.removeItem('refresh_token')
}
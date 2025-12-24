import { getAccessToken, getRefreshToken, removeAccessToken, setAccessToken, setRefreshToken } from '@/lib/token'
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { authorizerInstance } from './authorizer'
// Create a custom axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'https://api.punkga.me',
  // Enable cookies to be sent with requests
  // withCredentials: true,
})

// Request interceptor to attach the token to each request
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    // Get token from cookie
    const token = getAccessToken()
    // If token exists, attach it to the Authorization header
    if (token) {
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    // Handle request error
    return Promise.reject(error)
  }
)

// Response interceptor (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code within the range of 2xx triggers this function
    return response
  },
  async (error) => {
    // Handle specific error cases
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      // Handle 401 Unauthorized - token expired or invalid
      if (error.response.status == 401) {
        // Check if we've already tried to retry this request
        const refreshToken = getRefreshToken()
        if (error.config._retry || !refreshToken) {
          // We've already retried once, don't retry again
          removeAccessToken()
          return Promise.reject(error)
        }
        const data = await authorizerInstance.getToken({
          grant_type: 'refresh_token',
          refresh_token: refreshToken || '',
        })
        const newAccessToken = data?.access_token
        if (newAccessToken) {
          setAccessToken(newAccessToken)
          setRefreshToken(data.refresh_token || '')
          // Get the original request config
          const originalRequest = error.config

          // Mark this request as retried
          originalRequest._retry = true

          // Retry the original request with the new token
          return axiosInstance(originalRequest)
        } else {
          removeAccessToken()
        }
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance

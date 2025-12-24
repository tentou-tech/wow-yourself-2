'use client'

import { getAccessToken } from '@/lib/token'
import { useUserStore } from '@/stores/user-store'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginCallback() {
  const searchParams = useSearchParams()
  const { user } = useUserStore()
  const loginCallbackUrl = searchParams.get('login_callback_url')
  const tokenInCookies = getAccessToken()

  useEffect(() => {
    if (loginCallbackUrl && tokenInCookies && user) {
      window.location.href = loginCallbackUrl
    }
  }, [loginCallbackUrl, tokenInCookies, user])

  return null
}

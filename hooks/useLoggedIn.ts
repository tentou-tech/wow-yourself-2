'use client'

import { useSignInDialog } from '@/components/signin-dialog'
import { getAccessToken } from '@/lib/token'
import { useUserStore } from '@/stores/user-store'
import { useIsClient } from 'usehooks-ts'

export const useLoggedIn = (): { checkAuthHOF: (fn: () => any) => void; isLoggedIn: boolean | null } => {
  const { setOpenSignInDialog } = useSignInDialog()
  const { user } = useUserStore()
  const isClient = useIsClient()
  const checkAuthHOF = (fn: () => any) => {
    if (user) {
      fn()
    } else {
      setOpenSignInDialog(true)
    }
  }
  if (!isClient) return { checkAuthHOF, isLoggedIn: null }
  return { checkAuthHOF, isLoggedIn: !!getAccessToken() }
}

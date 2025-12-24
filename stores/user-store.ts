import { getAccessToken, removeAccessToken } from '@/lib/token'
import { User } from '@/models/user'
import { getUserProfile } from '@/services/user'
import { create } from 'zustand'

export interface UserStore {
  user: User | undefined | null
  loading: boolean
  error: string | null
  setUser: (user: User) => void
  removeUser: () => void
  fetchUserProfile: () => Promise<void>
}

export const useUserStore = create<UserStore>()((set, get) => ({
  user: undefined,
  loading: false,
  error: null,
  setUser: (user: User) => {
    set({ user })
  },
  removeUser: () => {
    removeAccessToken()
    set({ user: null })
  },
  fetchUserProfile: async () => {
    // Don't fetch if there's no token
    if (typeof window == 'undefined' || !getAccessToken()) {
      set({ user: null })
      return
    }

    set({ loading: true, error: null })
    try {
      const profile = await getUserProfile()
      if (profile) {
        set({ user: profile })
      } else {
        get().removeUser()
      }
    } catch (error: any) {
      console.error('Failed to fetch user profile:', error)
      set({ error: `Failed while fetching user profile: ${error.message}` })
      get().removeUser()
    } finally {
      set({ loading: false })
    }
  },
}))

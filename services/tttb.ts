import axiosInstance from './axios'
export interface Quest {
  id: number
  name: string | null
  description: string | null
  quests_i18n: Array<{
    data: {
      name: string
      description: string
    }
    i18n_language: {
      id: number
      description: string
      is_main: boolean
    }
  }>
  condition: Record<string, unknown>
  requirement: Record<string, unknown>
  reward: {
    xp?: number
    [key: string]: unknown
  }
  status: string
  type: string
  repeat: string
  quest_reward_claimed?: number
  created_at: string
  user_accept_quests: Array<{
    id: number
    status: string
  }>
  repeat_quests: unknown[]
  quests_quest_activities: unknown[]
  unlock: boolean
  reward_status: string
}
export const getQuests = async (): Promise<Quest[]> => {
  const res = await axiosInstance.get('/tttb/quests')
  return res.data
}
export const getCurrentRank = async (): Promise<{
  dream: number
  rank: number
  percentage: number
}> => {
  const res = await axiosInstance.get('/tttb/current-rank')
  return res.data
}

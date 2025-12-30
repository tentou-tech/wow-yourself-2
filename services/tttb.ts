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
  requirement: {
    quiz: {
      multiple_choice: Array<{
        question: string
        options: string[]
        correct_answer: string
        wrong_answer: string[]
      }>
    }
  }
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
export const getTeamPoints = async (): Promise<
  {
    id: string
    points: number
  }[]
> => {
  const res = await axiosInstance.get('/tttb/team-points')
  return res.data
}
export const giveTeamPoints = async (points: number, teamId: string) => {
  const res = await axiosInstance.post('/tttb/give-points', { points, teamId })
  return res.data
}
export const checkQuestStatus = async (questId: number, token?: string) => {
  const res = await axiosInstance.post(`/quest/${questId}/check-status`, {
    token,
  })
  return res.data
}
export const claimQuest = async (questId: number) => {
  const res = await axiosInstance.post(`/quest/${questId}/claim`)
  return res.data
}
export const getRequestLog = async (request_id: number) => {
  const res = await axiosInstance.get(`/request-log`, {
    params: { request_id },
  })
  return res.data
}
export const answerQuiz = async (questId: number, answer: string) => {
  const res = await axiosInstance.post(`/quest/${questId}/answer`, {
    answer,
  })
  return res.data
}
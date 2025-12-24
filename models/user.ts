export type User = {
  id: string
  email: string
  email_verified_at: number
  bio: string | null
  birthdate: string | null
  gender: string | null
  active_wallet_address: string
  wallet_address: string
  nickname: string
  picture: string
  signup_methods: string
  punkga_wallets: Array<{
    amount: number
    punkga_wallet_activities: Array<{
      amount: number
      type: string
      created_at: string
      story_artwork: {
        name: string
        display_url: string
        id: number
        artwork_topic: {
          distribute_reward_hash: string
        }
      }
    }>
  }>
  creator: {
    id: number
    name: string | null
    pen_name: string
    avatar_url: string
    bio: string
  }
  levels: Array<{
    xp: number
    level: number
    user_level_chain: {
      id: number
      name: string
      punkga_config: {
        explorer: {
          tx_path: string
          base_url: string
          account_path: string
        }
        reward_point_name: string
      }
    }
  }>
  authorizer_users_user_wallet: {
    address: string
  }
  user_quests_aggregate: {
    aggregate: {
      count: number
    }
  }
  user_quests: Array<{
    created_at: string
    status: string
    user_quest_rewards: Array<{
      tx_hash: string | null
    }>
    quest: {
      id: number
      name: string | null
      quests_campaign: {
        campaign_chain: {
          punkga_config: {
            explorer: {
              tx_path: string
              base_url: string
              account_path: string
            }
            reward_point_name: string
          }
        } | null
      }
      quests_i18n: Array<{
        id: number
        quest_id: number
        language_id: number
        data: {
          name: string
          description: string
        }
        i18n_language: {
          id: number
          description: string
          icon: string | null
          is_main: boolean
          symbol: string
        }
      }>
      reward: {
        xp: number
        nft?: {
          ipfs: string
          img_url: string
          img_name: string
          nft_name: string
        }
        slots?: number
      }
    }
  }>
  authorizer_users_discord_accounts: Array<any>
  authorizer_users_twitter_accounts: Array<{
    twitter_id: string
  }>
}

export type Creator = {
  id: number
  slug: string
  avatar_url: string | null
  bio: string | null
  dob: string | null
  gender: string | null
  name: string | null
  pen_name: string
  socials: Record<string, string> | null
  total_subscribers: number
  isActive: boolean
  wallet_address: string | null
  created_at: string
  manga_creators: {
    manga: {
      id: number
      slug: string
      status: string
      poster: string
      banner: string
      manga_creators: {
        creator: {
          name: string | null
          pen_name: string
          id: number
          slug: string
          isActive: boolean
        }
      }[]
      manga_total_likes?: {
        likes: number
      }
      manga_total_views?: {
        views: number
      }
      manga_tags: {
        tag: {
          tag_languages: {
            language_id: number
            value: string
          }[]
          id: number
        }
      }[]
      chapters: {
        id: number
        chapter_number: number
        chapter_name: string
      }[]
      contract_addresses: string[]
      manga_languages: {
        id: number
        is_main_language: boolean
        title: string
        description: string
        language_id: number
      }[]
    }
  }[]
}

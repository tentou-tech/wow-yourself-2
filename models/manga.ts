export type Manga = {
  id: number
  slug: string
  poster: string
  banner: string
  status: string
  release_date: string
  finished: number
  age_limit: number
  is_active: boolean
  manga_collections: any[]
  manga_creators: {
    creator: {
      id: number
      slug: string
      name: string | null
      pen_name: string
      isActive: boolean
    }
  }[]
  manga_total_likes?: {
    likes: number
  }
  manga_total_views?: {
    views: number
  }
  manga_languages: {
    title: string
    description: string
    is_main_language: boolean
    language_id: number
  }[]
  chapters_aggregate: {
    aggregate: {
      count: number
    }
  }
  chapters: {
    id: number
    chapter_number: number
    chapter_name: string
    chapter_type: string
    thumbnail_url: string
    pushlish_date: string
    status: string
    views: number
    chapter_total_likes?: {
      likes: number
    }
    chapters_likes: any[]
  }[]
  manga_subscribers_aggregate: {
    aggregate: {
      count: number
    }
  }
  manga_tags: {
    tag: {
      id: number
      tag_languages: {
        language_id: number
        value: string
      }[]
      type?: string
      icon?: string
    }
  }[]
  manga_subscribers: any[]
  manga_creator_requests: any[]
  story_mangas: {
    story_ip_asset: {
      ip_asset_id: string
    }
  }[]
}

export interface ChapterDetail {
  id: number
  chapter_number: number
  chapter_name: string
  chapter_type: string
  thumbnail_url: string
  status: string
  pushlish_date: string
  chapter_collections: any[]
  chapter_languages: {
    language_id: number
    detail: {
      name: string
      order: number
      image_path: string
    }[]
  }[]
  comments: {
    aggregate: {
      count: number
    }
  }
  views: number
  chapters_likes_aggregate: {
    aggregate: {
      count: number
    }
  }
  chapters_likes: any[]
}

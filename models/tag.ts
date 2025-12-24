export type TagLanguage = {
  id: number
  tag_id: number
  language_id: number
  value: string
}

export type Tag = {
  id: number
  created_at: string
  usage_count: number
  tag_languages: TagLanguage[]
}
export interface ChatMessage {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: number
  isStreaming?: boolean
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: number
}

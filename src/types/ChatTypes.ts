export interface ChatMessage {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: number
  isStreaming?: boolean
  sessionId: string
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: number
  userId: string
}

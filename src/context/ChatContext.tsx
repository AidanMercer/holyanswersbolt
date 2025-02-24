import React, { createContext, useState, useContext, useEffect, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { handleChatRequest } from '../server/index'
import { useAuth } from './AuthContext'

interface ChatMessage {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: number
  isStreaming?: boolean
}

interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: number
  userId: string
}

interface ChatContextType {
  currentSession: ChatSession | null
  sessions: ChatSession[]
  createNewSession: () => void
  sendMessage: (content: string) => Promise<void>
  selectSession: (sessionId: string) => void
  deleteSession: (sessionId: string) => void
}

const ChatContext = createContext<ChatContextType>({
  currentSession: null,
  sessions: [],
  createNewSession: () => {},
  sendMessage: async () => {},
  selectSession: () => {},
  deleteSession: () => {}
})

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null)
  const { currentUser } = useAuth()

  const createNewSession = useCallback(() => {
    if (!currentUser) return

    const newSession: ChatSession = {
      id: uuidv4(),
      title: `New Bible Chat ${sessions.length + 1}`,
      messages: [],
      createdAt: Date.now(),
      userId: currentUser.uid
    }

    setSessions(prev => [newSession, ...prev])
    setCurrentSession(newSession)
  }, [sessions, currentUser])

  const sendMessage = useCallback(async (content: string) => {
    if (!currentSession || !currentUser) return

    // Add user message
    const userMessage: ChatMessage = {
      id: uuidv4(),
      content,
      sender: 'user',
      timestamp: Date.now()
    }

    // Update session with user message
    const updatedSession = {
      ...currentSession,
      messages: [...currentSession.messages, userMessage]
    }

    setCurrentSession(updatedSession)
    setSessions(prev => 
      prev.map(session => 
        session.id === currentSession.id ? updatedSession : session
      )
    )

    try {
      // Send message to Genkit AI
      const response = await handleChatRequest(currentUser.uid, content)

      // Add AI response
      const aiMessage: ChatMessage = {
        id: uuidv4(),
        content: response.text || 'No response generated.',
        sender: 'ai',
        timestamp: Date.now()
      }

      const finalSession = {
        ...updatedSession,
        messages: [...updatedSession.messages, aiMessage]
      }

      setCurrentSession(finalSession)
      setSessions(prev => 
        prev.map(session => 
          session.id === currentSession.id ? finalSession : session
        )
      )
    } catch (error) {
      console.error('Error sending message:', error)
      
      const errorMessage: ChatMessage = {
        id: uuidv4(),
        content: 'Sorry, there was an error processing your request.',
        sender: 'ai',
        timestamp: Date.now()
      }

      const finalSession = {
        ...updatedSession,
        messages: [...updatedSession.messages, errorMessage]
      }

      setCurrentSession(finalSession)
      setSessions(prev => 
        prev.map(session => 
          session.id === currentSession.id ? finalSession : session
        )
      )
    }
  }, [currentSession, currentUser])

  const selectSession = useCallback((sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId)
    if (session) {
      setCurrentSession(session)
    }
  }, [sessions])

  const deleteSession = useCallback((sessionId: string) => {
    setSessions(prev => {
      const updatedSessions = prev.filter(s => s.id !== sessionId)
      
      if (currentSession?.id === sessionId) {
        setCurrentSession(updatedSessions.length > 0 ? updatedSessions[0] : null)
      }
      
      return updatedSessions
    })
  }, [currentSession])

  // Initialize first session on user login
  useEffect(() => {
    if (currentUser && sessions.length === 0) {
      createNewSession()
    }
  }, [currentUser, createNewSession, sessions.length])

  return (
    <ChatContext.Provider value={{
      currentSession,
      sessions,
      createNewSession,
      sendMessage,
      selectSession,
      deleteSession
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)

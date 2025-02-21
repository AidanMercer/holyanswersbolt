import React, { createContext, useState, useContext, useCallback } from 'react'
import { ChatSession, ChatMessage } from '../types/ChatTypes'
import { v4 as uuidv4 } from 'uuid'

interface ChatContextType {
  currentSession: ChatSession | null
  sessions: ChatSession[]
  createNewSession: () => void
  addMessage: (content: string, sender: 'user' | 'ai') => void
  selectSession: (sessionId: string) => void
}

const ChatContext = createContext<ChatContextType>({
  currentSession: null,
  sessions: [],
  createNewSession: () => {},
  addMessage: () => {},
  selectSession: () => {}
})

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null)

  const createNewSession = useCallback(() => {
    const newSession: ChatSession = {
      id: uuidv4(),
      title: `New Chat ${sessions.length + 1}`,
      messages: [],
      createdAt: Date.now()
    }
    setSessions(prev => [...prev, newSession])
    setCurrentSession(newSession)
  }, [sessions])

  const addMessage = useCallback((content: string, sender: 'user' | 'ai') => {
    if (!currentSession) {
      createNewSession()
    }

    const newMessage: ChatMessage = {
      id: uuidv4(),
      content,
      sender,
      timestamp: Date.now()
    }

    setSessions(prev => 
      prev.map(session => 
        session.id === currentSession?.id 
          ? { ...session, messages: [...session.messages, newMessage] }
          : session
      )
    )

    setCurrentSession(prev => 
      prev ? { ...prev, messages: [...prev.messages, newMessage] } : null
    )
  }, [currentSession, createNewSession])

  const selectSession = useCallback((sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId)
    if (session) {
      setCurrentSession(session)
    }
  }, [sessions])

  return (
    <ChatContext.Provider value={{
      currentSession,
      sessions,
      createNewSession,
      addMessage,
      selectSession
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)

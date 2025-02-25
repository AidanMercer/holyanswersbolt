import React, { createContext, useState, useContext, useCallback, useEffect } from 'react'
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  getDocs, 
  updateDoc,
  orderBy
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './AuthContext'
import { ChatSession, ChatMessage } from '../types/ChatTypes'

// Create a default empty session
const DEFAULT_SESSION: ChatSession = {
  id: '',
  title: 'New Chat',
  messages: [],
  createdAt: Date.now(),
  userId: ''
}

interface ChatContextType {
  currentSession: ChatSession | null
  sessions: ChatSession[]
  addMessage: (content: string, sender: 'user' | 'ai', isStreaming?: boolean) => void
  updateStreamingMessage: (content: string) => void
  createNewSession: () => void
  selectSession: (sessionId: string) => void
  deleteSession: (sessionId: string) => void
}

const ChatContext = createContext<ChatContextType>({
  currentSession: null,
  sessions: [],
  addMessage: () => {},
  updateStreamingMessage: () => {},
  createNewSession: () => {},
  selectSession: () => {},
  deleteSession: () => {}
})

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(DEFAULT_SESSION)
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const { currentUser } = useAuth()

  const createNewSession = useCallback(() => {
    const newSession: ChatSession = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      createdAt: Date.now(),
      userId: currentUser?.uid || ''
    }

    setSessions(prevSessions => [...prevSessions, newSession])
    setCurrentSession(newSession)
  }, [currentUser])

  const selectSession = useCallback((sessionId: string) => {
    const selectedSession = sessions.find(session => session.id === sessionId)
    if (selectedSession) {
      setCurrentSession(selectedSession)
    }
  }, [sessions])

  const deleteSession = useCallback((sessionId: string) => {
    setSessions(prevSessions => prevSessions.filter(session => session.id !== sessionId))
    
    // If the deleted session was the current session, reset to default or first session
    if (currentSession?.id === sessionId) {
      const remainingSessions = sessions.filter(session => session.id !== sessionId)
      setCurrentSession(remainingSessions.length > 0 ? remainingSessions[0] : DEFAULT_SESSION)
    }
  }, [currentSession, sessions])

  const addMessage = useCallback((content: string, sender: 'user' | 'ai', isStreaming = false) => {
    if (!currentSession) {
      createNewSession()
    }

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: Date.now(),
      isStreaming,
      sessionId: currentSession?.id || ''
    }

    setCurrentSession(prev => prev ? {
      ...prev,
      messages: [...prev.messages, newMessage]
    } : null)

    // Update the sessions list
    setSessions(prevSessions => 
      prevSessions.map(session => 
        session.id === currentSession?.id 
          ? { ...session, messages: [...(session.messages || []), newMessage] } 
          : session
      )
    )
  }, [currentSession, createNewSession])

  const updateStreamingMessage = useCallback((content: string) => {
    if (!currentSession) return

    setCurrentSession(prev => {
      if (!prev) return null

      const updatedMessages = [...prev.messages]
      const lastMessageIndex = updatedMessages.length - 1

      if (lastMessageIndex >= 0) {
        updatedMessages[lastMessageIndex] = {
          ...updatedMessages[lastMessageIndex],
          content,
          isStreaming: content.length > 0
        }
      }

      return {
        ...prev,
        messages: updatedMessages
      }
    })

    // Update the sessions list
    setSessions(prevSessions => 
      prevSessions.map(session => 
        session.id === currentSession.id 
          ? { 
              ...session, 
              messages: session.messages.map((msg, index) => 
                index === session.messages.length - 1 
                  ? { ...msg, content, isStreaming: content.length > 0 } 
                  : msg
              ) 
            } 
          : session
      )
    )
  }, [currentSession])

  return (
    <ChatContext.Provider value={{ 
      currentSession, 
      sessions,
      addMessage, 
      updateStreamingMessage,
      createNewSession,
      selectSession,
      deleteSession
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}

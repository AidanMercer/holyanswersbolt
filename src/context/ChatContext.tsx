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
  addMessage: (content: string, sender: 'user' | 'ai', isStreaming?: boolean) => void
  updateStreamingMessage: (content: string) => void
  // Add other methods as needed
}

const ChatContext = createContext<ChatContextType>({
  currentSession: null,
  addMessage: () => {},
  updateStreamingMessage: () => {}
})

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(DEFAULT_SESSION)
  const { currentUser } = useAuth()

  const addMessage = useCallback((content: string, sender: 'user' | 'ai', isStreaming = false) => {
    if (!currentSession) {
      // Initialize a new session if none exists
      setCurrentSession({
        id: Date.now().toString(),
        title: 'New Chat',
        messages: [],
        createdAt: Date.now(),
        userId: currentUser?.uid || ''
      })
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
  }, [currentSession, currentUser])

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
  }, [currentSession])

  return (
    <ChatContext.Provider value={{ 
      currentSession, 
      addMessage, 
      updateStreamingMessage 
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

import React, { createContext, useState, useContext, useCallback, useEffect } from 'react'
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  orderBy,
  onSnapshot
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './AuthContext'
import { ChatSession, ChatMessage } from '../types/ChatTypes'
import { v4 as uuidv4 } from 'uuid'

interface ChatContextType {
  currentSession: ChatSession | null
  sessions: ChatSession[]
  createNewSession: () => void
  addMessage: (content: string, sender: 'user' | 'ai', isStreaming?: boolean) => void
  updateStreamingMessage: (content: string) => void
  selectSession: (sessionId: string) => void
  deleteSession: (sessionId: string) => void
}

const ChatContext = createContext<ChatContextType>({
  currentSession: null,
  sessions: [],
  createNewSession: () => {},
  addMessage: () => {},
  updateStreamingMessage: () => {},
  selectSession: () => {},
  deleteSession: () => {}
})

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sessions, setSessions] = useState<ChatSession[]>([
    {
      id: uuidv4(),
      title: 'New Chat',
      messages: [],
      createdAt: Date.now()
    }
  ])
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(sessions[0])
  const { currentUser } = useAuth()

  // Save to Firestore when a message is added
  const saveMessageToFirestore = useCallback(async (session: ChatSession, message: ChatMessage) => {
    if (!currentUser) {
      console.warn('No authenticated user. Skipping Firestore save.')
      return
    }

    try {
      await addDoc(collection(db, 'chatHistory'), {
        userId: currentUser.uid,
        sessionId: session.id,
        message: {
          id: message.id,
          content: message.content,
          sender: message.sender,
          timestamp: message.timestamp,
          isStreaming: message.isStreaming || false
        },
        createdAt: Date.now()
      })
    } catch (error) {
      console.error('Error saving message to Firestore:', error)
      // Optionally, you could add more detailed error handling here
      // For example, checking if the error is due to authentication
    }
  }, [currentUser])

  // Rest of the code remains the same...

  return (
    <ChatContext.Provider value={{
      currentSession,
      sessions,
      createNewSession,
      addMessage,
      updateStreamingMessage,
      selectSession,
      deleteSession
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)

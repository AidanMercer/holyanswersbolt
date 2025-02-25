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
    if (!currentUser) return

    try {
      await addDoc(collection(db, 'chatHistory'), {
        userId: currentUser.uid,
        sessionId: session.id,
        message: message,
        createdAt: Date.now()
      })
    } catch (error) {
      console.error('Error saving message to Firestore:', error)
    }
  }, [currentUser])

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

  const addMessage = useCallback((content: string, sender: 'user' | 'ai', isStreaming: boolean = false) => {
    if (!currentSession) {
      createNewSession()
    }

    const newMessage: ChatMessage = {
      id: uuidv4(),
      content,
      sender,
      timestamp: Date.now(),
      isStreaming: isStreaming
    }

    // Save to Firestore
    if (currentSession) {
      saveMessageToFirestore(currentSession, newMessage)
    }

    setSessions(prev => 
      prev.map(session => 
        session.id === currentSession?.id 
          ? { 
              ...session, 
              messages: [...session.messages, newMessage]
            }
          : session
      )
    )

    setCurrentSession(prev => 
      prev ? { 
        ...prev, 
        messages: [...prev.messages, newMessage]
      } : null
    )
  }, [currentSession, createNewSession, saveMessageToFirestore])

  const updateStreamingMessage = useCallback((content: string) => {
    setSessions(prev => 
      prev.map(session => {
        if (session.id === currentSession?.id) {
          const updatedMessages = [...session.messages]
          const lastMessageIndex = updatedMessages.length - 1
          
          if (lastMessageIndex >= 0 && updatedMessages[lastMessageIndex].sender === 'ai') {
            updatedMessages[lastMessageIndex] = {
              ...updatedMessages[lastMessageIndex],
              content: content
            }
          }
          
          return { ...session, messages: updatedMessages }
        }
        return session
      })
    )

    setCurrentSession(prev => {
      if (!prev) return null
      
      const updatedMessages = [...prev.messages]
      const lastMessageIndex = updatedMessages.length - 1
      
      if (lastMessageIndex >= 0 && updatedMessages[lastMessageIndex].sender === 'ai') {
        updatedMessages[lastMessageIndex] = {
          ...updatedMessages[lastMessageIndex],
          content: content
        }
      }
      
      return { ...prev, messages: updatedMessages }
    })
  }, [currentSession])

  const selectSession = useCallback((sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId)
    if (session) {
      setCurrentSession(session)
    }
  }, [sessions])

  const deleteSession = useCallback((sessionId: string) => {
    setSessions(prev => {
      const updatedSessions = prev.filter(s => s.id !== sessionId)
      
      // If the deleted session was the current session, select another or create new
      if (currentSession?.id === sessionId) {
        if (updatedSessions.length > 0) {
          setCurrentSession(updatedSessions[0])
        } else {
          createNewSession()
        }
      }
      
      return updatedSessions
    })
  }, [currentSession, createNewSession])

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

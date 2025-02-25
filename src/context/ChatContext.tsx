import React, { createContext, useState, useContext, useCallback, useEffect } from 'react'
import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  orderBy,
  onSnapshot,
  getFirestore,
  writeBatch
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
      createdAt: Date.now(),
      userId: '' 
    }
  ])
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(sessions[0])
  const { currentUser } = useAuth()

  // Enhanced logging function
  const logError = (message: string, error?: any) => {
    console.error(`[ChatContext Error] ${message}`, error)
  }

  // Update streaming message
  const updateStreamingMessage = useCallback((content: string) => {
    setCurrentSession(prevSession => {
      if (!prevSession) return null

      // Find the last message (which should be the streaming AI message)
      const updatedMessages = [...prevSession.messages]
      if (updatedMessages.length > 0) {
        const lastMessageIndex = updatedMessages.length - 1
        const lastMessage = updatedMessages[lastMessageIndex]

        // Only update if it's an AI streaming message
        if (lastMessage.sender === 'ai' && lastMessage.isStreaming) {
          updatedMessages[lastMessageIndex] = {
            ...lastMessage,
            content: content
          }
        }

        return {
          ...prevSession,
          messages: updatedMessages
        }
      }

      return prevSession
    })
  }, [])

  // Create a new session
  const createNewSession = useCallback(() => {
    if (!currentUser) {
      logError('Cannot create session: No authenticated user')
      return null
    }

    const newSession: ChatSession = {
      id: uuidv4(),
      title: 'New Chat',
      messages: [],
      createdAt: Date.now(),
      userId: currentUser.uid
    }

    setSessions(prevSessions => [...prevSessions, newSession])
    setCurrentSession(newSession)
    return newSession
  }, [currentUser])

  // Save to Firestore when a message is added
  const saveMessageToFirestore = useCallback(async (session: ChatSession, message: ChatMessage) => {
    if (!currentUser) {
      logError('Cannot save message: No authenticated user')
      return false
    }

    try {
      const firestore = getFirestore()
      const batch = writeBatch(firestore)
      
      // Create or update the session document first
      const sessionRef = doc(firestore, 'chatSessions', session.id)
      batch.set(sessionRef, {
        id: session.id,
        title: session.title,
        createdAt: session.createdAt,
        userId: currentUser.uid
      }, { merge: true })

      // Reference to the messages subcollection within a session document
      const messageRef = doc(collection(sessionRef, 'messages'), message.id)

      // Batch write the message
      batch.set(messageRef, {
        id: message.id,
        content: message.content,
        sender: message.sender,
        timestamp: message.timestamp,
        isStreaming: message.isStreaming || false,
        userId: currentUser.uid
      })

      // Commit the batch
      await batch.commit()

      console.log('Message saved successfully:', message.id)
      return true
    } catch (error) {
      logError('Error saving message to Firestore', error)
      return false
    }
  }, [currentUser])

  // Add a message to the current session
  const addMessage = useCallback((content: string, sender: 'user' | 'ai', isStreaming?: boolean) => {
    if (!currentUser) {
      logError('Cannot add message: No authenticated user')
      return
    }

    // Ensure we have a current session
    const activeSession = currentSession || createNewSession()
    if (!activeSession) return

    const newMessage: ChatMessage = {
      id: uuidv4(),
      content,
      sender,
      timestamp: Date.now(),
      isStreaming: isStreaming || false,
      sessionId: activeSession.id
    }

    // Optimistically update local state
    setCurrentSession(prevSession => {
      if (!prevSession) return null
      const updatedSession = {
        ...prevSession,
        messages: [...prevSession.messages, newMessage]
      }
      
      // Attempt to save to Firestore (async)
      saveMessageToFirestore(updatedSession, newMessage)
      
      return updatedSession
    })
  }, [currentSession, createNewSession, saveMessageToFirestore, currentUser])

  // Placeholder implementations for other methods
  const selectSession = useCallback((sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId)
    if (session) {
      setCurrentSession(session)
    }
  }, [sessions])

  const deleteSession = useCallback((sessionId: string) => {
    setSessions(prevSessions => prevSessions.filter(s => s.id !== sessionId))
    if (currentSession?.id === sessionId) {
      setCurrentSession(null)
    }
  }, [currentSession])

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

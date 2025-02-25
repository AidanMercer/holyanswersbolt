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
  orderBy,
  onSnapshot,
  limit
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './AuthContext'
import { ChatSession, ChatMessage } from '../types/ChatTypes'

interface ChatContextType {
  currentSession: ChatSession | null
  sessions: ChatSession[]
  addMessage: (content: string, sender: 'user' | 'ai', isStreaming?: boolean) => Promise<void>
  updateStreamingMessage: (content: string) => Promise<void>
  createNewSession: () => Promise<ChatSession>
  selectSession: (sessionId: string) => void
  deleteSession: (sessionId: string) => Promise<void>
  isLoading: boolean
}

const ChatContext = createContext<ChatContextType>({
  currentSession: null,
  sessions: [],
  addMessage: async () => {},
  updateStreamingMessage: async () => {},
  createNewSession: async () => ({ id: '', title: '', messages: [], createdAt: 0, userId: '' }),
  selectSession: () => {},
  deleteSession: async () => {},
  isLoading: true
})

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null)
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { currentUser } = useAuth()

  // Fetch sessions from Firestore
  useEffect(() => {
    if (!currentUser) {
      setSessions([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)
    
    // Create a query to fetch sessions for the current user
    const sessionsRef = collection(db, 'chatSessions')
    const userSessionsQuery = query(
      sessionsRef, 
      where('userId', '==', currentUser.uid),
      orderBy('createdAt', 'desc'),
      limit(5)  // Limit to prevent excessive sessions
    )

    // Set up real-time listener
    const unsubscribe = onSnapshot(userSessionsQuery, async (snapshot) => {
      const fetchedSessions = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as ChatSession))

      console.log('Fetched Sessions:', fetchedSessions)

      // Remove duplicate or empty sessions
      const uniqueSessions = fetchedSessions.filter((session, index, self) => 
        index === self.findIndex((t) => t.id === session.id && t.messages.length > 0)
      )

      setSessions(uniqueSessions)

      // If no current session is set, create a new one or select the first
      if (!currentSession) {
        if (uniqueSessions.length > 0) {
          setCurrentSession(uniqueSessions[0])
        } else {
          const newSession = await createNewSession()
          setCurrentSession(newSession)
        }
      }

      setIsLoading(false)
    }, (error) => {
      console.error('Error fetching sessions:', error)
      setIsLoading(false)
    })

    // Cleanup subscription
    return () => unsubscribe()
  }, [currentUser])

  const createNewSession = useCallback(async () => {
    if (!currentUser) throw new Error('No current user')

    const newSession: Omit<ChatSession, 'id'> = {
      title: 'New Chat',
      messages: [],
      createdAt: Date.now(),
      userId: currentUser.uid
    }

    try {
      // Add new session to Firestore
      const docRef = await addDoc(collection(db, 'chatSessions'), newSession)
      
      const fullNewSession: ChatSession = {
        id: docRef.id,
        ...newSession
      }

      // Update local state
      setSessions(prevSessions => {
        // Remove any existing empty sessions
        const filteredSessions = prevSessions.filter(s => s.messages.length > 0)
        return [fullNewSession, ...filteredSessions]
      })

      return fullNewSession
    } catch (error) {
      console.error('Error creating new session:', error)
      throw error
    }
  }, [currentUser])

  const selectSession = useCallback((sessionId: string) => {
    const selectedSession = sessions.find(session => session.id === sessionId)
    if (selectedSession) {
      setCurrentSession(selectedSession)
    }
  }, [sessions])

  const deleteSession = useCallback(async (sessionId: string) => {
    if (!currentUser) return

    try {
      // Delete from Firestore
      await deleteDoc(doc(db, 'chatSessions', sessionId))

      // Update local state
      const remainingSessions = sessions.filter(session => session.id !== sessionId)
      setSessions(remainingSessions)

      // Update current session
      if (currentSession?.id === sessionId) {
        setCurrentSession(remainingSessions.length > 0 ? remainingSessions[0] : null)
      }
    } catch (error) {
      console.error('Error deleting session:', error)
    }
  }, [currentSession, sessions, currentUser])

  const addMessage = useCallback(async (content: string, sender: 'user' | 'ai', isStreaming = false) => {
    if (!currentSession || !currentUser) {
      console.error('Cannot add message: No current session or user')
      return
    }

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: Date.now(),
      isStreaming,
      sessionId: currentSession.id
    }

    console.log('Adding Message:', newMessage)

    try {
      // Update the session in Firestore
      const sessionRef = doc(db, 'chatSessions', currentSession.id)
      await updateDoc(sessionRef, {
        messages: [...(currentSession.messages || []), newMessage]
      })

      // Optimistically update local state
      setCurrentSession(prev => {
        if (!prev) return null
        const updatedMessages = [...prev.messages, newMessage]
        console.log('Updated Messages:', updatedMessages)
        return {
          ...prev,
          messages: updatedMessages
        }
      })
    } catch (error) {
      console.error('Error adding message:', error)
    }
  }, [currentSession, currentUser])

  const updateStreamingMessage = useCallback(async (content: string) => {
    if (!currentSession || !currentUser) {
      console.error('Cannot update streaming message: No current session or user')
      return
    }

    try {
      // Create a copy of messages
      const updatedMessages = [...currentSession.messages]
      const lastMessageIndex = updatedMessages.length - 1

      if (lastMessageIndex >= 0) {
        updatedMessages[lastMessageIndex] = {
          ...updatedMessages[lastMessageIndex],
          content,
          isStreaming: content.length > 0
        }
      }

      console.log('Updating Streaming Message:', updatedMessages)

      // Update Firestore
      const sessionRef = doc(db, 'chatSessions', currentSession.id)
      await updateDoc(sessionRef, { messages: updatedMessages })

      // Update local state
      setCurrentSession(prev => {
        if (!prev) return null
        return {
          ...prev,
          messages: updatedMessages
        }
      })
    } catch (error) {
      console.error('Error updating streaming message:', error)
    }
  }, [currentSession, currentUser])

  return (
    <ChatContext.Provider value={{ 
      currentSession, 
      sessions,
      addMessage, 
      updateStreamingMessage,
      createNewSession,
      selectSession,
      deleteSession,
      isLoading
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

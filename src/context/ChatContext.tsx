import React, { 
  createContext, 
  useState, 
  useContext, 
  useCallback, 
  useEffect 
} from 'react'
import { 
  collection, 
  query, 
  where, 
  orderBy, 
  getDocs, 
  addDoc, 
  serverTimestamp 
} from 'firebase/firestore'
import { firestore } from '../firebase'
import { ChatMessage, ChatSession } from '../types/ChatTypes'
import { useAuth } from './AuthContext'

// Create the context
const ChatContext = createContext<{
  currentSession: ChatSession | null
  sessions: ChatSession[]
  addMessage: (content: string, sender: 'user' | 'ai', isStreaming?: boolean) => void
  createNewSession: () => Promise<void>
  setSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>
  setCurrentSession: React.Dispatch<React.SetStateAction<ChatSession | null>>
}>({
  currentSession: null,
  sessions: [],
  addMessage: () => {},
  createNewSession: async () => {},
  setSessions: () => {},
  setCurrentSession: () => {}
})

// Provider component
export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth()
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null)

  // Create a new chat session
  const createNewSession = useCallback(async () => {
    if (!currentUser) return

    try {
      const newSessionRef = await addDoc(collection(firestore, 'chatSessions'), {
        userId: currentUser.uid,
        title: 'New Chat',
        createdAt: serverTimestamp()
      })

      const newSession: ChatSession = {
        id: newSessionRef.id,
        userId: currentUser.uid,
        title: 'New Chat',
        messages: [],
        createdAt: Date.now()
      }

      setSessions(prevSessions => [newSession, ...prevSessions])
      setCurrentSession(newSession)
    } catch (error) {
      console.error('Error creating new session:', error)
    }
  }, [currentUser])

  // Add a message to the current session
  const addMessage = useCallback(async (
    content: string, 
    sender: 'user' | 'ai', 
    isStreaming = false
  ) => {
    if (!currentSession || !currentUser) return

    const newMessage: ChatMessage = {
      id: `temp_${Date.now()}`,
      content,
      sender,
      timestamp: Date.now(),
      sessionId: currentSession.id,
      isStreaming
    }

    // Optimistically update local state
    setCurrentSession(prev => {
      if (!prev) return null
      
      const updatedMessages = isStreaming 
        ? [...prev.messages.filter(m => !m.isStreaming), newMessage]
        : [...prev.messages.filter(m => !m.isStreaming), { ...newMessage, isStreaming: false }]
      
      return { ...prev, messages: updatedMessages }
    })

    // If not streaming, save to Firestore
    if (!isStreaming) {
      try {
        await addDoc(collection(firestore, 'messages'), {
          ...newMessage,
          isStreaming: false
        })
      } catch (error) {
        console.error('Error saving message:', error)
      }
    }
  }, [currentSession, currentUser])

  // Load user sessions
  const loadUserSessions = useCallback(async () => {
    if (!currentUser) return

    try {
      const sessionsQuery = query(
        collection(firestore, 'chatSessions'), 
        where('userId', '==', currentUser.uid),
        orderBy('createdAt', 'desc')
      )
      const sessionSnapshot = await getDocs(sessionsQuery)
      
      const userSessions: ChatSession[] = await Promise.all(
        sessionSnapshot.docs.map(async (sessionDoc) => {
          const sessionData = { 
            id: sessionDoc.id, 
            ...sessionDoc.data() 
          } as ChatSession

          const messagesQuery = query(
            collection(firestore, 'messages'), 
            where('sessionId', '==', sessionDoc.id),
            orderBy('timestamp', 'asc')
          )
          const messagesSnapshot = await getDocs(messagesQuery)
          
          sessionData.messages = messagesSnapshot.docs.map(messageDoc => ({
            id: messageDoc.id,
            ...messageDoc.data()
          } as ChatMessage))

          return sessionData
        })
      )

      setSessions(userSessions)
      
      if (userSessions.length > 0) {
        setCurrentSession(userSessions[0])
      } else {
        createNewSession()
      }
    } catch (error) {
      console.error('Error loading user sessions:', {
        message: error.message,
        code: error.code,
        stack: error.stack
      })
    }
  }, [currentUser, createNewSession])

  // Load sessions on user change
  useEffect(() => {
    if (currentUser) {
      loadUserSessions()
    }
  }, [currentUser, loadUserSessions])

  // Context value
  const contextValue = {
    currentSession,
    sessions,
    addMessage,
    createNewSession,
    setSessions,
    setCurrentSession
  }

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  )
}

// Custom hook to use the chat context
export const useChat = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}

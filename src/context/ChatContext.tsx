import React, { 
  createContext, 
  useState, 
  useContext, 
  useCallback, 
  useRef 
} from 'react'
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  orderBy,
  doc,
  getDoc
} from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './AuthContext'
import { ChatSession } from '../types/ChatTypes'

// Create the context
const ChatContext = createContext<{
  sessions: ChatSession[];
  currentSession: ChatSession | null;
  createNewSession: () => Promise<ChatSession | null>;
  loadSessions: () => Promise<void>;
  selectSession: (sessionId: string) => Promise<void>;
  deleteSession: (sessionId: string) => Promise<void>;
  setCurrentSession: React.Dispatch<React.SetStateAction<ChatSession | null>>;
} | undefined>(undefined)

// Provider component
export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null)
  const { currentUser } = useAuth()
  const sessionsRef = useRef<ChatSession[]>([])

  const createNewSession = useCallback(async () => {
    if (!currentUser) {
      console.error('No authenticated user')
      return null
    }

    const newSession: Omit<ChatSession, 'id'> = {
      title: `New Chat ${sessionsRef.current.length + 1}`,
      messages: [],
      createdAt: Date.now(),
      userId: currentUser.uid
    }

    try {
      const docRef = await addDoc(collection(db, 'chatSessions'), newSession)
      const fullNewSession = { 
        ...newSession, 
        id: docRef.id 
      } as ChatSession

      setSessions(prev => {
        const updatedSessions = [fullNewSession, ...prev]
        sessionsRef.current = updatedSessions
        return updatedSessions
      })
      
      setCurrentSession(fullNewSession)
      return fullNewSession
    } catch (error) {
      console.error('Error creating new session:', error)
      alert('Failed to create a new chat session. Please check your authentication.')
      return null
    }
  }, [currentUser])

  const selectSession = useCallback(async (sessionId: string) => {
    if (!currentUser) {
      console.error('No authenticated user')
      return
    }

    try {
      // Find the session in the existing sessions
      const selectedSession = sessions.find(session => session.id === sessionId)
      
      if (selectedSession) {
        setCurrentSession(selectedSession)
        return
      }

      // If not found, fetch from Firestore
      const sessionDocRef = doc(db, 'chatSessions', sessionId)
      const sessionDoc = await getDoc(sessionDocRef)

      if (sessionDoc.exists()) {
        const sessionData = {
          id: sessionDoc.id,
          ...sessionDoc.data()
        } as ChatSession

        setCurrentSession(sessionData)
      } else {
        console.error('No such session exists')
      }
    } catch (error) {
      console.error('Error selecting session:', error)
      alert('Failed to select chat session. Please try again.')
    }
  }, [sessions, currentUser])

  const deleteSession = useCallback(async (sessionId: string) => {
    if (!currentUser) {
      console.error('No authenticated user')
      return
    }

    try {
      // Remove from Firestore
      const sessionDocRef = doc(db, 'chatSessions', sessionId)
      await sessionDocRef.delete()

      // Update local state
      const updatedSessions = sessions.filter(session => session.id !== sessionId)
      setSessions(updatedSessions)
      sessionsRef.current = updatedSessions

      // If the deleted session was the current session, select another or create new
      if (currentSession?.id === sessionId) {
        if (updatedSessions.length > 0) {
          setCurrentSession(updatedSessions[0])
        } else {
          await createNewSession()
        }
      }
    } catch (error) {
      console.error('Error deleting session:', error)
      alert('Failed to delete chat session. Please try again.')
    }
  }, [sessions, currentSession, currentUser, createNewSession])

  const loadSessions = useCallback(async () => {
    if (!currentUser) {
      console.error('No authenticated user')
      return
    }

    try {
      const q = query(
        collection(db, 'chatSessions'), 
        where('userId', '==', currentUser.uid),
        orderBy('createdAt', 'desc')
      )
      const querySnapshot = await getDocs(q)
      
      const loadedSessions = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as ChatSession))

      setSessions(loadedSessions)
      sessionsRef.current = loadedSessions
      
      // Set the first session as current if exists
      if (loadedSessions.length > 0) {
        setCurrentSession(loadedSessions[0])
      } else {
        await createNewSession()
      }
    } catch (error) {
      console.error('Error loading sessions:', error)
      alert('Failed to load chat sessions. Please check your authentication.')
    }
  }, [currentUser, createNewSession])

  // Provide the context value
  const contextValue = {
    sessions,
    currentSession,
    createNewSession,
    loadSessions,
    selectSession,
    deleteSession,
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
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider')
  }
  return context
}

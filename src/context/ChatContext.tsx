import React, { createContext, useState, useContext, useCallback, useEffect } from 'react'
import { ChatSession, ChatMessage } from '../types/ChatTypes'
import { v4 as uuidv4 } from 'uuid'
import { 
  db, 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  query, 
  where,
  deleteDoc,
  orderBy
} from '../firebase'
import { useAuth } from './AuthContext'

interface ChatContextType {
  currentSession: ChatSession | null
  sessions: ChatSession[]
  createNewSession: () => void
  addMessage: (content: string, sender: 'user' | 'ai', isStreaming?: boolean) => void
  updateStreamingMessage: (content: string) => void
  selectSession: (sessionId: string) => void
  deleteSession: (sessionId: string) => void
  saveCurrentSession: () => Promise<void>
  loadUserSessions: () => Promise<void>
}

const ChatContext = createContext<ChatContextType>({
  currentSession: null,
  sessions: [],
  createNewSession: () => {},
  addMessage: () => {},
  updateStreamingMessage: () => {},
  selectSession: () => {},
  deleteSession: () => {},
  saveCurrentSession: async () => {},
  loadUserSessions: async () => {}
})

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth()
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null)

  // Load user sessions on mount or user change
  useEffect(() => {
    if (currentUser) {
      loadUserSessions()
    } else {
      setSessions([])
      setCurrentSession(null)
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
    return newSession
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
  }, [currentSession, createNewSession])

  const updateStreamingMessage = useCallback((content: string) => {
    setSessions(prev => 
      prev.map(session => {
        if (session.id === currentSession?.id) {
          const updatedMessages = [...session.messages]
          const lastMessageIndex = updatedMessages.length - 1
          
          if (lastMessageIndex >= 0 && updatedMessages[lastMessageIndex].sender === 'ai') {
            updatedMessages[lastMessageIndex] = {
              ...updatedMessages[lastMessageIndex],
              content: content,
              isStreaming: content.length > 0
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
          content: content,
          isStreaming: content.length > 0
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

  const deleteSession = useCallback(async (sessionId: string) => {
    // Delete from Firestore if user is logged in
    if (currentUser) {
      try {
        await deleteDoc(doc(db, 'chatSessions', sessionId))
      } catch (error) {
        console.error('Error deleting session:', error)
      }
    }

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
  }, [currentSession, createNewSession, currentUser])

  const saveCurrentSession = useCallback(async () => {
    if (!currentUser || !currentSession) return

    try {
      // Ensure the session has a title (use first message or default)
      const sessionTitle = currentSession.messages.length > 0 
        ? currentSession.messages[0].content.substring(0, 50) 
        : 'New Chat'

      // Save to Firestore
      await setDoc(doc(db, 'chatSessions', currentSession.id), {
        id: currentSession.id,
        title: sessionTitle,
        userId: currentUser.uid,
        messages: currentSession.messages,
        createdAt: currentSession.createdAt
      })
    } catch (error) {
      console.error('Error saving session:', error)
    }
  }, [currentUser, currentSession])

  const loadUserSessions = useCallback(async () => {
    if (!currentUser) return

    try {
      // Query Firestore for user's chat sessions
      const q = query(
        collection(db, 'chatSessions'), 
        where('userId', '==', currentUser.uid),
        orderBy('createdAt', 'desc')
      )
      
      const querySnapshot = await getDocs(q)
      
      const loadedSessions: ChatSession[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        messages: doc.data().messages,
        createdAt: doc.data().createdAt
      }))

      // If no sessions exist, create a new one
      if (loadedSessions.length === 0) {
        const newSession = createNewSession()
        await saveCurrentSession()
      } else {
        setSessions(loadedSessions)
        setCurrentSession(loadedSessions[0])
      }
    } catch (error) {
      console.error('Error loading sessions:', error)
      // Fallback to creating a new session
      createNewSession()
    }
  }, [currentUser, createNewSession, saveCurrentSession])

  // Auto-save current session when messages change
  useEffect(() => {
    if (currentSession && currentUser) {
      // Debounce save to avoid too frequent writes
      const timer = setTimeout(() => {
        saveCurrentSession()
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [currentSession?.messages, currentUser, saveCurrentSession])

  return (
    <ChatContext.Provider value={{
      currentSession,
      sessions,
      createNewSession,
      addMessage,
      updateStreamingMessage,
      selectSession,
      deleteSession,
      saveCurrentSession,
      loadUserSessions
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)

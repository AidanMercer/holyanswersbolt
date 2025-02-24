import React, { createContext, useState, useContext, useEffect, useCallback } from 'react'
import { 
  db, 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc,
  orderBy
} from '../firebase'
import { ChatSession, ChatMessage } from '../types/ChatTypes'
import { v4 as uuidv4 } from 'uuid'
import { useAuth } from './AuthContext'

interface ChatContextType {
  currentSession: ChatSession | null
  sessions: ChatSession[]
  createNewSession: () => void
  addMessage: (content: string, sender: 'user' | 'ai', isStreaming?: boolean) => void
  updateStreamingMessage: (content: string) => void
  selectSession: (sessionId: string) => void
  deleteSession: (sessionId: string) => void
  loadSessions: () => Promise<void>
}

const ChatContext = createContext<ChatContextType>({
  currentSession: null,
  sessions: [],
  createNewSession: () => {},
  addMessage: () => {},
  updateStreamingMessage: () => {},
  selectSession: () => {},
  deleteSession: () => {},
  loadSessions: async () => {}
})

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null)
  const { currentUser } = useAuth()

  const loadSessions = useCallback(async () => {
    if (!currentUser) return

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
      
      // Set the first session as current if exists
      if (loadedSessions.length > 0) {
        setCurrentSession(loadedSessions[0])
      } else {
        createNewSession()
      }
    } catch (error) {
      console.error('Error loading sessions:', error)
    }
  }, [currentUser, createNewSession])

  useEffect(() => {
    if (currentUser) {
      loadSessions()
    }
  }, [currentUser, loadSessions])

  const createNewSession = useCallback(async () => {
    if (!currentUser) return null

    const newSession: Omit<ChatSession, 'id'> = {
      title: `New Chat ${sessions.length + 1}`,
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

      setSessions(prev => [fullNewSession, ...prev])
      setCurrentSession(fullNewSession)
      return fullNewSession
    } catch (error) {
      console.error('Error creating new session:', error)
      return null
    }
  }, [sessions, currentUser])

  const addMessage = useCallback(async (content: string, sender: 'user' | 'ai', isStreaming: boolean = false) => {
    if (!currentSession || !currentUser) return

    const newMessage: ChatMessage = {
      id: uuidv4(),
      content,
      sender,
      timestamp: Date.now(),
      isStreaming: isStreaming
    }

    try {
      // Update the session in Firestore
      await updateDoc(doc(db, 'chatSessions', currentSession.id), {
        messages: [...(currentSession.messages || []), newMessage]
      })

      // Update local state
      setSessions(prev => 
        prev.map(session => 
          session.id === currentSession.id 
            ? { 
                ...session, 
                messages: [...(session.messages || []), newMessage]
              }
            : session
        )
      )

      setCurrentSession(prev => 
        prev ? { 
          ...prev, 
          messages: [...(prev.messages || []), newMessage]
        } : null
      )
    } catch (error) {
      console.error('Error adding message:', error)
    }
  }, [currentSession, currentUser])

  const updateStreamingMessage = useCallback(async (content: string) => {
    if (!currentSession || !currentUser) return

    try {
      // Get the current messages
      const currentMessages = currentSession.messages || []
      
      // If there are messages and the last message is from AI
      if (currentMessages.length > 0 && currentMessages[currentMessages.length - 1].sender === 'ai') {
        // Create a copy of messages and update the last message
        const updatedMessages = [...currentMessages]
        updatedMessages[updatedMessages.length - 1] = {
          ...updatedMessages[updatedMessages.length - 1],
          content: content,
          isStreaming: content.length > 0
        }

        // Update Firestore
        await updateDoc(doc(db, 'chatSessions', currentSession.id), {
          messages: updatedMessages
        })

        // Update local state
        setSessions(prev => 
          prev.map(session => 
            session.id === currentSession.id 
              ? { ...session, messages: updatedMessages }
              : session
          )
        )

        setCurrentSession(prev => 
          prev ? { ...prev, messages: updatedMessages } : null
        )
      }
    } catch (error) {
      console.error('Error updating streaming message:', error)
    }
  }, [currentSession, currentUser])

  const selectSession = useCallback(async (sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId)
    if (session) {
      setCurrentSession(session)
    }
  }, [sessions])

  const deleteSession = useCallback(async (sessionId: string) => {
    if (!currentUser) return

    try {
      // Delete from Firestore
      await deleteDoc(doc(db, 'chatSessions', sessionId))

      // Update local state
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
    } catch (error) {
      console.error('Error deleting session:', error)
    }
  }, [currentSession, createNewSession, currentUser])

  return (
    <ChatContext.Provider value={{
      currentSession,
      sessions,
      createNewSession,
      addMessage,
      updateStreamingMessage,
      selectSession,
      deleteSession,
      loadSessions
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)

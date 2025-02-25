import React, { createContext, useState, useContext, useCallback, useEffect } from 'react'
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc, 
  orderBy 
} from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import { ChatSession, ChatMessage } from '../types/ChatTypes'
import { firestore } from '../firebase'
import { useAuth } from './AuthContext'

interface ChatContextType {
  currentSession: ChatSession | null
  sessions: ChatSession[]
  createNewSession: () => void
  addMessage: (content: string, sender: 'user' | 'ai', isStreaming?: boolean) => void
  updateStreamingMessage: (content: string) => void
  selectSession: (sessionId: string) => void
  deleteSession: (sessionId: string) => void
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
  loadUserSessions: async () => {}
})

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null)
  const { currentUser } = useAuth()

  const createNewSession = useCallback(async () => {
    if (!currentUser) return null

    const newSession: Omit<ChatSession, 'id'> = {
      title: `New Chat ${sessions.length + 1}`,
      messages: [],
      createdAt: Date.now(),
      userId: currentUser.uid
    }

    try {
      const docRef = await addDoc(collection(firestore, 'chatSessions'), newSession)
      const fullSession: ChatSession = { 
        ...newSession, 
        id: docRef.id 
      }

      setSessions(prev => [...prev, fullSession])
      setCurrentSession(fullSession)
      return fullSession
    } catch (error) {
      console.error('Error creating new session:', error)
      return null
    }
  }, [sessions, currentUser])

  const addMessage = useCallback(async (content: string, sender: 'user' | 'ai', isStreaming: boolean = false) => {
    if (!currentSession || !currentUser) return

    const newMessage: Omit<ChatMessage, 'id'> = {
      content,
      sender,
      timestamp: Date.now(),
      isStreaming: isStreaming,
      sessionId: currentSession.id
    }

    try {
      const messageRef = await addDoc(collection(firestore, 'messages'), newMessage)
      const fullMessage: ChatMessage = { 
        ...newMessage, 
        id: messageRef.id 
      }

      // Update local state
      setSessions(prev => 
        prev.map(session => 
          session.id === currentSession.id 
            ? { 
                ...session, 
                messages: [...session.messages, fullMessage]
              }
            : session
        )
      )

      setCurrentSession(prev => 
        prev ? { 
          ...prev, 
          messages: [...prev.messages, fullMessage]
        } : null
      )
    } catch (error) {
      console.error('Error adding message:', error)
    }
  }, [currentSession, currentUser])

  const updateStreamingMessage = useCallback(async (content: string) => {
    if (!currentSession || !currentUser) return

    setSessions(prev => 
      prev.map(session => {
        if (session.id === currentSession.id) {
          const updatedMessages = [...session.messages]
          const lastMessageIndex = updatedMessages.length - 1
          
          if (lastMessageIndex >= 0 && updatedMessages[lastMessageIndex].sender === 'ai') {
            const lastMessage = updatedMessages[lastMessageIndex]
            
            // Update Firestore document
            const messageRef = doc(firestore, 'messages', lastMessage.id)
            updateDoc(messageRef, { content, isStreaming: false })
            
            updatedMessages[lastMessageIndex] = {
              ...lastMessage,
              content: content,
              isStreaming: false
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
          isStreaming: false
        }
      }
      
      return { ...prev, messages: updatedMessages }
    })
  }, [currentSession, currentUser])

  const selectSession = useCallback((sessionId: string) => {
    const session = sessions.find(s => s.id === sessionId)
    if (session) {
      setCurrentSession(session)
    }
  }, [sessions])

  const deleteSession = useCallback(async (sessionId: string) => {
    if (!currentUser) return

    try {
      // Delete the session document
      const sessionRef = doc(firestore, 'chatSessions', sessionId)
      await deleteDoc(sessionRef)

      // Delete all messages for this session
      const messagesQuery = query(
        collection(firestore, 'messages'), 
        where('sessionId', '==', sessionId)
      )
      const messageSnapshot = await getDocs(messagesQuery)
      messageSnapshot.docs.forEach(async (messageDoc) => {
        await deleteDoc(messageDoc.ref)
      })

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
  }, [currentSession, currentUser, createNewSession])

  const loadUserSessions = useCallback(async () => {
    if (!currentUser) return

    try {
      // Fetch user's chat sessions
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

          // Fetch messages for this session
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
      
      // Set the first session as current if exists
      if (userSessions.length > 0) {
        setCurrentSession(userSessions[0])
      } else {
        createNewSession()
      }
    } catch (error) {
      console.error('Error loading user sessions:', error)
    }
  }, [currentUser, createNewSession])

  // Load sessions when user changes
  useEffect(() => {
    if (currentUser) {
      loadUserSessions()
    } else {
      setSessions([])
      setCurrentSession(null)
    }
  }, [currentUser, loadUserSessions])

  return (
    <ChatContext.Provider value={{
      currentSession,
      sessions,
      createNewSession,
      addMessage,
      updateStreamingMessage,
      selectSession,
      deleteSession,
      loadUserSessions
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)

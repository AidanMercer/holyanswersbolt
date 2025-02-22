import React, { createContext, useState, useContext, useCallback } from 'react'
import { ChatSession, ChatMessage } from '../types/ChatTypes'
import { v4 as uuidv4 } from 'uuid'

interface ChatContextType {
  currentSession: ChatSession | null
  sessions: ChatSession[]
  createNewSession: () => void
  addMessage: (content: string, sender: 'user' | 'ai', isStreaming?: boolean) => void
  selectSession: (sessionId: string) => void
  deleteSession: (sessionId: string) => void
}

const ChatContext = createContext<ChatContextType>({
  currentSession: null,
  sessions: [],
  createNewSession: () => {},
  addMessage: () => {},
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
      timestamp: Date.now()
    }

    setSessions(prev => 
      prev.map(session => 
        session.id === currentSession?.id 
          ? { 
              ...session, 
              messages: sender === 'ai' && !isStreaming
                ? [...session.messages, newMessage]
                : sender === 'ai' && isStreaming
                  ? session.messages.map((msg, index, arr) => 
                      index === arr.length - 1 ? { ...msg, content } : msg
                    )
                  : [...session.messages, newMessage]
            }
          : session
      )
    )

    setCurrentSession(prev => 
      prev ? { 
        ...prev, 
        messages: sender === 'ai' && !isStreaming
          ? [...prev.messages, newMessage]
          : sender === 'ai' && isStreaming
            ? prev.messages.map((msg, index, arr) => 
                index === arr.length - 1 ? { ...msg, content } : msg
              )
            : [...prev.messages, newMessage]
      } : null
    )
  }, [currentSession, createNewSession])

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
      selectSession,
      deleteSession
    }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext)

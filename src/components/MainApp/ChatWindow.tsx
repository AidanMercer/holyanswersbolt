import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Send, Copy, Check, XCircle, User, Bot } from 'lucide-react'
import { useChat } from '../../context/ChatContext'
import { useAuth } from '../../context/AuthContext'
import { v4 as uuidv4 } from 'uuid'
import { ChatMessage } from '../../types/ChatTypes'

interface ChatWindowProps {
  theme: 'light' | 'dark'
}

const ChatWindow: React.FC<ChatWindowProps> = ({ theme }) => {
  const [inputMessage, setInputMessage] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const { currentSession, createNewSession } = useChat()
  const { currentUser } = useAuth()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  // Ensure we have a session, create one if not
  useEffect(() => {
    if (!currentSession) {
      createNewSession()
    }
  }, [currentSession, createNewSession])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentSession?.messages])

  const handleStopGeneration = useCallback(async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      setIsGenerating(false)
    }

    try {
      await fetch("/stop-generation", { 
        method: "POST" 
      })
    } catch (error) {
      console.error("Error stopping generation:", error)
    }
  }, [])

  const handleSendMessage = useCallback(async () => {
    // Ensure we have a session
    if (!currentSession) {
      await createNewSession()
      return
    }

    if (inputMessage.trim() && !isGenerating) {
      const userInput = inputMessage.trim()
      
      // Add user message
      const userMessage: ChatMessage = {
        id: uuidv4(),
        content: userInput,
        sender: 'user',
        timestamp: Date.now(),
      }

      // Update current session with user message
      const updatedSession = {
        ...currentSession,
        messages: [...currentSession.messages, userMessage]
      }

      setInputMessage('')
      setIsGenerating(true)

      try {
        // Prepare context history for API
        const contextHistory = currentSession.messages.slice(-5).map(msg => ({
          sender: msg.sender,
          content: msg.content
        }))

        const response = await fetch("/chat", {
          method: "POST",
          headers: { 
            "Content-Type": "application/json" 
          },
          body: JSON.stringify({
            user_input: userInput,
            context_history: contextHistory
          })
        })

        // Create a new AI message to track generation
        const aiMessage: ChatMessage = {
          id: uuidv4(),
          content: '',
          sender: 'ai',
          timestamp: Date.now(),
          isStreaming: true
        }

        // Immediately add the AI message placeholder
        const initialUpdatedSession = {
          ...updatedSession,
          messages: [...updatedSession.messages, aiMessage]
        }

        // Update the session to show the AI message is being generated
        // This ensures the user sees something is happening
        
        // Use a stream reader to handle streaming response
        const reader = response.body?.getReader()
        const decoder = new TextDecoder()
        let fullResponse = ''

        while (true) {
          const { done, value } = await reader?.read()
          if (done) break
          
          const chunk = decoder.decode(value)
          fullResponse += chunk

          // Update the AI message with the current response
          const updatedAiMessage: ChatMessage = {
            ...aiMessage,
            content: fullResponse,
            isStreaming: false
          }

          // Update the session with the latest response
          const streamingUpdatedSession = {
            ...initialUpdatedSession,
            messages: initialUpdatedSession.messages.map(msg => 
              msg.id === aiMessage.id ? updatedAiMessage : msg
            )
          }
        }

        setIsGenerating(false)
      } catch (error) {
        console.error('Error during API call:', error)
        setIsGenerating(false)
      }
    }
  }, [inputMessage, isGenerating, currentSession, createNewSession])

  const handleCopyMessage = useCallback((message: string) => {
    navigator.clipboard.writeText(message)
  }, [])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value)
  }, [])

  const handleKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }, [handleSendMessage])

  return (
    <div className="flex-1 bg-white dark:bg-gray-900 p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4">
        {currentSession?.messages.map((message) => (
          <div 
            key={message.id} 
            className={`
              flex items-start space-x-3 
              ${message.sender === 'user' ? 'justify-end' : 'justify-start'}
            `}
          >
            {message.sender === 'ai' && (
              <div className="w-10 h-10 bg-holy-purple-500 text-white rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
            )}
            <div 
              className={`
                p-3 rounded-lg max-w-[80%] relative group
                ${message.sender === 'user' 
                  ? 'bg-holy-purple-100 dark:bg-holy-purple-700/20 text-gray-900 dark:text-white' 
                  : 'bg-gray-100 dark:bg-gray-700/50 dark:text-gray-100'}
                ${message.sender === 'user' 
                  ? 'border-holy-purple-200 dark:border-holy-purple-700' 
                  : 'border-gray-200 dark:border-gray-600'}
                border shadow-sm
              `}
            >
              <p 
                dangerouslySetInnerHTML={{
                  __html: message.content
                    .replace(/\n/g, "<br>")
                    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
                    .replace(/\*/g, "•")
                }}
              />
              {message.sender === 'ai' && (
                <button 
                  onClick={() => handleCopyMessage(message.content)}
                  className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Copy size={16} className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100" />
                </button>
              )}
            </div>
            {message.sender === 'user' && (
              <div className="w-10 h-10 bg-holy-purple-600 text-white rounded-full flex items-center justify-center">
                {currentUser?.photoURL ? (
                  <img 
                    src={currentUser.photoURL} 
                    alt="User" 
                    className="w-full h-full rounded-full object-cover" 
                  />
                ) : (
                  <User size={24} />
                )}
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center space-x-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <input 
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          disabled={isGenerating}
          className="flex-1 p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 disabled:opacity-50"
        />
        <button 
          onClick={isGenerating ? handleStopGeneration : handleSendMessage}
          className={`
            ${isGenerating 
              ? 'bg-red-500 text-white hover:bg-red-600' 
              : 'bg-holy-purple-600 text-white hover:bg-holy-purple-700'}
            p-2 rounded-full transition-colors dark:bg-holy-purple-700 dark:hover:bg-holy-purple-600
          `}
        >
          {isGenerating ? <XCircle size={20} /> : <Send size={20} />}
        </button>
      </div>
    </div>
  )
}

export default ChatWindow

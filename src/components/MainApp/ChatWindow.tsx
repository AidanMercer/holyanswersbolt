import React, { useState, useEffect, useRef } from 'react'
import { Send, Copy, Check, XCircle, User, Bot } from 'lucide-react'
import { useChat } from '../../context/ChatContext'
import { useAuth } from '../../context/AuthContext'

interface ChatWindowProps {
  theme: 'light' | 'dark'
}

const ChatWindow: React.FC<ChatWindowProps> = ({ theme }) => {
  const [inputMessage, setInputMessage] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const { currentSession, addMessage, updateStreamingMessage, createNewSession } = useChat()
  const { currentUser } = useAuth()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentSession?.messages])

  const handleStopGeneration = async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      setIsGenerating(false)
    }

    try {
      await fetch("https://holyanswers-155523642474.us-central1.run.app/stop-generation", { 
        method: "POST" 
      })
    } catch (error) {
      console.error("Error stopping generation:", error)
    }
  }

  const handleSendMessage = async () => {
    if (inputMessage.trim() && !isGenerating) {
      const userInput = inputMessage.trim()
      
      try {
        // Ensure we have a valid current session
        if (!currentSession) {
          await createNewSession()
        }

        // Add user message first
        await addMessage(userInput, 'user')
        setInputMessage('')
        setIsGenerating(true)

        // Add an initial AI message placeholder
        await addMessage('', 'ai', true)

        // Create a new abort controller for this request
        const controller = new AbortController()
        abortControllerRef.current = controller

        const response = await fetch("https://holyanswers-155523642474.us-central1.run.app", {
          method: "POST",
          body: new URLSearchParams({ 
            user_input: userInput,
            session_id: currentSession?.id || '' // Pass session ID to maintain context
          }),
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          signal: controller.signal
        })

        const reader = response.body?.getReader()
        const decoder = new TextDecoder()
        let aiResponse = ''

        const processStream = async () => {
          if (!reader) return

          const { done, value } = await reader.read()
          
          if (done) {
            // Finalize AI message
            await updateStreamingMessage(aiResponse)
            setIsGenerating(false)
            return
          }

          const chunk = decoder.decode(value, { stream: true })
          aiResponse += chunk

          // Update the last message with streaming content
          await updateStreamingMessage(aiResponse)

          await processStream()
        }

        await processStream()
      } catch (error) {
        console.error('Full Error During Message Sending:', error)
        
        // Add an error message to the chat
        await addMessage('Sorry, there was an error processing your request.', 'ai')
        
        setIsGenerating(false)
        setInputMessage(userInput) // Restore the input message
      }
    }
  }

  const handleCopyMessage = (message: string) => {
    navigator.clipboard.writeText(message)
  }

  return (
    <div className="flex-1 bg-white dark:bg-gray-900 p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4">
        {/* Debug information */}
        {!currentSession && (
          <div className="text-red-500">
            No current session available. Creating a new session...
          </div>
        )}

        {/* Add a null check and provide a default empty array */}
        {(currentSession?.messages || []).map((message, index) => (
          <div 
            key={message.id || index} 
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
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
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

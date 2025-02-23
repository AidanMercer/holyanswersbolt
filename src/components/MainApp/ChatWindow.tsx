import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Send, User, Bot, XCircle, Copy } from 'lucide-react'
import { useChat } from '../../context/ChatContext'

const MAX_MESSAGES = 10

const ChatWindow: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const [inputMessage, setInputMessage] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const { currentSession, addMessage } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Memoize the decoder to prevent unnecessary recreations
  const decoder = useMemo(() => new TextDecoder(), [])

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [currentSession?.messages])

  // Load message count from localStorage on mount
  useEffect(() => {
    const savedMessageCount = localStorage.getItem('demoMessageCount')
    if (savedMessageCount) {
      setMessageCount(parseInt(savedMessageCount, 10))
    }
  }, [])

  const handleSendMessage = useCallback(async () => {
    // Check message limit
    if (messageCount >= MAX_MESSAGES) return

    if (inputMessage.trim() && !isGenerating) {
      const userInput = inputMessage.trim()
      
      // Add user message
      addMessage(userInput, 'user')
      setInputMessage('')
      setIsGenerating(true)

      // Prepare for AI response
      addMessage('', 'ai', true)

      try {
        const response = await fetch("https://jesusai-docker-155523642474.us-central1.run.app", {
          method: "POST",
          body: new URLSearchParams({ user_input: userInput }),
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        })

        // Ensure response is okay
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        // Safely check if body is available
        if (!response.body) {
          throw new Error('Response body is not available')
        }

        // Create a reader for streaming
        const reader = response.body.getReader()
        
        let partialResponse = ''

        // Stream processing function
        const processStream = async () => {
          try {
            while (true) {
              const { done, value } = await reader.read()
              
              if (done) {
                // Finalize the message when streaming is complete
                addMessage(partialResponse, 'ai')
                
                // Update message count
                const newMessageCount = messageCount + 2
                setMessageCount(newMessageCount)
                localStorage.setItem('demoMessageCount', newMessageCount.toString())
                
                setIsGenerating(false)
                break
              }

              if (value) {
                // Decode the chunk
                const chunk = decoder.decode(value, { stream: true })
                
                // Accumulate the response
                partialResponse += chunk
                
                // Update the message with accumulated response
                // Apply markdown-like formatting
                const formattedResponse = partialResponse
                  .replace(/\n/g, "<br>")
                  .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
                  .replace(/\*/g, "•")
                
                addMessage(formattedResponse, 'ai', true)
              }
            }
          } catch (error) {
            console.error('Streaming error:', error)
            addMessage('Sorry, there was an error processing your request.', 'ai')
            setIsGenerating(false)
          }
        }

        // Start streaming
        processStream()

      } catch (error) {
        console.error('Error during API call:', error)
        addMessage('Sorry, there was an error processing your request.', 'ai')
        setIsGenerating(false)
      }
    }
  }, [inputMessage, isGenerating, messageCount, addMessage, decoder])

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isGenerating) {
      handleSendMessage()
    }
  }

  // Render when message limit is reached
  if (messageCount >= MAX_MESSAGES) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white dark:bg-gray-900 p-4">
        <div className="text-center">
          <div className="mb-4">
            <XCircle className="mx-auto text-gray-500 dark:text-gray-400" size={48} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Demo Limit Reached
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You've reached the maximum of {MAX_MESSAGES} messages in this demo.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Refresh the page to start a new demo session.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 bg-white dark:bg-gray-900 p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4">
        {currentSession?.messages.map((message, index) => (
          <div 
            key={message.id} 
            className={`flex items-start space-x-3 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.sender === 'ai' && (
              <Bot className="text-holy-purple-600 dark:text-holy-purple-400" size={24} />
            )}
            <div 
              className={`px-4 py-2 rounded-2xl max-w-[70%] relative ${
                message.sender === 'user' 
                  ? 'bg-holy-purple-600 text-white' 
                  : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border dark:border-gray-600'
              }`}
            >
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: message.content || (isGenerating && message.sender === 'ai' ? '...' : '') 
                }} 
              />
              
              {/* Copy button for AI messages */}
              {message.sender === 'ai' && message.content && !isGenerating && (
                <button 
                  className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
                  onClick={() => {
                    navigator.clipboard.writeText(message.content)
                  }}
                >
                  <Copy size={16} />
                </button>
              )}
            </div>
            {message.sender === 'user' && (
              <User className="text-gray-600 dark:text-gray-300" size={24} />
            )}
          </div>
        ))}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 border-t dark:border-gray-700 flex space-x-3">
        <div className="flex-grow relative">
          <input 
            type="text" 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={isGenerating}
            className="w-full px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-holy-purple-500 dark:bg-gray-700 dark:text-white disabled:opacity-50"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400">
            {messageCount}/{MAX_MESSAGES}
          </div>
        </div>
        <button 
          onClick={handleSendMessage}
          disabled={isGenerating || !inputMessage.trim()}
          className="bg-holy-purple-600 text-white p-3 rounded-full hover:bg-holy-purple-700 dark:bg-holy-purple-500 dark:hover:bg-holy-purple-600 transition-colors disabled:opacity-50"
        >
          {isGenerating ? <XCircle size={20} /> : <Send size={20} />}
        </button>
      </div>
    </div>
  )
}

export default ChatWindow

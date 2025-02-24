import React, { useState, useEffect, useRef } from 'react'
import { Send, Copy, Check, XCircle, User, Bot } from 'lucide-react'
import { useChat } from '../../context/ChatContext'
import { useAuth } from '../../context/AuthContext'
import { generateChatResponse, generateStreamedResponse } from '../../lib/ai'

interface ChatWindowProps {
  theme: 'light' | 'dark'
}

const ChatWindow: React.FC<ChatWindowProps> = ({ theme }) => {
  const [inputMessage, setInputMessage] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const { currentSession, addMessage, updateStreamingMessage } = useChat()
  const { currentUser } = useAuth()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentSession?.messages])

  const handleSendMessage = async () => {
    if (inputMessage.trim() && !isGenerating) {
      const userInput = inputMessage.trim()
      addMessage(userInput, 'user')
      setInputMessage('')
      setIsGenerating(true)

      // Add an initial AI message placeholder
      addMessage('', 'ai', true)

      try {
        const { completeResponse, stream } = await generateStreamedResponse(userInput, {
          auth: {
            uid: currentUser?.uid,
            displayName: currentUser?.displayName
          }
        })

        // Process streaming response
        for await (const chunk of stream) {
          if (chunk.output) {
            updateStreamingMessage(chunk.output.response || '')
          }
        }

        // Finalize the message and mark as not streaming
        if (completeResponse.output) {
          updateStreamingMessage(completeResponse.output.response, false)
        }
      } catch (error) {
        console.error('Error generating response:', error)
        addMessage('Sorry, there was an error processing your request.', 'ai')
      } finally {
        setIsGenerating(false)
      }
    }
  }

  const handleCopyMessage = (message: string) => {
    navigator.clipboard.writeText(message)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex-1 bg-white dark:bg-gray-900 p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {currentSession?.messages.map((message, index) => (
          <div 
            key={message.id || index} 
            className={`flex items-start space-x-3 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div className={`
              max-w-[70%] p-3 rounded-lg 
              ${message.sender === 'user' 
                ? 'bg-holy-purple-500 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'}
              ${message.isStreaming ? 'animate-pulse' : ''}
            `}>
              <div className="flex items-center space-x-2 mb-1">
                {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                <span className="font-semibold">
                  {message.sender === 'user' ? 'You' : 'HolyAnswers AI'}
                </span>
              </div>
              <p>{message.content}</p>
            </div>
            {message.sender === 'user' && (
              <button 
                onClick={() => handleCopyMessage(message.content)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <Copy size={16} />
              </button>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex space-x-2">
        <textarea 
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-holy-purple-500"
          rows={3}
        />
        <button 
          onClick={handleSendMessage}
          disabled={isGenerating || !inputMessage.trim()}
          className={`
            p-2 rounded-lg 
            ${isGenerating || !inputMessage.trim() 
              ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed' 
              : 'bg-holy-purple-500 text-white hover:bg-holy-purple-600'}
            transition-colors
          `}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  )
}

export default ChatWindow

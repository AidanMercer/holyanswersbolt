import React, { useState, useCallback, useEffect } from 'react'
import { Send, User, Bot, Loader2, Lock, Copy } from 'lucide-react'
import { useChat } from '../context/ChatContext'
import { generateStreamedResponse } from '../lib/ai'

const MAX_MESSAGES = 10
const STORAGE_KEY = 'holyanswers_demo_message_count'

const ChatInterface: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const { currentSession, addMessage, updateStreamingMessage } = useChat()
  const [inputMessage, setInputMessage] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [messageCount, setMessageCount] = useState(() => {
    // Initialize message count from localStorage or default to 0
    const storedCount = localStorage.getItem(STORAGE_KEY)
    return storedCount ? parseInt(storedCount, 10) : 0
  })

  // Update localStorage whenever message count changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, messageCount.toString())
  }, [messageCount])

  const handleSendMessage = useCallback(async () => {
    // Check message limit
    if (messageCount >= MAX_MESSAGES) return

    if (!inputMessage.trim() || isGenerating) return

    // Add user message
    addMessage(inputMessage, 'user')
    const userInput = inputMessage.trim()
    setInputMessage('')
    setIsGenerating(true)

    // Add an initial AI message placeholder
    addMessage('', 'ai', true)

    try {
      const { completeResponse, stream } = await generateStreamedResponse(userInput)

      // Process streaming response
      for await (const chunk of stream) {
        if (chunk.output) {
          updateStreamingMessage(chunk.output.response || '')
        }
      }

      // Finalize the message and mark as not streaming
      if (completeResponse.output) {
        updateStreamingMessage(completeResponse.output.response, false)
        
        // Increment message count (2 for user and AI message)
        setMessageCount(prev => {
          const newCount = prev + 2
          localStorage.setItem(STORAGE_KEY, newCount.toString())
          return newCount
        })
      }
    } catch (error) {
      console.error('Chat API Error:', error)
      addMessage('Sorry, there was an error processing your request.', 'ai')
    } finally {
      setIsGenerating(false)
    }
  }, [inputMessage, messageCount, addMessage, updateStreamingMessage, isGenerating])

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isGenerating) {
      handleSendMessage()
    }
  }

  const handleCopyMessage = (message: string) => {
    navigator.clipboard.writeText(message)
  }

  return (
    <section id="chat" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Holy Answers AI Chat
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Experience intelligent, context-aware conversations
          </p>
        </div>
        
        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
          {messageCount >= MAX_MESSAGES ? (
            <div className="flex flex-col items-center justify-center h-[600px] text-center p-6">
              <Lock className="text-gray-500 dark:text-gray-400 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Demo Limit Reached
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You've reached the maximum of {MAX_MESSAGES} messages in this demo.
                Please sign up to continue chatting with Holy Answers.
              </p>
            </div>
          ) : (
            <div className="flex flex-col h-[600px]">
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {currentSession?.messages.map((msg, index) => (
                  <div 
                    key={msg.id || index} 
                    className={`flex items-start space-x-3 ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div className={`
                      max-w-[70%] p-3 rounded-lg 
                      ${msg.sender === 'user' 
                        ? 'bg-holy-purple-500 text-white' 
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'}
                      ${msg.isStreaming ? 'animate-pulse' : ''}
                    `}>
                      <div className="flex items-center space-x-2 mb-1">
                        {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                        <span className="font-semibold">
                          {msg.sender === 'user' ? 'You' : 'HolyAnswers AI'}
                        </span>
                      </div>
                      <p>{msg.content}</p>
                    </div>
                    {msg.sender === 'user' && (
                      <button 
                        onClick={() => handleCopyMessage(msg.content)}
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        <Copy size={16} />
                      </button>
                    )}
                  </div>
                ))}
                
                {isGenerating && (
                  <div className="flex justify-start items-center space-x-3">
                    <Bot className="text-holy-purple-600 dark:text-holy-purple-400" size={24} />
                    <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-2xl">
                      <Loader2 className="animate-spin" size={20} />
                      <span className="text-gray-600 dark:text-gray-300">Thinking...</span>
                    </div>
                  </div>
                )}
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
                  className={`
                    p-3 rounded-full 
                    ${isGenerating || !inputMessage.trim() 
                      ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed' 
                      : 'bg-holy-purple-600 text-white hover:bg-holy-purple-700'}
                    transition-colors
                  `}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ChatInterface

import React, { useState, useCallback, useEffect } from 'react'
import { Send, User, Bot, Loader2, Lock } from 'lucide-react'
import { useChat } from '../context/ChatContext'

const MAX_MESSAGES = 5

const ChatInterface: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const { currentSession, addMessage } = useChat()
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isStreaming, setIsStreaming] = useState(false)
  const [messageCount, setMessageCount] = useState(0)

  const handleSendMessage = useCallback(async () => {
    // Check message limit
    if (messageCount >= MAX_MESSAGES) return

    if (!inputMessage.trim()) return

    // Add user message
    addMessage(inputMessage, 'user')
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch("https://jesusai-docker-155523642474.us-central1.run.app", {
        method: "POST",
        body: new URLSearchParams({ user_input: inputMessage }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      })

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let accumulatedResponse = ''

      // Prepare for streaming AI response
      setIsStreaming(true)
      addMessage('', 'ai', true)

      const processStream = async () => {
        if (!reader) return

        const { done, value } = await reader.read()
        
        if (done) {
          // Finalize AI message and increment message count
          addMessage(accumulatedResponse, 'ai')
          setMessageCount(prev => prev + 2)  // +2 for user and AI message
          setIsStreaming(false)
          setIsLoading(false)
          return
        }

        const chunk = decoder.decode(value, { stream: true })
        accumulatedResponse += chunk

        // Update the last message with streaming content
        addMessage(accumulatedResponse, 'ai', true)

        await processStream()
      }

      await processStream()
    } catch (error) {
      console.error('Chat API Error:', error)
      addMessage('Sorry, there was an error processing your request.', 'ai')
      setIsLoading(false)
      setIsStreaming(false)
    }
  }, [inputMessage, messageCount, addMessage])

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage()
    }
  }

  // Reset message count on component mount
  useEffect(() => {
    setMessageCount(0)
  }, [])

  return (
    <section id="chat" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive AI Chat
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
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                To continue chatting, please sign up or refresh the page.
              </p>
            </div>
          ) : (
            <>
              <div className="h-[500px] overflow-y-auto p-6 space-y-4">
                {currentSession?.messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex items-start space-x-3 ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.sender === 'ai' && (
                      <Bot className="text-holy-purple-600 dark:text-holy-purple-400" size={24} />
                    )}
                    <div 
                      className={`px-4 py-2 rounded-2xl max-w-[70%] ${
                        msg.sender === 'user' 
                          ? 'bg-holy-purple-600 text-white' 
                          : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border dark:border-gray-600'
                      }`}
                    >
                      {msg.content}
                    </div>
                    {msg.sender === 'user' && (
                      <User className="text-gray-600 dark:text-gray-300" size={24} />
                    )}
                  </div>
                ))}
                
                {isLoading && (
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
                    disabled={isLoading}
                    className="w-full px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-holy-purple-500 dark:bg-gray-700 dark:text-white disabled:opacity-50"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400">
                    {messageCount}/{MAX_MESSAGES}
                  </div>
                </div>
                <button 
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-holy-purple-600 text-white p-3 rounded-full hover:bg-holy-purple-700 dark:bg-holy-purple-500 dark:hover:bg-holy-purple-600 transition-colors disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default ChatInterface

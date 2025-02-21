import React, { useState, useEffect, useRef } from 'react'
import { Send } from 'lucide-react'
import { useChat } from '../../context/ChatContext'

interface ChatWindowProps {
  theme: 'light' | 'dark'
}

const ChatWindow: React.FC<ChatWindowProps> = ({ theme }) => {
  const [inputMessage, setInputMessage] = useState('')
  const { currentSession, addMessage } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [currentSession?.messages])

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      addMessage(inputMessage, 'user')
      setInputMessage('')
      // TODO: Implement AI response generation
    }
  }

  return (
    <div className="flex-1 bg-white dark:bg-gray-900 p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4">
        {currentSession?.messages.map(message => (
          <div 
            key={message.id} 
            className={`
              p-3 rounded-lg max-w-[80%]
              ${message.sender === 'user' 
                ? 'bg-holy-purple-100 dark:bg-holy-purple-800 self-end ml-auto' 
                : 'bg-gray-100 dark:bg-gray-800 self-start mr-auto'}
            `}
          >
            {message.content}
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
          className="flex-1 p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
        />
        <button 
          onClick={handleSendMessage}
          className="bg-holy-purple-600 text-white p-2 rounded-full hover:bg-holy-purple-700 transition-colors dark:bg-holy-purple-700 dark:hover:bg-holy-purple-600"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  )
}

export default ChatWindow

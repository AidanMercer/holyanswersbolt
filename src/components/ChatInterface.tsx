import React, { useState } from 'react'
import { Send, User, Bot } from 'lucide-react'

interface ChatInterfaceProps {
  theme: 'light' | 'dark'
}

interface Message {
  id: number
  text: string
  sender: 'user' | 'ai'
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ theme }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hello! I'm your HolyAnswers AI companion. How can I help you today?", 
      sender: 'ai' 
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newUserMessage: Message = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user'
      }
      const aiResponse: Message = {
        id: messages.length + 2,
        text: `I understand you said: "${inputMessage}". How else can I assist you?`,
        sender: 'ai'
      }
      setMessages([...messages, newUserMessage, aiResponse])
      setInputMessage('')
    }
  }

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
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
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
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <User className="text-gray-600 dark:text-gray-300" size={24} />
                )}
              </div>
            ))}
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 border-t dark:border-gray-700 flex space-x-3">
            <input 
              type="text" 
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-grow px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-holy-purple-500 dark:bg-gray-700 dark:text-white"
            />
            <button 
              onClick={handleSendMessage}
              className="bg-holy-purple-600 text-white p-3 rounded-full hover:bg-holy-purple-700 dark:bg-holy-purple-500 dark:hover:bg-holy-purple-600 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatInterface

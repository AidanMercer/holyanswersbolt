import React, { useState, useEffect, useRef } from 'react'
import { Zap, ArrowRight, Send, XCircle } from 'lucide-react'
import { signInWithPopup } from '../firebase'
import { googleProvider, auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

interface HeroSectionProps {
  theme: 'light' | 'dark'
  scrollToChatInterface: () => void
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme, scrollToChatInterface }) => {
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const [inputMessage, setInputMessage] = useState('')
  const [messages, setMessages] = useState<{ id: string; content: string; sender: 'user' | 'ai' }[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleStopGeneration = async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      setIsGenerating(false)
    }

    try {
      await fetch("https://jesusai-docker-155523642474.us-central1.run.app/stop-generation", { 
        method: "POST" 
      })
    } catch (error) {
      console.error("Error stopping generation:", error)
    }
  }

  const handleSendMessage = async () => {
    if (inputMessage.trim() && !isGenerating) {
      const userInput = inputMessage.trim()
      
      // Add user message
      const userMessage = {
        id: `user-${Date.now()}`,
        content: userInput,
        sender: 'user' as const
      }
      setMessages(prev => [...prev, userMessage])
      setInputMessage('')
      setIsGenerating(true)

      // Add AI placeholder message
      const aiPlaceholder = {
        id: `ai-${Date.now()}`,
        content: '...',
        sender: 'ai' as const
      }
      setMessages(prev => [...prev, aiPlaceholder])

      // Create a new abort controller for this request
      const controller = new AbortController()
      abortControllerRef.current = controller

      try {
        const response = await fetch("https://jesusai-docker-155523642474.us-central1.run.app", {
          method: "POST",
          body: new URLSearchParams({ user_input: userInput }),
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
            setMessages(prev => {
              const updatedMessages = [...prev]
              const lastAiMessageIndex = updatedMessages.findLastIndex(m => m.sender === 'ai')
              if (lastAiMessageIndex !== -1) {
                updatedMessages[lastAiMessageIndex] = {
                  ...updatedMessages[lastAiMessageIndex],
                  content: aiResponse
                }
              }
              return updatedMessages
            })
            setIsGenerating(false)
            return
          }

          const chunk = decoder.decode(value, { stream: true })
          aiResponse += chunk

          // Update the last AI message with streaming content
          setMessages(prev => {
            const updatedMessages = [...prev]
            const lastAiMessageIndex = updatedMessages.findLastIndex(m => m.sender === 'ai')
            if (lastAiMessageIndex !== -1) {
              updatedMessages[lastAiMessageIndex] = {
                ...updatedMessages[lastAiMessageIndex],
                content: aiResponse
              }
            }
            return updatedMessages
          })

          await processStream()
        }

        await processStream()
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          console.log('Request was aborted')
        } else {
          console.error('Error during API call:', error)
          setMessages(prev => {
            const updatedMessages = [...prev]
            const lastAiMessageIndex = updatedMessages.findLastIndex(m => m.sender === 'ai')
            if (lastAiMessageIndex !== -1) {
              updatedMessages[lastAiMessageIndex] = {
                ...updatedMessages[lastAiMessageIndex],
                content: 'Sorry, there was an error processing your request.'
              }
            }
            return updatedMessages
          })
        }
        setIsGenerating(false)
      }
    }
  }

  const handleGetStarted = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate('/app')
    } catch (error) {
      console.error('Google Sign-In Error', error)
    }
  }

  const handleGoToChatApp = () => {
    if (currentUser) {
      navigate('/app')
    } else {
      scrollToChatInterface()
    }
  }

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          AI-Powered Biblical Insights
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Explore deep, contextual understanding of biblical texts with our advanced AI companion
        </p>
        
        {/* Chat Interface */}
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-10">
          <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`
                  p-3 rounded-lg max-w-[80%] relative
                  ${message.sender === 'user' 
                    ? 'bg-holy-purple-100 dark:bg-holy-purple-800/30 dark:text-white self-end ml-auto' 
                    : 'bg-gray-100 dark:bg-gray-700/50 dark:text-gray-100 self-start mr-auto'}
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
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="flex items-center space-x-2 p-4 bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700">
            <input 
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a biblical question..."
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

        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleGetStarted}
            className="bg-holy-purple-600 text-white px-8 py-4 rounded-full hover:bg-holy-purple-700 dark:bg-holy-purple-500 dark:hover:bg-holy-purple-600 transition-colors flex items-center justify-center space-x-3"
          >
            <Zap size={24} />
            <span>Get Started</span>
          </button>
          <button 
            onClick={handleGoToChatApp}
            className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-3"
          >
            <span>Go to Chat App</span>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

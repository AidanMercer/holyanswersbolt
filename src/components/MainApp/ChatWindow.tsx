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

        // Finalize the message
        if (completeResponse.output) {
          updateStreamingMessage(completeResponse.output.response)
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

  return (
    <div className="flex-1 bg-white dark:bg-gray-900 p-4 flex flex-col">
      {/* Rest of the component remains the same as before */}
      {/* You can keep the existing rendering logic */}
    </div>
  )
}

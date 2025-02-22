import React, { useState, useEffect } from 'react'
import Sidebar from '../components/MainApp/Sidebar'
import ChatWindow from '../components/MainApp/ChatWindow'
import { useAuth } from '../context/AuthContext'
import { ChatProvider } from '../context/ChatContext'
import { Navigate } from 'react-router-dom'

const MainAppPage: React.FC = () => {
  const { currentUser } = useAuth()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
    }
    
    // Ensure transitions work after initial render
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  // Remove authentication check to allow guest access
  return (
    <ChatProvider>
      <div 
        className={`
          ${theme === 'dark' ? 'dark' : 'light'} 
          min-h-screen 
          bg-white 
          dark:bg-gray-900 
          text-gray-900 
          dark:text-white 
          ${mounted ? 'transition-colors duration-300' : ''}
        `}
      >
        <div className="flex h-screen">
          <Sidebar 
            theme={theme} 
            toggleTheme={toggleTheme} 
          />
          <ChatWindow theme={theme} />
        </div>
      </div>
    </ChatProvider>
  )
}

export default MainAppPage

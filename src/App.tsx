import React, { useState, useEffect } from 'react'
import Header from './components/Layout/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ChatInterface from './components/ChatInterface'
import ChristianitySection from './components/ChristianitySection'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
    }

    // Adjust scroll padding for fixed header
    document.documentElement.style.scrollPaddingTop = '80px'
    
    // Ensure transitions work after initial render
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div 
      className={`
        ${theme === 'dark' ? 'dark' : 'light'} 
        min-h-screen 
        scroll-smooth 
        ${mounted ? 'transition-colors duration-300' : ''}
      `}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <HeroSection theme={theme} />
        <FeaturesSection theme={theme} />
        <ChatInterface theme={theme} />
        <ChristianitySection theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  )
}

export default App

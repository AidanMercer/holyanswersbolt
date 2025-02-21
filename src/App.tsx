import React, { useState, useEffect, useRef } from 'react'
import Header from './components/Layout/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ChatInterface from './components/ChatInterface'
import ChristianitySection from './components/ChristianitySection'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)
  const chatInterfaceRef = useRef<HTMLDivElement>(null)

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

  const scrollToChatInterface = () => {
    chatInterfaceRef.current?.scrollIntoView({ behavior: 'smooth' })
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
        <HeroSection 
          theme={theme} 
          scrollToChatInterface={scrollToChatInterface} 
        />
        <FeaturesSection theme={theme} />
        <div ref={chatInterfaceRef}>
          <ChatInterface theme={theme} />
        </div>
        <ChristianitySection theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  )
}

export default App

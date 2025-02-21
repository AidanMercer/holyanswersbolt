import React from 'react'
import { Sparkles, Zap, Sun, Moon } from 'lucide-react'
import { signInWithPopup } from '../../firebase'
import { googleProvider, auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate('/app')
    } catch (error) {
      console.error('Google Sign-In Error', error)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Sparkles className="text-holy-purple-600 dark:text-holy-purple-400" size={32} />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">HolyAnswers</h1>
        </div>
        <nav className="flex space-x-6 items-center">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-700 dark:text-gray-300 hover:text-holy-purple-600 dark:hover:text-holy-purple-400 transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('chat')} 
            className="text-gray-700 dark:text-gray-300 hover:text-holy-purple-600 dark:hover:text-holy-purple-400 transition-colors"
          >
            Chat
          </button>
          <button 
            onClick={() => scrollToSection('mission')} 
            className="text-gray-700 dark:text-gray-300 hover:text-holy-purple-600 dark:hover:text-holy-purple-400 transition-colors"
          >
            Mission
          </button>
          <button 
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-holy-purple-600 dark:hover:text-holy-purple-400 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            onClick={handleGoogleSignIn}
            className="bg-holy-purple-600 text-white px-4 py-2 rounded-full hover:bg-holy-purple-700 dark:bg-holy-purple-500 dark:hover:bg-holy-purple-600 transition-colors flex items-center space-x-2"
          >
            <Zap size={18} />
            <span>Get Started</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header

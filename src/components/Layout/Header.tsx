import React, { useState, useRef, useEffect } from 'react'
import { Sparkles, Zap, Sun, Moon, LogOut, User, Settings } from 'lucide-react'
import { signInWithPopup, signOut } from '../../firebase'
import { googleProvider, auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

interface HeaderProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const navigate = useNavigate()
  const { currentUser } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate('/app')
    } catch (error) {
      console.error('Google Sign-In Error', error)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.error('Logout Error', error)
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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
          
          {currentUser ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center rounded-full border-2 border-holy-purple-600 overflow-hidden w-10 h-10 focus:outline-none"
              >
                <img 
                  src={currentUser.photoURL || '/default-avatar.png'} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 overflow-hidden">
                  <button 
                    onClick={() => navigate('/profile')}
                    className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <User className="mr-3" size={18} />
                    Profile
                  </button>
                  <button 
                    onClick={() => navigate('/settings')}
                    className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Settings className="mr-3" size={18} />
                    Settings
                  </button>
                  <div className="border-t dark:border-gray-700 my-1"></div>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center px-4 py-2 text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <LogOut className="mr-3" size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={handleGoogleSignIn}
              className="bg-holy-purple-600 text-white px-4 py-2 rounded-full hover:bg-holy-purple-700 dark:bg-holy-purple-500 dark:hover:bg-holy-purple-600 transition-colors flex items-center space-x-2"
            >
              <Zap size={18} />
              <span>Get Started</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header

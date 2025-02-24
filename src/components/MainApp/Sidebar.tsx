import React from 'react'
import { Moon, Sun, LogOut, MessageCircle, Plus, Trash2 } from 'lucide-react'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useChat } from '../../context/ChatContext'

interface SidebarProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ theme, toggleTheme }) => {
  const navigate = useNavigate()
  const { sessions, currentSession, createNewSession, selectSession, deleteSession } = useChat()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      navigate('/')
    } catch (error) {
      console.error('Sign out error', error)
    }
  }

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col justify-between">
      <div>
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">HolyAnswers</h2>
          <button 
            onClick={createNewSession}
            className="text-holy-purple-600 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-full"
          >
            <Plus size={20} />
          </button>
        </div>

        <nav className="space-y-2 max-h-[50vh] overflow-y-auto">
          {sessions.map(session => (
            <div 
              key={session.id}
              className={`
                group w-full flex items-center justify-between 
                rounded transition-colors 
                ${currentSession?.id === session.id 
                  ? 'bg-holy-purple-100 dark:bg-holy-purple-700 text-gray-900 dark:text-gray-100' 
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'}
              `}
            >
              <button 
                onClick={() => selectSession(session.id)}
                className="flex-1 flex items-center space-x-3 p-2"
              >
                <MessageCircle size={20} className={
                  currentSession?.id === session.id 
                    ? 'text-holy-purple-600 dark:text-holy-purple-300' 
                    : 'text-gray-500 dark:text-gray-400'
                } />
                <span className="truncate">{session.title}</span>
              </button>
              <button 
                onClick={() => deleteSession(session.id)}
                className="
                  p-2 text-gray-500 hover:text-red-500 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-200
                  dark:text-gray-400 dark:hover:text-red-400
                "
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </nav>
      </div>

      <div className="space-y-2">
        <button 
          onClick={toggleTheme}
          className="w-full flex items-center space-x-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 dark:hover:text-white"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          <span>Toggle Theme</span>
        </button>

        <button 
          onClick={handleSignOut}
          className="w-full flex items-center space-x-3 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 dark:hover:text-white"
        >
          <LogOut size={20} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar

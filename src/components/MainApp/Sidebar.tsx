import React, { useState } from 'react'
import { Moon, Sun, Plus, Trash2, LogOut } from 'lucide-react'
import { useChat } from '../../context/ChatContext'
import { signOut } from '../../firebase'

interface SidebarProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ theme, toggleTheme }) => {
  const { 
    sessions, 
    currentSession, 
    createNewSession, 
    selectSession, 
    deleteSession 
  } = useChat()

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <div className="w-72 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <button 
          onClick={createNewSession} 
          className="flex items-center space-x-2 bg-holy-purple-600 text-white px-3 py-2 rounded-lg hover:bg-holy-purple-700 transition"
        >
          <Plus size={20} />
          <span>New Chat</span>
        </button>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleTheme} 
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            onClick={handleSignOut}
            className="text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-2">
        {sessions.map(session => (
          <div 
            key={session.id}
            onClick={() => selectSession(session.id)}
            className={`
              px-4 py-2 cursor-pointer flex justify-between items-center 
              ${currentSession?.id === session.id 
                ? 'bg-holy-purple-100 dark:bg-holy-purple-800/50' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700'}
            `}
          >
            <span className="truncate flex-1">
              {session.title || 'New Chat'}
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation()
                deleteSession(session.id)
              }}
              className="text-red-500 hover:text-red-700 opacity-50 hover:opacity-100"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

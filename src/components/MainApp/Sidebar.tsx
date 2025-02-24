import React, { useState, useCallback } from 'react'
import { Plus, Trash2, MessageCircle } from 'lucide-react'
import { useChat } from '../../context/ChatContext'
import { useAuth } from '../../context/AuthContext'

const Sidebar: React.FC = () => {
  const { 
    sessions, 
    currentSession, 
    createNewSession, 
    selectSession, 
    deleteSession 
  } = useChat()
  const { currentUser } = useAuth()
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

  const handleDeleteSession = useCallback((sessionId: string) => {
    if (confirmDelete === sessionId) {
      deleteSession(sessionId)
      setConfirmDelete(null)
    } else {
      setConfirmDelete(sessionId)
    }
  }, [confirmDelete, deleteSession])

  const handleSelectSession = useCallback((sessionId: string) => {
    if (selectSession) {
      selectSession(sessionId)
    }
  }, [selectSession])

  const handleCreateNewSession = useCallback(() => {
    if (createNewSession) {
      createNewSession()
    }
  }, [createNewSession])

  if (!currentUser) return null

  return (
    <div className="w-72 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Chat History
        </h2>
        <button 
          onClick={handleCreateNewSession}
          className="text-holy-purple-600 hover:text-holy-purple-700 dark:text-holy-purple-400"
        >
          <Plus size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2">
        {sessions.map((session) => (
          <div 
            key={session.id}
            className={`
              flex items-center justify-between p-3 rounded-lg cursor-pointer
              ${currentSession?.id === session.id 
                ? 'bg-holy-purple-100 dark:bg-holy-purple-800/50' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700'}
            `}
            onClick={() => handleSelectSession(session.id)}
          >
            <div className="flex items-center space-x-2">
              <MessageCircle 
                size={20} 
                className="text-gray-500 dark:text-gray-400" 
              />
              <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {session.title || `Chat ${sessions.indexOf(session) + 1}`}
              </span>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation()
                handleDeleteSession(session.id)
              }}
              className={`
                text-red-500 hover:text-red-600
                ${confirmDelete === session.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
              `}
            >
              {confirmDelete === session.id ? 'Confirm?' : <Trash2 size={16} />}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

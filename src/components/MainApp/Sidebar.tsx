import React from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { useChat } from '../../context/ChatContext'

const Sidebar: React.FC = () => {
  const { 
    sessions, 
    currentSession, 
    createNewSession, 
    selectSession, 
    deleteSession,
    isLoading 
  } = useChat()

  if (isLoading) {
    return (
      <div className="w-64 bg-gray-100 dark:bg-gray-800 p-4 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-holy-purple-600"></div>
      </div>
    )
  }

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Chat History
        </h2>
        <button 
          onClick={() => createNewSession()}
          className="text-holy-purple-600 hover:text-holy-purple-700 dark:text-holy-purple-400 dark:hover:text-holy-purple-300"
        >
          <Plus size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2">
        {sessions.length === 0 ? (
          <p className="text-gray-500 text-center">No chat sessions</p>
        ) : (
          sessions.map((session) => (
            <div 
              key={session.id}
              onClick={() => selectSession(session.id)}
              className={`
                p-3 rounded-lg cursor-pointer transition-colors 
                ${currentSession?.id === session.id 
                  ? 'bg-holy-purple-100 dark:bg-holy-purple-700/20' 
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'}
              `}
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-800 dark:text-white truncate flex-1">
                  {session.title}
                </span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteSession(session.id)
                  }}
                  className="text-red-500 hover:text-red-600 ml-2"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {new Date(session.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Sidebar

import React, { createContext, useState, useContext, useEffect } from 'react'
import { User, onAuthStateChanged, getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth'
import { auth } from '../firebase'

interface AuthContextType {
  currentUser: User | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isLoading: true
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set persistence to local storage before setting up auth state listener
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user)
          setIsLoading(false)
        }, (error) => {
          console.error('Auth state change error:', error)
          setIsLoading(false)
        })

        return () => unsubscribe()
      })
      .catch((error) => {
        console.error('Error setting persistence:', error)
        setIsLoading(false)
      })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, isLoading }}>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-holy-purple-600"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

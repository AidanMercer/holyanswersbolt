import React from 'react'
import { Zap } from 'lucide-react'
import { signInWithPopup } from '../firebase'
import { googleProvider, auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

interface HeroSectionProps {
  theme: 'light' | 'dark'
}

const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate('/app')
    } catch (error) {
      console.error('Google Sign-In Error', error)
    }
  }

  return (
    <section className="relative py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          AI-Powered Biblical Insights
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Explore deep, contextual understanding of biblical texts with our advanced AI companion
        </p>
        <button 
          onClick={handleGoogleSignIn}
          className="bg-holy-purple-600 text-white px-8 py-4 rounded-full hover:bg-holy-purple-700 dark:bg-holy-purple-500 dark:hover:bg-holy-purple-600 transition-colors flex items-center justify-center mx-auto space-x-3"
        >
          <Zap size={24} />
          <span>Sign In with Google</span>
        </button>
      </div>
    </section>
  )
}

export default HeroSection

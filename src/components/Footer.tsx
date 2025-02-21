import React from 'react'
import { Sparkles, Twitter, Linkedin, Github } from 'lucide-react'

interface FooterProps {
  theme: 'light' | 'dark'
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="text-holy-purple-500" size={32} />
            <h3 className="text-2xl font-bold">HolyAnswers</h3>
          </div>
          <p className="text-gray-400">
            Revolutionizing communication through intelligent, context-aware AI technology.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Product</h4>
          <ul className="space-y-2">
            <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#chat" className="text-gray-400 hover:text-white">Chat Interface</a></li>
            <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-white">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Github /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-500">
          © 2024 HolyAnswers. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

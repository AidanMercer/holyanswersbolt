import React from 'react'
import { Brain, Globe, Shield, Zap } from 'lucide-react'

interface FeaturesSectionProps {
  theme: 'light' | 'dark'
}

const features = [
  {
    icon: Brain,
    title: 'Advanced Understanding',
    description: 'Leveraging cutting-edge natural language processing to comprehend nuanced conversations.'
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Communicate seamlessly across multiple languages with unprecedented accuracy.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your conversations are encrypted and protected with state-of-the-art security protocols.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Instant responses with minimal latency, powered by advanced machine learning algorithms.'
  }
]

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ theme }) => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features, Intelligent Design
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our AI companion is more than just a chatbot. It's an intelligent system 
            designed to understand, adapt, and enhance your communication experience.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow group"
            >
              <feature.icon 
                className="text-holy-purple-600 dark:text-holy-purple-400 mb-4 group-hover:scale-110 transition-transform" 
                size={48} 
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

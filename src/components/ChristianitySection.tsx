import React from 'react'
import { 
  BookOpenIcon, 
  CrossIcon, 
  HeartIcon 
} from 'lucide-react'

interface ChristianitySectionProps {
  theme: 'light' | 'dark'
}

const ChristianitySection: React.FC<ChristianitySectionProps> = ({ theme }) => {
  return (
    <section id="mission" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Empowering Faith Through Technology
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            HolyAnswers: Where AI meets spiritual insight, providing biblically-grounded assistance
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpenIcon,
              title: "Scripture-Informed Responses",
              description: "AI that understands biblical context and provides spiritually-aligned insights."
            },
            {
              icon: CrossIcon,
              title: "Christian Worldview",
              description: "Conversations rooted in Christian principles, supporting your spiritual journey."
            },
            {
              icon: HeartIcon,
              title: "Compassionate Guidance",
              description: "Combining technological intelligence with biblical wisdom and empathy."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                <feature.icon 
                  className="text-holy-purple-600 dark:text-holy-purple-400" 
                  size={48} 
                  strokeWidth={1.5} 
                />
              </div>
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

export default ChristianitySection

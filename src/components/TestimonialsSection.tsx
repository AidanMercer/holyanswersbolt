import React from 'react'
import { Star } from 'lucide-react'

interface TestimonialsSectionProps {
  theme: 'light' | 'dark'
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    quote: "HolyAnswers has transformed how I approach complex problem-solving. It's like having a brilliant assistant 24/7!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    quote: "The contextual understanding is remarkable. It feels like I'm talking to a human, not just a machine.",
    image: "https://images.unsplash.com/photo-1507003211169-0fc1a8c810a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    quote: "Incredible tool for brainstorming and getting instant, intelligent feedback on ideas.",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80"
  }
]

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ theme }) => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real experiences from professionals who have transformed their workflow with HolyAnswers
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

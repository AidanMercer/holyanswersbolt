import { defineConfig } from '@genkit-ai/core'
import { gemini } from '@genkit-ai/gemini'
import { firebaseAuth } from '@genkit-ai/firebase'

export default defineConfig({
  plugins: [
    gemini(),
    firebaseAuth()
  ],
  flows: {
    christianAIChat: async (input: { prompt: string, userId?: string }) => {
      const model = gemini.model('gemini-pro')
      
      const prompt = `You are a Christian AI assistant. Provide a compassionate, biblically-grounded response to the following query: ${input.prompt}`
      
      const response = await model.generate(prompt)
      
      return {
        response: response.text(),
        tone: 'compassionate',
        references: ['Biblical perspective', 'Christian wisdom']
      }
    }
  }
})

import { flow } from '@genkit-ai/core'
import { gemini } from '@genkit-ai/gemini'

export async function generateChatResponse(prompt: string) {
  try {
    const result = await flow.run('christianAIChat', { prompt })

    return {
      response: result.response,
      tone: result.tone,
      references: result.references
    }
  } catch (error) {
    console.error('Genkit AI Error:', error)
    return {
      response: 'I apologize, but I encountered an issue processing your request. Could you please rephrase your question?',
      tone: 'apologetic',
      references: []
    }
  }
}

export async function generateStreamedResponse(prompt: string) {
  try {
    const result = await flow.run('christianAIChat', { prompt })

    // Create a custom async iterator for streaming
    const stream = (async function* () {
      const words = result.response.split(' ')
      let currentChunk = ''
      
      for (const word of words) {
        currentChunk += word + ' '
        yield { 
          output: { 
            response: currentChunk.trim() 
          } 
        }
        
        // Simulate streaming delay
        await new Promise(resolve => setTimeout(resolve, 50))
      }
    })()

    return {
      completeResponse: { output: { response: result.response } },
      stream
    }
  } catch (error) {
    console.error('Genkit AI Streaming Error:', error)
    
    return {
      completeResponse: { 
        output: { 
          response: 'I apologize, but I encountered an issue processing your request.' 
        } 
      },
      stream: (async function* () {
        yield { 
          output: { 
            response: 'I apologize, but I encountered an issue processing your request.' 
          } 
        }
      })()
    }
  }
}

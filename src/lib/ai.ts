import { 
  GoogleGenerativeAI, 
  HarmCategory, 
  HarmBlockThreshold 
} from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_GOOGLE_AI_API_KEY || 'AIzaSyA_EKbVSEysMq6-hr0Fq90EadQpoI_z7VU'

const genAI = new GoogleGenerativeAI(API_KEY)

export async function generateStreamedResponse(prompt: string, context?: any) {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
        }
      ]
    })

    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 500,
        temperature: 0.7,
      }
    })

    const result = await chat.sendMessageStream(prompt)

    // Create an async generator for streaming
    const stream = (async function* () {
      let fullResponse = ''
      for await (const chunk of result.stream) {
        const chunkText = chunk.text || ''
        fullResponse += chunkText
        yield { 
          output: { 
            response: fullResponse.trim() 
          } 
        }
      }
    })()

    return {
      completeResponse: { 
        output: { 
          response: '', 
          references: [] 
        } 
      },
      stream
    }
  } catch (error) {
    console.error('Error in Gemini AI streaming:', error)
    
    return {
      completeResponse: { 
        output: { 
          response: 'Sorry, I could not generate a response at this time.', 
          references: [] 
        } 
      },
      stream: (async function* () {
        yield { 
          output: { 
            response: 'Sorry, I could not generate a response at this time.' 
          } 
        }
      })()
    }
  }
}

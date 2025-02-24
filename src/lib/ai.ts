import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure you have a valid API key from Google AI Studio
const API_KEY = import.meta.env.VITE_GOOGLE_GENAI_API_KEY || ''

// Initialize the Google AI client
const genAI = new GoogleGenerativeAI(API_KEY);

// Main chat generation function
export async function generateChatResponse(prompt: string) {
  if (!API_KEY) {
    throw new Error('Google GenAI API Key is missing. Please set VITE_GOOGLE_GENAI_API_KEY in your environment.')
  }

  try {
    // Use the Gemini Pro model for text generation
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate the response
    const result = await model.generateContent(
      `You are a Christian AI assistant. Provide a compassionate, biblically-grounded response to the following query: ${prompt}`
    );

    const response = result.response.text();

    return {
      response: response,
      tone: 'compassionate',
      references: ['Biblical perspective', 'Christian wisdom']
    };
  } catch (error) {
    console.error('Google GenAI Error:', error);
    return {
      response: 'I apologize, but I encountered an issue processing your request. Could you please rephrase your question?',
      tone: 'apologetic',
      references: []
    };
  }
}

// Streaming response generation
export async function generateStreamedResponse(prompt: string) {
  if (!API_KEY) {
    throw new Error('Google GenAI API Key is missing. Please set VITE_GOOGLE_GENAI_API_KEY in your environment.')
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate the response
    const result = await model.generateContent(
      `You are a Christian AI assistant. Provide a compassionate, biblically-grounded response to the following query: ${prompt}`
    );

    const response = result.response.text();

    // Create a custom async iterator for streaming
    const stream = (async function* () {
      const words = response.split(' ');
      let currentChunk = '';
      
      for (const word of words) {
        currentChunk += word + ' ';
        yield { 
          output: { 
            response: currentChunk.trim() 
          } 
        };
        
        // Simulate streaming delay
        await new Promise(resolve => setTimeout(resolve, 50));
      }
    })();

    return {
      completeResponse: { output: { response } },
      stream
    };
  } catch (error) {
    console.error('Google GenAI Streaming Error:', error);
    
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
        };
      })()
    };
  }
}

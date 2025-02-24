import { generate, generateStream } from 'genkit';
import { z } from 'zod';

// Define a schema for Christian AI responses
const ChristianResponseSchema = z.object({
  response: z.string(),
  biblicalReference: z.string().optional(),
  tone: z.enum(['compassionate', 'encouraging', 'instructive']).optional()
});

// Main chat generation function using Genkit
export async function generateChatResponse(prompt: string) {
  try {
    const { output } = await generate({
      prompt: `You are a Christian AI assistant. Provide a compassionate, biblically-grounded response to the following query: ${prompt}`,
      output: { schema: ChristianResponseSchema }
    });

    return output || {
      response: 'I apologize, but I could not generate a response at this time.',
      tone: 'apologetic'
    };
  } catch (error) {
    console.error('Genkit AI Error:', error);
    return {
      response: 'I apologize, but I encountered an issue processing your request.',
      tone: 'apologetic'
    };
  }
}

// Streaming response generation
export async function generateStreamedResponse(prompt: string) {
  try {
    const { response, stream } = await generateStream({
      prompt: `You are a Christian AI assistant. Provide a compassionate, biblically-grounded response to the following query: ${prompt}`,
      output: { schema: ChristianResponseSchema }
    });

    return {
      completeResponse: await response,
      stream
    };
  } catch (error) {
    console.error('Genkit AI Streaming Error:', error);
    
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

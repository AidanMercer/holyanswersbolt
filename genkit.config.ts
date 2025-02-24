import { defineConfig } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';
import { z } from 'zod';

export default defineConfig({
  plugins: [
    googleAI()
  ],
  
  // Define a custom flow for Christian AI responses
  flows: {
    christianAIResponse: {
      prompt: async ({ prompt }) => {
        const model = 'googleai/gemini-1.5-pro-latest';
        
        const schema = z.object({
          response: z.string(),
          biblicalReference: z.string().optional(),
          tone: z.enum(['compassionate', 'encouraging', 'instructive']).optional()
        });

        const result = await generate({
          model,
          prompt: `You are a compassionate Christian AI assistant. Provide a biblically-grounded, loving response to the following query: ${prompt}`,
          output: { schema }
        });

        return result;
      }
    }
  }
});

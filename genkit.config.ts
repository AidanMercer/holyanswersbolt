import { defineConfig } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export default defineConfig({
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
      apiKey: process.env.GOOGLE_AI_API_KEY
    })
  ],
  defaultModel: 'googleai/gemini-1.5-flash-latest'
})

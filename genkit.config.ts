import { defineConfig } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export default defineConfig({
  plugins: [
    googleAI()
  ],
  defaultModel: 'googleai/gemini-1.5-flash-latest'
})

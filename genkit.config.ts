import { defineConfig } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export default defineConfig({
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
      apiKey: "AIzaSyA_EKbVSEysMq6-hr0Fq90EadQpoI_z7VU"
    })
  ],
  defaultModel: 'googleai/gemini-1.5-flash-latest'
})

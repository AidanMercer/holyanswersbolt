import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'import.meta.env.VITE_GOOGLE_GENAI_API_KEY': JSON.stringify(process.env.VITE_GOOGLE_GENAI_API_KEY)
  },
  build: {
    rollupOptions: {
      external: [
        '@genkit-ai/core',
        '@genkit-ai/gemini',
        '@genkit-ai/firebase',
        '@google/generative-ai',
        'react-router-dom'
      ]
    }
  }
})

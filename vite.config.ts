import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom',
      'firebase/auth': 'firebase/auth'
    }
  },
  optimizeDeps: {
    include: ['firebase/auth', 'uuid']
  },
  build: {
    rollupOptions: {
      external: []
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio-Louis-Coggon/', 
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    },
    historyApiFallback: true, 
  },
  plugins: [react()],
})


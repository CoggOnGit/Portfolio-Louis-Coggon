import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio-louis-coggon', 
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    },
    historyApiFallback: true, 
  },
  plugins: [react()],
})


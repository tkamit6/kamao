import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/sendmail': {
        target: 'https://kamao-api.vercel.app/',
        secure: false,
        changeOrigin: true
      }
    }
  }
})


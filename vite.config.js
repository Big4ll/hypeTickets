import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '592dbfed-5ac9-4232-8472-9795c45e35e2-00-3nmkkqr1ppezt.worf.replit.dev'
    ],
    host: true,
    port: 5173
  }
})

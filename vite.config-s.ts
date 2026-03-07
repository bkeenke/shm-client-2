import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: "0.0.0.0",
    port: 8082,
    proxy: {
      '/shm': {
        // target: 'https://shm.bkcloud.ru',
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  }
})

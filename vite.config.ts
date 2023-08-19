import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@layouts': path.resolve(__dirname, '/src/layouts'),
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@data': path.resolve(__dirname, '/data')
    }
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind v4 plugin continuous processing ke liye
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // '@' alias support
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8443, // Figma Make environment default port
  },
})

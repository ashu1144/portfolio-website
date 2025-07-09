import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  base: '/portfolio-website/',
  server: {
    host: '0.0.0.0', // Allows access from network
    port: 3000,       // Optional: specify a custom port
  }
})


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      "/api": {
        target: "http://8.135.236.59:8000/",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  }
})

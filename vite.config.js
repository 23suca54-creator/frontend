import { defineConfig } from 'vite'

// Vite config: proxy API requests to backend during development
export default defineConfig({
  server: {
    proxy: {
      // Proxy /jobs to the Spring Boot backend running on port 8080
      '/jobs': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
      // Proxy h2-console if needed
      '/h2-console': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

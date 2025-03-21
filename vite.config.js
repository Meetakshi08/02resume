import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/02resume/',  
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true  
  }
});

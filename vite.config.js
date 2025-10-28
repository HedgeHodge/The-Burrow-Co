import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // or '/repo-name/' if using project pages
  build: {
    outDir: 'docs', // Change output from 'dist' to 'docs'
    emptyOutDir: true,
  }
})
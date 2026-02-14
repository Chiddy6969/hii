import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  // VALIDATION REQUIRED:
  // Change 'valentine-proposal' to match your EXACT GitHub repository name.
  // E.g. If your repo is https://github.com/john/my-love, change this to '/my-love/'
  if (command !== 'serve') {
    config.base = '/hii/'
  }

  return config
})
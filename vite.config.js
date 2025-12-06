import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// When deploying to GitHub Pages at https://vli18.github.io/vivli-website/
// set base to the repo name so asset links point to /vivli-website/assets/...
export default defineConfig({
  base: '/vivli-website/',
  plugins: [react()],
})
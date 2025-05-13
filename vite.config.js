import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/proyecto-modulo5/',
  plugins: [react()],
})


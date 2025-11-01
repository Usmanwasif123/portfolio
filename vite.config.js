// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  // This tells Vite the base URL in production (GH Pages)
  base: mode === 'production' ? '/portfolio/' : '/',
  plugins: [react()],
}));

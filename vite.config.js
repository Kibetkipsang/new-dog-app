import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set this to your subpath if needed
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Optional: Organize assets in a subdirectory
    emptyOutDir: true, // Clear the output directory before building
  },
  server: {
    port: 3000, // Optional: Set a specific port for local development
  },
});
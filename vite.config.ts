import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This is the default output directory
    assetsDir: 'assets', // Optional: Specify an assets directory
  },
});

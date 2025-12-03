import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'todo', 
      filename: 'remoteEntry.js', 
      exposes: {
        './Todo': './src/App.jsx', 
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5001,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    minify: false,
    modulePreload: false,
  },
});

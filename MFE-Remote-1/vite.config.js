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
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
        "react-router-dom": { singleton: true, eager: true }
      }
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

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        todo: {
          type: 'module', 
          name: 'todo',
          entry: 'https://mfe-remote-1.vercel.app/assets/remoteEntry.js',
        },
        login :{
          type:'module',
          name:'login',
          entry:'https://mfe-remote-2.vercel.app/assets/remoteEntry.js'
        }
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 5000,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
  },
});

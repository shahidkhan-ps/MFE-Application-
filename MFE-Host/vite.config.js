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
          entry: 'https://mfe-remote-1.vercel.app/remoteEntry.js',
        },
        login :{
          type:'module',
          name:'login',
          entry:'https://mfe-remote-2.vercel.app/remoteEntry.js'
        }
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
        "react-router-dom": { singleton: true, eager: true }
      }
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

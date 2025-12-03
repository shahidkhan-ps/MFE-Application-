import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "login",
      filename: "remoteEntry.js",
      exposes: {
        "./Login": "./src/App.jsx",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
        "react-router-dom": { singleton: true, eager: true }
      }
    })
  ],
  build: {
    target: "esnext",
    minify: false,
    modulePreload:false
  },
  server: {
    host: "0.0.0.0",
    port: 5002
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name:"todo",
      filename:"remoteEntry.js",
      exposes:{
        "./Todo":"./src/App.jsx",
      },
      shared:["react","react-dom"]
    })  
  ],
  build:{
    target:"esnext",
    rollupOptions: {
    output: {
      format: "system"   // required for module federation
    }
  }
  }
})

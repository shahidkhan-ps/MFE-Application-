import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name:"host",
      remotes:{
        login:"login@https://mfe-remote-2.vercel.app/remoteEntry.js",
        todo:"todo@https://mfe-remote-1.vercel.app/remoteEntry.js"
      },
      shared:["react","react-dom"]
    })
  ],
  build:{
    target:"esnext",
}
})

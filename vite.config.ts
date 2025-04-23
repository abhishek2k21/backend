// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  
  // 1) Force Vite to bundle the pre-built ESM version of three-mesh-bvh
  optimizeDeps: {
    include: ['three-mesh-bvh'],
  },

  // 2) Alias any import of three-mesh-bvh → its dist module entrypoint
  resolve: {
    alias: {
      'three-mesh-bvh$': resolve(
        __dirname,
        'node_modules/three-mesh-bvh/dist/index.module.js'
      ),
    },
  },

  // 3) Ensure CommonJS parts of that package still get processed
  build: {
    commonjsOptions: {
      include: [/node_modules\/three-mesh-bvh/, /node_modules/],
    },
  },

  // (Optional) disable the red overlay if you prefer console-only errors
  server: {
    hmr: {
      overlay: false,
    },
  },
})

import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig(({mode}) =>{

  const env = loadEnv(mode, process.cwd());
  
  return{
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],

  server:{
    proxy: {
      "/api":{
        target: "https://api.brawlstars.com/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          Authorization: "Bearer " + env.VITE_API_KEY
        }
      }
    }
  }
  }
} )
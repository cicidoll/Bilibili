import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  port: 3000,
  hostname: "bilibili.com",
  // server:{
  //   '/api': {
  //     target: 'http://api.bilibili.com',
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, '')
  //   }
  // }
  // proxy:{
  //   '/api': {
  //     target: 'http://api.bilibili.com/',
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, '')
  //   }
  // }
  server: {
    proxy:{
      '/api': {
        target: 'http://api.bilibili.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
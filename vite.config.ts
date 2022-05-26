import { resolve } from 'path'
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'

export default defineConfig(() => ({
  base: '/',
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
}))

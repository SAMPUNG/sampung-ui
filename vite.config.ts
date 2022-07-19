/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(() => ({
  base: './',
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        $block: 'sam',
      },
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    vue(),
    vueJsx({}),
  ],
  preview: {
    port: 7512,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 7511,
  },
  test: {
    include: ['src/**/*.spec.{ts,tsx}', 'tests/**/*.spec.ts'],
    outputFile: 'test-results.json',
    reporters: 'json',
    root: './',
  },
}))

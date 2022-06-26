import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte';
import manifest from './src/manifest.json';
import { crx } from '@crxjs/vite-plugin';

export default defineConfig({
  root: "./src",
  build: {
    rollupOptions: {
      input: "src/manifest.json",
    }
  },
  plugins: [
    svelte({
      emitCss: false
    }),
    crx({ manifest })
  ]
})
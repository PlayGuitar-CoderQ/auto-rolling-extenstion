import { defineConfig } from 'vite'
import manifest from './src/manifest.json';
import solidPlugin from 'vite-plugin-solid';
import { crx } from '@crxjs/vite-plugin';

export default defineConfig({
  root: "./src",
  build: {
    rollupOptions: {
      input: "src/manifest.json",
    }
  },
  plugins: [
    solidPlugin(),
    crx({ manifest })
  ]
})
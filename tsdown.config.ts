import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: './src/index.js',
  outDir: 'dist',
  platform: 'neutral'
})
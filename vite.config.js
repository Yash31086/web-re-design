import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

// Automatically gather all .html files in the root folder as entry points
const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html'));
const inputs = {};
htmlFiles.forEach(file => {
  const name = file.replace(/\.html$/, '');
  inputs[name] = resolve(__dirname, file);
});

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: inputs
    }
  }
});

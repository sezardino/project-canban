const path = require('path');
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const svgrPlugin = require('vite-plugin-svgr');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

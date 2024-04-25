import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5174 // this will change the port number to 5174
  },
  plugins: [react()]
});

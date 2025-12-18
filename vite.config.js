import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://ug65-novel-dev-2.azurewebsites.net',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api/, '/api'),
  //     },
  //   },
  // },
});

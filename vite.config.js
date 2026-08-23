import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
// Sitio de dos páginas: la landing principal (index.html) y la landing
// corta tipo embudo (corto/index.html), pensada para tráfico de anuncios.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        corto: resolve(__dirname, 'corto/index.html'),
      },
    },
  },
})

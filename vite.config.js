// Archivo generado automáticamente
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',  // Define la raíz del proyecto como la carpeta actual
  publicDir: 'public', // Indica a Vite que busque los archivos estáticos en la carpeta 'public'
  build: {
    outDir: 'dist', // Directorio de salida de la compilación
  },
});
// Archivo generado automáticamente
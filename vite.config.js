import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  // Relative assets keep the same build working at both the Netlify root and
  // the kormilo.io/fleet/nautilus proxy path.
  base: './',
  build: {
    outDir: '../web',
    emptyOutDir: false, // Prevent deleting prototype.html in web/
  },
  server: {
    port: 3000,
  }
});

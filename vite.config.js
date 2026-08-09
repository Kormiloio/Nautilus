import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../web',
    emptyOutDir: false, // Prevent deleting prototype.html in web/
  },
  server: {
    port: 3000,
  }
});

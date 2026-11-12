import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  // The Kormilo proxy route has no trailing slash, so relative assets would
  // resolve under /fleet/assets. Use the canonical app origin for immutable
  // production assets so both entry points load the same build.
  base: 'https://kormilo-nautilus.netlify.app/',
  build: {
    outDir: '../web',
    emptyOutDir: false, // Leave web/ in place between builds; Vite overwrites the files it emits
  },
  server: {
    port: 3000,
  }
});

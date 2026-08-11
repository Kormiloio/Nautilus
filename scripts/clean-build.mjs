import { rmSync } from 'node:fs';

const generatedAssets = new URL('../web/assets/', import.meta.url);

// Vite writes hashed bundles outside its source root. Remove only that
// generated directory so stale hashes cannot be committed or deployed while
// preserving web/prototype.html and other historical artifacts.
rmSync(generatedAssets, { recursive: true, force: true });

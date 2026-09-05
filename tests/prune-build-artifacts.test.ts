import { execSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';

/**
 * Sets up a temporary `web` folder mimicking the production build output.
 * The script under test (`scripts/prune-build-artifacts.mjs`) expects the
 * files `web/index.html` and `web/assets/*` relative to the current working
 * directory.
 */
function setupTempWeb(): string {
  const tmpRoot = mkdtempSync(join(process.cwd(), 'tmp-prune-test-'));
  const webDir = join(tmpRoot, 'web');
  const assetsDir = join(webDir, 'assets');
  execSync(`mkdir -p "${assetsDir}"`);

  // index.html references only the "keep" assets
  const indexHtml = `<!DOCTYPE html><html><head>` +
    `<link rel="stylesheet" href="/assets/index-keep.css">` +
    `<script src="/assets/index-keep.js"></script>` +
    `</head><body></body></html>`;
  writeFileSync(join(webDir, 'index.html'), indexHtml);

  // Assets that should be kept
  writeFileSync(join(assetsDir, 'index-keep.js'), '// keep');
  writeFileSync(join(assetsDir, 'index-keep.css'), '/* keep */');

  // Stale assets that should be removed by the prune script
  writeFileSync(join(assetsDir, 'index-old.js'), '// old');
  writeFileSync(join(assetsDir, 'index-old.css'), '/* old */');

  return tmpRoot;
}

describe('prune-build-artifacts.mjs', () => {
  let tmpRoot: string;

  beforeAll(() => {
    tmpRoot = setupTempWeb();
    // Run the pruning script with cwd set to the temporary project root.
    // The script looks for `web/index.html` relative to cwd, so this works.
    execSync('node ../scripts/prune-build-artifacts.mjs', {
      cwd: tmpRoot,
      stdio: 'inherit',
    });
  });

  afterAll(() => {
    rmSync(tmpRoot, { recursive: true, force: true });
  });

  it('removes stale hashed assets while preserving referenced ones', () => {
    const assetsPath = join(tmpRoot, 'web', 'assets');
    expect(existsSync(join(assetsPath, 'index-keep.js'))).toBe(true);
    expect(existsSync(join(assetsPath, 'index-keep.css'))).toBe(true);
    expect(existsSync(join(assetsPath, 'index-old.js'))).toBe(false);
    expect(existsSync(join(assetsPath, 'index-old.css'))).toBe(false);
  });
});

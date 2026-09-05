import { readdirSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const webDir = join(__dirname, '..', 'web');
const assetsDir = join(webDir, 'assets');
const indexPath = join(webDir, 'index.html');

if (!existsSync(indexPath) || !existsSync(assetsDir)) {
  console.log('No web/index.html or web/assets/ directory found to prune.');
  process.exit(0);
}

const indexContent = readFileSync(indexPath, 'utf-8');

// Find all asset filenames referenced in index.html (e.g. index-Cs3KkU1t.js, index-C9x7tIhM.css)
const referencedAssets = new Set();
const matches = indexContent.matchAll(/\/assets\/(index-[A-Za-z0-9_-]+\.(?:js|css))/g);
for (const match of matches) {
  referencedAssets.add(match[1]);
}

const files = readdirSync(assetsDir);
let prunedCount = 0;

for (const file of files) {
  // Only target hashed bundle files matching index-*.js or index-*.css
  if (/^index-[A-Za-z0-9_-]+\.(js|css)$/.test(file)) {
    if (!referencedAssets.has(file)) {
      const fullPath = join(assetsDir, file);
      console.log(`Pruning stale build artifact: ${file}`);
      rmSync(fullPath, { force: true });
      prunedCount++;

      // If tracked by git, stage its removal
      try {
        execSync(`git rm --cached "${fullPath}"`, { stdio: 'ignore' });
      } catch {
        // Ignored if file wasn't tracked by git
      }
    }
  }
}

if (prunedCount === 0) {
  console.log('✓ No stale build artifacts found in web/assets.');
} else {
  console.log(`✓ Pruned ${prunedCount} stale build artifact(s).`);
}

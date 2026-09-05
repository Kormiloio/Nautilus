# Frequently Asked Questions (FAQ)

## Build Artifact Pruning

**Q: What is the Build Artifact Pruning step?**
- A: It is a post‑build cleanup that removes orphaned, content‑hashed files (e.g. `index-<hash>.js`, `index-<hash>.css`) from the `web/assets/` directory that are no longer referenced by `web/index.html`. This keeps the repository and deployment bundle lean.

**Q: Why do we need it?**
- Vite generates new hashed filenames on every build. Over time, stale files accumulate, inflating the repository size and increasing deployment upload time. Pruning eliminates these dead assets automatically.

**Q: How does the script work?**
- `scripts/prune-build-artifacts.mjs` parses `web/index.html` to discover the current entry‑point assets.
- It scans `web/assets/` for any files matching the `index-*.js`/`index-*.css` pattern.
- Any file not listed in the HTML is removed from the filesystem.
- If the file is tracked by Git, the script runs `git rm` to stage its deletion.

**Q: When is the script executed?**
- It is part of the `npm run build` pipeline: `node scripts/clean-build.mjs && vite build && node scripts/prune-build-artifacts.mjs`.
- You can also run it manually with `npm run prune`.

**Q: What files are affected?**
- Only assets in `web/assets/` that match the `index-*.js` or `index-*.css` naming convention. Other static assets (fonts, images, illustrations) are untouched.

**Q: How can I verify that pruning ran successfully?**
- The script prints `✓ No stale build artifacts found in web/assets.` when nothing needed removal.
- If stale files are found, the output lists each removed file and Git will stage the removal.

## General Documentation

**Q: Where can I find more information about the project?**
- `docs/PRD.md` – Product Requirements Document.
- `docs/PROJECT_REVIEW.md` – Architecture review and audit.
- `README.md` – Overview, build steps, and now includes a section on Build Artifact Pruning.

**Q: How do I contribute documentation?**
- Fork the repository, edit or add markdown files under `docs/`, and submit a Pull Request.

---
*Last updated: September 5 2026*

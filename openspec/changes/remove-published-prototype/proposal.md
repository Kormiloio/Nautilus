# Proposal: Remove the published prototype page

## Why

`web/prototype.html` is the original Claude-generated concept export, kept as a historical reference. Because it sits in the Vite output directory, Netlify publishes it at `/prototype.html` on the live site. It is not part of the app, is not linked from it, and is not maintained.

The Marina survey of commit `c712156` flagged it for dynamic code execution (it re-executes its own embedded scripts at load) and plain-HTTP references. Neither is exploitable from outside input, but an unmaintained page on the public origin adds review noise and attack surface for no learner benefit.

## What changes

- Delete `web/prototype.html` so it is no longer deployed.
- Keep it retrievable from git history: `git show 2918c96:web/prototype.html`.
- Update `scripts/clean-build.mjs` comment, the README, PRD, project review, archived prototype spec, and the `add-200-day-learning-voyage` design to say where the artifact now lives.

## Impact

- No learner-facing behavior changes; the app never linked to the page.
- `/prototype.html` returns the site's normal not-found response after deploy.

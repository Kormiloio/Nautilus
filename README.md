# Nautilus

Nautilus is the project repository for **Učimo crnogorski**, a responsive web app intended to help teenagers build practical Montenegrin language skills before a family trip to Montenegro.

## Current status

Nautilus now uses a modular, dependency-light Vite architecture. Application screens live in `src/components/`, voyage and progress rules live in `src/engine/`, and all 33 topics plus the Alphabet bonus live in `src/content/topics.json`. Ajv validates content and the curriculum map before release, while Vitest covers lesson generation, weekday scheduling, topic coverage, session generation, and streak calculations.

Vite builds the deployable site into `web/`, preserving the original generated concept as `web/prototype.html`. The 200-day voyage is implemented as 30 core topics across ten learning months, with Past Tense, Future Tense, and Arriving in Montenegro retained as optional advanced/capstone topics. Content expansion and fluent language/audio review remain incomplete.

## Product direction

- Audience: teenagers (12+) who know some Montenegrin words
- Timeline: a 200-day, 10-month learning voyage with five planned lessons per week
- Experience: a guided daily voyage plus free-browse topics with flashcards, matching, quizzes, listening/repeat, and lightweight role-play
- Content: Latin and Cyrillic alphabets, vocabulary, phrases, numbers, family language, simple grammar, and travel-oriented topics
- Platforms: phone, tablet, and desktop web browsers
- Motivation: light-touch stars and streaks, with no forced lesson sequence

## Repository map

- [`docs/PRD.md`](docs/PRD.md) — product requirements and roadmap
- [`docs/PROJECT_REVIEW.md`](docs/PROJECT_REVIEW.md) — current audit, risks, and missing inputs
- [`openspec/`](openspec) — proposed behavior and implementation plan
- [`src/main.js`](src/main.js) — application state and navigation
- [`src/components/`](src/components) — modular application screens
- [`src/engine/`](src/engine) — voyage, activity, schedule, and progress rules
- [`src/content/topics.json`](src/content/topics.json) — content and curriculum map
- [`src/content/schema.json`](src/content/schema.json) — Ajv content contract
- [`web/index.html`](web/index.html) — generated production entry point
- [`web/prototype.html`](web/prototype.html) — preserved original prototype

## Local development

Node.js is required. From the repository root:

```sh
npm install
npm run validate
npm test
npm run dev
```

Create the production output with:

```sh
npm run build
```

The build writes to `web/` so the existing Netlify deployment remains compatible.

## Next step

Expand and review the lesson content so that each topic can support five distinct daily lessons, then pilot the first four weeks as a family before authoring the complete voyage.
## Build artifact pruning

The `npm run build` pipeline now automatically runs `scripts/prune-build-artifacts.mjs` to remove orphaned hashed assets from `web/assets/`. This keeps the repository clean and reduces deployment size. You can also run it manually with `npm run prune`.

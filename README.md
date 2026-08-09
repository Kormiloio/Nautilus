# Nautilus

Nautilus is the project repository for **Učimo crnogorski**, a responsive web app intended to help teenagers build practical Montenegrin language skills before a family trip to Montenegro.

## Current status

Product discovery and specification are in progress. The Claude-generated prototype is present at `web/index.html` and has received an initial source and browser review. It is a bundled artifact, not maintainable application source. The original 224-line lesson set is still missing as a separate source document.

## Product direction

- Audience: teenagers (12+) who know some Montenegrin words
- Timeline: roughly 10 months of preparation for travel next summer
- Experience: free-browse topics with a mix of flashcards, matching, quizzes, listening/repeat, and lightweight role-play
- Content: Latin and Cyrillic alphabets, vocabulary, phrases, numbers, family language, simple grammar, and travel-oriented topics
- Platforms: phone, tablet, and desktop web browsers
- Motivation: light-touch stars and streaks, with no forced lesson sequence

## Repository map

- [`docs/PRD.md`](docs/PRD.md) — product requirements and roadmap
- [`docs/PROJECT_REVIEW.md`](docs/PROJECT_REVIEW.md) — current audit, risks, and missing inputs
- [`openspec/`](openspec) — proposed behavior and implementation plan

## Next step

Recover the original lesson source and review the draft PRD. Then use the `define-learning-foundation` OpenSpec change to align the prototype with the agreed product direction before selecting the production architecture.

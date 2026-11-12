# Proposal: Cumulative sentence practice, sentence review, listening practice, and Detective case packs

## Status

Retrospective documentation for work implemented on branch `wip/sentences-listening-detective` (commit `5c1e5f2`) before its OpenSpec record existed.

**Released out of order.** Catalog revision 9 was published to production Supabase between 2026-10-28 and 2026-11-11, by a person and tool not recorded, before fluent review. From then on the server served revision 9 lessons to the Oct 28 client. `main` still expected revision 7, so every Netlify deploy failed. On 2026-11-12 the owner decided to ship this branch so the code, GitHub `main`, and Netlify match production again. Fluent review of the content is still outstanding and now happens after release.

## Why

From voyage day 27 the focused pilot teaches a subject's words across several days, but learners rarely put those words into whole sentences, never hear sentences on their own, and lose the sentences they got wrong. The False-Friend Detective side quest also replays the same three cases at every milestone. This change makes later voyage days feel cumulative and gives learners a way back to what they missed.

## Learner and family outcome

- From day 27, lessons ask learners to use words they **already know** inside one short, explained sentence pattern (for example "Ovo je …", "Gdje je …"), not just recognize new words.
- Learners build and complete sentences, then say them and act out a short dialogue together in Family Play.
- A sentence a learner gets wrong comes back later on that device for a calm retry, and leaves once it has been answered correctly twice.
- Any signed-in learner can open **Listening practice**: hear a sentence (normal or slow), then pick its meaning or put its words in order. If no voice is available, a written path is offered.
- Each later Detective milestone (40, 70, … 190 completed family lessons) brings a new case pack (after 190 the packs repeat in order, and each repeat still earns its own badge — decided 2026-11-11) with clue-word glosses, and a running game cannot change underneath a family.

## What changes

1. **Cumulative sentence pack (catalog revision 9).** Built from four sentence frames and an allow-list of nouns, using only nouns the learner has already been introduced to (at least two familiar words are required, otherwise no pack).
2. **Sentence lessons (catalog revision 8).** Nine authored topic packs (drinks, meals, market, garden, café, family, conversation, school, time) for source days 27–70. These remain selectable for revision 8 and act as the listening-practice fallback.
3. **Lesson shape for focused days.** Discover → match → sentence steps (pattern note, two builders, two single-blank completions, dialogue or role-play) → quiz → reflection that asks for a whole sentence.
4. **Recap correctness.** The focused recap separates truly new words from words practiced again, using the real focused schedule and not authored source days.
5. **Sentence review.** Local, per-user, per-pack mistake queue fed by verified individual attempts and Family Play steps.
6. **Listening practice.** Up to six sentence exercises from the current or next lesson, using device speech synthesis.
7. **Detective case packs.** Six more three-case editions. Server snapshots the cases into the session row and validates answers against the snapshot.
8. **Family session conflict handling.** If a second device already opened the family session, the client reuses that session instead of failing.
9. **Release tooling.** Scripts that prepare (but never apply) the revision-9 catalog SQL and the Detective migration, and that test both against a local Supabase container.

## Content, privacy, accessibility, and audio

- **Content is draft.** Every new Montenegrin sentence, frame, gloss, and Detective case is marked `reviewStatus: 'draft'` and has **not** had fluent human review. Nothing in this change may be described as reviewed.
- **Privacy.** Sentence review stores sentence text, support text, miss counts, and due times in browser `localStorage`, keyed by user and pack, capped at 100 items. It is never sent to the server and is not shared between devices. Listening practice stores nothing. Detective answers use the existing family side-quest tables.
- **Accessibility.** New controls are buttons with `aria-label`/`aria-pressed`, status regions use `role="status"`/`aria-live`, and every audio activity has a written alternative.
- **Audio.** Uses on-device speech synthesis only. Voice selection now prefers `cnr-ME`/`cnr` before Croatian, Serbian, and Bosnian fallbacks. Without a compatible voice the app explains this and offers written practice; it never pronounces target text with an English voice. No microphone is used.

## Conflicts with existing rules (still open after release)

1. **Reviewed content rule.** GAMEPLAY PRD §11.5 forbids publishing a sentence activity without reviewed language data. `scripts/prepare-sentence-release.mjs` would publish draft sentences in catalog revision 9.
2. **No hard-coded language in the engine.** *Resolved 2026-11-12.* Frames and nouns moved to `src/content/daily-vocabulary/montenegrin-sentence-frames.json`, registered per pack in `PILOT_SENTENCE_FRAMES`; the engine contains no language and generates byte-identical revision-9 content for days 27–200.
3. **Client default revision.** `generateSession` and `buildFamilyPlaySteps` default to revision 9, and `verify-verified-release.mjs` expects revision 9. Production has served revision 9 since it was published, so this now matches.

## Unresolved product decisions

- Who performs fluent review of the sentence frames, nine topic packs, and Detective cases? Release already happened, so review is post-release; the checklist is `docs/reviews/montenegrin-cumulative-content-review.md`.
- Should sentence review sync across a learner's devices (server-side) or stay device-local?
- Should listening-practice results count toward any progress, or stay unrecorded practice?

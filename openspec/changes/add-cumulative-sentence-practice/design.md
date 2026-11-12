# Design: Cumulative sentence practice, sentence review, listening practice, and Detective case packs

## Boundaries

### Learning content

- `src/content/sentence-lessons.js`: nine draft Montenegrin topic packs, each covering a source-day range between 27 and 70. Each pack has a pattern note, six sentences, and a four-line dialogue. Every item carries `languageTag: 'cnr'`, `script: 'Latn'`, `direction: 'ltr'`, `reviewStatus: 'draft'`.
- `src/content/daily-vocabulary/montenegrin-sentence-frames.json`: four draft frames (`identify` "Ovo je", `locate` "Gdje je", `here` "Tu je", `negative` "To nije"), each with a word-by-word gloss and a teaching note, an explicit noun allow-list with English glosses, the pack's language metadata and `reviewStatus`, and `startDay` (27). Nouns are written in their taught nominative form, and grammar is never inferred from spelling. It is registered per pack in `PILOT_SENTENCE_FRAMES` (`src/content/daily-plans.js`); a pack without an entry gets no cumulative sentences. `src/engine/cumulative-sentences.js` contains selection logic only, enforced by a unit test.
- `src/content/detective-editions.js`: six draft editions of three cases each. Every case has the word, sentence, answer id, choices, explanation, and `clueWords` gloss. Milestone 10 keeps the original cases from `side-quests.js`.
- `src/content/daily-plans.js`: adds `DAILY_SENTENCE_REVISION = 8`, `DAILY_CUMULATIVE_REVISION = 9`, and `getFocusedPilotWordIds()`. That function is now the single source for which word ids a focused or bridge day uses.

### Activity logic

- **Allocation.** `getDailyVocabularyAllocation(lesson, { focused, cumulative })` walks earlier pilot lessons in schedule order to build `priorWordIds` from the actual focused schedule. It then splits the recap into new items and recalled items. It also exposes `focusStep`, `focusSourceDay`, and `voyageDay`.
- **Revision gating.** At revision ≥ 9 the allocation gets `buildCumulativeSentencePack()`. At revision 8 it gets the topic pack from `getSentencePractice()`. Below 8, sentence practice is omitted. Both `generateSession` and `buildFamilyPlaySteps` honor an explicit `catalogRevision`, so verified attempts replay the revision they were pinned to.
- **Cumulative pack selection.** The pack uses only allow-listed nouns that are prior or current for the learner. It returns `null` when fewer than two are familiar. It picks up to three nouns: the current focus noun first, then recent ones, then older ones, rotating by `voyageDay − startDay`. The frame index is `min(frames − 1, voyageDay − startDay)`, and the previous frame is included for retrieval.
- **Sentence steps.** `buildSentencePracticeSteps` runs: familiar words → pattern lesson (frame, example, noun) → hear the sentences → for two sentences, a builder (tokens never start in answer order) and a single-blank completion (blank at second-to-last token, three distractors drawn from the session's sentences). Family Play then adds sentence quizzes and role-play. Individual mode adds a dialogue.
- **Sentence review** (`src/engine/sentence-review.js`). Mistakes come from verified exercise receipts (`sentence_builder`, `sentence_completion`, multi-word `quiz`) and from Family Play steps. Entries are keyed by NFKC-normalized text, and repeat events are ignored using `eventId`. A correct review schedules the next one in 24 h. A miss schedules it in 10 min and resets the streak. Two correct reviews in a row mark the item mastered, and it leaves the queue. Review steps alternate between builder and completion. The local result is authoritative only for this queue and grants no progress.
- **Listening practice** (`src/engine/listening-practice.js`). Items come from the lesson's sentence pack, or else from the topic's multi-word items, connections, and dialogue lines. Each session has at most six exercises, alternating *meaning* (choose the support text) and *order* (arrange the words plus up to three distractors taken from the same session). Grading is case- and punctuation-insensitive. Audio playback uses a generation counter so stale `onend`/`onerror` callbacks are ignored, and it cancels on dispose.
- **Detective editions.** `detectiveEditionIndex(m)` is `(m − 10) / 30` for m = 10, 40, … 190. The badge id becomes `<quest>:edition-N` for N > 1, so each edition earns its own badge.

### Presentation

- **Dashboard.** Adds a *Listening practice* banner, shown only when items exist, and a *Sentence review* banner showing the due count, with the button disabled when nothing is due. Side-quest unlocks now count learning days. Focused recaps hide empty sections and label recalled words "Practiced again".
- **New views.** `pattern-lesson.js` (frame walkthrough with back/next and an audio button), `sentence-review-view.js`, and `listening-practice-view.js`. Family Play renders pattern lessons and records sentence mistakes per participant.
- **Detective view.** Shows `clueWords` under the case sentence and uses the server-snapshotted `cases` when present.
- **Dev previews.** `src/sentence-preview.html` and `src/listening-preview.html` are local preview entry points only.

## Storage, retention, and fallback

| Data | Where | Retention |
|---|---|---|
| Sentence review queue | `localStorage` key `nautilus:sentence-review:v1:<user>:<pack>` | Max 100 items, newest misses kept; mastered items are filtered out on read; stays until browser storage is cleared |
| Listening session | In-memory app state | Discarded on navigation, user change, or pack change |
| Detective cases | `family_side_quest_sessions.cases` (jsonb, not null) | Same as the existing side-quest session row |
| Verified sentence attempts | Existing verified-attempt and receipt tables, pinned to catalog revision | Existing policy |

Fallbacks:
- No eligible pack (fewer than two familiar nouns, or outside the day range) → the lesson keeps its vocabulary-only shape.
- `localStorage` unavailable → a dashboard alert says sentence review cannot be saved, and the lesson continues.
- No compatible voice or a playback error → status message plus *Written practice*.
- Lesson with no multi-word sentences → the listening banner is hidden.
- Duplicate family session (unique violation on `one_open_family_session_per_language`) → the client reloads shared state and joins the existing session. Starting a review while a session is open → a clear error.

## Security and access

- `detective_cases_for_milestone` is `immutable` with execute revoked from `public`, `anon`, and `authenticated`. It is called only from the `security definer` RPC `start_family_side_quest`.
- `start_family_side_quest` now accepts milestone 10 and every 30 lessons after it, with no upper limit. It locks the family row and requires at least `target_milestone` completed non-review family voyage sessions. It snapshots `cases` at creation.
- `submit_family_side_quest_answer` checks the answer against the snapshot's choice ids. `advance_family_side_quest` ends after the snapshot's last case. A release cannot change a running game.
- **Past milestone 190.** The case packs repeat in the same order on the app and the server: milestone 10 uses the original pack, and milestone *m* ≥ 40 uses pack `1 + ((m − 40) / 30) mod 6`. So 220 gets the milestone-40 cases again, under its own edition number and badge. `20261026010000` was already applied in production with the 190 cap, so it is left exactly as applied, and the cap is lifted by the follow-up migration `20261112010000_detective_cases_past_190.sql` (`create or replace` of `detective_cases_for_milestone` and `start_family_side_quest`). A unit test compares that migration's packs with the client at every milestone up to 400.

## Release procedure (prepared, not executed)

1. `node scripts/prepare-sentence-release.mjs [dir]` writes staging SQL, 118 chunk files, and a guarded publish script for revision 9. It covers 354 definitions (Montenegrin days 24–200, individual and family). The publish script checks source revision 8 is complete, verifies counts, requires exactly two builders and two completions on every focused lesson from day 27, and fails if any unaffected lesson changed.
2. `node scripts/test-cumulative-catalog.mjs` and `node scripts/test-detective-editions.mjs` apply the SQL inside a rolled-back transaction on a local `supabase_db_*` container.
3. `scripts/prepare-detective-migration.mjs` regenerates the migration from the client case definitions, so client and server cases cannot drift.

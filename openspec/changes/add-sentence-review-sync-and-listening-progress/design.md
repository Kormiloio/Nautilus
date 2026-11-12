# Design: Sentence review sync and listening progress

## Sentence review sync

### Storage

`public.learner_sentence_reviews` has primary key `(user_id, pack_id, review_id)`. Its columns are `user_id` (references `user_accounts`, `on delete cascade`), `pack_id`, `review_id`, `target_text`, `support_text`, `source_kind` (`sentence_builder` | `sentence_completion` | `quiz`), `misses`, `streak`, `due_at`, `last_missed_at`, `last_reviewed_at`, `mastered`, and `updated_at`. `review_id` is the NFKC-normalized, whitespace-collapsed target text. It must have at least two words and at most 300 characters, and `support_text` at most 300 characters.

`public.learner_sentence_review_events` has primary key `(user_id, event_id)`, plus `created_at`. It makes mistake and review operations idempotent. Rows older than 30 days are pruned whenever a learner records something.

Both tables have RLS enabled, and all table privileges are revoked from `public`, `anon`, and `authenticated`.

### RPCs

All three are `security definer` and `set search_path=public`. They require `auth.uid()` and a matching `user_accounts` row. Execution is revoked from `public` and `anon` and granted to `authenticated`. Only rows where `user_id = auth.uid()` are touched, so parents cannot read a learner's queue.

- `record_sentence_mistake(pack, event_id, target_text, support_text, source_kind)`: does nothing if the event was already recorded. Otherwise it upserts the row with `misses + 1`, `streak 0`, `mastered false`, and `due_at`/`last_missed_at` set to now. It then deletes the learner's oldest unmastered rows above 100 for that pack.
- `submit_sentence_review(pack, review_id, response text[], op_id)`: if the operation was already applied, it returns the current state. Otherwise the row must exist, be unmastered, and be due, or it raises "This sentence is not due for review." The response is graded by comparing `array_to_string(response,' ')` with `target_text`. A correct answer gives `streak + 1` and a due time 24 hours later; a wrong one gives `streak 0`, `misses + 1`, and a due time 10 minutes later. A streak of 2 or more sets `mastered`. It returns `{correct, targetText, mastered}`.
- `list_sentence_reviews(pack)`: returns unmastered rows, ordered by `due_at`, then `misses` descending, up to 100. Times come back as ISO strings.

Clients never supply dates, grades, or counters.

### Client

`src/engine/sentence-review.js` keeps its synchronous local API for rendering. Recording and reviewing also append an operation to `nautilus:sentence-review-ops:v1:<user>:<pack>`. Mistakes use an `eventId`; reviews use a new `opId`. `syncSentenceReviews(userId, packId, client)`:

1. On the first sync for a user and pack, it queues a `legacy:<review_id>` mistake operation for every local entry.
2. It sends queued operations in order. A network or auth failure stops the sync and keeps the queue. A validation error (for example "not due") drops that operation.
3. It lists the server queue and replaces the local cache with it.

Sync runs after the learner signs in and cloud data is pulled, when sentence review opens (the due list is reloaded afterwards), and in the background after each mistake or review. When the cloud isn't configured, or the device is offline, the local behavior stays exactly as before.

## Listening progress

### Content

`buildVerifiedListeningSteps(lesson)` in `src/engine/listening-practice.js` is deterministic: it seeds with `listening:<lesson.id>` and uses the same item selection as `getListeningItems`. It starts with an ungraded "Read and hear first" step (`self_report`) that pre-teaches the set's sentences, matching the unsaved version. It then produces at most six exercises, alternating:

- `listening-meaning`: the target sentence as `audioText`, its meaning among up to four distinct meanings, and the meaning as the answer.
- `listening-order`: the sentence's own words, shuffled so they never start in answer order, with the ordered words as the answer. `writtenPrompt` holds the meaning for the written fallback.

`toVerifiedExercises` maps these to a `quiz` with `audioText` and a `sentence_builder` with `audioText` and `writtenPrompt`. The catalog's existing redaction removes `answer`.

### Publication

`scripts/export-verified-curriculum.mjs` also writes, for each voyage lesson with listening items, `practice:<lesson.id>:listening` (mode `practice`, `topic_id` set to the lesson's topic). `scripts/prepare-listening-release.mjs` builds revision 10 the same way the revision-9 release did. It creates a staging table, splits the SQL into chunks of 100 KB or less, copies revision 9 into revision 10, inserts the listening rows, and runs a guarded publish that checks the counts. `verify-verified-release.mjs` expects revision 10 and the new practice count.

**Deploy order:** publish revision 10, then merge. The revision-9 app keeps working against revision 10, because revision 10 is a superset of revision 9.

### Credit

Credit uses the unchanged `submit_verified_exercise` practice branch: stars for correct answers, once per `lesson_id` ever (enforced by the `verified_lesson_awards` primary key), and an `activity_history` day. `completed_lessons` and family state are never touched.

### Client

`openListeningPractice` opens the verified `practice:<lesson>:listening` lesson when a linked learner is signed in. The listening view also stays as the "Practice only, not saved" fallback. `verified-lesson-view.js` adds audio for exercises with `audioText`: play, slow, a status line, and "Written practice", which reveals `audioText` for quizzes and `writtenPrompt` for builders. It uses `createListeningAudio`, which is disposed when the view changes.

## Fallback and failure

- A missing listening row, no linked profile, or offline: the local, unsaved listening practice runs, with a label saying it isn't saved.
- Sentence review sync fails: the local queue keeps working, and pending operations stay queued.
- The migration isn't applied yet: the RPC errors count as network errors, so operations stay queued.

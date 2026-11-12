# Proposal: Sync sentence review across devices and count listening practice toward progress

## Status

Owner decisions of 2026-11-12, recorded in `add-cumulative-sentence-practice`. This change replaces two requirements from that change: "Missed sentences are remembered on the device" (device-local) and "Listening practice is unrecorded".

## Why

Learners move between a family tablet, a phone, and a laptop. A sentence missed on one device should come back on whichever device they pick up next. Listening practice is real effort, but today it earns nothing and leaves no trace in the learner's streak, so it feels optional.

## Learner and family outcome

- A learner's missed sentences follow their account, so the review queue is the same on every device they sign in on.
- Reviews still work offline. Changes made offline are sent when the device reconnects.
- Finishing a day's listening set earns stars once and counts as an active day for the streak, like other independent practice.
- Listening never advances the voyage or the Family Voyage.

## What changes

1. **Server sentence review store.** Add the table `learner_sentence_reviews`, which only its owner can read, keyed by the learner's account and language pack. Three RPCs record a mistake, list the queue, and grade a review on the server. The 10-minute / 24-hour / mastered-after-two schedule and the 100-item cap move to the server.
2. **Client sync.** localStorage stays as a cache and an offline queue of operations with ids. Signing in, opening review, recording a mistake, and submitting a review each push pending operations, then pull the server queue. Existing device-only entries are uploaded once.
3. **Verified listening practice.** Catalog revision 10 is revision 9 plus one `practice:<voyage-N>:listening` set for each voyage day that has multi-word sentences. "Choose the meaning" is a verified `quiz`, and "Put the words in order" is a verified `sentence_builder`. The server grades every answer and awards credit through the existing practice completion path.
4. **Audio in verified lessons.** Verified exercises that carry `audioText` show play and slow buttons and a written fallback.
5. **Fallback.** Without a sign-in or a cloud connection, listening practice runs as before, labelled "Practice only, not saved".

## Content, privacy, accessibility, and audio

- **Privacy.** The review store holds only lesson sentences the learner got wrong (reviewed pack content, never learner-typed text), counters, and timestamps. Only the learner's own signed-in account can read or change it; parents and admins cannot. Rows are deleted with the account. Event ids older than 30 days are pruned.
- **Content.** Listening sets reuse reviewed sentence content. Order exercises contain exactly the sentence's words, with no distractors, because the verified builder requires the token set to equal the answer.
- **Audio.** Uses on-device speech, as before. Speech runs on the device, so the sentence text is necessarily sent to the browser. This means a determined learner could read the answer to an order exercise from the page data. The stakes are low (stars once per listening set), and this is accepted.
- **Accessibility.** The audio controls are labelled buttons, and the written fallback shows the meaning or the sentence as text.

## Unresolved product decisions

- None. Should replaying a listening set ever earn more stars? No: credit stays once per set, matching other practice.

# Product requirements document: Nautilus Gameplay

**Product:** Nautilus — Learn Your Heritage Together  
**Status:** Active · reviewed sentence builder released; sentence completion specified
**Last updated:** 2026-09-06

## 1. Summary

Nautilus gameplay should make each short lesson feel active, visual, and cumulative without turning language learning into a competition. The core loop is:

1. **Learn** useful new language through visual, touch-friendly activities.
2. **Recall** language from earlier lessons in a new context.
3. **Build and use** short phrases and sentences.
4. **Celebrate** meaningful progress through ports, posters, honors, and occasional surprises.

This applies to both Solo Mode and Family Play. They use the same reviewed curriculum and activity library, but differ in who completes a round and how shared progress advances.

Nautilus must not use pressure mechanics: no lives, energy, timed loss, public leaderboards, shame-oriented streak prompts, advertisements, or penalties for errors.

## 2. Problem

The classic Flashcards, Match, Quiz, and Listen activities are the most approachable Nautilus experience: they are scenic, visual, and easy to understand. But lessons need more variety and a clearer learning arc than repeating a topic’s word list. Learners should see why a familiar word returns, use it with newer language, and gradually build phrases that are useful with family and in real life.

Family Play needs the same sense of progress while respecting that every learner has their own device. It should be cooperative rather than parent-controlled or pass-the-device gameplay.

## 3. Goals

1. Preserve and improve the classic activity experience: Flashcards, Match, Quiz, and Listen.
2. Add sentence-building and contextual recall as authored activity types.
3. Make every published voyage lesson meaningfully different from the adjacent lessons.
4. Bring prior vocabulary back deliberately, using authored content relationships rather than hard-coded topic pairs.
5. Keep a normal session useful in roughly 3–10 minutes, with additional practice available by choice.
6. Make Family Play cooperative across separate devices and advance shared rounds automatically when everyone required has completed the action.
7. Give clear, immediate, kind feedback for both correct and incorrect answers.
8. Reward progress with durable voyage moments rather than pressure or scarcity.
9. Work without microphone scoring, AI conversation, or new third-party infrastructure.

## 4. Non-goals

This gameplay work will not:

- add speech recognition, microphone recording, or pronunciation grading;
- require a learner to pass a device to another learner;
- introduce timers, Hearts, Energy, streak loss, leagues, rank, or public comparison;
- make a wrong answer remove progress or block a learner from continuing;
- auto-generate or translate publishable lesson content without review;
- hard-code relationships such as “Numbers always reviews Family.”

## 5. Experience principles

1. **The screen teaches.** Visuals, color, audio, touch, and short instructions should make the next action obvious.
2. **Mistakes are information.** A wrong answer is clearly identified, followed by the correct answer and a chance to understand it.
3. **Recall has a reason.** Returning language must be connected to the new lesson through reviewed, authored examples.
4. **Every person participates.** Family members work on their own devices; shared progress reflects completed participation, not who controls the screen.
5. **Choice without pressure.** Learners can replay, practice, or continue without fear of losing a reward.
6. **Celebrations mark meaning.** A port, poster, honor, or side quest should represent a clear achievement or story moment.

## 6. Gameplay model

### 6.1 Core activity library

Each activity is an independently authored, accessibility-supported interaction. A language pack may use only activities appropriate to the content, scripts, visuals, and approved audio it has available.

| Activity | Learner action | Feedback and completion |
| --- | --- | --- |
| Flashcards | Reveal, listen, and self-check a word or phrase | Card stays available for replay; no forced self-rating required |
| Match | Select two connected items: word/meaning, word/image, audio/text, or script pair | Correct pairs remain visibly matched with distinct colors; incorrect attempts receive brief feedback and reset cleanly |
| Quiz | Select the best meaning, translation, image, or missing word | Immediately show correct/incorrect result and reveal the correct answer before advancing |
| Listen | Hear approved audio and select the matching text, meaning, or image | Replay and slower playback are available when audio supports it |
| Sentence builder | Arrange word tiles into a reviewed phrase or sentence | Validate order, explain/reveal the target sentence, then allow replay |
| Sentence completion | Select or place the missing word(s) in a reviewed sentence | Show the completed sentence and its meaning in context |
| Context choice | Choose language that fits a tiny situation, dialogue, or visual scene | Explain why the selected answer fits; keep distractors plausible but age-appropriate |
| Self-confirmed use | Read a prompt such as “Say this together” or “Use this in your own example,” then tap **We said it** | No claim of pronunciation assessment; completion is learner-confirmed |

### 6.2 Sentence building

Sentence activities are a priority addition because they turn vocabulary into usable language without needing microphone or AI systems.

Requirements:

- Start with reviewed 2–4 word phrases and visual/context hints.
- Progress to word-order tasks, one-word blanks, and short sentence completions only when the pack provides reviewed forms.
- Show target-language text, English meaning, and approved script alternatives where relevant.
- Do not mark a response as wrong merely because a language has multiple accepted word orders or forms; each authored exercise must list accepted answers or use constrained tiles.
- After an incorrect attempt, show a visible “Not quite” state and the correct sentence; do not silently advance.
- Every sentence must store structured content references for its new items, recalled items, language-pack version, accepted answers, and explanation.

Example progression:

- New words: `four`, `brothers`.
- Recall: a previously learned possessive or family noun.
- Build: “I have four brothers.”
- Use: “Tell your family one true or imaginary sentence using a number.”

This is an example only. The curriculum engine selects reviewed connections from content metadata; it must not embed specific topic names in application logic.


### 6.2.1 Deployed rhythm and adult preview

- **Released:** Reviewed sentence builders are inserted only from authored, prerequisite-gated connections in the regular lesson rhythm. They remain server-validated against an immutable catalog revision, and the target answer is withheld until feedback.
- **Released:** Family owners and adult guides can open a no-credit activity preview of the current language pack. Preview interactions create no attempt, progress, reward, receipt, or Family Play state.
- **Specified, not yet released:** reviewed single-blank sentence completion is tracked in OpenSpec change `add-reviewed-sentence-completion`.

### 6.3 Cumulative recall

Every voyage lesson should declare:

- its primary topic and new language;
- zero or more earlier topics eligible for recall;
- optional reviewed connection items and sentences;
- which activity types can express that recall.

The lesson engine may choose from these authored relationships based on the learner’s completed history. It must fall back gracefully to current-topic review when no approved cross-topic connection is available.

The dashboard’s **Up next** card and the lesson-end **What we brought back** recap must use the same selected, authored references. They must never promise review content that is not actually present in the lesson.

### 6.4 Lesson shape

A normal voyage lesson contains 3–6 short segments, not a fixed set of activities. A representative lesson may be:

1. Discover two to five new words or a short phrase.
2. Match or recognize the new language.
3. Recall one or two older items in context.
4. Build or complete a short sentence when reviewed content permits.
5. End with a low-stakes use prompt and recap.

The content author chooses the shape appropriate to the lesson. A lesson cannot count as a new voyage position if it merely reuses the same deck with relabeled controls.

## 7. Feedback and answer behavior

### 7.1 Correct answers

- Show a clear success state, with an optional short explanation or contextual sentence.
- Preserve completed Match pairs on the screen using a distinct color family per pair so learners can see their work.
- Do not rearrange completed choices unexpectedly.
- Advance only after the learner has had a moment to see the result, or after an explicit Continue action where needed for accessibility.

### 7.2 Incorrect answers

- Mark the selected answer as incorrect immediately and plainly.
- Reveal the correct answer and, when useful, a one-sentence explanation.
- Keep the learner in the lesson; a wrong answer does not lose stars, reset progress, or create a penalty.
- Require neither repeated guessing nor device sharing to proceed.
- Record only the minimum attempt data required for private, server-validated review selection; never expose a learner’s mistakes to other families or public rankings.

## 8. Family Play

### 8.1 Participation contract

Family Play is a shared lesson, not a remote-control session. Each required learner participates from their own connected device. The adult guide may start a Family Voyage Day and manage the session, but does not need to answer on behalf of every learner.

For a participation round:

1. Each connected required participant sees the same current step on their own device.
2. Each person makes or confirms their own response.
3. The interface shows who has locked in and who is still pending.
4. When all required participants have locked in, the shared session advances automatically.

Connection loss must show a recoverable state, preserve already locked responses, and permit rejoining without resetting the entire family.

### 8.2 Family activity adaptations

| Solo interaction | Family adaptation |
| --- | --- |
| Flashcard | Each person reveals/listens on their device, then confirms they are ready to continue |
| Match | Each person completes their own board; completed pairs stay colored locally |
| Quiz | Each person privately locks a selection; feedback is visible on that person’s device before the next round |
| Listen | Everyone can replay audio independently, then choose/confirm a response |
| Sentence builder | Each person arranges the same sentence privately, or the lesson assigns one reviewed phrase contribution per person |
| Context prompt | Each person chooses a response or confirms a spoken family example on their own device |

The shared screen must not hide a learner’s own locked answer simply because another person has not finished. Privacy-sensitive modes, if introduced later, need separate explicit product requirements.

### 8.3 Family completion

Family Voyage completion requires server-validated completion of the lesson’s required segments and all required participants’ actions. The client may display progress but cannot declare the shared lesson complete, award rewards, or skip unfinished segments on its own.

## 9. Motivation and rewards

Nautilus rewards participation and meaningful milestones, never speed, perfection, or comparison.

- **Stars:** understandable awards for completed activities and lessons; no deductions for mistakes.
- **Active-day streak:** a gentle record of days practiced; missed days are neutral and do not cause loss messaging.
- **Ports:** named destinations that represent a recognizable stage of the voyage, with a setting, theme, and learning purpose—not generic “Port 1.”
- **Posters from your voyage:** collectible visual memories earned at a meaningful port or arrival; each poster should visibly relate to the same destination/story shown on the map.
- **Voyage honors:** substantial milestone recognitions with a clear title, illustration, what was achieved, and what it unlocked or represents.
- **Sailor Talk:** optional, age-appropriate surprise content every five completed voyage lessons, curated per language pack and never required for progress.

The map, destination scenes, posters, badge artwork, and lesson backgrounds need one coherent journey art direction per language pack. A port’s map location, lesson setting, arrival illustration, and poster must refer to the same place or story chapter.

## 10. Accessibility and device requirements

- All core interactions work with touch, keyboard, and screen readers.
- Correctness never depends only on color; color states also use labels, icons, and text.
- Match pair colors must be visually distinct and provide non-color identifiers for low-vision users.
- Long sentence tiles wrap without clipping on narrow phones.
- The next actionable button must remain reachable without browser chrome obscuring it.
- Audio is replayable and does not auto-play unexpectedly.
- Reduced-motion settings remove nonessential movement while retaining feedback.

## 11. Content and technical requirements

1. Activity definitions, sentence exercises, accepted answers, explanations, recall links, visual references, and audio references live in reviewed versioned language-pack content—not UI conditionals.
2. Every reviewed lesson segment has a stable identifier and an allowed completion rule.
3. The server validates lesson and Family Play transitions, completion, rewards, and progress updates.
4. The client may queue progress for unreliable networks, but retries must be idempotent and server rules remain authoritative.
5. A language pack cannot publish a sentence activity without reviewed language data and required accessibility text.
6. The game engine must handle content that lacks audio, imagery, or sentence-building eligibility without presenting broken controls.
7. Telemetry, if used, collects aggregate product-health events only and does not record private sentence examples or voice.

## 12. Delivery plan

### Phase 1 — strengthen the classic loop

- Preserve classic Flashcards, Match, Quiz, and Listen presentation and scenic visuals.
- Ensure Match pairs remain displayed with distinct pair colors.
- Ensure every wrong quiz answer receives visible feedback before advancing.
- Validate mobile viewport, scroll stability, and next-button access.

### Phase 2 — authored language in context

- Add structured sentence builder and sentence-completion definitions to the language-pack schema.
- Implement reviewed single-blank sentence completion after eligible sentence builders, with server-side validation and no free-text collection.
- Add authored recall relationships and lesson recap metadata.
- Deliver one reviewed sentence-building path in each currently published language pack.
- Add dashboard Up next and lesson recap consistency tests.

### Phase 3 — cooperative Family Play

- Adapt each supported activity to individual-device locks and automatic all-participant advance.
- Add server-validated family segment completion and reward contracts.
- Add reconnection, multi-device, and role-based authorization tests.
- Add a family celebration at named-port and poster milestones.

### Phase 4 — richer authored scenarios

- Add short interactive story/dialogue scenes using reviewed language and comprehension choices.
- Add language-pack-specific travel, family, market, and heritage scenarios as content review capacity allows.

## 13. Acceptance criteria

The first gameplay release is ready when:

1. A learner can complete a visually coherent 3–10 minute lesson containing at least one current-topic activity and one authored recall moment.
2. At least one published lesson per released language pack includes a reviewed sentence-building or sentence-completion activity.
3. A wrong answer always receives visible correction before the learner advances.
4. Completed Match pairs remain recognizable with distinct accessible pair states.
5. No core lesson feature requires speech recognition or microphone access.
6. Two or more family learners can complete a supported Family Play round from separate devices, and the session advances automatically only after all required participants lock in.
7. A missed day or wrong answer cannot reduce stars, delete rewards, block access, or show punitive messaging.
8. A port, its map visual, its arrival celebration, and its earned poster have a shared name and story connection.
9. Server tests reject client attempts to award completion or rewards without valid segment completion.

## 14. Open questions

1. Which released packs already contain enough reviewed sentence content for the Phase 2 pilot?
2. Should solo and family use the same selected recall items when both start the same voyage position, or may they choose differently based on personal history?
3. What is the minimum participant rule when a family learner is unavailable: wait, remove them for the session, or provide an adult-approved temporary absence flow?
4. Which port names, story chapters, and poster concepts should be reviewed with heritage speakers for each language pack?
5. What milestone cadence makes Sailor Talk feel surprising without interrupting the voyage?

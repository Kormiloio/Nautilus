# Tasks: Add Iraqi Arabic and combined Mandaic journeys

## 1. Confirm ownership and pilot scope

- [ ] 1.1 Name Iraqi Arabic dialect, Classical Mandaic, Neo-Mandaic speaker, transliteration, audio, and cultural-image reviewers with explicit review scopes.
- [ ] 1.2 Decide the lead Iraqi variety, MSA comparison policy, Neo-Mandaic variety, and transliteration conventions.
- [ ] 1.3 Agree which heritage material is appropriate for the initial family pilot and exclude unapproved sacred/liturgical content.
- [ ] 1.4 Document pilot invitation, consent, feedback retention/deletion, and parent confirmation for learner free text.

## 2. Extend the content platform

- [x] 2.1 Add direction, script, language tag, variety/register, track, and provenance fields to pack and item schemas.
- [x] 2.2 Add `pilot` publication/access state without weakening ordinary publication review gates.
- [ ] 2.3 Add `heritage-classical` and `conversation-neo` validation, lesson labeling, and strand-specific mastery beneath one Mandaic voyage.
- [ ] 2.4 Validate that Classical and Neo-Mandaic answers are never treated as interchangeable without approved equivalence metadata.
- [ ] 2.5 Add theme identity/compatibility metadata without adding theme identity to scoring or completion keys.
- [x] 2.6 Add representative Arabic/Mandaic content fixtures and actionable validation errors for missing direction, script, track, or review data.

## 3. Implement bidirectional UI

- [x] 3.1 Render target, support, and transliteration as isolated language runs using semantic `lang`/`dir` attributes and CSS logical properties.
- [x] 3.2 Audit existing flashcards, matching, quizzes, dialogue, pronunciation, session, and Family Play learning surfaces for RTL and mixed-direction behavior. Pilot dashboard and feedback surfaces remain covered by their implementation tasks.
- [x] 3.3 Add and license a Mandaic-capable web font; validate U+0840–U+085F glyph coverage and joining behavior. Noto Sans Mandaic and its OFL license are bundled; representative glyph validation is automated. Community visual review of joining examples remains required.
- [ ] 3.4 Preserve semantic icon, media, chronology, keyboard, and focus order instead of mirroring the entire interface blindly.
- [ ] 3.5 Add visible missing-font/glyph and audio-unavailable fallbacks.

## 4. Build Iraqi Arabic pilot

- [x] 4.1 Author an original 30-topic starter curriculum plus three optional topics for family, greetings, food, home, numbers, directions, river life, and everyday phrases.
- [ ] 4.2 Complete fluent review of item meanings, Iraqi variety metadata, distinct quiz distractors, dialogues, and family-play prompts. The current pilot records and generated activity choices remain draft.
- [x] 4.3 Configure compatible `ar-IQ` device speech as visibly unapproved preview audio and prevent incompatible voice fallback.
- [ ] 4.4 Complete fluent dialect, transliteration, curriculum, and audio review before changing content from pilot to published.

## 5. Build combined Mandaic pilot

- [x] 5.1 Author the Classical heritage/script foundation with the Mandaic alphabet and character recognition. Joining/reading claims remain deliberately excluded pending Classical Mandaic review.
- [ ] 5.2 Author initial Neo-Mandaic family and everyday vocabulary, phrases, dialogues, and family-play prompts for the selected variety.
- [ ] 5.3 Link related Classical/Neo forms with explicit reviewed relationships while keeping scoring and labels strand-specific.
- [x] 5.4 Keep activities text-first and suppress speech controls unless approved Mandaic audio exists.
- [ ] 5.5 Complete separate Classical Mandaic, Neo-Mandaic speaker, transliteration, curriculum, and audio reviews before publication.

## 6. Build the cultural journey theme

- [x] 6.1 Create a `rivers-of-mesopotamia` asset manifest with stable IDs, alt text, motion mode, licenses/provenance, and cultural-review metadata.
- [x] 6.2 Prototype river, reeds, date palms, boats, courtyard, market, family, and regional craft scenes without generic desert or Islamic visual shorthand.
- [ ] 6.3 Obtain community approval before depicting sacred people, rites, garments, buildings, or symbols.
- [x] 6.4 Add static/reduced-motion and missing-image fallbacks.
- [ ] 6.5 Verify that switching an approved theme leaves lesson content and progress unchanged.

## 7. Add private pilot feedback

- [ ] 7.1 Add family-scoped feedback storage with pack/theme version, item/lesson/scene context, category, reporter role, client version, and workflow status.
- [ ] 7.2 Add accessible **Report an issue** actions to vocabulary, audio, lesson, family-play, and scene contexts.
- [ ] 7.3 Require parent/guide confirmation for learner free-text feedback and prevent public comments or reporter discovery.
- [ ] 7.4 Add authorized triage, resolution, deletion, and audit behavior; never mutate a pack directly from a report or vote count.
- [ ] 7.5 Publish accepted corrections only through a new validated and appropriately reviewed pack/theme version.

## 8. Verify and pilot

- [ ] 8.1 Add schema/unit tests for pack isolation, strand isolation, review scopes, version compatibility, and feedback state transitions.
- [ ] 8.2 Add browser tests for Arabic and Mandaic RTL/mixed-direction rendering on phone, tablet, and desktop.
- [ ] 8.3 Test touch targets, keyboard navigation, screen readers, 200% zoom, reduced motion, long text, and safe-area behavior.
- [ ] 8.4 Test missing fonts, glyphs, scenes, device voices, recordings, connectivity, and feedback submission without blocking learning.
- [ ] 8.5 Run invited family pilots and record issues without marking either language or the imagery reviewed by implication.
- [ ] 8.6 Resolve blocking content/cultural defects, obtain named approvals, and make a separate publication decision for each pack, strand, audio set, and theme version.

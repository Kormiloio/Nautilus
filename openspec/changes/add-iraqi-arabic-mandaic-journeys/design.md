# Design: Iraqi Arabic and combined Mandaic journeys

## Pack and theme boundaries

Language packs remain versioned content units. A journey theme is a separate, versioned presentation unit referenced by `journeyThemeId`. A pack may recommend a default theme, but content identifiers, correct answers, audio, and progress SHALL NOT depend on an image asset or theme name.

Proposed defaults:

- `iraqi-arabic-en@0.1.0` recommends `rivers-of-mesopotamia@0.1.0`.
- `mandaic-en@0.1.0` recommends `rivers-of-mesopotamia@0.1.0`.
- A family may later select another approved compatible theme without resetting learning progress.

## Language-run model

Pack metadata extends the language-neutral contract:

```json
{
  "id": "mandaic-en",
  "version": "0.1.0",
  "targetLanguage": "mid",
  "supportLanguage": "en",
  "defaultScript": "Mand",
  "direction": "rtl",
  "publicationState": "pilot",
  "tracks": ["heritage-classical", "conversation-neo"],
  "journeyThemeId": "rivers-of-mesopotamia@0.1.0"
}
```

Each displayable form declares or inherits `languageTag`, `script`, and `direction`. Content that differs by dialect, register, or historical variety also declares `variety` and, for Mandaic, `track`. Transliteration is a separate LTR form; it is never concatenated into target text to force visual ordering.

At render time, the application applies explicit direction at the smallest meaningful language-run boundary, uses bidirectional isolation for embedded runs, and uses CSS logical properties. Page chrome does not reverse blindly: text alignment and flow may mirror, while media, progress chronology, playback icons, and controls retain their semantically correct direction.

## Combined Mandaic track

`mandaic-en` is one learner-selectable journey with two visible strands:

1. `heritage-classical`: Mandaic alphabet, grapheme recognition, joining/reading foundations, and approved heritage vocabulary or passages.
2. `conversation-neo`: practical family and everyday Neo-Mandaic vocabulary, phrases, dialogues, and family play.

Every Mandaic learning item belongs to one strand. An item may link to an approved related form in the other strand, but the relationship is metadata rather than an assertion that the forms are interchangeable. Lesson titles and activity introductions display the active strand. Strand mastery is stored separately beneath the shared Mandaic voyage; completion still advances the selected Mandaic voyage lesson according to its curriculum.

The initial heritage strand teaches literacy and language context, not religious doctrine. Liturgical or sacred content requires an explicit content class, source/provenance, permissions where applicable, and community approval for the proposed audience and activity.

## Iraqi Arabic policy

The pack declares `ar-IQ`, Arabic script, RTL direction, and a named dialect/variety policy. Content records distinguish Iraqi conversational forms from Modern Standard Arabic or another regional form. Comparative forms may be displayed when reviewed and clearly labeled, but only the lesson's declared target form is scored as the expected answer unless approved equivalence metadata says otherwise.

## Font and script rendering

The Mandaic font asset is versioned in the theme/application asset manifest with source, license, checksum, supported Unicode range, and fallback behavior. Build validation checks representative Mandaic characters and joining behavior. If required glyphs do not render, the app identifies the display problem and offers transliteration/support text where approved; it never silently replaces Mandaic text with Arabic text.

The implementation follows the Unicode Bidirectional Algorithm and supports the Mandaic block U+0840–U+085F. Automated fixtures cover Arabic, Mandaic, English, numbers, punctuation, parentheses, and mixed-script strings.

## Journey theme manifest

`rivers-of-mesopotamia` contains versioned scene/poster assets and metadata:

```json
{
  "id": "river-market",
  "asset": "...",
  "altText": "...",
  "motionMode": "pan-horizontal",
  "culturalReview": {
    "state": "draft",
    "reviewerId": null,
    "reviewedAt": null
  },
  "restrictedElements": []
}
```

Scene progression can be horizontal, layered, or gently animated, but it respects reduced-motion settings and retains a functional static fallback. Cultural review is independent of visual QA. Reviewers evaluate location claims, clothing, religious or community markers, architecture, and stereotyped framing. Sacred depictions are excluded by default.

## Review and provenance

Review is role-specific rather than a single boolean:

- Iraqi Arabic language/dialect review
- Classical Mandaic review
- Neo-Mandaic speaker review
- transliteration review
- pronunciation/audio review
- cultural/visual review
- curriculum/age-appropriateness review

Each approval stores reviewer identity, scope, pack/theme version, decision, date, and optional notes. Structural validation, AI assistance, pilot use, or the number of feedback votes cannot set an approval state. A release may contain reviewed and pilot material only when the UI and access policy distinguish them and ordinary publication rules exclude unapproved content.

## Pilot feedback workflow

Feedback attaches to a stable context: family, pack/theme and version, lesson, activity, item or scene, category, reporter role, client version, and timestamp. Categories include wording, meaning, dialect/variety, transliteration, pronunciation/audio, missing glyph, layout/direction, cultural imagery, difficulty, and other.

For the initial pilot:

1. A learner selects **Report an issue** and chooses a category.
2. A parent/guide confirms any free-text submission from a learner profile.
3. The private record enters `new`, then may move to `triaged`, `accepted`, `declined`, or `resolved`.
4. Accepted feedback creates a contributor change against a new pack/theme version.
5. The appropriate reviewer approves or rejects that change.
6. A published correction retains provenance and does not alter historical session results.

Feedback is not a chat or social feed. Other families cannot see reporter identity or submissions. A family owner can request deletion of its feedback. The implementation SHALL document retention before pilot deployment and default to retaining only what is needed for triage and audit.

## Storage and progress

Progress keys retain learner, pack identity, pack version compatibility, voyage, and lesson. Mandaic additionally stores strand mastery. Theme identity may be recorded for experience history but is not part of scoring. Changing the visual theme cannot grant or remove completion.

Pilot enablement is family-scoped and records the accepted pilot notice/version. Pilot content is not shown to families that have not enabled it. Disabling a pilot hides it without deleting progress or feedback; deletion follows the family's explicit data action.

## Audio and fallback

Audio resolution is pack-specific:

1. use an approved recording when present;
2. for Iraqi Arabic only, optionally offer a compatible device voice as visibly unapproved preview audio;
3. otherwise show audio unavailable and continue with text-based activity.

Mandaic never falls through to Arabic, English, or generic device speech. A future Mandaic recording set can be added through the same reviewed audio manifest without changing activity components.

## Failure and fallback behavior

- If a pack fails validation, it remains unavailable and no other pack's content is substituted.
- If RTL metadata is missing for an RTL pack, validation fails rather than guessing from individual characters.
- If a scene fails to load, the lesson uses a readable, non-animated background and remains operable.
- If a Mandaic font or glyph check fails, the UI reports the limitation and uses approved fallback forms without corrupting stored content.
- If feedback submission fails, the learner's lesson continues and the app offers a retry; feedback failure never blocks completion.

## Verification strategy

- Unit tests validate pack/track/theme metadata, isolation, review gates, and feedback state transitions.
- component tests exercise mixed-direction strings and semantic control order.
- browser tests cover iPhone-sized, tablet, and desktop layouts in Arabic and Mandaic.
- screen-reader and keyboard checks confirm language changes, labels, focus order, and error messages.
- visual tests cover reduced motion, missing scenes, font fallback, long strings, and zoom.
- content pilots are evaluated separately by Iraqi Arabic and Mandaic reviewers; a reviewer approves only their declared scope.

## Standards and research references

- Unicode Core Specification, Mandaic and Syriac: <https://unicode.org/versions/Unicode16.0.0/core-spec/chapter-9/>
- Unicode Mandaic names list: <https://www.unicode.org/charts/nameslist/n_0840.html>
- Unicode Bidirectional Algorithm: <https://www.unicode.org/reports/tr9/>
- Encyclopaedia Iranica, Mandaic language: <https://www.iranicaonline.org/articles/mandaeans/mandaeans-v-mandaic-language/>
- Encyclopaedia Iranica, Neo-Mandaic: <https://www.iranicaonline.org/articles/mandaeans/mandaeans-vi-neo-mandaic-language/>


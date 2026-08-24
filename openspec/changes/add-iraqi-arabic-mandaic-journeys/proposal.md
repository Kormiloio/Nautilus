# Change: Add Iraqi Arabic and combined Mandaic journeys

## Why

Mandaean Iraqi families should be able to use Nautilus without being placed inside a Montenegrin curriculum or Mediterranean visual world. The first useful release should support practical Iraqi Arabic while also giving families a careful way to learn and preserve Mandaic. Because Mandaic has a Classical heritage/literacy form and living Neo-Mandaic speech, a single undifferentiated translation would misrepresent the language and confuse learners.

This change creates two independent pilot language packs and a culturally distinct journey theme. Families may use the pilots, report problems in context, and help improve them, but pilot access does not count as linguistic or cultural approval.

## What changes

- Add a draft `iraqi-arabic-en` pack for practical Iraqi Arabic using Arabic script, right-to-left presentation, optional reviewed transliteration, and English support text.
- Add a draft `mandaic-en` pack with two clearly labeled strands:
  - **Classical heritage and script** for the Mandaic alphabet, reading foundations, and community-approved heritage material.
  - **Neo-Mandaic conversation** for practical family and everyday speech.
- Keep Classical and Neo-Mandaic forms, meanings, activities, and review provenance distinct while presenting them as one selectable Mandaic journey.
- Add bidirectional layout support so Arabic and Mandaic text renders right-to-left without reversing English, numbers, controls, progress paths, or mixed-language phrases incorrectly.
- Decouple journey imagery from language content and add a community-reviewed Mandaean–Mesopotamian river journey in place of Nautilus's Mediterranean scenes.
- Add private, contextual pilot feedback for words, audio, lessons, and scenes. Feedback enters a review queue and never edits published content automatically.
- Require independent fluent/community review for Iraqi Arabic, Classical Mandaic, Neo-Mandaic, audio, and cultural imagery before any affected material is marked published.

## Learner and family outcome

A family can select Iraqi Arabic or Mandaic, learn in an environment that reflects its intended cultural setting, and identify whether a Mandaic lesson is teaching heritage/script or contemporary conversation. Pilot families can flag wording, pronunciation, dialect, or imagery directly from the lesson so the course improves without presenting community contributions as automatically authoritative.

## Capabilities

### New capabilities

- `bidirectional-learning-ui`: safe right-to-left and mixed-direction presentation for Arabic, Mandaic, English, and transliteration
- `combined-mandaic-track`: one Mandaic journey with distinct Classical heritage/script and Neo-Mandaic conversational strands
- `cultural-journey-themes`: language-independent, versioned, culturally reviewed scene collections
- `community-pilot-feedback`: private contextual feedback, triage, review, and release workflow

### Modified capabilities

- `language-packs`: register Iraqi Arabic and Mandaic pilot packs with script, direction, dialect/variety, track, and provenance metadata
- `learner-language-selection`: make pilots selectable only for families that knowingly enable pilot access
- `reviewed-content`: add role-specific review and prevent pilot feedback or technical validation from being treated as approval

## Initial pack roadmap

| Pack | Proposed identity | Script/direction | Initial scope | Initial state |
| --- | --- | --- | --- | --- |
| Iraqi Arabic | `iraqi-arabic-en@0.1.0` | Arabic, RTL | Family, greetings, food, home, numbers, directions, everyday phrases | Pilot draft |
| Mandaic | `mandaic-en@0.1.0` | Mandaic, RTL | Classical alphabet/reading foundations plus Neo-Mandaic family conversation | Pilot draft |

The proposed Iraqi Arabic locale is `ar-IQ`. The proposed Mandaic metadata uses ISO 639-3 `mid` and ISO 15924 `Mand`; implementation SHALL verify identifiers against the standards used by the runtime before publication.

## Content implications

- Iraqi Arabic requires an explicit dialect policy and SHALL NOT be represented as Modern Standard Arabic with an Iraqi label.
- Classical Mandaic SHALL NOT be substituted for Neo-Mandaic conversational speech, or vice versa, unless an approved item explicitly records their relationship.
- Sacred, liturgical, or doctrinal material SHALL be excluded from the initial pilot unless named community reviewers approve both its inclusion and teaching context.
- Each pack needs its own curriculum, distractors, dialogues, family-play prompts, content density, and review owner. Montenegrin lesson data is not a translation template.

## Audio implications

- Iraqi Arabic device speech may be offered only as a clearly labeled, unapproved preview when a compatible `ar-IQ` voice is available.
- Mandaic SHALL remain text-first unless an approved Mandaic voice or reviewed recording exists. The app SHALL NOT pronounce Mandaic with Arabic, English, or another unrelated voice.
- Lack of approved audio SHALL NOT block text, script, matching, quiz, or family conversation activities.

## Privacy implications

- Pilot feedback is family-scoped and private to authorized contributors and maintainers.
- Learner feedback from a minor SHALL be submitted through a parent/guide confirmation flow; the initial release SHALL NOT create public learner profiles or public comments.
- Feedback records SHALL contain the minimum context required to reproduce the issue and SHALL follow a documented retention/deletion policy.

## Accessibility implications

- RTL behavior SHALL work with keyboard, touch, screen readers, zoom, and mobile layouts.
- Direction SHALL be assigned to the smallest meaningful language run so English meanings and transliterations remain readable.
- Scene text needs reviewed alt text; learning must remain usable with animation disabled, images unavailable, or Mandaic audio unavailable.
- A licensed Mandaic-capable font and visible missing-glyph fallback are required before the script pack can leave pilot status.

## Cultural direction

The default new theme is a river-led Mesopotamian journey centered on water, family, community, reeds, date palms, boats, courtyards, and regional craft or architecture that reviewers approve. It SHALL avoid treating Mandaeans as a generic desert, Islamic, or pan-Arab visual category. Sacred people, ceremonies, garments, buildings, and symbols require specific community approval before depiction.

## Rollout

1. Build and test the bidirectional UI and theme boundary.
2. Release a small Iraqi Arabic pilot to invited families.
3. Release Mandaic alphabet/heritage foundations to invited families.
4. Add reviewed Neo-Mandaic conversation units and family-play prompts.
5. Triage pilot feedback, publish versioned corrections, and expand only after named reviewers approve the relevant content and imagery.

## Open questions

- Which Iraqi variety or family blend should lead the first pack, and how much Modern Standard Arabic should be shown for comparison?
- Which transliteration convention should each pack use, and should families be able to hide it?
- Which Neo-Mandaic variety and speaker community will anchor the conversational strand?
- Who will review Classical Mandaic, Neo-Mandaic, Iraqi Arabic, pronunciation, and cultural imagery?
- Which heritage topics are appropriate for a general family course, and which must remain community-authored or out of scope?
- Which Mandaic font can be distributed with the web app, and what is its license?
- How long should pilot feedback be retained, and should families be able to export it?

## Impact

- The content schema, activity components, family play, language selector, persistence keys, validation, and visual asset manifests gain direction, script, variety, strand, review, and theme awareness.
- Existing language packs remain LTR/unchanged unless they opt into the new metadata.
- No database migration may infer review approval or Mandaic strand from text alone.


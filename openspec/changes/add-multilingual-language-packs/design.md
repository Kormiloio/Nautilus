# Design: Multilingual language packs

## Pack boundary

A language pack is an immutable, versioned publication unit containing language metadata, topic content, scripts, audio policy, curriculum, voyage plans, and review state. Pack content is standard product content; family-specific wording is stored separately as an overlay.

The pack identifier combines the target and support languages, such as `montenegrin-en`. The initial support language is English. A future translated interface or non-English support language requires its own product decision and must not be inferred from the target language.

## Language-neutral content

Runtime and persisted models use semantic fields such as `targetText`, `supportText`, `scriptForms`, and `audio`, rather than language-specific names such as `mn` and `en`. Every topic, item, dialogue, lesson, and audio reference inherits or declares one pack identifier and version. Stable item identifiers remain stable within the pack across compatible revisions.

## Selection and progress

A family enables one or more published packs. A learner chooses an enabled language before opening its dashboard. The active selection determines curriculum, voyage, topics, audio, and family variants. Stars, active dates, lesson completion, topic progress, and streaks are stored per learner and pack; completing Spanish never advances Montenegrin.

## Publication and versioning

Each pack moves through `draft`, `review`, `published`, and `retired`. A pack cannot be published merely because its JSON is structurally valid. It requires language-specific content readiness, fluent review, audio approval or fallback, accessibility checks, and a compatible voyage plan.

Patch versions may correct content without resetting progress when stable identifiers and meaning remain compatible. Breaking curriculum changes require a new migration rule or voyage version. Published versions remain resolvable for saved progress until safely migrated.

## Scripts and audio

Script and audio requirements belong to each pack. Montenegrin supports Latin and Cyrillic; Greek requires the Greek script; Albanian, Spanish, and French use their reviewed Latin-script conventions. Speech synthesis voice selection, if used, is pack-specific and cannot silently fall back to a different language.

## Fallback

If a selected pack is unavailable, retired, or fails validation, the app explains the problem and allows another enabled language to be selected. It does not mix content from another language or alter progress.

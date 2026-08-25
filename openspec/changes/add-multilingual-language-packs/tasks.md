# Tasks: Add multilingual language packs

## 1. Define the pack platform

- [x] 1.1 Define the initial target-language roadmap and English support-language policy.
- [x] 1.2 Add pack identity, language metadata, version, scripts, and publication state to the current content schema.
- [x] 1.3 Replace `mn`/`en` runtime fields with language-neutral `targetText`/`supportText` fields and stable item identifiers.
- [x] 1.4 Add a language-pack registry and per-pack schema/cross-reference validation.
- [ ] 1.5 Define compatible and breaking pack-version migration rules.

## 2. Implement selection and isolation

- [ ] 2.1 Add family-level enabled-language settings.
- [x] 2.2 Add an accessible learner language selector and persist the active choice.
- [x] 2.3 Key voyage state, stars, streaks, active dates, topic progress, and sessions by learner and pack.
- [x] 2.4 Prevent content, audio, sessions, and progress from leaking between packs.

## 3. Build and review packs

- [ ] 3.1 Migrate and review Montenegrin as the reference `montenegrin-en` pack.
- [ ] 3.2 Complete fluent review of the authored `albanian-en@0.1.0` starter pack; the selectable pack remains visibly marked Review until approval.
- [ ] 3.3 Identify fluent owners and review separate Spanish, French, Italian, and Greek packs. Complete Spain-Spanish, France-French, and Italian structural pilots are authored; fluent review remains open, as does Greek ownership.
- [ ] 3.4 Create script, pronunciation, audio, and voyage-readiness rules for every pack.
- [x] 3.5 Expand the draft Albanian pack with high-frequency vocabulary and four practical dialogues.
- [x] 3.6 Configure the Albanian `sq-AL` device-voice preview and label it as unapproved draft audio.
- [ ] 3.7 Obtain fluent Albanian review of text, pronunciation, dialogues, and recorded/native audio before publication.
- [x] 3.8 Prevent incompatible English speech fallback and select the best installed target-language device voice.
- [ ] 3.9 Replace device-dependent speech with reviewed recorded Montenegrin and Albanian audio.
- [x] 3.10 Add a Spain-specific `es-ES` pilot with an Iberian journey theme and an Albania-focused visual theme for the existing Albanian pack.
- [x] 3.11 Add Italy-specific `it-IT` and France-specific `fr-FR` pilots with culturally distinct journey themes and independent progress.

## 4. Verify

- [x] 4.1 Test switching languages without changing another pack's progress.
- [ ] 4.2 Test pack validation, unavailable-pack fallback, retirement, and version migration.
- [ ] 4.3 Test Latin, Cyrillic, Albanian Latin, accented Spanish/French, and Greek text rendering/input.
- [ ] 4.4 Complete fluent review and family pilots independently for every published pack.

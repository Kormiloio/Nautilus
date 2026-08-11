# Tasks: Add family language variants

## 1. Confirm policy

- [x] 1.1 Keep standard language-pack content immutable and family variants private.
- [x] 1.2 Support standard-only, show-both, and prefer-family display modes.
- [ ] 1.3 Confirm learner suggestion approval and private family-audio policy.

## 2. Define storage and resolution

- [x] 2.1 Add stable standard item identifiers required by variant targets.
- [x] 2.2 Define the family alternative/addition database schema, approval states, preference modes, and audit fields; production migration application remains part of platform verification.
- [ ] 2.3 Implement family/pack-scoped row-level authorization and deletion.
- [ ] 2.4 Implement deterministic overlay resolution and pack-upgrade quarantine.

## 3. Build family tools

- [ ] 3.1 Add an adult family vocabulary editor with language, topic, meaning, label, and preference controls.
- [ ] 3.2 Display standard and family forms clearly in topics and eligible activities.
- [ ] 3.3 Add learner suggestions and adult approval if confirmed.
- [ ] 3.4 Make quizzes accept configured alternatives without ambiguous distractors.

## 4. Verify

- [ ] 4.1 Test that one family's variants never appear for another family.
- [ ] 4.2 Test standard-only, show-both, prefer-family, removal, and pack upgrades.
- [ ] 4.3 Test diacritics and scripts for every supported language.
- [ ] 4.4 Test permissions, learner suggestions, approval, deletion, and inaccessible private audio.

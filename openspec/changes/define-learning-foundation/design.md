# Design: Nautilus learning foundation

## Context

The prototype is a single 243 KB responsive HTML export bundle containing an 81 KB generated template, application logic, embedded content, and compressed runtime assets. It has no package manifest, editable source tree, test suite, or build command. The source lesson document is still absent. This design therefore defines migration boundaries and evaluation criteria rather than selecting a production framework prematurely.

## Goals

- Keep reviewed learning content independent from UI components.
- Make activity outcomes deterministic and testable.
- Support multiple local learners safely on a shared device.
- Provide consistent touch, keyboard, and screen-reader behavior.
- Degrade usefully when speech, microphone, storage, or connectivity features are unavailable.

## Non-goals

- Select a cloud provider or authentication system.
- Implement automatic pronunciation grading.
- Define a full authoring CMS.
- Preserve the prototype's architecture if it fails the audit.

## Proposed boundaries

1. **Content layer:** versioned structured data validated against a schema. Text, translations, scripts, audio metadata, review state, and activity eligibility live here.
2. **Learning engine:** constructs sessions, evaluates deterministic answers, and emits progress events. It does not directly render UI or write storage.
3. **Progress store:** persists profile-scoped summaries behind an interface that can initially use browser storage and later support sync.
4. **Presentation:** responsive, accessible screens and activity components consuming the other layers.
5. **Media service:** resolves reviewed recordings or an explicit speech fallback without making the rest of the app depend on a particular browser voice.

## Key decisions

### Content is data, not component code

Adding a topic or phrase must not require editing presentation logic. A validation step rejects missing identifiers, invalid review state, unusable activity data, and unresolved media references.

### Review status is explicit

Language and audio have distinct review states. Only items meeting the publishable policy appear in ordinary learner sessions. Development builds may expose draft content with a visible label.

### Progress is event-derived and profile-scoped

Activities produce defined outcomes from which stars, topic progress, recent practice, and streaks are updated. Every stored record carries a learner profile identifier. Exact scoring thresholds will be documented after the prototype audit.

### Audio has a fallback chain

Prefer approved recordings. A tested speech-synthesis voice may be used as a labeled fallback. If neither is available, the text activity remains usable and the app does not block progression.

### No retained recording by default

Listen/repeat may request temporary microphone access only when the feature needs it. Audio is not persisted or transmitted unless a later approved change defines the purpose, consent, retention, and deletion behavior.

## Prototype decision gate

After import, score the prototype against:

- content/UI separation;
- automated testability;
- accessible input and announcements;
- responsive behavior;
- profile-scoped persistence;
- media reliability;
- development/build reproducibility.

Because the bundle has no supported source/build path, the default recommendation is to migrate validated visual and content concepts into a maintainable web application. Reconsider hardening only if editable source is recovered and can meet these requirements through limited refactoring.

## Risks and mitigations

- **Montenegrin speech support varies:** validate representative phrases on target devices and prioritize recordings.
- **Content scale creates mistakes:** schema validation plus named human review gates.
- **Browser data is fragile:** allow progress export/backup or introduce sync in a separately approved change if family testing proves it necessary.
- **Game mechanics distort learning:** keep rewards informational and never use them as content gates.

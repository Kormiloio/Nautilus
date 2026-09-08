# Proposal: Record activity preview and reviewed sentence rhythm

## Status

Retrospective documentation for behavior already deployed in production. This change records and makes auditable the releases delivered in commits `c3b3122`, `c4e75db`, and `3d17684`; it does not alter production behavior.

## Why

Nautilus requires a PRD amendment and OpenSpec proposal, design, specifications, and tasks before implementation. Two recent product improvements—an adult activity preview and the regular reviewed sentence-builder rhythm—were implemented and deployed before their complete OpenSpec record existed. This amendment restores the required product record and states the controls that make the behaviors safe and understandable.

## Learner and family outcome

- An authorized adult can safely see the kinds of activities a learner will encounter without giving themselves progress credit or changing a family session.
- Learners encounter an authored, reviewed sentence builder at a predictable point in a normal lesson when its prerequisite vocabulary is truly available.
- Families see cumulative learning as intentional retrieval, not a hard-coded pairing of topics.

## What is recorded

- **Adult activity preview:** a dashboard preview for a family owner or adult guide. It renders current-pack Flashcards, Match, Quiz, and Build a Sentence activities without creating an attempt, receipt, progress event, reward, or Family Play state transition.
- **Reviewed sentence-builder rhythm:** eligible authored cross-topic connections add a constrained sentence-builder activity after normal recall/related material in Discover, Recall, Build, Use, and Checkpoint lesson purposes. The server validates the submitted answer from the immutable catalog revision and retains normal answer-redaction behavior before feedback.

## Content, privacy, accessibility, and audio

- All sentences and cross-topic relationships remain reviewed, versioned language-pack content. The engine never writes a language-specific or topic-specific sentence.
- Preview creates no learner record or telemetry beyond ordinary application access; it exposes only the selected family's active pack content to authorized adults.
- Preview and sentence tiles remain keyboard-operable, touch-friendly, and compatible with reduced motion. Sentence meaning is available as text; no audio or microphone is required.

## Unresolved product decisions

- Whether activity preview should later include a shareable teacher/family guide view is intentionally out of scope.
- The separate one-blank sentence-completion activity is specified in `add-reviewed-sentence-completion` and is not part of this deployed record.

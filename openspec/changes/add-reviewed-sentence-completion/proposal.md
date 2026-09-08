# Proposal: Add reviewed sentence completion

## Why

Sentence building has shown that Nautilus learners enjoy turning familiar vocabulary into a useful phrase. A one-word completion immediately afterward gives a second, simpler retrieval opportunity: the learner understands a sentence in context and supplies the missing reviewed word. This adds variety without pressure, typing, speech recognition, or invented language.

## What changes

- Add a server-validated `sentence_completion` exercise type to the verified curriculum.
- Derive a completion only from the same reviewed, authored sentence used by an eligible sentence builder.
- Show the English/context prompt, a sentence with one visible blank, and constrained choices.
- Give kind, immediate correct/incorrect feedback; reveal the completed sentence and meaning before continuing.
- Include the completion after an eligible sentence builder in solo and Family Play lesson composition.
- Keep existing published attempts pinned to their catalog revision; publish a new immutable catalog revision for new attempts.

## Compatibility

Existing lesson attempts and catalog revisions are unchanged. A completion exercise is introduced only in a new catalog revision. Language packs without an eligible authored reviewed sentence continue using their existing activity mix.

## Content, privacy, accessibility, and audio

Content remains in reviewed language-pack connections. The client never invents grammar, stores free-form learner text, or transmits microphone audio. The interaction works by touch and keyboard, does not rely on color alone, supports script/direction metadata, and exposes the blank and feedback through accessible text.

## Unresolved decisions

- Whether future content should support two blanks in a single exercise. This release intentionally supports one blank only.
- Whether authors should be able to choose the missing token explicitly. This release uses a deterministic non-punctuation token from the authored sentence; author override can be added later if needed.

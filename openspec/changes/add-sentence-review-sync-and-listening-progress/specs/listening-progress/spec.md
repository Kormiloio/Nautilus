# Listening progress specification

## MODIFIED Requirements

### Requirement: Listening practice is server-verified and counts toward progress

When a signed-in learner with a linked profile opens listening practice for a voyage lesson that has a published listening set, Nautilus SHALL run it as a verified practice lesson. The server SHALL grade each answer, award stars for correct answers once per listening set, and record an active day. It SHALL NOT advance the voyage or Family Voyage.

#### Scenario: First completion

- **GIVEN** a learner completes `practice:voyage-40:listening` for the first time with 5 correct answers
- **THEN** they receive 5 stars and an active day for today

#### Scenario: Replay

- **GIVEN** the learner already completed that listening set
- **WHEN** they complete it again
- **THEN** no further stars are awarded
- **AND** today still counts as an active day

#### Scenario: Voyage unaffected

- **WHEN** a listening set is completed
- **THEN** completed voyage lessons and the Family Voyage position are unchanged

### Requirement: Deterministic published listening sets

Each listening set SHALL be generated deterministically from the voyage lesson's reviewed sentences, SHALL alternate "choose the meaning" quizzes and "put the words in order" builders containing exactly the sentence's words, and SHALL be published in an immutable catalog revision.

#### Scenario: Re-export

- **WHEN** the catalog is exported twice
- **THEN** every listening set is byte-identical

### Requirement: Hear before answering, with a written fallback

A verified listening exercise SHALL offer normal and slow playback with a compatible target-language voice. Without one, it SHALL offer written practice that shows the sentence (meaning quiz) or its meaning (order builder).

#### Scenario: No voice

- **GIVEN** no compatible voice
- **THEN** play buttons are disabled and Written practice is offered

### Requirement: Unsaved fallback is labelled

Without a signed-in linked learner, a cloud connection, or a published listening set, listening practice SHALL run on the device only and SHALL say that results are not saved.

#### Scenario: Not signed in to a linked profile

- **WHEN** listening practice opens without a linked learner
- **THEN** the screen states "Practice only, not saved"

# Listening practice specification

## ADDED Requirements

### Requirement: Sentence listening from current material

A signed-in learner SHALL be able to open listening practice with up to six multi-word sentences drawn from the active or next lesson's sentence pack, or otherwise from that topic's multi-word items, connections, and dialogue, and the entry point SHALL be hidden when no such sentences exist.

#### Scenario: Lesson has sentences

- **GIVEN** the next lesson has at least one multi-word sentence with a meaning
- **WHEN** the learner opens the dashboard
- **THEN** a Listening practice entry is shown

#### Scenario: No sentences

- **GIVEN** the lesson has no multi-word sentences
- **THEN** no Listening practice entry is shown

### Requirement: Hear before answering

Each exercise SHALL ask the learner either to choose the sentence's meaning or to arrange its words (with up to three distractor words from the same session), and answers SHALL be enabled only after the sentence has played or the learner has chosen written practice.

#### Scenario: Word-order grading

- **GIVEN** an order exercise
- **WHEN** the learner submits the words in the right order with different capitalization or punctuation
- **THEN** the answer is graded correct

### Requirement: Target-language voice or written fallback

Playback SHALL use a compatible target-language voice (for Montenegrin: `cnr-ME`, `cnr`, then Croatian, Serbian, Bosnian), SHALL offer normal and slow speed, and SHALL NOT fall back to an English voice; without a compatible voice or on playback error it SHALL explain the problem and offer written practice.

#### Scenario: No compatible voice

- **GIVEN** the device has no compatible voice
- **WHEN** the learner opens an exercise
- **THEN** play controls are disabled and Written practice is offered

#### Scenario: Leaving mid-playback

- **WHEN** the learner leaves listening practice while audio plays
- **THEN** speech is cancelled and late callbacks do not change the screen

### Requirement: Listening practice is unrecorded

Listening practice SHALL NOT store results, create attempts, or change progress or rewards, and SHALL end when the signed-in user or language pack changes.

#### Scenario: User switches account

- **GIVEN** listening practice is open
- **WHEN** a different user signs in
- **THEN** the app returns to the dashboard

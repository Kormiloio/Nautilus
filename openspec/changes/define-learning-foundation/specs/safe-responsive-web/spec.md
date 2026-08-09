# safe-responsive-web delta

## ADDED Requirements

### Requirement: Responsive core experience

The system SHALL make every core learner flow usable on supported phone, tablet, and desktop viewport sizes without horizontal page scrolling.

#### Scenario: Learner uses a narrow phone

- **GIVEN** a supported narrow mobile viewport
- **WHEN** the learner browses topics and completes each core activity type
- **THEN** controls, prompts, answers, feedback, and navigation remain visible and operable

### Requirement: Accessible interaction

The system SHALL support keyboard, touch, pointer, text resizing, visible focus, programmatic labels, sufficient contrast, and reduced-motion preferences for core learner flows.

#### Scenario: Learner completes a quiz by keyboard

- **GIVEN** the learner uses only a keyboard
- **WHEN** the learner navigates, selects, submits, and continues a quiz
- **THEN** each action is operable with a visible focus indicator
- **AND** feedback is programmatically available without relying only on color

### Requirement: Minimal recording retention

The system MUST NOT persist or transmit microphone recordings by default.

#### Scenario: Learner grants microphone access

- **GIVEN** an optional repetition feature requests microphone access
- **WHEN** the learner records and exits the activity
- **THEN** the recording is not retained in local or remote storage
- **AND** the system has not transmitted it to a remote service

### Requirement: Permission fallback

The system SHALL keep relevant learning content usable when microphone permission is unavailable or denied.

#### Scenario: Microphone permission is denied

- **GIVEN** the learner denies microphone permission
- **WHEN** the repetition activity handles the denial
- **THEN** playback and text remain usable
- **AND** the system explains how to continue without recording

### Requirement: Storage failure resilience

The system SHALL avoid losing the active session or becoming unusable when local progress storage cannot be read or written.

#### Scenario: Browser storage write fails

- **GIVEN** the browser rejects a progress write
- **WHEN** an activity completes
- **THEN** the learner receives their activity feedback
- **AND** the system communicates that progress may not be saved
- **AND** the learner can continue or retry safely


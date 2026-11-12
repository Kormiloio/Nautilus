# Cumulative sentence practice specification

## ADDED Requirements

### Requirement: Sentences use only familiar words

At catalog revision 9 or later, a focused voyage lesson SHALL build its cumulative sentences only from allow-listed nouns that the learner has already been introduced to on the actual focused schedule or that belong to the current lesson, and SHALL omit sentence practice when fewer than two familiar nouns exist.

#### Scenario: Enough familiar words

- **GIVEN** a focused lesson from voyage day 27 onward
- **AND** at least two allow-listed nouns were introduced on earlier scheduled days
- **WHEN** Nautilus builds the lesson at revision 9
- **THEN** the lesson contains sentences whose nouns are all prior or current words
- **AND** each sentence names its frame and its prerequisite word

#### Scenario: Too few familiar words

- **GIVEN** fewer than two allow-listed nouns are familiar
- **WHEN** Nautilus builds the lesson
- **THEN** no sentence practice is included
- **AND** the lesson remains playable as vocabulary practice

### Requirement: Explained sentence pattern before practice

A lesson with cumulative sentences SHALL present the familiar words and a word-by-word explanation of each sentence frame before any sentence builder or completion.

#### Scenario: Learner reaches sentence practice

- **GIVEN** a lesson includes a cumulative sentence pack
- **WHEN** the learner progresses through the lesson
- **THEN** a familiar-words step and a pattern lesson with glossed frame parts appear before the first builder

### Requirement: Builder and completion per sentence

For two sentences in the pack, the lesson SHALL include a sentence builder whose tiles never start in answer order and a single-blank completion with the correct word among at most four choices.

#### Scenario: Tiles are shuffled

- **GIVEN** a sentence builder is generated
- **WHEN** the shuffle reproduces the answer order
- **THEN** the tiles are rotated so they differ from the answer

#### Scenario: Published lesson coverage

- **GIVEN** catalog revision 9 is prepared for Montenegrin days 27–200 in individual and Family Play modes
- **WHEN** the publish script validates it
- **THEN** every such lesson contains exactly two `sentence_builder` and two `sentence_completion` exercises, or publication aborts

### Requirement: Revision-pinned sentence behavior

Lesson generation SHALL follow the attempt's catalog revision: no sentence practice below revision 8, authored topic packs at revision 8, cumulative packs at revision 9 or later.

#### Scenario: Older attempt replays

- **GIVEN** a verified attempt pinned to revision 7
- **WHEN** its lesson is regenerated
- **THEN** it contains no sentence-practice steps

### Requirement: Accurate focused recap

The recap for a focused lesson SHALL list words new to the learner separately from words practiced again, and SHALL hide a section that has no items.

#### Scenario: Bridge day repeats earlier words

- **GIVEN** a bridge day reuses words introduced on earlier focused days
- **WHEN** the recap is shown
- **THEN** those words appear under "Practiced again", not "New today"

### Requirement: Draft content is labeled draft

Every authored sentence, frame, and dialogue added by this change SHALL carry `reviewStatus: 'draft'` until fluent review is recorded, and SHALL NOT be described as reviewed.

#### Scenario: Release manifest

- **WHEN** the revision 9 release files are prepared
- **THEN** the manifest states that Montenegrin sentence content is draft and fluent review is pending

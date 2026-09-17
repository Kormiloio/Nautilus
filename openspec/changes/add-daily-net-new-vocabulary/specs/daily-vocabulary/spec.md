# Daily vocabulary requirements

## Requirement: Half net-new every day
Every core lesson SHALL contain at least 50% net-new distinct canonical vocabulary identities relative to all earlier lessons in the same plan, including integration and checkpoint lessons.

### Scenario: Reused word labeled new
- GIVEN a lexical identity was introduced on day 2
- WHEN day 23 labels it new
- THEN validation rejects day 23.

### Scenario: New sentence with familiar vocabulary
- GIVEN all words in a sentence have appeared earlier
- WHEN the sentence is used in a new activity
- THEN it provides zero new vocabulary identities.

## Requirement: Sufficient reviewed allocation
Each lesson SHALL have the configured number of distinct words (initial target 20) and reviewed inventory records with reviewer and date. Duplicate display forms SHALL NOT inflate counts.

### Scenario: Too little content
- GIVEN only eight new words and twelve review words
- WHEN a twenty-word lesson is validated
- THEN publication fails rather than padding with duplicates.

## Requirement: Same vocabulary across modes
Family and individual lessons SHALL teach the declared new words before retrieval and SHALL use only their allocated vocabulary.

### Scenario: Family opens the same day
- GIVEN a validated daily allocation
- WHEN family and individual activities are built
- THEN both introduce the same new lexical identities.

## Requirement: Revision safety
Replacement voyages SHALL use new immutable catalog revisions and SHALL preserve historical attempts and progress.

### Scenario: Authoring incomplete
- GIVEN a pack lacks a complete reviewed daily plan
- WHEN a replacement core catalog is exported
- THEN export fails before emitting SQL.

## Requirement: Explicit continuation baseline
A continuation plan SHALL declare prior vocabulary IDs from the preceding curriculum; these SHALL NOT count as new on any continuation day.

### Scenario: First continuation day
- GIVEN day 24 follows the legacy first 23 days
- WHEN its allocation is checked
- THEN ten review words belong to the declared prior inventory and ten new words have never appeared in that inventory or earlier expansion days.

## Requirement: Honest draft preview
An authorized adult SHALL be able to select a draft expansion day and preview its vocabulary without progress changes or a claim of reviewed publication.

### Scenario: Adult inspects day 24
- GIVEN an unpublished draft allocation
- WHEN the adult selects it in activity preview
- THEN its 10 new and 10 review words are identified, draft status is visible, and no attempt or completion is written.

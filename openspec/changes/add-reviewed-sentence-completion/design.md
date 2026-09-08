# Design: Reviewed sentence completion

## Content model

The source of truth is an already approved connection item with `targetText` and `supportText`. The engine tokenizes its target text exactly as the sentence builder does. It chooses one non-punctuation token as the blank and produces a constrained choice list from the sentence tokens plus approved distractors from the same reviewed connection pool. No UI component contains language-specific grammar or topic names.

The verified catalog stores:

- `kind: "sentence_completion"`;
- the English/context prompt;
- the target sentence tokens and blank index;
- the offered choices;
- one or more accepted answer tokens;
- an explanation containing the completed sentence and its support text.

The public attempt payload omits the accepted answer. The server compares the submitted choice against the catalog and returns correctness plus the explanation only after submission.

## Lesson composition

When a topic has a connection whose prerequisites are in the learner's completed history, the engine creates a sentence builder. The same reviewed sentence supplies one completion directly after it, before the quiz or dialogue. This yields: recall → build → complete → quiz/conversation. No completion is emitted if there is no eligible reviewed sentence.

Family Play uses the same catalog exercise. Each required learner submits a choice from their own device. The shared round advances only after all required participants have locked a response; each learner sees their own feedback.

## Validation and fallback

A completion requires at least two non-punctuation target tokens and at least two distinct choices. If content cannot satisfy those rules, the engine omits the activity. The adapter rejects malformed completion steps rather than quietly changing the lesson shape. Server validation rejects answer shapes other than a single permitted choice.

## Data retention

The service stores the minimal completion receipt already used for verified exercises: attempt, exercise index, profile/session scope, submitted answer, correctness, and timestamp. It retains no typed prose, recordings, or private family examples.

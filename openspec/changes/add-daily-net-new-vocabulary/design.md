# Design

A pure daily-vocabulary module validates a versioned plan containing a lexical inventory and ordered lesson allocations. Canonical vocabulary IDs unify spelling/script/inflection variants; normalized duplicate target forms are rejected as an additional guard. Plans identify new versus review IDs explicitly. A lesson has exactly the configured word count and at least ceil(count/2) previously unseen IDs. Every introduction is tracked across the entire ordered route, including checkpoints and integration.

Validated allocations feed both family and individual generators through an optional per-pack daily-plan registry. New words appear first in discovery; matching and recall use only allocated items. Existing immutable catalogs remain supported. The exporter preflights every selected core lesson before emitting SQL and requires a complete reviewed plan unless an explicit legacy export flag is supplied for maintenance. No existing pack is silently marked compliant.

Plans are repository content, not learner input. No new persistence or personal-data collection is needed. The implementation cannot establish linguistic equivalence mechanically: reviewers own canonical lexical grouping and translations. Any missing content produces an actionable authoring error, never recycled filler.

## Draft expansion and existing-family transition

A separate draft registry holds the Montenegrin day-24–40 expansion. Its priorWordIds refer to actual word records from earlier material; they initialize the seen set for authoring validation of this continuation. Full-course publication still requires all 200 ordered allocations. An adult preview can inspect a draft day's new and review words and practice flashcards, matching, and quizzes without creating progress or enabling draft catalog publication. The preview must not fabricate a sentence from unrelated words. Review selection includes older baseline vocabulary and, from day 25, recent new words. Linguistic novelty is additionally audited against normalized existing pack text and explicitly recorded inflection aliases.

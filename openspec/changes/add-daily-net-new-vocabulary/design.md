# Design

A pure daily-vocabulary module validates a versioned plan containing a lexical inventory and ordered lesson allocations. Canonical vocabulary IDs unify spelling/script/inflection variants; normalized duplicate target forms are rejected as an additional guard. Plans identify new versus review IDs explicitly. A lesson has exactly the configured word count and at least ceil(count/2) previously unseen IDs. Every introduction is tracked across the entire ordered route, including checkpoints and integration.

Validated allocations feed both family and individual generators through an optional per-pack daily-plan registry. New words appear first in discovery; matching and recall use only allocated items. Existing immutable catalogs remain supported. The exporter preflights every selected core lesson before emitting SQL and requires a complete reviewed plan unless an explicit legacy export flag is supplied for maintenance. No existing pack is silently marked compliant.

Plans are repository content, not learner input. No new persistence or personal-data collection is needed. The implementation cannot establish linguistic equivalence mechanically: reviewers own canonical lexical grouping and translations. Any missing content produces an actionable authoring error, never recycled filler.

## Draft expansion and existing-family transition

A separate draft registry holds the Montenegrin day-24–40 expansion. Its priorWordIds refer to actual word records from earlier material; they initialize the seen set for authoring validation of this continuation. Full-course publication still requires all 200 ordered allocations. An adult preview can inspect a draft day's new and review words and practice flashcards, matching, and quizzes without creating progress or enabling draft catalog publication. The preview must not fabricate a sentence from unrelated words. Review selection includes older baseline vocabulary and, from day 25, recent new words. Linguistic novelty is additionally audited against normalized existing pack text and explicitly recorded inflection aliases.

## Pilot rollout
Register only the explicit day-24–40 continuation as an authorized pilot. Runtime validation permits draft language metadata only through this pilot registry, while structural and novelty checks remain mandatory. Add catalogRevision to the already-authorized Family Play state RPC and select the legacy browser generator for existing revision-5 sessions. Publish revision-6 copies of unchanged catalog rows alongside 34 new continuation definitions in one transaction; do not mutate earlier catalogs. The production release gate moves to revision 6 only after hosted counts and exercise content pass verification.

The final rollout extends the same live pilot to days 24–200, replacing 354 individual/family definitions in revision 6. All other definitions are copied unchanged. A reproducible assembler produces both the full 200-day draft and the legacy-seeded continuation; the first 17 continuation allocations are preserved verbatim. The full new-course plan does not determine review for existing families, who have not studied its redesigned first 23 days.

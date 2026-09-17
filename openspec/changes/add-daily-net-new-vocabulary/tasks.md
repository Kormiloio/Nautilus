# Tasks

- [x] Record the family feedback and mandatory 50% rule in PRD and OpenSpec.
- [x] Implement canonical allocation validation and common lesson generation.
- [x] Add catalog export preflight and explicit legacy maintenance escape hatch.
- [x] Add regression tests for novelty, duplicate forms, review eligibility, and mode parity.
- [ ] Author and fluently review complete daily inventories and allocations per pack.
- [ ] Verify mobile, keyboard, audio fallback, and family devices using approved content.
- [ ] Publish a new immutable catalog revision and verify production counts.

## Verification — September 17, 2026

- 114 tests across 19 files pass, including 12 new daily-vocabulary contract tests.
- All seven existing packs pass structural validation; this is not daily-plan readiness or language approval.
- Isolated Vite production build succeeds (existing Mandaic font resolution warning remains).
- Default core exporter rejects a missing daily plan with zero SQL bytes emitted.
- No production deployment, database mutation, existing progress change, or pack approval was performed.
- Daily-plan registry remains empty pending authored/reviewed allocations. Consequently the running legacy course is unchanged; this delivery is the enforced content contract and supporting runtime, not completed curriculum expansion.
- Before activating for existing families, reconcile lexical introduction history from the legacy route; the current plan validator alone cannot certify learner-specific migration novelty.

## First authored expansion — September 17, 2026

- [x] Author 170 draft Montenegrin vocabulary entries across days 24–40.
- [x] Allocate exactly 10 new and 10 review words on every expansion day.
- [x] Seed review from explicit legacy words and test exact-token/recorded-alias overlap against the old pack.
- [x] Add adult no-credit day selection, draft labeling, and vocabulary lists to activity preview.
- [x] Validate all 17 allocations and both generated activity modes; keep draft publication rejected.
- [ ] Complete fluent review of translations, canonical lexical groupings, and family-specific prior exposure.
- [ ] Expand subsequent days and other language packs.
- [ ] Complete live browser/device verification and publish a reviewed catalog revision.

The draft registry now contains actual vocabulary and daily allocations. It is separate from the published registry, which remains empty. No production update was attempted.

## Full-course authoring and live continuation

- [x] Author 200 daily allocations and 2,010 distinct draft lexical entries.
- [x] Assemble day-24–200 continuation with 1,770 new words and a legacy-compatible review baseline.
- [x] Activate the explicit pilot in actual individual and Family Play generators.
- [x] Expose pinned catalog revisions without changing session authorization.
- [x] Rehearse the atomic catalog rollout locally using a backup of existing definitions.
- [x] Pass 124 application tests, 101 database assertions, all content validation, and database lint.
- [ ] Verify the matching production client and catalog after deployment.
- [ ] Obtain fluent language/audio review; pilot authorization does not grant review approval.

### Deployment state

The session-revision metadata migration is applied. Catalog activation and the matching client remain pending: API upload size exceeded; automatic review rejected a staging-table schema/permission change and an administrator role switch. A concrete access-restricted staged upload was prepared and successfully rehearsed locally. See `docs/VOCABULARY_PRODUCTION_ROLLOUT.md`. No staging table exists in production.

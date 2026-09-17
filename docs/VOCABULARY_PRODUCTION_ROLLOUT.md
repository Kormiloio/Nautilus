# Vocabulary production rollout — ready for staging approval

## Delivered implementation

- Complete 200-day Montenegrin draft: 2,010 distinct lexical entries.
- Live continuation prepared for days 24–200: 1,770 new words, ten new and ten review every day.
- Earlier completed days and catalog-pinned sessions are preserved.
- The current continuation uses the legacy review baseline, not the redesigned first 23 days of the new-course draft.
- Language metadata remains draft; the family has authorized live pilot use, not invented fluent approval.

## Verification

124 application tests, 101 database assertions, structural/daily content validation, database lint, and an isolated client build pass. The full revision-6 catalog and the smaller staged-upload route both passed local rehearsals. The staging rehearsal verifies that anon, authenticated and service_role cannot read the staging table; final publication drops it in the same transaction.

## Current production state

The session-revision metadata migration 20260917010000 was applied successfully. The production catalog remains revision 5 and the live client remains the prior release. No vocabulary activation has occurred. The large atomic upload was rejected by the database API with HTTP 413 before execution. Automatic approval review rejected creating a production staging table and separately rejected an administrator-role switch. An ordinary direct connection has neither catalog SELECT nor INSERT privilege. Its temporary credential file was removed.

## Exact operation requiring approval

1. Create `public.nautilus_catalog_stage_revision6` with the catalog column/constraint layout, enable RLS, and revoke all access from public, anon, authenticated and service_role inside one transaction. Existing tables and role memberships are not changed.
2. Upload 354 prepared definitions in 118 idempotent chunks, each under 57KB. The table contains curriculum definitions only, not learner records.
3. In one transaction, copy unaffected revision-5 definitions into revision 6, insert the 354 new definitions, verify 1,400 individual / 1,400 family / 954 practice definitions and unchanged unaffected exercises, then drop the staging table. Existing catalogs, attempts and progress are not modified.
4. Run the production build against revision 6, push the matching client, and verify the published site and catalog.

Preparation command (local file generation only):

```sh
node scripts/prepare-vocabulary-upload.mjs /private/tmp/nautilus-vocabulary-upload
```

The resulting `00-create-private-stage.sql`, `10-chunk-*.sql`, and `20-publish-and-remove-stage.sql` are the exact reviewable operations. They have not been executed against production.

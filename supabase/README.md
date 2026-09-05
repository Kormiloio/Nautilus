# Local Supabase verification

Nautilus uses the Supabase CLI with a local Docker-compatible runtime. The original foundation is tracked as a regular SQL file in `migrations/20260810000000_nautilus_foundation.sql`, matching the historical `migration.sql` snapshot. Subsequent changes are forward-only timestamped migrations. Do not edit previously applied migrations.

## First-time setup on macOS

```sh
brew install supabase/tap/supabase docker colima
colima start --cpu 2 --memory 4 --disk 20
supabase start
```

## Verify a clean database

```sh
npm run db:reset
npm run test:db
npm run lint:db
```

The pgTAP suite creates temporary Google-style test identities inside a transaction and rolls everything back. It verifies family creation, owner membership, learner and friend invitations, privilege-escalation denial, learner progress privacy, owner controls, family variants, cross-family isolation, and Family Play separation. Family Play tests prove that independent lesson attempts do not move shared progress and only explicit adult completion advances one family day.

## Authentication configuration

The family alpha supports Google OAuth only. Password/email signup is disabled in `config.toml`. The local Google provider remains disabled until developer credentials are supplied; never commit the Google client secret or a Supabase service-role key.

Hosted Supabase and Google Cloud must allow these application return URLs before deployment:

- `http://localhost:3000`
- `http://127.0.0.1:3000`
- `https://kormilo-nautilus.netlify.app/`
- `https://kormilo.io/fleet/nautilus`

Applying this migration to a hosted project is a separate reviewed action. Do not run `supabase db push` until the target project and any existing proof-of-concept data have been inspected.


## Atomic progress counter rollout (pending deployment)

The 20260903010000 migration makes stars/dialogue increments additive and
idempotent through increment_progress_counter. An operation UUID is permanent:
reusing it with the same payload is a no-op; changing its payload is rejected.
Clients cannot directly insert, update, or delete counter totals. Do not prune
operation receipts while clients may still retry old offline operations.

Deploy the migration before the matching client release. Old clients will be
unable to overwrite totals and must refresh. New clients retain legacy absolute
counter totals under nautilus:sync-recovery:* for manual reconciliation; those
records cannot safely be interpreted as increments. The dashboard shows a
recovery notice for the affected learner. Do not clear browser data to fix it.

Each queued action is stored under its own nautilus:sync-operation:* key. This
prevents tabs from replacing one shared queue snapshot. Duplicate submission
across tabs is safe for the counter RPC. Cloud refresh keeps pending local
progress and never replaces a failed summary request with zero totals.

Verification: npm run test:db includes the family/RLS and atomic-counter suites.
For an isolated review database only, run:

    node scripts/test-verified-concurrency.mjs supabase_db_nautilus-review-20260902

The concurrency script intentionally rejects normal project container names.
It creates synthetic fixtures only inside that disposable review database.

### Remaining security boundary

This counter RPC is NOT proof of learning: authenticated callers can still
submit repeated bounded reward claims with new operation IDs. Completed lesson,
topic, and activity writes also still use the older client-authoritative path.
Do not treat this migration as resolution of those review findings.

The next contract needs versioned server-owned lesson/exercise definitions,
server-issued attempts, validated answers and ordered stage receipts, reward
calculation from those receipts, and final completion gated on required stages.
Family Play must use the same model with per-participant completion evidence.
Spoken practice must be explicitly identified as self-attested rather than
misrepresented as machine-verified speech. Preserve existing credited progress;
apply stricter verification to new sessions after the coordinated rollout.


## Verified lesson contract v1 — integrated cutover pending deployment

Migration 20260903020000 adds immutable published exercise definitions,
participant-specific receipts, ordered attempts, and auditable reward awards.
The new API adapter is src/engine/verified-learning-service.js. Signed-in voyage,
practice, and Family Play screens use it; local-only profiles remain local-only.

The deployment-owned exporter scripts/export-verified-curriculum.mjs emits SQL
for 2,800 definitions (200 lessons × 7 languages × individual/family). It uses
the existing content generators with stable seeds and does not connect to a DB.
A second import is idempotent. Changed content with the same revision is rejected;
publish a new revision instead of changing answer keys beneath existing attempts.
Catalog discovery exposes metadata only. Canonical answers are withheld until
the grading response; objective learning is not proof that a human, rather than
a script, submitted the answer.

The contract grades quizzes against offered choices and canonical answers,
requires all matching pairs to be correct, records speaking/reading confirmation
as self_reported with zero graded stars, and records completion/activity only
after all participants finish every exercise. Wrong quiz answers remain locked,
receive feedback and earn zero stars. Matching errors can be retried. Completion
retries do not duplicate credit, and repeating an already credited voyage lesson
does not award its stars again. Existing historical credit is preserved.

For verified Family Play, the participant roster and controller are pinned.
Changing controller currently requires cancelling and restarting. Legacy segment
jumps and completion RPCs are blocked once an attempt has been attached. Sessions
without verified attempts still use the old behavior pending the coordinated cutover.

Coordinated deployment order:

1. Apply migrations through 20260903030000.
2. Pipe the reviewed output of scripts/export-verified-curriculum.mjs to that
   database. Confirm all expected catalog counts before releasing the client.
3. Release the matching client. Never release it before the catalog, because it
   intentionally refuses to fall back to unverified credit.
4. Existing incomplete Family Play sessions cannot be trusted retroactively.
   The controller sees a restart explanation and can cancel the old session;
   all previously earned progress remains intact.
5. Watch the sync-recovery notice. Old offline credit claims are preserved for
   explicit reconciliation and are not converted into exercise evidence.

The cutover migration revokes direct writes to lesson/topic/activity tables,
revokes the transitional counter RPC, hides old quiz/finalization RPCs, creates
verified attempts atomically with new family sessions, and protects every
completion transition with server receipts.
Tests: npm run test:db includes 35 verified-attempt assertions in addition to the
existing family/RLS and atomic-counter coverage.

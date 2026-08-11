# Local Supabase verification

Nautilus uses the Supabase CLI with a local Docker-compatible runtime. The canonical schema is `migration.sql`; the timestamped entry in `migrations/` is a relative symlink so local resets and hosted pushes use the same source.

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

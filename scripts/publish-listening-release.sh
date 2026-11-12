#!/bin/sh
# Publish catalog revision 10 (listening sets) to the linked Supabase project.
# Run from the repo root so `supabase` can find the linked project:  sh scripts/publish-listening-release.sh
set -e
cd "$(dirname "$0")/.."
D=/private/tmp/nautilus-listening-release
[ -f "$D/manifest.json" ] || node scripts/prepare-listening-release.mjs "$D"
supabase db query --linked "drop table if exists public.nautilus_catalog_stage_revision10"
for f in 00-stage.sql $(cd "$D" && ls 10-chunk-*.sql | sort) 20-publish.sql; do
  echo "== $f"
  supabase db query --linked --file "$D/$f"
done
echo "Done. The last result above should show revision 10 and practice 1139."

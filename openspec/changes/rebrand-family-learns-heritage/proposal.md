# Change: Rebrand to "Nautilus — Learn Your Heritage Together"

## Why

Nautilus was created as a Montenegrin learning app for one family's trip. It has since evolved into a multi-language platform supporting Montenegrin and Albanian, with the architecture designed from day one for additional language packs. Other families are now looking at the platform to learn their own heritage languages.

The current branding — "Učimo crnogorski" (We're learning Montenegrin) — signals a single-language, single-purpose app. This limits adoption because:

- Families learning Albanian, Spanish, Italian, or Arabic see a Montenegrin-specific name and assume the app isn't for them.
- The product positioning reads as "a Montenegrin app that happens to support Albanian" rather than "a heritage language platform for families."
- The nautical voyage theme (ports, sea companions, voyage map) is already language-agnostic and works perfectly for any heritage language.

The rebrand shifts positioning from "a learning app that happens to support multiple languages" to "a heritage language learning platform for families." The internal codename "Nautilus" stays — it's a strong, evocative brand. The tagline changes from "Učimo crnogorski" to "Learn Your Heritage Together."

## What changes

### User-facing branding (changes)

- **App header / welcome screen:** "Učimo crnogorski" → "Nautilus — Learn Your Heritage Together"
- **Browser tab title:** "Nautilus" → "Nautilus — Learn Your Heritage Together"
- **README:** product description updated to reflect multi-family heritage platform
- **package.json description:** updated to reflect the broader scope

### Documentation (changes)

- **docs/PRD.md:** product summary, goals, experience principles, and release approach updated for multi-family heritage positioning
- **openspec/config.yaml:** context blurb updated from Montenegrin-specific to heritage platform

### What does NOT change

- Internal codename remains "Nautilus"
- Package name remains `nautilus-ucimo-crnogorski`
- Repository folder remains `Nautilus`
- localStorage keys remain `nautilus:*`
- Supabase table names and schema remain unchanged
- Language pack IDs (`montenegrin-en`, `albanian-en`) remain unchanged
- The nautical voyage theme, milestones, and visual assets remain unchanged

## Impact

- **Learners:** see a welcoming, language-agnostic brand that signals "this is for my heritage too."
- **Families:** can adopt the platform without feeling it's "someone else's Montenegrin app."
- **Content authors:** no change — language packs remain independently versioned and reviewed.
- **Existing users:** no disruption — progress, profiles, and cloud data are untouched.

## Out of scope

- Authoring new language packs (Iraqi Arabic, Spanish, Italian, French) — tracked separately.
- Changing the nautical theme or voyage mechanics.
- Renaming internal identifiers, database tables, or storage keys.

# GardenKey MVP v13 — Tester Expansion

Upload these files to your existing GitHub repository, replacing the current files.

## Files
- `index.html` — public welcome page, plant library, category search, NFC guide.
- `plant.html` — plant profile page with expanded care sections.
- `admin.html` — owner/admin plant library builder for David.
- `create.html` — public tester draft page. Testers can create a plant draft and email it to David.
- `plants.json` — shared GardenKey plant library.

## Stable NFC paths
- Blank/tester starter tag: `https://davewalsh45pro.github.io/Gardenkey-mvp/`
- Direct plant tag: `https://davewalsh45pro.github.io/Gardenkey-mvp/plant.html?id=GK-LAV-001`

## Important pilot note
GitHub Pages is static. It cannot safely allow public users to edit the shared plant library directly without exposing write permissions. For the pilot:
1. Testers create drafts on `create.html`.
2. Drafts are emailed to David.
3. David decides which entries to add to `plants.json` using `admin.html`.
4. David uploads the updated `plants.json` to GitHub.

A future production version should use a database such as Firebase or Supabase, with user accounts and per-customer plant records.

# GardenKey V15 — data architecture fix

## What was wrong
`plants.json` (13 plants, rich schema: `quickCare`, `seasonalActions`, `photoPlan`,
`pollinator`, `propagation`, `companionLinks`) already existed in the repo and matches
the "official database, single source of truth" principle in the project doc — but
`index.html` and `plant.html` never read it. Both had their own separate, smaller,
hardcoded plant arrays baked into inline `<script>` tags (11 plants each, thinner data,
no seasonal actions, fake companion links). The two front-end pages had silently
drifted from the database. Adding a 12th plant to `plants.json` via admin.html would
do nothing on the live site.

## What changed
- **index.html** now `fetch('plants.json')` at load time and builds categories/filters
  from the real `category` field instead of a hardcoded switch statement.
- **plant.html** now fetches the same file, looks up by `?id=`, and renders fields that
  existed in the data but were never shown before:
  - `seasonalActions` (Spring/Summer/Autumn/Winter jobs) — new "Jobs by season" card
  - `propagation.season` / `.tips` alongside `.methods`
  - `pollinator.score` as a star rating, plus `.value`
  - `photoPlan.hero` / `.gallery` captions used as labels on the photo checklist,
    instead of generic "Hero / Flower / Leaf" placeholders
  - `companionLinks` resolved properly, with a fallback that matches a companion's
    name against the full plant list if no explicit link exists (previously companion
    plants that weren't in the hardcoded array just silently disappeared)
- Both pages now support an optional `heroImage` URL field per plant (real photo)
  with the existing colour-gradient as automatic fallback when no photo is set yet —
  this is the "hero photo, fade into colour" item from the open loops list, done in a
  way that costs nothing until you actually have photos to add.
- Both pages show a plain-language error state if `plants.json` fails to load (e.g.
  opened via `file://` instead of a server) instead of silently breaking.

## Why this matters beyond tidiness
This was the blocker on the "photos" and "auto-suggest" open loops too — you can't
usefully add a `heroImage` field, or later have admin.html auto-suggest fields from a
plant name, if two other pages aren't even reading the file you'd be editing.

## Follow-up audit: admin.html and create.html

**admin.html was not writing the old flatter shape — it wasn't writing anything.**
It was a stub: a name field, a notes textarea, and a comment reading "Next
architecture step: move approved content into a controlled data file." There was no
way to actually get an approved plant into `plants.json` through the UI at all; it had
to be hand-edited directly in the repo.

**create.html was the real version of the concern you raised.** Its tester draft
emailed to you was flat and used different field names entirely —
`{id, name, category, variety, location, light, water, soil, notes}` — with no
`quickCare`, `seasonalActions`, `propagation`, `pollinator`, `photoPlan`, `companions`,
`theme`, or `tags`. Every tester submission required you to manually re-key it into the
real schema before it could go in the database.

### What changed
- **admin.html** is now a working builder: it loads the live `plants.json`, gives you a
  form matching the real schema (quick care, seasonal actions, propagation, pollinator,
  photo plan, companions, problems), lets you add/update an entry in-browser, and
  exports the full updated file as a ready-to-commit `plants.json`. It also has a
  "prefill from draft" box that parses a tester draft and maps its fields into the form.
- **create.html** now exports its draft using the same key names as `plants.json`
  (`quickCare.Water`, `quickCare.Light`, `quickCare.Feeding`) instead of flat
  `light`/`water` fields. It's still intentionally lightweight for testers — it doesn't
  ask for seasonal actions or propagation, since that's not something a tester scanning
  a blank tag would know — but what it does collect now lines up with the schema
  instead of fighting it.

### Still not touched
`pot.html` and `seedling.html` — not reviewed in this pass. Worth checking whether they
reference plant IDs from `plants.json` or carry their own hardcoded plant data, same
issue as the original `index.html`/`plant.html` split.

## How to test
1. Replace `index.html` and `plant.html` in the repo with these versions.
2. Push to GitHub Pages (fetch requires http/https — won't work opened from disk).
3. Visit `/plant.html?id=GK-CAR-001` (Carrot) or `GK-COU-001` (Courgette) — these
   exist in `plants.json` but were never visible before since they weren't in either
   hardcoded array.

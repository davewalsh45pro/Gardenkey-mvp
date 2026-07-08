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
`pot.html` and `seedling.html` — not reviewed in the first pass, but are addressed
below.

## Round 3: your V15 testing notes

**Found while auditing: a broken link and an orphaned data file.**
- The README's suggested test link `/plant.html?id=GK-GLA-001` (Gladiolus) points to a
  plant that doesn't exist in `plants.json` — there are 13 plants and Gladiolus isn't
  one of them, despite the README saying it was restored. Worth either adding it or
  updating the README/suggested links.
- `plants-2.json` is a second, older data file sitting in the repo (different field
  names — `Aspect` instead of `Light`, plain-string `problems` instead of
  `{name, fix}` objects, no `pollinator`/`photoPlan`/`category`). Nothing live reads
  it, so it's harmless, but worth deleting or archiving so a future edit doesn't
  accidentally target the wrong file.

**Generic pictures in the coloured boxes.** Added `icons.js` — a small shared library
of category-based line art (tree, shrub, perennial, fern, vegetable, bulb, succulent,
etc.), rendered as an inline SVG tinted to match each plant's theme colour. This
applies uniformly to the plant library thumbnails, the plant hero background, and
every companion card — including companions that aren't in the library yet, which
previously showed as a blank grey box. It's not a real photo, but it gives every plant
a distinct, intentional visual instead of a flat colour swatch, and costs nothing to
maintain. Real photos (via the `heroImage` field from the last round) will still
override this automatically once you have them.

**"Pollinator" → "Pollinator friendly."** Section heading changed in `plant.html`.

**Plant-specific care info.** Six plants — Canna, Dahlia, Hosta, Hydrangea, Japanese
Maple, Salvia — had templated boilerplate in `quickCare` and `seasonalActions`
("Light: Match plant needs; avoid stress", "Pruning: Prune at the right seasonal
stage"). Rewrote all six with real, plant-specific care: e.g. Hydrangea now correctly
notes that flower colour depends on soil pH and that pruning at the wrong time removes
next year's buds; Salvia notes it's drought-tolerant once established and that cutting
back in autumn (rather than spring) exposes the crown to frost. Also expanded their
`problems` sections with plant-specific issues instead of the generic
"water stress / pests / poor growth" template. The other 7 plants already had real
data and were untouched. This is a `plants.json` data fix, not a page fix — replace
the file in the repo along with the others.

**Search now matches plant name only**, not description, category, or tags — in both
the filter logic and the placeholder text.

**Companion cards** now share one layout function whether linked or unlinked, and both
show the same generic artwork, so the row reads as uniform instead of mixed
solid-colour and photo-styled cards.

**`pot.html` and `seedling.html` are now fully editable**, not previously reviewed.
Since there's still no backend, both save to the browser via `localStorage`:
- `pot.html` — full mixed-planter profile (location, size, material, drainage, soil
  mix, top dressing, watering, status, seasonal notes) plus an editable list of every
  plant in the pot, each with position/status/notes and an automatic link to that
  plant's library profile if the name matches. Loading `?id=GK-POT-SUC-001` for the
  first time seeds it with the succulent planter example from the original project
  doc (Echeveria, Sedum, dormant tulip bulbs) as a working test case; after that it's
  whatever you've saved. A "New pot" button generates a fresh ID for other planters.
- `seedling.html` — add any number of trays/batches, each with variety, quantity, sow
  date, pricking-out date, transplant date, status and notes.
- Both have **Export JSON** (downloads a backup / shareable file) and **Import JSON**
  (loads one back in) — since `localStorage` is per-browser, this is currently the
  only way to move a profile between your phone and laptop, or hand one to a tester.
  Worth knowing this is a real limitation before showing it to Nuala: her nursery data
  would live only in whatever browser she used to enter it, unless she exports it to
  you.

## How to test
1. Replace `index.html` and `plant.html` in the repo with these versions.
2. Push to GitHub Pages (fetch requires http/https — won't work opened from disk).
3. Visit `/plant.html?id=GK-CAR-001` (Carrot) or `GK-COU-001` (Courgette) — these
   exist in `plants.json` but were never visible before since they weren't in either
   hardcoded array.

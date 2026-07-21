# GardenKey V22 — audit, personal-photo workflow and library expansion

## Implemented
- Audited the complete V21 package and retained the rich single-source `plants.json` architecture.
- Confirmed soil, suggested mix, propagation, pollinator information, photo plans and weekly facts existed across all V21 library entries and were rendered on plant profiles.
- Added 15 new plants: five corms, five ferns and five herbs. Library total is now 134.
- Made My Plant record IDs automatic and read-only.
- Fixed species links when a personal plant is quick-created from a general plant guide.
- Fixed the loaded-record status to show the plant nickname rather than the record ID.
- Made every “Plant photos to capture” item actionable. It now opens the relevant personal plant record with the requested caption prefilled; when several matching plants exist, the user chooses one.
- Enhanced the same-species “My Garden” list on each general plant page with personal thumbnails and location/variety details.
- Updated visible pilot labels to V0.22.

## Compatibility
Existing V21 browser records continue to use the same localStorage keys and data format.

---

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

## Round 4: Gladiolus, library expansion, bug fixes, and layout fixes

**Bug diagnosis first.** Your screenshots showed "undefined: undefined" in Common
Problems, and Lavender's companions were Rosemary/Thyme/Sage rather than what I'd
written (Rose/Rosemary/Thyme/Salvia). That's because `plant.html`/`icons.js` had been
re-uploaded (you can see "Pollinator friendly" and the generic artwork), but
**`plants.json` hadn't been** — the site was running new code against old data. I've
also made `plant.html` defensive against this: it now recognises several common key
name variants (`fix`/`solution`/`remedy`, `name`/`issue`/`problem`) and plain-string
problem entries, so a data/code mismatch degrades gracefully instead of showing
"undefined." But you should still re-upload `plants.json` along with everything else
in this round — the fixes below live in that file.

**Gladiolus** — added properly (`GK-GLA-001`), full schema, so the previously broken
README test link now works.

**Old Begonia** — there wasn't one in `plants.json` to remove (it only ever existed in
the orphaned `plants-2.json`, which nothing live reads). If you've since created a new
Begonia entry through `admin.html` in your browser, export it and send it over and
I'll fold it in properly — I didn't want to guess and create a conflicting duplicate.
Recommend deleting `plants-2.json` from the repo entirely at this point to avoid
confusion.

**Library expansion — 47 plants now** (was 13), covering all four categories you
asked for:
- Outdoor (12 new): Gladiolus, Tulip, Sunflower, Marigold, Nasturtium, Clematis,
  Camellia, Rhododendron, Crocosmia, Nepeta, Astilbe
- Indoor houseplants (8 new): Peace Lily, Snake Plant, Monstera, Pothos, Spider Plant,
  Aloe Vera, ZZ Plant, Orchid
- Succulents (5 new): Echeveria, Sedum, Haworthia, Jade Plant, Aeonium
- Vegetables & herbs (10 new): Tomato, Onion, Runner Bean, Pea, Cucumber, Basil, Mint,
  Rosemary, Thyme, Sage

Every new entry has real, plant-specific data in every field you flagged as missing —
soil mix, propagation method and timing, a named pollinator type where relevant (bees,
hoverflies, moths, bumblebees specifically, not just "pollinators"), 2 genuine common
problems with fixes, and a real weekly fact. Nothing generic or templated.

**On "just add the top 100":** honestly, 47 is as far as I'd go in one batch and still
guarantee every entry is accurate rather than generic filler — which was the exact
problem you flagged with the original 6. I'd rather hand you a smaller set that's
genuinely solid than pad it to 100 with weaker entries. This set already covers a wide
spread of common outdoor, indoor, succulent and veg plants, so it should catch most
testers. Send me a list of specific plants if you want to target the set at what your
actual testers are likely to have, and I'll keep adding in batches — that'll get you to
100 faster and more usefully than me guessing at the next 53.

**Photo hosting decision — stay with SVGs for now.** Added `PHOTO_WANTLIST.md`, which
explains the tradeoffs (repo-folder vs. hosted service) and gives you a per-plant
checklist matching each plant's `photoPlan` shot list, so nothing needs deciding until
you're ready.

**Tester guide.** Added `TESTER_GUIDE.md` — short, plain steps for using `create.html`.
My take on your either/or question: keep both. The guide costs nothing to hand a
tester and answers the obvious "how do I add a plant" question without you needing to
explain it every time, but the underlying flow still funnels to you for review before
anything joins the shared library, which matches the "official database, admin
reviewed" principle from the original project doc. If a tester would rather just tell
you directly, that's fine too — the guide says so.

**Pot and seedling field overlap — root cause found.** Both pages were missing a
global `box-sizing: border-box` reset, so input/select padding was adding on top of
the grid column width instead of being included in it — that's what caused the
overlapping, misaligned fields in your screenshot. Fixed in both files, along with
consistent input/select height and a custom dropdown arrow so selects and date fields
line up. Also shortened the auto-generated tray ID format so it no longer overflows
its field.

**Save / Export / Import — now explained in the page itself**, not just here: both
`pot.html` and `seedling.html` have a short info box above the buttons. Quick version:
- **Save to this browser** — keeps the data on this device/browser only.
- **Export JSON** — downloads a backup file, or a way to move data to another device.
- **Import JSON** — loads a previously exported file back in.

## Round 5 — V16

**Overlap bugs — found the same missing `box-sizing: border-box` reset in `admin.html`**
that caused the pot/seedling issue last round. Fixed. Also fixed the Tray ID field
specifically: it was using a CSS attribute selector (`input[value^="..."]`) to shrink
long IDs, which only matches the HTML attribute at page load and never updates when
JavaScript changes the value afterward — so it silently never worked. Replaced with a
proper class plus `text-overflow: ellipsis`, so it's now robust regardless of how long
an ID is, including old long-format IDs already saved in someone's browser from before.

**Recommended vs. your own care, in `create.html`.** Implemented both, clearly
separated: as soon as a tester types a plant name that matches something already in
the library, a "Recommended care (from the GardenKey library)" panel appears showing
the general guidance. Below that, the form is now explicitly labelled "Your own
observations" for what the tester is actually doing for their specific plant. Both go
into the draft, so you see general advice and the tester's real-world variation
side by side.

**Can testers' emailed drafts just come to you for me to turn into an entry?** Yes —
you don't need to manually retype anything through `admin.html`'s form if you'd rather
not. Paste the email body (it's JSON) into a chat with me and I'll build the full,
properly-detailed entry the same way I've been doing for the batches in this repo, and
hand you an updated `plants.json`. `admin.html`'s "paste draft" prefill box is there
as a self-serve option if you want to do it yourself without me, but it only fills in
the handful of fields a tester provides — you'd still be writing the fuller entry
(seasonal actions, propagation, problems, etc.) by hand from there. Sending it to me is
genuinely the faster path if you want full entries like the ones already in the file.

**ID/variety scheme — clarifying the design, since this affects how you plan ahead:**
Right now, one ID (`GK-XXX-001`) represents one *species or clearly distinct variety*
in the shared knowledge base — e.g. all English lavender shares `GK-LAV-001`, because
the care information is genuinely the same regardless of whose garden it's in. The
`variety` field notes a specific cultivar name, but doesn't get its own ID unless its
care differs meaningfully from the base entry (e.g. a rose variety with real, distinct
pruning needs might become `GK-ROS-002`).
What does **not** get a new database ID: an individual physical plant a tester owns
("my particular rose in the back garden"). That's a different kind of record — a
specific instance, not a species — and it's exactly what `pot.html`'s plant list (or a
future single-plant version of it) is for: personal notes, position, status, tied back
to the shared species entry rather than duplicating it. Keeping this separation is
what stops the database from bloating into near-duplicate entries as more testers join.
If this doesn't match what you had in mind, tell me how you're picturing it and I'll
adjust the scheme before it's baked into more entries.

**Admin access — added a lightweight gate.** `admin.html` now asks for a passphrase
before showing anything, and the public "Admin builder" link has been removed from
`index.html` so it's no longer advertised to testers. Being direct about what this
actually is: it's a basic deterrent, not real security — the passphrase lives in the
page's own JavaScript, so anyone who viewed the page source could find it. It stops a
tester from casually wandering into the admin tools, which is the realistic threat
here; genuine access control would need a real backend and login system, which is a
bigger step than this project needs yet. Change the passphrase (`GATE_PASSPHRASE` near
the top of the `<script>` in `admin.html`) to something only you know before sharing
the site link further.

**Secateurs icon, bold/weight fixes.** Replaced the scissors emoji with a small SVG
secateurs icon (no emoji secateurs exist in Unicode, so this is custom-drawn). Care
card headers (Water/Light/Feeding/Pruning) stay bold; the instruction text underneath
is now regular weight, not bold, matching your note. Seasonal action headers
(Spring/Summer/Autumn/Winter) were already bold with normal-weight text underneath —
no change needed there.

**"Pollinator friendly" → "Pollinator info."**

**Weekly facts now actually rotate weekly.** Previously "Weekly fact" was a single
fixed sentence that never changed, and two of the original entries (Canna, Dahlia)
still had generic placeholder text ("X is included in the GardenKey pilot set...")
left over from the very first version rather than a real fact — fixed both. Every
plant in the library now has two real, distinct facts, and the page picks one based on
the actual ISO week number, so it genuinely changes week to week without needing a
backend. The mechanism supports any number of facts per plant, so this can keep
growing — just add more strings to a plant's `weeklyFacts` array in `plants.json`.

**10 more plants added — 57 total now.** Foxglove, Hardy Geranium, Viburnum, Boxwood,
Strawberry, Beetroot, Kale, Chives, Coriander, Chilli Pepper — filling some real gaps
(a genuinely great pollinator perennial in Foxglove and Hardy Geranium, a classic
hedging shrub in Boxwood, more of the herb/veg patch in Chives/Coriander/Chilli). Same
standard as the last batch: full plant-specific data in every field, two real facts
each, no templated filler.

**Removed the Nuala/Ardan Gardens reference** from `seedling.html`'s intro text, now
generic.

**Save / Export / Import — reinforced.** This was already explained in-app last round;
if that wasn't visible yet it's because the files hadn't been re-uploaded. It's now
also explained in `admin.html`'s export section specifically, since that one works
slightly differently — a reminder there that "Download plants.json" is a one-time
snapshot to your device, not a live save, and you still need to upload that file to
GitHub yourself for it to go live. Quick recap of all three, everywhere they appear:
- **Save to this browser** — keeps data on this device/browser only.
- **Export JSON / Download** — downloads a file, for backup or moving between devices.
- **Import JSON** — loads a previously exported file back in.

## Round 6 — V17

**Pruning icon back to scissors** — the secateurs SVG from last round rendered too
small and unclear at icon size; reverted to the scissors emoji.

**Darker headers.** Water/Light/Feeding/Pruning and Spring/Summer/Autumn/Winter
labels were a pale grey that was hard to read against the cream background — now a
solid dark green matching the rest of the page's text.

**"Best timing" → "Best time"** in the Propagation section.

**Weekly fact note reworded** to "These facts rotate weekly — check back next week
for more."

**17 more plants — 74 total now.** 15 annuals (Cosmos, Zinnia, Calendula, Sweet Pea,
Petunia, Lobelia, Sweet Alyssum, Snapdragon, Verbena bonariensis, Cleome, Ageratum,
Stock, Cornflower, Poppy, Pansy) plus two named cultivars: Pieris 'Little Heath' and
Tradescantia 'Purple Heart'. The two cultivars got their own IDs (`GK-PIE-001`,
`GK-TRA-001`) rather than folding into a generic species entry, consistent with the
ID scheme from last round — a named cultivar gets its own entry when its care or
appearance is genuinely distinct from the base species, which both of these are.

**Home screen tiles no longer turn purple after visiting.** That was the browser's
default `:visited` link colour showing through — added `a, a:visited { color: inherit
}` across every page, not just `index.html`, since the same issue could show up
anywhere a styled tile or card is also a link.

**Common names added** where the display name is more scientific than familiar:
Nepeta → Catmint, Crocosmia → Montbretia, Astilbe → False Goat's Beard. Shows in the
plant page heading and the library list, and is now included in name search too.
Flag any others you spot and I'll add them — I didn't try to guess at all 74.

**Succulent and Vegetable icons redesigned.** The old succulent icon (two overlapping
teardrops) and vegetable icon (a circle with a leaf) didn't read clearly at a glance.
Succulent is now a six-point rosette shape; Vegetable is now a root-with-leafy-top
shape (carrot-like), both closer to what people actually picture for those categories.

**Removed duplicate words from tags.** Many entries had their own category name
repeated as the first tag (e.g. Thyme showing "Herb" in both the category line and
again as the first tag chip) — stripped any tag that exactly duplicated a plant's
category, across all 74 entries.

**Added a Biennial category.** Foxglove was tagged "Biennial" but categorised as
"Perennial" — fixed the category, and gave Biennial its own icon (a two-year growth
spiral) rather than falling back to the generic Perennial one.

**"Succulent planter" renamed to "Your Bed, Border & Pot Tracker."** The page heading
is now a fixed product name with the new intro copy you asked for. The pot's own name
still updates the page — that behaviour is intentional and useful, so I kept it, but
it now shows as a "Currently editing: [name]" line under the fixed heading instead of
replacing it outright, and there's a note directly under the Pot Name field explaining
that it drives this. Hopefully that's the balance you were after; say if you'd rather
it fully replace the heading again.

**Pot fields are examples only now, not pre-filled data.** The succulent planter
starter data (Echeveria, Sedum, dormant tulip bulbs) previously loaded as real,
already-typed values the first time you opened `?id=GK-POT-SUC-001`. That's gone —
every field starts genuinely blank, with placeholder text (the pale example hint that
disappears the moment you click in and type) doing the guidance work instead. The
empty plant list now shows an example format as muted hint text rather than real rows.

## Round 7 — V18

**Underline under the home-screen picture** — fixed. Added an explicit
`text-decoration:none` on the icon and its container (`.plant, .plant *`), plus
`display:block` on the SVG itself, since inline SVGs can pick up a baseline-related
line artifact inside a link even when the parent has `text-decoration:none`.

**Long plant names overflowing their box** — the list row was a flex container where
the text side had no `min-width:0`, so flexbox let long unbroken text push past the
card edge instead of wrapping. Fixed with `min-width:0` and `overflow-wrap:break-word`
on the name.

**Removed "(Optional)"** after Feeding note in `create.html`.

**Fixed the keyboard-dismissing bug in Plant Name (pot.html).** Found it: every
keystroke in that field was re-rendering the entire plant list (to keep the
library-match icon live), which destroys and recreates the input mid-type — that's
what was closing the keyboard. Now it only re-renders (to update the match icon/link)
when you leave the field, not on every character, so typing stays uninterrupted.

**Removed the Pot Name example placeholder** — that field now starts genuinely empty
with no hint text, per your note.

**"Remove" button no longer sits on the card border.** It was floated with no
clearance from the container edge. Rewrote that row as a proper flex layout with
spacing, which fixes the overlap structurally rather than just nudging it with margin.

**15 more plants — 89 total now.** 6 bulbs (Daffodil, Snowdrop, Ornamental Allium,
Hyacinth, Crocus, Bluebell), 5 shrubs (Hebe, Weigela, Forsythia, Lilac, Choisya), 4
trees (Silver Birch, Apple Tree, Magnolia, Rowan). Same standard as every batch so
far — full plant-specific data throughout, no filler.

## Round 8 — V19

**"Companion ideas" → "Companion plant ideas."**

**The underline bug, actually fixed this time.** Previous rounds patched the plant-list
thumbnails, but the real cause was the *top grid tiles* on the home screen (Plant
library, Pot tracker, Seedling mode, Quick guide) — those `<a class="card">` links
never had `text-decoration:none` set at all, so the browser's default underline was
rendering under every line of text inside them, including the emoji, which is exactly
the "line under the picture" you were seeing. Added it now, plus a defensive
`.card *{text-decoration:none}` so nothing inside can bring it back.

**Pot Tracker heading simplified.** Removed the dynamic "Currently editing: [name]"
subtitle and the "this becomes the heading" helper text — the heading is now always
just "Your Bed, Border & Pot Tracker," full stop. Saving still works exactly as
before (Pot Name was always being saved correctly under the hood; the confusion was
about the heading text, not the save itself).

**"Saved on this device" now shows Pot Name, not Pot ID, in a column.** Each saved pot
now stores its name alongside its ID, and the list renders one per line instead of a
row of pills. Pots saved before this update will show their ID until you save them
again (there was no name stored against them yet to display) — nothing is lost, just
a one-time relabel next time you hit Save.

**"Annual" (and other category words) showing twice — root cause found.** The
tag-deduplication fix from a few rounds ago only ran once, against the data at the
time. Every plant added in the two batches since (30 plants total) never got that
pass applied, so they still had their own category name duplicated as a tag. Re-ran
the dedup across the full, current library — this needs to become something I do at
the end of every batch that adds plants, not a one-off fix, so I'll keep doing that
going forward.

**`create.html`'s Plant Group dropdown**: added plain "Perennial" and "Biennial",
removed "Mixed pot / border" (a tester creating a single plant draft doesn't need a
whole-container category — that's what the Pot Tracker is for).

**Tester draft email is now human-readable.** It previously sent a raw JSON dump,
which is unreadable at a glance. It now sends a plain-language summary (plant name,
group, variety, location, then a clearly labelled "tester's own observations"
section) with the raw JSON kept at the bottom under a marker, purely so `admin.html`'s
"paste draft" box can still find and parse it automatically — updated that parser to
look for the marker and extract the JSON from underneath it, so both the readable
email and the plain "Copy draft" button still work with it.

**Added the line you asked for** after "add it as an approved entry": "Dave will then
let you know once it's been added to the database."

**15 more plants — 104 total now.** 5 perennials (Peony, Delphinium, Lupin, Phlox,
Rudbeckia), 5 shrubs (Potentilla, Spiraea, Cotoneaster, Deutzia, Escallonia), 5 trees
(Amelanchier, Crab Apple, Holly, Flowering Cherry, Yew) — full detail throughout, no
filler, tag-deduped along with everything else in this round.
# GardenKey V21.1 — overall updates

This is the general-purpose update: bug fixes, polish, and library growth. It does
**not** include the new personal "My Garden" plant-tracking feature — that's a
separate, bigger piece shipped as V21.2, which builds directly on top of this version.
You can deploy this on its own and everything will work exactly as before, just fixed
and expanded.

## Seedling / nursery mode
Added three more status options to match how propagation actually happens, not just
seed-grown trays: **Fresh Cutting**, **Division**, **Basal Cutting**, sitting alongside
Sown near the top of the list, each with its own status badge colour.

## Site-wide "e.g." placeholder convention
Went through every input field across every page and made sure example text
consistently starts with "e.g." and disappears the moment you click in and type (this
is native placeholder-text behaviour, so it was already true wherever placeholders
existed — the gap was pages missing a placeholder at all). Fixed in:
- `admin.html` — every field in the plant builder now has a real example (Variety,
  Theme colour, Subtitle, Tags, Quick care, Soil, Seasonal jobs, Propagation, Pollinator
  score/note, Gallery captions, Companions, Problems, Weekly fact). Previously about
  half of these were just empty boxes with no guidance at all.
- `seedling.html` — Tray/batch name, Plant/variety and Notes now have examples.
- `pot.html` — Plant name, Position in pot and Notes (within "Plants in this pot") now
  have examples. Pot Name itself is deliberately left without a placeholder, per your
  earlier instruction to remove that one specifically.
- Also fixed the leftover "Best timing" label in `admin.html`'s form to match the
  "Best time" wording already used on the live plant pages.

## `create.html`
Plant Group dropdown is now in alphabetical order.

## `pot.html`
- The "Loaded [id] from this device" message is now "Currently loaded below: [name]",
  on its own line rather than squeezed next to the buttons.
- Added a second button, **New bed/border**, alongside New pot — same blank-profile
  behaviour, but generates a `GK-BED-` prefixed ID and uses "bed/border" in its status
  messages instead of "pot", so the two are distinguishable in your saved list and
  exports.

## Plant library — 15 more plants, 119 total now
5 bulbs (a second Dahlia-from-tuber entry for propagation tracking, Snake's Head
Fritillary, Camassia, Nerine, Anemone), 5 succulents (Kalanchoe, Living Stones,
String of Pearls, Burro's Tail, String of Hearts), 5 houseplants (Calathea,
Philodendron, Dracaena, Rex Begonia, Fiddle Leaf Fig). Same standard as every batch —
full plant-specific detail, tag-deduplicated against the rest of the library.

Note: the second Dahlia entry (`GK-DAH2-001`, "Dahlia (from tuber)") is deliberate,
not a duplicate — it exists so a tuber going into a pot or tray can be tracked
distinctly from the mature in-ground plant at `GK-DAH-001`, following the same
"separate ID when the situation is genuinely different" rule as the named cultivars
from a couple of rounds ago.

## Round 9 — V21.2: My Garden (personal plant tracking)

Builds directly on top of V21.1 — includes everything from that version plus this new
feature. Deploy this instead of V21.1 once you're ready to test personal plant
tracking; don't need to deploy both.

### The model, per your review
This follows the structure you laid out, with the two adjustments we agreed:
privacy/browser-only storage stays as-is for now (revisit later if it becomes a real
limitation), and personal photos are now real, stored images rather than another
placeholder-and-caption checklist — more on that below.

- **`plant.html`** (`GK-LAV-001` etc.) stays exactly what it was: curated, read-only
  reference information. Nothing new here changes how the species pages work.
- **`myplant.html`** (`USR-...` IDs) is the new personal record — one specific plant
  you own. Nickname, linked species, variety, source, date acquired, location, last
  repotted/divided, flowering history, health observations, propagation history, and
  photos. Someone can own three different lavenders in three different spots and each
  gets its own record, all linking back to the same `GK-LAV-001` guide.
- **`myplants.html`** is the new "My Plants" library — every personal record on this
  device, searchable by nickname, each showing its linked species (or "not yet linked"
  if the name didn't match anything) and its first photo if it has one.

### How the two-way linking works
- On `myplant.html`, type the plant's name in "Based on" and it matches against the
  live library the same way companion plants already do elsewhere in the app — no new
  UI pattern to learn. A match shows the species card with a link to its care guide.
- On `plant.html`, every species page now has a **My Garden** card: if you already
  have linked personal plants, it lists them; either way there's an "+ Add to My
  Garden" button. This creates the record immediately with the species name prefilled
  and takes you straight to it — no form to fill in before it exists, matching how
  "New pot" already works.

### Home screen restructured
Split into **Plant Library** (Browse plants, Quick guide — curated, read-only) and
**My Garden** (My Plants, My Pots & Borders, My Seedlings — personal, editable),
matching the structure from your proposal.

### `pot.html` — one small integration
Each plant row in a pot/border profile now has a "Track as a full My Plants record →"
link, so a quick inline entry (fine for "there's some trailing sedum, not worth its
own record") can be promoted to a full record when it's worth the detail — optional,
not mandatory, per the plan.

### On personal photos — this was the trigger to revisit image hosting, as agreed
Rather than add a paid or third-party image hosting service at pilot stage, photos on
`myplant.html` are captured directly from the device, automatically resized down
(max 800px) and compressed client-side, then stored as part of the record — same
browser-only storage as everything else here, no new account or service for you to
set up. This is a genuine, working photo feature (take a photo, see it on the page),
not another placeholder checklist. The honest tradeoff: photos live in the JSON record
itself, so **Export files for a plant with several photos will be noticeably larger**
than the text-only exports elsewhere in the app. Worth knowing before encouraging
testers to add many high-detail photos to one record. The species-page photo question
(real photos for the shared library) is unchanged and still tracked in
`PHOTO_WANTLIST.md` — that's a different problem (photos need to be visible to
everyone, not just one device) and still needs a real hosting decision later.

### Data model, for reference
```
gk_myplant_index          → [{id, nickname, plantLibraryId}, ...]
gk_myplant_<id>            → {id, nickname, plantLibraryId, libraryName, variety,
                               source, dateAcquired, location, lastRepotted,
                               lastDivided, floweringHistory, healthObservations,
                               propagationHistory, photos: [{caption, dataUrl}]}
```
`plantLibraryId` is resolved automatically from the typed species name at save time —
there's no manual ID entry needed anywhere in this flow.

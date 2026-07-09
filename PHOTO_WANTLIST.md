# GardenKey — Photo Wanted List

## Why this exists
Every plant currently uses generic category artwork (via `icons.js`) instead of a real
photo — there's no image hosting set up yet, and that's the right call for now (see
"Should we set up image hosting yet?" below). This file is the backlog so real photos
can be added plant-by-plant later without losing track of what's needed.

## How to add a real photo once you have one
1. Host the image somewhere with a direct URL (see options below).
2. In `admin.html`, open the plant and paste the URL into **Hero image URL**.
3. That's it — the page automatically uses the real photo instead of the generic
   artwork the moment `heroImage` is set. No other code changes needed.

Each plant's `photoPlan` field in `plants.json` already lists exactly which shots are
wanted (hero, close-up, foliage, winter appearance, etc.) — use that as your shot list
when you're out taking photos.

## Should we set up image hosting yet?
Not yet, and here's the actual tradeoff:
- **Now (SVGs):** zero setup, zero cost, works instantly on GitHub Pages, and every
  plant already looks distinct instead of a flat colour block.
- **Real photos, simplest option:** add an `/images` folder to this same GitHub repo
  and commit photos into it — `heroImage` becomes a relative path like
  `images/lavender.jpg`. No new account or service needed, but repo size grows and
  large images should be compressed first (aim under ~300KB each).
- **Real photos, hosted option:** a free tier on something like Cloudinary or
  Imgur gives you a stable URL without bloating the git repo, and Cloudinary in
  particular can auto-resize/compress on the fly. More setup, but scales better once
  you're at real volume with tester-submitted photos.
- **Recommendation:** stay with SVGs through the current testing phase. Revisit this
  once you're validating with real testers and know whether photos will mostly come
  from you (→ repo folder is fine) or from testers uploading their own (→ worth a
  proper hosting service, since GitHub Pages/repo commits aren't a practical way for
  testers to add their own images).

## Priority order (most-tested plants first)
Rough suggestion — prioritise whichever plants your first testers are actually likely
to scan, rather than working through the full list top to bottom.

### High priority — likely first tester plants
- [ ] Lavender (GK-LAV-001)
- [ ] Tomato (GK-TOM-001)
- [ ] Rose (GK-ROS-001)
- [ ] Hosta (GK-HOS-001)
- [ ] Echeveria (GK-ECV-001) — succulent planter test case

### Outdoor
- [ ] Canna · [ ] Dahlia · [ ] Fern · [ ] Hydrangea · [ ] Japanese Maple · [ ] Salvia
- [ ] Gladiolus · [ ] Tulip · [ ] Sunflower · [ ] Marigold · [ ] Nasturtium
- [ ] Clematis · [ ] Camellia · [ ] Rhododendron · [ ] Crocosmia · [ ] Nepeta · [ ] Astilbe

### Vegetables & herbs
- [ ] Carrot · [ ] Courgette · [ ] Lettuce · [ ] Potato
- [ ] Onion · [ ] Runner Bean · [ ] Pea · [ ] Cucumber
- [ ] Basil · [ ] Mint · [ ] Rosemary · [ ] Thyme · [ ] Sage

### Indoor houseplants
- [ ] Peace Lily · [ ] Snake Plant · [ ] Monstera · [ ] Pothos
- [ ] Spider Plant · [ ] Aloe Vera · [ ] ZZ Plant · [ ] Orchid

### Succulents
- [ ] Sedum · [ ] Haworthia · [ ] Jade Plant · [ ] Aeonium

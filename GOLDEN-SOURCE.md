# GardenKey Golden Source

**Baseline:** PILOT V30  
**Established:** 6 August 2026

This folder is the authoritative source for future GardenKey pilot releases.

## Release rules
1. Start every new version from this complete folder.
2. Add new generic plant profiles directly to `plants.json`.
3. Add tester observations separately to `personal-drafts.json`.
4. Link personal records with `plantLibraryId`; never place private observations in `plants.json`.
5. Update every visible PILOT version label together.
6. Deliver one full repository ZIP for direct replacement in GitHub.

## V30 cleanup
- Consolidated Parahebe into the main `plants.json`.
- Removed `plants-V29.3-addition.json`; it is no longer needed.
- Removed duplicate `plants-2.json`.
- Removed broken legacy static pages `fern.html`, `lavender.html`, and `tomato.html`.
- Removed unused `styles.css`, which was referenced only by those legacy pages.
- Removed historical upload notes, superseded review notes, old Codex prompts and duplicate changelogs.
- Standardised current pages to PILOT V30.
- Corrected the plant profile label previously showing PILOT V0.28.
- Added missing tester IDs to current personal drafts where the tester identity was known.
- Corrected Anne to Ann Campbell in the current tester record.

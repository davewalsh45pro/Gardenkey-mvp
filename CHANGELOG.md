# GardenKey Changelog

## PILOT V30.0.0 — Golden Source

### Corrected
- Replaced the hard-coded `PILOT V0.28` label in `plant.html`.
- Standardised all live page labels to `PILOT V30.0.0`.
- Standardised draft cache-busting references to `v=30000`.

### Consolidated
- Confirmed Parahebe (`GK-PAR-001`) is contained directly in `plants.json`.
- Confirmed Eimear Cremen's Parahebe 'Avalanche' record remains tester-specific and linked through `plantLibraryId`.
- Confirmed the tester submission form requires a plant/species name.

### Repository cleanup
- Removed obsolete static plant pages and their unused stylesheet.
- Removed duplicate and incremental plant JSON files from the production source.
- Preserved historical notes under `docs/archive/`.
- Established this package as the golden source for all future releases.

# GardenKey Golden Source

**Current baseline: PILOT V30.0.13**

This package is the complete recovery baseline for the current GardenKey pilot: the active repository root plus the unchanged historical `docs/archive` set.

## V30.0.13 additions
- prominent save confirmation in My Plant and Border
- unsaved-change warning in My Plant and Border
- personal Pruning routine field in My Plant, backward-compatible with existing records
- collapse/expand controls on major My Plant and Border sections
- tester wording rule: correct obvious spelling mistakes only; otherwise preserve tester wording

## Data safety
- no existing personal record IDs renamed or migrated
- no existing localStorage key names changed
- no tester records, plant-library records, user-plants or personal drafts changed for this UX release
- no existing photo arrays migrated or rewritten

## Historical archive
The 20 files in `docs/archive` are byte-for-byte the historical files carried by V30.0.12. They are retained for development history only and are not live application code.

## Release discipline
For future V30.0.x releases, update `version.js` once for the release label/cache token and use `gkVersion()` / `gkCache()` throughout active pages. Do not add hard-coded release numbers back into individual HTML files.

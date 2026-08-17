# GardenKey Golden Source

**Current baseline: PILOT V30.0.11**

This package is the complete recovery baseline for the current GardenKey pilot.

## V30.0.11 additions
- per-prompt personal photo capture and captured-state checklist
- resilient feedback workflow with local recovery history
- central `version.js` release/cache configuration

## Release discipline
For future V30.0.x releases, update `version.js` once for the release label/cache token and use `gkVersion()` / `gkCache()` throughout active pages. Do not add hard-coded release numbers back into individual HTML files.

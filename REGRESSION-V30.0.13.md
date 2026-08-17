# GardenKey V30.0.13 regression gate

## Required code gates — PASS
- `myplant.html` contains `personalPruning`, save toast, dirty-state tracking, `beforeunload`, and collapsible sections.
- `border.html` contains save toast, dirty-state tracking, `beforeunload`, and collapsible sections.
- `plant.html` defines the previously missing `addSpeciesToPot` compatibility route.
- `version.js` is V30.0.13 / cache 30013.
- Existing localStorage key strings remain `gk_myplant_`, `gk_myplant_index`, `gk_border_`, `gk_border_index`.
- Data JSON files parse successfully and are byte-for-byte unchanged from the V30.0.12 supplied baseline.

## Live checks still required
Browser-native storage and navigation behaviour must still be checked once GitHub Pages deploys; see `UPLOAD-FIRST.md`.

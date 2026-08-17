# GardenKey PILOT V30.0.13

V30.0.13 is a tester-feedback UX release built directly on the V30.0.12 data baseline.

## What changed
- Clear save toasts and save-error feedback in My Plant and Border.
- Unsaved-change warnings before leaving edited My Plant/Border records.
- Personal Pruning routine field in My Plant.
- Collapsible My Plant and Border sections to reduce scrolling.
- Fixed general plant-profile Add to pot / border action.

## Data safety
No existing localStorage key names, record IDs, tester records, photos, `plants.json`, `personal-drafts.json`, `testers.json` or `user-plants.json` are migrated or renamed. Old records simply load the new pruning field as blank until the gardener uses it.

## Deployment
Upload/replace the root files from the GitHub-upload ZIP. The historical `docs/` archive is unchanged.

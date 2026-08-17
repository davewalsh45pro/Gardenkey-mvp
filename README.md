# GardenKey PILOT V30.0.13

V30.0.13 is a focused tester-feedback UX release built on the validated V30.0.12 Golden Source.

## What changed
- My Plant and Border now show a prominent saved confirmation after a successful save.
- My Plant and Border warn before leaving with unsaved changes.
- My Plant has a personal **Pruning routine** field alongside watering and feeding routines.
- Major My Plant and Border sections can be collapsed/expanded to reduce mobile scrolling.
- `version.js` remains the single source of truth for the live PILOT version label and cache token.

## Deliberately deferred
Christine's Border → My Plants flow and plant/border-specific to-do system are recorded as separate feature builds rather than being rushed into this pilot patch.

## Data safety
V30.0.13 does not migrate or rename existing personal-plant localStorage keys, record IDs, tester records or photo arrays. Existing records that do not yet contain `personalPruning` simply show a blank pruning field until the gardener chooses to save one.

## Golden Source
The complete package includes the active repository root and the unchanged 20-file historical `docs/archive` set.

## Deployment
For the smallest safe live update, upload only the materially changed root files listed in `UPLOAD-FIRST.md`. The historical `docs/` archive is unchanged and does not need to be re-uploaded.

# GardenKey Changelog

## PILOT V30.0.13 — Elaine Parahebe tester record
- Added Elaine Fitzmaurice submission `GK-DRAFT-869468` as personal record `USR-ELA-0002`.
- Linked Elaine's Parahebe 'Avalanche' to the existing shared `GK-PAR-001` Parahebe profile; no duplicate generic plant was created.
- Preserved Elaine's submitted location, light, watering, feeding and soil/medium wording as personal observations only.
- Preserved all 20 pre-existing personal-draft records unchanged and retained the existing shared plant library unchanged.
- No existing record IDs, tester identities, localStorage keys, browser photo arrays or previously approved personal data were overwritten or migrated.
- Bumped the single-source release configuration to V30.0.13 / `30013`.

## PILOT V30.0.12 — Eimear shade-border tester records
- Added three unique Eimear Cremen tester submissions: Heuchera 'Forever Purple' (`GK-DRAFT-289457` / `USR-EIM-0007`), Brunnera 'Alexander's Great' (`GK-DRAFT-997201` / `USR-EIM-0008`) and Hosta (unknown cultivar) (`GK-DRAFT-159768` / `USR-EIM-0009`).
- Added shared `GK-HEU-001` Heuchera and `GK-BRU-001` Brunnera profiles; the Hosta record links to existing `GK-HOS-001`.
- Preserved tester-entered observation wording exactly in the personal records, including spelling in soil/medium fields.
- Submission #4 supplied for this update was an exact duplicate of `GK-DRAFT-289457`, so it was not inserted twice.
- No existing personal record IDs, tester records, localStorage keys, photo arrays or prior library entries were overwritten or migrated.
- Bumped the single-source release configuration to V30.0.12 / `30012`.

## PILOT V30.0.11 — Photo checklist, resilient feedback, single-source versioning
- Personal-plant photo prompts now each have their own **+ Add photo** action; the single bottom Add photo control was removed.
- Suggested photo prompts remain in a two-column vertical grid and now show **✓ Captured** when a matching prompted photo already exists. An **Other photo** card preserves free-form photo capture.
- Added `feedback.html` with the same resilient pattern used by tester-plant submissions: local backup before email hand-off, copy fallback, submission history, reopen email, and tester-side “I pressed Send” marking.
- Homepage and generic plant feedback actions now route through the resilient feedback workflow.
- Added `version.js` as the single source for the active release label and cache token. Active HTML pages no longer contain hard-coded V30.0.x labels/cache numbers.
- No personal record IDs, localStorage record keys, tester observations, or existing photo arrays were migrated or changed.

## PILOT V30.0.10 — Photo capture UX

- Added **+ Add photo** actions to the homepage weekly photo prompts.
- Homepage photo actions now open the matching personal plant record; if none exists, GardenKey creates a linked personal record first so photos remain personal rather than being stored on the shared species profile.
- If more than one matching personal plant exists, GardenKey sends the gardener to My Plants to choose the correct individual plant.
- Replaced horizontal scrolling photo prompts in My Plant with a two-column vertical grid so all suggestions are visible by scrolling normally down the page.
- Personal-record storage keys, IDs, observations and existing `photos` arrays are unchanged.
- Bumped live build/cache references to V30.0.10 / `v=30010`.

## PILOT V30.0.10 — Homepage content restoration
- Restored a richer homepage flow using existing `plants.json` data: seasonal jobs, propagation ideas, pollinator spotlight, photo prompts and rotating weekly facts.
- Moved My Garden / personal areas to immediately above Feedback.
- Confirmed V30.0.6 and V30.0.7 had the same slim homepage; this restores content lost earlier in the V30 cleanup rather than reverting the V30.0.7 plant-profile photo-placement change.
- No personal plant records or saved browser photos are changed.


## PILOT V30.0.10 — Eimear Cosmos + plant-photo flow

- Added Eimear Cremen submission `GK-DRAFT-743308` as personal record `USR-EIM-0006`.
- Linked `Cosmos 'Cosmonaut'` to the existing shared `GK-COS-001` Cosmos profile; no duplicate shared plant was created.
- Preserved Eimear's location, light, watering, feeding and soil as tester-specific observations only.
- Moved the shared-profile “Plant photos to capture” checklist to the end of the general plant-information flow, immediately above Feedback.
- Clarified that photo prompts open the gardener's personal plant record and do not alter the shared GardenKey guide.
- Existing personal photos remain stored with their `myplant.html` browser records and are unaffected by the section move.
- Bumped live build/cache references to V30.0.10 / `v=30010`.

## PILOT V30.0.10 — Eimear fern + hellebore tester records

- Added shared `GK-MAT-001` profile for *Matteuccia struthiopteris* (shuttlecock / ostrich fern).
- Added shared `GK-HEL-001` profile for *Helleborus orientalis* (Lenten rose).
- Added `GK-DRAFT-179783` / `USR-EIM-0004` for Eimear's three March 2025 bare-root shuttlecock ferns in the shady border.
- Added `GK-DRAFT-807163` / `USR-EIM-0005` for Eimear's three Helleborus orientalis plants from Bláithín.
- Preserved Eimear's own light, watering, feeding, soil and notes separately from the shared GardenKey care information.
- Normalised taxonomy: Matteuccia is stored under category `Fern`; Helleborus spelling is corrected and `orientalis` is treated as the species name rather than a cultivar.
- Bumped live build/cache references to V30.0.10 / `v=30010`.

## PILOT V30.0.5 — Troy Rudbeckia tester record
- Added Troy Hopkins submission `GK-DRAFT-513924` as `USR-TRO-0003`.
- Linked the personal record to existing shared profile `GK-RUD-001` (Rudbeckia).
- Preserved cultivar `Sunburst Solar` and Troy's location, light, watering, feeding, soil and purchase notes as personal observations.
- No shared Rudbeckia care guidance was overwritten by tester-specific observations.


## PILOT V30.0.4 — Cordyline tester record
- Added Eimear Cremen draft `GK-DRAFT-234231` / personal record `USR-EIM-0003`.
- Added shared `GK-COR-001` Cordyline / *Cordyline australis* profile.
- Linked Eimear’s cultivar ‘Red Star’ and her own location/care observations only to `TST-EIMEAR-003`.
- Preserved Eimear’s existing Hydrangea ‘Limelight’ and Parahebe ‘Avalanche’ personal records.
- Preserved V30.0.3 tester identity persistence and working email-draft handoff.
- Rebuilt as a complete golden-source repository including data JSON, icons and archived documentation.

## PILOT V30.0.3 — Tester workflow reliability

- Persisted tester identity after the first personalised visit.
- Carried tester IDs automatically into Create Tester Plant and My Plants links.
- Added a visible “Submitting as” identity banner before a tester fills the form.
- Added local backup and submission history for tester plant drafts.
- Replaced misleading send behaviour with clear “email prepared — press Send” messaging.
- Added reopen, copy and “I pressed Send” controls for saved submissions.
- Made approved tester-specific plants appear automatically in My Plants when not yet imported.
- Kept tester drafts strictly filtered by tester ID.
- Updated all live build labels and cache references to V30.0.3.

## PILOT V30.0.0 — Golden Source

- Established the complete audited repository baseline.
- Consolidated Parahebe into the shared plant library.
- Preserved personal observations in tester-specific records.

# GardenKey PILOT V30.0.13

V30.0.13 is a data-only tester-record release built on the validated V30.0.12 baseline.

## What changed
- Added Elaine Fitzmaurice's Parahebe 'Avalanche' personal record (`GK-DRAFT-869468` / `USR-ELA-0002`).
- Linked it to the existing shared Parahebe profile `GK-PAR-001`; no duplicate generic plant was created.
- `version.js` remains the single source of truth for the live PILOT version label and cache token.

## Data safety
V30.0.13 does not migrate or rename existing personal plant localStorage keys, record IDs, tester records or photo arrays. All 20 pre-existing personal-draft records and all 139 shared plant-library records are unchanged. Elaine's tester-entered observations are preserved as supplied.

## Deployment
Upload the root files from this release to the GitHub repository root. No documentation/archive folder needs to be re-uploaded for this release.

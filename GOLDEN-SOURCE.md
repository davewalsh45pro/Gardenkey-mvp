# GardenKey Golden Source

**Current baseline: PILOT V30.0.13**

This package is the complete recovery baseline for the current GardenKey pilot.

## V30.0.13 addition
- Elaine Fitzmaurice Parahebe 'Avalanche' personal record `GK-DRAFT-869468` / `USR-ELA-0002`
- linked to existing shared `GK-PAR-001` Parahebe profile
- no new shared plant profile required
- no migration or overwrite of any existing personal records, tester identities or photos

## Release discipline
For future V30.0.x releases, update `version.js` once for the release label/cache token and use `gkVersion()` / `gkCache()` throughout active pages. Do not add hard-coded release numbers back into individual HTML files.

# GardenKey Golden Source

**Current baseline: PILOT V30.0.12**

This package is the complete recovery baseline for the current GardenKey pilot.

## V30.0.12 additions
- three unique Eimear tester plant records (Heuchera, Brunnera and Hosta)
- shared Heuchera and Brunnera library profiles
- duplicate incoming Heuchera draft safely ignored
- no migration or overwrite of existing personal records or photos

## Release discipline
For future V30.0.x releases, update `version.js` once for the release label/cache token and use `gkVersion()` / `gkCache()` throughout active pages. Do not add hard-coded release numbers back into individual HTML files.

# GardenKey PILOT V30.0.12

V30.0.12 is a data-only tester-record release built on the validated V30.0.11 workflow.

## What changed
- Added Eimear's Heuchera 'Forever Purple', Brunnera 'Alexander's Great' and Hosta personal records.
- Added general Heuchera and Brunnera library profiles; Hosta reuses the existing shared Hosta profile.
- The fourth supplied item was an exact duplicate of the Heuchera draft ID and was safely de-duplicated.
- `version.js` remains the single source of truth for the live PILOT version label and cache token.

## Data safety
V30.0.12 does not migrate or rename existing personal plant localStorage keys, record IDs, tester records or photo arrays. Existing saved personal details and photos remain in their established browser records. Tester-entered observations in the new records are preserved as supplied.

## Deployment
Upload the root files from this release to the GitHub repository root. The historical `docs/` archive does not need to be re-uploaded for this release.

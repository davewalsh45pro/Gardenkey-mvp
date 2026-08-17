# GardenKey PILOT V30.0.11

V30.0.11 is a stability-and-UX release built on the validated V30 tester workflow.

## What changed
- Personal photo suggestions now work as a real checklist: each prompt has its own Add photo button and can show ✓ Captured.
- A final Other photo card keeps free-form photo capture available.
- Feedback now uses a resilient local-backup → email hand-off workflow with copy/reopen/history recovery options.
- `version.js` is now the single source of truth for the live PILOT version label and cache token. Future release bumps should be made there rather than editing version strings across multiple pages.

## Data safety
V30.0.11 does not migrate or rename existing personal plant localStorage keys, record IDs, tester records, or photo arrays. Existing saved personal details and photos remain in their established browser records.

## Deployment
Upload the root files from this release to the GitHub repository root. The historical `docs/` archive does not need to be re-uploaded for this release.

# GardenKey PILOT V30.0.0

This repository is the clean production baseline for the GardenKey pilot.

## Live application
The active HTML, JavaScript and JSON files are held in the repository root so GitHub Pages can serve them directly.
 
## Data separation
- `plants.json` contains shared, browsable plant information.
- `personal-drafts.json` contains tester-specific plant records.
- `testers.json` contains tester identities and personalised routing data.
- `user-plants.json` contains the existing user-plant data retained from the prior repository.

## Release rule
All future versions must be built from this complete source and delivered as one replacement ZIP. Do not manually merge plant records into GitHub.

Historical development notes are retained in `docs/archive/`.

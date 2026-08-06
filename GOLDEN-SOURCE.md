# GardenKey Golden Source

**Authoritative baseline:** PILOT V30.0.0  
**Established:** 6 August 2026

This repository is the single source of truth for all future GardenKey pilot updates.

## Required release process
1. Begin with the complete latest golden-source repository.
2. Add shared species information directly to `plants.json`.
3. Add tester-specific records to `personal-drafts.json`.
4. Link personal records to shared records through `plantLibraryId`.
5. Update every visible build label and cache-busting value.
6. Validate all JSON and local page dependencies.
7. issue one complete GitHub-ready replacement ZIP.

No incremental plant-addition JSON file should be required in future releases.

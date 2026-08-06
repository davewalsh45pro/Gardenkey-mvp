# Codex Prompt — GardenKey MVP v2 to v3

You are extending GardenKey, an NFC plant identity prototype.

Current architecture:
- Static GitHub Pages site
- One reusable `plant.html` page
- Plant data stored in `data/plants.json`
- NFC URL format: `plant.html?id=GK-LAV-001`
- Admin page currently edits locally and exports `plants.json`

Next build goals:
1. Improve the admin page so non-technical users can add/edit/delete plant profiles.
2. Add image support for each plant.
3. Add fields for personal notes, watering date, repotting date, source, and owner.
4. Add a plant list/search page.
5. Add validation for GardenKey IDs.
6. Keep the site mobile-first for Android NFC testing.
7. Keep the project deployable on GitHub Pages unless a backend is explicitly added.

Important product strategy:
GardenKey separates Plant Identity from Plant Information.
- Plant Identity: the physical tag and stable ID, e.g. GK-LAV-001.
- Plant Information: the editable plant profile displayed when scanned.

Do not require Notion. Keep the prototype lightweight, free, and easy to test.

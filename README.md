# GardenKey MVP v7 - Dashboard

This version introduces a cleaner GardenKey Dashboard admin experience.

## What's new

- Plant library cards instead of a basic selector
- Search by plant name, ID, Latin name or tag
- Blank Add Plant workflow
- Auto-generated simple IDs such as GK-0001 for new records
- Live preview panel
- Copy NFC URL button
- Sticky save/download controls
- Safer save behaviour to avoid overwriting records
- Local session restore so switching tabs/apps should bring you back closer to where you were

## Publishing workflow

1. Open `admin.html`.
2. Click **+ Add Plant** or select an existing plant.
3. Click **Save to working library**.
4. Click **Download plants.json**.
5. Upload the downloaded `plants.json` to GitHub, replacing the existing one.
6. Test the plant page using `plant.html?id=GK-...`.

## Important NFC rule

Keep the GardenKey ID stable. If the ID stays the same, the NFC tag URL can stay the same while the website design and plant information change.

# GardenKey MVP v4

This version keeps the same NFC URL format:

`plant.html?id=GK-LAV-001`

That means the NFC tag does **not** need to be rewritten when you improve the design or update plant information, as long as the GardenKey ID stays the same.

## Files

- `index.html` — homepage / plant list
- `plant.html` — single reusable plant profile page
- `plants.json` — central plant database
- `admin.html` — improved admin workflow
- `styles.css` — polished mobile-first styling

## Admin workflow

1. Open `admin.html` on the live GitHub Pages site.
2. Choose an existing plant or click New.
3. Edit identity, care cards, seasonal actions and list sections.
4. Click **Save preview**.
5. Click **Download plants.json**.
6. Upload the downloaded `plants.json` to the GitHub repository, replacing the previous one.
7. Wait for GitHub Pages to redeploy.
8. Test the same plant URL again.

## Important

GitHub Pages is free static hosting. A static admin page cannot write directly back to GitHub unless we later add login/API/database functionality. For now, the admin page safely edits in the browser and exports an updated JSON file.

## Permanent NFC approach

Write URLs like this to tags:

`https://davewalsh45pro.github.io/Gardenkey-mvp/plant.html?id=GK-LAV-001`

Do not write `lavender.html` going forward. Keep the ID stable and the tag can keep working through future design updates.

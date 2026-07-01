# GardenKey MVP v2

This version uses a single reusable plant profile page plus a JSON data file.

## Files

- `index.html` — homepage and sample links
- `plant.html` — one reusable plant profile page
- `admin.html` — simple browser-based plant editor
- `data/plants.json` — all plant information
- `assets/styles.css` — design styles

## NFC URL format

Use this format on NFC tags:

```text
https://YOURUSERNAME.github.io/YOUR-REPO/plant.html?id=GK-LAV-001
```

For your current repo this will likely be:

```text
https://davewalsh45pro.github.io/Gardenkey-mvp/plant.html?id=GK-LAV-001
```

## How to publish

Upload all files and folders to your existing GitHub repository. Keep `data/plants.json` inside the `data` folder.

## Admin limitation

Because GitHub Pages is static and free, the admin page cannot save directly to GitHub by itself. It saves changes in your browser for preview, then lets you download an updated `plants.json` file. You then upload that JSON file to GitHub.

A later v3 could use Firebase, Supabase, Airtable, or GitHub API login to save changes online.

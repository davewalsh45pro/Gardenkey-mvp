# GardenKey MVP

A free, static, GitHub Pages-ready MVP for testing GardenKey NFC plant profiles.

## What this is
This is a simple website where each plant has its own URL. You can write those URLs to NFC tags and test the GardenKey experience without needing Notion, an app, or a paid domain.

## File Structure

```text
gardenkey-mvp/
├── index.html
├── assets/
│   └── styles.css
├── plants/
│   ├── lavender.html
│   ├── tomato.html
│   └── fern.html
├── PLANT_PROFILE_STRUCTURE.md
├── CODEX_PROMPT.md
└── README.md
```

## Free GitHub Pages Setup

1. Create a free GitHub account if you do not already have one.
2. Create a new public repository called `gardenkey-mvp`.
3. Upload all files from this folder.
4. Go to repository `Settings`.
5. Open `Pages`.
6. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
7. Save.
8. GitHub will give you a free website URL.

Example:

```text
https://yourusername.github.io/gardenkey-mvp/
```

## NFC Testing

Use an Android NFC writing app and write one plant page URL to a test tag.

Example URLs after deployment:

```text
https://yourusername.github.io/gardenkey-mvp/plants/lavender.html
https://yourusername.github.io/gardenkey-mvp/plants/tomato.html
https://yourusername.github.io/gardenkey-mvp/plants/fern.html
```

## Recommended MVP Test Questions

Ask testers:

1. Did the tag open quickly?
2. Did the page make sense immediately?
3. Was the care information useful?
4. What information was missing?
5. Would you use this on your own plants?
6. Would a physical GardenKey tag feel more useful than a normal plant label?

## Next Improvements

- Add plant photos.
- Add QR codes as backup for non-NFC users.
- Add editable notes using localStorage.
- Add a simple admin form.
- Move to a custom domain later.

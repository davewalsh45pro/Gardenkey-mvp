# Codex Prompt — GardenKey MVP Website

Build a complete static GardenKey MVP website that can be hosted for free on GitHub Pages.

## Project Goal
Create a lightweight, mobile-first plant profile website for NFC tag testing. Each NFC tag will open a unique URL for a plant profile. No login, backend, payment system, or app is required for this MVP.

## Tech Requirements
- Plain HTML, CSS and JavaScript only.
- No build tools.
- No paid services.
- Must work on GitHub Pages.
- Mobile-first design.
- Fast loading on Android phones.
- Clean folder structure.

## Required Pages
1. Home page listing all sample plants.
2. Individual plant profile pages for:
   - Lavender
   - Tomato
   - Fern
   - Optional: Rose, Hosta, Strawberry
3. A reusable plant profile template page.
4. A README with GitHub Pages deployment instructions.

## Plant Profile Fields
Each plant page should include:
- GardenKey ID
- Common name
- Latin name
- Plant type
- Light requirement
- Watering requirement
- Feeding requirement
- Soil preference
- Pruning / care action
- Seasonal care checklist
- Personal log section
- Troubleshooting section
- Notes section
- Back to home link

## Design Direction
- Natural, sustainable, garden-centre feel.
- Clean cream/green palette.
- Rounded cards.
- Large readable text.
- Must look good on a phone immediately after tapping NFC.

## NFC Testing Requirement
Make URLs simple and stable, for example:
- /plants/lavender.html
- /plants/tomato.html
- /plants/fern.html

## Optional JavaScript Feature
Add local-only editable notes using localStorage so the user can type notes into a plant page and have them saved on that phone. Make it clear this is local to the device only.

## Output
Return the full file structure and all file contents. Include deployment instructions for GitHub Pages and Android NFC writing steps.

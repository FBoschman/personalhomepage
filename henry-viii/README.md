# The Making of a Kingdom

An interactive atlas and timeline of Henry VIII's reign, 1509–1547, built with
Next.js, React, TypeScript and Tailwind CSS.

The page follows the English crown's possessions year by year: the union with
Wales in 1536, the creation of the Kingdom of Ireland in 1541, the brief
occupations of Tournai and Boulogne, and the Pale of Calais.

## Features

- **Interactive political map** of Britain, Ireland and the near continent,
  drawn from real boundary data and projected at build time.
- **Year scrubber and playback** from 1509 to 1547, with event markers at every
  key moment.
- **Synchronised timeline** in four eras, with filters for dynasty, territory,
  church, war and diplomacy.
- **Realm ledger** showing every holding across the reign and a live year line.
- **Three-moment comparison** of the realm in 1509, 1536 and 1547.
- **Accessible controls**: keyboard-selectable map regions, `aria-pressed`
  states, reduced-motion support and a screen-reader map description.

## Run locally

```bash
cd henry-viii
npm install
npm run dev
```

Open http://localhost:3000.

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

## How the map is made

The map is a static SVG generated ahead of time, so no mapping library ships to
the browser.

1. Boundary data in `scripts/source/` is derived from:
   - **GADM 4.1** for England, Scotland, Wales and the island of Ireland,
     simplified with `mapshaper` to 12% of the original points.
   - **Natural Earth 1:50m** for France, Belgium, the Netherlands, the Channel
     Islands and the Isle of Man.
2. `scripts/build-atlas.mjs` normalises polygon winding, projects the geometry
   with a Mercator projection (`d3-geo`), and writes `src/data/atlas.json`.
3. `components/atlas/KingdomMap.tsx` renders the paths and overlays the
   historical Pales, crown lands, event markers and labels.

Regenerate the atlas after changing anything in `scripts/source/`:

```bash
npm run geo
```

### Accuracy notes

- Modern coastlines are used for orientation.
- The English Pale, the Pale of Calais and the Boulonnais are approximate
  historical overlays, not surveyed boundaries.
- Wales is shown as a separate jurisdiction until the Laws in Wales Act of
  1536. Ireland is shown as a claimed kingdom after 1541, not as a territory
  under effective royal control.
- Tournai (occupied 1513–19) and Boulogne (occupied 1544–50) are shown only
  while held.
- The map uses a modern projection and simplified geography; it is an
  interpretive visualisation, not a scholarly GIS dataset.

## Structure

```text
app/                 Next.js App Router entry points and global theme
components/atlas/    Map, scrubber, ledger and timeline
components/          Hero, comparison maps, legacy and chrome
lib/events.ts        Seventeen dated moments
lib/data.ts          Eras, categories, holdings and helpers
lib/territories.ts   Year-aware status for every realm
scripts/             Boundary sources and static atlas builder
src/data/atlas.json  Generated SVG paths and projected coordinates
```

## Sources

- J. J. Scarisbrick, *Henry VIII* (1968)
- G. W. Bernard, *The King's Reformation* (2005)
- John Guy, *Tudor England* (1988)
- Statutes: Act of Supremacy (1534), Laws in Wales Act (1535), Crown of
  Ireland Act (1541)
- Boundaries: GADM 4.1 and Natural Earth 1:50m
- Portrait: after Hans Holbein the Younger, public domain, via Wikimedia
  Commons

The app is standalone and does not affect the Vite portfolio at the repository
root.

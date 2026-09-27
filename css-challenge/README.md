# Wavelength — CSS Challenge

Wavelength is a fictional indie podcast platform, built as a second, visually independent take on the CSS-focused frontend challenge — a neo-brutalist counterpart to the Nimbus build in `css-challenge/`.

## Overview

There is no backend and no real audio here. Every show, episode and stat is static demo content, built to give the Flexbox, Grid and animation work a believable, distinct context to live in.

## Objective

This project demonstrates:

- Flexbox layout
- CSS Grid layout
- responsive design across phone, tablet and desktop
- CSS transitions and transforms
- keyframe animation
- accessible, semantic markup

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, custom properties, `clamp()`)
- Vanilla JavaScript (a small mobile-menu toggle — the only place JS is genuinely needed)
- Self-hosted WOFF2 fonts: Space Grotesk (display) and Space Mono (body)

Plain HTML, CSS and JavaScript only, with no build step, no framework and no npm dependencies.

## Design Direction

The direction is neo-brutalist: thick black borders, hard offset drop-shadows (no blur), a loud flat colour palette, and a tactile "press" interaction language — the deliberate opposite of Nimbus's thin-rule restraint.

- **Colour:** a warm cream background, near-black ink, and three loud flat accents — coral, violet and mint — used freely rather than sparingly.
- **Type:** Space Grotesk (a bold, geometric display face) for headlines and numerals; Space Mono for body copy, labels and UI text, for a consistent technical/indie voice throughout.
- **Structure:** thick 3px borders and hard, non-blurred offset shadows in place of soft card shadows; scattered, slightly tilted composition (feature cards, the hero's photo stack) instead of a calm aligned grid.
- **Interaction:** a tactile "press" system — hover lifts an element and grows its shadow, active flattens it back down — applied consistently to buttons, feature cards and episode cards.
- **Restraint where it counts:** no gradients, no glassmorphism, no drop shadows with blur, border-radius kept at 0 throughout for a sharp, structured feel.

## Components / Sections

1. **Hero** — bold headline with a highlighter-style marked phrase, a tilted stack of "episode" cards, and a CSS-animated audio-waveform widget
2. **Flexbox features** — three tilted, colour-blocked feature cards in a Flexbox row
3. **Episode grid** — an asymmetric CSS Grid gallery of 6 episode cards
4. **Stat band** — a full-width inverted transition section with a statement and headline numbers
5. **Animation / CTA** — the animated call-to-action button
6. **Footer** — a minimal, single-row footer

## Flexbox Implementation

The "Built for hosts, not algorithms" section (`.feature-row`) lays out exactly 3 feature cards with:

- `display: flex`
- `justify-content: center` and `align-items: stretch` once the cards sit in a row
- a shared `gap` between cards
- flexible, not fixed-pixel, widths via `flex: 1 1 260px` on each `.feature-card`

Below 768px the row stacks (`flex-direction: column`); at 768px and above it becomes a row. Each card has a small static tilt (disabled below 480px to keep mobile clean) plus a **card lift effect** on hover — the card lifts and its shadow deepens while keeping its own tilt, achieved by combining a `--tilt` custom property with the hover transform rather than overwriting it.

## Grid Implementation

The "Six shows worth your commute" section (`.episode-grid`) lays out 6 episode cards with:

- `display: grid`
- `grid-template-columns: repeat(n, 1fr)`
- a single `gap` for equal spacing
- an intentional asymmetric hierarchy at desktop: two large "featured" episodes, three regular episodes, and one full-width episode — built with `grid-column` spans, not absolute positioning

The grid simplifies to 2 columns at tablet widths and 1 column below 600px, with spans re-mapped at each breakpoint so no row is ever left with an empty gap (a real bug hit and fixed during development — see below).

## Animation Implementation

The "Start listening" CTA (`.btn--press`) demonstrates `transition`, `transform` and `box-shadow` together as a tactile press:

- **Hover:** the button lifts and its hard shadow grows
- **Active:** the button presses back down, shadow shrinking to almost nothing
- **Focus-visible:** a clear, high-contrast outline for keyboard users

A second animation — a pulsing equalizer-bar loop in the hero's "Now playing" widget — uses `@keyframes` instead of a transition, so both animation techniques are represented. An **animated underline** on the header nav links (`transform: scaleX()` on a pseudo-element) is a third, smaller touch. All three respect `@media (prefers-reduced-motion: reduce)`, which removes hover/active movement and collapses animation and transition durations while keeping each card's static tilt.

## Responsive Design

Checked in the browser at 320, 375, 480, 600, 768, 900, 1024 and 1440px. There is no horizontal overflow at any tested width, and the layout is redesigned per breakpoint rather than simply shrunk — the feature row stacks, the episode grid re-maps its column spans, and the header collapses into a toggled dropdown panel below 768px.

## Accessibility

- semantic landmarks (`header`, `nav`, `main`, `footer`)
- a skip link to the main content
- a single `h1` and a logical heading hierarchy
- visible keyboard focus (`:focus-visible`)
- accessible mobile navigation: a toggle button with `aria-expanded`/`aria-controls`, Escape-to-close with focus return, and outside-click/link-click close
- `prefers-reduced-motion` support throughout

## Project Structure

```
css-challenge-2/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── fonts/
└── README.md
```

`assets/fonts/` holds the self-hosted Space Grotesk and Space Mono WOFF2 files and their SIL Open Font License texts.

## Running Locally

No installation is needed. From this folder:

```bash
cd css-challenge-2
python -m http.server 8000
```

Then open:

http://localhost:8000

Opening `index.html` directly in a browser also works.

## Live Website

Live website: https://wave-elength-css-challenge.vercel.app/

## A Note on the Build Process

This design went through a few full visual iterations before settling here — an initial pass used a bright yellow/lime accent, which was dropped in favour of the current mint for a more considered palette, and the page-wide container width was widened after the first pass left too much empty space on very wide screens. Two real bugs were caught and fixed along the way: a stray inline `style` attribute (replaced with proper CSS classes) and a tablet-width layout where one grid tile was left stranded next to an empty cell (fixed by re-mapping that tile's column span at that breakpoint).

## Author

Mimansa Patle

- GitHub: https://github.com/Mimansapatle
- LinkedIn: https://www.linkedin.com/in/mimansa-patle-b489a6309

## Project Note

Wavelength is a fictional product built purely to demonstrate CSS layout and animation techniques for a frontend web development assignment. It has no backend, no real data, and is not deployed.

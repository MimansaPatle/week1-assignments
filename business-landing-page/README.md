# Tulip & Twine

A pastel, handmade-crafts creative studio, built as a responsive single-page landing site.

## Overview

Tulip & Twine is a small creative studio making handmade paintings, crochet, fuzzy wire crafts, clay pieces, beaded keychains and personalised jewellery. The site presents the studio in a warm, playful, pastel style: rounded type, soft colour, hand-drawn illustration and gentle motion throughout.

It is a static frontend project. There is no backend, and the contact form does not send anything anywhere.

The page runs in this order: header and navigation, hero, Creations, Services, Custom Order, About, Why Choose Handmade, a custom order request form, a closing call to action, and the footer.

## Objective

The project is meant to show working command of frontend fundamentals:

- semantic HTML5
- modern CSS, including Grid, Flexbox and custom properties
- responsive design from small phones to wide desktops
- vanilla JavaScript for the interactions
- accessible interactions (keyboard, focus, screen-reader labelling)
- a responsive contact form with client-side validation
- a polished, consistent frontend presentation

Nothing here talks to a server. The custom order form is a demo and sends nothing anywhere.

## Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, custom properties, `clamp()`)
- Vanilla JavaScript
- WebP images (the author's own handmade-craft photography, plus one illustrated maker avatar)
- SVG (the favicon and the hand-drawn decorations)
- Self-hosted WOFF2 fonts: Fredoka and Outfit

Plain HTML, CSS and JavaScript only, with no build step and no npm dependencies.

## Features

- Responsive navigation: inline links on wide screens, a dropdown panel below 768px, opened with a hamburger button
- Mobile menu that closes on Escape (returning focus to its button), on an outside tap, or on picking a link, and resets itself if the window is resized back to desktop width
- Scrollspy navigation: the current section's nav link lights up as you scroll, via `IntersectionObserver`
- Scroll reveal: sections fade and rise into place as they scroll into view; nothing depends on it to be readable
- Hand-drawn SVG illustrations throughout (the tulip logo, section decorations, the hero artwork), with a shimmer sweep on primary buttons and craft cards
- Six creation categories (paintings, crochet, fuzzy wire, clay, beaded keychains, jewellery), each with a real handmade-craft photograph
- Custom order request form with native HTML validation plus JavaScript on top: `aria-invalid` on bad fields, focus moved to the first problem, and a live-region confirmation message
- Visible keyboard focus states throughout
- `prefers-reduced-motion` support: all animation and motion is switched off and reveals show immediately

## Design

The direction is warm, playful and handmade: soft pastels, rounded shapes and a little bit of motion everywhere.

- **Colour:** Cream (`#FCF9F5`) for the page and white for cards, Deep Rose (`#C85278`) as the main accent, with Rich Violet (`#7C5295`) and Teal (`#3B7A6A`) as secondary accents. A set of pastel tints (pink, lavender, mint, yellow, peach) colours each craft card.
- **Type:** Fredoka, a rounded display face, for headings and numerals; Outfit for body copy and interface text.
- **Shape:** fully rounded buttons and pill badges, generous card radii, a dashed border on the custom-order banner.
- **Motion:** playful and continuous rather than reading-triggered — the logo sways, sparkles pulse, the hero badges float — all of it stops under `prefers-reduced-motion`.
- **Imagery:** real handmade-craft photographs supplied by the author, an illustrated maker avatar in the About section, and hand-drawn SVG illustrations for the hero composition and the small section decorations.

## Responsive Design

The layout was checked in Chromium at these viewport widths:

320px, 375px, 414px, 480px, 600px, 768px, 900px, 993px, 1024px and 1440px

It adapts across mobile, tablet and desktop: the navigation collapses into a dropdown panel, the hero stacks to a single column, the floating hero badges are hidden once there is no room for them, and the creations grid reflows from three columns down to one. There is no horizontal overflow at any of those widths.

It has not been tested on physical devices or in other browser engines.

## Accessibility

Checked in the browser during development:

- semantic landmarks (`header`, `nav`, `main`, `footer`)
- a skip link to the main content
- a logical heading hierarchy with a single `h1`
- visible keyboard focus
- labelled form fields, including hints for optional fields
- descriptive alt text on every photograph and the illustrated avatar; purely decorative icons are hidden from assistive technology
- keyboard support for the mobile menu, including Escape and focus return
- reduced-motion support
- native form validation, with JavaScript validation on top
- `aria-invalid` on fields with errors
- an `aria-live` region for the form messages

## Project Structure

```
business-landing-page-2/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── fonts/
│   └── images/
├── favicon.svg
└── README.md
```

`assets/fonts/` holds the WOFF2 files and their licence texts (SIL Open Font License). `assets/images/` holds the WebP craft photographs and the illustrated maker avatar.

## Running Locally

No installation is needed. From this folder:

```bash
cd business-landing-page-2
python -m http.server 8000
```

Then open:

http://localhost:8000

Opening `index.html` directly in a browser also works.

## Live Website

Live website: To be added after deployment.

## Screenshots

To be added.

## Author

Tirth Vaghela

- GitHub: https://github.com/Tirthvaghela
- LinkedIn: https://www.linkedin.com/in/tirthvaghela/

## Project Note

Tulip & Twine is presented here as a demonstration studio, built for frontend web development practice. The studio hours, response time and contact details are for demonstration only, and the custom order form does not send anything anywhere. The craft photographs are the author's own handmade work; the maker's portrait in the About section is an AI-generated illustrated avatar, not a photograph.

# Design system (Astongreens v1)

Same engine as the Terranxt site, different skin. All tokens live in `css/styles.css` `:root`. Do not hard-code colours elsewhere.

## Tokens
- Colour: ink #0e2a1f, ink-2 #41564c, green #1c7a4f, green-d #14603d, green-dd #0f4a2f, forest #0b2a1e (dark sections), sand #efe9da, paper #f8f6ef, line #dcd7c6, line-2 #b7b19c, sun #d99a2b (one highlight: glow, pins, focus ring).
- Type: Manrope 800 for headings (tracking -0.025em), Public Sans for body (17px/1.6), IBM Plex Mono for labels and numbers (uppercase, 12.5px). Same fonts as Terranxt on purpose.
- Container 1160px, 24px side padding. Section padding 104px desktop, 72px under 960px.
- Radius 10px buttons, 14px panels. No card shadows. No gradients except the hero and the page hero backgrounds.

## Section rhythm
White, paper and sand alternate. One dark (forest) section on a page for emphasis, plus the closing CTA. Page hero is dark.

## Components (class names)
- Header: .hdr (transparent over dark hero, becomes .solid after 40px), dropdown .has-dd/.dd, mobile .mnav. Built by js/main.js (NAV array).
- Hero (home): .hero, .hero-bg, .sun (scroll-driven), .horizon, .glow, .hero-facts.
- Page hero (inner): .phero.dark with .bg, .glow, breadcrumb .crumb, h1, lead, one .btn.light.
- Rows: .rows > a.row or div.row.static (number, title, text, arrow). Used instead of cards.
- Statement: .statement (words fade in on scroll).
- Scrollytelling: .scrolly > .scrolly-l (sticky counter, progress bar, visual) + .step list.
- Numbers: .nums > .num > b[data-count] (count-up; data-pre, data-suf).
- Tabs: .tabs/.tab/.tabp (countries). Form tabs: .ftabs/.ftab/.fpanel.
- Forms: form.f, .thanks, booking widget [data-book] with .days/.slots.
- People: .ppl > .pp. Timeline: .tl. FAQ: .faq details. Logos: .logos. Projects: .proj.
- Closing CTA: section.dark.closer. Footer: .ftr + .wm wordmark band (light, glow on hover).
- Placeholder: .ph (dashed box). The label says what to supply and the size.

## Interaction rules
- Cursor glow follows the mouse in every .dark section, the hero and the wordmark band.
- Whispers: data-whispers="A|B|C" on any dark section. Words are page-aware (EPC, MW, BIM...).
- Scroll effects: hero sun path, statement word reveal, scrollytelling counter, count-up, fade-up [data-r].
- Everything stops under prefers-reduced-motion. Keyboard: skip link, focus ring (sun), Esc closes menus, aria-expanded on menus and burger.

## Page rules
1. One primary action per page; other actions are text links.
2. Rows and tables, not card grids.
3. Only claims in 04-CONTENT-FACTS.md. Targets are written as targets.
4. Placeholders are labelled with the exact asset and size.
5. Copy: short sentences, active voice, no hype words.
6. Culture posts never on Home.

## Reuse for future sites
Copy css/styles.css and js/main.js. Change :root tokens, the NAV array, the footer text and the logo. Page templates are described in docs/pages/*.md.


## Update: palette aligned to the real logo (Oct 2026)
The logo is grey ("Aston") plus leaf green ("Greens") with a globe mark. Sampled colours: grey about #666, green about #557d2d. The first palette used an emerald green (#1c7a4f) that clashed with it, so the green family now follows the logo.

| Token | Old | New |
|---|---|---|
| --green | #1c7a4f | #557d2d (logo green) |
| --green-d | #14603d | #456a23 |
| --green-dd (links, headings accent) | #0f4a2f | #33501a |
| --forest (dark sections) | #0b2a1e | #14240f |
| --ink / --ink-2 | #0e2a1f / #41564c | #18241a / #4a5a46 |
| Light green on dark (links, eyebrows) | #9be0b8 | #b9dc8c |
| --sun (one highlight) | #d99a2b | unchanged |

Contrast: --green on white about 5.2:1, --green-dd on white about 9:1, #b9dc8c on --forest about 9:1.

## Logo usage
- File: assets/logos/astongreens.png (432x96, transparent). Rendered at 34 px high (30 px on phones).
- Grey text cannot sit on the dark hero, so over the hero the logo sits in a white rounded plate. Once the header turns solid (paper), the plate disappears.
- Footer and mobile menu: logo on sand or paper, no plate.
- Do not recolour or invert the logo. If a dark-background version exists (white text), use it and drop the plate.

## Palette v2 (premium refresh)
- Neutrals are now clean: page white #ffffff, alt sections #f3f6f3, lines #e4e9e3 / #c9d3c7. The old beige-olive (#eeeadb, #f8f7f0) is retired because it read as dull.
- Brand green is slightly brighter: --green #4b8f27, --green-d #3b7a1e, --green-dd #2a5c14. Forest #14240f stays for dark sections. Sun amber #d99a2b is the happy accent (button hover, road, highlights).
- Dot modules (like Terranxt): every .dark section has a faint dot grid (::after). The .glow layer adds amber dots revealed around the cursor.
- Footer is dark forest with the same dots, white logo, amber link hover. The wordmark band is near-black with a faint outlined wordmark that lights amber under the cursor.

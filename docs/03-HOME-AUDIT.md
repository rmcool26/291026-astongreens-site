# Home page: section-wise audit and what we did

Score of the first version: 7.4/10. After this pass: 8.4/10 (images assumed in place).

| # | Section | Finding | Change made |
|---|---|---|---|
| 1 | Hero | Strong, but static. Sun only drifted in a loop. | Sun now follows scroll along a diagonal path and grows; headline lifts and fades as you scroll. Text and facts strip kept. |
| 2 | Numbers | Heading was generic ("At a glance"). Numbers had no lead-in. | Added a scroll-reveal statement (words light up as you read), then count-up numbers. |
| 3 | What we do | 5 plain rows; no visual, nothing to look at. | Sticky scrollytelling: counter, progress bar and a visual on the left change as you scroll the 5 services. Mobile falls back to a simple list. |
| 4 | Where we work | Map placeholder + 3 projects. Fine. | Kept; added link to Global presence and All projects. |
| 5 | Technovision | Good dark moment; links were dead. | Linked to real pages; Terranxt opens in a new tab with the agreed wording. |
| 6 | Partners | Placeholders only. | Needs real logos (permission first). |
| 7 | ESG and training | Fine, short. | Linked to ESG and Training pages. |
| 8 | News | Placeholder rows. | Linked to News and Life pages. |
| 9 | Closing CTA | Single contact. | Three clear paths: contact, proposal, CEO appointment. |

## Why scrollytelling and word reveal
They are the most proven "cinematic but corporate" patterns: they add motion tied to the visitor's reading, not decoration. Both degrade to static content on mobile and with reduced motion.

## Still to do on Home
Real hero photo or drone loop, real project cards, client logos, news items, company profile PDF.


## Responsive audit and fixes (Oct 2026)
| Issue | Fix |
|---|---|
| Header: 6 nav items plus CTA overflowed between 960 and 1120 px | Burger menu now starts at 1120 px |
| Technovision rows lost their description on tablet and phone | Description now shows under the title |
| News rows: date column too narrow on tablet | 84 px date column |
| What we do: sticky number and placeholder stayed stuck on top on tablet and phone | Left panel hidden below 960 px; each step keeps its own number |
| Hero on phones: 100vh cut off by browser bars | min-height 100svh |
| Unlit statement words and dimmed steps were too faint | Opacity raised to .24 and .42 |
| Phones (under 560 px): numbers, logos, footer, people stack to 1 or 2 columns | Added a phone breakpoint with smaller padding and logo |
| Anchor jumps hid under the fixed header | scroll-margin-top on sections |

## Still open on the home page
- Hero has no photo or video. The abstract sun is a stand-in. Decide the real direction (photo-led, map-led or abstract).
- Where we work: three country lines are placeholders, map is a placeholder.
- Selected projects, client logos, news headlines: placeholders until real content arrives.

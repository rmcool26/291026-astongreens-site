# Astongreens website revamp: summary (28 Oct 2026)

Give this file plus the code to any AI. It must reproduce the same decisions without guessing.

## 1. Context
- Owner is revamping two sites. Terranxt (terranxt.com, product company, brand pvNXT, finished earlier: 20 pages in terranxt-site) and Astongreens (astongreens.com, parent company: solar EPC, O&M, BIM, IPP/EaaS; founded 2010; India HQ; UAE, KSA, Bahrain offices).
- The live Astongreens site is an Odoo e-commerce theme: cart, wishlist, login on every page, a fake +1 555 phone, "homes" footer text, culture posts on home, proof (5 GW, 10+ years) buried in About.
- Platform decision: static HTML/CSS/JS (like Terranxt) with Odoo handling forms and CRM. Odoo remains the ERP/CRM partner.
- Language: English now, Arabic phase 2.

## 2. Audience and goal
Large GCC clients and tender evaluators, India C&I buyers, investors and lenders, partners and OEMs. Primary action on every page: Contact our team. Two more paths: Request a proposal; Book an appointment with the CEO (Manish Singhal only; slots in IST and GST).

## 3. Process followed
Read live site, owner's v1 prototype (screen recording) and competitors, then: plan (Astongreens Revamp Plan, base for everything), sitemap, home v1, this multi-page build. Inspiration taken from v1: full-screen hero animation and scroll effects. Competitor patterns (Masdar, ACWA, Yellow Door, Sterling and Wilson, Jakson, Mahindra Susten): imagery scale, numbers band, project portfolio with geography filter, clean contact. Competitor pages could not all be opened, so treat that analysis as pattern-level.

## 4. Decisions (see docs/ for details)
- Sitemap: 21 pages, flat root. See docs/01-SITEMAP.md.
- Visual: forest green + sand + one sun-amber highlight; Manrope / Public Sans / IBM Plex Mono (same fonts as Terranxt). See docs/02-DESIGN-SYSTEM.md.
- Home: cinematic dark hero with scroll-driven sun path; statement with word-by-word reveal; numbers count-up; sticky scrollytelling for the five services; where we work with country tabs; Technovision (dark, glow); logos; ESG and training; news; closing CTA. See docs/03-HOME-AUDIT.md.
- Inner pages share one dark page hero (breadcrumb, h1, lead, one button) with page-aware whispers; content is the only thing that changes.
- Contact: one page with 3 tabs (contact, proposal, CEO appointment). Careers: no-vacancy page with resume form. Life at Astongreens holds culture, sports and festivals.
- Facts: only those in docs/04-CONTENT-FACTS.md. Phone +91-9555488080. Gurugram is the main address; Rohtak (registered) only on Contact and Global presence.
- Owner confirmations: Manish Singhal = Founder Director; Abhilasha Goswami = Director; Terranxt = "100% owned subsidiary of Astongreens" on both sites.

## 5. Code map
- css/styles.css: tokens + components. js/main.js: NAV array, footer, dropdowns, glow, whispers, scroll effects, tabs, forms (ENDPOINTS for Odoo), booking widget.
- Page markup was generated from a page spec; each page has a spec file docs/pages/<name>.md (sections, CTA, SEO).
- To add a page: copy a page, change title/meta/body data-page, hero, sections; add it to NAV and footer in main.js, to sitemap.xml and docs.

## 6. Placeholders and open items
See docs/05-LAUNCH-CHECKLIST.md. Main gaps: logo file, hero media, real projects and logos, leadership photos, mission/vision/history text, non-India addresses, legal text, Odoo endpoints, Arabic.

## 7. Working style the owner wants
Short, human copy (not AI-sounding). Ask when unsure, otherwise act. For design choices: 3 options plus one fresh idea with a recommendation. No card-grid look. Keep approved designs; change only what is asked. Replies in Hinglish, concise.

## 8. Related project (Terranxt)
terranxt-site: finished site for the product company. UX decisions inherited are in docs/06-TERRANXT-LEARNINGS.md. Terranxt should be updated to use the "100% owned subsidiary of Astongreens" wording.

---
## Update (latest round)
- Service pages (Solar EPC, O&M and AI SCADA, Energy-as-a-Service, Advisory, Digital construction) share one template: dark hero with glance panel, sticky nav, overview, cards, sticky-heading timeline, proof band, FAQ, previous/next, closer. See docs/pages/SERVICE-PAGE-TEMPLATE.md. Timeline classes are prefixed svc- to avoid clashing with older classes.
- About page: same template. History uses the living-road scroll (option 2b). See docs/pages/ABOUT-HISTORY.md.
- Home hero is option 1d: plant video (assets/videos/hero.mp4) + panel grid + cursor light.
- Premium refresh: brighter neutrals, dot modules on dark sections, dark forest footer. See docs/02-DESIGN-SYSTEM.md (Palette v2).
- Still open: real years for 7 history milestones, project data, photos and videos, Astongreens logo SVG, legal text, analytics IDs, Odoo forms. Technovision and Training pages are not yet on the service template.

## Update: polish and QA round
- History: scroll is now frame-smoothed (the road and marker ease with the scroll, no jumps).
- Closing CTA is a brighter green gradient with amber light, distinct from the near-black footer.
- Global "Talk to us" button (proposal, CEO call, WhatsApp, phone) sits above the back-to-top. Reason: WhatsApp is used widely in both India and the Gulf, but one menu with proposal, appointment, WhatsApp and phone works for every visitor and needs no chatbot service.
- Static audit of all 21 pages: no duplicate ids, no missing files, no images without alt, one h1 per page, titles and meta everywhere. contact.html#proposal and #appointment open the right tab through JS.
- Team review: see SITEMAP-FOR-REVIEW.md and TEAM-MESSAGE.md.

## Update: all inner pages on one template
- Technovision, Training, Projects, ESG, Our companies rebuilt on the service template (hero with glance panel, sticky nav, overview or cards, timeline, band, FAQ, closer). Global presence, News and Life got the new hero and sticky layout; their content blocks are unchanged. Legal pages and 404 keep the simple hero (no glance).
- Static audit (all 21 pages): no duplicate ids, no missing files, no dead anchors, every image has alt, one h1 per page, titles and meta present. Remaining gaps are content placeholders listed in docs/05-LAUNCH-CHECKLIST.md.

## Update: sub-page rebuild (Technovision, Projects, ESG, Training)
These four pages now follow the same flow as the What we do and Company pages: dark hero with glance panel > sticky in-page nav > overview split > main content (rows or timeline) > dark fact band > FAQ > Previous/Next > dark closing CTA. White and sand sections alternate; no two neighbours share a background. Next/previous chain: Technovision > Projects > ESG > Training > Contact.
Global fixes: added missing .stack and .muted styles; all pages checked for same-background neighbours; static audit run on all 21 pages (ids, files, anchors, alt, h1).
Unfilled content stays in [square brackets]: project data, ESG policies, course details, Odoo scope.

## Update: stakeholder-review round
- Placeholders removed from every page. History now uses the live astongreens.com timeline (2019 to 2025) plus Terranxt 2023 and the 2025-26 target. Mission and vision come from the live Mission and Vision pages. News uses the live items (NSDC accreditation, Solar & Storage Live KSA 2025, G20 Working Group Exhibition, SuryaCon Ahmedabad).
- Removed (no real content yet): client logo strip, senior-team section, named projects (replaced by project types), course list beyond the NSDC Suryamitra course. Legal pages carry short draft text marked "pending legal review".
- Open conflict: the live site History says the company began in 2019; the owner-confirmed facts say Founded 2010 / 10+ years. Decide one and align About, Home and History.
- Fixes: dropdown hover colour, "~50 MW" on one line, active step in What we do, closer and footer hierarchy, prev/next cards, mobile sideways scroll for card rows, smoother pinned history (single rAF loop, no per-frame measuring).

## Update: light refresh
Only heroes stay dark. Fact bands, closing CTA, History and the footer are now white or very light green. Projects, news and life events render from js/data.js (containers marked data-render in the HTML). Stakeholder brief items about tours, valuations and listings were ignored (pasted by mistake).

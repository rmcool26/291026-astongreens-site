# Launch checklist

## Assets
- [ ] Logo is in: assets/logos/astongreens.png. If you get a white-text version for dark backgrounds, add it and remove the white plate (see 02-DESIGN-SYSTEM.md).
- [ ] Hero photo or drone loop (1920x1080, MP4 under 8 MB + poster)
- [ ] Project photos and data (name, country, MW, type, year, client)
- [ ] Client and partner logos (with permission)
- [ ] Leadership portraits (800x1000)
- [ ] Map graphic or interactive map
- [ ] Company profile PDF (link on Home numbers)
- [ ] News items, culture photos

## Content to confirm
- [ ] Mission, Vision and History milestones
- [ ] Roles of the 5 senior team members
- [ ] UAE, KSA, Bahrain addresses, phones and emails; general email
- [ ] Rohtak PIN code
- [ ] ESG policy text and reports; ISTI course list
- [ ] EaaS terms; O&M countries
- [ ] Legal text (Privacy, Terms, Cookies)
- [ ] CA confirmation for "debt-free"

## Technical
- [ ] Odoo endpoints in js/main.js (ENDPOINTS: contact, proposal, appointment, careers). Appointment needs Odoo Appointments linked to Manish Singhal's calendar.
- [ ] Analytics (GA4 and Clarity) after cookie consent
- [ ] Convert images to WebP; self-host fonts and icons
- [ ] Add Arabic (phase 2): dir="rtl", translated copy
- [ ] 301 redirects from old Odoo URLs: /solarpv -> solar-epc.html, /technovision, /about-us -> about.html, /globalpresence -> global-presence.html, /contactus -> contact.html, history/mission/vision -> about.html, shop/cart/wishlist -> index.html
- [ ] Test at 1440, 1024, 768, 390 px; keyboard; reduced motion; Lighthouse and axe

- [ ] Hero video: assets/videos/hero.mp4 is the Gemini-made aerial-to-macro clip (1280x720, 5 MB). Its corner sparkle mark is cropped by a 12% zoom; re-export without the mark if you can. Add assets/images/hero-poster.jpg (1920x1080 still).

- [ ] Service pages (Solar EPC, O&M, EaaS, Advisory, Digital construction): replace "[Confirm...]" lines, add real project data on Solar EPC, add 4:3 photos in the Overview section.

- [ ] About > History: fill the 7 [Year] milestones (and re-order by year), add 3 key photos (16:9).

- [ ] Talk-to-us button: confirm WhatsApp number (+91 95554 88080) and the CEO call hours.
- [ ] Forms: connect to Odoo (they only show a thank-you state today).

- [ ] Replace Unsplash stand-in photos (see docs/IMAGE-CREDITS.md) with real Astongreens photos. Projects, portraits, logos and event photos are still placeholders because they must be real.

- [ ] Decide company start year (2010 vs 2019) and align About, Home and History.
- [ ] Replace Unsplash city and stand-in photos with real Astongreens photos; add real project names, MW, client logos when approved.
- [ ] Legal: replace the draft Privacy, Terms and Cookies text.

- [ ] Add real projects, news and life photos in js/data.js (one object per item). Instructions are at the top of that file.

- [ ] Company profile PDF: add a "Download company profile" link on the home page numbers section once the file exists (removed for now, it had no file).

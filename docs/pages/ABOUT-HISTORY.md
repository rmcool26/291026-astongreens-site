# About: History section (pinned horizontal journey, option "a")
Design: dark section. The page pins and vertical scroll slides ten milestones sideways along one line. A big year (top right) and a progress bar follow the story. The active milestone lights amber. Eased with requestAnimationFrame for smoothness. Mobile (under 860 px) and reduced-motion: no pin, a simple vertical list.
Images: only 3 key milestones carry a photo.
Needs overflow:clip on .hx. Section height is set by JS (track width + viewport).
Edit: about.html #history, each .hz-item has data-year and data-era. [Year] entries need the owner's input. Logic at the end of js/main.js (hz).
Note: chosen from the "a" option of the History options file (file named 2a). Earlier alternatives (living road, file folders) are not in the site.

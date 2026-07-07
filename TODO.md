# TODO: Czar Consultancy Website — Fix Prompt

- [x] Update `index.html` (SPA shell)
  - [ ] Ensure home does NOT duplicate full About/Team/Contact/Careers blocks (use preview-only sections, link to real pages)
  - [ ] Ensure About preview year count matches inner About page (single source)
  - [ ] Ensure home insights section renders the 3 posts as preview cards
  - [ ] Ensure any home nav/anchors use real paths (/about, /team, /careers, /contact)
  - [ ] Ensure "Read Article" links open the actual full posts (/insights/<slug>)
  - [ ] Replace/remove stock headshots/office photo in trust signals section; use real `public/Client*.png` logos or remove section if no real assets

- [ ] Update standalone pages for SEO tag consistency
  - [ ] Fix `og:url` and canonical on all inner pages to use non-www domain and remove `.html` suffixes
  - [ ] Verify each route’s page-specific canonical tag is correct

- [ ] Fix dead links
  - [ ] Ensure footer Privacy Policy links to `/privacy` (not `#`)

- [ ] Build & verify
  - [ ] Run `npm run build` and `npm run serve`
  - [ ] Manually verify routes: `/`, `/about`, `/services`, `/insights`, `/team`, `/careers`, `/contact`, plus `/insights/<slug>`


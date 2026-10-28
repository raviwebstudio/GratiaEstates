# Gratia Estates — React + Tailwind Website

Premium Gurgaon-focused real estate advisory website based on the supplied Gratia Estates brand board.

## Included
- Sticky responsive header
- Home page with hero, 8 featured projects, About, process, testimonials, CTA and contact
- About Us page
- Projects listing with stage filters
- Individual project detail pages
- Contact page with WhatsApp enquiry submission
- Blog + individual article pages
- Privacy Policy and Terms & Conditions
- WhatsApp floating chat button
- SEO titles, descriptions, canonical URLs, Open Graph and semantic headings
- `robots.txt` and `sitemap.xml`
- Gratia Estates logo/favicons extracted from the supplied brand image
- Playfair Display + Montserrat typography
- Charcoal / Midnight Navy / Sand Gold / Warm Grey / Ivory palette

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Before launch
1. Replace `https://www.gratiaestates.com` in `src/components/SEO.jsx`, `public/robots.txt`, and `public/sitemap.xml` if your final domain is different.
2. Replace sample project data with verified project information, prices, RERA details, developer names and official project images.
3. Replace social profile links in `src/components/Footer.jsx` with Gratia Estates' real profiles.
4. Add Google Search Console and Google Analytics/Tag Manager after the final domain is live.
5. For a real enquiry backend/CRM, connect the contact form to your preferred API; the current version sends enquiries directly to WhatsApp.

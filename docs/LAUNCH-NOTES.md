# Mad Hair Lab: launch notes

Prepared October 29, 2026. Sources checked:

- **Current site (source of truth for business facts):** madhairlab.glossgenius.com (About, Services, Portfolio, Contact, booking flow and gift card shop)
- **Previous mockup (rejected):** madhairlabs.wpenginepowered.com, used only as a possible source of client photos

## 1. Verified integrations

| Integration | URL | Status |
| --- | --- | --- |
| Booking (all "Book Your Appointment" CTAs) | https://madhairlab.glossgenius.com/services | Returns 200. Lists the live service menu. `/book` redirects here. |
| Gift cards | https://madhairlab.glossgenius.com/shop/gift-cards | Returns 200. `/shop` on its own returns 404, so the site links to gift cards directly. |
| Contact form ("Ask Elle a question") | https://madhairlab.glossgenius.com/contact | Returns 200 |
| Google reviews | https://g.co/kgs/vCmSz3K | Resolves to the Google reviews panel |
| Directions | Google Maps directions to the GlossGenius address | Link only. The Visit page also embeds a lazily loaded map. |
| Instagram / Facebook / Pinterest | @madhairlab, facebook.com/MADHAIRLAB, pin.it/7AAlXfnIC | Taken from the GlossGenius profile |
| Phone / email | (480) 295-9787 · madhairlab@gmail.com | From the GlossGenius profile |

Service-specific booking links are **not** used: selecting a service in GlossGenius doesn't change the URL, so there's nothing to deep-link to.

## 2. Facts used, and where they came from

All from the GlossGenius profile on 2026-10-29:

- **Name:** "MADHAIRLAB Hair Salon" (listing), shown as "Mad Hair Lab" in copy, matching the logo
- **Owner:** Elle White, "Owner • Extension Specialist • Custom Color Expert", described as "master hairstylist and global hair educator"
- **Address:** 21455 South Ellsworth Road, Suite 47, Queen Creek, AZ 85142
- **Hours:** Wed–Fri 10–6, Sat 10–4, closed Sun–Tue
- **Policies:** 50% fee for cancellations within 24 hours, 100% for no-shows; no refunds for services rendered; extension deposit applied to the final ticket
- **Reviews:** 24 reviews, 5.0 average. Twelve are quoted on the site, word for word, with "…" marking trims.
- **Menu and prices:** mirrored in `src/content/services.ts`

## 3. Needs confirmation before launch

1. **Owner display name.** GlossGenius says "Elle White"; Compass calls her Elizabeth; the old mockup said "Elisabeth" and "Liz". The site uses **Elle** and **Elle White** until she confirms. No combined name was invented.
2. **Business name styling.** Listing name "MADHAIRLAB Hair Salon" vs. "Mad Hair Lab" in copy. Confirm the preferred public form.
3. **Straightening Treatment** is listed at **$0** in GlossGenius, which looks like a placeholder. The site shows "Priced at consult". Confirm the real price or remove the service.
4. **Consultation** is listed at $0 (30 min). The site calls it "complimentary". Confirm that's intended.
5. **Photo provenance** (see the inventory below). The 15 GlossGenius portfolio images are owner-published. The 19 photos taken from the old mockup's uploads (15 client looks, 1 portrait, 3 salon shots) look like the salon's own phone and camera files, but Elle should confirm each one is her work and that every client has agreed to appear.
6. **Who's in the "behind the chair" photos.** `behind-the-chair-blowout.jpg` and `behind-the-chair-styling.jpg` appear to show Elle, so their captions don't name anyone. `behind-the-chair-styling.jpg` also looks like a different salon interior, perhaps a previous location.
7. **Hours.** GlossGenius hours are used. Confirm they match the Google Business Profile.
8. **Domain.** madhairlab.com currently redirects to GlossGenius. Canonicals and the sitemap assume `https://www.madhairlab.com`.
9. **Education.** Only the About paragraph exists, with no class dates, pricing or sign-up, so education is a secondary section on Meet Elle linking to the contact form rather than its own page. If Elle wants an education page, Compass needs course names, format, dates, pricing and a sign-up method.
10. **"Lived-in and blended techniques generally stretch the time between appointments"** and the other maintenance guidance is general industry guidance written for the service pages. Elle should approve the wording.

### Deliberately not carried over from the mockup (unverified)

- "More than 20 years of experience", "Elisabeth", "Liz", "trained stylists and collaborated with respected educators and brands"
- Award and press logos (Hair Fashion Expo, Paris City Fashion Week, LOC Fashion Week, Charme & Beauty, Hair Cuttery). These look like template placeholders.
- "Save up to 10% on Today's Booking"
- Reviews attributed to Rory White, Laura McLean, Maritza Zamora and Kelly. These may be real Google reviews but couldn't be verified. If Elle wants them, confirm the source and wording and add them to `reviews.ts`.
- The phone number (859) 254-6589 in the mockup header (placeholder) and `info@example.com`
- The before/after pair (template stock photography)
- "Expert stylists" (plural) and "Premium products" claims

## 4. Asset inventory

Provenance key: **GG portfolio** = published on the GlossGenius portfolio page. **GG profile** = the owner avatar or site cover on GlossGenius. **Mockup upload** = original phone or camera file found in the old mockup's media library.

### Logo

| File | Source | Notes |
| --- | --- | --- |
| `brand/mad-hair-lab-logo.png` | Mockup upload (`Copy-of-Black-and-Turquoise-Circle-Fitness-Logo-1-1.png`) | Matches the neon sign in the salon, so it's the real mark. **Only 214×259 px**, and the filename suggests a Canva template. Request the original vector or high-resolution file. |

### Owner portraits

| File | Source | Confirmed? |
| --- | --- | --- |
| `elle/elle-portrait.jpg` | GG profile (owner avatar for Elle White) | Yes: it's the owner's account avatar |
| `elle/elle-bw.jpg` | Mockup upload | Very likely Elle (same lace top and features). Confirm. |

### Salon interior

| File | Source | Notes |
| --- | --- | --- |
| `salon/neon-sign-stations.jpg` | GG profile (website cover) | Shows the Mad Hair Lab neon sign |
| `salon/styling-chair.jpg` | Mockup upload | Matches the current salon's lighting |
| `salon/behind-the-chair-blowout.jpg` | Mockup upload (`7R1A0170.jpg`, pro camera) | Stylist appears to be Elle |
| `salon/behind-the-chair-styling.jpg` | Mockup upload | Possibly a previous salon space |
| `public/media/backstage-loop.mp4` | 9-second muted cut from the mockup's `mad-hair-video-website-3.mp4` | Carries the @madhairlab watermark. Original audio removed. |

### Client work: GG portfolio (15)

`neon-editorial`, `color-application`, `lived-in-blonde-field`, `prism-blonde`, `weft-install`, `desert-blonde`, `pearl-blonde-waves`, `color-process`, `caramel-dimension`, `stage-light-blonde`, `soft-bronde`, `emerald-vivid`, `short-cut-bw`, `glam-curls`, `event-waves-group`

### Client work: mockup uploads (15, confirm)

`big-blonde-volume` (hero), `curtain-bang-blonde`, `rooted-ash-waves`, `money-piece-brunette-front` and `-side` (same client, two angles; neither is a "before"), `split-blonde-red-studio`, `sunset-blonde`, `split-blonde-copper`, `icy-platinum`, `pearl-pinned-bronde`, `brunette-layers`, `copper-profile`, `copper-movement`, `copper-ribbon-brunette`

### Not used

| Asset | Reason |
| --- | --- |
| GlossGenius service tiles for Shampoo + Blowdry, Straightening Treatment, Hair Repair Treatment and Special Occasion Updo | Look like stock or AI-generated illustrations, not salon work |
| GlossGenius service tiles for Consultation, Haircutting and Hair Extension Services | Unclear provenance (possibly stock). Not used as proof. The Custom Hair Color tile is the same photo as portfolio image `color-application`, which is used. |
| Mockup `glowskinjpg-013…022`, `redhead-woman-with-curly-hair…`, `result-of-makeover…`, `hairdresser-cleaning…`, `hairstylist-creating-a-bridal…` | Stock photography (Envato-style filenames), some from a skincare template |
| Mockup `award_logo1–6.png` | Unverified award logos |
| GlossGenius review share cards | Text graphics; the review text is used directly instead |

No generated imagery is used anywhere. Images are only resized and stripped of metadata, never retouched.

## 5. Shot requests

1. **Hero portrait of Elle for a cutout.** Vertical, at least 3000 px tall, on a plain mid-gray or white seamless backdrop, waist up, with hair loose and moving. Lit from the front with a soft key and a rim light so hair edges separate cleanly. Shoot a few with her laughing, mid-gesture, holding a color brush or bowl, and wearing magenta gloves (they already appear in the salon's video). This makes a clean cutout over the stage-light background possible without altering her appearance.
2. **Finished extension looks.** Four to six finished installs, front and back, in natural window light. Ideally include one subtle-fullness client and one dramatic-length client, with the same lighting for each.
3. **Verified before/afters.** Same client, same day, same spot and light, framed the same way (back of head plus a three-quarter front), with written consent. Two each for extensions, blonding and a brunette or dimensional result.
4. **Salon exterior and entrance.** Signage, suite number and parking, to help first-time visitors.
5. **Logo source file** (vector or a high-resolution PNG).

## 6. Quality checks run on this build

- `npm run build`, `npm run lint`, `npm run typecheck`: all pass
- axe-core (WCAG 2.2 AA plus best practices) on all 8 pages and the 404, desktop and mobile: **0 violations**
- Keyboard and touch: Find Your Formula works with arrow keys and tap, with a live-region announcement; gallery filters use `aria-pressed`; the photo viewer opens with Enter, steps with the arrow keys, closes with Esc, and returns focus; the mobile menu closes with Esc; there's a skip link
- No horizontal overflow at 390 px or 1440 px on any page
- Lighthouse (local production build, simulated throttling): mobile home 89–91 performance, desktop 99–100; accessibility 100; best practices 100. The SEO score is 69 **only** because the preview is deliberately set to `noindex`. Observed LCP on the home page is about 0.2 s locally. Lighthouse's simulated mobile LCP is about 3.4–3.8 s.
- First-load JavaScript is about 157 KB across all chunks. The hero image is about 45 KB on mobile (square crop) and is preloaded.

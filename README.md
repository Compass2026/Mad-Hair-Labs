# Mad Hair Lab website

Marketing site for Mad Hair Lab, a hair salon in Queen Creek, Arizona. Built by Compass Marketing.

**Concept: Backstage at the Color Lab.** Fashion editorial photography, rock-poster typography, and the precision of a color lab. Booking stays in GlossGenius.

## Stack

- Next.js 16 (App Router, static generation), React 19, TypeScript
- Tailwind CSS 4 (tokens in `src/app/globals.css`)
- Self-hosted OFL fonts: Anton, DM Sans, JetBrains Mono, Permanent Marker
- Ready for Vercel. No server runtime is needed beyond Next's image optimizer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
npm run typecheck
```

## Editing content

All business facts and content live in `src/content/`. Pages read from these files, so edit the data rather than the pages.

| File | What it holds |
| --- | --- |
| `business.ts` | Name, owner, phone, email, address, hours, policies, booking/gift card/contact URLs |
| `services.ts` | Service menu and prices (mirrors GlossGenius), plus the three specialty pages |
| `formula.ts` | The five "Find Your Formula" options |
| `media.ts` | Every photo, with alt text, caption, gallery category and provenance. `pairs` holds verified before/after pairs (empty for now) |
| `reviews.ts` | Verified GlossGenius reviews, quoted exactly |
| `faq.ts` | General FAQs |

To add a gallery photo, drop the file in `src/assets/images/work/`, import it in `media.ts`, and add an entry to `shots`. To add a before/after, add an entry to `pairs`; the comparison slider appears on `/transformations` only when `pairs` has entries.

## Booking

Every "Book Your Appointment" button goes to `https://madhairlab.glossgenius.com/services` (GlossGenius's `/book` redirects there). Scheduling, deposits, payments, accounts and cancellations stay in GlossGenius. Service-specific deep links aren't used because GlossGenius doesn't support them.

## Search indexing

Previews are kept out of search engines three ways: `robots.txt` disallows everything, pages carry `noindex`, and responses send `X-Robots-Tag: noindex`.

At launch, set these environment variables on the production deployment:

| Variable | Launch value |
| --- | --- |
| `SITE_INDEXING` | `true` |
| `NEXT_PUBLIC_SITE_URL` | the final domain, e.g. `https://www.madhairlab.com` (this is the default) |

## Design system

- **Color roles:** ink, char and smoke for the stage; paper and bone for reading surfaces; magenta for the signature and CTAs; magenta-ink for small magenta text on paper; lime for annotations, active states and focus on dark; violet only for light and glow; chrome for hairlines.
- **Three recurring motifs** (`src/components/motifs.tsx`): the formula line (a measured rule with a code and swatch dots), the backstage stamp, and the editorial photo frame with crop marks and a plate caption. A torn-paper edge and a backstage pass are used sparingly.
- **Motion:** brief headline rise, photo settle, a slow stage-light drift, scroll reveals through CSS `animation-timeline`, and a muted backstage clip that plays only on screen. All of it is off under `prefers-reduced-motion`.

See `docs/LAUNCH-NOTES.md` for the asset inventory, verified integrations and the open items to clear before launch.

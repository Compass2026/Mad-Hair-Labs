import { shot, type Shot } from "./media";

/**
 * Service menu mirrored from the live GlossGenius booking menu (checked 2026-10-29).
 * Prices are "from" prices as GlossGenius shows them. GlossGenius stays the source of
 * truth for pricing, deposits and availability; update this list when the menu changes.
 */

export type MenuItem = {
  name: string;
  /** Display price exactly as GlossGenius shows it, or null to send people to booking */
  price: string | null;
  minutes: number;
  note?: string;
};

export type MenuGroup = {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
  /** Specialty page slug, if this group has its own page */
  page?: string;
};

export const menu: MenuGroup[] = [
  {
    id: "consultation",
    name: "Consultation",
    description: "A 30-minute conversation about your hair history, goals and maintenance before anything gets mixed.",
    items: [{ name: "Consultation", price: "Complimentary", minutes: 30 }],
  },
  {
    id: "extensions",
    name: "Hair Extension Services",
    page: "hair-extensions",
    description:
      "Pricing is personalized based on your desired length, volume, and overall style. A deposit is required to secure your appointment and is applied to your final ticket price.",
    items: [
      { name: "Weft Installation", price: null, minutes: 120 },
      { name: "Fusion & Micro-Fusion", price: null, minutes: 120 },
      { name: "Tape-In", price: null, minutes: 120 },
      { name: "Removal", price: null, minutes: 60 },
    ],
  },
  {
    id: "color",
    name: "Custom Hair Color",
    page: "color-and-blonding",
    description:
      "From root smudges and base colors to full foilayage, babylights, and partial highlights, designed around your features, lifestyle and maintenance preferences.",
    items: [
      { name: "Base Color", price: "$90+", minutes: 90 },
      { name: "Base Color & Color Refresh", price: "$135+", minutes: 120 },
      { name: "Gloss + Blowdry", price: "$100", minutes: 60 },
      { name: "Hand Painted Face Frame", price: "$125+", minutes: 45 },
      { name: "Partial Highlight", price: "$265+", minutes: 90 },
      { name: "Full Highlight", price: "$295+", minutes: 120 },
      { name: "Partial Custom Color", price: "$355+", minutes: 120 },
      { name: "Full Custom Color", price: "$485+", minutes: 170 },
    ],
  },
  {
    id: "haircuts",
    name: "Haircutting Services",
    page: "haircuts-and-styling",
    description:
      "The Advanced Haircut includes a shampoo, deep conditioning, scalp and neck massage, hot towel treatment, voluminous blowout, and a precision, tailored cut.",
    items: [
      { name: "Advanced Haircut", price: "$95+", minutes: 60 },
      { name: "Men's Haircut", price: "$60", minutes: 45 },
      { name: "Children's Haircut", price: "$35", minutes: 30 },
    ],
  },
  {
    id: "styling",
    name: "Styling & Treatments",
    page: "haircuts-and-styling",
    items: [
      { name: "Shampoo + Blowdry", price: "$75", minutes: 45 },
      { name: "Special Occasion Updo", price: "$185", minutes: 60 },
      {
        name: "Hair Repair Treatment",
        price: "$70",
        minutes: 45,
        note: "Strengthens and hydrates to help with split ends and breakage.",
      },
      // Listed at $0 in GlossGenius. Treated as "ask at consultation" until the real price is confirmed.
      { name: "Straightening Treatment", price: null, minutes: 120 },
    ],
  },
];

export type FaqItem = { q: string; a: string };

export type Specialty = {
  slug: string;
  /** Recognizable service name used for H1 and titles */
  name: string;
  /** Creative label that supports, never replaces, the name */
  label: string;
  formulaCode: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  hero: Shot;
  gallery: Shot[];
  offered: { title: string; body: string }[];
  goodFit: string[];
  consult: string[];
  maintenance: string[];
  pricing: string;
  faqs: FaqItem[];
  menuIds: string[];
};

export const specialties: Specialty[] = [
  {
    slug: "hair-extensions",
    name: "Hair Extensions",
    label: "Length + fullness, custom matched",
    formulaCode: "EXT-01",
    metaTitle: "Hair Extensions in Queen Creek, AZ",
    metaDescription:
      "Custom weft, fusion, micro-fusion and tape-in hair extensions in Queen Creek, AZ, color matched and blended to look like your own hair. Book with Mad Hair Lab.",
    intro:
      "Great extensions shouldn't just add hair. They should look like your hair. Every install at Mad Hair Lab is customized to your natural hair, lifestyle, desired length, density, color and maintenance routine, from a little extra fullness to a dramatically longer, fuller look.",
    hero: shot("weft-install"),
    // Only photos confirmed to show extension work. Add finished extension looks here once verified.
    gallery: [shot("weft-install")],
    offered: [
      {
        title: "Weft installation",
        body: "Custom weft extensions, including hand-tied weft techniques, placed in rows and blended into your natural hair.",
      },
      {
        title: "Fusion & micro-fusion",
        body: "Strand-by-strand bonds for a more individual placement. Your consultation decides whether this method suits your hair and routine.",
      },
      { title: "Tape-in", body: "Thin, flat panels that sit close to the head for fullness and length." },
      {
        title: "Color matching & blending",
        body: "Extensions are matched and blended to your color. Many clients pair extensions with dimensional blonding or lived-in color so the cut, color and extensions finish as one look.",
      },
      { title: "Maintenance & removal", body: "Ongoing maintenance and professional removal, booked through the same menu." },
    ],
    goodFit: [
      "You want more fullness without a dramatic length change",
      "You're after real length and volume, the big, show-stopping kind",
      "Your hair feels fine or thin and you'd like more density",
      "You want a color change and extensions to work together",
    ],
    consult: [
      "Your natural hair's density, texture and current condition",
      "How much length and fullness you want, and how natural it should read",
      "Which method fits your hair, lifestyle and budget",
      "Color matching, and whether color work should happen alongside the install",
      "Your maintenance schedule and at-home care",
    ],
    maintenance: [
      "Every method needs regular maintenance appointments as your hair grows. Elle will recommend a schedule for your method and growth rate.",
      "Expect at-home care guidance for washing, brushing and sleeping with extensions.",
      "Removal is a separate service and should always be done professionally.",
    ],
    pricing:
      "Extension pricing is personalized by length, volume and style, so it isn't listed as a flat rate. A deposit secures your appointment and is applied to your final ticket. Start with a complimentary consultation for a quote.",
    faqs: [
      {
        q: "How much do hair extensions cost at Mad Hair Lab?",
        a: "Pricing is personalized based on your desired length, volume and overall style, so there isn't one flat price. Book a complimentary consultation and you'll leave with a clear quote. A deposit is required to secure an extension appointment and is applied to your final ticket.",
      },
      {
        q: "What extension methods do you offer?",
        a: "The current menu includes weft installation, fusion and micro-fusion, tape-in, and removal. The right method depends on your natural hair, your goals and how much maintenance you want.",
      },
      {
        q: "Will extensions look natural on fine hair?",
        a: "That's the point of a custom install: placement, color matching, blending and cutting are planned around your natural hair so the result looks like your own. Elle will be honest about what your hair can comfortably support.",
      },
      {
        q: "Can I get color and extensions at the same time?",
        a: "Often, yes. Mad Hair Lab is especially known for pairing extensions with dimensional blonding and lived-in color. Your consultation will map out whether it fits one visit or a plan.",
      },
    ],
    menuIds: ["consultation", "extensions"],
  },
  {
    slug: "color-and-blonding",
    name: "Custom Color & Blonding",
    label: "Lived-in blondes, dimensional brunettes, bold moves",
    formulaCode: "CLR-02",
    metaTitle: "Hair Color & Blonding in Queen Creek, AZ",
    metaDescription:
      "Lived-in blondes, dimensional brunettes, highlights, hand-painted face frames, gloss and corrective color in Queen Creek, AZ. Custom formulas by Mad Hair Lab.",
    intro:
      "No one-size-fits-all formula. Color at Mad Hair Lab is built around your features, lifestyle, maintenance preferences and long-term hair goals, whether that's a soft glow you barely have to think about or a full blonde transformation.",
    hero: shot("lived-in-blonde"),
    gallery: [shot("soft-bronde"), shot("caramel"), shot("icy-platinum"), shot("money-front"), shot("copper-movement")],
    offered: [
      { title: "Lived-in blondes", body: "Soft roots and blended brightness designed to grow out gracefully." },
      { title: "Dimensional brunettes", body: "Depth, warmth and movement for darker hair, without losing the richness." },
      {
        title: "Highlights & balayage-inspired color",
        body: "Partial and full highlights, foilayage, babylights and hand-painted face frames.",
      },
      { title: "Base color & gloss", body: "Root coverage, base refreshes and glosses for shine and tone." },
      {
        title: "Corrective color",
        body: "Color that didn't go to plan. Start with a consultation so the fix is planned, not rushed.",
      },
    ],
    goodFit: [
      "You want brighter, but low-maintenance",
      "You want richer, shinier, more dimensional brunette",
      "You're ready for a full blonde transformation",
      "You need a correction and want an honest plan",
    ],
    consult: [
      "Your color history: box dye, previous lightener, recent services",
      "How bright or how deep you want to go, and what tone you love",
      "How often you realistically want to come back",
      "Whether your goal fits one appointment or a planned series",
      "Gloss, toning and at-home care to keep it looking fresh",
    ],
    maintenance: [
      "Lived-in and blended techniques generally stretch the time between appointments; high-contrast blondes need more regular upkeep. Elle will tailor a schedule to your look.",
      "Glosses refresh tone and shine between bigger color appointments.",
      "Ask about at-home care for blonde and color-treated hair.",
    ],
    pricing:
      "Color starts at $90+ for base color, with highlights and custom color priced by length, density and time. See the menu below, then confirm current pricing in booking.",
    faqs: [
      {
        q: "What's the difference between a highlight and custom color?",
        a: "Highlights brighten with lighter pieces, partial or full. Custom color combines techniques, such as base color, highlights, hand painting and gloss, into one formula designed for your hair. Your consultation decides which fits.",
      },
      {
        q: "Can you fix color from another salon or box dye?",
        a: "Corrective color is part of the color menu. Book a consultation first so Elle can look at your hair's history and condition and give you a realistic plan.",
      },
      {
        q: "I want subtle color. Is Mad Hair Lab right for me?",
        a: "Absolutely. Lived-in blondes, soft brunettes, glosses and face-framing pieces are as much a part of the work as bold transformations. You'll get exactly as much change as you want.",
      },
      {
        q: "How long does a color appointment take?",
        a: "It depends on the service: a base color is around 90 minutes, while full custom color is booked for about three hours. Your booking shows the time for each service.",
      },
    ],
    menuIds: ["consultation", "color"],
  },
  {
    slug: "haircuts-and-styling",
    name: "Haircuts & Styling",
    label: "Precision cuts, big blowouts, event-ready hair",
    formulaCode: "CUT-03",
    metaTitle: "Haircuts & Styling in Queen Creek, AZ",
    metaDescription:
      "Advanced haircuts with scalp massage, hot towel and blowout, plus men's and children's cuts, blowouts and special occasion updos in Queen Creek, AZ.",
    intro:
      "A great cut is the foundation that makes color and extensions sing. The Advanced Haircut is a full experience, and styling services cover everything from a weekly blowout to a special occasion updo.",
    hero: shot("curtain-bang"),
    gallery: [shot("curtain-bang"), shot("brunette-layers"), shot("event-waves"), shot("pearl-pinned"), shot("short-cut")],
    offered: [
      {
        title: "Advanced Haircut",
        body: "Shampoo, deep conditioning, scalp and neck massage, hot towel treatment, voluminous blowout, and a precision, tailored cut.",
      },
      { title: "Men's & children's cuts", body: "Clean, tailored cuts for everyone in the family." },
      { title: "Shampoo + blowdry", body: "A polished blowout for any day that deserves one." },
      { title: "Special occasion updo", body: "Weddings, events and big nights out." },
      {
        title: "Hair repair & straightening treatments",
        body: "A nourishing repair treatment to strengthen and hydrate, plus a straightening treatment. Ask about the straightening treatment at your consultation.",
      },
    ],
    goodFit: [
      "You want an easy shape that works when you air dry",
      "You're growing your hair out and want it to look intentional",
      "You've got an event coming up",
      "Your hair feels tired and needs some life back",
    ],
    consult: [
      "How you style day to day, and how much time you want to spend",
      "Your hair's texture, density and growth patterns",
      "Photos of cuts you love, and ones you don't",
      "For events: date, outfit, and any accessories",
    ],
    maintenance: [
      "Most cuts keep their shape best with regular trims; Elle will suggest timing for your style.",
      "Ask for styling tips at the end of your appointment so you can recreate the blowout at home.",
    ],
    pricing:
      "Advanced Haircut $95+, Men's Haircut $60, Children's Haircut $35. Shampoo + Blowdry $75, Special Occasion Updo $185, Hair Repair Treatment $70.",
    faqs: [
      {
        q: "What's included in the Advanced Haircut?",
        a: "A shampoo, deep conditioning, scalp and neck massage, hot towel treatment, voluminous blowout, and a precision, tailored cut.",
      },
      {
        q: "Do you cut men's and children's hair?",
        a: "Yes. Men's and children's haircuts are both on the booking menu.",
      },
      {
        q: "Can I book an updo for a wedding or event?",
        a: "Yes, the Special Occasion Updo is bookable online. For groups or wedding parties, send a message through the contact form so the day can be planned.",
      },
    ],
    menuIds: ["haircuts", "styling"],
  },
];

export function specialty(slug: string) {
  return specialties.find((s) => s.slug === slug);
}

export function formatMinutes(min: number) {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? `${h} hr ${m} min` : `${h} hr`;
}

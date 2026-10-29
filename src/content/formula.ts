import { shot, type Shot } from "./media";

/**
 * "Find Your Formula" options. A service guide, not a diagnosis: each option points to
 * real menu services and tells visitors what to bring up at their consultation.
 */
export type FormulaOption = {
  id: string;
  code: string;
  /** What the visitor wants, in their words */
  want: string;
  /** Swatch color for the label (decorative) */
  swatch: string;
  service: string;
  servicesOnMenu: string[];
  explainer: string;
  discuss: string[];
  image: Shot;
  page?: string;
  pageLabel?: string;
};

export const formulaOptions: FormulaOption[] = [
  {
    id: "length",
    code: "EXT",
    want: "More length & fullness",
    swatch: "var(--color-magenta)",
    service: "Hair Extensions",
    servicesOnMenu: ["Weft Installation", "Fusion & Micro-Fusion", "Tape-In"],
    explainer:
      "Custom extensions matched to your color and blended into your natural hair, from a little extra density to a whole new length.",
    discuss: [
      "How full and how long you want to go",
      "Your natural hair's density and condition",
      "Which method fits your lifestyle: weft, fusion or tape-in",
      "Color matching, and a maintenance schedule you can keep",
    ],
    image: shot("weft-install"),
    page: "/services/hair-extensions",
    pageLabel: "All about extensions",
  },
  {
    id: "blonde",
    code: "BLN",
    want: "A brighter blonde",
    swatch: "#f3d79b",
    service: "Blonding & Highlights",
    servicesOnMenu: ["Partial Highlight", "Full Highlight", "Hand Painted Face Frame", "Full Custom Color"],
    explainer:
      "Lived-in brightness, face-framing pieces or a full blonde moment, placed to suit your features and how often you want to come back.",
    discuss: [
      "Your color history (box dye, past lightener)",
      "How bright you want to go, and the tone you love",
      "Low-maintenance grow-out vs. high-contrast blonde",
      "Whether your goal fits one visit or a plan",
    ],
    image: shot("lived-in-blonde"),
    page: "/services/color-and-blonding",
    pageLabel: "All about color",
  },
  {
    id: "dimension",
    code: "DIM",
    want: "Richer, dimensional color",
    swatch: "#8a4a2b",
    service: "Custom Color",
    servicesOnMenu: ["Base Color", "Base Color & Color Refresh", "Partial Custom Color", "Gloss + Blowdry"],
    explainer:
      "Depth, warmth and movement for brunettes and bronde, plus glosses that bring back shine. Subtle is welcome here.",
    discuss: [
      "The depth and warmth you're drawn to",
      "Gray coverage or root refresh needs",
      "How much contrast feels like you",
      "Gloss and at-home care to keep it rich",
    ],
    image: shot("caramel"),
    page: "/services/color-and-blonding",
    pageLabel: "All about color",
  },
  {
    id: "cut",
    code: "CUT",
    want: "A fresh cut & shape",
    swatch: "var(--color-lime)",
    service: "Haircuts & Styling",
    servicesOnMenu: ["Advanced Haircut", "Men's Haircut", "Children's Haircut", "Shampoo + Blowdry"],
    explainer:
      "The Advanced Haircut comes with a shampoo, deep conditioning, scalp and neck massage, hot towel treatment, a voluminous blowout and a precision, tailored cut.",
    discuss: [
      "How you style day to day, and how long it takes",
      "Photos of shapes you love, and ones you don't",
      "Your texture and any cowlicks or growth patterns",
      "Whether you want to grow it out or go shorter",
    ],
    image: shot("curtain-bang"),
    page: "/services/haircuts-and-styling",
    pageLabel: "All about cuts & styling",
  },
  {
    id: "unsure",
    code: "???",
    want: "Help figuring it out",
    swatch: "var(--color-violet)",
    service: "Consultation",
    servicesOnMenu: ["Consultation (30 min, complimentary)"],
    explainer:
      "Not sure what to book? Start with a 30-minute consultation. Bring your questions and inspiration, and leave with a plan that fits your hair, schedule and budget.",
    discuss: [
      "Inspiration photos, saved screenshots, anything goes",
      "What you've had done before, and how it went",
      "How much time and upkeep feels right",
      "What you want to feel when you look in the mirror",
    ],
    image: shot("color-application"),
    page: "/services",
    pageLabel: "See the full menu",
  },
];

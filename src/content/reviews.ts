/**
 * Verified client reviews, quoted exactly as published on the Mad Hair Lab GlossGenius
 * profile (madhairlab.glossgenius.com, 24 reviews, 5.0 average, retrieved 2026-10-29).
 * Reviewer names are shown the way GlossGenius shows them. Do not edit the wording;
 * only trim with an ellipsis where marked.
 *
 * Reviews on the previous mockup (e.g. attributed to Rory White, Laura McLean,
 * Maritza Zamora, Kelly) are NOT included: their source could not be verified.
 */

export type Review = {
  id: number;
  quote: string;
  name: string;
  date: string; // ISO date
  tags: ("extensions" | "color" | "cut" | "experience")[];
};

export const reviewSummary = { rating: 5, count: 24, source: "GlossGenius", retrieved: "2026-10-29" };

export const reviews: Review[] = [
  {
    id: 948092,
    quote: "Elle does the best extensions I have ever had done. Her placement and attention to detail is legendary.",
    name: "Anna",
    date: "2021-12-08",
    tags: ["extensions"],
  },
  {
    id: 960648,
    quote:
      "…I have naturally ash blonde hair and she always gives me the perfect amount of highlights without it looking brassy or over processed. She is a great listener and always uses her expertise to create my desired outcome. …",
    name: "Sarah",
    date: "2021-12-16",
    tags: ["color"],
  },
  {
    id: 975857,
    quote:
      "Elle is a fabulous hair guru! She can formulate the perfect color and gloss, she is an amazing stylist, and she can put life back into my hair with a great cut. On top of knowing her craft, she is cheerful and a great conversationalist. No awkwardness here!! …",
    name: "Kim",
    date: "2021-12-29",
    tags: ["color", "cut", "experience"],
  },
  {
    id: 942647,
    quote:
      "…I just had extensions put in my hair and the look and feel amazing! My hair looks so much fuller now, and I have more length! Love them!! …",
    name: "Deanna",
    date: "2021-12-03",
    tags: ["extensions"],
  },
  {
    id: 1035558,
    quote:
      "Elle is a great stylist. She is honest and makes sure what you want will work or will go over your options. I have never been disappointed.",
    name: "Sally Buck",
    date: "2022-02-10",
    tags: ["experience"],
  },
  {
    id: 899391,
    quote:
      "…I walked in her beautiful salon space feeling very insecure about my hair and left feeling like a million bucks! Elle explained everything she was doing and made sure I was comfortable with her process. …",
    name: "Nicole Wolfe",
    date: "2021-11-01",
    tags: ["experience"],
  },
  {
    id: 1066809,
    quote:
      "I always look forward to my appointments with Elle, she is so talented! Really takes the time to listen, I walk out feeling like I have pinterest worthy hair - she's genius!",
    name: "Bri B.",
    date: "2022-02-28",
    tags: ["experience"],
  },
  {
    id: 984494,
    quote:
      "…She listened so carefully and asked great questions to make sure that she understood how I wanted my hair to look. I love my haircut and I’m looking forward to my next appointment.",
    name: "Alicia Ross",
    date: "2022-01-06",
    tags: ["cut"],
  },
  {
    id: 899526,
    quote:
      "…she was a good listener to what I wanted to do with my hair (color and length) and she provided workable options in how to get where I wanted to go. I am SO happy with how my hair turned out, not to mention the compliments I've received. …",
    name: "Eileen",
    date: "2021-11-01",
    tags: ["color"],
  },
  {
    id: 898414,
    quote:
      "Elle is one of a kind. She’s passionate about what she does and it shows in all of her work. She KNOWS her clients and you feel her warmth the moment you walk in. …",
    name: "AJ",
    date: "2021-10-31",
    tags: ["experience"],
  },
  {
    id: 953295,
    quote:
      "…She got me in for a hair correction on short notice. I can now go back to my hometown for the holidays feeling confident. …",
    name: "Kaitlyn",
    date: "2021-12-11",
    tags: ["color"],
  },
  {
    id: 893536,
    quote:
      "…She really knows how to cut hair but more importantly she has a feel for what suits your hair type and how to make your cut enhance your looks. …",
    name: "Louise van Rensburg",
    date: "2021-10-28",
    tags: ["cut"],
  },
];

export function reviewDate(iso: string) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
}

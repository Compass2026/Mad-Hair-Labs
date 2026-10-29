/**
 * Business facts. Single source of truth for name, contact, hours, booking and policies.
 *
 * Verified against the live GlossGenius booking site (madhairlab.glossgenius.com)
 * on 2026-10-29. Update here and every page, the footer, and structured data follow.
 */

export const VERIFIED_ON = "2026-10-29";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.madhairlab.com").replace(/\/$/, "");

export const business = {
  /** Display name used in copy. Legal/listing name is `listingName`. */
  name: "Mad Hair Lab",
  listingName: "MADHAIRLAB Hair Salon",
  tagline: "Hair extensions, custom color and haircuts in Queen Creek, Arizona",
  owner: {
    // Public name on GlossGenius. Preferred full display name still to be confirmed with the owner.
    displayName: "Elle",
    fullName: "Elle White",
    title: "Owner · Extension Specialist · Custom Color Expert",
  },
  phone: { display: "(480) 295-9787", href: "tel:+14802959787", e164: "+14802959787" },
  email: "madhairlab@gmail.com",
  address: {
    street: "21455 South Ellsworth Road",
    suite: "Suite 47",
    city: "Queen Creek",
    region: "AZ",
    regionName: "Arizona",
    postalCode: "85142",
    country: "US",
  },
  geo: { lat: 33.2527162, lng: -111.6321164 },
  timezone: "America/Phoenix",
  serviceArea: "Queen Creek and the surrounding East Valley",
  social: {
    instagram: "https://www.instagram.com/madhairlab",
    instagramHandle: "@madhairlab",
    facebook: "https://www.facebook.com/MADHAIRLAB",
    pinterest: "https://pin.it/7AAlXfnIC",
  },
  reviewsOnGoogle: "https://g.co/kgs/vCmSz3K",
} as const;

/**
 * Booking lives in GlossGenius. `/book` on GlossGenius redirects to `/services`,
 * so we link to `/services` directly. Selecting a service there does not change the
 * URL, so per-service deep links are not supported; every CTA uses this one URL.
 */
export const links = {
  book: "https://madhairlab.glossgenius.com/services",
  giftCards: "https://madhairlab.glossgenius.com/shop/gift-cards",
  contactForm: "https://madhairlab.glossgenius.com/contact",
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "MADHAIRLAB Hair Salon, 21455 S Ellsworth Rd Suite 47, Queen Creek, AZ 85142",
  )}`,
  mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(
    "21455 S Ellsworth Rd Suite 47, Queen Creek, AZ 85142",
  )}&z=15&output=embed`,
} as const;

export type DayHours = { day: string; short: string; schemaDay: string; open?: string; close?: string };

/** Business hours from the GlossGenius location record. */
export const hours: DayHours[] = [
  { day: "Monday", short: "Mon", schemaDay: "Monday" },
  { day: "Tuesday", short: "Tue", schemaDay: "Tuesday" },
  { day: "Wednesday", short: "Wed", schemaDay: "Wednesday", open: "10:00", close: "18:00" },
  { day: "Thursday", short: "Thu", schemaDay: "Thursday", open: "10:00", close: "18:00" },
  { day: "Friday", short: "Fri", schemaDay: "Friday", open: "10:00", close: "18:00" },
  { day: "Saturday", short: "Sat", schemaDay: "Saturday", open: "10:00", close: "16:00" },
  { day: "Sunday", short: "Sun", schemaDay: "Sunday" },
];

export const hoursSummary = "Wed–Fri 10–6 · Sat 10–4";

export const policies = {
  cancellation:
    "We charge a 50% cancellation fee for any cancellations within 24 hours of the scheduled appointment. No shows will be charged 100% of the appointment cost.",
  refunds: "Mad Hair Lab does not offer refunds for services rendered.",
  extensionDeposit:
    "Extension appointments require a deposit to secure your appointment. It is applied to your final ticket price.",
} as const;

export function formatTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return m ? `${hr}:${String(m).padStart(2, "0")} ${suffix}` : `${hr} ${suffix}`;
}

export const fullAddress = `${business.address.street}, ${business.address.suite}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;

import { business, hours, links, SITE_URL } from "@/content/business";
import type { FaqItem } from "@/content/services";

export const SALON_ID = `${SITE_URL}/#salon`;

export function salonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": SALON_ID,
    name: business.listingName,
    alternateName: business.name,
    description:
      "Hair salon in Queen Creek, Arizona specializing in luxury hair extensions, dimensional blonding, lived-in color, customized hair transformations and haircuts.",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    image: `${SITE_URL}/opengraph-image`,
    telephone: business.phone.e164,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.street}, ${business.address.suite}`,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: business.geo.lat, longitude: business.geo.lng },
    areaServed: [
      { "@type": "City", name: "Queen Creek, AZ" },
      { "@type": "Place", name: "East Valley, AZ" },
    ],
    openingHoursSpecification: hours
      .filter((d) => d.open && d.close)
      .map((d) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${d.schemaDay}`,
        opens: d.open,
        closes: d.close,
      })),
    founder: { "@type": "Person", name: business.owner.fullName, jobTitle: "Owner, Extension Specialist, Custom Color Expert" },
    sameAs: [business.social.instagram, business.social.facebook],
    potentialAction: {
      "@type": "ReserveAction",
      target: { "@type": "EntryPoint", urlTemplate: links.book, actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"] },
      result: { "@type": "Reservation", name: "Salon appointment" },
    },
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: name,
    areaServed: { "@type": "City", name: "Queen Creek, AZ" },
    provider: { "@id": SALON_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.path}` })),
  };
}

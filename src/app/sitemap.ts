import type { MetadataRoute } from "next";

import { SITE_URL } from "@/content/business";
import { specialties } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", ...specialties.map((s) => `/services/${s.slug}`), "/transformations", "/meet-elle", "/visit"];
  return pages.map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p.startsWith("/services") ? 0.9 : 0.7,
  }));
}

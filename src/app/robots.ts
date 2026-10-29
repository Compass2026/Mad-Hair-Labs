import type { MetadataRoute } from "next";

import { SITE_URL } from "@/content/business";

// Preview builds stay out of search. Set SITE_INDEXING=true on the production launch.
export default function robots(): MetadataRoute.Robots {
  if (process.env.SITE_INDEXING !== "true") {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${SITE_URL}/sitemap.xml`, host: SITE_URL };
}

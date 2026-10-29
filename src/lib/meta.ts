import type { Metadata } from "next";

/** Per-page metadata with matching Open Graph tags and the shared social image. */
export function pageMeta({ title, description, path, absoluteTitle = false }: { title: string; description: string; path: string; absoluteTitle?: boolean }): Metadata {
  const ogTitle = absoluteTitle ? title : `${title} | Mad Hair Lab`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: "Mad Hair Lab",
      type: "website",
      locale: "en_US",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Mad Hair Lab: Good hair. Loud energy. Hair salon in Queen Creek, Arizona." }],
    },
    twitter: { card: "summary_large_image", title: ogTitle, description },
  };
}

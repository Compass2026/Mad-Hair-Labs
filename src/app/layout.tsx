import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileBookBar } from "@/components/MobileBookBar";
import { SITE_URL } from "@/content/business";
import { anton, dmSans, jetbrains, marker } from "@/lib/fonts";
import { pageMeta } from "@/lib/meta";
import { salonSchema } from "@/lib/schema";
import "./globals.css";

const indexable = process.env.SITE_INDEXING === "true";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMeta({
    title: "Mad Hair Lab | Hair Extensions & Color Salon in Queen Creek, AZ",
    description:
      "Queen Creek, AZ hair salon for custom hair extensions, dimensional blonding, lived-in color and precision cuts by owner Elle White. Book online.",
    path: "/",
    absoluteTitle: true,
  }),
  title: { default: "Mad Hair Lab | Hair Extensions & Color Salon in Queen Creek, AZ", template: "%s | Mad Hair Lab" },
  applicationName: "Mad Hair Lab",
  robots: indexable ? { index: true, follow: true } : { index: false, follow: false, googleBot: { index: false, follow: false } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0c0b0e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${dmSans.variable} ${jetbrains.variable} ${marker.variable}`}>
      <body>
        <JsonLd data={salonSchema()} />
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <MobileBookBar />
      </body>
    </html>
  );
}

import localFont from "next/font/local";

// All four families are SIL Open Font License, self-hosted from @fontsource.
export const anton = localFont({
  src: "../fonts/anton-latin-400-normal.woff2",
  variable: "--font-anton",
  weight: "400",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const dmSans = localFont({
  src: [{ path: "../fonts/dm-sans-latin-wght-normal.woff2", style: "normal", weight: "100 1000" }],
  variable: "--font-dm",
  display: "swap",
});

export const jetbrains = localFont({
  src: [
    { path: "../fonts/jetbrains-mono-latin-400-normal.woff2", weight: "400" },
    { path: "../fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-jet",
  display: "swap",
  preload: false,
});

export const marker = localFont({
  src: "../fonts/permanent-marker-latin-400-normal.woff2",
  variable: "--font-marker",
  weight: "400",
  display: "swap",
  preload: false,
});

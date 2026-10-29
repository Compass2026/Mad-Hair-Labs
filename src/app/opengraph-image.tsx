import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Mad Hair Lab — Good hair. Loud energy. Hair salon in Queen Creek, Arizona.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [font, photo, logo] = await Promise.all([
    readFile(join(process.cwd(), "src/fonts/anton-latin-400-normal.woff")),
    readFile(join(process.cwd(), "src/assets/images/work/big-blonde-volume.jpg")),
    readFile(join(process.cwd(), "src/assets/images/brand/mad-hair-lab-logo.png")),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0c0b0e", color: "#f6f0e7", fontFamily: "Anton" }}>
        <div
          style={{
            position: "absolute",
            top: -200,
            left: 260,
            width: 700,
            height: 700,
            background: "radial-gradient(circle, rgba(255,43,148,0.42) 0%, rgba(129,82,255,0.16) 42%, rgba(12,11,14,0) 70%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 0 56px 64px", width: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img src={logoSrc} width={86} height={104} alt="" />
            <div style={{ fontSize: 30, letterSpacing: 2, color: "#b4b9c1", textTransform: "uppercase" }}>Hair salon · Queen Creek, Arizona</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 132, lineHeight: 0.9, textTransform: "uppercase", whiteSpace: "nowrap" }}>
            <span>Good hair.</span>
            <span style={{ color: "#ff2b94" }}>Loud energy.</span>
          </div>
          <div style={{ fontSize: 30, letterSpacing: 1.5, textTransform: "uppercase", color: "#d4ff3d" }}>
            Extensions · Blonding · Custom color · Cuts
          </div>
        </div>
        <img src={photoSrc} alt="" width={440} height={630} style={{ objectFit: "cover", width: 440, height: 630 }} />
      </div>
    ),
    { ...size, fonts: [{ name: "Anton", data: font, style: "normal", weight: 400 }] },
  );
}

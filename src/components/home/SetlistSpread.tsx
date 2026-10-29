import Image from "next/image";
import Link from "next/link";

import { Arrow, FormulaLine, TornEdge } from "@/components/motifs";
import { categoryLabels, shot } from "@/content/media";

// Hand-picked for range: subtle to bold, natural to vivid, plus an extension install.
const tracks = [
  { id: "soft-bronde", cls: "col-span-2 row-span-2 md:col-span-5 md:row-span-2", sizes: "(min-width: 768px) 40vw, 100vw" },
  { id: "weft-install", cls: "col-span-1 md:col-span-3", sizes: "(min-width: 768px) 25vw, 50vw" },
  { id: "copper-movement", cls: "col-span-1 md:col-span-4", sizes: "(min-width: 768px) 33vw, 50vw" },
  { id: "money-front", cls: "col-span-1 md:col-span-4 md:row-span-2", sizes: "(min-width: 768px) 33vw, 50vw" },
  { id: "caramel", cls: "col-span-1 md:col-span-3", sizes: "(min-width: 768px) 25vw, 50vw" },
  { id: "rooted-ash", cls: "col-span-1 md:col-span-5", sizes: "(min-width: 768px) 40vw, 50vw" },
  { id: "curtain-bang", cls: "col-span-1 md:col-span-3", sizes: "(min-width: 768px) 25vw, 50vw" },
];

export function SetlistSpread() {
  return (
    <section id="setlist" className="surface-paper relative pb-20 pt-4 lg:pb-28" aria-labelledby="setlist-title">
      <TornEdge fill="var(--color-paper)" className="absolute inset-x-0 -top-[clamp(18px,2.4vw,34px)] translate-y-px" />
      <div className="wrap">
        <div className="grid gap-8 pt-14 lg:grid-cols-12 lg:items-end lg:pt-20">
          <div className="lg:col-span-8">
            <FormulaLine code="Side A" label="The proof" className="max-w-md text-mute" />
            <h2 id="setlist-title" className="display mt-5 text-[clamp(3.1rem,10.5vw,8.5rem)] lg:text-[clamp(5rem,6.6vw,7.4rem)]">
              <span className="block text-[0.42em] leading-none">The</span>
              Transformation
              <span className="block text-magenta-ink">Setlist</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-3">
            <p className="text-lg">
              Real hair from the Mad Hair Lab chair. Whisper-soft brightness, rich brunettes, copper that glows, and extension
              work placed with serious precision.
            </p>
            <Link href="/transformations" className="link-u mt-4 inline-flex items-center gap-2 font-semibold">
              Play the full setlist <Arrow />
            </Link>
          </div>
        </div>

        <ol className="mt-12 grid grid-flow-dense auto-rows-[minmax(10rem,auto)] grid-cols-2 gap-3 md:auto-rows-[15vw] md:grid-cols-12 md:gap-4 xl:auto-rows-[13rem]">
          {tracks.map((t, i) => {
            const s = shot(t.id);
            return (
              <li key={t.id} className={`reveal group relative overflow-hidden bg-bone ${t.cls}`}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes={t.sizes}
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={s.focus ? { objectPosition: s.focus } : undefined}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent p-3 pt-10 text-paper md:p-4 md:pt-14">
                  <p className="mono text-[0.62rem] text-lime">
                    Track {String(i + 1).padStart(2, "0")} · {categoryLabels[s.category]}
                  </p>
                  <p className="mt-1 text-[0.95rem] font-semibold leading-snug md:text-base">{s.title}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="hand -rotate-2 text-2xl text-magenta-ink md:text-3xl">soft &amp; subtle? that&rsquo;s welcome here too.</p>
          <Link href="/transformations" className="btn btn-ghost">
            See the Transformations <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

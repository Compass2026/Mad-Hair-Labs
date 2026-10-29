import Image, { getImageProps } from "next/image";
import type { CSSProperties } from "react";
import { preload } from "react-dom";

import { BookButton } from "@/components/BookButton";
import { Arrow, FormulaLine, Stamp } from "@/components/motifs";
import heroSquareSrc from "@/assets/images/work/big-blonde-volume-square.jpg";
import { business, hoursSummary } from "@/content/business";
import { portraits, shot } from "@/content/media";

const tickerItems = [
  "Hair extensions",
  "Dimensional blonding",
  "Lived-in color",
  "Precision cuts",
  "Custom transformations",
  "Queen Creek, AZ",
];

export function Hero() {
  const hero = shot("big-blonde");
  const {
    props: { srcSet: wideSrcSet, sizes: wideSizes },
  } = getImageProps({ src: hero.src, alt: "", sizes: "(min-width: 1024px) 40vw, 100vw" });
  const heroWide = { srcSet: wideSrcSet, sizes: wideSizes };
  const { props: heroSquare } = getImageProps({ src: heroSquareSrc, alt: "", sizes: "100vw", priority: true });
  // <picture> sources aren't seen by the preload scanner, so hint each one for its viewport.
  preload(heroSquare.src, { as: "image", imageSrcSet: heroSquare.srcSet, imageSizes: "100vw", media: "(max-width: 639px)", fetchPriority: "high" });
  preload(hero.src.src, { as: "image", imageSrcSet: wideSrcSet, imageSizes: wideSizes, media: "(min-width: 640px)", fetchPriority: "high" });
  return (
    <section className="grain relative overflow-hidden bg-ink" aria-labelledby="hero-title">
      <div className="stage-light" aria-hidden="true" />

      <div className="wrap relative grid items-center gap-x-8 pb-16 pt-5 lg:min-h-[calc(100svh-4.75rem)] lg:grid-cols-12 lg:pb-24 lg:pt-10">
        {/* Photography */}
        <div className="relative -mx-[var(--gutter)] sm:mx-0 lg:order-2 lg:col-span-5 lg:col-start-8">
          {/* Art-directed: phones get a square crop, larger screens the full portrait */}
          <figure className="frame settle">
            <div className="frame__img aspect-square max-h-[78svh] sm:aspect-[4/5]">
              <picture>
                <source media="(min-width: 640px)" srcSet={heroWide.srcSet} sizes={heroWide.sizes} />
                <img
                  {...heroSquare}
                  alt={hero.alt}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: hero.focus }}
                />
              </picture>
            </div>
            <figcaption className="frame__cap hidden sm:flex">
              <span>Plate 01 · Big blonde volume</span>
              <span>Finished look</span>
            </figcaption>
          </figure>
          {/* fade the photo into the stage on phones so the headline can overlap it */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink via-ink/60 to-transparent sm:hidden" aria-hidden="true" />

          {/* Elle: the artist sits right next to the work */}
          <figure className="fade-in absolute right-4 top-4 w-[30%] rotate-[5deg] bg-paper p-1.5 pb-7 shadow-[0_24px_40px_-12px_rgb(0_0_0/0.7)] sm:w-[34%] lg:-left-28 lg:right-auto lg:top-auto lg:bottom-24 lg:w-[44%] lg:-rotate-6 lg:p-2 lg:pb-9" style={{ "--i": 3 } as CSSProperties}>
            <Image
              src={portraits.elle.src}
              alt={portraits.elle.alt}
              sizes="(min-width: 1024px) 18vw, 32vw"
              placeholder="blur"
              loading="eager"
              className="aspect-square w-full object-cover"
            />
            <figcaption className="hand absolute bottom-1.5 left-2 text-[0.95rem] text-ink lg:bottom-2 lg:left-3 lg:text-xl">
              {business.owner.displayName}, owner
            </figcaption>
          </figure>

          <Stamp
            className="fade-in absolute left-4 top-4 bg-ink/40 text-[1rem] text-lime backdrop-blur-sm sm:left-auto sm:right-6 sm:top-auto sm:-bottom-5 sm:text-[1.1rem] lg:-right-4 lg:-top-5 lg:bottom-auto lg:text-[1.35rem]"
            sub="By appointment"
            tilt={-7}
          >
            All Access
          </Stamp>

          <p className="mono absolute -right-1 top-1/2 hidden origin-right -translate-y-1/2 translate-x-full rotate-90 whitespace-nowrap text-[0.65rem] text-chrome xl:block" aria-hidden="true">
            33.2527° N · 111.6321° W · Queen Creek, AZ
          </p>
        </div>

        {/* Words */}
        <div className="relative z-10 -mt-14 sm:mt-10 lg:order-1 lg:col-span-7 lg:mt-0">
          <FormulaLine code="Hair salon" label="Queen Creek, Arizona" className="max-w-xl text-chrome" />

          <h1 id="hero-title" className="display mt-5 whitespace-nowrap text-[clamp(3.6rem,16.5vw,9rem)] lg:text-[clamp(5.5rem,8.4vw,10.5rem)]">
            <span className="visually-hidden">Mad Hair Lab, hair salon in Queen Creek, Arizona: </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <span className="rise" style={{ "--i": 0 } as CSSProperties}>
                Good hair.
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.04em] text-magenta">
              <span className="rise" style={{ "--i": 1 } as CSSProperties}>
                Loud energy.
              </span>
            </span>
          </h1>

          <p className="lede fade-in mt-6 max-w-[34rem] text-paper/90" style={{ "--i": 2 } as CSSProperties}>
            Custom color, seamless extensions, and a whole lot of personality. Welcome to Mad Hair Lab in Queen Creek.
          </p>

          <div className="fade-in mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" data-cta-primary style={{ "--i": 3 } as CSSProperties}>
            <BookButton size="lg" />
            <a href="#setlist" className="btn btn-ghost min-h-[3.75rem] text-[1.35rem]">
              See the Transformations <Arrow />
            </a>
          </div>

          <dl className="fade-in mt-9 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-sm" style={{ "--i": 4 } as CSSProperties}>
            <div>
              <dt className="mono text-[0.66rem] text-chrome">Open</dt>
              <dd className="mt-1">{hoursSummary}</dd>
            </div>
            <div>
              <dt className="mono text-[0.66rem] text-chrome">Find us</dt>
              <dd className="mt-1">
                21455 S Ellsworth Rd, Suite 47
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Tour-poster ticker */}
      <div className="relative z-10 -mb-2 -rotate-[1.4deg] overflow-hidden border-y-2 border-ink bg-magenta py-2.5 text-ink" aria-hidden="true">
        <div className="ticker">
          {[0, 1].map((k) => (
            <ul key={k} className="flex shrink-0 items-center">
              {tickerItems.map((t) => (
                <li key={t} className="display flex items-center whitespace-nowrap px-5 text-[1.6rem] leading-none sm:text-[2rem]">
                  {t}
                  <span className="ml-10 text-[1.1rem]">✶</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

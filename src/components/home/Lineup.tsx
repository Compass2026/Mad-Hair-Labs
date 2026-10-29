import Image from "next/image";
import Link from "next/link";

import { Arrow, FormulaLine, Stamp } from "@/components/motifs";
import { links } from "@/content/business";
import { shot } from "@/content/media";

const acts = [
  {
    billing: "Headliner",
    name: "Hair Extensions",
    label: "Weft · Fusion & micro-fusion · Tape-in",
    body: "Custom installs matched to your color, cut and lifestyle. Subtle fullness or serious length, blended so it reads as your hair.",
    price: "Personalized pricing · deposit required",
    href: "/services/hair-extensions",
    img: shot("weft-install"),
  },
  {
    billing: "Co-headliner",
    name: "Custom Color & Blonding",
    label: "Lived-in blondes · dimensional brunettes · corrective",
    body: "Highlights, hand-painted face frames, base color, gloss and full custom formulas, built around your features and how often you want to come back.",
    price: "From $90+",
    href: "/services/color-and-blonding",
    img: shot("caramel"),
  },
  {
    billing: "Special guest",
    name: "Haircuts & Styling",
    label: "Precision cuts · blowouts · updos",
    body: "The Advanced Haircut includes shampoo, deep conditioning, scalp and neck massage, hot towel, blowout and a tailored cut.",
    price: "From $35",
    href: "/services/haircuts-and-styling",
    img: shot("brunette-layers"),
  },
];

const alsoOnTheBill = [
  "Consultation (complimentary)",
  "Shampoo + Blowdry",
  "Special Occasion Updo",
  "Hair Repair Treatment",
  "Straightening Treatment",
  "Men’s & Children’s Cuts",
];

export function Lineup() {
  return (
    <section className="surface-paper relative py-20 lg:py-28" aria-labelledby="lineup-title">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FormulaLine code="The services" label="Now booking" className="max-w-md text-mute" />
            <h2 id="lineup-title" className="display mt-5 text-[clamp(3.6rem,10vw,9rem)]">
              The Lineup
            </h2>
          </div>
          <Stamp className="self-start text-xl text-magenta-ink md:self-auto" sub="Wed – Sat" tilt={6}>
            Queen Creek, AZ
          </Stamp>
        </div>

        <ol className="mt-12 border-t-2 border-ink">
          {acts.map((a, i) => (
            <li key={a.name} className="reveal border-b-2 border-ink">
              <Link
                href={a.href}
                className="group grid items-center gap-5 py-7 md:grid-cols-[5rem_minmax(0,1fr)_14rem] md:gap-8 lg:grid-cols-[6rem_minmax(0,1fr)_18rem] lg:py-9"
              >
                <span className="mono text-mute">
                  0{i + 1}
                  <span className="block text-[0.62rem]">{a.billing}</span>
                </span>
                <span className="min-w-0">
                  <span
                    className={`display block leading-[0.92] transition-colors group-hover:text-magenta-ink ${
                      i === 0 ? "text-[clamp(3rem,8.5vw,7.75rem)]" : i === 1 ? "text-[clamp(2.5rem,6.4vw,5.75rem)]" : "text-[clamp(2.2rem,4.8vw,4.25rem)]"
                    }`}
                  >
                    {a.name}
                  </span>
                  <span className="mono mt-2 block text-[0.68rem] text-mute">{a.label}</span>
                  <span className="mt-3 block max-w-2xl text-[1.05rem]">{a.body}</span>
                  <span className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
                    <span>{a.price}</span>
                    <span className="inline-flex items-center gap-2 text-magenta-ink">
                      Explore {a.name.toLowerCase()} <Arrow />
                    </span>
                  </span>
                </span>
                <span className="relative order-first block aspect-[16/9] overflow-hidden md:order-none md:aspect-[4/5]">
                  <Image
                    src={a.img.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 18rem, (min-width: 768px) 14rem, 100vw"
                    placeholder="blur"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 md:grid-cols-[auto_1fr] md:items-baseline">
          <p className="mono text-mute">Also on the bill</p>
          <ul className="flex flex-wrap gap-x-2 gap-y-2">
            {alsoOnTheBill.map((x) => (
              <li key={x} className="display border-2 border-ink px-3 py-1.5 text-lg leading-none">
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
          <Link href="/services" className="link-u inline-flex items-center gap-2 font-semibold">
            Full menu &amp; starting prices <Arrow />
          </Link>
          <a href={links.giftCards} className="link-u inline-flex items-center gap-2 font-semibold">
            Gift cards <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

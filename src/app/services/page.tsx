import type { Metadata } from "next";

import { pageMeta } from "@/lib/meta";
import Image from "next/image";
import Link from "next/link";

import { BookButton } from "@/components/BookButton";
import { Closing } from "@/components/Closing";
import { Faq } from "@/components/Faq";
import { FindYourFormula } from "@/components/FindYourFormula";
import { JsonLd } from "@/components/JsonLd";
import { MenuTable } from "@/components/MenuTable";
import { PageIntro } from "@/components/PageIntro";
import { Arrow, FormulaLine } from "@/components/motifs";
import { links, VERIFIED_ON } from "@/content/business";
import { generalFaqs } from "@/content/faq";
import { menu, specialties } from "@/content/services";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Services & Pricing in Queen Creek, AZ",
  description:
    "Hair extensions, custom color, blonding, haircuts, blowouts, updos and treatments at Mad Hair Lab in Queen Creek, AZ. See starting prices and book online.",
  path: "/services",
});

const verified = new Date(VERIFIED_ON + "T12:00:00Z").toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <PageIntro
        code="The menu"
        label="Queen Creek, AZ"
        title={
          <>
            Services <span className="text-magenta">&amp;</span> pricing
          </>
        }
        crumbs={[{ name: "Services", path: "/services" }]}
      >
        <p>
          Extensions, color and blonding, cuts and styling, all customized in the chair. Start with the specialty that fits
          your goal, or scroll for the full menu with starting prices.
        </p>
      </PageIntro>

      <section className="bg-ink pb-20" aria-labelledby="specialties-title">
        <div className="wrap">
          <h2 id="specialties-title" className="visually-hidden">
            Specialties
          </h2>
          <ul className="grid gap-5 md:grid-cols-3">
            {specialties.map((s, i) => (
              <li key={s.slug} className={i === 1 ? "md:translate-y-10" : ""}>
                <Link href={`/services/${s.slug}`} className="group block">
                  <span className="frame block">
                    <span className="frame__img block aspect-[4/5]">
                      <Image
                        src={s.hero.src}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        placeholder="blur"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        style={s.hero.focus ? { objectPosition: s.hero.focus } : undefined}
                      />
                    </span>
                  </span>
                  <span className="mono mt-4 block text-[0.68rem] text-lime">{s.formulaCode}</span>
                  <span className="display mt-1 block text-[2.6rem] leading-none group-hover:text-magenta">{s.name}</span>
                  <span className="mt-2 block text-paper/75">{s.label}</span>
                  <span className="mt-3 inline-flex items-center gap-2 font-semibold">
                    Explore <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="surface-paper py-20 lg:py-28" aria-labelledby="menu-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <FormulaLine code="Full menu" label="Starting prices" className="text-mute" />
              <h2 id="menu-title" className="display mt-5 text-[clamp(3rem,6vw,5.5rem)]">
                The whole menu
              </h2>
              <p className="mt-5">
                Prices are starting points from the live booking menu (checked {verified}). Final pricing depends on your
                hair&rsquo;s length, density and goals. Current pricing, deposits and availability always live in booking.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4">
                <BookButton />
                <a href={links.giftCards} className="link-u inline-flex items-center gap-2 font-semibold">
                  Buy a gift card <Arrow />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <MenuTable groups={menu} />
          </div>
        </div>
      </section>

      <FindYourFormula />

      <section className="surface-paper py-20 lg:py-28" aria-labelledby="faq-title">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <h2 id="faq-title" className="display text-[clamp(3rem,6vw,5.5rem)] lg:col-span-4">
            Good questions
          </h2>
          <Faq items={generalFaqs} className="lg:col-span-8" />
        </div>
      </section>
      <Closing />
    </>
  );
}

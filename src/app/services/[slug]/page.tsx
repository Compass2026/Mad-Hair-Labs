import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BookButton } from "@/components/BookButton";
import { Closing } from "@/components/Closing";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { MenuTable } from "@/components/MenuTable";
import { PageIntro } from "@/components/PageIntro";
import { Arrow, Frame, FormulaLine, Stamp } from "@/components/motifs";
import { reviews } from "@/content/reviews";
import { menu, specialties, specialty } from "@/content/services";
import { pageMeta } from "@/lib/meta";
import { faqSchema, serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return specialties.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = specialty(slug);
  if (!s) return {};
  return pageMeta({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

const reviewTag: Record<string, "extensions" | "color" | "cut"> = {
  "hair-extensions": "extensions",
  "color-and-blonding": "color",
  "haircuts-and-styling": "cut",
};

export default async function SpecialtyPage({ params }: Props) {
  const { slug } = await params;
  const s = specialty(slug);
  if (!s) notFound();

  const groups = menu.filter((g) => s.menuIds.includes(g.id));
  const quotes = reviews.filter((r) => r.tags.includes(reviewTag[s.slug])).slice(0, 2);
  const others = specialties.filter((x) => x.slug !== s.slug);

  return (
    <>
      <JsonLd data={[serviceSchema(s.name, s.metaDescription, `/services/${s.slug}`), faqSchema(s.faqs)]} />
      <PageIntro
        code={s.formulaCode}
        label={s.label}
        title={
          <>
            {s.name} <span className="block text-[0.42em] leading-none text-magenta">in Queen Creek, AZ</span>
          </>
        }
        crumbs={[
          { name: "Services", path: "/services" },
          { name: s.name, path: `/services/${s.slug}` },
        ]}
        aside={
          <Frame
            src={s.hero.src}
            alt={s.hero.alt}
            focus={s.hero.focus}
            priority
            sizes="(min-width: 1024px) 38vw, 100vw"
            imgClassName="aspect-[4/5] lg:aspect-square"
            plate={`Plate · ${s.formulaCode}`}
            caption={s.hero.title}
          />
        }
      >
        <p>{s.intro}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-cta-primary>
          <BookButton />
        </div>
      </PageIntro>

      {/* What's on offer */}
      <section className="surface-paper py-20 lg:py-28" aria-labelledby="offer-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <FormulaLine code="What we do" label={s.formulaCode} className="text-mute" />
            <h2 id="offer-title" className="display mt-5 text-[clamp(2.8rem,5.5vw,5rem)]">
              What&rsquo;s in the mix
            </h2>
          </div>
          <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {s.offered.map((o, i) => (
              <li key={o.title} className="reveal border-t-2 border-ink pt-4">
                <p className="mono text-magenta-ink">0{i + 1}</p>
                <h3 className="display mt-2 text-[2rem] leading-none">{o.title}</h3>
                <p className="mt-3">{o.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fit + consultation */}
      <section className="bg-char py-20 lg:py-28" aria-labelledby="fit-title">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <FormulaLine code="Good fit" label="If this sounds like you" className="text-chrome" />
            <h2 id="fit-title" className="display mt-5 text-[clamp(2.6rem,5vw,4.5rem)]">
              Is it right for you?
            </h2>
            <ul className="mt-8 space-y-4">
              {s.goodFit.map((g) => (
                <li key={g} className="flex gap-4 text-lg">
                  <span className="mt-2 h-3 w-3 shrink-0 rotate-45 bg-magenta" aria-hidden="true" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative border border-white/15 bg-ink p-7 lg:p-10">
            <Stamp className="absolute -top-5 right-5 text-lg text-lime" sub="Bring photos" tilt={6}>
              Consult
            </Stamp>
            <h2 className="display text-[clamp(2.2rem,4vw,3.4rem)]">Your consultation covers</h2>
            <ul className="mt-6 space-y-3">
              {s.consult.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-[0.6em] h-1.5 w-3 shrink-0 bg-lime" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-paper/75">
              A 30-minute consultation is on the booking menu at no charge.
            </p>
          </div>
        </div>
      </section>

      {/* Proof: photos, or one confirmed photo alongside client words */}
      <section className="bg-ink py-16 lg:py-20" aria-labelledby="work-title">
        <div className="wrap">
          <div className="flex items-end justify-between gap-6">
            <h2 id="work-title" className="display text-[clamp(2.4rem,5vw,4rem)]">
              From the setlist
            </h2>
            <Link href="/transformations" className="link-u hidden items-center gap-2 font-semibold sm:inline-flex">
              All transformations <Arrow />
            </Link>
          </div>
          {s.gallery.length >= 3 ? (
            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
              {s.gallery.map((g, i) => (
                <li key={g.id} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                  <div className="relative aspect-square overflow-hidden bg-smoke">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      placeholder="blur"
                      sizes={i === 0 ? "(min-width: 768px) 40vw, 100vw" : "(min-width: 768px) 20vw, 50vw"}
                      className="object-cover"
                      style={g.focus ? { objectPosition: g.focus } : undefined}
                    />
                  </div>
                  <p className="mono mt-2 text-[0.62rem] text-chrome">{g.title}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
              {s.gallery.map((g) => (
                <Frame
                  key={g.id}
                  src={g.src}
                  alt={g.alt}
                  focus={g.focus}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  imgClassName="aspect-square"
                  plate={`Plate · ${s.formulaCode}`}
                  caption={g.title}
                />
              ))}
              <div className="space-y-8">
                {quotes.map((q) => (
                  <figure key={q.id} className="border-l-2 border-magenta pl-6">
                    <blockquote className="display text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[0.98]">&ldquo;{q.quote}&rdquo;</blockquote>
                    <figcaption className="mono mt-3 text-chrome">
                      {q.name} · verified review on GlossGenius
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
          <Link href="/transformations" className="link-u mt-6 inline-flex items-center gap-2 font-semibold sm:hidden">
            All transformations <Arrow />
          </Link>
        </div>
      </section>

      {/* Maintenance + pricing + menu */}
      <section className="surface-paper py-20 lg:py-28" aria-labelledby="care-title">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FormulaLine code="Aftercare" label="Keep it fresh" className="text-mute" />
            <h2 id="care-title" className="display mt-5 text-[clamp(2.6rem,5vw,4.5rem)]">
              Maintenance
            </h2>
            <ul className="mt-6 space-y-4">
              {s.maintenance.map((m) => (
                <li key={m} className="border-l-2 border-magenta-ink pl-4">
                  {m}
                </li>
              ))}
            </ul>

            <h2 className="display mt-14 text-[clamp(2.6rem,5vw,4.5rem)]">Pricing</h2>
            <p className="mt-4">{s.pricing}</p>
            <div className="mt-8">
              <BookButton />
            </div>

            {s.gallery.length >= 3 && quotes.length > 0 && (
              <div className="mt-14 space-y-6">
                {quotes.map((q) => (
                  <figure key={q.id}>
                    <blockquote className="text-xl font-medium leading-snug">&ldquo;{q.quote}&rdquo;</blockquote>
                    <figcaption className="mono mt-2 text-mute">{q.name} · verified review</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
          <div className="lg:col-span-7">
            <MenuTable groups={groups} showLinks={false} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink py-20 lg:py-28" aria-labelledby="faq-title">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <h2 id="faq-title" className="display text-[clamp(2.8rem,5.5vw,5rem)] lg:col-span-4">
            {s.name}: FAQ
          </h2>
          <Faq items={s.faqs} className="lg:col-span-8" />
        </div>
        <div className="wrap mt-20">
          <p className="mono text-chrome">Also in the lab</p>
          <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-10">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="display inline-flex items-center gap-3 text-[2.2rem] hover:text-magenta">
                  {o.name} <Arrow />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Closing />
    </>
  );
}

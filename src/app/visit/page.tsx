import type { Metadata } from "next";

import { pageMeta } from "@/lib/meta";

import { BookButton } from "@/components/BookButton";
import { Closing } from "@/components/Closing";
import { Faq } from "@/components/Faq";
import { HoursTable } from "@/components/HoursTable";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { Arrow, FormulaLine } from "@/components/motifs";
import { business, fullAddress, links, policies } from "@/content/business";
import { generalFaqs } from "@/content/faq";
import { salon } from "@/content/media";
import { faqSchema } from "@/lib/schema";
import Image from "next/image";

export const metadata: Metadata = pageMeta({
  title: "Visit & Contact: Hours and Directions",
  description:
    "Mad Hair Lab is at 21455 South Ellsworth Road, Suite 47, Queen Creek, AZ 85142. Open Wednesday to Saturday. Call (480) 295-9787 or book online.",
  path: "/visit",
});

export default function VisitPage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <PageIntro
        code="Visit the lab"
        label={`${business.geo.lat.toFixed(4)}° N · ${Math.abs(business.geo.lng).toFixed(4)}° W`}
        title={
          <>
            Visit <span className="text-magenta">the lab</span>
          </>
        }
        crumbs={[{ name: "Visit", path: "/visit" }]}
      >
        <p>
          {fullAddress}. Welcoming clients from Queen Creek and the surrounding East Valley, Wednesday through Saturday.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-cta-primary>
          <BookButton />
          <a href={links.directions} className="btn btn-ghost">
            Get directions <Arrow />
          </a>
        </div>
      </PageIntro>

      <section className="surface-paper py-20 lg:py-28" aria-label="Location, hours and contact">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-ink bg-bone">
              <iframe
                title={`Map showing ${fullAddress}`}
                src={links.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <p className="mono mt-3 text-mute">{fullAddress}</p>
          </div>
          <div className="space-y-12 lg:col-span-5">
            <div>
              <FormulaLine code="Hours" label="America/Phoenix" className="text-mute" />
              <HoursTable className="mt-4 max-w-none" />
              <p className="mt-3 text-sm opacity-75">Appointments are booked online. Availability shows in real time in booking.</p>
            </div>
            <div>
              <FormulaLine code="Contact" label="Say hi" className="text-mute" />
              <ul className="mt-4 space-y-3 text-lg">
                <li>
                  <a className="link-u font-semibold" href={business.phone.href}>
                    {business.phone.display}
                  </a>
                </li>
                <li>
                  <a className="link-u break-all" href={`mailto:${business.email}`}>
                    {business.email}
                  </a>
                </li>
                <li>
                  <a className="link-u" href={links.contactForm}>
                    Send Elle a message
                  </a>
                </li>
                <li>
                  <a className="link-u" href={business.social.instagram}>
                    Instagram {business.social.instagramHandle}
                  </a>
                  {" · "}
                  <a className="link-u" href={business.social.facebook}>
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-char py-20 lg:py-28" aria-labelledby="before-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="before-title" className="display text-[clamp(3rem,6vw,5.5rem)]">
              Before you <span className="text-magenta">book</span>
            </h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="mono text-lime">Cancellations</dt>
                <dd className="mt-2 text-paper/85">{policies.cancellation}</dd>
              </div>
              <div>
                <dt className="mono text-lime">Extensions</dt>
                <dd className="mt-2 text-paper/85">{policies.extensionDeposit}</dd>
              </div>
              <div>
                <dt className="mono text-lime">Refunds</dt>
                <dd className="mt-2 text-paper/85">{policies.refunds}</dd>
              </div>
              <div>
                <dt className="mono text-lime">Gift cards</dt>
                <dd className="mt-2 text-paper/85">
                  <a className="link-u" href={links.giftCards}>
                    Buy a Mad Hair Lab gift card online
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative min-h-80 overflow-hidden lg:col-span-6 lg:col-start-7">
            <Image src={salon.stylingChair.src} alt={salon.stylingChair.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
        </div>
      </section>

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

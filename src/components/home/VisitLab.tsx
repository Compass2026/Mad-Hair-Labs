import Image from "next/image";
import Link from "next/link";

import { HoursTable } from "@/components/HoursTable";
import { Arrow, FormulaLine } from "@/components/motifs";
import { business, links } from "@/content/business";
import { salon } from "@/content/media";

export function VisitLab() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 lg:py-28" aria-labelledby="visit-title">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={salon.neonSign.src}
              alt={salon.neonSign.alt}
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              placeholder="blur"
              className="drift-y object-cover"
            />
          </div>
          <p className="mono mt-3 flex justify-between text-[0.68rem] text-chrome">
            <span>The lab · Suite 47</span>
            <span>Queen Creek, AZ</span>
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <FormulaLine code="Visit the lab" label={`${business.geo.lat.toFixed(4)}° N · ${Math.abs(business.geo.lng).toFixed(4)}° W`} className="text-chrome" />
          <h2 id="visit-title" className="display mt-5 text-[clamp(3.2rem,7vw,6.5rem)]">
            Come find us in <span className="text-magenta">Queen Creek.</span>
          </h2>

          <address className="mt-8 not-italic">
            <span className="display block text-[clamp(2rem,3.6vw,3rem)] leading-[0.95]">
              {business.address.street}
              <br />
              {business.address.suite}
            </span>
            <span className="mt-2 block text-lg text-paper/80">
              {business.address.city}, {business.address.regionName} {business.address.postalCode}
            </span>
          </address>

          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="mono text-chrome">Hours</p>
              <HoursTable className="mt-3" />
            </div>
            <div>
              <p className="mono text-chrome">Get in touch</p>
              <ul className="mt-3 space-y-3">
                <li>
                  <a href={links.directions} className="link-u inline-flex min-h-11 items-center gap-2 text-lg font-semibold">
                    Get directions <Arrow />
                  </a>
                </li>
                <li>
                  <a href={business.phone.href} className="link-u text-lg">
                    Call {business.phone.display}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`} className="link-u break-all text-lg">
                    {business.email}
                  </a>
                </li>
                <li>
                  <a href={business.social.instagram} className="link-u text-lg">
                    Instagram {business.social.instagramHandle}
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-sm text-paper/70">
                Welcoming clients from Queen Creek and the surrounding East Valley.
              </p>
              <Link href="/visit" className="link-u mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold">
                Visit &amp; contact details <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

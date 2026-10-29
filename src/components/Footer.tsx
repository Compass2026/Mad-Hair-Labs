import Image from "next/image";
import Link from "next/link";

import { business, fullAddress, links } from "@/content/business";
import { brand } from "@/content/media";
import { specialties } from "@/content/services";
import { HoursTable } from "./HoursTable";
import { FormulaLine } from "./motifs";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-char pt-16 pb-10">
      <div className="wrap">
        <FormulaLine code="MHL / END OF SHOW" label="Queen Creek, AZ" className="text-chrome" />
        <div className="mt-10 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Image src={brand.logo} alt="Mad Hair Lab logo" width={92} height={111} className="h-24 w-auto" />
            <p className="mt-5 max-w-xs text-[0.95rem] text-paper/80">
              Hair extensions, dimensional blonding, lived-in color and custom cuts by {business.owner.fullName} in
              Queen Creek, Arizona.
            </p>
          </div>

          <div>
            <h2 className="mono text-chrome">Visit</h2>
            <address className="mt-4 not-italic leading-relaxed">
              {business.address.street}
              <br />
              {business.address.suite}
              <br />
              {business.address.city}, {business.address.region} {business.address.postalCode}
            </address>
            <ul className="mt-4 space-y-1.5">
              <li>
                <a className="link-u" href={links.directions} aria-label={`Get directions to ${fullAddress}`}>
                  Get directions
                </a>
              </li>
              <li>
                <a className="link-u" href={business.phone.href}>
                  {business.phone.display}
                </a>
              </li>
              <li>
                <a className="link-u break-all" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mono text-chrome">Hours</h2>
            <HoursTable compact className="mt-4" />
          </div>

          <div>
            <h2 className="mono text-chrome">Explore</h2>
            <ul className="mt-4 space-y-1.5">
              <li><Link className="link-u" href="/services">All services &amp; pricing</Link></li>
              {specialties.map((s) => (
                <li key={s.slug}>
                  <Link className="link-u" href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
              <li><Link className="link-u" href="/transformations">Transformations</Link></li>
              <li><Link className="link-u" href="/meet-elle">Meet Elle</Link></li>
              <li><Link className="link-u" href="/visit">Visit &amp; contact</Link></li>
              <li><a className="link-u" href={links.giftCards}>Gift cards</a></li>
              <li><a className="link-u" href={links.book}>Book Your Appointment</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-6 text-sm text-paper/70 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Social">
            <li><a className="link-u" href={business.social.instagram}>Instagram {business.social.instagramHandle}</a></li>
            <li><a className="link-u" href={business.social.facebook}>Facebook</a></li>
            <li><a className="link-u" href={business.social.pinterest}>Pinterest</a></li>
            <li><a className="link-u" href={business.reviewsOnGoogle}>Google reviews</a></li>
          </ul>
          <p>
            © {new Date().getFullYear()} {business.listingName}. Online booking by GlossGenius.
          </p>
        </div>
      </div>
    </footer>
  );
}

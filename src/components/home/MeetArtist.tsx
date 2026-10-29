import Image from "next/image";
import Link from "next/link";

import { BookButton } from "@/components/BookButton";
import { Arrow, Frame, FormulaLine } from "@/components/motifs";
import { business } from "@/content/business";
import { portraits } from "@/content/media";

const inTheirWords = [
  { q: "Her placement and attention to detail is legendary.", who: "Anna" },
  { q: "She is honest and makes sure what you want will work or will go over your options.", who: "Sally Buck" },
  { q: "She is cheerful and a great conversationalist. No awkwardness here!!", who: "Kim" },
];

export function MeetArtist() {
  return (
    <section className="relative overflow-hidden bg-char py-20 lg:py-32" aria-labelledby="artist-title">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-5">
          <Frame
            src={portraits.elleBw.src}
            alt={portraits.elleBw.alt}
            sizes="(min-width: 1024px) 36vw, 90vw"
            imgClassName="aspect-[4/5] max-h-[80svh]"
            focus="50% 30%"
            plate="Portrait · Elle"
            caption="Owner & artist"
            className="mr-10 sm:mr-24 lg:mr-14"
          />

          {/* Backstage pass */}
          <div className="pass absolute -bottom-10 right-0 w-[13.5rem] rotate-[4deg] sm:w-60 lg:-right-6">
            <div className="flex items-start gap-3">
              <Image
                src={portraits.elle.src}
                alt=""
                width={72}
                height={72}
                sizes="72px"
                className="h-16 w-16 shrink-0 object-cover grayscale-[15%]"
              />
              <div>
                <p className="display text-[1.8rem] leading-none">{business.owner.displayName}</p>
                <p className="mono mt-1 text-[0.56rem] leading-snug text-mute">Owner</p>
              </div>
            </div>
            <p className="display mt-4 bg-magenta px-2 py-1 text-center text-lg text-ink">All Access</p>
            <ul className="mono mt-3 space-y-0.5 text-[0.58rem] text-ink/75">
              <li>Extension specialist</li>
              <li>Custom color expert</li>
              <li>Stylist educator</li>
            </ul>
            <div className="mt-3 h-6 bg-[repeating-linear-gradient(90deg,var(--color-ink)_0_2px,transparent_2px_4px,var(--color-ink)_4px_5px,transparent_5px_8px)]" aria-hidden="true" />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <FormulaLine code="Meet the artist" label="Queen Creek, AZ" className="text-chrome" />
          <h2 id="artist-title" className="display mt-5 text-[clamp(3.2rem,7vw,6.75rem)]">
            Meet the mind behind the <span className="text-magenta">madness.</span>
          </h2>
          <div className="prose-mh lede mt-7 max-w-xl text-paper/90">
            <p>
              Mad Hair Lab was founded by master hairstylist and global hair educator{" "}
              <strong className="font-semibold text-paper">{business.owner.fullName}</strong>. She&rsquo;s known for seamless,
              natural-looking extensions and dimensional color designed for the person wearing them.
            </p>
            <p>
              Her approach is simple: listen hard, be honest about what your hair can do, then build the cut, color and
              extensions to work together. The energy is loud. The work is precise.
            </p>
          </div>

          <figure className="mt-10 border-l-2 border-magenta pl-5">
            <figcaption className="mono text-[0.68rem] text-chrome">In her clients&rsquo; words</figcaption>
            <ul className="mt-3 space-y-3">
              {inTheirWords.map((r) => (
                <li key={r.who}>
                  <blockquote className="text-lg leading-snug">&ldquo;{r.q}&rdquo;</blockquote>
                  <p className="mt-1 text-sm text-paper/60">— {r.who}, verified review on GlossGenius</p>
                </li>
              ))}
            </ul>
          </figure>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/meet-elle" className="btn btn-ghost">
              Meet Elle <Arrow />
            </Link>
            <BookButton />
          </div>
        </div>
      </div>
    </section>
  );
}

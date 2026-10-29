import type { Metadata } from "next";

import { pageMeta } from "@/lib/meta";
import Image from "next/image";

import { BookButton } from "@/components/BookButton";
import { Closing } from "@/components/Closing";
import { PageIntro } from "@/components/PageIntro";
import { Arrow, Frame, FormulaLine, Stamp } from "@/components/motifs";
import { business, links } from "@/content/business";
import { portraits, salon } from "@/content/media";
import { reviewDate, reviews } from "@/content/reviews";

export const metadata: Metadata = pageMeta({
  title: "Meet Elle White, Owner & Stylist",
  description:
    "Meet Elle White, master hairstylist, global hair educator and owner of Mad Hair Lab in Queen Creek, AZ, known for seamless extensions and dimensional color.",
  path: "/meet-elle",
});

const principles = [
  {
    title: "Customized intentionally",
    body: "No one-size-fits-all formula. Color and extensions are designed around your features, lifestyle, maintenance preferences and long-term goals.",
  },
  {
    title: "Your own hair comes first",
    body: "From subtle fullness to dramatic length, every extension install is approached with the health and integrity of your natural hair in mind.",
  },
  {
    title: "One look, not three services",
    body: "Cut, color and extensions are planned to work together, so the finished result is seamless.",
  },
];

const voiceIds = [1035558, 975857, 898414, 899391];

export default function MeetEllePage() {
  const voices = reviews.filter((r) => voiceIds.includes(r.id));
  return (
    <>
      <PageIntro
        code="Meet the artist"
        label={business.owner.title}
        title={
          <>
            Meet the mind behind the <span className="text-magenta">madness.</span>
          </>
        }
        crumbs={[{ name: "Meet Elle", path: "/meet-elle" }]}
        aside={
          <div className="relative">
            <Frame
              src={portraits.elle.src}
              alt={portraits.elle.alt}
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              imgClassName="aspect-square"
              plate="Portrait · Elle"
              caption="Owner, Mad Hair Lab"
            />
            <Stamp className="absolute -bottom-4 -left-2 bg-ink/50 text-xl text-lime backdrop-blur-sm" sub="Queen Creek, AZ" tilt={-6}>
              All Access
            </Stamp>
          </div>
        }
      >
        <p>
          {business.owner.fullName} is the founder of Mad Hair Lab, a master hairstylist and global hair educator. She&rsquo;s
          known for seamless, natural-looking hair extensions and dimensional color designed specifically for the person
          wearing them.
        </p>
      </PageIntro>

      <section className="surface-paper py-20 lg:py-28" aria-labelledby="approach-title">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FormulaLine code="The approach" label="How Elle works" className="text-mute" />
            <h2 id="approach-title" className="display mt-5 text-[clamp(3rem,6vw,5.5rem)]">
              Big energy. <span className="text-magenta-ink">Precise hands.</span>
            </h2>
            <p className="lede mt-6">
              The personality is big. The work is careful. Clients come back to Elle because she
              listens, tells the truth about what will work, and explains every step.
            </p>
          </div>
          <ol className="space-y-10 lg:col-span-6 lg:col-start-7">
            {principles.map((p, i) => (
              <li key={p.title} className="reveal grid grid-cols-[3.5rem_1fr] gap-4 border-t-2 border-ink pt-5">
                <span className="display text-[2.6rem] leading-none text-magenta-ink">0{i + 1}</span>
                <div>
                  <h3 className="display text-[2.1rem] leading-none">{p.title}</h3>
                  <p className="mt-3">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="wrap mt-20">
          <figure className="border-y-2 border-ink py-10 text-center">
            <p className="mono text-mute">The house standard</p>
            <blockquote className="display mx-auto mt-4 max-w-5xl text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95]">
              Beautiful hair, customized intentionally and executed with craftsmanship and integrity.
            </blockquote>
            <figcaption className="mono mt-4 text-mute">From the Mad Hair Lab salon description</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-ink py-20 lg:py-28" aria-labelledby="backstage-title">
        <div className="wrap">
          <FormulaLine code="Backstage" label="Behind the chair" className="max-w-xl text-chrome" />
          <h2 id="backstage-title" className="display mt-5 text-[clamp(3rem,6vw,5.5rem)]">
            Behind the chair
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-12">
            <Frame
              src={salon.blowout.src}
              alt={salon.blowout.alt}
              sizes="(min-width: 768px) 42vw, 100vw"
              imgClassName="aspect-[2/3]"
              className="md:col-span-5"
              plate="Plate A · Blowout"
            />
            <div className="grid gap-5 md:col-span-7">
              <Frame
                src={portraits.elleBw.src}
                alt={portraits.elleBw.alt}
                sizes="(min-width: 768px) 28vw, 100vw"
                imgClassName="aspect-[4/5]"
                className="md:ml-auto md:w-3/5"
                focus="50% 25%"
                plate="Plate B · Elle"
              />
              <Frame
                src={salon.styling.src}
                alt={salon.styling.alt}
                sizes="(min-width: 768px) 50vw, 100vw"
                imgClassName="aspect-[16/10]"
                focus="50% 35%"
                plate="Plate C · Finishing touches"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-char py-20 lg:py-28" aria-labelledby="words-title">
        <div className="wrap">
          <h2 id="words-title" className="display text-[clamp(3rem,6vw,5.5rem)]">
            In her clients&rsquo; words
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {voices.map((r) => (
              <li key={r.id} className="border-l-2 border-magenta pl-6">
                <blockquote className="text-xl leading-snug">&ldquo;{r.quote}&rdquo;</blockquote>
                <p className="mono mt-3 text-chrome">
                  {r.name} · {reviewDate(r.date)} · GlossGenius
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <BookButton />
          </div>
        </div>
      </section>

      <section className="surface-paper py-20 lg:py-24" aria-labelledby="edu-title">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-square overflow-hidden lg:col-span-4">
            <Image src={salon.neonSign.src} alt={salon.neonSign.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" placeholder="blur" className="object-cover" />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FormulaLine code="For stylists" label="Education" className="text-mute" />
            <h2 id="edu-title" className="display mt-5 text-[clamp(2.6rem,5vw,4.5rem)]">
              Learning from Elle
            </h2>
            <p className="mt-5 max-w-2xl">
              Mad Hair Lab is also a home for professional hair extension and advanced color education in Arizona. Through
              hands-on education, mentorship and advanced training, Elle teaches stylists the techniques behind luxury
              extension work, dimensional color, consultations, pricing, client retention and building a profitable career
              behind the chair.
            </p>
            <a href={links.contactForm} className="link-u mt-6 inline-flex items-center gap-2 font-semibold">
              Ask Elle about education <Arrow />
            </a>
          </div>
        </div>
      </section>

      <Closing />
    </>
  );
}

import type { Metadata } from "next";

import { pageMeta } from "@/lib/meta";

import { BeforeAfter } from "@/components/BeforeAfter";
import { BookButton } from "@/components/BookButton";
import { Closing } from "@/components/Closing";
import { PageIntro } from "@/components/PageIntro";
import { SetlistGallery } from "@/components/SetlistGallery";
import { Stamp } from "@/components/motifs";
import { pairs, shots } from "@/content/media";

export const metadata: Metadata = pageMeta({
  title: "Hair Color & Extension Transformations",
  description:
    "The Transformation Setlist: lived-in blondes, dimensional brunettes, copper, vivids, extension work and cuts from Mad Hair Lab in Queen Creek, AZ.",
  path: "/transformations",
});

export default function TransformationsPage() {
  return (
    <>
      <PageIntro
        code="Full album"
        label={`${shots.length} tracks`}
        title={
          <>
            The Transformation <span className="text-magenta">Setlist</span>
          </>
        }
        crumbs={[{ name: "Transformations", path: "/transformations" }]}
        aside={
          <div className="flex flex-col items-start gap-6 lg:items-end">
            <Stamp className="text-xl text-lime" sub="From the Mad Hair Lab chair" tilt={5}>
              Real Work Only
            </Stamp>
            <BookButton />
          </div>
        }
      >
        <p>
          Real work from the Mad Hair Lab chair, from barely-there brightness to big, bold color, plus a few moments from
          behind the chair. Filter by what you&rsquo;re dreaming of, then tap any photo for a closer look.
        </p>
      </PageIntro>

      <section className="bg-ink pb-24" aria-label="Gallery">
        <div className="wrap">
          <SetlistGallery items={shots} />
        </div>
      </section>

      {pairs.length > 0 && (
        <section className="bg-char py-20" aria-labelledby="ba-title">
          <div className="wrap">
            <h2 id="ba-title" className="display text-[clamp(3rem,7vw,6rem)]">
              Before &amp; after
            </h2>
            <div className="mt-10 grid gap-12 md:grid-cols-2">
              {pairs.map((p) => (
                <BeforeAfter key={p.id} pair={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Closing />
    </>
  );
}

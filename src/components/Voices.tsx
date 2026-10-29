import { Arrow, FormulaLine, Stamp } from "@/components/motifs";
import { business } from "@/content/business";
import { reviewDate, reviews, reviewSummary } from "@/content/reviews";

export function Voices({ limit = 6, title = "Client voices" }: { limit?: number; title?: string }) {
  const [lead, ...rest] = reviews;
  return (
    <section className="surface-paper relative overflow-hidden py-20 lg:py-28" aria-labelledby="voices-title">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FormulaLine code="Field notes" label="Verified reviews" className="max-w-md text-mute" />
            <h2 id="voices-title" className="display mt-5 text-[clamp(3.4rem,9vw,8rem)]">
              {title}
            </h2>
          </div>
          <Stamp className="self-start text-[1.6rem] text-magenta-ink md:self-auto" sub={`${reviewSummary.count} reviews · ${reviewSummary.source}`} tilt={-5}>
            ★★★★★ {reviewSummary.rating.toFixed(1)}
          </Stamp>
        </div>

        <figure className="reveal mt-12 grid gap-6 lg:grid-cols-12">
          <span className="display text-[9rem] leading-[0.6] text-magenta lg:col-span-1 lg:text-[12rem]" aria-hidden="true">
            &ldquo;
          </span>
          <div className="lg:col-span-10">
            <blockquote className="display text-[clamp(2.4rem,5.6vw,5.25rem)] leading-[0.95]">{lead.quote}</blockquote>
            <figcaption className="mono mt-6 text-mute">
              {lead.name} · {reviewDate(lead.date)} · via {reviewSummary.source}
            </figcaption>
          </div>
        </figure>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-14">
          {rest.slice(0, limit - 1).map((r, i) => (
            <li
              key={r.id}
              className={`reveal relative flex flex-col justify-between border-2 border-ink bg-paper p-6 ${i % 3 === 1 ? "lg:translate-y-8" : ""}`}
            >
              <span className="absolute -top-px right-8 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-ink bg-paper" aria-hidden="true" />
              <blockquote className="text-[1.05rem] leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
              <p className="mono mt-6 border-t-2 border-dashed border-ink/30 pt-3 text-[0.68rem] text-mute">
                {r.name} · {reviewDate(r.date)}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-14 max-w-2xl text-sm text-ink/70">
          Quoted exactly from reviews published on the Mad Hair Lab GlossGenius profile; “…” marks a shortened review.{" "}
          <a className="link-u inline-flex items-center gap-1 font-semibold text-ink" href={business.reviewsOnGoogle}>
            Read reviews on Google <Arrow />
          </a>
        </p>
      </div>
    </section>
  );
}

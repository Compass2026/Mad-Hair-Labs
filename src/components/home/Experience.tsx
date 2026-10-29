import { BackstageVideo } from "@/components/BackstageVideo";
import { BookButton } from "@/components/BookButton";
import { FormulaLine, Stamp } from "@/components/motifs";
import { policies } from "@/content/business";

const steps = [
  {
    n: "01",
    title: "The consultation",
    body: "Start with a complimentary 30-minute consultation, or talk it through at the start of your appointment. Your hair history, your goals, how much upkeep you actually want.",
  },
  {
    n: "02",
    title: "Your formula",
    body: "A plan built for you: the right service, technique and extension method if you want one, plus an honest read on whether your goal fits one visit or a few. Extension appointments take a deposit that goes toward your final ticket.",
  },
  {
    n: "03",
    title: "Showtime",
    body: "The appointment itself, with Elle behind the chair. Book an Advanced Haircut and it comes with shampoo, deep conditioning, a scalp and neck massage, a hot towel and a voluminous blowout.",
  },
  {
    n: "04",
    title: "The encore",
    body: "Leave knowing how to care for it at home and when to come back, so the color stays rich and the extensions stay seamless.",
  },
];

export function Experience() {
  return (
    <section className="relative bg-ink py-20 lg:py-32" aria-labelledby="experience-title">
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <FormulaLine code="The experience" label="Consult → encore" className="text-chrome" />
            <h2 id="experience-title" className="display mt-5 text-[clamp(3.2rem,7vw,6.5rem)]">
              From first consult to <span className="text-magenta">encore.</span>
            </h2>
            <div className="relative mt-10 max-w-md">
              <BackstageVideo className="aspect-square border border-white/10" />
              <Stamp className="absolute -right-3 -top-5 text-lg text-magenta sm:-right-6" sub="Behind the chair" tilt={8}>
                Backstage
              </Stamp>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ol className="relative space-y-12 border-l border-white/15 pl-8 lg:space-y-16 lg:pl-12">
            {steps.map((s) => (
              <li key={s.n} className="reveal relative">
                <span className="absolute -left-[2.45rem] top-1 grid h-4 w-4 place-items-center rounded-full bg-ink ring-1 ring-white/30 lg:-left-[3.45rem]" aria-hidden="true">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                </span>
                <p className="mono text-lime">Step {s.n}</p>
                <h3 className="display mt-2 text-[clamp(2.2rem,4vw,3.4rem)]">{s.title}</h3>
                <p className="mt-3 max-w-xl text-lg text-paper/85">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 border border-white/15 p-6">
            <p className="mono text-chrome">The fine print</p>
            <p className="mt-3 text-[0.95rem] text-paper/80">{policies.cancellation}</p>
            <p className="mt-2 text-[0.95rem] text-paper/80">{policies.refunds}</p>
            <div className="mt-6">
              <BookButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

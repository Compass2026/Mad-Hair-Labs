"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { formulaOptions } from "@/content/formula";
import { BookButton } from "./BookButton";
import { Arrow, Frame, FormulaLine } from "./motifs";

/**
 * Signature moment A. A service guide styled like a mixing console of formula labels.
 * Native radio inputs give arrow-key, touch and screen reader support for free.
 */
export function FindYourFormula({ headingLevel = "h2" }: { headingLevel?: "h2" | "h3" }) {
  const [selected, setSelected] = useState(formulaOptions[0].id);
  const name = useId();
  const opt = formulaOptions.find((o) => o.id === selected) ?? formulaOptions[0];
  const index = formulaOptions.indexOf(opt);
  const Heading = headingLevel;

  return (
    <section id="find-your-formula" className="relative overflow-hidden bg-ink py-20 lg:py-28" aria-labelledby="formula-title">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[34rem] w-[34rem] rounded-full opacity-30 blur-3xl transition-colors duration-700"
        style={{ background: `radial-gradient(closest-side, ${opt.swatch}, transparent)` }}
        aria-hidden="true"
      />
      <div className="wrap relative grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <FormulaLine code="Signature No. 01" label="Find your formula" className="text-chrome" />
          <Heading id="formula-title" className="display mt-5 text-[clamp(3.2rem,11vw,5.6rem)] lg:text-[clamp(3.4rem,5.6vw,5.6rem)]">
            <span className="block whitespace-nowrap">What are we</span>
            <span className="block text-magenta">creating?</span>
          </Heading>
          <p className="mt-5 max-w-md text-paper/80">
            Pick a goal. You&rsquo;ll see the matching service, what to talk about at your consultation, and where to book.
            No forms, no quiz, no pressure.
          </p>

          <fieldset className="mt-8">
            <legend className="visually-hidden">What are we creating? Choose a goal</legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-2.5">
              {formulaOptions.map((o, i) => (
                <label
                  key={o.id}
                  className="group relative flex min-h-[3.75rem] cursor-pointer items-center gap-3 border last:col-span-2 sm:min-h-[4.25rem] sm:gap-4 sm:last:col-span-1 border-white/15 bg-char/70 px-3 py-2.5 transition-[background-color,border-color,transform] duration-200 hover:border-white/40 sm:px-4 sm:py-3 sm:has-[:checked]:translate-x-1.5 has-[:checked]:border-magenta has-[:checked]:bg-smoke has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-lime"
                >
                  <input
                    type="radio"
                    name={name}
                    value={o.id}
                    checked={selected === o.id}
                    onChange={() => setSelected(o.id)}
                    className="visually-hidden"
                  />
                  <span
                    className="h-5 w-5 shrink-0 rounded-full border-2 sm:h-7 sm:w-7 border-white/30 shadow-[inset_0_-4px_6px_rgb(0_0_0/0.35)] group-has-[:checked]:border-paper"
                    style={{ background: o.swatch }}
                    aria-hidden="true"
                  />
                  <span className="flex min-w-0 flex-col">
                    <span className="mono text-[0.62rem] text-chrome">
                      No. {String(i + 1).padStart(2, "0")} · {o.code}
                    </span>
                    <span className="display text-[1.15rem] leading-[1.05] sm:text-[1.8rem]">{o.want}</span>
                  </span>
                  <span
                    className="mono ml-auto hidden shrink-0 text-[0.62rem] text-lime sm:group-has-[:checked]:inline"
                    aria-hidden="true"
                  >
                    ● Mixing
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="lg:col-span-7 lg:pl-6">
          <p className="visually-hidden" aria-live="polite">
            Showing {opt.service} for {opt.want}.
          </p>
          <div key={opt.id} className="swap-in grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
            <Frame
              src={opt.image.src}
              alt={opt.image.alt}
              focus={opt.image.focus}
              sizes="(min-width: 1024px) 26vw, (min-width: 768px) 42vw, 100vw"
              imgClassName="aspect-[16/10] md:aspect-[4/5]"
              plate={`F-${String(index + 1).padStart(2, "0")} · ${opt.code}`}
              caption={opt.image.title}
            />

            <div>
              <p className="mono text-[0.7rem] text-chrome">Your service</p>
              <h3 className="display mt-2 text-[clamp(2.6rem,5vw,4rem)] text-paper">{opt.service}</h3>
              <div className="mt-4 h-2 w-full overflow-hidden bg-white/10" aria-hidden="true">
                <div
                  className="pour h-full"
                  style={{ background: `linear-gradient(90deg, ${opt.swatch}, var(--color-magenta) 70%, var(--color-violet))` }}
                />
              </div>
              <p className="mt-5 text-lg text-paper/90">{opt.explainer}</p>

              <p className="mono mt-6 text-[0.7rem] text-chrome">On the menu</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {opt.servicesOnMenu.map((s) => (
                  <li key={s} className="border border-white/20 px-2.5 py-1 text-sm">
                    {s}
                  </li>
                ))}
              </ul>

              <p className="mono mt-6 text-[0.7rem] text-chrome">Talk about at your consultation</p>
              <ul className="mt-3 space-y-2">
                {opt.discuss.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-[0.55em] h-1.5 w-3 shrink-0 bg-lime" aria-hidden="true" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <BookButton />
                {opt.page && (
                  <Link href={opt.page} className="link-u inline-flex min-h-11 items-center gap-2 font-semibold sm:ml-2">
                    {opt.pageLabel} <Arrow />
                  </Link>
                )}
              </div>
              <p className="mt-6 text-sm text-paper/60">
                A starting point, not a diagnosis. Your consultation sets the plan. Current pricing and availability are in
                booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BookButton } from "@/components/BookButton";
import { FormulaLine, TornEdge } from "@/components/motifs";
import { business, hoursSummary } from "@/content/business";

export function Closing() {
  return (
    <section className="surface-magenta relative pb-20 pt-6 lg:pb-28" aria-labelledby="closing-title">
      <TornEdge fill="var(--color-magenta)" className="absolute inset-x-0 -top-[clamp(18px,2.4vw,34px)] translate-y-px" />
      <div className="wrap pt-14 lg:pt-20">
        <FormulaLine code="Final call" label="Doors open Wed – Sat" dots={["var(--color-ink)", "var(--color-paper)", "var(--color-lime)"]} className="max-w-xl" />
        <h2 id="closing-title" className="display mt-6 text-[clamp(3.3rem,13vw,10.5rem)] lg:text-[clamp(6rem,9.6vw,10.5rem)]">
          <span className="block">Your next</span>
          <span className="block whitespace-nowrap">great hair day</span>
          <span className="block text-paper">starts here.</span>
        </h2>
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10" data-cta-primary>
          <BookButton size="lg" />
          <p className="max-w-sm font-medium">
            {hoursSummary} · {business.address.city}, {business.address.region}. Booking opens our live GlossGenius
            calendar with current services and pricing.
          </p>
        </div>
      </div>
    </section>
  );
}

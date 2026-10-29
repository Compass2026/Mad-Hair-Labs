import type { FaqItem } from "@/content/services";

export function Faq({ items, className = "" }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={`divide-y divide-current/15 border-y border-current/15 ${className}`}>
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex min-h-14 items-center justify-between gap-6 py-4 text-left text-lg font-semibold">
            <h3>{f.q}</h3>
            <span className="faq-plus grid h-8 w-8 shrink-0 place-items-center text-2xl leading-none transition-transform" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 opacity-85">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

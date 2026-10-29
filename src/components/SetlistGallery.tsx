"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { categoryLabels, type Category, type Shot } from "@/content/media";

const MIN_FOR_FILTER = 3;

/**
 * Signature moment B. An album-collection gallery of finished work with category filters
 * (only for categories with enough photos) and a keyboard-friendly viewer.
 */
export function SetlistGallery({ items }: { items: Shot[] }) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const filters = useMemo(() => {
    const counts = new Map<Category, number>();
    items.forEach((s) => counts.set(s.category, (counts.get(s.category) ?? 0) + 1));
    return (Object.keys(categoryLabels) as Category[])
      .filter((c) => (counts.get(c) ?? 0) >= MIN_FOR_FILTER)
      .map((c) => ({ id: c, label: categoryLabels[c], count: counts.get(c) ?? 0 }));
  }, [items]);

  const visible = useMemo(() => (filter === "all" ? items : items.filter((s) => s.category === filter)), [filter, items]);
  const current = openIndex !== null ? visible[openIndex] : null;

  const open = (i: number, el: HTMLButtonElement) => {
    lastTrigger.current = el;
    setOpenIndex(i);
  };

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const step = useCallback(
    (d: number) => setOpenIndex((i) => (i === null ? i : (i + d + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (openIndex !== null && !dlg.open) dlg.showModal();
  }, [openIndex]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter transformations">
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")} label="All tracks" count={items.length} />
        {filters.map((f) => (
          <FilterButton key={f.id} active={filter === f.id} onClick={() => setFilter(f.id)} label={f.label} count={f.count} />
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "photo" : "photos"}
        {filter !== "all" ? ` in ${categoryLabels[filter]}` : ""}.
      </p>

      <ol className="mt-10 grid grid-flow-dense grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-4 md:gap-x-5 md:gap-y-8 xl:grid-cols-6">
        {visible.map((s, i) => {
          const featured = i % 7 === 0;
          return (
            <li key={s.id} className={featured ? "col-span-2 md:row-span-2" : ""}>
              <button
                type="button"
                onClick={(e) => open(i, e.currentTarget)}
                className="group block w-full text-left"
                aria-haspopup="dialog"
              >
                <span className="relative block aspect-square overflow-hidden bg-smoke shadow-[0_18px_30px_-18px_rgb(0_0_0/0.9)]">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    placeholder="blur"
                    sizes={featured ? "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 16vw, (min-width: 768px) 25vw, 50vw"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    style={s.focus ? { objectPosition: s.focus } : undefined}
                  />
                  {/* vinyl sleeve sheen */}
                  <span className="absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,rgb(255_255_255/0.12)_50%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                </span>
                <span className="mt-2.5 flex items-baseline gap-2">
                  <span className="mono shrink-0 text-[0.65rem] text-magenta">{String(i + 1).padStart(2, "0")}</span>
                  <span className={`font-semibold leading-snug ${featured ? "text-lg" : "text-[0.95rem]"}`}>{s.title}</span>
                </span>
                <span className="mono mt-0.5 block pl-6 text-[0.6rem] text-chrome">{categoryLabels[s.category]}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <dialog
        ref={dialogRef}
        onClose={() => {
          setOpenIndex(null);
          lastTrigger.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        aria-labelledby="viewer-title"
        className="m-auto max-h-[100svh] w-[min(100vw,72rem)] max-w-none bg-transparent p-0 text-paper backdrop:bg-ink/90 backdrop:backdrop-blur-sm"
      >
        {current && openIndex !== null && (
          <div className="grid gap-4 p-3 sm:p-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div className="relative mx-auto aspect-square max-h-[72svh] w-full max-w-[72svh] bg-smoke">
              <Image
                key={current.id}
                src={current.src}
                alt={current.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                placeholder="blur"
                className="swap-in object-contain"
              />
            </div>
            <div className="bg-ink/70 p-4 lg:bg-transparent lg:p-0">
              <p className="mono text-[0.68rem] text-lime">
                Track {String(openIndex + 1).padStart(2, "0")} of {String(visible.length).padStart(2, "0")} ·{" "}
                {categoryLabels[current.category]}
              </p>
              <h2 id="viewer-title" className="display mt-2 text-[2.4rem] leading-none">
                {current.title}
              </h2>
              <p className="mt-3 text-sm text-paper/75">{current.alt}.</p>
              <div className="mt-5 flex gap-2">
                <button type="button" onClick={() => step(-1)} className="btn btn-ghost min-h-11 flex-1 px-3 text-base" aria-label="Previous photo">
                  ← Prev
                </button>
                <button type="button" onClick={() => step(1)} className="btn btn-ghost min-h-11 flex-1 px-3 text-base" aria-label="Next photo">
                  Next →
                </button>
              </div>
              <button type="button" onClick={close} className="btn btn-primary mt-2 min-h-11 w-full text-base" autoFocus>
                Close
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

function FilterButton({ active, onClick, label, count }: { active: boolean; onClick: () => void; label: string; count: number }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center gap-2 border px-4 text-[0.95rem] font-medium transition-colors ${
        active ? "border-magenta bg-magenta text-ink" : "border-white/25 hover:border-paper"
      }`}
    >
      {label}
      <span className={`mono text-[0.62rem] ${active ? "text-ink" : "text-chrome"}`}>{count}</span>
    </button>
  );
}

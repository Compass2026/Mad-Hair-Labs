"use client";

import Image from "next/image";
import { useId, useState } from "react";

import type { Pair } from "@/content/media";

/**
 * Before/after comparison. Only rendered for pairs confirmed to show the same client and
 * transformation. A native range input drives it (keyboard, touch and screen readers),
 * and both photos are also listed side by side as a readable alternative.
 */
export function BeforeAfter({ pair }: { pair: Pair }) {
  const [pos, setPos] = useState(50);
  const id = useId();
  return (
    <figure>
      <div className="relative aspect-[4/5] overflow-hidden bg-smoke">
        <Image src={pair.after.src} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <Image src={pair.before.src} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-paper" style={{ left: `${pos}%` }} aria-hidden="true" />
        <span className="mono absolute left-3 top-3 bg-ink/80 px-2 py-1 text-[0.65rem]">Before</span>
        <span className="mono absolute right-3 top-3 bg-ink/80 px-2 py-1 text-[0.65rem]">After</span>
      </div>
      <label htmlFor={id} className="mono mt-3 block text-[0.68rem] text-chrome">
        Drag or use arrow keys to compare
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-valuetext={`${pos}% before, ${100 - pos}% after`}
        className="mt-2 w-full accent-[var(--color-magenta)]"
      />
      <figcaption className="mt-3">{pair.caption}</figcaption>
      <details className="mt-3 text-sm">
        <summary className="link-u">View both photos</summary>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <Image src={pair.before.src} alt={`Before: ${pair.before.alt}`} sizes="50vw" className="h-auto w-full" />
          <Image src={pair.after.src} alt={`After: ${pair.after.alt}`} sizes="50vw" className="h-auto w-full" />
        </div>
      </details>
    </figure>
  );
}

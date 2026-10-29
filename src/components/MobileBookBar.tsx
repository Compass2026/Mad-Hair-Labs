"use client";

import { useEffect, useState } from "react";

import { business, links } from "@/content/business";
import { Arrow } from "./motifs";

/**
 * Slim booking bar for phones and tablets. Body has matching bottom padding so it never
 * covers content. It stays out of the way while a primary booking button is on screen.
 */
export function MobileBookBar() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll("[data-cta-primary]"));
    if (!targets.length || !("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setHidden(false));
      return () => cancelAnimationFrame(raf);
    }
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setHidden(visible.size > 0);
      },
      { threshold: 0.2 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <aside
      aria-label="Quick booking"
      data-bookbar
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/90 px-3 pt-2.5 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
      aria-hidden={hidden || undefined}
      inert={hidden || undefined}
    >
      <div className="mx-auto flex max-w-xl items-center gap-2">
        <a href={links.book} className="btn btn-primary min-h-12 flex-1 text-[1.05rem]" data-cta="book">
          Book Your Appointment <Arrow />
        </a>
        <a
          href={business.phone.href}
          className="grid h-12 w-12 shrink-0 place-items-center border border-white/25 text-paper"
          aria-label={`Call ${business.name} at ${business.phone.display}`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2" />
          </svg>
        </a>
      </div>
    </aside>
  );
}

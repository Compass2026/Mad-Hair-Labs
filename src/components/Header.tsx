"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { business, hoursSummary, links } from "@/content/business";
import { brand } from "@/content/media";
import { Arrow } from "./motifs";

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/transformations", label: "Transformations" },
  { href: "/meet-elle", label: "Meet Elle" },
  { href: "/visit", label: "Visit" },
];

export function Header() {
  const pathname = usePathname();
  // The menu is open for the path it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean | ((o: boolean) => boolean)) =>
    setOpenOn((typeof next === "function" ? next(open) : next) ? pathname : null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenOn(null);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink">
      <a
        href="#main"
        className="btn btn-primary absolute left-3 top-3 z-[60] -translate-y-[200%] focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="wrap flex h-[4.25rem] items-center gap-4 lg:h-[4.75rem]">
        <Link href="/" className="flex items-center gap-3">
          <Image src={brand.logo} alt="" width={46} height={56} priority className="h-11 w-auto lg:h-12" />
          <span className="sr-only leading-none sm:not-sr-only sm:flex sm:flex-col">
            <span className="display text-[1.35rem] tracking-wide">Mad Hair Lab</span>
            <span className="mono mt-1 text-[0.62rem] text-chrome">Hair Salon · Queen Creek, AZ</span>
          </span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-3 py-2 text-[0.95rem] font-medium transition-colors hover:text-magenta ${
                      active ? "text-magenta" : "text-paper"
                    }`}
                  >
                    {item.label}
                    {active && <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-magenta" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href={links.book} className="btn btn-primary ml-auto min-h-11 px-4 py-2 text-base lg:ml-4" data-cta="book">
          <span className="sm:hidden">Book</span>
          <span className="hidden sm:inline">Book Your Appointment</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 grid h-11 w-11 place-items-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-paper transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-6 bg-paper transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>
    </header>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[4.25rem] z-40 overflow-y-auto bg-ink lg:hidden"
      >
        <div className="stage-light opacity-40" aria-hidden="true" />
        <nav aria-label="Mobile" className="wrap relative flex min-h-full flex-col py-8">
          <ul className="space-y-1">
            {[{ href: "/", label: "Home" }, ...nav].map((item, i) => (
              <li key={item.href} className="border-b border-white/10">
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="display flex items-baseline justify-between py-3 text-[2.6rem] aria-[current=page]:text-magenta"
                >
                  {item.label}
                  <span className="mono text-chrome">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-4 pt-10">
            <p className="mono text-chrome">{hoursSummary}</p>
            <a href={business.phone.href} className="link-u block text-lg">
              {business.phone.display}
            </a>
            <a href={links.book} className="btn btn-primary w-full" data-cta="book">
              Book Your Appointment <Arrow />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

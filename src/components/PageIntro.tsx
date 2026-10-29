import Link from "next/link";
import type { ReactNode } from "react";

import { JsonLd } from "./JsonLd";
import { FormulaLine } from "./motifs";
import { breadcrumbSchema } from "@/lib/schema";

export function PageIntro({
  code,
  label,
  title,
  children,
  crumbs,
  aside,
}: {
  code: string;
  label?: string;
  title: ReactNode;
  children?: ReactNode;
  crumbs: { name: string; path: string }[];
  aside?: ReactNode;
}) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <section className="grain relative overflow-hidden bg-ink pb-16 pt-8 lg:pb-24 lg:pt-12">
      <JsonLd data={breadcrumbSchema(all)} />
      <div className="stage-light opacity-40" aria-hidden="true" />
      <div className="wrap relative">
        <nav aria-label="Breadcrumb" className="mono text-[0.68rem] text-chrome">
          <ol className="flex flex-wrap gap-2">
            {all.map((c, i) => (
              <li key={c.path} className="flex gap-2">
                {i < all.length - 1 ? (
                  <>
                    <Link href={c.path} className="hover:text-paper">
                      {c.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                ) : (
                  <span aria-current="page" className="text-paper">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className={`mt-10 grid gap-10 ${aside ? "lg:grid-cols-12 lg:items-end" : ""}`}>
          <div className={aside ? "lg:col-span-7" : ""}>
            <FormulaLine code={code} label={label} className="max-w-xl text-chrome" />
            <h1 className="display mt-5 text-[clamp(3.4rem,9vw,8.75rem)]">{title}</h1>
            {children && <div className="lede mt-6 max-w-2xl text-paper/85">{children}</div>}
          </div>
          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
      </div>
    </section>
  );
}

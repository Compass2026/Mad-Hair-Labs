import Link from "next/link";

import { formatMinutes, type MenuGroup } from "@/content/services";
import { Arrow } from "./motifs";

/** Price list mirrored from GlossGenius. `null` prices send people to booking. */
export function MenuTable({ groups, showLinks = true }: { groups: MenuGroup[]; showLinks?: boolean }) {
  return (
    <div className="space-y-14">
      {groups.map((g) => (
        <section key={g.id} aria-labelledby={`menu-${g.id}`}>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-current pb-3">
            <h3 id={`menu-${g.id}`} className="display text-[clamp(2rem,4vw,3rem)]">
              {g.name}
            </h3>
            {showLinks && g.page && (
              <Link href={`/services/${g.page}`} className="link-u inline-flex items-center gap-2 text-sm font-semibold">
                Learn more <Arrow />
              </Link>
            )}
          </div>
          {g.description && <p className="mt-4 max-w-3xl opacity-80">{g.description}</p>}
          <table className="mt-4 w-full border-collapse">
            <caption className="visually-hidden">{g.name} prices and times</caption>
            <thead className="visually-hidden">
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Time</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {g.items.map((it) => (
                <tr key={it.name} className="border-b border-current/15 align-baseline">
                  <th scope="row" className="py-3.5 pr-4 text-left text-[1.05rem] font-semibold">
                    {it.name}
                    {it.note && <span className="mt-0.5 block text-sm font-normal opacity-70">{it.note}</span>}
                  </th>
                  <td className="mono whitespace-nowrap py-3.5 pr-4 text-right text-[0.7rem] opacity-70">{formatMinutes(it.minutes)}</td>
                  <td className="whitespace-nowrap py-3.5 text-right font-semibold tabular-nums">
                    {it.price ?? <span className="text-sm font-normal opacity-80">Priced at consult</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}

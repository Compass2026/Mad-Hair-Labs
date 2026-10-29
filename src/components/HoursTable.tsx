import { formatTime, hours } from "@/content/business";

export function HoursTable({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <table className={`w-full max-w-sm border-collapse ${compact ? "text-[0.95rem]" : "text-base"} ${className}`}>
      <caption className="visually-hidden">Business hours</caption>
      <tbody>
        {hours.map((d) => (
          <tr key={d.day} className={compact ? "" : "border-b border-current/15"}>
            <th scope="row" className={`text-left font-medium ${compact ? "py-0.5" : "py-2.5"}`}>
              {compact ? d.short : d.day}
            </th>
            <td className={`text-right tabular-nums ${d.open ? "" : "opacity-60"} ${compact ? "py-0.5" : "py-2.5"}`}>
              {d.open && d.close ? `${formatTime(d.open)} – ${formatTime(d.close)}` : "Closed"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

import { links } from "@/content/business";
import { Arrow } from "./motifs";

type Props = {
  label?: string;
  variant?: "primary" | "ghost";
  className?: string;
  size?: "md" | "lg";
};

/** Every booking CTA on the site. Always the live GlossGenius booking page. */
export function BookButton({ label = "Book Your Appointment", variant = "primary", className = "", size = "md" }: Props) {
  return (
    <a
      href={links.book}
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${size === "lg" ? "text-[1.35rem] min-h-[3.75rem] px-7" : ""} ${className}`}
      data-cta="book"
    >
      {label}
      <Arrow />
    </a>
  );
}

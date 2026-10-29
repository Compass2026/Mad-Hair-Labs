import Image, { type StaticImageData } from "next/image";
import type { CSSProperties, ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`arrow h-[0.8em] w-[0.8em] shrink-0 ${className}`} viewBox="0 0 16 16" aria-hidden="true" fill="none">
      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

/** Motif 1 — a measured formula line with a code, a ruler and swatch dots. */
export function FormulaLine({
  code,
  label,
  dots = ["var(--color-magenta)", "var(--color-violet)", "var(--color-lime)"],
  className = "",
}: {
  code: string;
  label?: ReactNode;
  dots?: string[];
  className?: string;
}) {
  return (
    <div className={`formula ${className}`}>
      <span className="whitespace-nowrap">{code}</span>
      <span className="formula__rule" aria-hidden="true" />
      {label && <span className="whitespace-nowrap">{label}</span>}
      {dots.length > 0 && (
        <span className="formula__dots" aria-hidden="true">
          {dots.map((d, i) => (
            <i key={i} style={{ background: d }} />
          ))}
        </span>
      )}
    </div>
  );
}

/** Motif 2 — an inked backstage stamp. */
export function Stamp({
  children,
  sub,
  tilt = -4,
  className = "",
  color,
}: {
  children: ReactNode;
  sub?: ReactNode;
  tilt?: number;
  className?: string;
  color?: string;
}) {
  return (
    <span className={`stamp ${className}`} style={{ "--tilt": `${tilt}deg`, ...(color ? { "--stamp": color } : {}) } as CSSProperties}>
      <span>{children}</span>
      {sub && <small>{sub}</small>}
    </span>
  );
}

/** Motif 3 — editorial photo frame with crop marks and a plate caption. */
export function Frame({
  src,
  alt,
  plate,
  caption,
  sizes,
  className = "",
  imgClassName = "",
  priority = false,
  focus,
  aspect,
  capClassName = "",
}: {
  src: StaticImageData;
  alt: string;
  plate?: string;
  caption?: ReactNode;
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  focus?: string;
  aspect?: string;
  capClassName?: string;
}) {
  return (
    <figure className={`frame ${className}`}>
      <div className={`frame__img ${imgClassName}`} style={aspect ? { aspectRatio: aspect } : undefined}>
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          className="h-full w-full object-cover"
          style={focus ? { objectPosition: focus } : undefined}
        />
      </div>
      {(plate || caption) && (
        <figcaption className={`frame__cap ${capClassName}`}>
          {plate && <span>{plate}</span>}
          {caption && <span className="text-right">{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}

/** Torn paper edge. `fill` is the color of the section the tear belongs to. */
export function TornEdge({ fill, flip = false, className = "" }: { fill: string; flip?: boolean; className?: string }) {
  return (
    <svg
      className={`torn ${className}`}
      viewBox="0 0 1200 30"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        fill={fill}
        d="M0 30V14l22 5 19-9 27 8 16-11 31 10 18-6 26 9 21-12 24 7 30-6 14 9 28-10 19 8 33-7 17 11 26-9 22 4 29-10 18 9 25-5 31 8 16-11 27 10 23-7 19 9 30-12 21 8 26-4 18 9 28-11 24 7 15-6 31 10 20-9 26 6 17-8 29 11 22-6 25 7 19-10 28 9 24-5 21 8 30-11 16 6 27 7 22-9 18 6 29-8 23 10 26-7 20 9 30-6 V30Z"
      />
    </svg>
  );
}

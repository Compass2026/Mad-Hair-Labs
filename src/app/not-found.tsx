import Link from "next/link";

import { BookButton } from "@/components/BookButton";
import { Stamp } from "@/components/motifs";

export default function NotFound() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-28">
      <div className="stage-light" aria-hidden="true" />
      <div className="wrap relative">
        <Stamp className="text-xl text-lime" sub="Error 404" tilt={-6}>
          Off the setlist
        </Stamp>
        <h1 className="display mt-8 text-[clamp(4rem,12vw,10rem)]">
          This page <span className="text-magenta">left the stage.</span>
        </h1>
        <p className="lede mt-6 max-w-xl text-paper/85">The good news: the hair is still here.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <BookButton />
          <Link href="/" className="btn btn-ghost">
            Back home
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Short, silent behind-the-chair loop cut from Mad Hair Lab's own promo video.
 * Never autoplays for reduced-motion users, only plays while on screen, and always
 * has a visible pause control.
 */
export function BackstageVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // Load the poster only as the clip approaches the viewport.
    const near = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.poster = "/media/backstage-poster.jpg";
          near.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    near.observe(v);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      userPaused.current = true;
      return () => near.disconnect();
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !userPaused.current) {
          if (v.preload !== "auto") v.preload = "auto";
          v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => {
      io.disconnect();
      near.disconnect();
    };
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().then(() => setPlaying(true)).catch(() => undefined);
    } else {
      userPaused.current = true;
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={ref}
        className="h-full w-full object-cover"
        src="/media/backstage-loop.mp4"
        muted
        loop
        playsInline
        preload="none"
        aria-label="Silent clip from behind the chair at Mad Hair Lab: color swatches, foils and a finished blonde"
      />
      <button
        type="button"
        onClick={toggle}
        className="mono absolute bottom-3 left-3 inline-flex min-h-11 items-center gap-2 bg-ink/80 px-3 text-[0.68rem] text-paper backdrop-blur-sm"
      >
        <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span>
        {playing ? "Pause clip" : "Play clip"}
      </button>
    </div>
  );
}

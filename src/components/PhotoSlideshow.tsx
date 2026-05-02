"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { SLIDES } from "@/config/gallery";

const activeSlides = SLIDES.filter((s) => s.active);

export default function PhotoSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % activeSlides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + activeSlides.length) % activeSlides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const slide = activeSlides[current];

  return (
    <section
      className="relative h-[60vh] md:h-[70vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide backgrounds */}
      {activeSlides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {s.image ? (
            <Image
              src={s.image}
              alt={s.caption}
              fill
              className="object-cover object-center"
              priority={i === 0}
              sizes="100vw"
            />
          ) : (
            <div className="absolute inset-0" style={{ background: s.gradient }} />
          )}
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-16 left-0 right-0 px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          <span className="inline-block bg-teal/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            {slide.tag}
          </span>
          <p className="font-heading text-white text-xl md:text-3xl font-bold leading-tight mb-2">
            {slide.caption}
          </p>
          <p className="text-white/50 text-sm flex items-center gap-1">
            <span>📍</span> {slide.location}
          </p>
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {activeSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all ${i === current ? "bg-sand w-6 h-2" : "bg-white/40 hover:bg-white/60 w-2 h-2"}`}
          />
        ))}
      </div>
    </section>
  );
}

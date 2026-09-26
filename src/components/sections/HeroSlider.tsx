"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { HERO_SLIDES } from "@/data/hero-slides";
import { assetPath } from "@/lib/asset-path";

const AUTOPLAY_MS = 5000;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = HERO_SLIDES.length;
  const reduced = useReducedMotion();

  const goTo = useCallback((index: number) => {
    setActive(((index % count) + count) % count);
  }, [count]);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [count]);

  const slide = HERO_SLIDES[active];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-dark pt-24"
      aria-label="Sthiratha service highlights"
    >
      {HERO_SLIDES.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={index !== active}
        >
          <div
            className={`absolute inset-0 ${
              !reduced && index === active ? "animate-[kenburns_9s_ease-out_both]" : ""
            }`}
          >
            <Image
              src={assetPath(s.image)}
              alt={s.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/30" />
        </div>
      ))}

      {/* Subtle decorative glow for depth, sits above the image dim layer. */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-8xl px-4 text-center text-white sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="popLayout">
            <motion.h1
              key={`title-${slide.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl font-bold uppercase tracking-wide sm:text-4xl lg:text-5xl"
            >
              {slide.title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="popLayout">
            <motion.p
              key={`tagline-${slide.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg"
            >
              {slide.tagline}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-glow active:translate-y-0"
            >
              Contact us
              <Icon
                name="arrow-right"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white/30 sm:flex"
      >
        <Icon name="chevron-left" className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white/30 sm:flex"
      >
        <Icon name="chevron-right" className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((s, index) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Go to slide ${index + 1}: ${s.title}`}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ease-premium ${
              index === active ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

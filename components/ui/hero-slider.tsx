"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";
import Image from "next/image";

const SLIDES = [
  { src: "/assests/Cover.jpeg",        alt: "Suyash Sawant" },
  { src: "/assests/rest.jpeg",         alt: "Suyash Sawant" },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const len = SLIDES.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % len), [len]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + len) % len), [len]);

  useEffect(() => {
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [next]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) next();
    else if (info.offset.x > 60 || info.velocity.x > 400) prev();
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      {/* Sliding track */}
      <motion.div
        className="flex h-full"
        style={{ width: `${len * 100}%` }}
        animate={{ x: `${-(current * (100 / len))}%` }}
        transition={{ type: "spring", stiffness: 280, damping: 32 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.08}
        onDragEnd={handleDragEnd}
      >
        {SLIDES.map((slide) => (
          <div
            key={slide.src}
            className="relative h-full flex-none"
            style={{ width: `${100 / len}%` }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-contain object-center"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2 z-10 pointer-events-none">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`pointer-events-auto h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 bg-white"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

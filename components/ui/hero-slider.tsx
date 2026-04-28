"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import Image from "next/image";

const SLIDES = [
  { src: "/assests/Cover.jpeg",  alt: "Suyash Sawant" },
  { src: "/assests/rest.jpeg",   alt: "Suyash Sawant" },
];

const GAP = 12; // px between slides, mirrors iOS Photos

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [slotW, setSlotW] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const len = SLIDES.length;
  const x = useMotionValue(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setSlotW(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback(
    (index: number) => {
      animate(x, -(index * (slotW + GAP)), {
        type: "spring",
        stiffness: 380,
        damping: 40,
        mass: 0.75,
      });
      setCurrent(index);
    },
    [x, slotW]
  );

  const handleDragEnd = useCallback(
    (_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) => {
      const swipeThreshold = slotW * 0.2;
      if (info.velocity.x < -500 || info.offset.x < -swipeThreshold) {
        goTo(Math.min(current + 1, len - 1));
      } else if (info.velocity.x > 500 || info.offset.x > swipeThreshold) {
        goTo(Math.max(current - 1, 0));
      } else {
        goTo(current);
      }
    },
    [current, goTo, len, slotW]
  );

  const trackW = slotW > 0 ? len * slotW + (len - 1) * GAP : 0;

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-black"
      style={{ touchAction: "none" }}
    >
      {trackW > 0 && (
        <motion.div
          className="absolute inset-y-0 left-0 flex"
          style={{ x, width: trackW, gap: GAP }}
          drag="x"
          dragConstraints={{
            left: -((len - 1) * (slotW + GAP)),
            right: 0,
          }}
          dragElastic={0.12}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.src}
              className="relative h-full flex-none"
              style={{ width: slotW }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain object-center pointer-events-none select-none"
                draggable={false}
                priority
              />
            </div>
          ))}
        </motion.div>
      )}

      {/* iOS-style pager dots */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center items-center gap-1.5 z-10 pointer-events-none">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width:  i === current ? 8 : 6,
              height: i === current ? 8 : 6,
              background: i === current ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

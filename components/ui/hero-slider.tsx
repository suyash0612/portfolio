
"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import Image from "next/image";

const SLIDES = [
  {
    src: "/assests/intro.mp4",
    type: "video",
    alt: "Suyash Sawant",
    caption:
      "Hey, I'm Suyash Sawant. So excited to meet you! Feel free to SWIPE to know more.",
  },
  {
    src: "/assests/uiuc.jpg",
    type: "image",
    alt: "Suyash Sawant",
    caption:
      "I'm super friendly, talkative and creative. I graduted from University of Illinois Urbana-Champaign with a Masters in Business Analytics, Undergrad in telecommunications engineering. I hail from Mumbai, India and I specialize in working with data, technology, and business.",
  },
  {
    src: "/assests/conference.png",
    type: "image",
    alt: "Suyash Sawant",
    caption:
      "I like problem solving and thus I keep participating in various competitions to push myself to try new things. I secured 3rd place at UIUC, competing with 20+ finalists at the Sustainability Case Competition 2026 to bridge funding opportunity between researchers and investors for sustainable solutions.",
  },
  {
    src: "/assests/conference2.jpg",
    type: "image",
    alt: "Suyash Sawant",
    caption:
      "Finalist at UIUC Cozad Hackathon 2026 showcasing an innovative solution to make medical history accessible to patients and doctors, leveraging AI and EHR integration for improved healthcare outcomes.",
  },
  {
    src: "/assests/sih.webp",
    type: "image",
    alt: "Suyash Sawant",
    caption:
      "Won Smart India Hackathon 2020, a national-level competition organized by the Government of India, for building a product to prevent optical fiber cables breakage buried underground. Curiosity fuels me to experiment, fail, and learn. Feel to check some of my projects below.",
  },
];

const GAP = 12;

// Clone last + all slides + first
const LOOPED_SLIDES = [
  SLIDES[SLIDES.length - 1],
  ...SLIDES,
  SLIDES[0],
];

export function HeroSlider() {
  // Start at 1 because index 0 is the cloned last slide
  const [current, setCurrent] = useState(1);
  const [slotW, setSlotW] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const len = SLIDES.length;

  const x = useMotionValue(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      setSlotW(el.offsetWidth);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  // Convert looped index to real slide index
  const getRealIndex = useCallback(
    (index: number) => {
      if (index === 0) return len - 1;
      if (index === len + 1) return 0;
      return index - 1;
    },
    [len]
  );

  const moveTo = useCallback(
    (index: number, instant = false) => {
      const targetX = -(index * (slotW + GAP));

      if (instant) {
        x.set(targetX);
      } else {
        animate(x, targetX, {
          type: "spring",
          stiffness: 380,
          damping: 40,
          mass: 0.75,
        });
      }

      setCurrent(index);
    },
    [x, slotW]
  );

  // Initial positioning
  useEffect(() => {
    if (slotW > 0) {
      x.set(-(current * (slotW + GAP)));
    }
  }, [slotW, x, current]);

  // Handle infinite boundaries after animation
  const handleAnimationComplete = useCallback(() => {
    if (current === 0) {
      // We are on cloned last slide.
      // Instantly jump to the real last slide.
      moveTo(len, true);
    } else if (current === len + 1) {
      // We are on cloned first slide.
      // Instantly jump to the real first slide.
      moveTo(1, true);
    }
  }, [current, len, moveTo]);

  const nextSlide = useCallback(() => {
    moveTo(current + 1);
  }, [current, moveTo]);

  const previousSlide = useCallback(() => {
    moveTo(current - 1);
  }, [current, moveTo]);

  const handleDragEnd = useCallback(
    (
      _event: PointerEvent | MouseEvent | TouchEvent,
      info: PanInfo
    ) => {
      const swipeThreshold = slotW * 0.2;

      if (
        info.velocity.x < -500 ||
        info.offset.x < -swipeThreshold
      ) {
        nextSlide();
      } else if (
        info.velocity.x > 500 ||
        info.offset.x > swipeThreshold
      ) {
        previousSlide();
      } else {
        moveTo(current);
      }
    },
    [
      current,
      moveTo,
      nextSlide,
      previousSlide,
      slotW,
    ]
  );

  const trackW =
    slotW > 0
      ? LOOPED_SLIDES.length * slotW +
        (LOOPED_SLIDES.length - 1) * GAP
      : 0;

  // Real slide index for caption/dots
  const realCurrent = getRealIndex(current);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden bg-black"
      style={{ touchAction: "none" }}
    >
      {trackW > 0 && (
        <motion.div
          className="absolute inset-y-0 left-0 flex"
          style={{
            x,
            width: trackW,
            gap: GAP,
          }}
          drag="x"
          dragConstraints={{
            left: -((LOOPED_SLIDES.length - 1) * (slotW + GAP)),
            right: 0,
          }}
          dragElastic={0.12}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          onAnimationComplete={handleAnimationComplete}
        >
          {LOOPED_SLIDES.map((slide, index) => (
            <div
              key={`${slide.src}-${index}`}
              className="relative h-full flex-none"
              style={{ width: slotW }}
            >
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  className="h-full w-full object-contain object-center pointer-events-none select-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-contain object-center pointer-events-none select-none"
                  draggable={false}
                  priority
                />
              )}
            </div>
          ))}
        </motion.div>
      )}

      {/* =====================================================
          LEFT ARROW
      ===================================================== */}

      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="
          absolute
          left-3
          top-1/2
          z-20
          -translate-y-1/2
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/30
          text-white
          backdrop-blur-md
          transition-all
          duration-200
          hover:bg-black/50
          hover:border-white/40
          active:scale-90
          sm:left-5
          sm:h-11
          sm:w-11
        "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* =====================================================
          RIGHT ARROW
      ===================================================== */}

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          absolute
          right-3
          top-1/2
          z-20
          -translate-y-1/2
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-black/30
          text-white
          backdrop-blur-md
          transition-all
          duration-200
          hover:bg-black/50
          hover:border-white/40
          active:scale-90
          sm:right-5
          sm:h-11
          sm:w-11
        "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* =====================================================
          ACTIVE SLIDE CAPTION
      ===================================================== */}

      <motion.div
        key={realCurrent}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          absolute
          bottom-9
          inset-x-0
          z-10
          flex
          justify-center
          pointer-events-none
        "
      >
        <div
          className="
            relative
            flex
            w-full
            items-center
            justify-center
            border-y
            border-white/15
            bg-white/1
            backdrop-blur-sm
          "
          style={{
            width: slotW,
          }}
        >
          <div className="relative w-full px-5 py-2.5 text-center">
            <div className="absolute -inset-x-10 -inset-y-5 rounded-full bg-black/20 blur-2xl" />

            <p
              className="
                relative
                text-[11px]
                sm:text-xs
                md:text-sm
                font-medium
                leading-relaxed
                tracking-wide
                text-white/95
                text-center
                drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]
              "
            >
              {SLIDES[realCurrent].caption}
            </p>
          </div>
        </div>
      </motion.div>

      {/* =====================================================
          iOS-STYLE PAGER DOTS
      ===================================================== */}

      <div className="absolute bottom-3 inset-x-0 flex justify-center items-center gap-1.5 z-10 pointer-events-none">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === realCurrent ? 8 : 6,
              height: i === realCurrent ? 8 : 6,
              background:
                i === realCurrent
                  ? "rgba(255,255,255,0.95)"
                  : "rgba(255,255,255,0.35)",
              boxShadow:
                i === realCurrent
                  ? "0 0 8px rgba(255,255,255,0.35)"
                  : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}


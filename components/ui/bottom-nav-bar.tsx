"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Map, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home",     icon: Home,      href: "#hero"                              },
  { label: "Projects", icon: Briefcase, href: "#projects"                          },
  { label: "Journey",  icon: Map,       href: "#journey"                           },
  { label: "Contact",  icon: Mail,      href: "#booking"                           },
];

// Wide enough for "Projects" at text-xs
const LABEL_WIDTH = 58;

type BottomNavBarProps = {
  className?: string;
  defaultIndex?: number;
};

export function BottomNavBar({ className, defaultIndex = 0 }: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <motion.nav
      initial={{ y: 16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26, delay: 0.5 }}
      role="navigation"
      aria-label="Page Navigation"
      className={cn(
        // positioning
        "fixed inset-x-0 bottom-4 mx-auto z-40 w-fit",
        // shell
        "bg-black/40 backdrop-blur-md border border-white/10 rounded-full",
        "flex items-center p-1.5 gap-0.5",
        "h-[52px] shadow-lg shadow-black/30",
        className,
      )}
    >
      {NAV_ITEMS.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeIndex === idx;

        return (
          <motion.a
            key={item.label}
            href={item.href}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveIndex(idx)}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex items-center px-3 py-2 rounded-full h-9 min-w-[40px]",
              "transition-colors duration-200 focus:outline-none select-none",
              isActive
                ? "bg-white text-zinc-900"
                : "text-white/50 hover:text-white hover:bg-white/10",
            )}
          >
            <Icon size={18} strokeWidth={2} aria-hidden className="shrink-0" />

            <motion.div
              initial={false}
              animate={{
                width:      isActive ? `${LABEL_WIDTH}px` : "0px",
                opacity:    isActive ? 1 : 0,
                marginLeft: isActive ? "6px" : "0px",
              }}
              transition={{
                width:      { type: "spring", stiffness: 350, damping: 32 },
                opacity:    { duration: 0.18 },
                marginLeft: { duration: 0.18 },
              }}
              className="overflow-hidden flex items-center"
            >
              <span className="text-xs font-medium whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          </motion.a>
        );
      })}
    </motion.nav>
  );
}

export default BottomNavBar;

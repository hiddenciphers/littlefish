"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface MenuIconProps {
  onClick?: () => void;
  isOpen: boolean;
}

export default function MenuIcon({ onClick, isOpen }: MenuIconProps) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        if (hasAnimated) {
          onClick?.();
        }
      }}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      aria-haspopup="true"
      className="relative w-8 h-6 p-2 flex items-center justify-center md:hidden focus:outline-none"
    >
      {/* Top Line */}
      <motion.span
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{
          opacity: hasAnimated ? 1 : 0,
          scaleX: hasAnimated ? 1 : 0,
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -8,
        }}
        transition={{
          opacity: { delay: hasAnimated ? 0.3 : 0, duration: 0.1 },
          scaleX: {
            delay: hasAnimated ? 0.3 : 0,
            duration: 0.8,
            type: "spring",
            stiffness: 180,
            damping: 10,
          },
          rotate: { duration: 0.3 },
          y: { duration: 0.3 },
        }}
        className="absolute w-full h-0.5 bg-current origin-center"
      />

      {/* Middle Line */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{
          opacity: hasAnimated ? (isOpen ? 0 : 1) : hasAnimated ? 1 : 0,
        }}
        transition={{
          opacity: hasAnimated ? { duration: 0.2 } : { duration: 0.3 },
        }}
        className="absolute w-full h-0.5 bg-current"
      />

      {/* Bottom Line */}
      <motion.span
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{
          opacity: hasAnimated ? 1 : 0,
          scaleX: hasAnimated ? 1 : 0,
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 8,
        }}
        transition={{
          opacity: { delay: hasAnimated ? 0.3 : 0, duration: 0.1 },
          scaleX: {
            delay: hasAnimated ? 0.3 : 0,
            duration: 0.8,
            type: "spring",
            stiffness: 180,
            damping: 10,
          },
          rotate: { duration: 0.3 },
          y: { duration: 0.3 },
        }}
        className="absolute w-full h-0.5 bg-current origin-center"
      />
    </button>
  );
}

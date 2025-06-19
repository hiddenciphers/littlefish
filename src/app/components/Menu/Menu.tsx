"use client";

import { motion } from "framer-motion";

interface MenuIconProps {
  onClick?: () => void;
  isOpen: boolean;
}

export default function MenuIcon({ onClick, isOpen }: MenuIconProps) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      aria-haspopup="true"
      className="relative w-8 h-6 p-2 flex items-center justify-center md:hidden focus:outline-none"
    >
      {/* Top Line */}
      <motion.span
        initial={false}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -8,
        }}
        transition={{ duration: 0.3 }}
        className="absolute w-full h-0.5 bg-current origin-center"
      />

      {/* Middle Line */}
      <motion.span
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="absolute w-full h-0.5 bg-current"
      />

      {/* Bottom Line */}
      <motion.span
        initial={false}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 8,
        }}
        transition={{ duration: 0.3 }}
        className="absolute w-full h-0.5 bg-current origin-center"
      />
    </button>
  );
}

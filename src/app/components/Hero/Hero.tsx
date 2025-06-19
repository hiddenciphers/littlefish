"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { scrollToSection } from "@/utils/scrollToSection";

interface HeroProps {
  isHidden: boolean;
}

const Hero = ({ isHidden }: HeroProps) => {
  return (
    <motion.section
      aria-labelledby="hero-title"
      role="region"
      initial={{ opacity: 1 }}
      animate={{ opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6 gap-6 md:gap-8 -mt-10 md:-mt-12 mb-26"
    >
      <h1 className="sr-only">
        LittleFish Accounting – Franchise Accounting Solutions Australia
      </h1>

      <motion.h1
        id="hero-title"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-semibold font-poppins text-light-text-primary dark:text-dark-text-primary pointer-events-none"
      >
        Accounting,{" "}
        <span
          className="inline-block px-6 py-2 md:px-8 md:py-3 text-dark-text-primary rounded-lg"
          style={{
            backgroundImage: "var(--gradient-span-background)",
            clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
          }}
        >
          Simplified
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="text-md md:text-xl max-w-xl font-inter text-light-text-secondary dark:text-dark-text-secondary pointer-events-none"
      >
        Accounting Solutions Tailored for the Little Guys.
      </motion.p>

      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="flex items-center gap-2 text-og-blue font-medium underline underline-offset-4 hover:text-og-blue-hover transition-colors duration-300 pointer-events-auto cursor-pointer"
        aria-label="Scroll to About section"
      >
        Explore
        <ArrowDown
          className="animate-bounce-slow"
          size={18}
          aria-hidden="true"
        />
      </motion.button>
    </motion.section>
  );
};

export default Hero;

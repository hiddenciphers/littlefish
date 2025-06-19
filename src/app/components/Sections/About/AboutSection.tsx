"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, BookOpen, Users } from "lucide-react";

const aboutItems = [
  {
    heading: "Empowering Solutions",
    description:
      "Little Fish Accounting is designed to empower independent accountants and small businesses.",
    icon: <Briefcase size={32} />,
  },
  {
    heading: "Opportunity & Support",
    description:
      "We provide a franchise model that helps accountants thrive while delivering tailored solutions for individuals and small enterprises.",
    icon: <Users size={32} />,
  },
  {
    heading: "Xero-Focused Accounting",
    description:
      "Specialising in Xero, we bridge the gap between personalised service and professional expertise.",
    icon: <BookOpen size={32} />,
  },
];

export default function AboutSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section
      className="w-full flex flex-col items-center px-4"
      aria-labelledby="about-tabs"
    >
      {/* 🔹 Gradient Span Icon Buttons (Mobile + Desktop) */}
      <div
        className="flex justify-center gap-6 pb-6"
        role="tablist"
        aria-label="About topics"
        id="about-tabs"
      >
        {aboutItems.map((item, i) => (
          <button
            key={item.heading}
            onClick={() => setSelected(i)}
            id={`about-tab-${i}`}
            role="tab"
            aria-selected={selected === i}
            aria-controls={`about-panel-${i}`}
            className={`p-3 rounded-full transition-all duration-300 cursor-pointer ${
              i === selected ? "scale-80 shadow-lg" : "opacity-70"
            } text-white`}
            style={{
              backgroundImage: "var(--gradient-span-background)",
            }}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* 🔹 About Card */}
      <div className="relative bg-white/5 dark:bg-dark-card-background p-10 rounded-xl shadow-lg max-w-3xl w-full md:block flex flex-col justify-center text-center h-72 md:h-fit overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`about-${selected}`}
            id={`about-panel-${selected}`}
            role="tabpanel"
            aria-labelledby={`about-tab-${selected}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <h3 className="text-2xl font-bold font-poppins text-light-text-primary dark:text-dark-text-primary">
              {aboutItems[selected].heading}
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary font-inter text-sm md:text-base leading-relaxed">
              {aboutItems[selected].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

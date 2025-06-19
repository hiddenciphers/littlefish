// src/app/components/Section.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  heading: string;
  subheading?: string;
  children: ReactNode;
  headingId?: string;
}

const Section = ({
  id,
  heading,
  subheading,
  children,
  headingId,
}: SectionProps) => {
  const sectionId = id ?? heading.toLowerCase().replace(/\s+/g, "-");
  const headingElId = headingId ?? `${sectionId}-heading`;

  return (
    <motion.section
      id={sectionId}
      aria-labelledby={headingElId}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full h-fit px-6 py-20 flex justify-center"
    >
      <div className="w-full flex flex-col gap-5 md:gap-10 max-w-5xl rounded-3xl shadow-lg backdrop-blur-md bg-modal-background p-10 md:p-14 text-center">
        <h2
          id={headingElId}
          className="text-3xl md:text-4xl font-medium font-inter text-og-blue"
        >
          {heading}
        </h2>

        {subheading && (
          <p className="text-base md:text-2xl font-poppins font-semibold tracking-wide md:tracking-wider text-dark-text-primary">
            {subheading}
          </p>
        )}

        <div className="mt-5">{children}</div>
      </div>
    </motion.section>
  );
};

export default Section;

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    heading: "Stress-Free Accounting Made Possible!",
    content:
      "Little Fish made managing my business finances simple. Their Xero training was clear, and the ongoing support has been a game-changer. I now spend less time worrying about numbers and more time growing my business with confidence and peace of mind.",
    name: "Steve N",
    role: "Small Business Owner",
  },
  {
    heading: "Expert Guidance Every Step of the Way",
    content:
      "Joining the Little Fish franchise changed my career. I received personalised support, marketing tools, and expert mentoring that helped me scale fast. I can now deliver better service to my clients while running a thriving, independent practice with full support behind me.",
    name: "Sarah L",
    role: "Franchise Partner",
  },
  {
    heading: "Tailored Solutions That Deliver Results",
    content:
      "The Little Fish team does more than just accounting. Their tailored tax strategies and in-depth financial reports have helped me save money and make smarter business decisions. They’ve become an essential part of how I grow and sustain my company each year.",
    name: "Max P",
    role: "Entrepreneur",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const heights = refs.current.map((el) => el?.offsetHeight || 0);
    const tallest = Math.max(...heights);
    setMaxHeight(tallest);
  }, [index]);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section
      className="w-full px-4 flex flex-col items-center"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="relative w-full max-w-3xl bg-white/5 dark:bg-dark-card-background p-10 rounded-xl shadow-lg text-center overflow-hidden h-fit"
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonials carousel"
      >
        <h2 id="testimonials-heading" className="sr-only">
          Testimonials
        </h2>

        {/* 🔹 Animated Content Container */}
        <div
          className="relative w-full transition-all duration-300"
          style={{ minHeight: maxHeight }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              ref={(el) => void (refs.current[index] = el)}
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 w-full flex flex-col items-center gap-4"
            >
              {/* Heading with Decorative Quote */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-light-text-primary dark:text-dark-text-primary font-poppins font-bold text-xl md:text-2xl">
                <span
                  className="text-og-blue text-5xl leading-none md:mr-2 -mb-2 md:mb-0 hidden md:block"
                  aria-hidden="true"
                >
                  “
                </span>
                <h3 className="text-center">{testimonials[index].heading}</h3>
              </div>

              <p className="text-light-text-secondary dark:text-dark-text-secondary font-inter text-sm md:text-base leading-relaxed">
                {testimonials[index].content}
              </p>

              <div className="pt-4 text-light-text-primary dark:text-dark-text-primary font-semibold">
                {testimonials[index].name}
              </div>
              <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                {testimonials[index].role}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 🔹 Navigation + Dots */}
        <div className="w-full flex justify-center gap-6 items-center mt-4">
          <motion.button
            onClick={prev}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            aria-label="Previous testimonial"
          >
            <span className="p-3 rounded-full text-white block transition-all duration-300 bg-og-blue hover:bg-og-blue-hover">
              <ChevronLeft size={24} />
            </span>
          </motion.button>

          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => {
              const dotColors = ["bg-og-red", "bg-og-yellow", "bg-og-green"];
              const isActive = index === i;
              const activeColor = dotColors[i];
              return (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? `${activeColor} scale-110`
                      : `${activeColor} opacity-50 hover:opacity-80`
                  }`}
                />
              );
            })}
          </div>

          <motion.button
            onClick={next}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
            aria-label="Next testimonial"
          >
            <span className="p-3 rounded-full text-white block transition-all duration-300 bg-og-blue hover:bg-og-blue-hover">
              <ChevronRight size={24} />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

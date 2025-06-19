"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    heading: "Stress-Free Accounting Made Possible!",
    content:
      "Little Fish Accounting transformed the way I manage my business finances. Their Xero training was straightforward, and the ongoing support has been a lifesaver. Now I can focus on growing my business while they handle the numbers!",
    name: "Steve N",
    role: "Small Business Owner",
  },
  {
    heading: "Expert Guidance Every Step of the Way",
    content:
      "As an independent accountant, joining the Little Fish franchise was the best decision I’ve made. The resources and mentorship have helped me scale my practice, while still delivering top-notch service to my clients.",
    name: "Sarah L",
    role: "Franchise Partner",
  },
  {
    heading: "Tailored Solutions That Deliver Results",
    content:
      "The team at Little Fish Accounting doesn’t just crunch numbers – they provide valuable insights that have helped my business thrive. Their financial reporting and tax strategies have saved me time and money year after year.",
    name: "Max P",
    role: "Entrepreneur",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

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
        className="relative w-full max-w-3xl bg-white/5 dark:bg-dark-card-background p-10 rounded-xl shadow-lg text-center overflow-hidden h-135 md:h-[320px]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonials carousel"
      >
        <h2 id="testimonials-heading" className="sr-only">
          Testimonials
        </h2>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prev}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 -bottom-2 -translate-y-1/2 z-10 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <span className="p-3 rounded-full text-white block transition-all duration-300 bg-og-blue hover:bg-og-blue-hover">
            <ChevronLeft size={24} />
          </span>
        </motion.button>

        <motion.button
          onClick={next}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 -bottom-2 -translate-y-1/2 z-10 cursor-pointer"
          aria-label="Next testimonial"
        >
          <span className="p-3 rounded-full text-white block transition-all duration-300 bg-og-blue hover:bg-og-blue-hover">
            <ChevronRight size={24} />
          </span>
        </motion.button>

        {/* Testimonial Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
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

        {/* Indicator Dots */}
        <div className="flex gap-2 justify-center mt-6 absolute left-29 bottom-9 md:bottom-5 md:left-90">
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
      </div>
    </section>
  );
}

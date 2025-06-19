"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, BarChart2, Users } from "lucide-react";

const services = [
  {
    title: "Xero Services",
    heading: "Simplify Your Finances with Xero",
    description:
      "We specialise in Xero setup, training, and ongoing support, empowering individuals and small businesses to manage their finances effortlessly. From bookkeeping and bank reconciliation to BAS and GST compliance, we make financial management seamless.",
    icon: <Settings size={32} />,
    color: "green",
  },
  {
    title: "Franchise & Advisory",
    heading: "Empowering Accountants and Entrepreneurs",
    description:
      "As a franchise-driven network, we offer tools, resources, and mentorship for accountants, alongside advisory services for small businesses. Join us to deliver personalised solutions and thrive in your accounting journey.",
    icon: <Users size={32} />,
    color: "blue",
  },
  {
    title: "Tax & Financial",
    heading: "Expert Tax and Financial Solutions",
    description:
      "Our services include tax preparation, payroll management, and detailed financial reporting. Whether you’re filing a tax return or analysing cash flow, we provide insights and strategies to maximise savings and drive growth.",
    icon: <BarChart2 size={32} />,
    color: "red",
  },
];

export default function ServicesSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section
      className="w-full flex flex-col items-center px-4"
      aria-labelledby="services-tabs"
    >
      {/* Mobile: Icon Buttons */}
      <div
        className="flex justify-center gap-6 pb-6"
        role="tablist"
        aria-label="Service options"
        id="services-tabs"
      >
        {services.map((service, i) => {
          const iconBg =
            i === 0
              ? "bg-og-green hover:bg-og-green-hover"
              : i === 1
              ? "bg-og-blue hover:bg-og-blue-hover"
              : "bg-og-red hover:bg-og-red-hover";

          return (
            <button
              key={service.title}
              onClick={() => setSelected(i)}
              role="tab"
              aria-selected={selected === i}
              aria-controls={`service-panel-${i}`}
              id={`service-tab-${i}`}
              className={`p-3 rounded-full transition-all duration-300 cursor-pointer ${
                i === selected ? "scale-80 shadow-lg" : "opacity-70"
              } ${iconBg} text-white`}
            >
              {service.icon}
            </button>
          );
        })}
      </div>

      {/* Desktop: Full Buttons */}
      {/* <div
        className="hidden md:flex justify-center gap-36"
        role="tablist"
        aria-label="Service tabs"
      >
        {services.map((service, i) => {
          const colorMap = {
            green: "bg-og-green hover:bg-og-green-hover text-white",
            blue: "bg-og-blue hover:bg-og-blue-hover text-white",
            red: "bg-og-red hover:bg-og-red-hover text-white",
          };

          return (
            <button
              key={service.title}
              onClick={() => setSelected(i)}
              role="tab"
              aria-selected={selected === i}
              aria-controls={`service-panel-${i}`}
              id={`service-tab-${i}`}
              className={`px-5 py-3 rounded-full font-semibold font-poppins transition-all duration-300 cursor-pointer ${
                colorMap[service.color as keyof typeof colorMap]
              } ${i === selected ? "-translate-y-1 shadow-md" : ""}`}
            >
              {service.title}
            </button>
          );
        })}
      </div> */}

      {/* Content Card */}
      <div className="relative bg-white/5 dark:bg-dark-card-background p-10 rounded-xl shadow-lg max-w-3xl w-full text-center md:h-fit h-110 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${selected}`}
            id={`service-panel-${selected}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${selected}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-0 flex flex-col items-center gap-4"
          >
            <h3 className="text-2xl font-bold font-poppins text-light-text-primary dark:text-dark-text-primary">
              {services[selected].heading}
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary font-inter text-sm md:text-base leading-relaxed">
              {services[selected].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

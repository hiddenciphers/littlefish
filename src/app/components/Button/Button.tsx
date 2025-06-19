"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  color?: "blue" | "green";
}

const Button = ({
  children,
  color = "blue",
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  const base =
    "h-fit w-full p-3 md:px-8 rounded-lg cursor-pointer font-semibold transition-colors duration-300";

  const colorMap = {
    blue: "bg-og-blue-dark text-white",
    green: "bg-og-green text-gray-900",
  };

  return (
    <motion.button
      type={type}
      role="button"
      className={`${base} ${colorMap[color]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

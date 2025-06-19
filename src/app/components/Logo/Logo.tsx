"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LittleFishLogoProps {
  delay?: number;
  onClick?: () => void;
  loop?: boolean;
  height?: number;
  className?: string;
  ariaLabel?: string;
}

export default function LittleFishLogo({
  delay = 1.2,
  onClick,
  loop = false,
  height,
  className = "",
  ariaLabel = "Little Fish Logo",
}: LittleFishLogoProps) {
  const [hoverKey, setHoverKey] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(delay === 0 || loop);

  useEffect(() => {
    if (!loop && delay > 0) {
      const timer = setTimeout(() => setShouldAnimate(true), delay * 1000);
      return () => clearTimeout(timer);
    } else {
      setShouldAnimate(true);
    }
  }, [delay, loop]);

  const handleHover = () => {
    if (!loop) setHoverKey((prev) => prev + 1);
  };

  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      onClick={onClick}
      onMouseMove={handleHover}
      className={`w-auto ${
        onClick ? "cursor-pointer focus:outline-none" : ""
      } ${!height ? "h-10 md:h-20" : ""} ${className}`}
      style={height ? { height } : undefined}
      {...(onClick
        ? { "aria-label": ariaLabel, type: "button" }
        : { "aria-hidden": true })}
    >
      {shouldAnimate && (
        <motion.svg
          key={loop ? "looping" : hoverKey}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 207.09 211.29"
          className="h-full w-auto"
          animate={loop ? { scale: [1, 1.05, 1] } : undefined}
          transition={
            loop
              ? {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
              : undefined
          }
        >
          <defs>
            <style>
              {`.cls-1{fill:#3ba95b;}.cls-2{fill:#f7be1c;}.cls-3{fill:#f8bd1c;}.cls-4{fill:#5a81c1;}.cls-5{fill:#e54c3f;}`}
            </style>
          </defs>
          <g>
            {paths.map((path, i) => (
              <motion.path
                key={i}
                d={path.d}
                className={`path ${path.className}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: (loop ? 0 : delay) + i * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                  repeat: loop ? Infinity : 0,
                  repeatType: "loop",
                  repeatDelay: 2,
                }}
              />
            ))}
          </g>
        </motion.svg>
      )}
    </Wrapper>
  );
}

const paths = [
  {
    className: "cls-5",
    d: "M35.1,176.77c-.13,8.37,1.99,23.84-3.54,30.35-3.41,3.96-9.12,4.24-14.01,4.16-4.41-.12-8.96-.33-12.23-2.46-4.55-2.92-5.11-8.97-5.25-13.99-.11-7.99-.08-15.88-.04-23.86-.23-12.71,3.26-19.47,17.3-19.25,18.17-.15,17.41,10.03,17.76,24.86v.19Z",
  },
  {
    className: "cls-2",
    d: "M92.35,190.46c1.51,19.54-3.59,21.22-22.17,20.41-13.84-.29-13.08-7.75-12.98-18.96.08-4.83-.29-9.81,2.42-12.81,5.07-4.75,13.46-3.78,19.9-3.63,10.47.77,12.76,4.64,12.81,14.81v.19Z",
  },
  {
    className: "cls-3",
    d: "M92.32,125.38c.27,6.29.32,12.78.1,19.13-.4,13.52-6.87,16.11-19.24,15.29-11.88-.03-15.89-3.65-15.89-15.41-.08-9.37-.1-18.62,0-27.99.06-2.3.19-4.7.74-6.92,1.39-7.25,8.63-9.3,15.53-9.15,4.18.02,8.68.1,12.49,1.95,7.92,4.12,5.48,15.25,6.26,22.92v.19Z",
  },
  {
    className: "cls-1",
    d: "M149.49,180c.19,6.39.54,13.25-.22,19.83-1.08,9.83-8.45,11.58-17.33,11.16-17.62.25-17.69-6.38-17.54-21.73-.01-4.95-.01-9.9.03-14.85-.13-6.96.96-14.1,8.18-15.97,6.36-1.62,18.68-2.03,23.44,2.86,4.1,4.45,2.94,12.52,3.44,18.52v.19Z",
  },
  {
    className: "cls-1",
    d: "M149.49,118.47c.21,5.02.48,10.59-.16,15.68-.84,8.05-8.11,9.26-15.21,9.06-9.35-.36-20.08,1.3-19.67-11.55-.08-6.49-.1-13.05.01-19.52-.27-8.74,5.05-11.42,13-11.73,6.2.06,14.94-1.04,19.63,3.8,2.82,3.52,1.94,9.51,2.4,14.07v.18Z",
  },
  {
    className: "cls-1",
    d: "M149.5,65.57c1.46,19.88-2.61,21.14-21.74,20.42-6.17-.05-12.99-1.18-13.21-8.7-.29-4.97-.13-10.06-.13-15.04.09-2.89.14-6.12,2.19-8.34,5.13-4.5,13.06-3.39,19.4-3.42,11.54.71,13.38,3.53,13.48,14.89v.18Z",
  },
  {
    className: "cls-4",
    d: "M206.86,186.28c.28,13.89,2.51,25.39-15.96,24.73-9.75-.09-19.2.19-19.08-12.34-.1-5.95-.13-11.97.01-17.93-.09-8.42,4.49-11.92,12.54-12.44,6.42-.17,14.26-.98,19.4,3.55,3.3,3.41,2.75,9.51,3.08,14.25v.19Z",
  },
  {
    className: "cls-4",
    d: "M206.85,114.59c.22,5.96.29,11.98.17,18.2-.12,5.44-.57,12.17-4.18,15.96-4.63,4.84-12.62,3.93-18.83,3.49-10.65-.78-12.28-8.88-12.22-18.53-.06-8.65-.06-17.23,0-25.87.11-5.66,0-12.47,4.04-16.76,4.9-5.19,18.16-5.08,24.55-1.72,8.02,4.95,5.71,16.7,6.46,25.05v.19Z",
  },
  {
    className: "cls-4",
    d: "M206.85,30.02c.2,6.88.32,13.78.13,20.91-.07,8.58-2.02,18.87-11.77,20.2-16.16,1.77-23.36-1.98-23.38-18.79-.02-12.07-.36-24.12.22-36.19.37-4.17,1.25-8.59,4.07-11.69,5-5.35,15.41-5.37,22.35-2.73,10.15,4.68,7.61,18.78,8.37,28.1v.19Z",
  },
];

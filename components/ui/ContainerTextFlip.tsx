"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

interface ContainerTextFlipProps {
  words: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
  scrollBased?: boolean;
}

export const ContainerTextFlip = ({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className = "",
  textClassName = "",
  animationDuration = 700,
  scrollBased = false,
}: ContainerTextFlipProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    if (scrollBased && isInView) {
      // Change word when scrolling into view
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }
  }, [isInView, scrollBased, words.length]);

  useEffect(() => {
    if (!scrollBased) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [words.length, interval, scrollBased]);

  useEffect(() => {
    // Measure the width of the current word
    const measureWidth = () => {
      const span = document.createElement("span");
      span.style.visibility = "hidden";
      span.style.position = "absolute";
      span.style.whiteSpace = "nowrap";
      span.className = textClassName;
      span.textContent = words[currentIndex];
      document.body.appendChild(span);
      const measuredWidth = span.offsetWidth;
      document.body.removeChild(span);
      setWidth(measuredWidth);
    };

    measureWidth();
  }, [currentIndex, words, textClassName]);

  return (
    <motion.span
      ref={ref}
      className={`inline-block relative ${className}`}
      animate={{ width: width + 16 }}
      transition={{
        duration: animationDuration / 1000,
        ease: "easeInOut",
      }}
      style={{ 
        verticalAlign: "bottom",
        minHeight: "1.2em",
        display: "inline-flex",
        alignItems: "center"
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          transition={{
            duration: animationDuration / 1000,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className={`inline-block whitespace-nowrap ${textClassName}`}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
};

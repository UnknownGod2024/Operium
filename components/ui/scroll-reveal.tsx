"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  wordByWord?: boolean;
}

export default function ScrollReveal({ children, delay = 0, className = "", wordByWord = false }: ScrollRevealProps) {
  if (!wordByWord) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: "easeOut",
        }}
        viewport={{ once: true, margin: "-50px" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Word-by-word animation
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.08,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

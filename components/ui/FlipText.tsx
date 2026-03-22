"use client";

import { motion } from "framer-motion";

interface FlipTextProps {
  word: string;
  delay?: number;
}

export const FlipText = ({ word, delay = 0 }: FlipTextProps) => {
  const letters = word.split("");

  return (
    <span className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ rotateX: -90, opacity: 0 }}
          whileInView={{ rotateX: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.05,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

interface FlipWordsProps {
  words: string[];
  className?: string;
}

export const FlipWords = ({ words, className = "" }: FlipWordsProps) => {
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex}>
          <FlipText word={word} delay={wordIndex * 0.3} />
          {wordIndex < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
};

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors = ({ number = 5, className }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

  useEffect(() => {
    // Ensure better distribution across the card
    const styles = [...new Array(number)].map((_, idx) => {
      // Distribute starting positions more evenly
      const section = idx / number;
      const randomOffset = (Math.random() - 0.5) * 40; // Add randomness within section
      
      return {
        top: Math.max(0, Math.min(100, section * 100 + randomOffset)) + "%",
        left: Math.floor(Math.random() * 100) + "%",
        animationDelay: (idx * 1.5 + Math.random() * 2) + "s",
        animationDuration: (6 + Math.random() * 3) + "s",
      };
    });
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute h-1 w-1 rotate-[215deg] animate-meteor rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(6,182,212,0.6)]",
            className
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[2px] w-[120px] -translate-y-1/2 bg-gradient-to-r from-cyan-400 via-cyan-300/60 to-transparent" />
        </span>
      ))}
    </>
  );
};

// components/PageIntro.tsx
"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./motion";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_24%,rgba(125,211,252,0.12),transparent_40%),radial-gradient(circle_at_82%_78%,rgba(96,165,250,0.08),transparent_42%)]" />
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-[92%] max-w-6xl pb-16 md:pb-20"
      >
        <p className="mb-4 text-xs tracking-[0.24em] text-sky-200/65">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300/80 sm:text-lg">{description}</p>
      </motion.div>
    </section>
  );
}

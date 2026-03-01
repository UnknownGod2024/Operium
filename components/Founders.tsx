// components/Founders.tsx
"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "./motion";
import GlareHover from "./GlareHover";

const founders = [
  { name: "Mantra Patel", role: "Co-Founder" },
  { name: "Tanush Shah", role: "Co-Founder" },
];

export default function Founders() {
  return (
    <section className="py-20 md:py-26">
      <div className="mx-auto w-[92%] max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12"
        >
          <p className="mb-3 text-xs tracking-[0.24em] text-sky-200/60">FOUNDERS</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Led by operators who build for outcomes.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {founders.map((founder) => (
            <motion.article
              key={founder.name}
              variants={fadeInUp}
              className="transition duration-300 hover:-translate-y-1"
            >
              <GlareHover
                width="100%"
                height="100%"
                background="rgba(15, 23, 42, 0.38)"
                borderRadius="1.5rem"
                borderColor="rgba(186, 230, 253, 0.12)"
                glareColor="#cfe9ff"
                glareOpacity={0.34}
                glareAngle={-34}
                glareSize={260}
                transitionDuration={820}
                className="p-8 shadow-[0_22px_60px_rgba(0,0,0,0.35)] backdrop-blur-[1px]"
              >
                <div className="w-full">
                  <h3 className="text-2xl font-medium text-slate-100">{founder.name}</h3>
                  <p className="mt-2 text-sm tracking-wide text-slate-300/72">{founder.role}</p>
                </div>
              </GlareHover>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

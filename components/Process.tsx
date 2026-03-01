// components/Process.tsx
"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./motion";

const steps = ["Discover", "Design", "Deploy", "Scale"];

export default function Process() {
  return (
    <section className="py-20 md:py-26">
      <div className="mx-auto w-[92%] max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12"
        >
          <p className="mb-3 text-xs tracking-[0.24em] text-sky-200/60">PROCESS</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            A deliberate execution model.
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-12">
          <div className="relative pl-8">
            <div className="absolute left-2 top-2 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-sky-200/40 via-slate-200/16 to-transparent" />
            <div className="space-y-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span className="absolute -left-[2.05rem] top-2 h-4 w-4 rounded-full border border-sky-200/35 bg-slate-950 shadow-[0_0_0_6px_rgba(125,211,252,0.08)]" />
                  <p className="text-xs tracking-[0.22em] text-slate-300/62">STEP 0{index + 1}</p>
                  <h3 className="mt-1 text-2xl font-medium text-slate-100">{step}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300/76 sm:text-base">
                    Precision-led delivery focused on speed, clarity, and repeatable revenue impact.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:sticky lg:top-28"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/12 bg-slate-950/40 p-2 shadow-[0_28px_70px_rgba(2,8,23,0.55)] backdrop-blur-sm">
              <div className="pointer-events-none absolute -inset-6 bg-[radial-gradient(circle_at_45%_20%,rgba(125,211,252,0.22),transparent_55%)]" />
              <div className="relative h-[420px] overflow-hidden rounded-2xl border border-slate-200/10 bg-black/25">
                <iframe
                  src="https://my.spline.design/nexbotrobotcharacterconcept-9pwwn7mezjHB04j77sfS64Wa/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  title="Nexbot Robot"
                  className="h-full w-full bg-transparent"
                />
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

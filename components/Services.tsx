// components/Services.tsx
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";

const services = [
  "Lead Generation Systems",
  "AI Automation Tools",
  "Internal Tools & Dashboards",
  "Revenue Growth Engines",
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-20 md:py-26">
      <div className="pointer-events-none absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/particlesflow-yRsrPgQXr1NBZdmKpeURj3az/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Particles Flow Background"
          className="h-full w-full opacity-70 saturate-125 contrast-110"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(3,7,18,0.6)_0%,rgba(3,7,18,0.46)_40%,rgba(3,7,18,0.64)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_30%,rgba(125,211,252,0.2),transparent_44%),radial-gradient(circle_at_82%_78%,rgba(59,130,246,0.16),transparent_42%)]" />

      <div className="relative z-20 mx-auto w-[92%] max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12"
        >
          <p className="mb-3 text-xs tracking-[0.24em] text-sky-200/60">SERVICES</p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Systems built for measurable growth.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {services.map((item, idx) => (
            <motion.article
              key={item}
              variants={fadeInUp}
              transition={{ duration: 0.85, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-3xl border border-slate-200/10 bg-slate-900/35 p-7 shadow-[0_22px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1.5 hover:border-sky-200/26 hover:bg-slate-900/60 hover:shadow-[0_28px_70px_rgba(14,165,233,0.16)]"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-200/20 bg-sky-300/10 text-sm text-sky-100/85 transition duration-300 group-hover:scale-110 group-hover:border-sky-200/40 group-hover:bg-sky-300/18">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-medium leading-snug text-slate-100 transition duration-300 group-hover:text-sky-100">
                {item}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/78">
                Strategic implementation tailored to your funnel, team workflows, and revenue goals.
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

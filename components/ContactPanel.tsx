// components/ContactPanel.tsx
"use client";

import { motion } from "framer-motion";

export default function ContactPanel() {
  return (
    <section id="strategy-call" className="pb-20 md:pb-26">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto grid w-[92%] max-w-6xl gap-6 rounded-[2rem] border border-slate-200/12 bg-slate-900/40 p-7 shadow-[0_25px_70px_rgba(2,8,23,0.58)] sm:p-10 md:grid-cols-[1.05fr_1fr]"
      >
        <div>
          <p className="text-xs tracking-[0.22em] text-sky-200/60">GET STARTED</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Book your strategy call.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/76 sm:text-base">
            Tell us your growth priorities. We will map the highest-impact systems and rollout sequence for your business.
          </p>
          <div className="mt-8 space-y-2 text-sm text-slate-300/76">
            <p>Founders: Mantra Patel & Tanush Shah</p>
            <p>Email: hello@operium.co</p>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-slate-200/15 bg-black/35 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-300/35 focus:border-sky-200/45"
          />
          <input
            type="email"
            placeholder="Work email"
            className="w-full rounded-xl border border-slate-200/15 bg-black/35 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-300/35 focus:border-sky-200/45"
          />
          <textarea
            placeholder="What are you trying to scale?"
            rows={5}
            className="w-full rounded-xl border border-slate-200/15 bg-black/35 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-300/35 focus:border-sky-200/45"
          />
          <button
            type="button"
            className="inline-flex rounded-full border border-sky-300/35 bg-sky-100 px-6 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:shadow-[0_0_30px_rgba(125,211,252,0.35)]"
          >
            Request Strategy Call
          </button>
        </form>
      </motion.div>
    </section>
  );
}

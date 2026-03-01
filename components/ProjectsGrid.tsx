// components/ProjectsGrid.tsx
"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./motion";

const projects = [
  {
    title: "Pipeline OS",
    category: "Lead Generation",
    summary: "Automated outbound and inbound lead routing system that reduced response times by 73%.",
  },
  {
    title: "Revenue Command Center",
    category: "Internal Dashboard",
    summary: "Unified KPI dashboard connecting CRM, billing, and campaign channels for weekly planning.",
  },
  {
    title: "Growth Agent Stack",
    category: "AI Automation",
    summary: "AI assistants for qualification, follow-ups, and reporting across sales and client ops.",
  },
  {
    title: "Retention Engine",
    category: "Revenue Growth",
    summary: "Lifecycle automations and upsell workflows that increased average account value.",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="pb-20 md:pb-26">
      <motion.div
        variants={staggerContainer(0.1, 0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid w-[92%] max-w-6xl gap-5 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeInUp}
            className="rounded-3xl border border-slate-200/10 bg-slate-900/35 p-7 transition duration-300 hover:-translate-y-1.5 hover:border-sky-200/25 hover:bg-slate-900/55"
          >
            <p className="text-xs tracking-[0.18em] text-sky-200/65">{project.category}</p>
            <h3 className="mt-3 text-2xl font-medium text-slate-100">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300/78 sm:text-base">{project.summary}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

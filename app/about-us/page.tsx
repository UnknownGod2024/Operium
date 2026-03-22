// app/about-us/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightPillarBackground from "@/components/ui/LightPillarBackground";
import { LampContainer } from "@/components/ui/lamp";
import ProfileCard from "@/components/ui/ProfileCard";
import { motion } from "framer-motion";
import Script from "next/script";

const momentumPillars = [
  {
    title: "Signal Design",
    description:
      "We surface the handful of growth variables that actually move enterprise outcomes and eliminate everything noisy.",
  },
  {
    title: "Decision Infrastructure",
    description:
      "We build operating logic that guides teams toward better calls under pressure, not just better dashboards.",
  },
  {
    title: "Compounding Execution",
    description:
      "Every workflow is designed to improve over time so your business becomes sharper as volume increases.",
  },
];

const shiftPrinciples = [
  "Chaos is reactive.",
  "Infrastructure is deliberate.",
  "Scale is designed.",
  "Outcomes are engineered.",
];

const engineeredSystems = [
  {
    id: "01",
    title: "Revenue Architecture",
    description:
      "Pipeline structures, qualification frameworks, and operating cadences that make revenue behavior measurable.",
  },
  {
    id: "02",
    title: "Automation Infrastructure",
    description:
      "Connected tooling and process orchestration that remove manual drag from growth-critical functions.",
  },
  {
    id: "03",
    title: "Acquisition Engines",
    description:
      "Channel systems engineered for intent, efficiency, and resilient demand creation across cycles.",
  },
  {
    id: "04",
    title: "Conversion Frameworks",
    description:
      "Friction-reduction systems that align messaging, timing, and handoffs into decisive conversion outcomes.",
  },
];

const founderProfiles = [
  {
    name: "Mantra Patel",
    role: "Co-Founder",
    focus: "Systems Strategy & Growth Architecture",
  },
  {
    name: "Tanush Shah",
    role: "Co-Founder",
    focus: "Automation Design & Execution Infrastructure",
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#060C18] pt-22 sm:pt-24">
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.12.58/build/spline-viewer.js"
          strategy="afterInteractive"
        />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <spline-viewer
            url="https://prod.spline.design/ulSwcLKGL4k3-XE8/scene.splinecode"
            class="h-full w-full"
            style={{ pointerEvents: "none" }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(3,7,18,0.2)_0%,rgba(3,7,18,0.42)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-b from-transparent to-[#05070d]" />
      </section>
      <section className="relative overflow-hidden bg-[#060C18]">
        {/* LightPillar Background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <LightPillarBackground />
        </div>
        
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(6,12,24,0.3)_0%,rgba(6,12,24,0.1)_40%,rgba(6,12,24,0.3)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.15),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_50%)]" />
        
        {/* Edge Vignettes */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#05070d] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060C18] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#060C18] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#060C18] to-transparent" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-6 pb-10">
          {/* Section 1: Thesis */}
          <section className="relative py-28 text-center md:py-32">
            <p className="text-xs tracking-[0.3em] text-neutral-400">ABOUT OPERIUM</p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Growth is not a tactic.
              <br className="hidden md:block" /> It is institutional design.
            </h2>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-neutral-400">
              Most companies optimize campaigns. We redesign operating systems. The result is not temporary momentum
              but durable control over revenue, execution, and scale.
            </p>
            <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              {["Signal", "Systems", "Scale"].map((item) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm tracking-[0.15em] text-neutral-300 transition duration-500 hover:-translate-y-0.5 hover:border-blue-300/35 hover:bg-blue-500/[0.08] hover:text-white"
                >
                  {item.toUpperCase()}
                </div>
              ))}
            </div>
          </section>

          <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

          {/* Section 2: Momentum Shift */}
          <section className="relative grid gap-14 py-24 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <div>
              <p className="text-xs tracking-[0.28em] text-neutral-400">THE SHIFT</p>
              <h3 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
                Most teams chase motion.
                <br /> We build momentum that compounds.
              </h3>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-400">
                Every structure we deploy is designed to make execution cleaner, decisions faster, and outcomes less
                dependent on individual heroics.
              </p>
              <div className="relative mt-10 space-y-3 pl-8 before:absolute before:bottom-1 before:left-2 before:top-1 before:w-px before:bg-gradient-to-b before:from-blue-200/0 before:via-blue-300/35 before:to-blue-200/0">
                {shiftPrinciples.map((principle, index) => (
                  <div
                    key={principle}
                    className="relative text-base text-neutral-300 transition duration-500 hover:text-white"
                  >
                    <span className="absolute -left-7 top-2 h-2.5 w-2.5 rounded-full border border-blue-200/60 bg-blue-400/40 shadow-[0_0_16px_rgba(59,130,246,0.5)]" />
                    <span className="mr-3 text-xs tracking-[0.2em] text-blue-200/80">0{index + 1}</span>
                    {principle}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              {momentumPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-1 hover:border-blue-300/35 hover:bg-blue-500/[0.08]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(59,130,246,0.22),transparent_48%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <p className="relative text-sm tracking-[0.16em] text-blue-200/80">PILLAR</p>
                  <p className="relative mt-2 text-xl font-semibold text-white">{pillar.title}</p>
                  <p className="relative mt-3 leading-relaxed text-neutral-400">{pillar.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-4xl py-20 text-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
            <p className="my-8 text-xs tracking-[0.28em] text-neutral-400">FROM CHAOS TO UNFAIR ADVANTAGE</p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
          </section>

          {/* Section 3: Systems */}
          <section className="relative py-24 md:py-28">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs tracking-[0.28em] text-neutral-400">SYSTEMS WE ENGINEER</p>
                <h3 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
                  Precision infrastructure for modern growth.
                </h3>
              </div>
              <p className="max-w-md text-neutral-400">
                Designed as connected layers so marketing, sales, and operations move as one integrated system.
              </p>
            </div>
            <div className="mt-14 grid gap-7 md:grid-cols-2">
              {engineeredSystems.map((system) => (
                <article
                  key={system.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-blue-500/[0.08]"
                >
                  <div className="absolute right-6 top-6 rounded-full border border-blue-300/30 bg-blue-500/15 px-3 py-1 text-xs tracking-[0.2em] text-blue-200/90 transition duration-500 group-hover:scale-105 group-hover:border-blue-200/50 group-hover:text-blue-100">
                    {system.id}
                  </div>
                  <h4 className="pr-16 text-2xl font-semibold text-white">{system.title}</h4>
                  <p className="mt-4 leading-relaxed text-neutral-400">{system.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-4xl py-20 text-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="my-8 text-xs tracking-[0.28em] text-neutral-400"
            >
              PRECISION INFRASTRUCTURE
            </motion.p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
          </section>

          {/* Section 4: Meet the Team */}
          <section className="relative py-24 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs tracking-[0.28em] text-neutral-400">MEET THE TEAM</p>
              <h3 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
                Led by operators who build.
              </h3>
              <p className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-neutral-400">
                We approach growth as a long-horizon system, not a short-cycle campaign. That philosophy shapes every structure we build.
              </p>
            </motion.div>

            <div className="flex justify-center items-start gap-12 flex-wrap max-w-6xl mx-auto">
              {founderProfiles.map((founder, index) => {
                let avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${founder.name}`;
                
                if (founder.name === "Mantra Patel") {
                  avatarUrl = "/mantra-patel.jpg";
                } else if (founder.name === "Tanush Shah") {
                  avatarUrl = "/tanush-shah.jpg";
                }
                
                return (
                  <motion.div
                    key={founder.name}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full max-w-[320px]"
                  >
                    <ProfileCard
                      name={founder.name}
                      title={founder.focus}
                      handle={founder.name.toLowerCase().replace(' ', '')}
                      status="Available"
                      contactText="Connect"
                      avatarUrl={avatarUrl}
                      showUserInfo={true}
                      enableTilt={true}
                      behindGlowEnabled={true}
                      behindGlowColor="rgba(59, 130, 246, 0.5)"
                      innerGradient="linear-gradient(145deg, rgba(6, 12, 24, 0.9) 0%, rgba(37, 99, 235, 0.2) 100%)"
                      onContactClick={() => {}}
                    />
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </section>

      {/* Section 5: Lamp Animation - Full Window */}
      <LampContainer className="bg-[#060C18]">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] text-cyan-400/70 uppercase font-medium"
          >
            Our Philosophy
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white tracking-tight"
          >
            Execution quality over noise.
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-3xl"
          >
            <p className="text-lg md:text-xl leading-relaxed text-neutral-400 font-normal">
              Every system we design is built to compound over time, creating durable advantages that scale with your ambition.
            </p>
          </motion.div>
        </motion.div>
      </LampContainer>

      <Footer />
    </main>
  );
}

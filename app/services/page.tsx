// app/services/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightPillarBackground from "@/components/ui/LightPillarBackground";
import FloatingLinesBackground from "@/components/ui/FloatingLinesBackground";
import ScrollReveal from "@/components/ui/scroll-reveal";
import MagicBento from "@/components/ui/MagicBento";
import { FlipWords } from "@/components/ui/FlipText";
import { ContainerTextFlip } from "@/components/ui/ContainerTextFlip";
import { motion } from "framer-motion";
import Script from "next/script";

const services = [
  {
    id: "01",
    title: "Custom Software Development",
    description:
      "We design and develop tailored software solutions that solve specific operational challenges and unlock new capabilities.",
    features: ["Scalable Architecture", "Modern Tech Stack", "Performance Optimized"]
  },
  {
    id: "02",
    title: "Automation Systems",
    description:
      "We automate repetitive workflows and connect tools into seamless systems that reduce manual work and improve efficiency.",
    features: ["Workflow Integration", "API Connections", "Process Optimization"]
  },
  {
    id: "03",
    title: "Web Platforms",
    description:
      "We build modern, high-performance websites and web applications designed for speed, clarity, and conversion.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
  },
  {
    id: "04",
    title: "Internal Tools",
    description:
      "Custom dashboards, tools, and internal platforms that help teams operate with precision and control.",
    features: ["Data Visualization", "Team Collaboration", "Real-time Updates"]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Understand the problem",
    description: "Deep discovery to identify core challenges and opportunities"
  },
  {
    number: "02",
    title: "Design the system",
    description: "Strategic architecture that aligns with business objectives"
  },
  {
    number: "03",
    title: "Build the solution",
    description: "Clean, efficient code with modern best practices"
  },
  {
    number: "04",
    title: "Deploy and refine",
    description: "Launch with ongoing optimization and support"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#060C18] pt-22 sm:pt-24">
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.12.68/build/spline-viewer.js"
          strategy="afterInteractive"
        />
        <div className="absolute inset-0 z-0">
          <spline-viewer
            url="https://prod.spline.design/ICF56OIzzbqgvDDD/scene.splinecode"
            class="h-full w-full"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(3,7,18,0.2)_0%,rgba(3,7,18,0.42)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-b from-transparent to-[#05070d]" />
      </section>

      {/* Main Content */}
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
          {/* Section 1: Intro Statement with bold typography and container flip animation */}
          <section className="relative py-28 text-center md:py-32">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] text-cyan-400/80 uppercase font-semibold"
            >
              Services
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white tracking-tight"
              style={{ lineHeight: "1.2" }}
            >
              <span className="block mb-2">We build software that</span>
              <span className="block">makes your business{" "}
              <span className="relative inline-block">
                <ContainerTextFlip
                  words={["scalable", "efficient", "powerful", "unstoppable"]}
                  interval={2500}
                  className="text-cyan-400 relative"
                  textClassName="text-5xl md:text-7xl lg:text-8xl font-bold"
                  animationDuration={600}
                  scrollBased={false}
                />
                {/* Glassmorphic container behind the text */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-cyan-400/20 shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                  style={{
                    left: "-12px",
                    right: "-12px",
                    top: "-8px",
                    bottom: "-8px",
                  }}
                />
              </span>
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto mt-10 max-w-4xl"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 font-medium">
                From automation to full platforms, we design and engineer systems that eliminate manual work and create scalable infrastructure.
              </p>
            </motion.div>
          </section>

          <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

          {/* Section 2: Services Grid with MagicBento effect */}
          <section className="relative py-24 md:py-32">
            <div className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center"
              >
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-sm tracking-[0.3em] text-cyan-400/80 uppercase font-semibold"
                >
                  What We Build
                </motion.p>
                
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="mt-8 text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white tracking-tight"
                >
                  Our Services
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="mx-auto mt-8 max-w-3xl text-xl md:text-2xl leading-relaxed text-neutral-300 font-medium"
                >
                  Tailored solutions designed to solve operational challenges and unlock new capabilities.
                </motion.p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex justify-center"
            >
              <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={false}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={400}
                particleCount={12}
                glowColor="3, 159, 226"
                disableAnimations={false}
              />
            </motion.div>
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
              FROM CONCEPT TO DEPLOYMENT
            </motion.p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
          </section>

          {/* Section 3: Process with scroll transitions */}
          <section className="relative py-24 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs tracking-[0.28em] text-neutral-400">OUR APPROACH</p>
              <h3 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
                How we work
              </h3>
              <p className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-neutral-400">
                A structured process that ensures clarity, quality, and results at every stage.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-6">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition duration-500 hover:border-cyan-400/40 hover:bg-cyan-500/[0.08] cursor-pointer"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_70%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-semibold text-cyan-400 ring-1 ring-cyan-400/30 transition duration-300 group-hover:bg-cyan-500/30 group-hover:ring-cyan-400/50">
                        {step.number}
                      </span>
                      <span className="text-[10px] tracking-[0.2em] text-cyan-400/70 uppercase">Step</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-3 transition duration-300 group-hover:text-cyan-100">
                      {step.title}
                    </h4>
                    
                    <p className="text-sm leading-relaxed text-neutral-400 transition duration-300 group-hover:text-neutral-300">
                      {step.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

          {/* Section 4: Final Outcome Section - Continues with same LightPillar background */}
          <section className="relative py-32 md:py-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xs tracking-[0.3em] text-cyan-400/80 uppercase font-semibold"
              >
                The Outcome
              </motion.p>
              
              <h2 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white tracking-tight">
                <FlipWords 
                  words={["Built", "to", "scale,", "designed", "to", "last"]} 
                  className="inline-block"
                />
              </h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto mt-10 max-w-4xl"
              >
                <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 font-medium">
                  <FlipWords 
                    words={["Software", "that", "eliminates", "friction,", "automates", "complexity,", "and", "scales", "with", "your", "ambition."]} 
                    className="inline-block"
                  />
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                className="mx-auto mt-12 max-w-3xl grid gap-6 sm:grid-cols-3"
              >
                {[
                  { label: "Less Manual Work", desc: "Automation that frees your team" },
                  { label: "More Control", desc: "Systems built for precision" },
                  { label: "Built to Scale", desc: "Infrastructure that grows with you" }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm p-6 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-500/[0.12]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.2),transparent_70%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                    <p className="relative text-lg font-bold text-white mb-2">{item.label}</p>
                    <p className="relative text-sm text-neutral-400">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

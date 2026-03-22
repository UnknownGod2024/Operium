// app/projects/page.tsx
"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightPillarBackground from "@/components/ui/LightPillarBackground";
import ProjectsScrollMorph from "@/components/ui/ProjectsScrollMorph";
import OrbBackground from "@/components/ui/OrbBackground";
import { ContainerTextFlip } from "@/components/ui/ContainerTextFlip";
import { FlipWords } from "@/components/ui/FlipText";
import { OperiumAnimatedSection } from "@/components/ui/operium-animated-section";
import { motion } from "framer-motion";

const philosophyCards = [
  {
    id: "01",
    visibleText: "Systems beat hacks.",
    revealText: "We design growth infrastructure that compounds instead of temporary tactics that decay."
  },
  {
    id: "02",
    visibleText: "Automation is leverage.",
    revealText: "Every workflow we build removes manual work and replaces it with scalable systems."
  },
  {
    id: "03",
    visibleText: "Growth is architecture.",
    revealText: "Revenue expands when operations, data, and automation are designed as one unified system."
  },
  {
    id: "04",
    visibleText: "Infrastructure creates scale.",
    revealText: "We build the platforms teams operate on — not just tools they occasionally use."
  }
];

const capabilities = [
  {
    title: "Full-Stack Development",
    description: "End-to-end application development from database to UI"
  },
  {
    title: "System Integration",
    description: "Connecting tools and platforms into unified workflows"
  },
  {
    title: "AI Implementation",
    description: "Practical AI solutions that solve real business problems"
  },
  {
    title: "Performance Optimization",
    description: "Speed and scalability built into every layer"
  }
];

function PhilosophyCard({ card, index }: { card: typeof philosophyCards[0], index: number }) {
  const [widthPercentage, setWidthPercentage] = React.useState(0);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [left, setLeft] = React.useState(0);
  const [localWidth, setLocalWidth] = React.useState(0);
  const [isMouseOver, setIsMouseOver] = React.useState(false);

  React.useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]!.clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#060C18]/80 backdrop-blur-sm transition duration-500 hover:border-cyan-400/40 hover:bg-cyan-500/[0.08] cursor-pointer"
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_70%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 shadow-[0_0_40px_rgba(6,182,212,0.3)]" />
      
      <div className="relative p-8">
        {/* Visible Text - Bold Statement */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 transition duration-300 group-hover:text-cyan-100">
          {card.visibleText}
        </h3>
        
        {/* Text Reveal Container */}
        <div className="relative h-24 flex items-center overflow-hidden">
          {/* Revealed Text Layer */}
          <motion.div
            style={{
              width: "100%",
            }}
            animate={
              isMouseOver
                ? {
                    opacity: widthPercentage > 0 ? 1 : 0,
                    clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                  }
                : {
                    clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                  }
            }
            transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
            className="absolute z-20 will-change-transform"
          >
            <p className="text-base leading-relaxed font-medium text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 to-cyan-400">
              {card.revealText}
            </p>
          </motion.div>

          {/* Cursor Line */}
          <motion.div
            animate={{
              left: `${widthPercentage}%`,
              rotate: `${rotateDeg}deg`,
              opacity: widthPercentage > 0 ? 1 : 0,
            }}
            transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
            className="h-24 w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent absolute z-50 will-change-transform"
          />

          {/* Base Text Layer */}
          <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
            <p className="text-base leading-relaxed text-neutral-500">
              {card.revealText}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#060C18] text-white">
      <Navbar />
      
      {/* Hero Section with Scroll Morph Animation and Orb Background */}
      <section className="relative isolate w-full h-screen overflow-hidden bg-[#060C18]">
        {/* Orb Background - Centered behind scroll-morph */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <OrbBackground size={1000} />
        </div>
        
        {/* Gradient Overlays for blending */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(6,12,24,0.3)_0%,rgba(6,12,24,0.1)_40%,rgba(6,12,24,0.3)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_60%)]" />
        
        {/* Edge Vignettes */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#060C18] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#060C18] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#060C18] to-transparent" />
        </div>

        {/* Scroll Morph Animation - Full height */}
        <div className="absolute inset-0 z-20">
          <ProjectsScrollMorph />
        </div>
        
        {/* Bottom gradient for smooth transition */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-32 bg-gradient-to-t from-[#060C18] to-transparent" />
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
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060C18] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#060C18] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#060C18] to-transparent" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl px-6 pb-10 pt-10">

          {/* Section 2: Systems Philosophy */}
          <section className="relative py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs tracking-[0.28em] text-cyan-400/80 uppercase font-semibold">Systems Philosophy</p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
                How we think about growth systems.
              </h2>
              <p className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-neutral-400">
                We build infrastructure that compounds — not tactics that expire.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
              {philosophyCards.map((card, index) => (
                <PhilosophyCard key={card.id} card={card} index={index} />
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
              BUILT WITH PRECISION
            </motion.p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
          </section>

          {/* Section 3: Capabilities */}
          <section className="relative py-24 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-xs tracking-[0.28em] text-neutral-400">WHAT WE DELIVER</p>
              <h3 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
                Core Capabilities
              </h3>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 transition duration-500 hover:border-cyan-400/40 hover:bg-cyan-500/[0.08]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.15),transparent_70%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <h4 className="relative text-lg font-semibold text-white mb-3 transition duration-300 group-hover:text-cyan-100">
                    {capability.title}
                  </h4>
                  <p className="relative text-sm leading-relaxed text-neutral-400 transition duration-300 group-hover:text-neutral-300">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

          {/* Section 5: Operium Animated Section */}
          <section className="relative py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
              style={{ height: "600px" }}
            >
              {/* Canvas container - blends seamlessly */}
              <div className="relative w-full h-full">
                <OperiumAnimatedSection />
              </div>
              
              {/* Subtle gradient overlay for depth */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(6,12,24,0.3)_100%)]" />
            </motion.div>
          </section>

          <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

          {/* Section 6: Final CTA */}
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
                Ready to Build
              </motion.p>
              
              <h2 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white tracking-tight">
                <FlipWords 
                  words={["Let's", "build", "something", "exceptional"]} 
                  className="inline-block"
                />
              </h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto mt-10 max-w-3xl"
              >
                <p className="text-xl md:text-2xl leading-relaxed text-neutral-300 font-medium mb-8">
                  Every project starts with understanding your challenge. Let's discuss how we can help.
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/50 transition duration-300 hover:bg-cyan-400 hover:shadow-cyan-400/50"
                >
                  Start a Project
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

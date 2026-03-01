// app/about-us/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <div className="relative overflow-hidden bg-[#060C18]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#05070d] to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(37,99,235,0.18),rgba(37,99,235,0.06)_34%,transparent_68%)] [mask-image:radial-gradient(90%_70%_at_50%_35%,black,transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(37,99,235,0.12),transparent_62%)] [mask-image:radial-gradient(82%_72%_at_50%_52%,black,transparent)]" />
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#060C18] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#060C18] to-transparent" />
          <div className="absolute left-1/2 top-16 bottom-16 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-300/25 to-transparent md:block" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10">
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

          <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

          {/* Section 4: Founders */}
          <section className="relative py-24 text-center md:py-32">
            <p className="text-xs tracking-[0.28em] text-neutral-400">LED BY OPERATORS</p>
            <h3 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
              Built by founders who value execution quality over noise.
            </h3>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
              We approach growth as a long-horizon system, not a short-cycle campaign. That philosophy shapes every
              structure we build with clients.
            </p>
            <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
              {founderProfiles.map((founder) => (
                <article
                  key={founder.name}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition duration-500 hover:border-blue-300/35 hover:bg-blue-500/[0.08]"
                >
                  <p className="text-2xl font-semibold text-white">{founder.name}</p>
                  <p className="mt-1 text-neutral-300">{founder.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-400">{founder.focus}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

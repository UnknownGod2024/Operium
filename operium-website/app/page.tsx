"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const problems = [
  {
    title: "Leads fall through the cracks",
    description:
      "Teams miss follow-ups, duplicate efforts, and lose revenue because the system is manual."
  },
  {
    title: "No clear customer journey",
    description:
      "Marketing and sales feel disconnected, so customers drop off before they buy."
  },
  {
    title: "Growth depends on founders",
    description:
      "When the founder steps away, the pipeline slows and decision-making stalls."
  }
];

const services = [
  {
    title: "AI-Powered Lead Management",
    description:
      "Capture, qualify, and route every lead with intelligent automation and real-time alerts."
  },
  {
    title: "Conversion-Focused Marketing",
    description:
      "Performance campaigns, landing pages, and messaging tailored to Mumbai's market realities."
  },
  {
    title: "Sales & Ops Automation",
    description:
      "Automate handoffs, reminders, and reporting so your team executes consistently."
  },
  {
    title: "Custom Business Software",
    description:
      "Purpose-built tools that unify your CRM, support, and operations into one workflow."
  }
];

const steps = [
  {
    title: "Discovery & Diagnosis",
    description:
      "We audit your current funnel, customer journey, and operational bottlenecks."
  },
  {
    title: "Blueprint the System",
    description:
      "We design the automation stack, messaging, and workflow that fits your team."
  },
  {
    title: "Build, Launch, Optimize",
    description:
      "We ship fast, test weekly, and optimize for ROI and retention."
  }
];

const advantages = [
  {
    title: "Mumbai-first expertise",
    description:
      "Local market insight that understands how Indian buyers move from interest to trust."
  },
  {
    title: "Full-stack execution",
    description:
      "Strategy, software, automation, and marketing delivered by one focused team."
  },
  {
    title: "Built for lean teams",
    description:
      "We help you scale revenue without expanding headcount."
  }
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 }
    }
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <main className="page-bg">
      <div className="grid-line">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-28 px-6 pb-20 pt-10 md:px-10">
          <header className="section flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full border border-sand bg-white/80" />
              <div>
                <p className="text-sm font-semibold tracking-[0.2em]">OPERIUM</p>
                <p className="text-xs text-stone">AI Growth & Ops Studio</p>
              </div>
            </div>
            <a
              href="#strategy-call"
              className="hidden items-center gap-2 rounded-full border border-sand bg-white/90 px-5 py-2 text-sm font-semibold text-ink shadow-outline md:flex"
            >
              Book a Strategy Call
            </a>
          </header>

          <section className="section">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]"
            >
              <div className="space-y-7">
                <motion.p variants={fadeUp} className="kicker">
                  Mumbai-first growth partners
                </motion.p>
                <motion.h1
                  variants={fadeUp}
                  className="font-serif text-4xl leading-tight tracking-tighter md:text-6xl"
                >
                  Win more customers and manage them better with AI, automation,
                  and marketing.
                </motion.h1>
                <motion.p variants={fadeUp} className="text-lg text-stone">
                  Operium helps Indian businesses scale revenue without hiring
                  more staff. We build the systems that turn leads into loyal
                  customers.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                  <a
                    href="#strategy-call"
                    className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-linen"
                  >
                    Book a Strategy Call
                  </a>
                  <a
                    href="#services"
                    className="rounded-full border border-sand px-6 py-3 text-sm font-semibold text-ink"
                  >
                    Explore Services
                  </a>
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  className="grid grid-cols-2 gap-6 pt-6 text-sm text-stone"
                >
                  <div>
                    <p className="text-2xl font-semibold text-ink">+32%</p>
                    <p>Average lead-to-sale conversion lift</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-ink">4 weeks</p>
                    <p>To launch a complete growth system</p>
                  </div>
                </motion.div>
              </div>
              <motion.div
                variants={fadeUp}
                className="card flex flex-col justify-between gap-8 p-8"
              >
                <div className="space-y-4">
                  <p className="kicker">Founder-led</p>
                  <h2 className="font-serif text-2xl">
                    Led by Mantra Patel
                  </h2>
                  <p className="text-sm text-stone">
                    A hands-on partner for business owners who need measurable
                    growth, not more complexity.
                  </p>
                </div>
                <div className="space-y-3 text-sm text-stone">
                  <p className="font-semibold text-ink">Core focus areas</p>
                  <ul className="space-y-2">
                    <li>AI-powered lead capture & follow-up</li>
                    <li>Sales automation & CRM workflows</li>
                    <li>Conversion-optimized marketing</li>
                    <li>Custom ops dashboards</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </section>

          <section className="section" id="problems">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-10"
            >
              <motion.div variants={fadeUp} className="space-y-3">
                <p className="kicker">The real blockers</p>
                <h2 className="font-serif text-3xl tracking-tighter md:text-4xl">
                  Why growth stalls for most businesses
                </h2>
                <p className="text-stone">
                  You have demand, but the system behind it is fragile. That is
                  where revenue leaks.
                </p>
              </motion.div>
              <div className="grid gap-6 md:grid-cols-3">
                {problems.map((problem) => (
                  <motion.div
                    key={problem.title}
                    variants={fadeUp}
                    className="card p-6"
                  >
                    <h3 className="text-lg font-semibold">{problem.title}</h3>
                    <p className="mt-3 text-sm text-stone">
                      {problem.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section className="section" id="services">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-10"
            >
              <motion.div variants={fadeUp} className="space-y-3">
                <p className="kicker">Services</p>
                <h2 className="font-serif text-3xl tracking-tighter md:text-4xl">
                  A full-stack growth engine
                </h2>
                <p className="text-stone">
                  We combine AI, automation, software, and marketing into one
                  integrated delivery.
                </p>
              </motion.div>
              <div className="grid gap-6 md:grid-cols-2">
                {services.map((service) => (
                  <motion.div
                    key={service.title}
                    variants={fadeUp}
                    className="card p-7"
                  >
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm text-stone">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section className="section" id="how-it-works">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]"
            >
              <motion.div variants={fadeUp} className="space-y-3">
                <p className="kicker">How it works</p>
                <h2 className="font-serif text-3xl tracking-tighter md:text-4xl">
                  From diagnosis to durable growth
                </h2>
                <p className="text-stone">
                  A structured approach that keeps the team aligned and the
                  pipeline moving.
                </p>
              </motion.div>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    variants={fadeUp}
                    className="card flex gap-6 p-6"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sand bg-white text-sm font-semibold">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm text-stone">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section className="section" id="why-operium">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-10"
            >
              <motion.div variants={fadeUp} className="space-y-3">
                <p className="kicker">Why Operium</p>
                <h2 className="font-serif text-3xl tracking-tighter md:text-4xl">
                  Built for Indian businesses that want clarity and control
                </h2>
                <p className="text-stone">
                  We keep the system clean, measurable, and aligned with your
                  team.
                </p>
              </motion.div>
              <div className="grid gap-6 md:grid-cols-3">
                {advantages.map((advantage) => (
                  <motion.div
                    key={advantage.title}
                    variants={fadeUp}
                    className="card p-6"
                  >
                    <h3 className="text-lg font-semibold">{advantage.title}</h3>
                    <p className="mt-3 text-sm text-stone">
                      {advantage.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section className="section" id="strategy-call">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-10 rounded-3xl border border-sand bg-white/80 p-10 shadow-soft md:grid-cols-[1fr_1.1fr]"
            >
              <motion.div variants={fadeUp} className="space-y-4">
                <p className="kicker">Strategy call</p>
                <h2 className="font-serif text-3xl tracking-tighter md:text-4xl">
                  Ready to build your growth system?
                </h2>
                <p className="text-stone">
                  Share a few details and we will map a clear path for your next
                  90 days of revenue growth.
                </p>
                <div className="space-y-3 text-sm text-stone">
                  <p className="font-semibold text-ink">What you get</p>
                  <ul className="space-y-2">
                    <li>Customer journey review</li>
                    <li>AI + automation opportunity map</li>
                    <li>Growth plan tailored to Mumbai market</li>
                  </ul>
                </div>
              </motion.div>
              <motion.form
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <input name="name" placeholder="Full name" required />
                  <input name="company" placeholder="Company name" required />
                </div>
                <input
                  name="email"
                  type="email"
                  placeholder="Work email"
                  required
                />
                <input name="phone" placeholder="Phone number" required />
                <textarea
                  name="goal"
                  rows={4}
                  placeholder="What is your biggest growth goal right now?"
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-linen"
                >
                  {status === "loading" ? "Sending..." : "Book My Call"}
                </button>
                {status === "sent" && (
                  <p className="text-sm text-emerald-700">
                    Thanks! We will reach out within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-700">
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className="text-xs text-stone">
                  By submitting, you agree to be contacted by Operium.
                </p>
              </motion.form>
            </motion.div>
          </section>

          <footer className="section border-t border-sand pt-10 text-sm text-stone">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-ink">Operium</p>
                <p>AI, automation, and marketing for Indian businesses.</p>
              </div>
              <div className="space-y-2 md:text-right">
                <p>Mumbai, India</p>
                <p>hello@operium.in</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

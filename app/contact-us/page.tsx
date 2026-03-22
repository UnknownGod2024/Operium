// app/contact-us/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import Hero from "@/components/ui/animated-shader-hero";
import { ShaderBackgroundWrapper } from "@/components/ui/shader-background-wrapper";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const handleGetStarted = () => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    // Navigate to services page
    window.location.href = '/services';
  };

  return (
    <main className="min-h-screen bg-[#060C18] text-white">
      <Navbar />
      
      {/* Hero Section with Animated Shader */}
      <Hero
        trustBadge={{
          text: "Trusted by growth-focused teams",
          icons: ["✨"]
        }}
        headline={{
          line1: "Let's Build",
          line2: "Your Growth System"
        }}
        subtitle="Share your challenges and goals. We'll design a strategic roadmap that transforms operations into scalable infrastructure."
        buttons={{
          primary: {
            text: "Start a Conversation",
            onClick: handleGetStarted
          },
          secondary: {
            text: "Explore Our Work",
            onClick: handleLearnMore
          }
        }}
        className="bg-[#060C18]"
      />

      {/* Contact Form Section */}
      <ShaderBackgroundWrapper className="min-h-screen">
        <div className="relative z-20 mx-auto max-w-7xl px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-cyan-400/80 uppercase font-semibold">
              Get In Touch
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Ready to scale your operations?
            </h2>
            <p className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-neutral-400">
              Tell us about your current challenges and growth targets. We'll outline a strategic automation roadmap built around your business model.
            </p>
          </motion.div>

          <ContactPanel />
        </div>
      </ShaderBackgroundWrapper>

      <Footer />
    </main>
  );
}

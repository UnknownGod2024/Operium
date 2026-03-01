// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Orb from "./Orb";
import ShinyText from "./ShinyText";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav
        className={`mx-auto mt-4 flex w-[92%] max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 md:px-7 ${
          scrolled
            ? "border-slate-200/15 bg-[#050912]/70 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            : "border-slate-200/10 bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-[1.1rem] font-semibold tracking-[0.22em] text-slate-200 md:text-[1.18rem]"
        >
          <span className="relative inline-block h-[1.06em] w-[1.06em]">
            <Orb hoverIntensity={2} rotateOnHover hue={0} forceHoverState={false} backgroundColor="#000000" />
          </span>
          <ShinyText
            text="PERIUM"
            speed={3}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs tracking-[0.13em] transition ${
                  active ? "text-sky-200" : "text-slate-300/65 hover:text-slate-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact-us#strategy-call"
          className="rounded-full border border-sky-300/28 bg-sky-300/12 px-4 py-2 text-xs font-medium tracking-wide text-sky-100 transition duration-300 hover:border-sky-200/42 hover:bg-sky-300/20"
        >
          Get Strategy Call
        </Link>
      </nav>
    </motion.header>
  );
}

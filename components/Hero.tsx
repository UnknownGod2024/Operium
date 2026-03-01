// components/Hero.tsx
"use client";

import Script from "next/script";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-22 sm:pt-24">
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.55/build/spline-viewer.js"
        strategy="afterInteractive"
      />

      <div className="absolute inset-0 z-0">
        <spline-viewer
          url="https://prod.spline.design/X0lA6a8QJnwiJ3b1/scene.splinecode"
          class="h-full w-full"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(3,7,18,0.2)_0%,rgba(3,7,18,0.42)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-b from-transparent to-[#05070d]" />
    </section>
  );
}

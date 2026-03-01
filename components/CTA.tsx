// components/CTA.tsx
"use client";

import WorldMap from "@/components/ui/world-map";

export default function CTA() {
  return (
    <section id="strategy-call" className="relative w-full overflow-hidden bg-[#060C18] py-40">
      <div className="mx-auto grid w-[92%] max-w-6xl items-center gap-10 rounded-[2rem] border border-sky-100/10 bg-[linear-gradient(148deg,rgba(30,58,138,0.14),rgba(15,23,42,0.7)_46%,rgba(2,6,23,0.92))] px-6 py-10 shadow-[0_32px_90px_rgba(2,8,23,0.72)] sm:px-10 md:grid-cols-[1.12fr_1fr] md:gap-12 md:py-14">
        <div className="relative h-[285px] overflow-hidden rounded-3xl border border-sky-200/20 bg-[#050a16]/72 shadow-[0_26px_75px_rgba(2,8,23,0.65)]">
          <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.22),transparent_56%),radial-gradient(circle_at_78%_74%,rgba(37,99,235,0.16),transparent_52%)]" />
          <div className="relative h-full w-full opacity-100">
            <WorldMap
              className="h-full w-full"
              dots={[
                { start: { lat: 40.7128, lng: -74.006 }, end: { lat: 51.5074, lng: -0.1278 } },
                { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 37.7749, lng: -122.4194 } },
                { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: -33.8688, lng: 151.2093 } },
              ]}
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Ready to Scale?</h2>

          <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-slate-300/84 md:mx-0">
            Partner with Operium to architect growth infrastructure that compounds every month.
          </p>

          <button className="mt-8 rounded-full bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#3B82F6] px-8 py-3 font-medium text-white shadow-[0_0_42px_rgba(59,130,246,0.4)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_56px_rgba(59,130,246,0.52)]">
            Book Your Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
}

// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Founders from "@/components/Founders";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Founders />
      <CTA />
      <Footer />
    </main>
  );
}

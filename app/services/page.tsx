// app/services/page.tsx
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />
      <PageIntro
        eyebrow="SERVICES"
        title="Custom systems for lead flow, automation, and revenue velocity."
        description="From acquisition engines to internal dashboards, we architect practical systems that remove bottlenecks and increase growth throughput."
      />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}

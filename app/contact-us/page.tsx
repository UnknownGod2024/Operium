// app/contact-us/page.tsx
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />
      <PageIntro
        eyebrow="CONTACT"
        title="Let us architect your next growth phase."
        description="Share your current bottlenecks and growth targets. We will outline a strategic automation roadmap built around your business model."
      />
      <ContactPanel />
      <Footer />
    </main>
  );
}

// app/projects/page.tsx
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />
      <PageIntro
        eyebrow="PROJECTS"
        title="Selected systems shipped for growth-focused teams."
        description="A sample of automation platforms and revenue systems we have designed to create speed, visibility, and repeatable scale."
      />
      <ProjectsGrid />
      <CTA />
      <Footer />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Madhur Pandey — CS Student · AI & Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Madhur Pandey — Computer Science Engineering student (AI specialization) in Pune. Projects in AI, Java, and software development.",
      },
      { property: "og:title", content: "Madhur Pandey — Portfolio" },
      {
        property: "og:description",
        content:
          "CS Engineering student · AI & Software Developer. Projects, skills, and certifications.",
      },
    ],
  }),
});

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main className="relative bg-bg text-text-primary font-body">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <CursorGlow />
      <Navbar />
      <Hero />
      <Works />
      <Skills />
      <Certifications />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

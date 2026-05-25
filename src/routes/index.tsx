import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Madhur Pandey — CS Engineering Student · AI" },
      {
        name: "description",
        content:
          "Portfolio of Madhur Pandey — CS Engineering student (AI specialization) based in Pune. Building intelligent products with Python, Java, and RAG models.",
      },
      { property: "og:title", content: "Madhur Pandey — Portfolio" },
      {
        property: "og:description",
        content: "CS Engineering student specializing in AI. Projects, certifications, and skills.",
      },
    ],
  }),
});

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <main className="bg-bg text-text-primary font-body">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navbar />
      <Hero />
      <Works />
      <Skills />
      <Certifications />
      <Stats />
      <Footer />
    </main>
  );
}

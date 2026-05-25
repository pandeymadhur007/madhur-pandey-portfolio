import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { value: "8.36", label: "CGPA" },
  { value: "B.E.", label: "CSE · AI" },
  { value: "2028", label: "Graduating" },
  { value: "3+", label: "Projects" },
];

export function About() {
  return (
    <section id="about" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="About"
          title="About me"
          italicWord="me"
          subtitle="A quick intro for recruiters and collaborators."
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-3 space-y-5 text-base md:text-lg text-text-primary/85 leading-relaxed">
            <p>
              I'm <span className="font-display italic">Madhur Pandey</span>, a B.E. Computer
              Science Engineering student at NMIET, Pune (Batch 2024 · Class of '28), specializing
              in AI.
            </p>
            <p>
              I love turning ideas into working software — from{" "}
              <span className="text-text-primary">Gram AI</span>, an agriculture platform helping
              farmers make better decisions, to record-management systems written in Java and MySQL.
            </p>
            <p className="text-muted">
              Currently looking for internships and collaborations where I can build meaningful
              products, learn fast, and ship.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-stroke bg-surface/40 p-5 md:p-6"
              >
                <div className="text-3xl md:text-4xl font-display italic text-text-primary mb-2">
                  {s.value}
                </div>
                <div className="text-[11px] text-muted uppercase tracking-[0.2em]">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

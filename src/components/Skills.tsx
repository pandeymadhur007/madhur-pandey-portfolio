import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const skills = [
  { name: "Python", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "MySQL", category: "Database" },
  { name: "Data Structures & Algorithms", category: "Core" },
  { name: "DBMS", category: "Core" },
  { name: "AI Fundamentals", category: "Core" },
  { name: "Probability & Statistics", category: "Core" },
  { name: "Data Science", category: "Domain" },
  { name: "RAG Models", category: "Domain" },
  { name: "Software Development", category: "Domain" },
  { name: "Git & GitHub", category: "Tools" },
];

export function Skills() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Toolkit"
          title="Skills & expertise"
          italicWord="expertise"
          subtitle="Languages, frameworks, and concepts I work with daily as a CS Engineering student specializing in AI."
        />
        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative rounded-full"
            >
              <span className="absolute -inset-[1.5px] rounded-full accent-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative inline-flex items-center gap-2 bg-surface border border-stroke rounded-full px-5 py-2.5 text-sm text-text-primary">
                {s.name}
                <span className="text-xs text-muted">· {s.category}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

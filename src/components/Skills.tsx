import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    label: "Languages",
    items: ["C++", "Java", "Python", "SQL"],
  },
  {
    label: "Development",
    items: ["Git", "GitHub", "VS Code", "MySQL"],
  },
  {
    label: "Core CS",
    items: ["DSA", "DBMS", "OOP", "Probability & Statistics"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Toolkit"
          title="Skills & expertise"
          italicWord="expertise"
          subtitle="Languages, tools, and core CS concepts I work with daily as a CS Engineering student."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="group relative rounded-3xl border border-stroke bg-surface/40 hover:bg-surface/70 p-6 md:p-8 transition-colors backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-stroke" />
                <span className="text-[11px] text-muted uppercase tracking-[0.3em]">{g.label}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it, i) => (
                  <motion.span
                    key={it}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: gi * 0.08 + i * 0.04 }}
                    whileHover={{ y: -2 }}
                    className="inline-flex items-center gap-2 bg-bg border border-stroke rounded-full px-4 py-2 text-sm text-text-primary hover:border-text-primary/40 transition-colors"
                  >
                    {it}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

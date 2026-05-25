import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    title: "Gram AI",
    tag: "AI · Agriculture",
    desc: "AI-powered agriculture platform giving farmers crop guidance, live mandi prices, climate insights, and a multilingual chatbot.",
    features: ["Multilingual AI chatbot", "Crop recommendation", "Live market prices", "Weather & climate data"],
    stack: ["React", "AI/LLM", "TailwindCSS", "Netlify"],
    bg: "linear-gradient(135deg, #1a3c2a 0%, #2d5a3d 50%, #5a8a5c 100%)",
    live: "https://gramaiv1.netlify.app/",
    github: "https://github.com/",
  },
  {
    title: "Patient Record System",
    tag: "Java · OOP",
    desc: "Object-oriented patient record management system with structured CRUD workflows for healthcare data.",
    features: ["Add / update / delete records", "Search & filter patients", "File-based persistence", "Clean OOP design"],
    stack: ["Java", "OOP", "File I/O"],
    bg: "linear-gradient(135deg, #0c2340 0%, #1a4a6e 60%, #2d8a9e 100%)",
    github: "https://github.com/",
  },
  {
    title: "Library Management System",
    tag: "Java · MySQL",
    desc: "End-to-end library system with issue/return workflows, member management, and live database connectivity.",
    features: ["Book issue & return", "Member management", "MySQL integration", "Search by title/author"],
    stack: ["Java", "MySQL", "JDBC"],
    bg: "linear-gradient(135deg, #5c2018 0%, #9b4423 60%, #d4842a 100%)",
    github: "https://github.com/",
  },
];

export function Works() {
  return (
    <section id="work" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured projects"
          italicWord="projects"
          subtitle="A few things I've built recently — from AI products to systems-level Java work."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden bg-surface border border-stroke rounded-3xl"
            >
              <div className="relative h-56 md:h-64 overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: p.bg }} />
                <div
                  className="absolute inset-0 opacity-20 mix-blend-multiply"
                  style={{
                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "4px 4px",
                  }}
                />
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <span className="text-[10px] md:text-xs text-white/70 uppercase tracking-[0.3em] mb-2">{p.tag}</span>
                  <h3 className="text-2xl md:text-4xl font-display italic text-white">{p.title}</h3>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-sm md:text-base text-text-primary/85 mb-5">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] uppercase tracking-[0.15em] px-3 py-1 rounded-full border border-stroke bg-bg text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs md:text-sm text-muted flex items-start gap-2">
                      <span className="text-text-primary/60 mt-1">·</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs md:text-sm rounded-full px-4 py-2 bg-text-primary text-bg hover:opacity-90 transition-opacity"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs md:text-sm rounded-full px-4 py-2 border border-stroke text-text-primary hover:bg-stroke/40 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

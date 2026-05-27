import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, X, Check } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Project = {
  title: string;
  tag: string;
  desc: string;
  features: string[];
  stack: string[];
  bg: string;
  accent: string;
  live?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Gram AI",
    tag: "AI · Agriculture",
    desc: "AI-powered agriculture platform giving farmers crop guidance, live mandi prices, climate insights, and a multilingual chatbot.",
    features: ["Multilingual AI chatbot", "Crop recommendation", "Live market prices", "Weather & climate data"],
    stack: ["React", "AI/LLM", "TailwindCSS", "Netlify"],
    bg: "linear-gradient(135deg, #0a2418 0%, #14402a 45%, #1f6b3f 100%)",
    accent: "rgba(76, 217, 130, 0.35)",
    live: "https://officialgramai.netlify.app/",
    github: "https://github.com/pandeymadhur007",
  },
  {
    title: "Patient Record System",
    tag: "Java · OOP",
    desc: "Object-oriented patient record management system with structured CRUD workflows for healthcare data.",
    features: ["Add / update / delete records", "Search & filter patients", "File-based persistence", "Clean OOP design"],
    stack: ["Java", "OOP", "File I/O"],
    bg: "linear-gradient(135deg, #06182e 0%, #0e3a5c 50%, #1e6a96 100%)",
    accent: "rgba(120, 190, 255, 0.35)",
    github: "https://github.com/pandeymadhur007",
  },
  {
    title: "Library Management System",
    tag: "Java · MySQL",
    desc: "End-to-end library system with issue/return workflows, member management, and live database connectivity.",
    features: ["Book issue & return", "Member management", "MySQL integration", "Search by title/author"],
    stack: ["Java", "MySQL", "JDBC"],
    bg: "linear-gradient(135deg, #2a0e08 0%, #6b2614 50%, #c2622b 100%)",
    accent: "rgba(255, 160, 100, 0.35)",
    github: "https://github.com/pandeymadhur007",
  },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${((y - 0.5) * -6).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * 6).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
  };
  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transform: "perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
        transition: "transform 300ms cubic-bezier(.2,.8,.2,1)",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}

export function Works() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="relative bg-bg py-16 md:py-24 overflow-hidden">
      {/* Ambient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-60">
        <div className="absolute top-20 -left-32 w-[480px] h-[480px] rounded-full bg-[#4E85BF]/10 blur-[140px]" />
        <div className="absolute bottom-0 -right-32 w-[480px] h-[480px] rounded-full bg-[#89AACC]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured projects"
          italicWord="projects"
          subtitle="A few things I've built recently — from AI products to systems-level Java work."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-7">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <TiltCard className="group card-glow-border relative rounded-3xl">
                <div
                  className="relative overflow-hidden rounded-3xl border border-stroke bg-surface/60 backdrop-blur-xl"
                  style={{ transform: "translateZ(0)" }}
                >
                  {/* Visual header */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      style={{ background: p.bg }}
                    />
                    {/* tech grid overlay */}
                    <div
                      className="absolute inset-0 opacity-25 mix-blend-overlay"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    {/* spotlight follows cursor */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle 260px at var(--mx,50%) var(--my,50%), ${p.accent}, transparent 65%)`,
                      }}
                    />
                    {/* shine sweep */}
                    <div className="absolute -inset-x-1/2 top-0 h-full skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-[1400ms] ease-out" />
                    {/* corner glyphs */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] text-white/70 uppercase tracking-[0.3em]">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                        {p.tag}
                      </span>
                      <span>0{i + 1}</span>
                    </div>
                    <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                      <h3 className="text-2xl md:text-4xl font-display italic text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
                        {p.title}
                      </h3>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface to-transparent" />
                  </div>

                  {/* Body */}
                  <div className="relative p-6 md:p-8">
                    <p className="text-sm md:text-base text-text-primary/85 mb-5 leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-stroke bg-bg/60 text-text-primary/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="relative z-20 flex flex-wrap gap-2">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs md:text-sm rounded-full px-4 py-2 bg-text-primary text-bg hover:opacity-90 hover:-translate-y-0.5 transition-all cursor-pointer"
                        >
                          Live Demo <ExternalLink size={13} />
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs md:text-sm rounded-full px-4 py-2 border border-stroke bg-bg/40 text-text-primary hover:bg-stroke/40 hover:-translate-y-0.5 transition-all cursor-pointer"
                        >
                          <Github size={13} /> GitHub
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => setActive(p)}
                        className="inline-flex items-center gap-1.5 text-xs md:text-sm rounded-full px-4 py-2 border border-stroke bg-bg/40 text-text-primary hover:bg-stroke/40 hover:-translate-y-0.5 transition-all cursor-pointer"
                      >
                        <Eye size={13} /> View Details
                      </button>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl border border-stroke bg-surface/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="relative h-40 md:h-48" style={{ background: active.bg }}>
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <span className="text-[10px] text-white/70 uppercase tracking-[0.3em] mb-1">
                    {active.tag}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-display italic text-white">
                    {active.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 border border-white/20 text-white flex items-center justify-center hover:bg-black/60 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-sm md:text-base text-text-primary/90 mb-6">{active.desc}</p>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted mb-3">
                  Features
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {active.features.map((f) => (
                    <li key={f} className="text-sm text-text-primary/85 flex items-start gap-2">
                      <Check size={14} className="mt-1 text-[#89AACC] shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-[11px] uppercase tracking-[0.25em] text-muted mb-3">Stack</div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {active.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-stroke bg-bg/60 text-text-primary/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.live && (
                    <a
                      href={active.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm rounded-full px-5 py-2.5 bg-text-primary text-bg hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm rounded-full px-5 py-2.5 border border-stroke text-text-primary hover:bg-stroke/40 transition-colors cursor-pointer"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

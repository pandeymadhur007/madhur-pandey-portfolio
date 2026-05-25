import certDS from "@/assets/cert-datascience.jpeg";
import certIdeathon from "@/assets/cert-ideathon.jpeg";
import certIBM from "@/assets/cert-ibm.jpg";
import certPython from "@/assets/cert-python.jpg";
import certInfosys1 from "@/assets/cert-infosys-1.jpg";
import certInfosys2 from "@/assets/cert-infosys-2.jpg";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

type Item = {
  title: string;
  issuer: string;
  date: string;
  img: string;
  extras?: { label: string; img: string }[];
};

const items: Item[] = [
  {
    title: "Essentials of Data Science",
    issuer: "PyNet Labs × NMIET, Pune",
    date: "Oct 2025",
    img: certDS,
  },
  {
    title: "IDEATHON 2025 — Certificate of Appreciation",
    issuer: "Nutan Incubation Centre, NMIET",
    date: "2025",
    img: certIdeathon,
  },
  {
    title: "Introduction to Retrieval Augmented Generation",
    issuer: "IBM SkillsBuild",
    date: "Aug 2025",
    img: certIBM,
  },
  {
    title: "AI & Python Development Megaclass — 300+ Hands-on Projects",
    issuer: "Udemy · School of AI",
    date: "Oct 2025",
    img: certPython,
  },
  {
    title: "Infosys Springboard — Robotics Courses",
    issuer: "Infosys Springboard",
    date: "Mar 2026",
    img: certInfosys1,
    extras: [
      { label: "Mini Challenge — Garbage Moving Robot", img: certInfosys1 },
      { label: "Programming Activities — Drive the Bot", img: certInfosys2 },
    ],
  },
];

export function Certifications() {
  return (
    <section id="certs" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Certifications"
          title="Recent achievements"
          italicWord="achievements"
          subtitle="Certifications and recognitions earned through programs, workshops, and competitions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-3xl border border-stroke bg-surface/30 backdrop-blur-md hover:bg-surface/60 transition-colors overflow-hidden"
            >
              <a
                href={it.img}
                target="_blank"
                rel="noreferrer"
                className="block relative aspect-[16/9] bg-bg overflow-hidden border-b border-stroke"
              >
                {it.extras ? (
                  <div className="absolute inset-0 grid grid-cols-2 gap-1 p-1">
                    {it.extras.map((ex) => (
                      <img
                        key={ex.label}
                        src={ex.img}
                        alt={ex.label}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent pointer-events-none" />
              </a>
              <div className="p-5 md:p-6 flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg text-text-primary leading-snug">{it.title}</h3>
                  <p className="text-xs text-muted mt-1">
                    {it.issuer} · {it.date}
                  </p>
                  {it.extras && (
                    <ul className="mt-3 space-y-1.5">
                      {it.extras.map((ex) => (
                        <li key={ex.label} className="flex items-center justify-between gap-3 text-xs">
                          <span className="text-text-primary/80 truncate">{ex.label}</span>
                          <a
                            href={ex.img}
                            target="_blank"
                            rel="noreferrer"
                            className="shrink-0 rounded-full px-2.5 py-1 border border-stroke text-muted hover:text-text-primary hover:border-text-primary/40 transition-colors"
                          >
                            View ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {!it.extras && (
                  <a
                    href={it.img}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs rounded-full px-3 py-2 border border-stroke text-muted group-hover:text-text-primary group-hover:border-text-primary/40 transition-colors"
                  >
                    View ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

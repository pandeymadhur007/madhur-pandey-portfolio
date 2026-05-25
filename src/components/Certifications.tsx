import certDS from "@/assets/cert-datascience.jpeg";
import certIdeathon from "@/assets/cert-ideathon.jpeg";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    title: "Essentials of Data Science",
    issuer: "PyNet Labs × NMIET, Pune",
    date: "14 Oct 2025",
    img: certDS,
  },
  {
    title: "IDEATHON 2025 — Certificate of Appreciation",
    issuer: "Nutan Incubation Centre, NMIET",
    date: "2025",
    img: certIdeathon,
  },
  {
    title: "RAG Model Certification",
    issuer: "Infosys Springboard",
    date: "2025",
    img: null,
  },
  {
    title: "IBM SkillsBuild — AI & Python",
    issuer: "IBM",
    date: "2025",
    img: null,
  },
  {
    title: "Advanced Python Programming",
    issuer: "Infosys Springboard",
    date: "2025",
    img: null,
  },
  {
    title: "Infosys Technology Certification",
    issuer: "Infosys",
    date: "2025",
    img: null,
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
          subtitle="A collection of certifications and recognitions earned through programs, workshops, and competitions."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group flex items-center gap-5 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors"
            >
              <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-16 rounded-3xl sm:rounded-full overflow-hidden bg-bg border border-stroke">
                {it.img ? (
                  <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs font-display italic text-muted">
                    cert
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-lg text-text-primary truncate">{it.title}</h3>
                <p className="text-xs text-muted truncate">
                  {it.issuer} · {it.date}
                </p>
              </div>
              <span className="shrink-0 text-muted group-hover:text-text-primary transition-colors pr-2">↗</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

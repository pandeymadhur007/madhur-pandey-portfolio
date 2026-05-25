import certDS from "@/assets/cert-datascience.jpeg";
import certIdeathon from "@/assets/cert-ideathon.jpeg";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const items = [
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
              <div className="relative aspect-[16/9] bg-bg overflow-hidden border-b border-stroke">
                {it.img ? (
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #0a0a1a 0%, #1e1e5a 60%, #4f46e5 100%)",
                    }}
                  >
                    <span className="font-display italic text-3xl md:text-4xl text-white/80">
                      {it.issuer.split(" ")[0]}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
              </div>
              <div className="p-5 md:p-6 flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg text-text-primary leading-snug">{it.title}</h3>
                  <p className="text-xs text-muted mt-1">
                    {it.issuer} · {it.date}
                  </p>
                </div>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="shrink-0 text-xs rounded-full px-3 py-2 border border-stroke text-muted group-hover:text-text-primary group-hover:border-text-primary/40 transition-colors"
                >
                  View ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const stats = [
  { value: "8.36", label: "CGPA (CS · AI)" },
  { value: "6+", label: "Certifications Earned" },
  { value: "4+", label: "Projects Built" },
];

export function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="border-t border-stroke pt-8"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary mb-3">
                {s.value}
              </div>
              <div className="text-sm text-muted uppercase tracking-[0.2em]">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

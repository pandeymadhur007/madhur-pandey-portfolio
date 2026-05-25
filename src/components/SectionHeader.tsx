import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  italicWord,
  subtitle,
  cta,
}: {
  eyebrow: string;
  title: string;
  italicWord: string;
  subtitle: string;
  cta?: { label: string; href: string };
}) {
  const parts = title.split(italicWord);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">{eyebrow}</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight">
          {parts[0]}
          <span className="font-display italic">{italicWord}</span>
          {parts[1]}
        </h2>
        <p className="text-sm md:text-base text-muted max-w-md mt-4">{subtitle}</p>
      </div>
      {cta && (
        <a href={cta.href} className="hidden md:inline-flex group relative rounded-full self-end">
          <span className="absolute -inset-[2px] rounded-full accent-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative inline-flex items-center gap-2 text-sm rounded-full px-5 py-2.5 bg-surface text-text-primary border border-stroke">
            {cta.label} <span>→</span>
          </span>
        </a>
      )}
    </motion.div>
  );
}

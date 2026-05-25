const projects = [
  {
    title: "Gram AI",
    tag: "AI · Agriculture",
    desc: "AI-based agriculture platform with crop guidance, market prices, climate info, and multilingual chatbot.",
    span: "md:col-span-7",
    bg: "linear-gradient(135deg, #1a3c2a 0%, #2d5a3d 50%, #5a8a5c 100%)",
    href: "https://gramaiv1.netlify.app/",
  },
  {
    title: "RAG Model",
    tag: "AI · NLP",
    desc: "Retrieval-Augmented Generation pipeline for context-aware Q&A over custom knowledge bases.",
    span: "md:col-span-5",
    bg: "linear-gradient(135deg, #0a0a1a 0%, #1e1e5a 60%, #4f46e5 100%)",
  },
  {
    title: "Patient Record System",
    tag: "Java",
    desc: "CRUD-based patient record management with structured data handling for healthcare workflows.",
    span: "md:col-span-5",
    bg: "linear-gradient(135deg, #0c2340 0%, #1a4a6e 60%, #2d8a9e 100%)",
  },
  {
    title: "Library Management",
    tag: "Java · MySQL",
    desc: "Issue/return workflows and record management using structured programming and DB connectivity.",
    span: "md:col-span-7",
    bg: "linear-gradient(135deg, #5c2018 0%, #9b4423 60%, #d4842a 100%)",
  },
];

export function Works() {
  return (
    <section id="work" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href ?? "#"}
              target={p.href ? "_blank" : undefined}
              rel="noreferrer"
              className={`group relative overflow-hidden bg-surface border border-stroke rounded-3xl aspect-[4/3] ${p.span}`}
            >
              <div className="absolute inset-0" style={{ background: p.bg }} />
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-xs text-white/70 uppercase tracking-[0.3em] mb-2">{p.tag}</span>
                <h3 className="text-3xl md:text-4xl font-display italic text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/80 max-w-md">{p.desc}</p>
              </div>
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity flex items-center justify-center">
                <span className="relative inline-block rounded-full p-[2px] accent-gradient-animated">
                  <span className="block bg-white text-bg rounded-full px-6 py-2.5 text-sm">
                    View — <span className="font-display italic">{p.title}</span>
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export { projects as worksProjects };

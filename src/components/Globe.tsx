import { useEffect, useRef } from "react";

/**
 * Premium 3D-feel animated globe.
 * - Rotating earth grid + continents
 * - Saturn-style inclined ring
 * - Location pings (Pune highlighted)
 * - Orbiting tech-stack chips
 * - Floating stat cards
 * - Cursor parallax tilt
 */
export function Globe() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.setProperty("--tx", `${(-y * 8).toFixed(2)}deg`);
      el.style.setProperty("--ty", `${(x * 8).toFixed(2)}deg`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Location pings (approx normalized positions on the sphere face)
  const pings = [
    { top: "42%", left: "62%", label: "Pune", primary: true },
    { top: "30%", left: "38%", label: "" },
    { top: "55%", left: "30%", label: "" },
    { top: "60%", left: "72%", label: "" },
  ];

  // Orbiting tech chips
  const chips = ["Python", "React", "AI/ML", "C++", "MySQL"];

  return (
    <div
      ref={ref}
      aria-hidden
      className="globe-wrap relative mx-auto aspect-square w-full max-w-[520px]"
      style={{ perspective: "1400px" }}
    >
      {/* Soft outer halo */}
      <div className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(137,170,204,0.32),rgba(78,133,191,0.08)_45%,transparent_72%)] blur-2xl" />

      {/* Saturn-style inclined ring */}
      <div
        className="absolute inset-[-8%] flex items-center justify-center"
        style={{ transform: "rotateX(72deg) rotateZ(-18deg)" }}
      >
        <div className="w-full h-full rounded-full border border-text-primary/15 shadow-[0_0_40px_rgba(137,170,204,0.15)_inset]" />
      </div>
      <div
        className="absolute inset-[-14%] flex items-center justify-center animate-globe-orbit-slow"
        style={{ transform: "rotateX(72deg) rotateZ(-18deg)" }}
      >
        <div className="w-full h-full rounded-full border border-dashed border-text-primary/12" />
        <span className="absolute w-2 h-2 rounded-full bg-[#89AACC] shadow-[0_0_14px_rgba(137,170,204,0.95)]"
              style={{ top: "50%", left: "0%", transform: "translate(-50%,-50%)" }} />
        <span className="absolute w-1.5 h-1.5 rounded-full bg-[#4E85BF] shadow-[0_0_10px_rgba(78,133,191,0.9)]"
              style={{ top: "50%", right: "0%", transform: "translate(50%,-50%)" }} />
      </div>

      {/* Orbital rings (flat) */}
      <div className="absolute inset-[-4%] rounded-full border border-text-primary/10" />
      <div
        className="absolute inset-[-18%] rounded-full border border-dashed border-text-primary/10 animate-globe-orbit"
        style={{ animationDirection: "reverse", animationDuration: "40s" }}
      />

      {/* Globe sphere */}
      <div
        className="globe relative w-full h-full rounded-full overflow-hidden border border-text-primary/15"
        style={{
          transform: "rotateX(var(--tx,0deg)) rotateY(var(--ty,0deg))",
          transition: "transform 400ms cubic-bezier(.2,.8,.2,1)",
          background:
            "radial-gradient(circle at 30% 28%, #1f4870 0%, #0c2440 42%, #04111f 100%)",
          boxShadow:
            "inset -30px -30px 90px rgba(0,0,0,0.9), inset 25px 25px 70px rgba(137,170,204,0.22), 0 0 90px rgba(78,133,191,0.28)",
        }}
      >
        <div className="absolute inset-0 globe-grid" />
        <div className="absolute inset-0 globe-continents" />

        {/* Location pings on globe */}
        {pings.map((p, i) => (
          <span
            key={i}
            className="absolute"
            style={{ top: p.top, left: p.left, transform: "translate(-50%,-50%)" }}
          >
            <span
              className={`block w-1.5 h-1.5 rounded-full ${
                p.primary ? "bg-[#89E0FF]" : "bg-[#89AACC]"
              }`}
              style={{
                boxShadow: p.primary
                  ? "0 0 14px rgba(137,224,255,1)"
                  : "0 0 10px rgba(137,170,204,0.8)",
              }}
            />
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background: p.primary ? "#89E0FF" : "#89AACC",
                animationDuration: p.primary ? "1.8s" : "2.6s",
                animationDelay: `${i * 0.4}s`,
                opacity: 0.7,
              }}
            />
            {p.label && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] tracking-[0.25em] uppercase text-text-primary/90 bg-bg/70 backdrop-blur-sm border border-stroke px-1.5 py-0.5 rounded">
                {p.label}
              </span>
            )}
          </span>
        ))}

        {/* Arc connectors (SVG) */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <linearGradient id="arcG" x1="0" x2="1">
              <stop offset="0%" stopColor="#89E0FF" stopOpacity="0.0" />
              <stop offset="50%" stopColor="#89E0FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#89E0FF" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d="M 38 30 Q 50 12 62 42" stroke="url(#arcG)" strokeWidth="0.4" />
          <path d="M 30 55 Q 50 35 62 42" stroke="url(#arcG)" strokeWidth="0.4" />
          <path d="M 72 60 Q 64 40 62 42" stroke="url(#arcG)" strokeWidth="0.4" />
        </svg>

        {/* Specular + atmosphere */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.20),transparent_45%)]" />
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_70px_rgba(137,170,204,0.4)]" />
      </div>

      {/* Orbiting tech chips */}
      <div className="absolute inset-[-22%] pointer-events-none">
        {chips.map((c, i) => {
          const total = chips.length;
          const duration = 28 + i * 2;
          return (
            <div
              key={c}
              className="absolute inset-0 animate-globe-orbit"
              style={{
                animationDuration: `${duration}s`,
                animationDelay: `${-(duration / total) * i}s`,
                animationDirection: i % 2 ? "reverse" : "normal",
              }}
            >
              <div
                className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 animate-globe-orbit"
                style={{
                  animationDuration: `${duration}s`,
                  animationDirection: i % 2 ? "normal" : "reverse",
                }}
              >
                <span className="inline-block text-[10px] tracking-[0.25em] uppercase text-text-primary/90 bg-surface/70 backdrop-blur-md border border-stroke px-2.5 py-1 rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
                  {c}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating stat cards */}
      <div className="absolute -top-2 -left-4 md:-left-10 z-20 hidden sm:block">
        <div className="rounded-2xl border border-stroke bg-surface/70 backdrop-blur-xl px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[9px] tracking-[0.25em] uppercase text-muted">Status</span>
          </div>
          <div className="text-xs font-display italic text-text-primary mt-1">Open to intern</div>
        </div>
      </div>

      <div className="absolute -bottom-2 -right-4 md:-right-10 z-20 hidden sm:block">
        <div className="rounded-2xl border border-stroke bg-surface/70 backdrop-blur-xl px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="text-[9px] tracking-[0.25em] uppercase text-muted">Based in</div>
          <div className="text-xs font-display italic text-text-primary mt-1">Pune, IN</div>
        </div>
      </div>

      <div className="absolute top-1/2 -right-6 md:-right-14 -translate-y-1/2 z-20 hidden md:block">
        <div className="rounded-xl border border-stroke bg-surface/70 backdrop-blur-xl px-3 py-2 text-center shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="text-lg font-display italic text-text-primary leading-none">3+</div>
          <div className="text-[9px] tracking-[0.2em] uppercase text-muted mt-1">Projects</div>
        </div>
      </div>

      <div className="absolute top-1/4 -left-6 md:-left-14 z-20 hidden md:block">
        <div className="rounded-xl border border-stroke bg-surface/70 backdrop-blur-xl px-3 py-2 text-center shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="text-lg font-display italic text-text-primary leading-none">8+</div>
          <div className="text-[9px] tracking-[0.2em] uppercase text-muted mt-1">Skills</div>
        </div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-text-primary/60 animate-globe-float"
          style={{
            top: `${[8, 22, 70, 85, 40, 60, 15, 92][i]}%`,
            left: `${[88, 6, 96, 12, 102, -4, 50, 48][i]}%`,
            animationDelay: `${i * 0.6}s`,
            boxShadow: "0 0 8px rgba(137,170,204,0.7)",
          }}
        />
      ))}
    </div>
  );
}

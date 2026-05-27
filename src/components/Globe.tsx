import { useEffect, useRef } from "react";

/**
 * Premium CSS-only animated globe — no heavy 3D deps.
 * Rotating earth grid, glow halo, orbital rings, floating particles.
 */
export function Globe() {
  const ref = useRef<HTMLDivElement>(null);

  // Subtle parallax tilt on mouse move (desktop only)
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(hover: none)").matches) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / r.width;
      const y = (e.clientY - (r.top + r.height / 2)) / r.height;
      el.style.setProperty("--tx", `${(-y * 6).toFixed(2)}deg`);
      el.style.setProperty("--ty", `${(x * 6).toFixed(2)}deg`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="globe-wrap relative mx-auto aspect-square w-full max-w-[460px]"
      style={{ perspective: "1200px" }}
    >
      {/* Glow halo */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(137,170,204,0.35),rgba(78,133,191,0.08)_45%,transparent_70%)] blur-2xl" />

      {/* Orbital rings */}
      <div className="absolute inset-[-6%] rounded-full border border-text-primary/10 animate-globe-orbit-slow" />
      <div className="absolute inset-[6%] rounded-full border border-text-primary/[0.07]" />
      <div
        className="absolute inset-[-12%] rounded-full border border-dashed border-text-primary/10 animate-globe-orbit"
        style={{ animationDirection: "reverse" }}
      />

      {/* Orbital dots */}
      <div className="absolute inset-[-6%] animate-globe-orbit-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#89AACC] shadow-[0_0_12px_rgba(137,170,204,0.9)]" />
      </div>
      <div className="absolute inset-[-12%] animate-globe-orbit" style={{ animationDirection: "reverse" }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#4E85BF] shadow-[0_0_10px_rgba(78,133,191,0.9)]" />
      </div>

      {/* The globe itself */}
      <div
        className="globe relative w-full h-full rounded-full overflow-hidden border border-text-primary/15"
        style={{
          transform:
            "rotateX(var(--tx,0deg)) rotateY(var(--ty,0deg))",
          transition: "transform 400ms cubic-bezier(.2,.8,.2,1)",
          background:
            "radial-gradient(circle at 30% 30%, #1a3a5a 0%, #0c1f33 45%, #050b14 100%)",
          boxShadow:
            "inset -30px -30px 80px rgba(0,0,0,0.85), inset 20px 20px 60px rgba(137,170,204,0.18), 0 0 80px rgba(78,133,191,0.25)",
        }}
      >
        {/* Longitude / latitude grid that scrolls — gives rotation feel */}
        <div className="absolute inset-0 globe-grid" />
        {/* Continents-like blobs */}
        <div className="absolute inset-0 globe-continents" />
        {/* Specular highlight */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.18),transparent_45%)]" />
        {/* Atmosphere edge */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(137,170,204,0.35)]" />
      </div>

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 rounded-full bg-text-primary/60 animate-globe-float"
          style={{
            top: `${[10, 25, 70, 85, 40, 60][i]}%`,
            left: `${[85, 10, 92, 15, 100, -2][i]}%`,
            animationDelay: `${i * 0.7}s`,
            boxShadow: "0 0 8px rgba(137,170,204,0.7)",
          }}
        />
      ))}
    </div>
  );
}

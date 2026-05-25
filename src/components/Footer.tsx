import { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";

const HLS_SRC = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/madhur-pandey-642b9230b" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Portfolio", href: "https://gramaiv1.netlify.app/" },
  { label: "Email", href: "mailto:pandeymadhur007@gmail.com" },
];

export function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_SRC);
      hls.attachMedia(v);
      return () => hls.destroy();
    } else if (v.canPlayType("application/vnd.apple.mpegurl")) {
      v.src = HLS_SRC;
    }
  }, []);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  const text = Array(10).fill("BUILDING THE FUTURE • ").join("");

  return (
    <footer className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div ref={marqueeRef} className="overflow-hidden mb-12">
          <div className="marquee-track inline-flex whitespace-nowrap text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/90">
            <span>{text}</span>
            <span>{text}</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <p className="text-sm text-muted uppercase tracking-[0.3em]">Let's collaborate</p>
          <h3 className="text-4xl md:text-6xl font-display italic text-text-primary">
            Got an idea? Let's build it.
          </h3>
          <a href="mailto:pandeymadhur007@gmail.com" className="group relative rounded-full">
            <span className="absolute -inset-[2px] rounded-full accent-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative inline-block bg-text-primary text-bg rounded-full text-sm px-8 py-4">
              pandeymadhur007@gmail.com ↗
            </span>
          </a>
        </div>

        <div className="border-t border-stroke pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Available for projects · Pune, India
          </div>
          <div className="flex gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted hover:text-text-primary uppercase tracking-[0.2em] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="text-xs text-muted">© 2026 Madhur Pandey</div>
        </div>
      </div>
    </footer>
  );
}

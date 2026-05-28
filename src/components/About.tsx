import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Globe } from "./Globe";

const roles = [
  "Computer Science Engineering Student",
  "Aspiring Software Developer",
  "Data Science Enthusiast",
];


export function About() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);

  // Typing effect
  useEffect(() => {
    const full = roles[roleIdx];
    let i = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!deleting) {
        i++;
        setTyped(full.slice(0, i));
        if (i === full.length) {
          deleting = true;
          timer = setTimeout(tick, 1400);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        i--;
        setTyped(full.slice(0, i));
        if (i === 0) {
          setRoleIdx((p) => (p + 1) % roles.length);
          return;
        }
        timer = setTimeout(tick, 30);
      }
    };
    timer = setTimeout(tick, 200);
    return () => clearTimeout(timer);
  }, [roleIdx]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.1,
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={rootRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-28 pb-20 md:pt-32"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] rounded-full bg-text-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 -right-32 w-[520px] h-[520px] rounded-full bg-text-primary/[0.04] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--text-primary)) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Globe — top centerpiece with 3D depth, stats and chips */}
      <div className="pointer-events-none absolute -z-10 left-1/2 -translate-x-1/2 top-[-10%] md:top-[-12%] w-[92vw] max-w-[680px] aspect-square">
        <Globe />
        {/* Fade into page */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="relative z-10 max-w-[900px] w-full mx-auto px-6 md:px-10 text-center flex flex-col items-center gap-7">
        <div className="about-reveal text-[10px] md:text-xs text-muted uppercase tracking-[0.4em]">
          Class of '28
        </div>

        <h1 className="about-reveal text-5xl md:text-7xl lg:text-8xl font-display italic leading-[0.95] tracking-tight text-text-primary">
          Madhur <span className="text-text-primary/80">Pandey</span>
        </h1>

        <div className="about-reveal text-base md:text-xl text-text-primary/90 min-h-[1.8em]">
          <span className="font-display italic">{typed}</span>
          <span className="inline-block w-[2px] h-5 md:h-6 bg-text-primary ml-1 align-middle animate-pulse" />
        </div>

        <p className="about-reveal text-sm md:text-base text-muted leading-relaxed max-w-2xl">
          CS Engineering student specializing in AI — building intelligent products with clean
          UI/UX, from RAG models to agriculture platforms. Comfortable across{" "}
          <span className="text-text-primary/90">C++, Java, Python, MySQL</span> and{" "}
          <span className="text-text-primary/90">DSA</span>.
        </p>

        {/* CTAs */}
        <div className="about-reveal flex flex-wrap justify-center gap-3 md:gap-4 pt-2">
          <a href="#work" className="group relative rounded-full">
            <span className="absolute -inset-[2px] rounded-full accent-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative inline-flex items-center gap-2 bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary rounded-full text-sm px-7 py-3.5 transition-colors">
              See Works <ArrowDown size={14} />
            </span>
          </a>
          <a href="#contact" className="group relative rounded-full">
            <span className="absolute -inset-[2px] rounded-full accent-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative inline-block border border-stroke bg-surface/60 backdrop-blur-md text-text-primary rounded-full text-sm px-7 py-3.5">
              Reach out…
            </span>
          </a>
        </div>

        {/* Socials */}
        <div className="about-reveal flex items-center justify-center gap-3 pt-1">
          {[
            { Icon: Github, href: "https://github.com/pandeymadhur007", label: "GitHub" },
            {
              Icon: Linkedin,
              href: "https://linkedin.com/in/madhur-pandey-642b9230b",
              label: "LinkedIn",
            },
            { Icon: Mail, href: "mailto:pandeymadhur007@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full border border-stroke bg-surface/40 backdrop-blur-md flex items-center justify-center text-text-primary/80 hover:text-text-primary hover:border-text-primary/40 hover:-translate-y-0.5 transition-all"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#work"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group z-10"
      >
        <span className="text-xs text-muted uppercase tracking-[0.2em] group-hover:text-text-primary transition-colors">
          Scroll
        </span>
        <div className="w-px h-10 bg-stroke overflow-hidden relative">
          <div className="absolute inset-x-0 h-full accent-gradient animate-scroll-down" />
        </div>
      </a>
    </section>
  );
}

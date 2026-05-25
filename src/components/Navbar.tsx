import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Certs", href: "#certs" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
      const sections = links.map((l) => document.querySelector(l.href));
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.offsetTop <= scrollY) {
          setActive(links[i].href);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-2 transition-shadow ${
          scrolled ? "shadow-md shadow-black/30" : ""
        }`}
      >
        <a href="#home" className="group relative w-9 h-9 rounded-full p-[1.5px] accent-gradient transition-transform hover:scale-110">
          <span className="flex items-center justify-center w-full h-full rounded-full bg-bg text-text-primary font-display italic text-[13px]">
            MP
          </span>
        </a>
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setActive(l.href)}
            className={`hidden md:inline-block text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${
              active === l.href
                ? "text-text-primary bg-stroke/60"
                : "text-muted hover:text-text-primary hover:bg-stroke/40"
            }`}
          >
            {l.label}
          </a>
        ))}
        <div className="hidden md:block w-px h-5 bg-stroke mx-1" />
        <a href="#contact" className="relative group rounded-full">
          <span className="absolute -inset-[2px] rounded-full accent-gradient-animated opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative inline-flex items-center gap-1 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-surface backdrop-blur-md text-text-primary">
            Say hi <span className="text-[10px]">↗</span>
          </span>
        </a>
      </div>
    </nav>
  );
}

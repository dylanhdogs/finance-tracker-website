import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import prismLogo from "../../Prism_logo.png";

const navLinks = [
  { href: "#how", label: "How It Works" },
  { href: "#compare", label: "Compare" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#cta", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "tutorials.html", label: "Tutorials" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`fixed top-0 left-1/2 z-30 flex w-[calc(100%-32px)] max-w-[1440px] items-center justify-between px-[14px] py-3 rounded-2xl border-x border-b border-white/[0.07] bg-[#050505]/78 backdrop-blur-2xl -translate-x-1/2 transition-all duration-300 ${
        scrolled ? "border-white/[0.12] bg-[#050505]/90 shadow-[0_8px_40px_rgba(0,0,0,0.38)]" : ""
      }`}
    >
      <a
        href="#top"
        className="flex items-center gap-3 font-black tracking-[0.28em] no-underline text-white text-[1.35rem] sm:text-[1.55rem]"
      >
        <img
          src={prismLogo}
          alt="PRISM"
          className="w-14 h-14 object-contain"
        />
        <span>PRISM</span>
      </a>

      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) =>
          link.href.startsWith("#") ? (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-3.5 py-2.5 rounded-full text-muted text-[0.92rem] font-bold no-underline transition-all duration-200 hover:bg-white/[0.06] hover:text-text"
            >
              {link.label}
            </a>
          ) : (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2.5 rounded-full text-muted text-[0.92rem] font-bold no-underline transition-all duration-200 hover:bg-white/[0.06] hover:text-text"
            >
              {link.label}
            </a>
          )
        )}
        <a
          href="download.html"
          className="gradient-border-button ml-2 px-5 py-2.5 rounded-full text-[#03111a] text-[0.92rem] font-bold no-underline bg-gradient-to-r from-accent-2 via-accent-3 to-accent shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-0.5"
        >
          Get PRISM
        </a>
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0 cursor-pointer"
        aria-label="Toggle navigation"
      >
        <span className="block w-5.5 h-0.5 rounded-full bg-white transition-transform duration-180" />
        <span className="block w-5.5 h-0.5 rounded-full bg-white transition-opacity duration-180" />
        <span className="block w-5.5 h-0.5 rounded-full bg-white transition-transform duration-180" />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full right-0 left-0 mt-2.5 p-3 rounded-2xl border border-white/[0.07] bg-[#050505]/92 backdrop-blur-2xl md:hidden grid gap-1"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3.5 py-2.5 rounded-full text-muted text-[0.92rem] font-bold no-underline transition-all duration-200 hover:bg-white/[0.06] hover:text-text bg-transparent border-0 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href="download.html"
              className="gradient-border-button block text-center px-3.5 py-2.5 rounded-full text-[#03111a] text-[0.92rem] font-bold no-underline bg-gradient-to-r from-accent-2 via-accent-3 to-accent mt-1"
            >
              Get PRISM
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

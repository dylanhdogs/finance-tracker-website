import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

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
      className={`fixed top-0 left-1/2 z-30 flex w-[calc(100%-32px)] max-w-[1440px] items-center justify-between px-[14px] py-3 rounded-b-2xl border-x border-b border-white/14 bg-[#07101d]/90 shadow-2xl backdrop-blur-xl -translate-x-1/2 transition-all duration-180 ${
        scrolled ? "border-white/22 bg-[#07101d]/95" : ""
      }`}
    >
      <a
        href="#top"
        className="flex items-center gap-2.5 font-extrabold tracking-tight no-underline text-white"
      >
        <img
          src="/Prism_logo.png"
          alt="Prism"
          className="w-12 h-12 rounded-xl object-cover"
        />
        <span>Prism</span>
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
              className="px-3.5 py-2.5 rounded-full text-muted text-[0.92rem] font-bold no-underline transition-colors duration-180 hover:bg-white/8 hover:text-text"
            >
              {link.label}
            </a>
          ) : (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2.5 rounded-full text-muted text-[0.92rem] font-bold no-underline transition-colors duration-180 hover:bg-white/8 hover:text-text"
            >
              {link.label}
            </a>
          )
        )}
        <a
          href="download.html"
          className="px-3.5 py-2.5 rounded-full text-[#07101d] text-[0.92rem] font-bold no-underline bg-text hover:bg-white/90 transition-colors duration-180"
        >
          Get the App
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
            className="absolute top-full right-0 left-0 mt-2.5 p-3 border border-white/14 rounded-2xl bg-[#07101d]/96 backdrop-blur-lg md:hidden grid gap-1"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3.5 py-2.5 rounded-full text-muted text-[0.92rem] font-bold no-underline transition-colors duration-180 hover:bg-white/8 hover:text-text bg-transparent border-0 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href="download.html"
              className="block text-center px-3.5 py-2.5 rounded-full text-[#07101d] text-[0.92rem] font-bold no-underline bg-text hover:bg-white/90 transition-colors duration-180 mt-1"
            >
              Get the App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

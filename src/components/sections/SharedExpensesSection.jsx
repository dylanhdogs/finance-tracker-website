import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "../animations/Reveal";
import imgOverview from "../../assets/images/screenshots/Shared_Expenses_preview.png";
import imgMembers from "../../assets/images/screenshots/Shared_Expenses_Members_preview.png";
import imgExpenses from "../../assets/images/screenshots/Shared_Expenses_Expenses_preview.png";
import imgBalances from "../../assets/images/screenshots/Shared_Expenses_Balances_preview.png";
import imgPayments from "../../assets/images/screenshots/Shared_payments_preview.png";
import imgActivity from "../../assets/images/screenshots/Shared_Activity_preview.png";

const carouselImages = [
  { src: imgOverview, label: "Overview", alt: "Shared expenses overview" },
  { src: imgMembers, label: "Members", alt: "Shared expenses members" },
  { src: imgExpenses, label: "Expenses", alt: "Shared expenses breakdown" },
  { src: imgBalances, label: "Balances", alt: "Shared expenses balances" },
  { src: imgPayments, label: "Payments", alt: "Shared payments" },
  { src: imgActivity, label: "Activity", alt: "Shared activity log" },
];

const INTERVAL = 5000;

export default function SharedExpensesSection() {
  const [current, setCurrent] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % carouselImages.length);
    setProgress(0);
    progressRef.current = 0;
    startRef.current = null;
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
    setProgress(0);
    progressRef.current = 0;
    startRef.current = null;
  }, []);

  useEffect(() => {
    if (paused) return;
    if (startRef.current === null) startRef.current = performance.now();
    const tick = (now) => {
      const elapsed = now - startRef.current;
      const pct = Math.min(elapsed / INTERVAL, 1);
      progressRef.current = pct;
      setProgress(pct);
      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        next();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused, next]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const openPreview = (src) => {
    setPreviewSrc(src);
    setPreviewOpen(true);
  };

  const goTo = (i) => {
    setCurrent(i);
    setProgress(0);
    progressRef.current = 0;
    startRef.current = null;
  };

  return (
    <section
      id="shared-expenses"
      className="relative py-12 md:py-16 lg:py-[65px] overflow-hidden"
    >
      <div className="px-5 sm:px-6 mx-auto max-w-[1440px] mb-10 lg:mb-14">
        <Reveal direction="left">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
            <div className="max-w-[620px]">
              <p className="text-white/70 text-[0.85rem] font-black tracking-[0.18em] uppercase mb-3">
                Track shared costs in one clear place
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-4">
                See the answer in seconds
              </h2>
              <p className="text-muted text-[1.12rem] leading-relaxed mb-5">
                Who owes who? How much? Can you settle it? PRISM makes shared
                expenses clear in one place.
              </p>
              <p className="text-text text-[1.12rem] leading-relaxed font-bold">
                See who paid, who owes, what is still open, and settle balances
                without messy notes, texts, or spreadsheets.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {[
                "See exactly who owes who",
                "See how much each person owes",
                "Split bills and shared costs clearly",
                "Settle balances with confidence",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-text text-[0.95rem] font-bold leading-snug"
                >
                  <span className="w-2 h-2 rounded-full bg-accent-2 shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.4)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div
        className="relative w-screen left-1/2 -translate-x-1/2"
      >
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none" />

            <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={carouselImages[current].src}
                  alt={carouselImages[current].alt}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover object-center cursor-pointer select-none"
                  style={{ objectPosition: "center 5%" }}
                  draggable="false"
                  whileHover={{ scale: 1.01 }}
                  onClick={() => openPreview(carouselImages[current].src)}
                />
              </AnimatePresence>

              <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white/80 text-[0.72rem] font-bold">
                {current + 1} / {carouselImages.length}
              </div>

              <div className="absolute bottom-14 left-3 z-10 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md">
                <p className="text-white text-[0.78rem] font-bold">{carouselImages[current].label}</p>
              </div>
            </div>

            <div className="relative h-1 bg-white/[0.06]">
              <div
                className="absolute inset-y-0 left-0 bg-accent-3/70 transition-none"
                style={{ width: `${progress * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-center gap-2 py-3">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`rounded-full border-0 cursor-pointer transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-accent-3 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white border-0 cursor-pointer transition-all duration-200 hover:bg-black/70 hover:scale-110"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white border-0 cursor-pointer transition-all duration-200 hover:bg-black/70 hover:scale-110"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black cursor-pointer"
            onClick={() => setPreviewOpen(false)}
          >
            <motion.img
              src={previewSrc}
              alt="Preview"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-screen max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-accent-2 to-accent text-white text-xl font-bold border-0 cursor-pointer shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-200 hover:scale-110"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

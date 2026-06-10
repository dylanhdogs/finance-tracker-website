import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "../animations/Reveal";
import imgBank from "../../../Bank_Transactions_Preview.png";
import imgMatching from "../../../Transaction_matching_preview.png";
import imgBudgets from "../../../budgets_preview.png";
import imgChart from "../../../chartofaccounts_preview.png";
import imgVendors from "../../../vendors_preview.png";
import imgRecon from "../../../reconciliation_preview.png";

const carouselImages = [
  { src: imgBank, label: "Bank Transactions", alt: "Bank transactions preview" },
  { src: imgMatching, label: "Transaction Matching", alt: "Transaction matching preview" },
  { src: imgBudgets, label: "Budgets", alt: "Budgets preview" },
  { src: imgChart, label: "Chart of Accounts", alt: "Chart of accounts preview" },
  { src: imgVendors, label: "Vendors", alt: "Vendors preview" },
  { src: imgRecon, label: "Reconciliation", alt: "Reconciliation preview" },
];

export default function SolutionSection() {
  const [current, setCurrent] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % carouselImages.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  const openPreview = (src) => {
    setPreviewSrc(src);
    setPreviewOpen(true);
  };

  return (
    <section id="solution" className="relative py-12 md:py-16 lg:py-[65px] overflow-hidden">
      <div className="px-5 sm:px-6 mx-auto max-w-[1440px] mb-10 lg:mb-14">
        <Reveal direction="right">
          <div className="flex flex-col">
            <p className="text-muted text-[0.85rem] font-black tracking-[0.18em] uppercase mb-3">Also included</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[0.96] mb-4 max-w-[540px]">Personal finance tools, included</h2>
            <p className="text-muted text-[1.12rem] leading-relaxed max-w-[460px] mb-5">PRISM also includes basic personal finance features — but shared expenses are the focus.</p>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-3 text-text text-[1rem] font-bold leading-snug"><span className="w-2 h-2 rounded-full bg-accent-2 shrink-0 shadow-[0_0_12px_rgba(139,92,246,0.5)]" />Expense tracking</li>
              <li className="flex items-center gap-3 text-text text-[1rem] font-bold leading-snug"><span className="w-2 h-2 rounded-full bg-accent-3 shrink-0 shadow-[0_0_12px_rgba(56,189,246,0.5)]" />Categories</li>
              <li className="flex items-center gap-3 text-text text-[1rem] font-bold leading-snug"><span className="w-2 h-2 rounded-full bg-accent shrink-0 shadow-[0_0_12px_rgba(168,85,247,0.5)]" />Dashboard insights</li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div
        className="relative w-screen left-1/2 -translate-x-1/2"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.3)]">
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
                  className="absolute inset-0 w-full h-full object-contain p-2 sm:p-4 cursor-pointer select-none"
                  draggable="false"
                  whileHover={{ scale: 1.01 }}
                  onClick={() => openPreview(carouselImages[current].src)}
                />
              </AnimatePresence>
            </div>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {carouselImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full border-0 cursor-pointer transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-accent-3 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white border-0 cursor-pointer transition-all duration-200 hover:bg-black/70 hover:scale-110"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white border-0 cursor-pointer transition-all duration-200 hover:bg-black/70 hover:scale-110"
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

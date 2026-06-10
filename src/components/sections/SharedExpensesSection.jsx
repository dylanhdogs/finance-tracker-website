import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "../animations/Reveal";
import answerInSecondsGraphic from "../../assets/images/screenshots/Shared_Expenses_preview.png?v=2";

export default function SharedExpensesSection() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section
      id="shared-expenses"
      className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-[1440px] scroll-mt-32 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">
        {/* Left: Copy */}
        <Reveal direction="left">
          <div className="flex flex-col">
            <p className="text-white/70 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
              See the answer in seconds
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-6 max-w-[620px]">
              See the answer in seconds
            </h2>
            <p className="text-muted text-[1.12rem] leading-relaxed max-w-[540px] mb-5">
              Who owes who? How much? Can you settle it? PRISM makes shared
              expenses clear in one place.
            </p>
            <p className="text-text text-[1.12rem] leading-relaxed max-w-[540px] mb-8 font-bold">
              See who paid, who owes, what is still open, and settle balances
              without messy notes, texts, or spreadsheets.
            </p>
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
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-2 shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.4)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Right: Shared Expenses Visual */}
        <Reveal direction="right" delay={0.15}>
          <div className="relative flex justify-center overflow-visible px-1 sm:px-2">
            <motion.img
              src={answerInSecondsGraphic}
              alt="See the answer in seconds"
              className="relative z-10 h-auto w-[112%] max-w-none object-contain sm:w-full sm:max-w-[780px] lg:max-w-[880px] xl:max-w-[950px] cursor-pointer select-none"
              draggable="false"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setPreviewOpen(true)}
            />
          </div>
        </Reveal>
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
              src={answerInSecondsGraphic}
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

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "../animations/Reveal";
import personalFinanceGraphic from "../../../Bank_Transactions_Preview.png";

const summaryCards = [
  { label: "Net Worth", value: "$84,210", change: "+$2,340", color: "accent-2" },
  { label: "Income", value: "$9,840", change: "+$420", color: "accent-3" },
  { label: "Expenses", value: "$4,126", change: "-$210", color: "accent" },
];

const transactions = [
  { desc: "Grocery Store", amount: "-$126.40", category: "Food", status: "cleared" },
  { desc: "Salary Deposit", amount: "+$4,200.00", category: "Income", status: "cleared" },
  { desc: "Electric Bill", amount: "-$84.00", category: "Utilities", status: "pending" },
];

const budgets = [
  { category: "Groceries", spent: 620, budget: 800, color: "accent-2" },
  { category: "Dining Out", spent: 340, budget: 400, color: "accent-3" },
  { category: "Entertainment", spent: 110, budget: 200, color: "accent" },
];

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function SolutionSection() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section id="solution" className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-[1440px] scroll-mt-32">
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 items-stretch lg:items-center">
        <Reveal direction="left" delay={0.15} className="order-2 lg:order-1">
          <div className="relative flex justify-center overflow-visible px-1 sm:px-2">
            <motion.img
              src={personalFinanceGraphic}
              alt="Personal finance tools"
              className="relative z-10 h-auto w-full max-w-[620px] object-contain sm:max-w-[720px] lg:max-w-[800px] xl:max-w-[840px] cursor-pointer select-none"
              draggable="false"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setPreviewOpen(true)}
            />
          </div>
        </Reveal>
        <Reveal direction="right" className="order-1 lg:order-2">
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
              src={personalFinanceGraphic}
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

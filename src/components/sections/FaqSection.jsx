import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "../animations/Reveal";

const faqs = [
  {
    q: "Is this only for personal finance?",
    a: "Yes. Prism is built for personal finance \u2014 tracking spending, budgets, accounts, bills, savings, and net worth. No business accounting complexity.",
  },
  {
    q: "What makes it different from a spreadsheet?",
    a: "It gives you structured accounts, categorized transactions, budgets, recurring entries, and reports without manual spreadsheet maintenance.",
  },
  {
    q: "Can it support professional-looking financial snapshots?",
    a: "Yes. The app includes Profit & Loss and Balance Sheet reporting for understanding income, expenses, assets, liabilities, equity, and net worth.",
  },
  {
    q: "Can I import data from my bank or a spreadsheet?",
    a: "Yes. Prism supports CSV and Excel (.xlsx) import with automatic column detection. You can also enter transactions manually or set up recurring entries.",
  },
  {
    q: "Where is my data stored? Is it in the cloud?",
    a: "Your data is stored entirely on your local machine in a SQLite database. There is no cloud sync, no online account, and no telemetry. The app works completely offline.",
  },
  {
    q: "Does Prism use double-entry accounting?",
    a: "Yes. Prism is built on double-entry bookkeeping with a full chart of accounts (assets, liabilities, equity, income, expenses), journal entries with sequential numbering, and balance verification on every post.",
  },
  {
    q: "Can I export my data or print reports?",
    a: "Yes. You can export transactions to CSV. Reports (Profit & Loss and Balance Sheet) have dedicated print views with clean, printer-friendly layouts.",
  },
  {
    q: "How does reconciliation work?",
    a: "Start a new reconciliation for any account, mark cleared transactions as they appear on your statement, then finish. Prism tracks reconciliation history so you can review past statement periods.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/14 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-0 py-6 text-left font-black text-text bg-transparent border-0 cursor-pointer"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted text-lg shrink-0 ml-4"
        >
          {isOpen ? "\u2212" : "+"}
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="max-w-[860px] pb-6 m-0 text-muted leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="px-5 sm:px-6 py-16 md:py-24 lg:py-32 mx-auto max-w-7xl scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          FAQ
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          Clear answers for buyers
        </h2>
      </Reveal>

      <Reveal direction="fade" delay={0.1}>
        <div className="mt-10 border-t border-white/14">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}

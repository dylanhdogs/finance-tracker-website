import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

const scatteredItems = [
  { label: "Bank Apps", pos: "lg:left-[3%] lg:top-[16%]", mobile: "left-[5%] top-[7%]", dot: "bg-[#ff6b8a]", rotate: -7 },
  { label: "Credit Cards", pos: "lg:left-[20%] lg:top-[44%]", mobile: "right-[4%] top-[18%]", dot: "bg-[#ff6b8a]", rotate: 5 },
  { label: "Spreadsheets", pos: "lg:left-[8%] lg:bottom-[12%]", mobile: "left-[2%] top-[34%]", dot: "bg-[#ff6b8a]", rotate: 8 },
  { label: "Notes", pos: "lg:right-[28%] lg:top-[11%]", mobile: "right-[12%] bottom-[30%]", dot: "bg-[#ff6b8a]", rotate: -4 },
  { label: "Budget Apps", pos: "lg:right-[18%] lg:bottom-[18%]", mobile: "left-[17%] bottom-[17%]", dot: "bg-[#ff6b8a]", rotate: 4 },
];

const problemLines = [
  "M 42 96 C 220 78, 380 92, 640 156",
  "M 245 246 C 370 240, 500 220, 640 156",
  "M 96 490 C 270 452, 500 298, 640 156",
  "M 852 64 C 770 68, 706 104, 640 156",
  "M 950 412 C 840 344, 740 236, 640 156",
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="px-5 sm:px-6 py-24 md:py-32 lg:py-40 mx-auto max-w-7xl scroll-mt-32"
    >
      <Reveal direction="up">
        <p className="text-accent-2 text-[0.92rem] font-black tracking-[0.18em] uppercase mb-4">
          The problem
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] mb-5 max-w-[760px]">
          Most people have no idea where their money goes
        </h2>
      </Reveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="relative mt-12 min-h-[560px] overflow-hidden"
      >
        <svg className="absolute inset-0 w-full h-full opacity-80 max-lg:hidden" viewBox="0 0 1200 560" preserveAspectRatio="none" aria-hidden="true">
          {problemLines.map((path, i) => (
            <motion.path
              key={i}
              d={path}
              fill="none"
              stroke="url(#problemLine)"
              strokeWidth="1.5"
              strokeDasharray="8 10"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.45 + i * 0.08 }}
            />
          ))}
          <defs>
            <linearGradient id="problemLine" x1="0" x2="1">
              <stop stopColor="#ff6b8a" stopOpacity="0.7" />
              <stop offset="1" stopColor="#26e6a3" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 max-lg:hidden">
          {scatteredItems.map((item, i) => (
            <motion.div
              key={item.label}
              variants={{
                hidden: { opacity: 0, scale: 0.88, x: i % 2 ? 35 : -35, y: i % 2 ? -20 : 25 },
                visible: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute ${item.pos} flex items-center gap-2 text-sm sm:text-base font-black text-muted`}
              style={{ rotate: `${item.rotate}deg` }}
            >
              <span className={`inline-block w-3 h-3 rounded-full ${item.dot} shadow-[0_0_18px_rgba(255,107,138,0.75)]`} />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 grid lg:grid-cols-[1fr_0.95fr] gap-8 min-h-[560px] p-5 sm:p-8 lg:p-12 items-center">
          <div className="lg:hidden min-h-[310px] relative">
            {scatteredItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={`absolute ${item.mobile} flex items-center gap-2 text-sm font-black text-muted`}
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff6b8a]" />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="hidden lg:block" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-6 sm:p-8 lg:mt-24 lg:ml-10 rounded-[32px] border border-white/10 bg-[#07101d]/88 shadow-[0_24px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl"
          >
            <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_22%_30%,rgba(38,230,163,0.2),transparent_58%)]" />
            <span className="inline-flex items-center gap-2 text-accent-2 text-[0.8rem] font-black uppercase tracking-[0.16em]">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-2 shadow-[0_0_18px_rgba(38,230,163,0.9)]" />
              Prism workspace
            </span>
            <h3 className="mt-5 mb-4 text-2xl sm:text-3xl font-black tracking-tight">
              One organized place for every account, budget, bill, and report
            </h3>
            <p className="text-muted leading-relaxed">
              Instead of chasing disconnected apps, Prism brings your financial information into a structured desktop workspace so budgets, trends, and goals stop slipping through the cracks.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-bold">
              {["Budgets stay current", "Spending gets noticed", "Goals stay visible", "Trends become clear"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-muted">
                  <span className="w-2 h-2 rounded-full bg-accent-2" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

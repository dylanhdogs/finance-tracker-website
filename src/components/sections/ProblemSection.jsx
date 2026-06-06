import { motion } from "motion/react";
import Reveal from "../animations/Reveal";

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
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="p-7 border border-white/14 rounded-2xl bg-white/5 shadow-2xl backdrop-blur-lg"
        >
          <h3 className="text-[1.1rem] font-bold mb-[18px]">
            People manage their finances with:
          </h3>
          <ul className="m-0 p-0 list-none">
            {[
              "Bank apps",
              "Credit card websites",
              "Spreadsheets",
              "Notes",
              "Budget apps",
            ].map((item) => (
              <li
                key={item}
                className="relative pl-[22px] py-2 text-muted text-[0.95rem] leading-relaxed before:absolute before:left-0 before:top-[14px] before:w-2 before:h-2 before:rounded-full before:bg-accent-2 before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 p-[14px_16px] rounded-xl bg-white/5 text-muted font-semibold leading-relaxed">
            Their financial information is scattered everywhere.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="p-7 border border-white/14 rounded-2xl bg-white/5 shadow-2xl backdrop-blur-lg"
        >
          <h3 className="text-[1.1rem] font-bold mb-[18px]">As a result:</h3>
          <ul className="m-0 p-0 list-none">
            {[
              "Budgets fail",
              "Spending goes unnoticed",
              "Financial goals get delayed",
              "Important trends are missed",
            ].map((item) => (
              <li
                key={item}
                className="relative pl-[22px] py-2 text-muted text-[0.95rem] leading-relaxed before:absolute before:left-0 before:top-[14px] before:w-2 before:h-2 before:rounded-full before:bg-[#ff6b6b] before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <Reveal direction="scale" delay={0.3}>
        <div className="mt-6 p-7 sm:p-8 border border-white/14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/8 shadow-2xl backdrop-blur-lg text-center">
          <p className="m-0 text-[1.25rem] font-bold tracking-tight">
            Prism brings everything together into one organized financial
            workspace.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

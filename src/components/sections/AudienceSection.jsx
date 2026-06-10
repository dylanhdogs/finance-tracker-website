import Reveal from "../animations/Reveal";
import builtForSharedCostsGraphic from "../../../Built_for_shared_costs_section_graphic.png";

export default function AudienceSection() {
  return (
    <section id="audience" className="px-5 sm:px-6 py-12 md:py-16 lg:py-[65px] mx-auto max-w-[1440px] scroll-mt-32 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-7 items-center">
        <Reveal direction="left">
          <div className="flex flex-col gap-4">
            <p className="text-white text-[0.92rem] font-black tracking-[0.18em] uppercase">Who this is for</p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] max-w-[620px]">Built for shared costs</h2>
            <p className="text-muted text-[1.12rem] leading-relaxed max-w-[540px]">PRISM is built around shared bills, trips, households, and groups — not spreadsheets or general budgeting apps.</p>
            <p className="text-text text-[1.12rem] leading-relaxed max-w-[540px] font-bold">If you split rent, groceries, trips, or household costs, this is for you.</p>
          </div>
        </Reveal>
        <Reveal direction="right">
          <div className="relative flex justify-center overflow-visible px-2 sm:px-3 lg:px-4">
            <img
              src={builtForSharedCostsGraphic}
              alt="Built for shared costs"
              className="relative z-10 h-auto w-full max-w-[560px] object-contain sm:max-w-[680px] lg:max-w-[780px] xl:max-w-[820px]"
              draggable="false"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

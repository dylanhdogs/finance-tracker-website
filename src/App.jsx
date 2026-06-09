import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import ProblemSection from "./components/sections/ProblemSection";
import SharedExpensesSection from "./components/sections/SharedExpensesSection";
import SolutionSection from "./components/sections/SolutionSection";
import HowSection from "./components/sections/HowSection";
import LoveSection from "./components/sections/LoveSection";
import ScreenshotsSection from "./components/sections/ScreenshotsSection";
import CompareSection from "./components/sections/CompareSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import CtaSection from "./components/sections/CtaSection";
import FaqSection from "./components/sections/FaqSection";

export default function App() {
  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SharedExpensesSection />
        <SolutionSection />
        <HowSection />
        <LoveSection />
        <ScreenshotsSection />
        <CompareSection />
        <TestimonialsSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

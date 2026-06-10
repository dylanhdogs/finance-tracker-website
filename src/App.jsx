import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import ProblemSection from "./components/sections/ProblemSection";
import SharedExpensesSection from "./components/sections/SharedExpensesSection";
import AudienceSection from "./components/sections/AudienceSection";
import HowSection from "./components/sections/HowSection";
import SolutionSection from "./components/sections/SolutionSection";
import LoveSection from "./components/sections/LoveSection";
import CompareSection from "./components/sections/CompareSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import FaqSection from "./components/sections/FaqSection";
import CtaSection from "./components/sections/CtaSection";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SharedExpensesSection />
        <AudienceSection />
        <HowSection />
        <SolutionSection />
        <LoveSection />
        <CompareSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

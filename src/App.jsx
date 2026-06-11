import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>PRISM Budget — Shared Expenses &amp; Personal Finance Software</title>
        <meta name="description" content="Track shared expenses, split bills, and see who owes who — without spreadsheets or cloud accounts. PRISM is personal finance software built for real shared costs." />
        <meta property="og:url" content="https://prismbudget.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PRISM Budget — Shared Expenses &amp; Personal Finance Software" />
        <meta property="og:description" content="Track shared expenses, split bills, and see who owes who — without spreadsheets or cloud accounts. PRISM is personal finance software built for real shared costs." />
        <meta property="og:image" content="https://prismbudget.com/prism_logo_01.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PRISM Budget — Shared Expenses &amp; Personal Finance Software" />
        <meta name="twitter:description" content="Track shared expenses, split bills, and see who owes who — without spreadsheets or cloud accounts. PRISM is personal finance software built for real shared costs." />
        <meta name="twitter:image" content="https://prismbudget.com/prism_logo_01.png" />
        <link rel="canonical" href="https://prismbudget.com/" />
      </Helmet>
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

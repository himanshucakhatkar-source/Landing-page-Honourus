import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { PricingSection } from "./components/PricingSection";
import { TargetMarketSection } from "./components/TargetMarketSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <PricingSection />
        <TargetMarketSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
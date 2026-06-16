import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import ServiceFlowSection from "@/components/ServiceFlowSection";
import CurationLogicSection from "@/components/CurationLogicSection";
import CurationExampleSection from "@/components/CurationExampleSection";
import PackageItemsSection from "@/components/PackageItemsSection";
import ReceiverExperienceSection from "@/components/ReceiverExperienceSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SolutionSection />
        <ServiceFlowSection />
        <CurationLogicSection />
        <CurationExampleSection />
        <PackageItemsSection />
        <ReceiverExperienceSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

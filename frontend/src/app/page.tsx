import { HeroSection } from "@/components/HeroSection";
import { LeadSection } from "@/components/LeadSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { SiteFooter } from "@/components/SiteFooter";
import { TechStackSection } from "@/components/TechStackSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <TechStackSection />
      <LeadSection />
      <SiteFooter />
    </>
  );
}

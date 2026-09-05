import Hero from "@/components/sections/Hero";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import WhyTantraOps from "@/components/sections/WhyTantraOps";
import Technology from "@/components/sections/Technology";
import ResearchPreview from "@/components/sections/ResearchPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SolutionsOverview />
      <WhyTantraOps />
      <Technology />
      <ResearchPreview />
      <FinalCTA />
    </main>
  );
}
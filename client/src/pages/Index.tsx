
import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import IndustryShowcase from "@/components/IndustryShowcase";
import MissionSection from "@/components/MissionSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import MilestonesTimeline from "@/components/MilestonesTimeline";
import CtaSection from "@/components/CtaSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroCarousel />
      <IndustryShowcase />
      <MissionSection />
      <ProductsShowcase />
      <TestimonialsSection />
      <MilestonesTimeline />
      <CtaSection />
    </Layout>
  );
};

export default Index;

import React from "react";
import { Helmet } from "react-helmet-async";
import HomeHero from "@/components/home/HomeHero";
import CapabilitiesStrip from "@/components/home/CapabilitiesStrip";
import HomeServices from "@/components/home/HomeServices";
import FeaturedWork from "@/components/home/FeaturedWork";
import AutomationShowcase from "@/components/home/AutomationShowcase";
import WhyDataBuks from "@/components/home/WhyDataBuks";
import ProcessSection from "@/components/home/ProcessSection";
import AboutPreview from "@/components/home/AboutPreview";
import BudgetPreview from "@/components/home/BudgetPreview";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DataBuks — Websites, Apps & Automation for Indian Businesses</title>
        <meta
          name="description"
          content="DataBuks helps Indian businesses build their online presence, launch digital products and simplify everyday operations with custom software and AI."
        />
        <link rel="canonical" href="https://databuks.org/" />
      </Helmet>

      <main className="min-h-screen bg-[#F8FAFC]">
        <HomeHero />
        <CapabilitiesStrip />
        <HomeServices />
        <FeaturedWork />
        <AutomationShowcase />
        <WhyDataBuks />
        <ProcessSection />
        <AboutPreview />
        <BudgetPreview />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </>
  );
};

export default Home;

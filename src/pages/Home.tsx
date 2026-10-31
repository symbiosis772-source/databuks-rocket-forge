import React from "react";
import { Helmet } from "react-helmet-async";
import HomeHero from "@/components/home/HomeHero";
import CapabilitiesStrip from "@/components/home/CapabilitiesStrip";
import HomeServices from "@/components/home/HomeServices";
import FeaturedWork from "@/components/home/FeaturedWork";
import AutomationShowcase from "@/components/home/AutomationShowcase";
import ProcessSection from "@/components/home/ProcessSection";
import AboutPreview from "@/components/home/AboutPreview";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DataBuks — Software Development & Automation Studio</title>
        <meta
          name="description"
          content="We help Indian businesses build useful websites, custom applications and AI-powered workflows around the way they work. Based in Nagpur, India."
        />
        <link rel="canonical" href="https://databuks.org/" />
      </Helmet>

      <main className="min-h-screen bg-[#F6F5EF]">
        <HomeHero />
        <CapabilitiesStrip />
        <HomeServices />
        <FeaturedWork />
        <AutomationShowcase />
        <ProcessSection />
        <AboutPreview />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </>
  );
};

export default Home;

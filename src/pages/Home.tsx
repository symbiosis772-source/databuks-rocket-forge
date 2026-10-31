import React from "react";
import { Helmet } from "react-helmet-async";
import HomeHero from "@/components/home/HomeHero";
import CapabilitiesStrip from "@/components/home/CapabilitiesStrip";
import HomeServices from "@/components/home/HomeServices";
import ApproachFeature from "@/components/home/ApproachFeature";
import UpcomingProducts from "@/components/home/UpcomingProducts";
import ProcessSection from "@/components/home/ProcessSection";
import WorkInvitation from "@/components/home/WorkInvitation";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DataBuks — Technology That Works For Your Business</title>
        <meta
          name="description"
          content="DataBuks builds websites, applications and connected workflows for Indian businesses—helping you serve customers and simplify everyday operations. Based in Nagpur, India."
        />
        <link rel="canonical" href="https://databuks.org/" />
      </Helmet>

      <main className="min-h-screen bg-[#F7F4EE]">
        <HomeHero />
        <CapabilitiesStrip />
        <HomeServices />
        <ApproachFeature />
        <UpcomingProducts />
        <ProcessSection />
        <WorkInvitation />
        <FaqSection />
        <FinalCtaSection />
      </main>
    </>
  );
};

export default Home;

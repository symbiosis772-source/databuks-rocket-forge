import React from "react";
import { Helmet } from "react-helmet-async";
import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
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
        {/* 1. Clear Hero & Software Illustration */}
        <HomeHero />

        {/* 2. Four Services with Practical Business Needs & Examples */}
        <HomeServices />

        {/* 3. Compact Problem-to-Solution Section */}
        <ProblemSolutionSection />

        {/* 4. Upcoming In-House Products (Sales Agent & Customizable Voice Agent) */}
        <UpcomingProducts />

        {/* 5. One Concise Delivery Process */}
        <ProcessSection />

        {/* 6. Link to Real Client Work */}
        <WorkInvitation />

        {/* 7. Five Useful FAQs */}
        <FaqSection />

        {/* 8. Final Enquiry Call to Action */}
        <FinalCtaSection />
      </main>
    </>
  );
};

export default Home;

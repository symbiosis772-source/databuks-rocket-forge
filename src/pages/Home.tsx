import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import HomeHero from "@/components/home/HomeHero";
import HomeServices from "@/components/home/HomeServices";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import ProcessSection from "@/components/home/ProcessSection";
import WorkInvitation from "@/components/home/WorkInvitation";
import FaqSection from "@/components/home/FaqSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Backward-compatibility redirect for external links pointing to /#products
  useEffect(() => {
    if (location.hash === "#products") {
      navigate("/products", { replace: true });
    }
  }, [location.hash, navigate]);

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

      <main className="min-h-screen bg-[#080D16]">
        {/* 1. Hero with Cinematic Digital Network Artwork & Agency Offer */}
        <HomeHero />

        {/* 2. Four Services with Practical Business Needs & Examples */}
        <HomeServices />

        {/* 3. Compact Problem-to-Solution Section */}
        <ProblemSolutionSection />

        {/* 4. One Concise Delivery Process with Secondary Systems Artwork */}
        <ProcessSection />

        {/* 5. Link to Real Client Work */}
        <WorkInvitation />

        {/* 6. Five Useful FAQs */}
        <FaqSection />

        {/* 7. Final Enquiry Call to Action */}
        <FinalCtaSection />
      </main>
    </>
  );
};

export default Home;

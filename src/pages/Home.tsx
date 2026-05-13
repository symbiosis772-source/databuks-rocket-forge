import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyOverview from "@/components/CompanyOverview";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ServicesOverview = lazy(() => import("@/components/ServicesOverview"));
const MVPSection = lazy(() => import("@/components/MVPSection"));
const FastDeliverySection = lazy(() => import("@/components/FastDeliverySection"));
const WhyChooseSection = lazy(() => import("@/components/WhyChooseSection"));
const TestimonialsPreview = lazy(() => import("@/components/TestimonialsPreview"));
const CTASection = lazy(() => import("@/components/CTASection"));

const SectionFallback = () => <div className="py-16" />;

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="DataBuks | Custom Websites, Apps & AI Automation Solutions" description="DataBuks is a modern tech agency delivering custom websites, apps, software, automations, and AI-powered solutions. Fast delivery, affordable pricing." path="/home" />
      <Header />
      <main>
        <HeroSection />
        <CompanyOverview />
        <Suspense fallback={<SectionFallback />}>
          <ServicesOverview />
          <MVPSection />
          <FastDeliverySection />
          <WhyChooseSection />
          <TestimonialsPreview />
          <CTASection />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;

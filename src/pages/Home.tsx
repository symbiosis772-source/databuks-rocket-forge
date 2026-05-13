import SEO from "@/components/SEO";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyOverview from "@/components/CompanyOverview";
import ServicesOverview from "@/components/ServicesOverview";
import MVPSection from "@/components/MVPSection";
import FastDeliverySection from "@/components/FastDeliverySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="DataBuks | Custom Websites, Apps & AI Automation Solutions" description="DataBuks is a modern tech agency delivering custom websites, apps, software, automations, and AI-powered solutions. Fast delivery, affordable pricing." path="/home" />
      <Header />
      <main>
        <HeroSection />
        <CompanyOverview />
        <ServicesOverview />
        <MVPSection />
        <FastDeliverySection />
        <WhyChooseSection />
        <TestimonialsPreview />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;

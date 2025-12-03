import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyOverview from "@/components/CompanyOverview";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseSection from "@/components/WhyChooseSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import NichesSection from "@/components/NichesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CompanyOverview />
        <ServicesOverview />
        <WhyChooseSection />
        <PortfolioPreview />
        <TestimonialsPreview />
        <NichesSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;

import SEO from "@/components/SEO";
import Header from "@/components/Header";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Services | DataBuks — Web, App, Software & Automation" description="Custom websites, mobile and web apps, software systems, API integrations, automations, and AI-powered solutions delivered fast." path="/services" />
      <Header />
      <main className="pt-20">
        <ServicesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;

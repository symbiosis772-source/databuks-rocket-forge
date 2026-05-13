import SEO from "@/components/SEO";
import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Pricing | DataBuks — Affordable Tech Services" description="Transparent, affordable pricing for websites, apps, MVPs, and automations. Pick a plan that fits your project." path="/pricing" />
      <Header />
      <main className="pt-20">
        <PricingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Pricing;

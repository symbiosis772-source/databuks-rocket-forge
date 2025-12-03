import Header from "@/components/Header";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
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

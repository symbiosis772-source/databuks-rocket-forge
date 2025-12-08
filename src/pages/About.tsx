import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { HeroSection } from "@/components/ui/hero-section-2";
import databuksLogo from "@/assets/databuks-logo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection
          logo={{
            url: databuksLogo,
            alt: "DataBuks Logo",
            text: "DataBuks"
          }}
          slogan="TECHNOLOGY SERVICES AGENCY"
          title={
            <>
              About <br />
              <span className="text-primary">DataBuks</span>
            </>
          }
          subtitle="We are a passionate team dedicated to building custom websites, software systems, automations, and MVPs. Our mission is to turn your ideas into impactful products with quality, speed, and affordability."
          callToAction={{
            text: "GET IN TOUCH →",
            href: "/contact",
          }}
          backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=60"
          contactInfo={{
            website: "databuks.com",
            phone: "+91 8788606608",
            address: "India - Serving Worldwide",
          }}
        />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;

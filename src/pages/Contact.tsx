import SEO from "@/components/SEO";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Contact DataBuks | Start Your Project Today" description="Get in touch with DataBuks to discuss your website, app, software, or automation project. Fast response, free consultation." path="/contact" />
      <Header />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;

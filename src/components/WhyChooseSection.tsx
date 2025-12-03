import { 
  Zap, 
  Palette, 
  Wallet, 
  Settings, 
  MessageCircle, 
  Eye,
  PhoneCall,
  Shield 
} from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Typically 3-7 days for most projects",
    },
    {
      icon: Palette,
      title: "Modern Designs",
      description: "High-quality, professional aesthetics",
    },
    {
      icon: Wallet,
      title: "Affordable Pricing",
      description: "Value-for-money solutions",
    },
    {
      icon: Settings,
      title: "100% Custom-Made",
      description: "No templates, fully tailored work",
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Transparent updates throughout",
    },
    {
      icon: Eye,
      title: "No Hidden Charges",
      description: "What you see is what you pay",
    },
    {
      icon: PhoneCall,
      title: "WhatsApp Support",
      description: "Quick responses via WhatsApp",
    },
    {
      icon: Shield,
      title: "Reliable & Consistent",
      description: "Dependable service every time",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on Trust,{" "}
            <span className="gradient-text">Delivered with Excellence</span>
          </h2>
          <p className="text-muted-foreground">
            We combine speed, quality, and affordability to give you the best value for your investment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

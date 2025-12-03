import { 
  Zap, 
  Palette, 
  Settings, 
  Headphones, 
  Server, 
  MessageCircle,
  Wallet,
  Award
} from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fast & Reliable Delivery",
      description: "Projects delivered in 1–1.5 months",
    },
    {
      icon: Palette,
      title: "Modern Design + Clean Development",
      description: "Beautiful UI with clean, maintainable code",
    },
    {
      icon: Settings,
      title: "Custom Solutions (No Templates)",
      description: "100% custom-built for your needs",
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      description: "From planning to deployment and beyond",
    },
    {
      icon: Server,
      title: "Powerful Backend + Scalable Build",
      description: "Built to grow with your business",
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Transparent updates throughout the project",
    },
    {
      icon: Wallet,
      title: "Affordable Pricing",
      description: "Quality work at competitive rates",
    },
    {
      icon: Award,
      title: "Focus on Quality & Performance",
      description: "Optimized for speed and reliability",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
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
          {reasons.map((reason) => (
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

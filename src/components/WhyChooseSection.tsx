import { Zap, Palette, Settings, Headphones, Server, MessageCircle, Wallet, Award } from "lucide-react";

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
    <section className="py-24 bg-midnight-slate">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full border border-lead/40 text-body-sm text-starlight uppercase tracking-wide mb-6">
            Why Choose Us
          </span>
          <h2 className="text-heading-lg md:text-display font-light text-starlight mb-4">
            Built on Trust,{" "}
            <span className="text-silver">Delivered with Excellence</span>
          </h2>
          <p className="text-body text-silver">
            We combine speed, quality, and affordability to give you the best value for your investment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="text-center p-6 border border-lead/20 hover:border-lead/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center mb-4 text-mercury-blue">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-body font-medium text-starlight mb-2">
                {reason.title}
              </h3>
              <p className="text-body-sm text-silver">
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

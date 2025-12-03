import { 
  Globe, 
  Smartphone, 
  Workflow, 
  Plug, 
  Bot, 
  MessageSquare,
  ChevronRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Business websites, shop/brand sites, company profiles, portfolio sites, landing pages",
      features: ["SEO-ready builds", "High-speed, mobile-first", "Custom designs"],
    },
    {
      icon: Smartphone,
      title: "App & Software Development",
      description: "Web applications, admin panels, CRM systems, billing/management systems",
      features: ["Dashboard systems", "Internal tools", "Custom solutions"],
    },
    {
      icon: Workflow,
      title: "Automation Solutions",
      description: "WhatsApp workflows, CRM automation, lead automation, email workflows",
      features: ["Payment workflows", "Data processing", "N8N/Make/Custom"],
    },
    {
      icon: Plug,
      title: "API Integrations",
      description: "Payment gateways, WhatsApp APIs, CRM integrations, AI APIs",
      features: ["Third-party tools", "Custom APIs", "Seamless connections"],
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Custom AI chatbots, AI workflows, NLP + RAG systems",
      features: ["AI website builder (soon)", "AI coding assistant", "Smart automation"],
    },
    {
      icon: MessageSquare,
      title: "Consultation",
      description: "Tech planning, workflow strategy, software consultation",
      features: ["Expert guidance", "Best practices", "Growth planning"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Tech Solutions for{" "}
            <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-muted-foreground">
            From websites to AI-powered automation, we deliver everything you need to grow digitally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

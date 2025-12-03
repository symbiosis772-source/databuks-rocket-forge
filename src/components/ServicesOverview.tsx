import { Link } from "react-router-dom";
import { Globe, Smartphone, Workflow, Plug, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesOverview = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Business sites, portfolios, landing pages — SEO-ready and mobile-first.",
    },
    {
      icon: Smartphone,
      title: "App & Software Development",
      description: "Web apps, admin panels, CRM systems, and custom dashboards.",
    },
    {
      icon: Workflow,
      title: "Automation Solutions",
      description: "WhatsApp workflows, CRM automation, email sequences, and more.",
    },
    {
      icon: Plug,
      title: "API Integrations",
      description: "Payment gateways, WhatsApp APIs, CRM tools, and third-party services.",
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Custom chatbots, AI workflows, NLP systems, and intelligent automation.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We{" "}
            <span className="gradient-text">Build For You</span>
          </h2>
          <p className="text-muted-foreground">
            From websites to AI tools — we deliver complete digital solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

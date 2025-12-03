import { Link } from "react-router-dom";
import { Globe, Smartphone, Workflow, Bot, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesOverview = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, fast, mobile-first websites tailored to your brand.",
      link: "/services",
    },
    {
      icon: Smartphone,
      title: "App & Software Development",
      description: "Custom dashboards, tools, web apps, business management systems.",
      link: "/services",
    },
    {
      icon: Workflow,
      title: "Automations & Integrations",
      description: "Lead automation, workflow automation, WhatsApp & payment integrations.",
      link: "/services",
    },
    {
      icon: Bot,
      title: "AI Tools & Workflows",
      description: "Custom AI chatbots, agents, RAG workflows, business AI tools.",
      link: "/services",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <Button variant="ghost" size="sm" asChild className="p-0 h-auto text-primary hover:text-primary/80">
                <Link to={service.link}>
                  View More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
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

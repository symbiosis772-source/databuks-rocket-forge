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
    <section className="py-24 bg-deep-space">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full border border-lead/40 text-body-sm text-starlight uppercase tracking-wide mb-6">
            Our Services
          </span>
          <h2 className="text-heading-lg md:text-display font-light text-starlight mb-4">
            What We{" "}
            <span className="text-silver">Build For You</span>
          </h2>
          <p className="text-body text-silver">
            From websites to AI tools — we deliver complete digital solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 border border-lead/20 hover:border-lead/40 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-5 text-mercury-blue">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-heading-sm font-light text-starlight mb-3">
                {service.title}
              </h3>
              <p className="text-body-sm text-silver mb-4 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services#top">
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

import { 
  Globe, 
  Smartphone, 
  Workflow, 
  Plug, 
  Bot, 
  MessageSquare
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const ServicesSection = () => {
  const services = [
    {
      Icon: Globe,
      name: "Website Development",
      description: "Business websites, shop/brand sites, company profiles, portfolio sites, landing pages. SEO-ready, high-speed, mobile-first builds.",
      href: "/contact",
      cta: "Start a Project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Smartphone,
      name: "App & Software Development",
      description: "Web applications, admin panels, CRM systems, billing/management systems with custom dashboard solutions.",
      href: "/contact",
      cta: "Start a Project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Workflow,
      name: "Automation Solutions",
      description: "WhatsApp workflows, CRM automation, lead automation, email workflows, payment workflows using N8N/Make/Custom.",
      href: "/contact",
      cta: "Start a Project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Plug,
      name: "API Integrations",
      description: "Payment gateways, WhatsApp APIs, CRM integrations, AI APIs with seamless third-party connections.",
      href: "/contact",
      cta: "Start a Project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: Bot,
      name: "AI Agents & Chatbot Development",
      description: "Custom AI agents, chatbots, conversational systems, and automated support tools for customer engagement.",
      href: "/contact",
      cta: "Start a Project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    },
    {
      Icon: MessageSquare,
      name: "Consultation",
      description: "Tech planning, workflow strategy, software consultation with expert guidance and best practices.",
      href: "/contact",
      cta: "Start a Project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4",
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

        <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
          {services.map((service) => (
            <BentoCard key={service.name} {...service} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default ServicesSection;

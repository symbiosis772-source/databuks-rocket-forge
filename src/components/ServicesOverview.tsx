import { Link } from "react-router-dom";
import { Globe, Smartphone, Workflow, Bot, ArrowUpRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    { icon: Globe, title: "Websites", description: "Fast, modern, conversion-ready." },
    { icon: Smartphone, title: "Apps & Software", description: "Dashboards, CRMs, custom tools." },
    { icon: Workflow, title: "Automations", description: "WhatsApp, CRM, lead, payment flows." },
    { icon: Bot, title: "AI Tools", description: "Chatbots, agents, RAG workflows." },
  ];

  return (
    <section className="py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-sm text-muted-foreground mb-3" style={{ letterSpacing: "-0.015em" }}>
            What we build
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05]">
            Four practices, <em className="italic">one team.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="group bg-card rounded-3xl p-6 shadow-floating hover:shadow-elevated transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-12">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-foreground" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

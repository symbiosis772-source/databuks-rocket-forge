import { Link } from "react-router-dom";
import { Globe, Smartphone, Workflow, Bot, ArrowUpRight } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    { icon: Globe, title: "Websites", desc: "Fast, modern, conversion-ready." },
    { icon: Smartphone, title: "Apps", desc: "Dashboards, CRMs, portals." },
    { icon: Workflow, title: "Automations", desc: "WhatsApp, CRM, lead flows." },
    { icon: Bot, title: "AI Tools", desc: "Chatbots, agents, RAG." },
  ];

  return (
    <section className="bg-void py-24 border-t border-fern">
      <div className="container mx-auto px-5">
        <p className="eyebrow mb-4">// Why DataBuks</p>
        <h2 className="text-3xl md:text-5xl text-phosphor tracking-tight max-w-2xl mb-12">
          Four practices, one team.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-fern border border-fern">
          {services.map((s) => (
            <Link
              key={s.title}
              to="/services"
              className="group bg-void hover:bg-carbon p-6 transition-colors"
            >
              <div className="flex items-start justify-between mb-12">
                <s.icon className="w-5 h-5 text-reactor" strokeWidth={1.5} />
                <ArrowUpRight className="w-4 h-4 text-lichen group-hover:text-reactor transition-colors" />
              </div>
              <h3 className="text-xl text-phosphor mb-1 tracking-tight">{s.title}</h3>
              <p className="text-sm text-lichen">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

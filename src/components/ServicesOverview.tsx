import { Link } from "react-router-dom";
import { Globe, Smartphone, Workflow, Bot, ArrowUpRight } from "lucide-react";

const cardSurfaces = [
  { bg: "bg-amethyst", text: "text-white" },
  { bg: "bg-deep-iris", text: "text-white" },
  { bg: "bg-orchid", text: "text-[#0f1011]" },
  { bg: "bg-sky-wash", text: "text-[#0f1011]" },
];

const ServicesOverview = () => {
  const services = [
    { icon: Globe, title: "Websites", desc: "Fast, modern, conversion-ready." },
    { icon: Smartphone, title: "Apps", desc: "Dashboards, CRMs, portals." },
    { icon: Workflow, title: "Automations", desc: "WhatsApp, CRM, lead flows." },
    { icon: Bot, title: "AI Tools", desc: "Chatbots, agents, RAG." },
  ];

  return (
    <section className="bg-obsidian py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="eyebrow mb-6">What we build</p>
          <h2 className="text-display text-white max-w-3xl mx-auto">
            Four practices, <em className="italic font-normal">one</em> team.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const surface = cardSurfaces[i % cardSurfaces.length];
            return (
              <Link
                key={s.title}
                to="/services"
                className={`group relative rounded-[30px] p-7 min-h-[260px] flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${surface.bg} ${surface.text}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] tracking-[0.182em] uppercase opacity-80">
                    /0{i + 1}
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <s.icon className="w-6 h-6 mb-5 opacity-90" strokeWidth={1.5} />
                  <h3 className="font-display text-[28px] leading-none mb-2">{s.title}</h3>
                  <p className="text-[14px] leading-[1.5] opacity-80">{s.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

import { Rocket, Workflow, Code, Plug, Bot, MessageCircle } from "lucide-react";

const CompanyOverview = () => {
  const specializations = [
    { icon: Rocket, label: "Full product builds" },
    { icon: Code, label: "Startup MVP development" },
    { icon: Workflow, label: "Automations & workflows" },
    { icon: Code, label: "Frontend + Backend development" },
    { icon: Plug, label: "API integrations" },
    { icon: Bot, label: "AI-enabled tools" },
  ];

  return (
    <section className="py-24 bg-midnight-slate">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 rounded-full border border-lead/40 text-body-sm text-starlight uppercase tracking-wide mb-6">
              About DataBuks
            </span>
            <h2 className="text-heading-lg md:text-display font-light text-starlight mb-6">
              Modern Technology Services{" "}
              <span className="text-silver">You Can Trust</span>
            </h2>
          </div>

          <div className="space-y-6 text-center mb-16">
            <p className="text-body md:text-subheading text-silver leading-relaxed">
              DataBuks is a modern technology service agency delivering high-quality
              custom websites, apps, internal tools, workflows, automations, and AI-powered systems.
            </p>
            <p className="text-body md:text-subheading text-silver leading-relaxed">
              We help businesses, creators, brands, and startups bring their digital ideas to life —
              quickly, affordably, and professionally.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-heading-sm font-light text-starlight text-center mb-8">
              We specialize in:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specializations.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 border border-lead/20 hover:border-lead/40 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-mercury-blue">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-body-sm text-starlight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 border border-lead/20 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MessageCircle className="w-5 h-5 text-mercury-blue" />
              <span className="text-heading-sm font-light text-starlight">Our Promise</span>
            </div>
            <p className="text-body text-silver">
              With clear communication, clean code, and fast timelines,
              DataBuks makes product building simple and smooth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

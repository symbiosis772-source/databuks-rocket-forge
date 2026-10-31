import React from "react";
import { Globe, Smartphone, Workflow, Bot } from "lucide-react";

export const CapabilitiesStrip: React.FC = () => {
  const capabilities = [
    {
      title: "Business websites",
      detail: "Clean, responsive & credible",
      icon: Globe,
    },
    {
      title: "Apps & custom software",
      detail: "Customer portals & MVPs",
      icon: Smartphone,
    },
    {
      title: "Workflow automation",
      detail: "Connected tools & less manual entry",
      icon: Workflow,
    },
    {
      title: "AI integrations",
      detail: "Assistants with human oversight",
      icon: Bot,
    },
  ];

  return (
    <section className="bg-[#FFFFFF] border-b border-[#D8E0D8] py-6 md:py-7">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F5EF] border border-[#D8E0D8] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#E5ECE5] text-[#123B32] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-[#182822]">
                    {item.title}
                  </h2>
                  <p className="text-[11px] text-[#53635C] mt-0.5">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesStrip;

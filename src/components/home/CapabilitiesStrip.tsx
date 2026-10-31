import React from "react";
import { Globe, Smartphone, Workflow, Cpu } from "lucide-react";

export const CapabilitiesStrip: React.FC = () => {
  const capabilities = [
    {
      title: "Websites",
      detail: "Clean, responsive & conversion-focused",
      icon: Globe,
    },
    {
      title: "Apps & Software",
      detail: "Portals, dashboards & validated MVPs",
      icon: Smartphone,
    },
    {
      title: "Automation",
      detail: "Connected tools & fewer manual tasks",
      icon: Workflow,
    },
    {
      title: "AI Agents",
      detail: "Assistants & conversational triage",
      icon: Cpu,
    },
  ];

  return (
    <section className="bg-[#FFFFFF] border-b border-[#DDDCD4] py-5 sm:py-7">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-3.5 rounded-xl bg-[#F7F4EE] border border-[#DDDCD4] transition-colors hover:border-[#A43F2B]/40"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#DEE8EC] text-[#242621] flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A43F2B]" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xs sm:text-sm font-semibold text-[#242621] tracking-tight truncate">
                    {item.title}
                  </h2>
                  <p className="text-[10px] sm:text-xs text-[#62665E] mt-0.5 line-clamp-1">
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

import React from "react";
import { Globe, Smartphone, LayoutDashboard, Cpu } from "lucide-react";

export const CapabilitiesStrip: React.FC = () => {
  const capabilities = [
    {
      title: "Business websites",
      detail: "Responsive & conversion-focused",
      icon: Globe,
    },
    {
      title: "Mobile & web apps",
      detail: "Clean user portals & MVPs",
      icon: Smartphone,
    },
    {
      title: "Custom dashboards",
      detail: "Real-time records & inventory",
      icon: LayoutDashboard,
    },
    {
      title: "AI & workflow automation",
      detail: "Connected tools & automated tasks",
      icon: Cpu,
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-6 md:py-8">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
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


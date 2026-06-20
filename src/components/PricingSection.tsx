import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const plans = [
    {
      title: "Website Development",
      description: "Business sites, landing pages, portfolio sites",
      price: "Custom",
      features: [
        "Business websites",
        "Landing pages",
        "Portfolio sites",
        "SEO-optimized",
        "Mobile-responsive",
        "Fast loading",
      ],
    },
    {
      title: "App / Software Development",
      description: "Custom dashboards, management tools, CRM systems",
      price: "Custom",
      features: [
        "Web applications",
        "Admin dashboards",
        "CRM systems",
        "Management tools",
        "Database design",
        "API development",
      ],
    },
    {
      title: "Automations & Integrations",
      description: "WhatsApp, CRM, payment, custom API workflows",
      price: "Custom",
      features: [
        "WhatsApp automation",
        "CRM workflows",
        "Payment integrations",
        "Custom APIs",
        "Data automation",
        "N8N/Make setup",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-midnight-slate">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-5 py-2 rounded-full border border-lead/40 text-body-sm text-starlight uppercase tracking-wide mb-6">
            Pricing
          </span>
          <h2 className="text-heading-lg md:text-display font-light text-starlight mb-4">
            Transparent & Affordable{" "}
            <span className="text-silver">Pricing</span>
          </h2>
          <p className="text-body text-silver">
            All solutions are customized according to your requirements and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="relative p-6 border border-lead/20 transition-all duration-300 hover:border-lead/40"
            >
              <div className="text-center mb-6">
                <h3 className="text-heading-sm font-light text-starlight mb-2">
                  {plan.title}
                </h3>
                <p className="text-body-sm text-silver mb-4">
                  {plan.description}
                </p>
                <div className="text-3xl font-heading font-light text-mercury-blue">
                  {plan.price}
                  <span className="text-base font-normal text-silver ml-1">
                    pricing
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-mercury-blue flex-shrink-0" />
                    <span className="text-body-sm text-starlight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-full"
                asChild
              >
                <Link to="/contact">
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-body text-silver mt-12 max-w-2xl mx-auto">
          All solutions are customized according to your requirements and budget.
          Contact us for a detailed quote based on your specific needs.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

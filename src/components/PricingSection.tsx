import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      featured: true,
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
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transparent & Affordable{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-muted-foreground">
            All solutions are customized according to your requirements and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative bg-card rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg ${
                plan.featured
                  ? "border-primary shadow-lg scale-105 md:scale-110"
                  : "border-border hover:border-primary/30"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {plan.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="text-3xl font-heading font-bold text-primary">
                  {plan.price}
                  <span className="text-base font-normal text-muted-foreground ml-1">
                    pricing
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? "hero" : "outline"}
                className="w-full"
                asChild
              >
                <a href="#contact">
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
          All solutions are customized according to your requirements and budget. 
          Contact us for a detailed quote based on your specific needs.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

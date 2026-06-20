import { Link } from "react-router-dom";
import { Rocket, CheckCircle, Users, Lightbulb, Building2, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MVPSection = () => {
  const features = [
    "Full working prototype",
    "Clean UI",
    "Core features implemented",
    "Scalable backend",
    "Affordable pricing",
    "Delivery in 1–1.5 months",
  ];

  const perfectFor = [
    { icon: Rocket, label: "Startup founders" },
    { icon: Lightbulb, label: "Creators launching their first tool" },
    { icon: Building2, label: "SaaS concepts" },
    { icon: Users, label: "New business models" },
    { icon: Wrench, label: "Internal tool testing" },
  ];

  return (
    <section className="py-24 bg-midnight-slate relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-lead/40 text-body-sm text-starlight uppercase tracking-wide mb-6">
              <Rocket className="w-4 h-4" />
              MVP Development
            </span>
            <h2 className="text-heading-lg md:text-display font-light text-starlight mb-4">
              Launch Your MVP{" "}
              <span className="text-silver">Fast</span>
            </h2>
            <p className="text-body text-silver max-w-2xl mx-auto">
              Startups need speed. DataBuks builds clean, functional MVPs that help you
              launch quickly, test your idea, and validate your product with real users.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What you get */}
            <div className="p-8 border border-lead/20">
              <h3 className="text-heading-sm font-light text-starlight mb-6">
                What you get:
              </h3>
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-mercury-blue flex-shrink-0" />
                    <span className="text-body text-starlight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Perfect for */}
            <div className="p-8 border border-lead/20">
              <h3 className="text-heading-sm font-light text-starlight mb-6">
                Perfect for:
              </h3>
              <div className="space-y-4">
                {perfectFor.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-mercury-blue">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-body text-starlight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-heading-sm font-light text-starlight mb-6">
              Launch fast, test fast, grow fast.
            </p>
            <Button variant="default" size="xl" asChild>
              <Link to="/contact">
                Build My MVP
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVPSection;

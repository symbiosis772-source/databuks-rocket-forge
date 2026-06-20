import { Link } from "react-router-dom";
import { Zap, Workflow, Bot, Code2, MessageCircle, Target, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const FastDeliverySection = () => {
  const reasons = [
    { icon: Workflow, label: "Efficient internal workflows" },
    { icon: Bot, label: "Automation-backed development" },
    { icon: Code2, label: "Modern tech stack" },
    { icon: MessageCircle, label: "Clear communication" },
    { icon: Target, label: "Focused execution" },
  ];

  return (
    <section className="py-24 bg-deep-space">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-lead/40 text-body-sm text-starlight uppercase tracking-wide mb-6">
              <Clock className="w-4 h-4" />
              Fast Delivery
            </span>
            <h2 className="text-heading-lg md:text-display font-light text-starlight mb-4">
              Fast Delivery You Can Trust{" "}
              <span className="text-silver">(1–1.5 Weeks)</span>
            </h2>
            <p className="text-body text-silver max-w-2xl mx-auto">
              We deliver complete software, web apps, websites, workflows, and MVPs
              in 1–1.5 weeks, thanks to:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {reasons.map((reason) => (
              <div key={reason.label} className="p-5 border border-lead/20 hover:border-lead/40 transition-colors text-center">
                <div className="w-12 h-12 mx-auto flex items-center justify-center mb-3 text-mercury-blue">
                  <reason.icon className="w-6 h-6" />
                </div>
                <span className="text-body-sm text-starlight">
                  {reason.label}
                </span>
              </div>
            ))}
          </div>

          <div className="p-6 border border-lead/20 text-center mb-8">
            <Zap className="w-8 h-8 text-mercury-blue mx-auto mb-3" />
            <p className="text-body text-starlight font-medium">
              This means your idea becomes reality without delays or complications.
            </p>
          </div>

          <div className="text-center">
            <Button variant="default" size="xl" asChild>
              <Link to="/contact">
                Start Fast
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastDeliverySection;

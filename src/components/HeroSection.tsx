import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";

const HeroSection = () => {
  return (
    <HeroGeometric
      badge="Technology Services Agency"
      title1="Where ideas become products"
      title2="and products become impact."
      description="DataBuks creates custom websites, software systems, automations, and MVPs with fast delivery timelines of 1–1.5 weeks — quality, speed, and affordability in one place."
    >
      <Button variant="hero" size="xl" asChild>
        <Link to="/contact">
          Start Your Project
          <ArrowRight className="w-5 h-5" />
        </Link>
      </Button>
    </HeroGeometric>
  );
};

export default HeroSection;

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MVPSection = () => {
  return (
    <section className="bg-obsidian py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="eyebrow mb-6">MVP Sprint</p>
        <h2 className="text-display text-white max-w-3xl mx-auto">
          Launch in <em className="italic font-normal">1–1.5</em> weeks.
        </h2>
        <p className="mt-6 text-[18px] leading-[1.5] text-frost max-w-md mx-auto">
          Working prototype. Clean UI. Core features. Scalable backend. Test your idea with real users — fast.
        </p>
        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link to="/contact">
              Build my MVP
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MVPSection;

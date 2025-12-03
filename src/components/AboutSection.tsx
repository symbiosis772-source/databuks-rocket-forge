import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Fast delivery",
    "Clean communication",
    "Transparent pricing",
    "Custom-made solutions",
    "No templates, fully tailored",
    "Modern tech stack",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                About DataBuks
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Digital Solutions That{" "}
                <span className="gradient-text">Drive Results</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                DataBuks is a technology services agency that builds customized websites, 
                apps, management systems, automations, integrations, and AI tools tailored 
                to your business needs.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Founded in 2024 with a mission to offer high-quality digital solutions 
                that are accessible, reliable, and built on modern technology. We believe 
                every business deserves professional tech solutions without breaking the bank.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                      <span className="text-primary-foreground font-heading font-bold text-4xl">D</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">DataBuks</h3>
                    <p className="text-muted-foreground">Technology Services</p>
                    <p className="text-sm text-primary mt-2">Est. 2024</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

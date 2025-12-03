import { Target, Lightbulb, Users } from "lucide-react";

const CompanyOverview = () => {
  const overviewItems = [
    {
      icon: Users,
      title: "Who We Are",
      description: "DataBuks is a technology services agency specializing in customized digital solutions. We're a team of developers, designers, and automation experts passionate about building modern tech.",
    },
    {
      icon: Lightbulb,
      title: "What We Do",
      description: "We build websites, web applications, management systems, automations, API integrations, and AI-powered tools — all tailored exactly to your business needs.",
    },
    {
      icon: Target,
      title: "Why We Exist",
      description: "Founded in 2024 with a mission to make high-quality digital solutions accessible and affordable for businesses of all sizes. No templates, just custom-built excellence.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About DataBuks
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technology Services{" "}
            <span className="gradient-text">You Can Trust</span>
          </h2>
          <p className="text-muted-foreground">
            Fast delivery, clean communication, transparent pricing, and fully customized solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {overviewItems.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;

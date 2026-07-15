import { CheckCircle2, Zap, Code2, Bot, Rocket, Shield, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Modern Technology Stack",
      description: "We leverage cutting-edge technologies including React, Node.js, Python, and cloud platforms to build robust, scalable solutions."
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Our streamlined development process ensures rapid delivery without compromising on quality or functionality."
    },
    {
      icon: Bot,
      title: "AI-Powered Solutions",
      description: "We integrate intelligent automation and AI-driven features to help businesses operate smarter and more efficiently."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous testing and quality checks to ensure reliability, security, and optimal performance."
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description: "We build solutions designed to grow with your business, from startup MVPs to enterprise-grade applications."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "We prioritize clear communication and collaboration, ensuring your vision is realized exactly as intended."
    }
  ];

  const values = [
    "Fast delivery without compromising quality",
    "Clear and transparent communication",
    "Competitive and honest pricing",
    "Custom solutions tailored to your needs",
    "No templates – everything built from scratch",
    "Post-launch support and maintenance"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Who We Are
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building the Future of{" "}
              <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              DataBuks is a technology-focused agency specializing in delivering high-quality websites, 
              custom software systems, intelligent automations, AI-powered solutions, and rapid MVP development. 
              With a commitment to excellence and innovation, we help businesses transform their ideas into 
              powerful digital products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team brings together expertise in modern web technologies, automation workflows, and 
              artificial intelligence to create solutions that drive real business results. Whether you're 
              a startup looking to launch your first product or an established business seeking to modernize 
              your operations, we deliver scalable, efficient, and cost-effective solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Our Promise */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">
              Our Promise to You
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

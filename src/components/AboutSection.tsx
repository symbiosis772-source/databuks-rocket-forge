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
    <section id="about" className="py-24 bg-deep-space">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block px-5 py-2 rounded-full border border-lead/40 text-body-sm text-starlight uppercase tracking-wide mb-6">
              Who We Are
            </span>
            <h2 className="text-heading-lg md:text-display font-light text-starlight mb-6">
              Building the Future of{" "}
              <span className="text-silver">Digital Solutions</span>
            </h2>
            <p className="text-body md:text-subheading text-silver leading-relaxed mb-6">
              DataBuks is a technology-focused agency specializing in delivering high-quality websites,
              custom software systems, intelligent automations, AI-powered solutions, and rapid MVP development.
              With a commitment to excellence and innovation, we help businesses transform their ideas into
              powerful digital products.
            </p>
            <p className="text-body text-silver leading-relaxed">
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
                className="p-6 border border-lead/20 hover:border-lead/40 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 text-mercury-blue">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-heading-sm font-light text-starlight mb-2">
                  {item.title}
                </h3>
                <p className="text-body-sm text-silver">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Our Promise */}
          <div className="p-8 border border-lead/20">
            <h3 className="text-heading-lg font-light text-starlight mb-6 text-center">
              Our Promise to You
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-mercury-blue flex-shrink-0" />
                  <span className="text-body text-starlight">{value}</span>
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

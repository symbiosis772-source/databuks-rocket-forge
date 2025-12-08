import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import MultiOrbitSemiCircle from "@/components/ui/multi-orbit-semi-circle";
import {
  Code2, 
  Server, 
  Database, 
  Workflow, 
  Plug, 
  Cloud, 
  Brain, 
  Palette,
  ArrowRight,
  MessageCircle
} from "lucide-react";

const Technologies = () => {
  const techCategories = [
    {
      Icon: Code2,
      name: "Frontend Technologies",
      description: "React.js, Next.js, Tailwind CSS, HTML/CSS/JavaScript - Building fast, responsive user interfaces with component-based architecture.",
      href: "/contact",
      cta: "Start a project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: Server,
      name: "Backend Technologies",
      description: "Node.js, Express.js, Python, PHP - Scalable and secure server-side solutions for modern applications.",
      href: "/contact",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Database,
      name: "Databases",
      description: "PostgreSQL, MongoDB, Firebase, Supabase - Reliable data storage with real-time sync capabilities.",
      href: "/contact",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Workflow,
      name: "Automation Tools",
      description: "N8N, Make.com, Custom Scripts, Webhook Integrations - Streamline your business workflows.",
      href: "/contact",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: Plug,
      name: "API Integrations",
      description: "Payment gateways, WhatsApp Cloud API, CRM integrations, AI APIs - Connect with popular services.",
      href: "/contact",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: Cloud,
      name: "DevOps & Hosting",
      description: "Vercel, Netlify, Cloudflare, GitHub, Docker - Fast, secure, and reliable deployment solutions.",
      href: "/contact",
      cta: "Learn more",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: Brain,
      name: "AI & Machine Learning",
      description: "GPT Models, Vector Databases, NLP Pipelines, RAG Systems, Custom AI Agents - Intelligent solutions.",
      href: "/contact",
      cta: "Start AI project",
      background: <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Tech Stack
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Frameworks & <span className="gradient-text">Technologies</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We use modern, reliable, and scalable technologies to build websites, apps, automations, and AI-powered solutions.
          </p>
        </div>
      </section>

      <main className="py-16">
        <div className="container mx-auto px-4 space-y-20">
          
          {/* Bento Grid */}
          <section>
            <BentoGrid className="lg:grid-rows-3 max-w-6xl mx-auto">
              {techCategories.map((category) => (
                <BentoCard key={category.name} {...category} />
              ))}
            </BentoGrid>
          </section>

          {/* Multi Orbit Integration */}
          <MultiOrbitSemiCircle />

          {/* Design Tools Section */}
          <section className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Palette className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Design Tools</h2>
                <p className="text-muted-foreground mt-1">Creating beautiful user experiences</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">Figma</h4>
                <p className="text-sm text-muted-foreground mt-1">UI/UX design and prototyping</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">Canva</h4>
                <p className="text-sm text-muted-foreground mt-1">Simple graphics and social media assets</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">Illustrator</h4>
                <p className="text-sm text-muted-foreground mt-1">Custom branding and logo assets</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-3xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Want to Build Something with These Technologies?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's discuss your project and find the perfect tech stack for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/#contact">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="whatsapp" size="xl" asChild>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Technologies;

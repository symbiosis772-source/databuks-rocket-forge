import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { CategoryList, Category } from "@/components/ui/category-list";
import { 
  Code2, 
  Server, 
  Database, 
  Workflow, 
  Plug, 
  Cloud, 
  Brain, 
  
  ArrowRight,
  MessageCircle,
  Layers
} from "lucide-react";

const Technologies = () => {
  const techCategories: Category[] = [
    {
      id: "frontend",
      title: "Frontend Technologies",
      subtitle: "Building fast, responsive user interfaces",
      icon: <Code2 className="w-6 h-6" />,
      featured: true,
      technologies: [
        { name: "React.js", description: "Component-based UI library" },
        { name: "Next.js", description: "React framework with SSR" },
        { name: "Tailwind CSS", description: "Utility-first CSS" },
        { name: "TypeScript", description: "Type-safe JavaScript" },
        { name: "HTML5/CSS3", description: "Modern web standards" },
        { name: "JavaScript ES6+", description: "Modern JS features" },
        { name: "Framer Motion", description: "Animation library" },
        { name: "Shadcn/UI", description: "Component library" },
      ],
    },
    {
      id: "backend",
      title: "Backend Technologies",
      subtitle: "Scalable server-side solutions",
      icon: <Server className="w-6 h-6" />,
      technologies: [
        { name: "Node.js", description: "JavaScript runtime" },
        { name: "Express.js", description: "Web framework" },
        { name: "Python", description: "Versatile language" },
        { name: "PHP", description: "Server scripting" },
        { name: "REST APIs", description: "API architecture" },
        { name: "GraphQL", description: "Query language" },
      ],
    },
    {
      id: "databases",
      title: "Databases",
      subtitle: "Reliable data storage solutions",
      icon: <Database className="w-6 h-6" />,
      technologies: [
        { name: "PostgreSQL", description: "Relational database" },
        { name: "MongoDB", description: "NoSQL database" },
        { name: "Firebase", description: "Google's BaaS" },
        { name: "Supabase", description: "Open source Firebase" },
        { name: "MySQL", description: "Popular RDBMS" },
        { name: "Redis", description: "In-memory cache" },
      ],
    },
    {
      id: "automation",
      title: "Automation Tools",
      subtitle: "Streamline your business workflows",
      icon: <Workflow className="w-6 h-6" />,
      technologies: [
        { name: "N8N", description: "Workflow automation" },
        { name: "Make.com", description: "Integration platform" },
        { name: "Zapier", description: "App connections" },
        { name: "Custom Scripts", description: "Tailored solutions" },
        { name: "Webhooks", description: "Event-driven automation" },
        { name: "Cron Jobs", description: "Scheduled tasks" },
      ],
    },
    {
      id: "integrations",
      title: "API Integrations",
      subtitle: "Connect with popular services",
      icon: <Plug className="w-6 h-6" />,
      technologies: [
        { name: "Stripe", description: "Payment processing" },
        { name: "Razorpay", description: "India payments" },
        { name: "WhatsApp Cloud API", description: "Messaging" },
        { name: "Twilio", description: "Communication APIs" },
        { name: "SendGrid", description: "Email service" },
        { name: "OpenAI API", description: "AI integration" },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Hosting",
      subtitle: "Fast and reliable deployment",
      icon: <Cloud className="w-6 h-6" />,
      technologies: [
        { name: "Vercel", description: "Frontend hosting" },
        { name: "Netlify", description: "JAMstack hosting" },
        { name: "Cloudflare", description: "CDN & security" },
        { name: "AWS", description: "Cloud services" },
        { name: "Docker", description: "Containerization" },
        { name: "GitHub Actions", description: "CI/CD pipelines" },
      ],
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      subtitle: "Intelligent solutions for your business",
      icon: <Brain className="w-6 h-6" />,
      featured: true,
      technologies: [
        { name: "GPT Models", description: "Language AI" },
        { name: "Claude AI", description: "Anthropic's AI" },
        { name: "Vector Databases", description: "Embeddings storage" },
        { name: "LangChain", description: "LLM framework" },
        { name: "RAG Systems", description: "Retrieval-augmented" },
        { name: "Custom AI Agents", description: "Automated workflows" },
        { name: "NLP Pipelines", description: "Text processing" },
        { name: "Computer Vision", description: "Image analysis" },
      ],
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
          
          {/* Category List with Expandable Tech Stacks */}
          <CategoryList
            title="Explore Our Tech Stack"
            subtitle="Click on any category to see the technologies we use"
            categories={techCategories}
            headerIcon={<Layers className="w-8 h-8" />}
          />

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

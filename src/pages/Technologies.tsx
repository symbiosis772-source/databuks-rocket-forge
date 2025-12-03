import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
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

const TechCard = ({ name, description }: { name: string; description: string }) => (
  <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
    <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h4>
    <p className="text-sm text-muted-foreground mt-1">{description}</p>
  </div>
);

const SectionTitle = ({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
      <Icon className="w-7 h-7 text-primary" />
    </div>
    <div>
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
    </div>
  </div>
);

const Technologies = () => {
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
          
          {/* Frontend Technologies */}
          <section>
            <SectionTitle icon={Code2} title="Frontend Technologies" subtitle="Building fast, responsive user interfaces" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <TechCard name="React.js" description="Fast, responsive UI with component-based architecture" />
              <TechCard name="Next.js" description="High-performance modern websites with SEO optimization" />
              <TechCard name="Tailwind CSS" description="Clean and elegant interfaces with utility-first CSS" />
              <TechCard name="HTML / CSS / JavaScript" description="Strong foundation for web performance" />
            </div>
          </section>

          {/* Backend Technologies */}
          <section>
            <SectionTitle icon={Server} title="Backend Technologies" subtitle="Scalable and secure server-side solutions" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <TechCard name="Node.js" description="Scalable backend environment for modern apps" />
              <TechCard name="Express.js" description="Clean and fast API development framework" />
              <TechCard name="Python" description="AI workflows, automation logic, and data processing" />
              <TechCard name="PHP" description="For specific client requirements and legacy systems" />
            </div>
          </section>

          {/* Databases */}
          <section>
            <SectionTitle icon={Database} title="Databases" subtitle="Reliable data storage solutions" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <TechCard name="PostgreSQL" description="Reliable relational database for structured data" />
              <TechCard name="MongoDB" description="Flexible and scalable NoSQL database" />
              <TechCard name="Firebase" description="Real-time apps with instant data sync" />
              <TechCard name="Supabase" description="Modern backend features with PostgreSQL power" />
            </div>
          </section>

          {/* Automation Tools */}
          <section>
            <SectionTitle icon={Workflow} title="Automation Tools" subtitle="Streamline your business workflows" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <TechCard name="N8N" description="Visual workflow automation for complex processes" />
              <TechCard name="Make.com" description="API linking and business automation made easy" />
              <TechCard name="Custom Scripts" description="Tailor-made automation workflows for unique needs" />
              <TechCard name="Webhook Integrations" description="Real-time event triggers and notifications" />
            </div>
          </section>

          {/* API Integrations */}
          <section>
            <SectionTitle icon={Plug} title="API Integrations" subtitle="Connect with popular services and platforms" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <TechCard name="Payment Gateways" description="Razorpay, Cashfree, Paytm integration" />
              <TechCard name="WhatsApp Cloud API" description="Business messaging and notifications" />
              <TechCard name="CRM Integrations" description="Connect with popular CRM platforms" />
              <TechCard name="Email Services" description="Transactional and marketing emails" />
              <TechCard name="Messaging Workflows" description="WhatsApp + SMS automation" />
              <TechCard name="AI APIs" description="GPT, Claude, and other AI services" />
              <TechCard name="Third-party Tools" description="Business software integrations" />
              <TechCard name="Custom APIs" description="Build and connect custom endpoints" />
            </div>
          </section>

          {/* DevOps & Hosting */}
          <section>
            <SectionTitle icon={Cloud} title="DevOps & Hosting" subtitle="Fast, secure, and reliable deployment" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <TechCard name="Vercel" description="Modern and blazing-fast hosting" />
              <TechCard name="Netlify" description="Lightweight and reliable deployment" />
              <TechCard name="Cloudflare" description="Speed optimization + security" />
              <TechCard name="GitHub" description="Version control and collaboration" />
              <TechCard name="Docker" description="App packaging when needed" />
            </div>
          </section>

          {/* AI & Machine Learning */}
          <section>
            <SectionTitle icon={Brain} title="AI & Machine Learning Stack" subtitle="Intelligent solutions for modern businesses" />
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                <TechCard name="GPT Models" description="Advanced language AI capabilities" />
                <TechCard name="Vector Databases" description="Pinecone & local vector DBs" />
                <TechCard name="NLP Pipelines" description="Natural language processing" />
                <TechCard name="RAG Systems" description="Retrieval-augmented generation" />
                <TechCard name="Custom AI Agents" description="Task-specific AI solutions" />
              </div>
              <p className="text-muted-foreground text-center italic">
                "We build AI-powered tools using modern NLP pipelines, vector search, workflow automation, and custom agent logic."
              </p>
            </div>
          </section>

          {/* Design Tools */}
          <section>
            <SectionTitle icon={Palette} title="Design Tools" subtitle="Creating beautiful user experiences" />
            <div className="grid sm:grid-cols-3 gap-4">
              <TechCard name="Figma" description="UI/UX design and prototyping" />
              <TechCard name="Canva" description="Simple graphics and social media assets" />
              <TechCard name="Illustrator" description="Custom branding and logo assets" />
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

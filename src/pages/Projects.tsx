import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ProjectsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projects;

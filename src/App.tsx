import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetailPage = lazy(() => import("./pages/services/ServiceDetailPage"));
const Products = lazy(() => import("./pages/Products"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Suspense
            fallback={
              <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#090909] flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-[#111111] dark:border-[#F5F5F5] border-t-transparent animate-spin" />
              </div>
            }
          >
            <Routes>
              {/* Primary Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              
              {/* Products Route */}
              <Route path="/products" element={<Products />} />

              {/* Services Overview & Specific Sub-routes */}
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/website-development"
                element={<ServiceDetailPage forcedSlug="website-development" />}
              />
              <Route
                path="/services/app-software-development"
                element={<ServiceDetailPage forcedSlug="app-software-development" />}
              />
              <Route
                path="/services/business-automation"
                element={<ServiceDetailPage forcedSlug="business-automation" />}
              />
              <Route
                path="/services/ai-agents"
                element={<ServiceDetailPage forcedSlug="ai-agents" />}
              />
              <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />

              {/* Portfolio & Case Studies */}
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<CaseStudyDetail />} />

              {/* Company & Support Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />

              {/* Catch-all 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

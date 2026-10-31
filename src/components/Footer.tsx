import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/brand/databuks-logo.png";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, Mail, Phone, ArrowUpRight, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F172A] text-white border-t border-slate-800">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="DataBuks Home">
              <div className="bg-white/95 rounded-lg p-2 inline-block">
                <img
                  src={logo}
                  alt="DataBuks"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              DataBuks helps Indian businesses build their online presence, launch digital products, and simplify everyday operations with custom software and automation.
            </p>
            <div className="space-y-2 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{siteConfig.brand.addressSummary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{siteConfig.brand.phoneDisplay} ({siteConfig.brand.supportedLanguages})</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{siteConfig.brand.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/website-development"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-software-development"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  App & Software
                </Link>
              </li>
              <li>
                <Link
                  to="/services/business-automation"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Business Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-agents"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  AI Agents & Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1 text-xs font-semibold pt-1"
                >
                  All services overview <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Work & Process */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Work & Process
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/portfolio"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/#process"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  How We Work
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Project Scope & Estimates
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About DataBuks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Enquiries */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Start a Conversation
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have an idea, website, or workflow you want to discuss? Start with a straightforward conversation.
            </p>
            <div className="space-y-2 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Discuss Your Project
              </Link>
              <a
                href={siteConfig.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {siteConfig.brand.legalName}. Built in {siteConfig.brand.city}, India.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

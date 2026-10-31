import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/brand/databuks-logo.png";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, Mail, Phone, ArrowUpRight, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#123B32] text-[#F6F5EF] border-t border-[#1B4F43]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1B4F43]">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="DataBuks Home">
              <div className="bg-[#F6F5EF] rounded-lg p-2 inline-block">
                <img
                  src={logo}
                  alt="DataBuks"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-[#E5ECE5] text-sm leading-relaxed max-w-sm">
              DataBuks helps Indian businesses build useful websites, custom applications and AI-powered workflows around the way they work.
            </p>
            <div className="space-y-2 text-xs text-[#A3B8AD] pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D6F279] shrink-0" />
                <span>{siteConfig.brand.addressSummary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D6F279] shrink-0" />
                <span>{siteConfig.brand.phoneDisplay} ({siteConfig.brand.supportedLanguages})</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D6F279] shrink-0" />
                <span>{siteConfig.brand.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D6F279]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#E5ECE5] hover:text-[#FFFFFF] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#E5ECE5] hover:text-[#FFFFFF] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-[#E5ECE5] hover:text-[#FFFFFF] transition-colors"
                >
                  Work & Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#E5ECE5] hover:text-[#FFFFFF] transition-colors"
                >
                  About DataBuks
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-[#E5ECE5] hover:text-[#FFFFFF] transition-colors"
                >
                  Project Scope & Estimates
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#E5ECE5] hover:text-[#FFFFFF] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D6F279]">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/website-development"
                  className="text-[#E5ECE5] hover:text-[#FFFFFF] transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-software-development"
                  className="text-[#E5ECE5] hover:text-[#FFFFFF] transition-colors"
                >
                  Apps & Custom Software
                </Link>
              </li>
              <li>
                <Link
                  to="/services/business-automation"
                  className="text-[#E5ECE5] hover:text-[#FFFFFF] transition-colors"
                >
                  Business Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-agents"
                  className="text-[#E5ECE5] hover:text-[#FFFFFF] transition-colors"
                >
                  AI Agents & Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#D6F279] hover:underline transition-colors inline-flex items-center gap-1 text-xs font-semibold pt-1"
                >
                  All services overview <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Start a Conversation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#D6F279]">
              Start a Conversation
            </h3>
            <p className="text-xs text-[#E5ECE5] leading-relaxed">
              Have a project, website or workflow to fix? Talk directly with our development team in plain English or Hindi.
            </p>
            <div className="space-y-2 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 text-xs font-semibold text-[#182822] bg-[#D6F279] hover:bg-[#cbf056] rounded-md transition-colors"
              >
                Discuss Your Project
              </Link>
              <a
                href={siteConfig.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 text-xs font-semibold text-[#F6F5EF] bg-[#184239] hover:bg-[#1e5246] border border-[#276456] rounded-md transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#D6F279]" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3B8AD]">
          <p>
            © {new Date().getFullYear()} {siteConfig.brand.legalName}. Built in {siteConfig.brand.city}, Maharashtra, India.
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

import React from "react";
import { Link } from "react-router-dom";
import logoLight from "@/assets/brand/databuks-logo-light.png";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, Mail, Phone, ArrowUpRight, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#242A28] text-[#F7F4EE] border-t border-[#363E3B]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#363E3B]">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="DataBuks Home">
              <img
                src={logoLight}
                alt="DataBuks"
                className="w-[170px] sm:w-[185px] h-auto object-contain"
                width="185"
                height="46"
              />
            </Link>
            <p className="text-[#A2A8A2] text-sm leading-relaxed max-w-sm">
              DataBuks builds websites, applications and connected workflows for Indian businesses—helping you serve customers and simplify everyday operations.
            </p>
            <div className="space-y-2 text-xs text-[#A2A8A2] pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F1DDD1] shrink-0" />
                <span>{siteConfig.brand.addressSummary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F1DDD1] shrink-0" />
                <span>{siteConfig.brand.phoneDisplay} ({siteConfig.brand.supportedLanguages})</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F1DDD1] shrink-0" />
                <span>{siteConfig.brand.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F1DDD1]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#DDDCD4] hover:text-[#FFFFFF] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#DDDCD4] hover:text-[#FFFFFF] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="/#products"
                  className="text-[#DDDCD4] hover:text-[#FFFFFF] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>In-House Products</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-[#363E3B] text-[#F1DDD1] rounded">Soon</span>
                </a>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-[#DDDCD4] hover:text-[#FFFFFF] transition-colors"
                >
                  Work & Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#DDDCD4] hover:text-[#FFFFFF] transition-colors"
                >
                  About DataBuks
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-[#DDDCD4] hover:text-[#FFFFFF] transition-colors"
                >
                  Project Scope & Estimates
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#DDDCD4] hover:text-[#FFFFFF] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F1DDD1]">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/website-development"
                  className="text-[#DDDCD4] hover:text-[#FFFFFF] transition-colors"
                >
                  Websites & E-commerce
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-software-development"
                  className="text-[#DDDCD4] hover:text-[#FFFFFF] transition-colors"
                >
                  Apps & Custom Software
                </Link>
              </li>
              <li>
                <Link
                  to="/services/business-automation"
                  className="text-[#DDDCD4] hover:text-[#FFFFFF] transition-colors"
                >
                  Automation & Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-agents"
                  className="text-[#DDDCD4] hover:text-[#FFFFFF] transition-colors"
                >
                  AI Agents & Features
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#F1DDD1] hover:underline transition-colors inline-flex items-center gap-1 text-xs font-semibold pt-1"
                >
                  All services overview <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Start a Conversation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F1DDD1]">
              Start a Conversation
            </h3>
            <p className="text-xs text-[#A2A8A2] leading-relaxed">
              Have a project, website or workflow to fix? Talk directly with our development team in plain English or Hindi.
            </p>
            <div className="space-y-2 pt-1">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 text-xs font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-md transition-colors shadow-sm"
              >
                Discuss Your Project
              </Link>
              <a
                href={siteConfig.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 text-xs font-semibold text-[#F7F4EE] bg-[#313835] hover:bg-[#3D4542] border border-[#48524E] rounded-md transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#F1DDD1]" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A2A8A2]">
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

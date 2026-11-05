import React from "react";
import { Link } from "react-router-dom";
import logoLight from "@/assets/brand/databuks-logo-light.png";
import logoDark from "@/assets/brand/databuks-logo.png";
import { siteConfig } from "@/config/siteConfig";
import { MapPin, Mail, Phone, ArrowUpRight, MessageSquare } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F1F1F1] dark:bg-[#111111] text-[#111111] dark:text-[#F5F5F5] border-t border-[#DADADA] dark:border-[#303030]">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#DADADA] dark:border-[#303030]">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block" aria-label="DataBuks Home">
              <img
                src={logoDark}
                alt="DataBuks"
                className="w-[170px] sm:w-[185px] h-auto object-contain dark:hidden"
                width="185"
                height="46"
              />
              <img
                src={logoLight}
                alt="DataBuks"
                className="w-[170px] sm:w-[185px] h-auto object-contain hidden dark:block"
                width="185"
                height="46"
              />
            </Link>
            <p className="text-[#555555] dark:text-[#B5B5B5] text-sm leading-relaxed max-w-sm">
              DataBuks builds websites, custom applications and AI-powered workflows for businesses and founders worldwide—helping you serve customers and simplify everyday operations.
            </p>
            <div className="space-y-2 text-xs text-[#555555] dark:text-[#B5B5B5] pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5] shrink-0" />
                <span>{siteConfig.brand.addressSummary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5] shrink-0" />
                <span>{siteConfig.brand.phoneDisplay} ({siteConfig.brand.supportedLanguages})</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5] shrink-0" />
                <span>{siteConfig.brand.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5]">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-solutions"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Products by DataBuks</span>
                  <span className="text-[10px] px-1.5 py-0.2 bg-[#E5E5E5] dark:bg-[#171717] text-[#111111] dark:text-[#F5F5F5] border border-[#DADADA] dark:border-[#303030] rounded">Soon</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                >
                  Work & Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                >
                  About DataBuks
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                >
                  Project Scope & Estimates
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5]">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/website-development"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                >
                  Websites & E-commerce
                </Link>
              </li>
              <li>
                <Link
                  to="/services/app-software-development"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                >
                  Apps & Custom Software
                </Link>
              </li>
              <li>
                <Link
                  to="/services/business-automation"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                >
                  Automation & Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-agents"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors"
                >
                  AI Agents & Features
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-solutions"
                  className="text-[#555555] dark:text-[#B5B5B5] hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors font-medium"
                >
                  AI Solutions Hub (12 Models)
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#111111] dark:text-[#F5F5F5] hover:underline transition-colors inline-flex items-center gap-1 text-xs font-semibold pt-1"
                >
                  All services overview <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Start a Conversation */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5]">
              Start a Conversation
            </h3>
            <p className="text-xs text-[#555555] dark:text-[#B5B5B5] leading-relaxed">
              Every project starts with a practical discussion about your operational bottlenecks or digital product goals.
            </p>
            <div className="space-y-2.5 pt-2">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all"
              >
                <span>Discuss Your Project</span>
              </Link>
              <a
                href={siteConfig.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#111111] dark:text-[#F5F5F5] bg-transparent hover:bg-[#FAFAFA] dark:hover:bg-[#171717] border border-[#DADADA] dark:border-[#303030] rounded-xl transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#111111] dark:text-[#F5F5F5]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 5: Operating Standards */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] dark:text-[#F5F5F5]">
              Our Approach
            </h3>
            <ul className="space-y-2 text-xs text-[#555555] dark:text-[#B5B5B5]">
              <li>• Fixed-scope written milestones</li>
              <li>• Direct developer access</li>
              <li>• Full source code ownership</li>
              <li>• English & Hindi support</li>
              <li>• Hosted on reliable global cloud</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#555555] dark:text-[#B5B5B5]">
          <div>
            © {new Date().getFullYear()} {siteConfig.brand.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-[#111111] dark:hover:text-[#F5F5F5] transition-colors">
              Contact
            </Link>
            <span className="text-[#DADADA] dark:text-[#303030]">|</span>
            <span>Based in {siteConfig.brand.city}, India. Working worldwide.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

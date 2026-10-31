import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/brand/databuks-logo.png";
import { ChevronDown, Menu, X, ArrowRight, MessageSquareCode } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname, location.hash]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const services = siteConfig.navigation[0].items || [];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-slate-200/80 shadow-sm"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2 group" aria-label="DataBuks Home">
          <img
            src={logo}
            alt="DataBuks Technology Services"
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-150 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {/* Services with Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1 px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors ${
                location.pathname.startsWith("/services")
                  ? "text-blue-600 bg-blue-50/60"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            {servicesDropdownOpen && (
              <div
                className="absolute top-full left-0 w-80 lg:w-96 bg-white rounded-xl shadow-dropdown border border-slate-200 py-3 px-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                role="menu"
              >
                <div className="px-3 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    What We Build
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-medium text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                  >
                    All Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="space-y-1">
                  {services.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block p-2.5 rounded-lg hover:bg-blue-50/60 transition-colors group"
                      role="menuitem"
                    >
                      <div className="text-[14px] font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-relaxed line-clamp-2">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Work */}
          <Link
            to="/portfolio"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors ${
              location.pathname.startsWith("/portfolio")
                ? "text-blue-600 bg-blue-50/60"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
            }`}
          >
            Work
          </Link>

          {/* How We Work */}
          <Link
            to="/#process"
            className="px-3.5 py-2 text-[15px] font-medium rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
          >
            How We Work
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors ${
              location.pathname === "/about"
                ? "text-blue-600 bg-blue-50/60"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-all focus-ring active:scale-[0.99]"
          >
            Discuss Your Project
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/contact"
            className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md"
          >
            Enquire
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus-ring"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-5 py-6 space-y-5 animate-in slide-in-from-top-2 duration-150 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Services Section */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Services
            </div>
            <div className="space-y-1.5 pl-1">
              {services.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block py-2 text-sm font-medium text-slate-800 hover:text-blue-600"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/services"
                className="inline-flex items-center gap-1 py-1.5 text-xs font-semibold text-blue-600"
              >
                All services overview <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 space-y-2">
            <Link
              to="/portfolio"
              className="block py-2 text-base font-semibold text-slate-900 hover:text-blue-600"
            >
              Work & Case Studies
            </Link>
            <Link
              to="/#process"
              className="block py-2 text-base font-semibold text-slate-900 hover:text-blue-600"
            >
              How We Work (Process)
            </Link>
            <Link
              to="/about"
              className="block py-2 text-base font-semibold text-slate-900 hover:text-blue-600"
            >
              About DataBuks
            </Link>
            <Link
              to="/pricing"
              className="block py-2 text-base font-semibold text-slate-900 hover:text-blue-600"
            >
              Project Scope & Estimates
            </Link>
          </div>

          {/* Quick Action Buttons in Mobile Menu */}
          <div className="border-t border-slate-100 pt-4 space-y-3">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center py-3 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
            >
              Discuss Your Project
            </Link>
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg"
            >
              <MessageSquareCode className="w-4 h-4 text-emerald-600" />
              Chat on WhatsApp ({siteConfig.brand.phoneDisplay})
            </a>
            <div className="text-center text-xs text-slate-400 pt-1">
              {siteConfig.brand.supportedLanguages} • Based in {siteConfig.brand.city}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/brand/databuks-logo.png";
import { ChevronDown, Menu, X, ArrowRight, MessageSquare } from "lucide-react";
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

  const services = siteConfig.navigation.find((item) => item.hasDropdown)?.items || [];

  const isHomeActive = location.pathname === "/" || location.pathname === "/home";
  const isServicesActive = location.pathname.startsWith("/services");
  const isWorkActive = location.pathname.startsWith("/portfolio");
  const isAboutActive = location.pathname === "/about";
  const isContactActive = location.pathname === "/contact";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b border-[#D8E0D8] ${
        isScrolled
          ? "bg-[#F6F5EF]/95 backdrop-blur-md shadow-subtle"
          : "bg-[#F6F5EF]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 group"
          aria-label="DataBuks Home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src={logo}
            alt="DataBuks"
            className="h-10 md:h-11 w-auto object-contain transition-transform duration-150 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Navigation: Home | Services | Work | About | Contact */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5" aria-label="Main Navigation">
          {/* Home Link (First Item) */}
          <Link
            to="/"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isHomeActive
                ? "text-[#123B32] font-semibold bg-[#E5ECE5]/70"
                : "text-[#182822] hover:text-[#123B32] hover:bg-[#E5ECE5]/50"
            }`}
            aria-current={isHomeActive ? "page" : undefined}
          >
            Home
            {isHomeActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#123B32] rounded-full" />
            )}
          </Link>

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
                isServicesActive
                  ? "text-[#123B32] font-semibold bg-[#E5ECE5]/70"
                  : "text-[#182822] hover:text-[#123B32] hover:bg-[#E5ECE5]/50"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              aria-current={isServicesActive ? "page" : undefined}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-[#123B32]" : "text-[#53635C]"
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            {servicesDropdownOpen && (
              <div
                className="absolute top-full left-0 w-80 lg:w-96 bg-[#FFFFFF] rounded-xl shadow-dropdown border border-[#D8E0D8] py-3 px-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                role="menu"
              >
                <div className="px-3 pb-2 mb-1 border-b border-[#D8E0D8]/60 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#53635C]">
                    What We Build
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-[#123B32] hover:underline inline-flex items-center gap-1"
                  >
                    All Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="space-y-1">
                  {services.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block p-2.5 rounded-lg hover:bg-[#E5ECE5]/60 transition-colors group"
                      role="menuitem"
                    >
                      <div className="text-[14px] font-semibold text-[#182822] group-hover:text-[#123B32] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#53635C] mt-0.5 leading-relaxed line-clamp-2">
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
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isWorkActive
                ? "text-[#123B32] font-semibold bg-[#E5ECE5]/70"
                : "text-[#182822] hover:text-[#123B32] hover:bg-[#E5ECE5]/50"
            }`}
            aria-current={isWorkActive ? "page" : undefined}
          >
            Work
            {isWorkActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#123B32] rounded-full" />
            )}
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isAboutActive
                ? "text-[#123B32] font-semibold bg-[#E5ECE5]/70"
                : "text-[#182822] hover:text-[#123B32] hover:bg-[#E5ECE5]/50"
            }`}
            aria-current={isAboutActive ? "page" : undefined}
          >
            About
            {isAboutActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#123B32] rounded-full" />
            )}
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isContactActive
                ? "text-[#123B32] font-semibold bg-[#E5ECE5]/70"
                : "text-[#182822] hover:text-[#123B32] hover:bg-[#E5ECE5]/50"
            }`}
            aria-current={isContactActive ? "page" : undefined}
          >
            Contact
            {isContactActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#123B32] rounded-full" />
            )}
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#123B32] hover:bg-[#0B2620] rounded-lg shadow-sm transition-all focus-ring active:scale-[0.99]"
          >
            Discuss Your Project
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/contact"
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#123B32] hover:bg-[#0B2620] rounded-md"
          >
            Enquire
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#182822] hover:text-[#123B32] hover:bg-[#E5ECE5] rounded-lg focus-ring"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D8E0D8] bg-[#F6F5EF] px-5 py-6 space-y-5 animate-in slide-in-from-top-2 duration-150 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Main Links */}
          <div className="space-y-1.5">
            {/* Home in Mobile Navigation */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isHomeActive
                  ? "text-[#123B32] bg-[#E5ECE5]"
                  : "text-[#182822] hover:bg-[#E5ECE5]/60"
              }`}
              aria-current={isHomeActive ? "page" : undefined}
            >
              Home
            </Link>

            {/* Services with sub-items */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#53635C] px-3 mb-1.5">
                Services
              </div>
              <div className="space-y-1 pl-2">
                {services.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-sm font-medium text-[#182822] hover:text-[#123B32] hover:bg-[#E5ECE5]/60 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1 py-1.5 px-3 text-xs font-semibold text-[#123B32] hover:underline"
                >
                  All services overview <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <Link
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isWorkActive
                  ? "text-[#123B32] bg-[#E5ECE5]"
                  : "text-[#182822] hover:bg-[#E5ECE5]/60"
              }`}
              aria-current={isWorkActive ? "page" : undefined}
            >
              Work & Case Studies
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isAboutActive
                  ? "text-[#123B32] bg-[#E5ECE5]"
                  : "text-[#182822] hover:bg-[#E5ECE5]/60"
              }`}
              aria-current={isAboutActive ? "page" : undefined}
            >
              About DataBuks
            </Link>

            <Link
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 rounded-lg text-base font-semibold text-[#182822] hover:bg-[#E5ECE5]/60"
            >
              Project Scope & Estimates
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isContactActive
                  ? "text-[#123B32] bg-[#E5ECE5]"
                  : "text-[#182822] hover:bg-[#E5ECE5]/60"
              }`}
              aria-current={isContactActive ? "page" : undefined}
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Action Buttons in Mobile Menu */}
          <div className="border-t border-[#D8E0D8] pt-4 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 px-4 text-sm font-semibold text-white bg-[#123B32] hover:bg-[#0B2620] rounded-lg shadow-sm"
            >
              Discuss Your Project
            </Link>
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-[#182822] bg-[#E5ECE5] hover:bg-[#D8E0D8] rounded-lg"
            >
              <MessageSquare className="w-4 h-4 text-[#123B32]" />
              Chat on WhatsApp ({siteConfig.brand.phoneDisplay})
            </a>
            <div className="text-center text-xs text-[#53635C] pt-1">
              {siteConfig.brand.supportedLanguages} • Based in {siteConfig.brand.city}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

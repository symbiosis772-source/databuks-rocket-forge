import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoLight from "@/assets/brand/databuks-logo-light.png";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
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
  const isProductsActive = location.pathname === "/products";
  const isWorkActive = location.pathname.startsWith("/portfolio");
  const isAboutActive = location.pathname === "/about";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b border-[#2A3850] ${
        isScrolled
          ? "bg-[#080D16]/95 backdrop-blur-md shadow-card"
          : "bg-[#080D16]"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 h-[74px] md:h-[88px] flex items-center justify-between gap-3">
        {/* Brand Logo - Approved Light Version on Dark Graphite */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 group py-1"
          aria-label="DataBuks Home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src={logoLight}
            alt="DataBuks"
            className="w-[140px] sm:w-[155px] md:w-[185px] lg:w-[195px] h-auto object-contain transition-transform duration-150 group-hover:scale-[1.02]"
            width="195"
            height="49"
          />
        </Link>

        {/* Desktop Navigation: Home | Services | Products | Work | About */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {/* Home Link */}
          <Link
            to="/"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isHomeActive
                ? "text-[#67E8F9] font-semibold bg-[#151F30]"
                : "text-[#F4F7FC] hover:text-[#67E8F9] hover:bg-[#151F30]/60"
            }`}
            aria-current={isHomeActive ? "page" : undefined}
          >
            Home
            {isHomeActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#2563EB] rounded-full" />
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
                  ? "text-[#67E8F9] font-semibold bg-[#151F30]"
                  : "text-[#F4F7FC] hover:text-[#67E8F9] hover:bg-[#151F30]/60"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              aria-current={isServicesActive ? "page" : undefined}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-[#67E8F9]" : "text-[#B5C1D3]"
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            {servicesDropdownOpen && (
              <div
                className="absolute top-full left-0 w-80 lg:w-96 bg-[#151F30] rounded-xl shadow-dropdown border border-[#2A3850] py-3 px-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                role="menu"
              >
                <div className="px-3 pb-2 mb-1 border-b border-[#2A3850] flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B5C1D3]">
                    Services
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-[#67E8F9] hover:underline inline-flex items-center gap-1"
                  >
                    All Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="space-y-1">
                  {services.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block p-2.5 rounded-lg hover:bg-[#101827] transition-colors group"
                      role="menuitem"
                    >
                      <div className="text-[14px] font-semibold text-[#F4F7FC] group-hover:text-[#67E8F9] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#B5C1D3] mt-0.5 leading-relaxed line-clamp-2">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Products (Dedicated Standalone Route) */}
          <Link
            to="/products"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative flex items-center gap-1.5 ${
              isProductsActive
                ? "text-[#67E8F9] font-semibold bg-[#151F30]"
                : "text-[#F4F7FC] hover:text-[#67E8F9] hover:bg-[#151F30]/60"
            }`}
            aria-current={isProductsActive ? "page" : undefined}
          >
            <span>Products</span>
            <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#101827] text-[#67E8F9] border border-[#2A3850] rounded-full">
              Soon
            </span>
            {isProductsActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#2563EB] rounded-full" />
            )}
          </Link>

          {/* Work */}
          <Link
            to="/portfolio"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isWorkActive
                ? "text-[#67E8F9] font-semibold bg-[#151F30]"
                : "text-[#F4F7FC] hover:text-[#67E8F9] hover:bg-[#151F30]/60"
            }`}
            aria-current={isWorkActive ? "page" : undefined}
          >
            Work
            {isWorkActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#2563EB] rounded-full" />
            )}
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isAboutActive
                ? "text-[#67E8F9] font-semibold bg-[#151F30]"
                : "text-[#F4F7FC] hover:text-[#67E8F9] hover:bg-[#151F30]/60"
            }`}
            aria-current={isAboutActive ? "page" : undefined}
          >
            About
            {isAboutActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#2563EB] rounded-full" />
            )}
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-glow transition-all focus-ring active:scale-[0.99]"
          >
            Discuss Your Project
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/contact"
            className="inline-flex px-3 py-1.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg"
          >
            Enquire
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F4F7FC] hover:text-[#67E8F9] hover:bg-[#151F30] rounded-lg focus-ring shrink-0"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2A3850] bg-[#080D16] px-5 py-6 space-y-5 animate-in slide-in-from-top-2 duration-150 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Main Links */}
          <div className="space-y-1.5">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isHomeActive
                  ? "text-[#67E8F9] bg-[#151F30]"
                  : "text-[#F4F7FC] hover:bg-[#151F30]/60"
              }`}
              aria-current={isHomeActive ? "page" : undefined}
            >
              Home
            </Link>

            {/* Services with sub-items */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#B5C1D3] px-3 mb-1.5">
                Services
              </div>
              <div className="space-y-1 pl-2">
                {services.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-sm font-medium text-[#F4F7FC] hover:text-[#67E8F9] hover:bg-[#151F30] rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1 py-1.5 px-3 text-xs font-semibold text-[#67E8F9] hover:underline"
                >
                  All services overview <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Products (In-house) */}
            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isProductsActive
                  ? "text-[#67E8F9] bg-[#151F30]"
                  : "text-[#F4F7FC] hover:bg-[#151F30]/60"
              }`}
              aria-current={isProductsActive ? "page" : undefined}
            >
              <span>Products</span>
              <span className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-[#101827] text-[#67E8F9] border border-[#2A3850] rounded-full">
                Coming soon
              </span>
            </Link>

            {/* Work */}
            <Link
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isWorkActive
                  ? "text-[#67E8F9] bg-[#151F30]"
                  : "text-[#F4F7FC] hover:bg-[#151F30]/60"
              }`}
              aria-current={isWorkActive ? "page" : undefined}
            >
              Work & Case Studies
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isAboutActive
                  ? "text-[#67E8F9] bg-[#151F30]"
                  : "text-[#F4F7FC] hover:bg-[#151F30]/60"
              }`}
              aria-current={isAboutActive ? "page" : undefined}
            >
              About DataBuks
            </Link>
          </div>

          {/* Drawer CTA */}
          <div className="pt-4 border-t border-[#2A3850] space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-glow"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#F4F7FC] bg-[#151F30] hover:bg-[#101827] border border-[#2A3850] rounded-xl"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

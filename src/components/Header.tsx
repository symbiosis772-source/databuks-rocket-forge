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
  const isProductsActive = location.pathname === "/products";
  const isWorkActive = location.pathname.startsWith("/portfolio");
  const isAboutActive = location.pathname === "/about";
  const isContactActive = location.pathname === "/contact";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b border-[#DDDCD4] ${
        isScrolled
          ? "bg-[#F7F4EE] shadow-sm"
          : "bg-[#F7F4EE]"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 h-[74px] md:h-[88px] flex items-center justify-between gap-3">
        {/* Brand Logo - Correct Aspect Ratio & Prominent Size */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 group py-1"
          aria-label="DataBuks Home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src={logo}
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
              isHomeActive && !isProductsActive
                ? "text-[#A43F2B] font-semibold bg-[#F1DDD1]/60"
                : "text-[#242621] hover:text-[#A43F2B] hover:bg-[#F1DDD1]/40"
            }`}
            aria-current={isHomeActive && !isProductsActive ? "page" : undefined}
          >
            Home
            {isHomeActive && !isProductsActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#A43F2B] rounded-full" />
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
                  ? "text-[#A43F2B] font-semibold bg-[#F1DDD1]/60"
                  : "text-[#242621] hover:text-[#A43F2B] hover:bg-[#F1DDD1]/40"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              aria-current={isServicesActive ? "page" : undefined}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-[#A43F2B]" : "text-[#62665E]"
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            {servicesDropdownOpen && (
              <div
                className="absolute top-full left-0 w-80 lg:w-96 bg-[#FFFFFF] rounded-xl shadow-dropdown border border-[#DDDCD4] py-3 px-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                role="menu"
              >
                <div className="px-3 pb-2 mb-1 border-b border-[#DDDCD4]/60 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#62665E]">
                    Services
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-[#A43F2B] hover:underline inline-flex items-center gap-1"
                  >
                    All Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="space-y-1">
                  {services.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block p-2.5 rounded-lg hover:bg-[#F7F4EE] transition-colors group"
                      role="menuitem"
                    >
                      <div className="text-[14px] font-semibold text-[#242621] group-hover:text-[#A43F2B] transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#62665E] mt-0.5 leading-relaxed line-clamp-2">
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
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isProductsActive
                ? "text-[#A43F2B] font-semibold bg-[#F1DDD1]/60"
                : "text-[#242621] hover:text-[#A43F2B] hover:bg-[#F1DDD1]/40"
            }`}
            aria-current={isProductsActive ? "page" : undefined}
          >
            Products
            <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#F1DDD1] text-[#A43F2B] rounded-full">
              Soon
            </span>
            {isProductsActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#A43F2B] rounded-full" />
            )}
          </Link>

          {/* Work */}
          <Link
            to="/portfolio"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isWorkActive
                ? "text-[#A43F2B] font-semibold bg-[#F1DDD1]/60"
                : "text-[#242621] hover:text-[#A43F2B] hover:bg-[#F1DDD1]/40"
            }`}
            aria-current={isWorkActive ? "page" : undefined}
          >
            Work
            {isWorkActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#A43F2B] rounded-full" />
            )}
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isAboutActive
                ? "text-[#A43F2B] font-semibold bg-[#F1DDD1]/60"
                : "text-[#242621] hover:text-[#A43F2B] hover:bg-[#F1DDD1]/40"
            }`}
            aria-current={isAboutActive ? "page" : undefined}
          >
            About
            {isAboutActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#A43F2B] rounded-full" />
            )}
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-lg shadow-sm transition-all focus-ring active:scale-[0.99]"
          >
            Discuss Your Project
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/contact"
            className="hidden xs:inline-flex sm:inline-flex px-3 py-1.5 text-xs font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-lg"
          >
            Enquire
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#242621] hover:text-[#A43F2B] hover:bg-[#F1DDD1]/40 rounded-lg focus-ring shrink-0"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DDDCD4] bg-[#F7F4EE] px-5 py-6 space-y-5 animate-in slide-in-from-top-2 duration-150 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Main Links */}
          <div className="space-y-1.5">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isHomeActive && !isProductsActive
                  ? "text-[#A43F2B] bg-[#F1DDD1]/60"
                  : "text-[#242621] hover:bg-[#F1DDD1]/40"
              }`}
              aria-current={isHomeActive && !isProductsActive ? "page" : undefined}
            >
              Home
            </Link>

            {/* Services with sub-items */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#62665E] px-3 mb-1.5">
                Services
              </div>
              <div className="space-y-1 pl-2">
                {services.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-sm font-medium text-[#242621] hover:text-[#A43F2B] hover:bg-[#F1DDD1]/40 rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1 py-1.5 px-3 text-xs font-semibold text-[#A43F2B] hover:underline"
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
                  ? "text-[#A43F2B] bg-[#F1DDD1]/60 font-semibold"
                  : "text-[#242621] hover:bg-[#F1DDD1]/40"
              }`}
              aria-current={isProductsActive ? "page" : undefined}
            >
              <span>Products</span>
              <span className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-[#F1DDD1] text-[#A43F2B] rounded-full">
                Coming soon
              </span>
            </Link>

            {/* Work */}
            <Link
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isWorkActive
                  ? "text-[#A43F2B] bg-[#F1DDD1]/60"
                  : "text-[#242621] hover:bg-[#F1DDD1]/40"
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
                  ? "text-[#A43F2B] bg-[#F1DDD1]/60"
                  : "text-[#242621] hover:bg-[#F1DDD1]/40"
              }`}
              aria-current={isAboutActive ? "page" : undefined}
            >
              About DataBuks
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isContactActive
                  ? "text-[#A43F2B] bg-[#F1DDD1]/60"
                  : "text-[#242621] hover:bg-[#F1DDD1]/40"
              }`}
              aria-current={isContactActive ? "page" : undefined}
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Action Buttons in Mobile Menu */}
          <div className="border-t border-[#DDDCD4] pt-4 space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 px-4 text-sm font-semibold text-white bg-[#A43F2B] hover:bg-[#8C3423] rounded-lg shadow-sm"
            >
              Discuss Your Project
            </Link>
            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-[#242621] bg-[#DDDCD4]/60 hover:bg-[#DDDCD4] rounded-lg"
            >
              <MessageSquare className="w-4 h-4 text-[#A43F2B]" />
              Chat on WhatsApp ({siteConfig.brand.phoneDisplay})
            </a>
            <div className="text-center text-xs text-[#62665E] pt-1">
              {siteConfig.brand.supportedLanguages} • Based in {siteConfig.brand.city}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

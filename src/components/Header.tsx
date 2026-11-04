import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoLight from "@/assets/brand/databuks-logo-light.png";
import logoDark from "@/assets/brand/databuks-logo.png";
import { ChevronDown, Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { useTheme } from "@/context/ThemeContext";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

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
      className={`sticky top-0 z-50 transition-all duration-200 border-b border-[#DADADA] dark:border-[#303030] ${
        isScrolled
          ? "bg-[#FAFAFA]/95 dark:bg-[#090909]/95 backdrop-blur-md shadow-subtle"
          : "bg-[#FAFAFA] dark:bg-[#090909]"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 h-[74px] md:h-[88px] flex items-center justify-between gap-3">
        {/* Brand Logo - Theme-Aware: Dark logo on Light mode, Light logo on Dark mode */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 group py-1"
          aria-label="DataBuks Home"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Light mode logo (Dark mark) */}
          <img
            src={logoDark}
            alt="DataBuks"
            className="w-[140px] sm:w-[155px] md:w-[185px] lg:w-[195px] h-auto object-contain transition-transform duration-150 group-hover:scale-[1.02] dark:hidden"
            width="195"
            height="49"
          />
          {/* Dark mode logo (White mark) */}
          <img
            src={logoLight}
            alt="DataBuks"
            className="w-[140px] sm:w-[155px] md:w-[185px] lg:w-[195px] h-auto object-contain transition-transform duration-150 group-hover:scale-[1.02] hidden dark:block"
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
                ? "text-[#111111] dark:text-[#F5F5F5] font-semibold bg-[#F1F1F1] dark:bg-[#171717]"
                : "text-[#555555] hover:text-[#111111] hover:bg-[#F1F1F1]/80 dark:text-[#B5B5B5] dark:hover:text-[#F5F5F5] dark:hover:bg-[#171717]/80"
            }`}
            aria-current={isHomeActive ? "page" : undefined}
          >
            Home
            {isHomeActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#111111] dark:bg-[#F5F5F5] rounded-full" />
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
                  ? "text-[#111111] dark:text-[#F5F5F5] font-semibold bg-[#F1F1F1] dark:bg-[#171717]"
                  : "text-[#555555] hover:text-[#111111] hover:bg-[#F1F1F1]/80 dark:text-[#B5B5B5] dark:hover:text-[#F5F5F5] dark:hover:bg-[#171717]/80"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
              aria-current={isServicesActive ? "page" : undefined}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180 text-[#111111] dark:text-[#F5F5F5]" : "text-[#555555] dark:text-[#B5B5B5]"
                }`}
              />
            </button>

            {/* Dropdown Panel */}
            {servicesDropdownOpen && (
              <div
                className="absolute top-full left-0 w-80 lg:w-96 bg-[#FFFFFF] dark:bg-[#171717] rounded-xl shadow-dropdown border border-[#DADADA] dark:border-[#303030] py-3 px-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                role="menu"
              >
                <div className="px-3 pb-2 mb-1 border-b border-[#DADADA] dark:border-[#303030] flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5]">
                    Services
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-[#111111] dark:text-[#F5F5F5] hover:underline inline-flex items-center gap-1"
                  >
                    All Services <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="space-y-1">
                  {services.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block p-2.5 rounded-lg hover:bg-[#F1F1F1] dark:hover:bg-[#111111] transition-colors group"
                      role="menuitem"
                    >
                      <div className="text-[14px] font-semibold text-[#111111] dark:text-[#F5F5F5] group-hover:text-[#111111] dark:group-hover:text-white transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#555555] dark:text-[#B5B5B5] mt-0.5 leading-relaxed line-clamp-2">
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
                ? "text-[#111111] dark:text-[#F5F5F5] font-semibold bg-[#F1F1F1] dark:bg-[#171717]"
                : "text-[#555555] hover:text-[#111111] hover:bg-[#F1F1F1]/80 dark:text-[#B5B5B5] dark:hover:text-[#F5F5F5] dark:hover:bg-[#171717]/80"
            }`}
            aria-current={isProductsActive ? "page" : undefined}
          >
            <span>Products</span>
            <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#111111] text-[#FFFFFF] dark:bg-[#F5F5F5] dark:text-[#111111] rounded-full">
              Soon
            </span>
            {isProductsActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#111111] dark:bg-[#F5F5F5] rounded-full" />
            )}
          </Link>

          {/* Work */}
          <Link
            to="/portfolio"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isWorkActive
                ? "text-[#111111] dark:text-[#F5F5F5] font-semibold bg-[#F1F1F1] dark:bg-[#171717]"
                : "text-[#555555] hover:text-[#111111] hover:bg-[#F1F1F1]/80 dark:text-[#B5B5B5] dark:hover:text-[#F5F5F5] dark:hover:bg-[#171717]/80"
            }`}
            aria-current={isWorkActive ? "page" : undefined}
          >
            Work
            {isWorkActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#111111] dark:bg-[#F5F5F5] rounded-full" />
            )}
          </Link>

          {/* About */}
          <Link
            to="/about"
            className={`px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors relative ${
              isAboutActive
                ? "text-[#111111] dark:text-[#F5F5F5] font-semibold bg-[#F1F1F1] dark:bg-[#171717]"
                : "text-[#555555] hover:text-[#111111] hover:bg-[#F1F1F1]/80 dark:text-[#B5B5B5] dark:hover:text-[#F5F5F5] dark:hover:bg-[#171717]/80"
            }`}
            aria-current={isAboutActive ? "page" : undefined}
          >
            About
            {isAboutActive && (
              <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#111111] dark:bg-[#F5F5F5] rounded-full" />
            )}
          </Link>
        </nav>

        {/* Right CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Accessible Sun/Moon Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-[#DADADA] dark:border-[#303030] bg-[#FFFFFF] dark:bg-[#171717] text-[#111111] dark:text-[#F5F5F5] hover:bg-[#F1F1F1] dark:hover:bg-[#222222] transition-colors focus-ring"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[#F5F5F5]" />
            ) : (
              <Moon className="w-4 h-4 text-[#111111]" />
            )}
          </button>

          {/* Primary Action Button */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle transition-all focus-ring active:scale-[0.99]"
          >
            Discuss Your Project
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[#DADADA] dark:border-[#303030] bg-[#FFFFFF] dark:bg-[#171717] text-[#111111] dark:text-[#F5F5F5] hover:bg-[#F1F1F1] dark:hover:bg-[#222222] focus-ring"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-[#F5F5F5]" />
            ) : (
              <Moon className="w-4 h-4 text-[#111111]" />
            )}
          </button>

          <Link
            to="/contact"
            className="inline-flex px-3 py-1.5 text-xs font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-lg"
          >
            Enquire
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111111] dark:text-[#F5F5F5] hover:bg-[#F1F1F1] dark:hover:bg-[#171717] rounded-lg focus-ring shrink-0"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#DADADA] dark:border-[#303030] bg-[#FAFAFA] dark:bg-[#090909] text-[#111111] dark:text-[#F5F5F5] px-5 py-6 space-y-5 animate-in slide-in-from-top-2 duration-150 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          {/* Main Links */}
          <div className="space-y-1.5">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isHomeActive
                  ? "text-[#111111] dark:text-[#F5F5F5] bg-[#F1F1F1] dark:bg-[#171717]"
                  : "text-[#555555] dark:text-[#B5B5B5] hover:bg-[#F1F1F1] dark:hover:bg-[#171717]"
              }`}
              aria-current={isHomeActive ? "page" : undefined}
            >
              Home
            </Link>

            {/* Services with sub-items */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#555555] dark:text-[#B5B5B5] px-3 mb-1.5">
                Services
              </div>
              <div className="space-y-1 pl-2">
                {services.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-3 text-sm font-medium text-[#111111] dark:text-[#F5F5F5] hover:bg-[#F1F1F1] dark:hover:bg-[#171717] rounded-md"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1 py-1.5 px-3 text-xs font-semibold text-[#111111] dark:text-[#F5F5F5] hover:underline"
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
                  ? "text-[#111111] dark:text-[#F5F5F5] bg-[#F1F1F1] dark:bg-[#171717]"
                  : "text-[#555555] dark:text-[#B5B5B5] hover:bg-[#F1F1F1] dark:hover:bg-[#171717]"
              }`}
              aria-current={isProductsActive ? "page" : undefined}
            >
              <span>Products</span>
              <span className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-[#111111] text-[#FFFFFF] dark:bg-[#F5F5F5] dark:text-[#111111] rounded-full">
                Coming soon
              </span>
            </Link>

            {/* Work */}
            <Link
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
                isWorkActive
                  ? "text-[#111111] dark:text-[#F5F5F5] bg-[#F1F1F1] dark:bg-[#171717]"
                  : "text-[#555555] dark:text-[#B5B5B5] hover:bg-[#F1F1F1] dark:hover:bg-[#171717]"
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
                  ? "text-[#111111] dark:text-[#F5F5F5] bg-[#F1F1F1] dark:bg-[#171717]"
                  : "text-[#555555] dark:text-[#B5B5B5] hover:bg-[#F1F1F1] dark:hover:bg-[#171717]"
              }`}
              aria-current={isAboutActive ? "page" : undefined}
            >
              About DataBuks
            </Link>
          </div>

          {/* Drawer CTA */}
          <div className="pt-4 border-t border-[#DADADA] dark:border-[#303030] space-y-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#111111] hover:bg-[#262626] dark:bg-[#F5F5F5] dark:text-[#090909] dark:hover:bg-[#E5E5E5] rounded-xl shadow-subtle"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#111111] dark:text-[#F5F5F5] bg-transparent hover:bg-[#F1F1F1] dark:hover:bg-[#171717] border border-[#DADADA] dark:border-[#303030] rounded-xl"
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
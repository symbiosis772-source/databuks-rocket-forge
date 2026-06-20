import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    "Website Development",
    "App Development",
    "Automation Solutions",
    "API Integrations",
    "AI Solutions",
    "Consultation",
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  const socials = [
    { label: "WhatsApp", href: "https://wa.me/918788606608" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-deep-space border-t border-lead/20 py-16">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center border border-lead/40">
                <span className="text-starlight font-heading font-light text-lg">D</span>
              </div>
              <span className="font-heading font-light text-xl text-starlight">DataBuks</span>
            </div>
            <p className="text-body-sm text-silver leading-relaxed mb-4">
              Professional technology services agency delivering custom websites,
              apps, automations, and AI solutions with fast turnaround and affordable pricing.
            </p>
            <p className="text-body-sm text-lead">Est. 2024</p>
          </div>

          <div>
            <h4 className="text-heading-sm font-light text-starlight mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-body-sm text-silver hover:text-starlight transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-heading-sm font-light text-starlight mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-body-sm text-silver hover:text-starlight transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-heading-sm font-light text-starlight mb-4">Connect</h4>
            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sm text-silver hover:text-starlight transition-colors inline-flex items-center gap-1"
                  >
                    {social.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-body-sm text-silver">Email</p>
              <a
                href="mailto:databuksllc@gmail.com"
                className="text-starlight hover:text-mercury-blue transition-colors"
              >
                databuksllc@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-lead/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-lead">
            © {new Date().getFullYear()} DataBuks Technology Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-body-sm text-lead hover:text-starlight transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-body-sm text-lead hover:text-starlight transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

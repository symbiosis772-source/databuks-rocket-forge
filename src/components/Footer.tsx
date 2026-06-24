import { Link } from "react-router-dom";
import logo from "@/assets/brand/databuks-logo.png";

const Footer = () => {
  const links = [
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-obsidian text-frost pt-20 pb-10 border-t border-[#2e2e2e]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          <div>
            <Link to="/" className="inline-flex items-center mb-5">
              <img src={logo} alt="DataBuks" className="h-12 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
            </Link>
            <p className="text-[14px] leading-[1.6] text-frost max-w-xs">
              A technology studio shipping custom products in weeks, not months.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-phosphor hover:text-reactor transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:databuksllc@gmail.com" className="text-phosphor hover:text-reactor transition-colors">databuksllc@gmail.com</a></li>
              <li><a href="https://wa.me/918788606608" target="_blank" rel="noopener noreferrer" className="text-phosphor hover:text-reactor transition-colors">+91 87886 06608</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-fern pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-lichen">© {new Date().getFullYear()} DataBuks. All rights reserved.</p>
          <p className="text-xs text-lichen">Made with care in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

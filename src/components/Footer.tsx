import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-navy-deep text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-chartreuse flex items-center justify-center">
                <span className="font-display text-sm text-navy">D</span>
              </div>
              <span className="font-display text-lg text-white">DataBuks</span>
            </div>
            <p className="text-sm text-white/60 max-w-xs">
              A technology studio shipping custom products in weeks, not months.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-white/40 mb-4">Navigate</p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-sm text-white/80 hover:text-chartreuse transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-white/40 mb-4">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:databuksllc@gmail.com" className="hover:text-chartreuse transition-colors">databuksllc@gmail.com</a></li>
              <li><a href="https://wa.me/918788606608" target="_blank" rel="noopener noreferrer" className="hover:text-chartreuse transition-colors">+91 87886 06608</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} DataBuks. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Made with care in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

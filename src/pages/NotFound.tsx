import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Home, Compass, Phone } from "lucide-react";

export const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Non-existent route accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found — DataBuks</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <main className="min-h-[70vh] flex items-center justify-center bg-brand-ivory py-16 px-5">
        <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-brand-border shadow-sm text-center space-y-4">
          <span className="text-4xl font-extrabold font-mono text-brand-forest block">
            404
          </span>
          <h1 className="text-2xl font-bold text-brand-dark font-sans tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-brand-muted leading-relaxed">
            The page you requested at <code className="px-1.5 py-0.5 bg-brand-sage/60 rounded text-xs font-mono text-brand-dark">{location.pathname}</code> does not exist or has been relocated.
          </p>

          <div className="pt-4 border-t border-brand-border space-y-2">
            <Link
              to="/"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-brand-forest hover:bg-brand-forestDark rounded-lg shadow-sm transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Homepage</span>
            </Link>
            <div className="flex gap-2">
              <Link
                to="/services"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-dark bg-brand-sage/60 hover:bg-brand-sage rounded-lg transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Services</span>
              </Link>
              <Link
                to="/contact"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-dark bg-brand-sage/60 hover:bg-brand-sage rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;

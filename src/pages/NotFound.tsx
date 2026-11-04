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

      <main className="min-h-[70vh] flex items-center justify-center bg-[#080D16] py-16 px-5 text-[#F4F7FC]">
        <div className="max-w-md w-full bg-[#151F30] rounded-2xl p-8 border border-[#2A3850] shadow-card text-center space-y-4">
          <span className="text-4xl font-extrabold font-mono text-[#67E8F9] block">
            404
          </span>
          <h1 className="text-2xl font-bold text-[#F4F7FC] font-sans tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-[#B5C1D3] leading-relaxed">
            The page you requested at <code className="px-1.5 py-0.5 bg-[#101827] rounded text-xs font-mono text-[#67E8F9] border border-[#2A3850]">{location.pathname}</code> does not exist or has been relocated.
          </p>

          <div className="pt-4 border-t border-[#2A3850] space-y-2">
            <Link
              to="/"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg shadow-sm transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Homepage</span>
            </Link>
            <div className="flex gap-2">
              <Link
                to="/services"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#F4F7FC] bg-[#101827] hover:bg-[#1E293B] border border-[#2A3850] rounded-lg transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#67E8F9]" />
                <span>Services</span>
              </Link>
              <Link
                to="/contact"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#F4F7FC] bg-[#101827] hover:bg-[#1E293B] border border-[#2A3850] rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#67E8F9]" />
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
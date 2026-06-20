import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-deep-space">
      <div className="text-center px-4">
        <h1 className="mb-4 text-heading-lg md:text-display font-light text-starlight">404</h1>
        <p className="mb-8 text-xl text-silver">Oops! Page not found</p>
        <Button asChild variant="default">
          <Link to="/home">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

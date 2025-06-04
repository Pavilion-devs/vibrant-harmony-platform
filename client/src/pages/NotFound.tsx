
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-vara-light p-6">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-vara-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-vara-primary mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="vara-btn-primary">
            Return to Homepage
          </Link>
          <Link to="/contact" className="vara-btn-secondary">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

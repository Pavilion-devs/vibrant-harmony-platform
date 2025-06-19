import { useEffect, useState } from "react";

const UnderConstruction = () => {
  const [logoClicks, setLogoClicks] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reset clicks after 5 seconds of inactivity
  useEffect(() => {
    if (logoClicks > 0) {
      const timer = setTimeout(() => setLogoClicks(0), 5000);
      return () => clearTimeout(timer);
    }
  }, [logoClicks]);

  const handleLogoClick = () => {
    setLogoClicks(prev => prev + 1);
    if (logoClicks + 1 >= 5) {
      window.location.href = "/dev-access";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-vara-light to-white p-6">
      <div className="text-center max-w-2xl">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="Vara Global Trading" 
            className="h-20 md:h-24 w-auto mx-auto cursor-pointer transition-transform hover:scale-105"
            onClick={handleLogoClick}
            title={logoClicks > 0 ? `${5 - logoClicks} more clicks...` : ""}
          />
          {logoClicks > 2 && (
            <p className="text-xs text-gray-400 mt-2">
              {5 - logoClicks} more clicks for developer access...
            </p>
          )}
        </div>
        
        {/* Main Content */}
        <h1 className="text-4xl md:text-6xl font-bold text-vara-primary mb-6">
          Under Construction
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          We're working hard to bring you something amazing.
        </p>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-vara-primary mb-4">
            Vara Global Trading
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Africa's premier diversified trading company, enhancing lives through quality products and services across foods, electronics, and real estate sectors.
          </p>
        </div>
        
        {/* Contact Information */}
        <div className="space-y-4">
          <p className="text-gray-600">
            For inquiries, please contact us:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-vara-primary font-medium">
            <a 
              href="mailto:sales@varatrading.com" 
              className="hover:underline"
            >
              📧 sales@varatrading.com
            </a>
            <a 
              href="tel:+2349157364488" 
              className="hover:underline"
            >
              📞 +234 (0) 915 736 4488
            </a>
          </div>
        </div>
        
        {/* Coming Soon Animation */}
        <div className="mt-12">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-vara-secondary rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-vara-secondary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-3 h-3 bg-vara-secondary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
          <p className="text-gray-500 mt-4">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction; 
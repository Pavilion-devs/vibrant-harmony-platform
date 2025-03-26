
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-vara-primary/85 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Ready to Partner with Vara Group?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join us in our mission to deliver quality products and services that improve lives across Africa. Let's create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products" className="vara-btn-primary bg-white text-vara-primary hover:bg-gray-100">
              Explore Our Products
            </Link>
            <Link to="/contact" className="vara-btn-secondary text-white border-white hover:bg-white/10">
              Contact Us <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

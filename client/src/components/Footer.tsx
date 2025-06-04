
import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vara-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">VARA GLOBAL TRADING</h3>
            <p className="text-white/80 max-w-xs">
              Empowering lives through quality and innovation across Foods, Electronics, and Real Estate.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Leadership
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> CSR Initiatives
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/industries/foods" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Vara Foods
                </Link>
              </li>
              <li>
                <Link to="/industries/electronics" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Vara Electronics
                </Link>
              </li>
              <li>
                <Link to="/industries/real-estate" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Vara Real Estate
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Products & Services
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Investor Relations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-vara-secondary flex-shrink-0" />
                <span className="text-white/80">
                  10A Ajanaku Street, off Salvation Road, Awuse Estate, Opebi, Lagos, Nigeria
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-vara-secondary flex-shrink-0" />
                <span className="text-white/80">+234 7032-378-235</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-vara-secondary flex-shrink-0" />
                <span className="text-white/80">sales@varatrading.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} Vara Global Trading. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Use
              </Link>
              <Link to="/cookies" className="text-white/60 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

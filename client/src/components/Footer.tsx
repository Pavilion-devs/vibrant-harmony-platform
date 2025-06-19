
import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-vara-primary via-vara-primary to-vara-dark text-white pt-16 sm:pt-20 lg:pt-24 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Vara Global Trading" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/90 max-w-md text-lg leading-relaxed">
              Empowering lives through quality and innovation across Foods, Electronics, and Real Estate throughout Africa.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/share/19U2HSfXHD/?mibextid=wwXIfr" className="group bg-white/10 hover:bg-vara-secondary p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5 text-white group-hover:text-white" />
              </a>
              <a href="#" className="group bg-white/10 hover:bg-vara-secondary p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5 text-white group-hover:text-white" />
              </a>
              <a href="#" className="group bg-white/10 hover:bg-vara-secondary p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5 text-white group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com/vara_global?igsh=MWNtZDRoMmFuMWlxeA==" className="group bg-white/10 hover:bg-vara-secondary p-3 rounded-full transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5 text-white group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Leadership
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> CSR Initiatives
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/industries/foods" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Vara Foods
                </Link>
              </li>
              <li>
                <Link href="/industries/lab-supplies" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Vara Lab Supplies
                </Link>
              </li>
              <li>
                <Link href="/industries/real-estate" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Vara Real Estate
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Products & Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white flex items-center transition-colors">
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
                <span className="text-white/80">+234 916 000 2934</span>
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
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Use
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-white text-sm transition-colors">
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

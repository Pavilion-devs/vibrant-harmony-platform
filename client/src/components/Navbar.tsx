import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        "bg-white shadow-sm border-b border-gray-200/20 md:bg-transparent md:border-white/10 md:shadow-none",
        scrolled && "md:bg-white/95 md:backdrop-blur-md md:shadow-lg md:border-gray-200/20",
        "py-3 sm:py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group" onClick={closeMenu}>
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Vara Global Trading"
                className={cn(
                  "h-12 sm:h-14 lg:h-16 w-auto transition-all duration-300 group-hover:scale-105",
                  scrolled ? "brightness-100" : "md:brightness-0 md:invert"
                )}
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "nav-link",
                scrolled ? "text-foreground/80" : "text-white",
                location === "/" && "font-bold"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "nav-link",
                scrolled ? "text-foreground/80" : "text-white",
                location === "/about" && "font-bold"
              )}
            >
              About Us
            </Link>
            <div className="relative group">
              <button
                className={cn(
                  "nav-link flex items-center",
                  scrolled ? "text-foreground/80" : "text-white"
                )}
                onClick={() => setIndustryDropdownOpen(!industryDropdownOpen)}
                onMouseEnter={() => setIndustryDropdownOpen(true)}
                onMouseLeave={() => setIndustryDropdownOpen(false)}
              >
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={cn(
                  "absolute left-0 mt-1 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 transform origin-top-left",
                  industryDropdownOpen
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 pointer-events-none"
                )}
                onMouseEnter={() => setIndustryDropdownOpen(true)}
                onMouseLeave={() => setIndustryDropdownOpen(false)}
              >
                <div className="py-1">
                  <Link
                    href="/industries/foods"
                    className="block px-4 py-2 text-sm text-vara-primary hover:bg-vara-accent"
                  >
                    Vara Foods
                  </Link>
                  {/* <Link
                    href="/industries/electronics"
                    className="block px-4 py-2 text-sm text-vara-primary hover:bg-vara-accent"
                  >
                    Vara Electronics
                  </Link> */}
                  <Link
                    href="/industries/lab-supplies"
                    className="block px-4 py-2 text-sm text-vara-primary hover:bg-vara-accent"
                  >
                    Vara Lab Supplies
                  </Link>
                  <Link
                    href="/industries/real-estate"
                    className="block px-4 py-2 text-sm text-vara-primary hover:bg-vara-accent"
                  >
                    Vara Real Estate
                  </Link>
                  <Link
                    href="/industries/oil-gas"
                    className="block px-4 py-2 text-sm text-vara-primary hover:bg-vara-accent"
                  >
                    Vara Oil & Gas
                  </Link>
                  <Link
                    href="/industries"
                    className="block px-4 py-2 text-sm text-vara-secondary hover:bg-vara-accent"
                  >
                    View All Industries
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/products"
              className={cn(
                "nav-link",
                scrolled ? "text-foreground/80" : "text-white",
                location === "/products" && "font-bold"
              )}
            >
              Products
            </Link>
            {/* <Link
              href="/investors"
              className={cn(
                "nav-link",
                scrolled ? "text-foreground/80" : "text-white",
                location === "/investors" && "font-bold"
              )}
            >
              Investors
            </Link> */}
            <Link
              href="/careers"
              className={cn(
                "nav-link",
                scrolled ? "text-foreground/80" : "text-white",
                location === "/careers" && "font-bold"
              )}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className={cn(
                "nav-link",
                scrolled ? "text-foreground/80" : "text-white",
                location === "/contact" && "font-bold"
              )}
            >
              Contact
            </Link>
            {/* <Link
              href="/blog"
              className={cn(
                "nav-link",
                scrolled ? "text-foreground/80" : "text-white",
                location === "/blog" && "font-bold"
              )}
            >
              Blog
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden focus:outline-none text-vara-primary"
            )}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 top-0 bg-white z-40 transition-transform duration-500 ease-out md:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <img src="/logo.png" alt="Vara Global Trading" className="h-10 w-auto" />
            </Link>
            <button
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close Menu"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex flex-col px-4 py-6 space-y-1">
            <Link 
              href="/" 
              className={cn(
                "flex items-center py-4 px-4 rounded-xl text-base font-medium transition-all duration-300",
                location === "/" ? "bg-vara-accent text-vara-primary" : "text-gray-700 hover:bg-gray-50"
              )} 
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={cn(
                "flex items-center py-4 px-4 rounded-xl text-base font-medium transition-all duration-300",
                location === "/about" ? "bg-vara-accent text-vara-primary" : "text-gray-700 hover:bg-gray-50"
              )} 
              onClick={closeMenu}
            >
              About Us
            </Link>
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full py-4 px-4 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300"
                onClick={() => setIndustryDropdownOpen(!industryDropdownOpen)}
              >
                Industries{" "}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    industryDropdownOpen ? "rotate-180" : ""
                  )}
                />
              </button>
              <div
                className={cn(
                  "mt-2 pl-4 space-y-2",
                  industryDropdownOpen ? "block" : "hidden"
                )}
              >
                <Link
                  href="/industries/foods"
                  className="block py-3 px-4 text-sm text-gray-600 hover:text-vara-primary transition-colors"
                  onClick={closeMenu}
                >
                  Vara Foods
                </Link>
                {/* <Link
                  href="/industries/electronics"
                  className="block py-3 px-4 text-sm text-gray-600 hover:text-vara-primary transition-colors"
                  onClick={closeMenu}
                >
                  Vara Electronics
                </Link> */}
                <Link
                  href="/industries/lab-supplies"
                  className="block py-3 px-4 text-sm text-gray-600 hover:text-vara-primary transition-colors"
                  onClick={closeMenu}
                >
                  Vara Lab Supplies
                </Link>
                
                <Link
                  href="/industries/real-estate"
                  className="block py-3 px-4 text-sm text-gray-600 hover:text-vara-primary transition-colors"
                  onClick={closeMenu}
                >
                  Vara Real Estate
                </Link>
                <Link
                    href="/industries/oil-gas"
                    className="block px-4 py-2 text-sm text-vara-primary hover:bg-vara-accent"
                  >
                    Vara Oil & Gas
                  </Link>
                <Link
                  href="/industries"
                  className="block py-3 px-4 text-sm text-vara-secondary hover:text-vara-primary transition-colors"
                  onClick={closeMenu}
                >
                  View All Industries
                </Link>
              </div>
            </div>
            <Link 
              href="/products" 
              className={cn(
                "flex items-center py-4 px-4 rounded-xl text-base font-medium transition-all duration-300",
                location === "/products" ? "bg-vara-accent text-vara-primary" : "text-gray-700 hover:bg-gray-50"
              )} 
              onClick={closeMenu}
            >
              Products
            </Link>
            <Link 
              href="/careers" 
              className={cn(
                "flex items-center py-4 px-4 rounded-xl text-base font-medium transition-all duration-300",
                location === "/careers" ? "bg-vara-accent text-vara-primary" : "text-gray-700 hover:bg-gray-50"
              )} 
              onClick={closeMenu}
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className={cn(
                "flex items-center py-4 px-4 rounded-xl text-base font-medium transition-all duration-300",
                location === "/contact" ? "bg-vara-accent text-vara-primary" : "text-gray-700 hover:bg-gray-50"
              )} 
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Link
                href="/contact"
                className="vara-btn-primary block text-center"
                onClick={closeMenu}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
        "bg-white md:bg-transparent",
        scrolled && "md:bg-white/90 md:backdrop-blur-lg md:shadow-sm",
        "py-4" // Consistent padding
      )}
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <span
              className={cn(
                "text-2xl font-bold transition-colors",
                "text-vara-primary md:text-white",
                scrolled && "md:text-vara-primary"
              )}
            >
              <img src="/logo.png" className="w-full h-[64px]"/>
            </span>
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
                  <Link
                    href="/industries/electronics"
                    className="block px-4 py-2 text-sm text-vara-primary hover:bg-vara-accent"
                  >
                    Vara Electronics
                  </Link>
                  <Link
                    href="/industries/real-estate"
                    className="block px-4 py-2 text-sm text-vara-primary hover:bg-vara-accent"
                  >
                    Vara Real Estate
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
            "fixed inset-0 top-[60px] bg-white z-50 transition-transform duration-300 ease-in-out md:hidden overflow-y-auto max-h-[calc(100vh-60px)]",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-4 p-4 text-lg">
            <Link href="/" className={cn("py-2", location === "/" && "font-bold")} onClick={closeMenu}>
              Home
            </Link>
            <Link href="/about" className={cn("py-2", location === "/about" && "font-bold")} onClick={closeMenu}>
              About Us
            </Link>
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full"
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
                  className="block py-1"
                  onClick={closeMenu}
                >
                  Vara Foods
                </Link>
                <Link
                  href="/industries/electronics"
                  className="block py-1"
                  onClick={closeMenu}
                >
                  Vara Electronics
                </Link>
                <Link
                  href="/industries/real-estate"
                  className="block py-1"
                  onClick={closeMenu}
                >
                  Vara Real Estate
                </Link>
                <Link
                  href="/industries"
                  className="block py-1 text-vara-secondary"
                  onClick={closeMenu}
                >
                  View All Industries
                </Link>
              </div>
            </div>
            <Link href="/products" className={cn("py-2", location === "/products" && "font-bold")} onClick={closeMenu}>
              Products
            </Link>
            <Link href="/investors" className={cn("py-2", location === "/investors" && "font-bold")} onClick={closeMenu}>
              Investors
            </Link>
            <Link href="/careers" className={cn("py-2", location === "/careers" && "font-bold")} onClick={closeMenu}>
              Careers
            </Link>
            <Link href="/contact" className={cn("py-2", location === "/contact" && "font-bold")} onClick={closeMenu}>
              Contact
            </Link>
            <Link href="/blog" className={cn("py-2", location === "/blog" && "font-bold")} onClick={closeMenu}>
              Blog
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

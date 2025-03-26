
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [industryDropdownOpen, setIndustryDropdownOpen] = useState(false);

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

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl font-bold text-vara-primary">VARA GROUP</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
            <div className="relative group">
              <button 
                className="nav-link flex items-center"
                onClick={() => setIndustryDropdownOpen(!industryDropdownOpen)}
                onMouseEnter={() => setIndustryDropdownOpen(true)}
                onMouseLeave={() => setIndustryDropdownOpen(false)}
              >
                Industries <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={cn(
                  "absolute left-0 mt-1 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 transform origin-top-left",
                  industryDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
                )}
                onMouseEnter={() => setIndustryDropdownOpen(true)}
                onMouseLeave={() => setIndustryDropdownOpen(false)}
              >
                <div className="py-1">
                  <Link to="/industries/foods" className="block px-4 py-2 text-sm text-vara-primary hover:bg-vara-accent">
                    Vara Foods
                  </Link>
                  <Link to="/industries/electronics" className="block px-4 py-2 text-sm text-vara-primary hover:bg-vara-accent">
                    Vara Electronics
                  </Link>
                  <Link to="/industries/real-estate" className="block px-4 py-2 text-sm text-vara-primary hover:bg-vara-accent">
                    Vara Real Estate
                  </Link>
                  <Link to="/industries" className="block px-4 py-2 text-sm text-vara-secondary hover:bg-vara-accent">
                    View All Industries
                  </Link>
                </div>
              </div>
            </div>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
            <NavLink to="/investors" className="nav-link">
              Investors
            </NavLink>
            <NavLink to="/careers" className="nav-link">
              Careers
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-vara-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 top-[60px] bg-white z-50 transition-transform duration-300 ease-in-out md:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-4 p-6 text-lg">
            <NavLink to="/" className="py-2" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className="py-2" onClick={closeMenu}>
              About Us
            </NavLink>
            <div className="py-2">
              <button 
                className="flex items-center justify-between w-full"
                onClick={() => setIndustryDropdownOpen(!industryDropdownOpen)}
              >
                Industries <ChevronDown className={cn("h-4 w-4 transition-transform", industryDropdownOpen ? "rotate-180" : "")} />
              </button>
              <div className={cn("mt-2 pl-4 space-y-2", industryDropdownOpen ? "block" : "hidden")}>
                <Link to="/industries/foods" className="block py-1" onClick={closeMenu}>
                  Vara Foods
                </Link>
                <Link to="/industries/electronics" className="block py-1" onClick={closeMenu}>
                  Vara Electronics
                </Link>
                <Link to="/industries/real-estate" className="block py-1" onClick={closeMenu}>
                  Vara Real Estate
                </Link>
                <Link to="/industries" className="block py-1 text-vara-secondary" onClick={closeMenu}>
                  View All Industries
                </Link>
              </div>
            </div>
            <NavLink to="/products" className="py-2" onClick={closeMenu}>
              Products
            </NavLink>
            <NavLink to="/investors" className="py-2" onClick={closeMenu}>
              Investors
            </NavLink>
            <NavLink to="/careers" className="py-2" onClick={closeMenu}>
              Careers
            </NavLink>
            <NavLink to="/contact" className="py-2" onClick={closeMenu}>
              Contact
            </NavLink>
            <NavLink to="/blog" className="py-2" onClick={closeMenu}>
              Blog
            </NavLink>
            <div className="pt-4">
              <Link to="/contact" className="vara-btn-primary block text-center" onClick={closeMenu}>
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

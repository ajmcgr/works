
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Customers", href: "/customers" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // For homepage sections, always scroll to the section
      if (location.pathname !== '/') {
        // If not on homepage, navigate to homepage first
        window.location.href = `/${href}`;
      } else {
        // If on homepage, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href.startsWith('http')) {
      window.open(href, '_blank');
    }
  };

  return (
    <header className={`w-full z-50 fixed top-0 flex justify-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="mt-4 bg-white/40 backdrop-blur-sm rounded-[.75rem] px-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-8 h-14">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/works-black-logo.png" 
              alt="Works" 
              className="h-5"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">


            
            {navigation.map((item) => (
              item.href.startsWith('http') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium transition-colors hover:text-gray-600 text-gray-900 cursor-pointer tracking-normal"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if (item.href.includes('#')) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className="text-sm font-medium transition-colors hover:text-gray-600 text-gray-900 tracking-normal"
                >
                  {item.name}
                </Link>
              )
            ))}
            
            <Link
              to="/contact"
              className="text-sm font-medium transition-colors hover:text-gray-600 text-gray-900 tracking-normal"
            >
              Contact
            </Link>
            
            <a
              href="https://cal.com/works"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium bg-cta-blue text-white px-4 py-2 rounded-[.75rem] hover:bg-cta-blue/90 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden min-w-[280px]">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/works-black-logo.png" 
                alt="Works" 
                className="h-5"
              />
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-900 hover:text-gray-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="absolute top-14 left-0 right-0 bg-white/40 backdrop-blur-sm shadow-lg rounded-[.75rem] z-50">
              <div className="px-6 py-4 space-y-4">
                {/* Products dropdown */}



                {navigation.map((item) => (
                  item.href.startsWith('http') ? (
                    <button
                      key={item.name}
                      onClick={() => {
                        handleNavClick(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block font-medium transition-colors hover:text-gray-600 text-gray-900 text-sm cursor-pointer text-left tracking-normal"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={(e) => {
                        if (item.href.includes('#')) {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      className="block font-medium transition-colors hover:text-gray-600 text-gray-900 text-sm tracking-normal"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-medium transition-colors hover:text-gray-600 text-gray-900 text-sm tracking-normal"
                >
                  Contact
                </Link>
                
                <a
                  href="https://cal.com/works"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block font-medium bg-cta-blue text-white px-4 py-2 rounded-[.75rem] hover:bg-cta-blue/90 transition-colors text-sm"
                >
                  Book a Call
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
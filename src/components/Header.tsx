
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

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
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/e130fbc2-ad47-45b2-af25-7a0c40ea095f.png" 
              alt="Works" 
              className="h-5"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                  isActive(item.href) ? "text-black" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Hamburger menu button - mobile only */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

         {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 bg-white">
            <div className="py-6 space-y-4 text-center">
              <Link
                to="/work"
                className={`block text-lg font-medium transition-colors hover:text-gray-600 ${
                  isActive("/work") ? "text-black" : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              
              <Link
                to="/services"
                className={`block text-lg font-medium transition-colors hover:text-gray-600 ${
                  isActive("/services") ? "text-black" : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              
              {/* Products Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center justify-center w-full text-lg font-medium text-gray-700 hover:text-gray-600 transition-colors"
                >
                  Products
                  {isProductsOpen ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
                
                {isProductsOpen && (
                  <div className="space-y-2 text-center">
                    <button
                      onClick={() => handleNavClick('https://trymedia.ai')}
                      className="w-full text-base font-medium text-gray-600 hover:text-gray-800 transition-colors text-center"
                    >
                      Media AI
                    </button>
                    <button
                      onClick={() => handleNavClick('https://trywrite.ai')}
                      className="w-full text-base font-medium text-gray-600 hover:text-gray-800 transition-colors text-center"
                    >
                      Write AI
                    </button>
                  </div>
                )}
              </div>
              
              <Link
                to="/about"
                className={`block text-lg font-medium transition-colors hover:text-gray-600 ${
                  isActive("/about") ? "text-black" : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className={`block text-lg font-medium transition-colors hover:text-gray-600 ${
                  isActive("/contact") ? "text-black" : "text-gray-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

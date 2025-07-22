
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const location = useLocation();
  const isHomepage = location.pathname === '/';

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
    <header className={`fixed top-0 w-full z-50 ${isHomepage ? 'bg-transparent' : 'bg-white border-b border-gray-200'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/e130fbc2-ad47-45b2-af25-7a0c40ea095f.png" 
              alt="Works" 
              className={`h-6 ${isHomepage ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-end space-x-8 flex-1">
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm tracking-tight font-medium transition-colors ${
                  isHomepage 
                    ? `hover:text-white/80 ${isActive(item.href) ? "text-white" : "text-white/90"}`
                    : `hover:text-gray-600 ${isActive(item.href) ? "text-gray-900" : "text-gray-700"}`
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            
            {navigation.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm tracking-tight font-medium transition-colors ${
                  isHomepage 
                    ? `hover:text-white/80 ${isActive(item.href) ? "text-white" : "text-white/90"}`
                    : `hover:text-gray-600 ${isActive(item.href) ? "text-gray-900" : "text-gray-700"}`
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
              className={`p-2 ${isHomepage ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

         {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`border-t ${isHomepage ? 'border-white/20 bg-black/40 backdrop-blur-sm' : 'border-gray-200 bg-white'}`}>
            <div className="py-6 space-y-4 text-center">
              <Link
                to="/work"
                className={`block text-lg font-medium transition-colors ${
                  isHomepage 
                    ? `hover:text-white/80 ${isActive("/work") ? "text-white" : "text-white/90"}`
                    : `hover:text-gray-600 ${isActive("/work") ? "text-gray-900" : "text-gray-700"}`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              
              <Link
                to="/services"
                className={`block text-lg font-medium transition-colors ${
                  isHomepage 
                    ? `hover:text-white/80 ${isActive("/services") ? "text-white" : "text-white/90"}`
                    : `hover:text-gray-600 ${isActive("/services") ? "text-gray-900" : "text-gray-700"}`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              
              
              <Link
                to="/about"
                className={`block text-lg font-medium transition-colors ${
                  isHomepage 
                    ? `hover:text-white/80 ${isActive("/about") ? "text-white" : "text-white/90"}`
                    : `hover:text-gray-600 ${isActive("/about") ? "text-gray-900" : "text-gray-700"}`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className={`block text-lg font-medium transition-colors ${
                  isHomepage 
                    ? `hover:text-white/80 ${isActive("/contact") ? "text-white" : "text-white/90"}`
                    : `hover:text-gray-600 ${isActive("/contact") ? "text-gray-900" : "text-gray-700"}`
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

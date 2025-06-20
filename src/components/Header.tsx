
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "/services" },
    { name: "News", href: "https://blog.works.xyz/" },
    { name: "Contact", href: "#contact" },
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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/e130fbc2-ad47-45b2-af25-7a0c40ea095f.png" 
              alt="Works" 
              className="h-5"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-12">
              {navigation.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-sm font-normal transition-colors hover:text-gray-600 ${
                      isActive(item.href) ? "text-black" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : item.href.startsWith('http') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm font-normal transition-colors hover:text-gray-600 text-gray-700"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-normal transition-colors hover:text-gray-600 ${
                      isActive(item.href) ? "text-black" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </nav>

          {/* Mobile menu button */}
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
          <div className="md:hidden border-t border-gray-100">
            <div className="py-6 space-y-4">
              {navigation.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`block text-base font-normal transition-colors hover:text-gray-600 ${
                      isActive(item.href) ? "text-black" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : item.href.startsWith('http') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block text-base font-normal transition-colors hover:text-gray-600 text-gray-700"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-base font-normal transition-colors hover:text-gray-600 ${
                      isActive(item.href) ? "text-black" : "text-gray-700"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

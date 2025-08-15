
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const location = useLocation();

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Customers", href: "/customers" },
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
    <header className={`w-full z-50 ${
      location.pathname === '/startups' ? '' : 'border-b border-gray-100'
    } ${
      location.pathname === '/' 
        ? 'bg-gradient-to-b from-background via-background-stone to-background' 
        : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/e130fbc2-ad47-45b2-af25-7a0c40ea095f.png" 
              alt="Works" 
              className="h-6"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
            <a
              href="https://trymedia.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
            >
              Media AI
            </a>
            <a
              href="https://www.trywrite.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
            >
              Write AI
            </a>
            
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => {
                  if (item.href.includes('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  isActive(item.href) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact CTA Button - desktop only */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
              <Link to="/contact">
                Contact us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Hamburger menu button - mobile only */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-cool-gray hover:bg-warm-gray/50"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

             {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="bg-white/95 backdrop-blur-sm md:hidden" style={{ borderRadius: '12px' }}>
            <div className="py-6 space-y-4 text-center">
              <a
                href="https://trymedia.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-medium transition-colors hover:text-charcoal text-cool-gray"
                onClick={() => setIsMenuOpen(false)}
              >
                Media AI
              </a>
              <a
                href="https://www.trywrite.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg font-medium transition-colors hover:text-charcoal text-cool-gray"
                onClick={() => setIsMenuOpen(false)}
              >
                Write AI
              </a>
              
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block text-lg font-medium transition-colors hover:text-charcoal ${
                    isActive(item.href) ? "text-charcoal" : "text-cool-gray"
                  }`}
                  onClick={(e) => {
                    if (item.href.includes('#')) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                to="/contact"
                className="block text-lg font-medium transition-colors hover:text-charcoal text-cool-gray"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <header className="w-full z-50 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/e130fbc2-ad47-45b2-af25-7a0c40ea095f.png" 
              alt="Works" 
              className="h-6"
            />
          </Link>

          {/* Spacer for centered logo */}
          <div className="flex-1"></div>

          {/* Right side navigation and contact */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Products dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium transition-colors hover:text-foreground text-muted-foreground flex items-center space-x-1">
                <span>Products</span>
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem onClick={() => handleNavClick('https://trymedia.ai/')}>
                  Media AI
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavClick('https://www.trywrite.ai/')}>
                  Write AI
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavClick('https://www.trycontent.ai/')}>
                  Content AI
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
            
            <Link
              to="/contact"
              className="text-sm font-medium transition-colors hover:text-foreground text-muted-foreground"
            >
              Contact us
            </Link>
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
              {/* Products section for mobile */}
              <div className="space-y-2">
                <div className="text-lg font-medium text-cool-gray">Products</div>
                <div className="space-y-2">
                  <button
                    onClick={() => handleNavClick('https://trymedia.ai/')}
                    className="block text-base font-medium transition-colors hover:text-charcoal text-cool-gray mx-auto"
                  >
                    Media AI
                  </button>
                  <button
                    onClick={() => handleNavClick('https://www.trywrite.ai/')}
                    className="block text-base font-medium transition-colors hover:text-charcoal text-cool-gray mx-auto"
                  >
                    Write AI
                  </button>
                  <button
                    onClick={() => handleNavClick('https://www.trycontent.ai/')}
                    className="block text-base font-medium transition-colors hover:text-charcoal text-cool-gray mx-auto"
                  >
                    Content AI
                  </button>
                </div>
              </div>
              
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

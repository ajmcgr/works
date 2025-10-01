
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
      <div className="mt-4 bg-white/40 backdrop-blur-sm rounded-full px-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-8 h-14">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/works-black-logo.png" 
              alt="Works" 
              className="h-6"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {/* Products dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger 
                className="text-sm font-medium transition-colors hover:text-gray-600 text-gray-900 flex items-center space-x-1 tracking-normal"
              >
                <span>Products</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="bg-white border border-gray-200 shadow-lg rounded-lg p-2 w-80 z-[60]"
              >
                <DropdownMenuItem 
                  onClick={() => handleNavClick('https://trymedia.ai/')}
                  className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-100 cursor-pointer focus:bg-gray-100"
                >
                  <img 
                    src="/lovable-uploads/4d4628f9-f999-41bf-a8c3-e3b7bca7eb0b.png" 
                    alt="Media AI" 
                    className="w-5 h-5 mt-0.5 flex-shrink-0 rounded"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm text-gray-900">Media AI</span>
                    <span className="text-xs text-gray-500 mt-0.5">Find any journalist or creator email</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavClick('https://www.trywrite.ai/')}
                  className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-100 cursor-pointer focus:bg-gray-100"
                >
                  <img 
                    src="/lovable-uploads/2f01faa2-9738-4566-8711-ffc76c8ea440.png" 
                    alt="Write AI" 
                    className="w-5 h-5 mt-0.5 flex-shrink-0 rounded"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm text-gray-900">Write AI</span>
                    <span className="text-xs text-gray-500 mt-0.5">Your press release writing assistant</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavClick('https://www.trycontent.ai/')}
                  className="flex items-start space-x-3 p-3 rounded-md hover:bg-gray-100 cursor-pointer focus:bg-gray-100"
                >
                  <img 
                    src="/lovable-uploads/0470ccaf-cf52-42bb-9852-40cdea28c5d2.png" 
                    alt="Content AI" 
                    className="w-5 h-5 mt-0.5 flex-shrink-0 rounded"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm text-gray-900">Content AI</span>
                    <span className="text-xs text-gray-500 mt-0.5">Your blog content writing assistant</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
              Contact us
            </Link>
            
            <button
              onClick={() => handleNavClick('https://creators200.com/')}
              className="text-sm font-medium transition-colors hover:text-gray-600 text-gray-900 cursor-pointer tracking-normal"
            >
              Creators 200 ↗
            </button>
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
                className="h-6"
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
            <div className="absolute top-14 left-0 right-0 bg-white/40 backdrop-blur-sm shadow-lg z-50">
              <div className="px-6 py-4 space-y-4">
                {/* Products dropdown */}
                <div className="relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger 
                      className="font-medium transition-colors hover:text-gray-600 text-gray-900 flex items-center space-x-1 text-sm tracking-normal"
                    >
                      <span>Products</span>
                      <ChevronDown className="h-3.5 w-3.5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="bg-white border border-gray-200 shadow-lg rounded-lg p-1 w-80 z-[60]"
                    >
                      <DropdownMenuItem 
                        onClick={() => {
                          handleNavClick('https://trymedia.ai/');
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-start space-x-1 p-2 rounded-md hover:bg-gray-100 cursor-pointer focus:bg-gray-100"
                      >
                        <img 
                          src="/lovable-uploads/4d4628f9-f999-41bf-a8c3-e3b7bca7eb0b.png" 
                          alt="Media AI" 
                          className="w-5 h-5 mt-0.5 flex-shrink-0 rounded"
                        />
                        <div className="flex flex-col">
                          <span className="font-medium text-sm text-gray-900">Media AI</span>
                          <span className="text-xs text-gray-500 mt-0.5">Find any journalist or creator email</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => {
                          handleNavClick('https://www.trywrite.ai/');
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-start space-x-1 p-2 rounded-md hover:bg-gray-100 cursor-pointer focus:bg-gray-100"
                      >
                        <img 
                          src="/lovable-uploads/2f01faa2-9738-4566-8711-ffc76c8ea440.png" 
                          alt="Write AI" 
                          className="w-5 h-5 mt-0.5 flex-shrink-0 rounded"
                        />
                        <div className="flex flex-col">
                          <span className="font-medium text-sm text-gray-900">Write AI</span>
                          <span className="text-xs text-gray-500 mt-0.5">Your press release writing assistant</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => {
                          handleNavClick('https://www.trycontent.ai/');
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-start space-x-1 p-2 rounded-md hover:bg-gray-100 cursor-pointer focus:bg-gray-100"
                      >
                        <img 
                          src="/lovable-uploads/0470ccaf-cf52-42bb-9852-40cdea28c5d2.png" 
                          alt="Content AI" 
                          className="w-5 h-5 mt-0.5 flex-shrink-0 rounded"
                        />
                        <div className="flex flex-col">
                          <span className="font-medium text-sm text-gray-900">Content AI</span>
                          <span className="text-xs text-gray-500 mt-0.5">Your blog content writing assistant</span>
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

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
                  Contact us
                </Link>
                
                <button
                  onClick={() => {
                    handleNavClick('https://creators200.com/');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block font-medium transition-colors hover:text-gray-600 text-gray-900 text-sm cursor-pointer text-left tracking-normal"
                >
                  Creators 200 ↗
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
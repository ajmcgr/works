
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  
  
  const location = useLocation();
  const isHomepage = location.pathname === '/';

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
    <header className={`w-full z-50 absolute top-0 left-0 bg-transparent`}>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-16">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src={isHomepage ? "/lovable-uploads/389975af-e8ab-45ab-a4fb-c329d9b46f9c.png" : "/lovable-uploads/b1ddf536-e0e9-47ee-8dac-b35b327af302.png"} 
              alt="Works" 
              className="h-6"
            />
          </Link>

          {/* Spacer for centered logo */}
          <div className="flex-1"></div>

          {/* Right side navigation and contact */}
          <div className="flex items-center space-x-6">
            {/* Products dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger 
                className={`text-sm font-medium transition-colors ${isHomepage ? 'hover:text-white text-white' : 'hover:text-gray-600 text-gray-900'} flex items-center space-x-1`}
              >
                <span>Products</span>
                <ChevronDown className="h-3 w-3" />
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
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => {
                  if (item.href.includes('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={`text-sm font-medium transition-colors ${
                  isHomepage ? 'hover:text-white text-white' : 'hover:text-gray-600 text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isHomepage ? 'hover:text-white text-white' : 'hover:text-gray-600 text-gray-900'
              }`}
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden py-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src={isHomepage ? "/lovable-uploads/389975af-e8ab-45ab-a4fb-c329d9b46f9c.png" : "/lovable-uploads/b1ddf536-e0e9-47ee-8dac-b35b327af302.png"} 
                alt="Works" 
                className="h-6"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            {/* Products */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger 
                  className={`font-medium transition-colors ${isHomepage ? 'hover:text-white text-white' : 'hover:text-gray-600 text-gray-900'} flex items-center space-x-1`}
                >
                  <span>Products</span>
                  <ChevronDown className="h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="bg-white border border-gray-200 shadow-lg rounded-lg p-1 w-80 z-[60]"
                >
                  <DropdownMenuItem 
                    onClick={() => handleNavClick('https://trymedia.ai/')}
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
                    onClick={() => handleNavClick('https://www.trywrite.ai/')}
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
                    onClick={() => handleNavClick('https://www.trycontent.ai/')}
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
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => {
                  if (item.href.includes('#')) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
                className={`font-medium transition-colors ${
                  isHomepage ? 'hover:text-white text-white' : 'hover:text-gray-600 text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isHomepage ? 'hover:text-white text-white' : 'hover:text-gray-600 text-gray-900'
              }`}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Navigation Links */}
          <div className="space-y-6">
            {/* Services */}
            <div>
              <h4 className="text-base font-medium text-black mb-3 tracking-wide">Services</h4>
              <div className="space-y-2">
                <Link to="/services" className="block text-gray-600 text-sm hover:text-black transition-colors">Media Relations</Link>
                <Link to="/services" className="block text-gray-600 text-sm hover:text-black transition-colors">Crisis Communication</Link>
                <Link to="/services" className="block text-gray-600 text-sm hover:text-black transition-colors">Brand Communications</Link>
                <Link to="/services" className="block text-gray-600 text-sm hover:text-black transition-colors">Content Strategy</Link>
                <Link to="/services" className="block text-gray-600 text-sm hover:text-black transition-colors">Influencer Marketing</Link>
                <Link to="/services" className="block text-gray-600 text-sm hover:text-black transition-colors">Event Management</Link>
              </div>
            </div>

            {/* Apps */}
            <div>
              <h4 className="text-base font-medium text-black mb-3 tracking-wide">Apps</h4>
              <div className="space-y-2">
                <a 
                  href="https://trymedia.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Media AI
                </a>
                <a 
                  href="https://trywrite.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Write AI
                </a>
              </div>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-base font-medium text-black mb-3 tracking-wide">Community</h4>
              <div className="space-y-2">
                <a 
                  href="https://blog.works.xyz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Updates
                </a>
                <a 
                  href="https://discord.gg/JvzSsyNf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Discord
                </a>
                <button
                  onClick={() => {
                    const element = document.querySelector('#newsletter');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-gray-600 text-sm hover:text-black transition-colors text-left w-full"
                >
                  Newsletter
                </button>
                <a 
                  href="https://www.hypeworkspod.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-sm hover:text-black transition-colors"
                >
                  Podcast
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">&copy; 2025 Works App, Inc. All rights reserved.</p>
            <div className="flex space-x-6">
              <a 
                href="https://x.com/worksxyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                X
              </a>
              <a 
                href="https://www.facebook.com/worksxyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://www.linkedin.com/company/worksxyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.youtube.com/@worksxyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                YouTube
              </a>
              <a 
                href="https://www.instagram.com/works.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Brand First */}
          <div>
            <img 
              src="/lovable-uploads/e130fbc2-ad47-45b2-af25-7a0c40ea095f.png" 
              alt="Works" 
              className="h-6 mb-4 mx-auto"
            />
            <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-lg mx-auto">
              Storytelling that aligns your strategy, earns media, and drives influence.
            </p>
            <div className="text-gray-600 text-sm leading-relaxed">
              <p>
                Contact us to get started: <a 
                  href="mailto:alex@works.xyz" 
                  className="hover:text-black transition-colors"
                >
                  alex@works.xyz
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links Below */}
          <div className="space-y-6">
            {/* Services */}
            <div>
              <h4 className="text-sm font-medium text-black mb-3 tracking-wide">Services</h4>
              <div className="space-y-1">
                <Link to="/services" className="block text-gray-600 text-xs hover:text-black transition-colors">Media Relations</Link>
                <Link to="/services" className="block text-gray-600 text-xs hover:text-black transition-colors">Crisis Communication</Link>
                <Link to="/services" className="block text-gray-600 text-xs hover:text-black transition-colors">Brand Communications</Link>
                <Link to="/services" className="block text-gray-600 text-xs hover:text-black transition-colors">Content Strategy</Link>
                <Link to="/services" className="block text-gray-600 text-xs hover:text-black transition-colors">Influencer Marketing</Link>
                <Link to="/services" className="block text-gray-600 text-xs hover:text-black transition-colors">Event Management</Link>
              </div>
            </div>

            {/* Apps */}
            <div>
              <h4 className="text-sm font-medium text-black mb-3 tracking-wide">Apps</h4>
              <div className="space-y-1">
                <a 
                  href="https://trymedia.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs hover:text-black transition-colors"
                >
                  Media AI
                </a>
                <a 
                  href="https://trywrite.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs hover:text-black transition-colors"
                >
                  Write AI
                </a>
              </div>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-sm font-medium text-black mb-3 tracking-wide">Community</h4>
              <div className="space-y-1">
                <a 
                  href="https://blog.works.xyz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs hover:text-black transition-colors"
                >
                  Updates
                </a>
                <a 
                  href="https://discord.gg/JvzSsyNf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs hover:text-black transition-colors"
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
                  className="block text-gray-600 text-xs hover:text-black transition-colors"
                >
                  Newsletter
                </button>
                <a 
                  href="https://www.hypeworkspod.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs hover:text-black transition-colors"
                >
                  Podcast
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-600">&copy; 2025 Works App, Inc. All rights reserved.</p>
            <div className="flex space-x-6">
              <a 
                href="https://x.com/worksxyz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-black transition-colors"
              >
                X
              </a>
              <a 
                href="https://www.facebook.com/worksxyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-black transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://www.linkedin.com/company/worksxyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-black transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.youtube.com/@worksxyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-black transition-colors"
              >
                YouTube
              </a>
              <a 
                href="https://www.instagram.com/works.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-gray-600 hover:text-black transition-colors"
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

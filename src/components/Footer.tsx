
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-4xl">
        <div className="text-center space-y-8">
          {/* Brand */}
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

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {/* Services */}
            <div>
              <h4 className="text-sm font-medium text-black mb-4 tracking-wide">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-gray-600 text-xs hover:text-black transition-colors">Media Relations</Link></li>
                <li><Link to="/services" className="text-gray-600 text-xs hover:text-black transition-colors">Crisis Communication</Link></li>
                <li><Link to="/services" className="text-gray-600 text-xs hover:text-black transition-colors">Brand Communications</Link></li>
                <li><Link to="/services" className="text-gray-600 text-xs hover:text-black transition-colors">Content Strategy</Link></li>
                <li><Link to="/services" className="text-gray-600 text-xs hover:text-black transition-colors">Influencer Marketing</Link></li>
                <li><Link to="/services" className="text-gray-600 text-xs hover:text-black transition-colors">Event Management</Link></li>
              </ul>
            </div>

            {/* Apps */}
            <div>
              <h4 className="text-sm font-medium text-black mb-4 tracking-wide">Apps</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://trymedia.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xs hover:text-black transition-colors"
                  >
                    Media AI
                  </a>
                </li>
                <li>
                  <a 
                    href="https://trywrite.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xs hover:text-black transition-colors"
                  >
                    Write AI
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-sm font-medium text-black mb-4 tracking-wide">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://blog.works.xyz/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xs hover:text-black transition-colors"
                  >
                    Updates
                  </a>
                </li>
                <li>
                  <a 
                    href="https://discord.gg/JvzSsyNf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xs hover:text-black transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => {
                      const element = document.querySelector('#newsletter');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-600 text-xs hover:text-black transition-colors"
                  >
                    Newsletter
                  </button>
                </li>
                <li>
                  <a 
                    href="https://www.hypeworkspod.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 text-xs hover:text-black transition-colors"
                  >
                    Podcast
                  </a>
                </li>
              </ul>
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

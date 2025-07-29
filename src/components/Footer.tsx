
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-4xl">
        <div className="space-y-8">
          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Products */}
            <div>
              <h4 className="text-2xl font-medium text-black mb-3 tracking-wide">Products</h4>
              <div className="space-y-3">
                <a 
                  href="https://trymedia.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors"
                >
                  Media AI
                </a>
                <a 
                  href="https://trywrite.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors"
                >
                  Write AI
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-2xl font-medium text-black mb-3 tracking-wide">Services</h4>
              <div className="space-y-3">
                <Link to="/services" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Media Relations</Link>
                <Link to="/services" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Crisis Communication</Link>
                <Link to="/services" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Brand Communications</Link>
                <Link to="/services" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Content Strategy</Link>
                <Link to="/services" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Influencer Marketing</Link>
                <Link to="/services" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Event Management</Link>
                <Link to="/startups" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Startups</Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-2xl font-medium text-black mb-3 tracking-wide">Resources</h4>
              <div className="space-y-3">
                <Link to="/services/startup-pr" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Startup PR Agency</Link>
                <Link to="/services/influencer-marketing" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Influencer Marketing</Link>
                <Link to="/services/ai-press-outreach" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">AI Press Outreach</Link>
                <Link to="/services/global-pr-strategy" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Global PR Strategy</Link>
                <Link to="/services/b2b-pr-saas" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">B2B PR for SaaS</Link>
                <Link to="/services/consumer-tech-hardware-pr" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Consumer Tech PR</Link>
                <Link to="/services/crisis-reputation-management" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Crisis Management</Link>
                <Link to="/services/creative-storytelling" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Creative Storytelling</Link>
                <Link to="/services/media-training" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Media Training</Link>
                <Link to="/services/launch-sprint" className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors">Launch Sprint</Link>
              </div>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-2xl font-medium text-black mb-3 tracking-wide">Community</h4>
              <div className="space-y-3">
                <a 
                  href="https://blog.works.xyz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors"
                >
                  Updates
                </a>
                <a 
                  href="https://discord.gg/JvzSsyNf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors"
                >
                  Discord
                </a>
                <a 
                  href="https://www.hypeworkspod.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-sm xs:text-base sm:text-lg hover:text-black transition-colors"
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

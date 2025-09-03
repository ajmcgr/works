
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-6xl">
        <div className="space-y-8">
          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24">
            {/* Company */}
            <div>
              <h4 className="text-base font-semibold text-black mb-3 font-sans" style={{ letterSpacing: '0.1px' }}>Company</h4>
              <div className="space-y-3">
                <Link to="/about" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">About</Link>
                <Link to="/contact" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Contact us</Link>
                <a 
                  href="https://blog.works.xyz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors"
                >
                  Updates
                </a>
                <a 
                  href="https://discord.gg/Cet49cDcSr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors"
                >
                  Discord
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-base font-semibold text-black mb-3 font-sans" style={{ letterSpacing: '0.1px' }}>Resources</h4>
              <div className="space-y-3">
                <Link to="/resources/startup-pr-guide" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Startup PR Guide</Link>
                <Link to="/resources/launch-amplification" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Launch Amplification</Link>
                <Link to="/resources/ai-media-tools" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">AI Media Tools</Link>
                <Link to="/resources/international-expansion" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">International Expansion</Link>
                <Link to="/resources/saas-marketing" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">SaaS Marketing</Link>
                <Link to="/resources/hardware-launches" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Hardware Launches</Link>
                <Link to="/resources/reputation-defense" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Reputation Defense</Link>
                <Link to="/resources/brand-storytelling" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Brand Storytelling</Link>
                <Link to="/resources/founder-training" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Founder Training</Link>
              </div>
            </div>

            {/* Free Tools */}
            <div>
              <h4 className="text-base font-semibold text-black mb-3 font-sans" style={{ letterSpacing: '0.1px' }}>Free Tools</h4>
              <div className="space-y-3">
                <Link to="/tools/pr-headline-generator" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">PR Headlines Generator</Link>
                <Link to="/tools/influencer-brief-builder" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Influencer Briefs Generator</Link>
                <Link to="/tools/pr-health-checker" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">PR Health Check</Link>
                <Link to="/tools/pitch-timer" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Pitch Timer</Link>
                <Link to="/tools/pr-crisis-response-generator" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Crisis Response Generator</Link>
                <Link to="/tools/influencer-roi-calculator" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Influencer ROI Calculator</Link>
                <Link to="/tools/influencer-content-brief-generator" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Influencer Content Briefs Generator</Link>
                <Link to="/tools/influencer-rate-calculator" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Influencer Rate Calculator</Link>
                <Link to="/tools/influencer-campaign-timeline" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Influencer Campaign Timeline Generator</Link>
                <Link to="/tools/influencer-performance-tracker" className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors">Influencer Performance Tracker</Link>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-base font-semibold text-black mb-3 font-sans" style={{ letterSpacing: '0.1px' }}>Connect</h4>
              <div className="space-y-3">
                <a 
                  href="https://x.com/worksxyz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors"
                >
                  X
                </a>
                <a 
                  href="https://www.facebook.com/worksxyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors"
                >
                  Facebook
                </a>
                <a 
                  href="https://www.linkedin.com/company/worksxyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.youtube.com/@worksxyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors"
                >
                  YouTube
                </a>
                <a 
                  href="https://www.instagram.com/works.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-600 text-xs sm:text-sm hover:text-black transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8">
          <div className="flex justify-center">
            <p className="text-xs text-gray-600">&copy; 2025 Works App, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/e130fbc2-ad47-45b2-af25-7a0c40ea095f.png" 
              alt="Works" 
              className="h-6 mb-4"
            />
            <p className="text-gray-600 font-normal leading-relaxed max-w-md">
              Storytelling that aligns your strategy, earns media, and drives influence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-600 font-normal hover:text-black transition-colors">Media Relations</Link></li>
              <li><Link to="/services" className="text-gray-600 font-normal hover:text-black transition-colors">Crisis Communication</Link></li>
              <li><Link to="/services" className="text-gray-600 font-normal hover:text-black transition-colors">Brand Communications</Link></li>
              <li><Link to="/services" className="text-gray-600 font-normal hover:text-black transition-colors">Content Strategy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div className="text-gray-600 font-normal">alex@worksapp.com</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-sm text-gray-600 font-normal">&copy; 2024 Works. All rights reserved.</p>
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
      </div>
    </footer>
  );
};

export default Footer;

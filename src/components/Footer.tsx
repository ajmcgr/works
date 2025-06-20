
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
            <p className="text-gray-600 font-light leading-relaxed max-w-md">
              Strategic public relations that shapes narratives and builds lasting relationships.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-600 font-light hover:text-black transition-colors">Media Relations</Link></li>
              <li><Link to="/services" className="text-gray-600 font-light hover:text-black transition-colors">Crisis Communication</Link></li>
              <li><Link to="/services" className="text-gray-600 font-light hover:text-black transition-colors">Brand Communications</Link></li>
              <li><Link to="/services" className="text-gray-600 font-light hover:text-black transition-colors">Content Strategy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-black mb-6 uppercase tracking-wide">Contact</h4>
            <div className="space-y-3">
              <div className="text-gray-600 font-light">hello@works.xyz</div>
              <div className="text-gray-600 font-light">+1 (555) 123-4567</div>
              <div className="text-gray-600 font-light">New York, NY</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 font-light">&copy; 2024 Works. All rights reserved.</p>
            <div className="flex space-x-8">
              <Link to="/blog" className="text-sm text-gray-600 font-light hover:text-black transition-colors">Blog</Link>
              <Link to="/contact" className="text-sm text-gray-600 font-light hover:text-black transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

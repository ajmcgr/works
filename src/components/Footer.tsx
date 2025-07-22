import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/70b37b99-761a-4f2c-af5f-68abfb740aed.png" 
              alt="Works" 
              className="h-8"
            />
          </Link>
          <p className="text-muted-foreground mb-8">
            Influence, Engineered.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/podcast" className="hover:text-primary transition-colors">Podcast</Link>
            <Link to="/tools" className="hover:text-primary transition-colors">Tools</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            © 2024 Works. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
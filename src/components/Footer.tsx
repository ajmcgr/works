import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Link to="/" className="text-2xl font-headline font-bold tracking-tight text-primary mb-4 inline-block">
            .works
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
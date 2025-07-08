
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useToast } from "@/hooks/use-toast";
import { NewsSection } from "@/components/NewsSection";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "Media Relations",
    "Crisis Communication", 
    "Brand Communications",
    "Content Strategy",
    "Influencer Marketing",
    "Event Management"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link
    const subject = `Contact from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:alex@worksapp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;

    toast({
      title: "Email Client Opened",
      description: "Your default email client should open with the message pre-filled.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    console.log('Loading HubSpot form script...');
    
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.onload = () => {
      console.log('HubSpot script loaded successfully');
      if (window.hbspt) {
        console.log('HubSpot object found, creating form...');
        try {
          window.hbspt.forms.create({
            portalId: "40189621",
            formId: "9afe8262-34a1-4c4b-bc0a-7b473ed68562",
            region: "na1",
            target: '#hubspot-form',
            onFormReady: function() {
              console.log('HubSpot form is ready');
            },
            onFormSubmit: function() {
              console.log('HubSpot form submitted');
            },
            onFormSubmitted: function() {
              console.log('HubSpot form submission completed');
            }
          });
        } catch (error) {
          console.error('Error creating HubSpot form:', error);
        }
      } else {
        console.error('HubSpot object not found');
      }
    };
    script.onerror = () => {
      console.error('Failed to load HubSpot script');
    };
    document.head.appendChild(script);

    // Add custom CSS for HubSpot form styling
    const style = document.createElement('style');
    style.textContent = `
      #hubspot-form .hs-form {
        max-width: 400px;
        margin: 0 auto;
      }
      #hubspot-form .hs-form-field {
        margin-bottom: 1rem;
      }
      #hubspot-form .hs-form-field label {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        color: #374151;
        margin-bottom: 0.5rem;
      }
      #hubspot-form .hs-input {
        width: 100%;
        height: 2.5rem;
        padding: 0.5rem 0.75rem;
        border: 1px solid #d1d5db;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
      #hubspot-form .hs-input:focus {
        outline: none;
        border-color: #000;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
      }
      #hubspot-form .hs-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        white-space: nowrap;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        font-weight: 500;
        background-color: #000;
        color: white;
        padding: 0.75rem 2rem;
        height: 2.5rem;
        border: none;
        cursor: pointer;
        transition: background-color 0.15s ease-in-out;
        width: 100%;
        text-decoration: none;
      }
      #hubspot-form .hs-button:hover {
        background-color: #1f2937;
      }
      #hubspot-form .hs-button:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
      }
      #hubspot-form .hs-button:disabled {
        pointer-events: none;
        opacity: 0.5;
      }
      #hubspot-form .hs-error-msgs {
        color: #dc2626;
        font-size: 0.75rem;
        margin-top: 0.25rem;
      }
      #hubspot-form .hs-richtext {
        font-size: 0.875rem;
        color: #6b7280;
        text-align: center;
        margin-top: 1rem;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="pt-40">
      {/* Hero Section */}
      <section className="relative bg-white min-h-[70vh] md:min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Mobile Layout - Content above video */}
        <div className="relative z-20 container mx-auto px-6 sm:px-6 lg:px-12 max-w-6xl w-full md:hidden">
          {/* Mobile Content */}
          <div className="text-center py-8">
            <h1 className="text-3xl xs:text-4xl font-headline text-black leading-tight mb-6 tracking-tight">
              Tell your story.
            </h1>
            <p className="text-base xs:text-lg text-gray-700 leading-relaxed mb-8 max-w-lg mx-auto font-normal">
              Storytelling that aligns your strategy, earns media, and drives influence.
            </p>
            <div className="flex flex-col items-center justify-center space-y-6 mb-8">
              <Button asChild className="text-white px-8 py-4 text-base font-medium w-full max-w-xs" style={{ backgroundColor: '#409EFF' }}>
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Link 
                to="/services"
                className="text-sm font-medium text-gray-700 hover:text-gray-500 transition-colors"
              >
                Our services
              </Link>
            </div>
          </div>
          
          {/* Mobile Video - Below content, not full width, rounded corners */}
          <div className="px-4 pb-8">
            <div className="max-w-md mx-auto">
              <AspectRatio ratio={16/9}>
                <iframe
                  src="https://player.vimeo.com/video/1096169142?h=9c7c3f3f3e&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                  className="w-full h-full object-cover rounded-xl"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Works PR Video"
                />
              </AspectRatio>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Content above video (same as mobile) */}
        <div className="relative z-20 container mx-auto px-6 sm:px-6 lg:px-12 max-w-6xl w-full min-h-screen items-center hidden md:flex flex-col justify-center">
          {/* Desktop Content */}
          <div className="max-w-4xl mx-auto text-center w-full py-12 sm:py-8">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-headline text-black leading-tight mb-8 sm:mb-6 lg:mb-8 tracking-tight">
              Tell your story.
            </h1>
            <p className="text-base xs:text-lg sm:text-xl lg:text-xl text-gray-700 leading-relaxed mb-10 sm:mb-8 lg:mb-12 max-w-lg sm:max-w-2xl mx-auto font-normal">
              Storytelling that aligns your strategy, earns media, and drives influence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-8 mb-12">
              <Button asChild className="text-white px-8 sm:px-8 lg:px-10 py-4 sm:py-4 text-base font-medium w-full sm:w-auto max-w-xs sm:max-w-none" style={{ backgroundColor: '#409EFF' }}>
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Link 
                to="/services"
                className="text-sm font-medium text-gray-700 hover:text-gray-500 transition-colors"
              >
                Our services
              </Link>
            </div>
          </div>
          
          {/* Desktop Video - Below content, matching page body column width, rounded corners */}
          <div className="w-full">
            <AspectRatio ratio={16/9}>
              <iframe
                src="https://player.vimeo.com/video/1096169142?h=9c7c3f3f3e&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                className="w-full h-full object-cover rounded-xl"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Works PR Video"
              />
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="bg-white py-12 sm:py-12 lg:py-16">
        <div className="container mx-auto px-6 sm:px-6 lg:px-12 max-w-6xl w-full">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <p className="text-xs sm:text-sm text-gray-600 font-normal uppercase tracking-wide">Trusted by leading brands</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-6 items-center justify-items-center">
            <div className="w-20 sm:w-24 lg:w-32 h-12 sm:h-16 lg:h-20">
              <AspectRatio ratio={16/10}>
                <img 
                  src="/lovable-uploads/2c0b4b0b-9154-4ee1-9a3c-3e4a0fdd7013.png" 
                  alt="UFC" 
                  className="w-full h-full object-contain hover:opacity-100 transition-opacity"
                />
              </AspectRatio>
            </div>
            <div className="w-20 sm:w-24 lg:w-32 h-12 sm:h-16 lg:h-20">
              <AspectRatio ratio={16/10}>
                <img 
                  src="/lovable-uploads/8ef86b72-a30c-418e-8a3c-ae16ccfa0913.png" 
                  alt="OnePlus" 
                  className="w-full h-full object-contain hover:opacity-100 transition-opacity"
                />
              </AspectRatio>
            </div>
            <div className="w-20 sm:w-24 lg:w-32 h-12 sm:h-16 lg:h-20">
              <AspectRatio ratio={16/10}>
                <img 
                  src="/lovable-uploads/4329826e-9683-4f34-b0ad-26a739aef474.png" 
                  alt="OPPO" 
                  className="w-full h-full object-contain hover:opacity-100 transition-opacity"
                />
              </AspectRatio>
            </div>
            <div className="w-20 sm:w-24 lg:w-32 h-12 sm:h-16 lg:h-20">
              <AspectRatio ratio={16/10}>
                <img 
                  src="/lovable-uploads/c9739784-e9ac-48c8-83d5-360e933fea0c.png" 
                  alt="Ogilvy" 
                  className="w-full h-full object-contain hover:opacity-100 transition-opacity"
                />
              </AspectRatio>
            </div>
            <div className="w-20 sm:w-24 lg:w-32 h-12 sm:h-16 lg:h-20">
              <AspectRatio ratio={16/10}>
                <img 
                  src="/lovable-uploads/b46ae86a-6dd8-4b8a-a25c-94658108c395.png" 
                  alt="Weber Shandwick" 
                  className="w-full h-full object-contain hover:opacity-100 transition-opacity"
                />
              </AspectRatio>
            </div>
            <div className="w-20 sm:w-24 lg:w-32 h-12 sm:h-16 lg:h-20">
              <AspectRatio ratio={16/10}>
                <img 
                  src="/lovable-uploads/37a5a0e4-49f5-4885-8cef-be0fd36337da.png" 
                  alt="Publicis Groupe" 
                  className="w-full h-full object-contain hover:opacity-100 transition-opacity"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="space-y-16 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-headline text-black mb-8 leading-tight">
                What we do
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-normal">
                Comprehensive PR solutions tailored to your unique challenges and opportunities.
              </p>
            </div>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="pb-6 border-b border-gray-100 last:border-b-0">
                  <h3 className="text-xl font-medium text-black mb-2">{service}</h3>
                  <p className="text-gray-600 font-normal">Strategic approach to elevate your brand presence</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="flex flex-col space-y-12 text-center">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-normal text-black mb-2">2+</div>
              <div className="text-sm text-gray-600 font-normal uppercase tracking-wide">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-normal text-black mb-2">50+</div>
              <div className="text-sm text-gray-600 font-normal uppercase tracking-wide">Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-normal text-black mb-2">98%</div>
              <div className="text-sm text-gray-600 font-normal uppercase tracking-wide">Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-normal text-black mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-normal uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Works Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="space-y-16 text-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-headline text-black mb-8 leading-tight">
                Why Works
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-normal leading-relaxed">
                <p>
                  We believe in the power of strategic communication to shape perceptions 
                  and drive meaningful change.
                </p>
                <p>
                  Our approach combines deep industry expertise with creative storytelling 
                  to deliver results that matter.
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-100">
                  <div className="text-sm text-gray-600 font-normal uppercase tracking-wide mb-2">Expertise</div>
                  <div className="text-lg text-black font-medium">2+ years of PR excellence</div>
                </div>
                <div className="pb-6 border-b border-gray-100">
                  <div className="text-sm text-gray-600 font-normal uppercase tracking-wide mb-2">Network</div>
                  <div className="text-lg text-black font-medium">Extensive media relationships</div>
                </div>
                <div className="pb-6 border-b border-gray-100">
                  <div className="text-sm text-gray-600 font-normal uppercase tracking-wide mb-2">Response</div>
                  <div className="text-lg text-black font-medium">24/7 crisis management</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-normal uppercase tracking-wide mb-2">Results</div>
                  <div className="text-lg text-black font-medium">Proven track record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-headline text-black mb-8 leading-tight">
              About Works
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-normal leading-relaxed">
              <p>
                We're the creative agency built for founders, rebels, and category creators.
              </p>
              <p>
                Our playbook? Strategy. Media. Influencers. Hype.
              </p>
              <p>
                Our AI tools supercharge it — turning your story into headlines and your brand into influence.
              </p>
              <p>
                We work with companies shaping the future: AI, robotics, crypto, consumer tech, fintech, and beyond.
              </p>
              <p>
                If you're building something bold, we'll make the world pay attention.
              </p>
            </div>
            <div className="mt-12">
              <Button asChild className="text-white px-10 py-4 text-base font-medium" style={{ backgroundColor: '#409EFF' }}>
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection />

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-headline mb-8 leading-tight text-black">
              Ready to shape your story?
            </h2>
            <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-normal text-gray-600 leading-relaxed">
              Let's discuss how strategic public relations can elevate your brand.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                  className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your@email.com"
                  className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                Company
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
                className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                placeholder="Tell us about your project..."
                className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500"
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full text-white hover:opacity-90 px-6 py-4 text-base" style={{ backgroundColor: '#409EFF' }}>
              {isSubmitting ? (
                "Opening email client..."
              ) : (
                <>
                  Start a conversation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* Mailing List Section */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-headline text-black mb-6 leading-tight">
              Join our newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-12 font-normal leading-relaxed">
              Get updates from our team. Only the good stuff.
            </p>
            <div id="hubspot-form" className="max-w-md mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Declare global hbspt for TypeScript
declare global {
  interface Window {
    hbspt: any;
  }
}

export default Index;

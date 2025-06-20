import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    "Content Strategy"
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
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "40189621",
          formId: "9afe8262-34a1-4c4b-bc0a-7b473ed68562",
          region: "na1",
          target: '#hubspot-form'
        });
      }
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-white py-32 lg:py-48">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-[1.1] mb-8 tracking-tight">
              Tell your story.
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto font-normal">
              Storytelling that aligns your strategy, earns media, and drives influence.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <Button asChild className="text-white px-10 py-4 text-sm font-medium" style={{ backgroundColor: '#409EFF' }}>
                <button onClick={scrollToContact} className="hover:opacity-90">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
              >
                Our services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-600 font-normal uppercase tracking-wide">Trusted by leading brands</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center justify-items-center">
            <img 
              src="/lovable-uploads/8ef86b72-a30c-418e-8a3c-ae16ccfa0913.png" 
              alt="OnePlus" 
              className="h-16 lg:h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <img 
              src="/lovable-uploads/4329826e-9683-4f34-b0ad-26a739aef474.png" 
              alt="OPPO" 
              className="h-16 lg:h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <img 
              src="/lovable-uploads/c9739784-e9ac-48c8-83d5-360e933fea0c.png" 
              alt="Ogilvy" 
              className="h-16 lg:h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <img 
              src="/lovable-uploads/b46ae86a-6dd8-4b8a-a25c-94658108c395.png" 
              alt="Weber Shandwick" 
              className="h-16 lg:h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
            <img 
              src="/lovable-uploads/37a5a0e4-49f5-4885-8cef-be0fd36337da.png" 
              alt="Publicis Groupe" 
              className="h-16 lg:h-20 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-normal text-black mb-2">8+</div>
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

      {/* News Section */}
      <NewsSection />

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
              About Works
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-normal leading-relaxed">
              <p>
                Works offers best-in-class public relations expertise.
              </p>
              <p>
                Our PR services spans multiple disciplines, including strategy, planning, media relations, and influencer marketing.
              </p>
              <p>
                Our PR software aligns your strategy, earns media, and drives influence.
              </p>
              <p>
                Clients we work with are changing the world in consumer electronics, AI, blockchain, robotics, fintech, and other industries at the bleeding edge.
              </p>
            </div>
            <div className="mt-12">
              <Button asChild className="text-white px-10 py-4 text-sm font-medium" style={{ backgroundColor: '#409EFF' }}>
                <button onClick={scrollToContact} className="hover:opacity-90">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Works Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
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
              <div className="mt-12">
                <Button asChild variant="outline" className="text-white hover:text-white" style={{ borderColor: '#409EFF', backgroundColor: '#409EFF' }}>
                  <Link to="/about" className="hover:opacity-90">Learn more about us</Link>
                </Button>
              </div>
            </div>
            <div className="lg:pl-16">
              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-100">
                  <div className="text-sm text-gray-600 font-normal uppercase tracking-wide mb-2">Expertise</div>
                  <div className="text-lg text-black font-medium">8+ years of PR excellence</div>
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

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to shape your story?
            </h2>
            <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-normal text-gray-300 leading-relaxed">
              Let's discuss how strategic public relations can elevate your brand.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
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
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                Company
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
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
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full text-black hover:opacity-90 px-6 py-4" style={{ backgroundColor: '#409EFF' }}>
              {isSubmitting ? (
                "Opening email client..."
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Start a conversation
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
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              Join our mailing list
            </h2>
            <p className="text-lg text-gray-600 mb-12 font-normal leading-relaxed">
              Join our mailing list for the latest from our team.
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

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// TypeScript declaration for HubSpot global object
declare global {
  interface Window {
    hbspt: any;
  }
}

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be handled by HubSpot form
    toast({
      title: "Thank you!",
      description: "We'll be in touch soon.",
    });
  };

  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.onload = () => {
      if (window.hbspt) {
        try {
          window.hbspt.forms.create({
            portalId: "40189621",
            formId: "9afe8262-34a1-4c4b-bc0a-7b473ed68562",
            region: "na1",
            target: '#hubspot-form-inline',
          });
        } catch (error) {
          console.error('Error creating HubSpot form:', error);
        }
      }
    };
    document.head.appendChild(script);

    // Add custom CSS for inline form styling
    const style = document.createElement('style');
    style.textContent = `
      #hubspot-form-inline .hs-form {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        gap: 0.75rem;
        max-width: 400px;
        margin: 0;
      }
      #hubspot-form-inline .hs-form-field {
        margin-bottom: 0;
        flex: 1;
      }
      #hubspot-form-inline .hs-form-field label {
        display: none;
      }
      #hubspot-form-inline .hs-input {
        width: 100%;
        height: 3rem;
        padding: 0.75rem 1rem;
        border: 1px solid hsl(214.3 31.8% 91.4%);
        border-radius: 0.75rem;
        font-size: 0.875rem;
        background: white;
        transition: all 0.2s ease;
      }
      #hubspot-form-inline .hs-input:focus {
        outline: none;
        border-color: hsl(317 100% 70%);
        box-shadow: 0 0 0 3px hsl(317 100% 70% / 0.1);
      }
      #hubspot-form-inline .hs-button {
        height: 3rem;
        padding: 0 1.5rem;
        background: hsl(317 100% 70%);
        color: white;
        border: none;
        border-radius: 0.75rem;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
      }
      #hubspot-form-inline .hs-button:hover {
        background: hsl(317 100% 65%);
        transform: translateY(-1px);
      }
      @media (max-width: 640px) {
        #hubspot-form-inline .hs-form {
          flex-direction: column;
          align-items: stretch;
          gap: 1rem;
        }
        #hubspot-form-inline .hs-button {
          width: 100%;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] border border-purple-200/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] border border-pink-200/20 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline text-gray-900 leading-tight mb-6 tracking-tight">
            Turn your brand into a 
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              media powerhouse
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Trusted by 100+ brands to engineer influence through strategic PR, media relations, and AI-powered tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              asChild 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-base font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5"
            >
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Schedule A Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <div className="text-sm text-gray-500">
              or get started with our{" "}
              <a href="/services" className="text-purple-600 hover:text-purple-700 font-medium underline underline-offset-4">
                PR services
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto shadow-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Stay Updated</h3>
            <p className="text-sm text-gray-600 mb-4">Get the latest PR insights and industry news.</p>
            <div id="hubspot-form-inline"></div>
          </div>
        </div>

        {/* Video Section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl mx-auto px-6">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-purple-600 ml-1" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">Watch our story</div>
                  <div className="text-xs text-gray-600">2 min overview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-headline text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-lg text-gray-600">Choose the plan that fits your brand's ambition.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
                <div className="text-3xl font-bold text-gray-900 mb-1">$2,500</div>
                <div className="text-sm text-gray-600">per month</div>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                  Media database access
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                  Basic PR strategy
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                  Monthly reporting
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                  Email support
                </li>
              </ul>
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-6">
                Get Started
              </Button>
            </div>

            {/* Growth Plan */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                <div className="text-3xl font-bold mb-1">$5,000</div>
                <div className="text-sm text-white/80">per month</div>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-white/90">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  Everything in Starter
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  AI-powered copywriting
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  Crisis communication
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  Dedicated account manager
                </li>
              </ul>
              <Button className="w-full bg-white hover:bg-gray-50 text-purple-600 rounded-xl py-6 font-medium">
                Schedule A Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, MessageCircle } from "lucide-react";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Removed scroll effects - load everything at once

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
    const mailtoLink = `mailto:alex@works.xyz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;

    toast({
      title: "Email Client Opened",
      description: "Your default email client should open with the message pre-filled.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      {/* Full-Bleed Hero - Mobile First */}
      <section className="min-h-screen flex flex-col justify-start md:justify-center items-center relative overflow-hidden pt-24 md:pt-16 pb-16" style={{ backgroundImage: 'url(/brands/hero-workspace.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className="relative z-10 text-center max-w-5xl mx-auto w-full px-4 md:px-6">

          <div className="mb-6 md:mb-8">
            <h1 className="font-headline text-gray-900 mb-4 md:mb-6 text-6xl md:text-7xl lg:text-8xl" style={{ letterSpacing: '0px', fontSize: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
              PR & Influencer Marketing for Ambitious Brands
            </h1>
            
            <p className="text-gray-800 font-medium text-lg md:text-xl mb-4 md:mb-6 max-w-3xl mx-auto">
              We run high-impact PR and influencer campaigns designed to scale ambitious brands — powered by AI.
            </p>
          </div>

          {/* Touch-native CTA */}
            <div>
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center px-8 py-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-800 text-lg font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/30">
                <span>Let's Work Together</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 hover:translate-x-1" />
              </a>
            </div>

          {/* Client Logos - Now directly below hero button */}
          <div className="mt-8 md:mt-10">
            <p className="text-gray-700 text-sm mb-3 md:mb-6 text-center">Trusted by agencies and marketing teams worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-8 lg:gap-12 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
              <div className="w-32 h-20 md:w-48 md:h-32 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e3245375-9a24-4ea7-89aa-f37c5c59078f.png" 
                  alt="UFC" 
                  className="max-w-full max-h-full object-contain brightness-0 invert transition-all duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-32 h-20 md:w-48 md:h-32 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8ef86b72-a30c-418e-8a3c-ae16ccfa0913.png" 
                  alt="OnePlus" 
                  className="max-w-full max-h-full object-contain brightness-0 invert transition-all duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-32 h-20 md:w-48 md:h-32 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/4329826e-9683-4f34-b0ad-26a739aef474.png" 
                  alt="OPPO" 
                  className="max-w-full max-h-full object-contain brightness-0 invert transition-all duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-32 h-20 md:w-48 md:h-32 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c9739784-e9ac-48c8-83d5-360e933fea0c.png" 
                  alt="Ogilvy" 
                  className="max-w-full max-h-full object-contain brightness-0 invert transition-all duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-32 h-20 md:w-48 md:h-32 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b46ae86a-6dd8-4b8a-a25c-94658108c395.png" 
                  alt="Weber Shandwick" 
                  className="max-w-full max-h-full object-contain brightness-0 invert transition-all duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-32 h-20 md:w-48 md:h-32 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/37a5a0e4-49f5-4885-8cef-be0fd36337da.png" 
                  alt="Publicis Groupe" 
                  className="max-w-full max-h-full object-contain brightness-0 invert transition-all duration-300"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* How We Can Help Section - Nothing.tech Style */}
      <section className="overflow-hidden">
        <div className="flex flex-col">
          {[
              { 
                title: "Media Relations", 
                description: "Strategic media outreach that gets your story heard by the right audiences at the right time.",
                url: "/case-study/ufc", 
                delay: "0ms", 
                client: "UFC", 
                clientSlug: "ufc",
                backgroundImage: "/brands/ufc/hero.jpg"
              },
              { 
                title: "Crisis Communication", 
                description: "Navigate challenging situations with expert crisis management and reputation protection.",
                url: "/case-study/oneplus", 
                delay: "100ms", 
                client: "OnePlus", 
                clientSlug: "oneplus",
                backgroundImage: "/brands/oneplus/hero.jpg"
              },
              { 
                title: "Brand Communications", 
                description: "Craft compelling brand narratives that resonate with your target market and drive engagement.",
                url: "/case-study/oppo", 
                delay: "200ms", 
                client: "OPPO", 
                clientSlug: "oppo",
                backgroundImage: "/brands/oppo/hero.jpg"
              },
              { 
                title: "Content Strategy", 
                description: "Develop content that educates, entertains, and converts across all marketing channels.",
                url: "/case-study/content-strategy", 
                delay: "300ms", 
                client: "Content Studio", 
                clientSlug: "content-strategy",
                backgroundImage: "/brands/content-studio.jpg"
              },
              { 
                title: "Influencer Marketing", 
                description: "Connect with authentic voices that amplify your brand message to engaged communities.",
                url: "/case-study/weber-shandwick", 
                delay: "400ms", 
                client: "Weber Shandwick", 
                clientSlug: "weber-shandwick",
                backgroundImage: "/brands/weber-shandwick/hero.jpg"
              },
              { 
                title: "Event Management", 
                description: "Create memorable experiences that strengthen relationships and generate meaningful buzz.",
                url: "/case-study/xreal", 
                delay: "500ms", 
                client: "XREAL", 
                clientSlug: "xreal",
                backgroundImage: "/brands/xreal/hero.jpg"
              }
          ].map((service, index) => (
            <a 
              key={index} 
              href={service.url} 
              className="group relative block overflow-hidden transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 bg-gray-900"
              style={{ 
                animationDelay: service.delay,
                height: '100vh',
                width: '100%'
              }}
              aria-label={service.title}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={service.backgroundImage}
                  alt={`${service.client} background`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding={index < 2 ? "sync" : "async"}
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  style={{ opacity: 0 }}
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Content pinned to bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12">
                <div className="space-y-4 max-w-2xl">
                  <h3 className="text-4xl lg:text-6xl font-medium text-white leading-tight" style={{ fontFamily: 'Reckless, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-white text-lg lg:text-xl leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6" style={{ background: 'var(--gradient-navy-rich)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-white mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ letterSpacing: '0px', fontWeight: 500 }}>
              Ready to shape your story?
            </h2>
            <p className="text-white/70 text-xl">
              Let's discuss how strategic public relations can elevate your brand.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  style={{ borderRadius: '12px' }}
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
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  style={{ borderRadius: '12px' }}
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
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                style={{ borderRadius: '12px' }}
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
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                style={{ borderRadius: '12px' }}
              />
            </div>
            <div className="inline-flex items-center px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/30 cursor-pointer">
              <button type="submit" disabled={isSubmitting} className="bg-transparent border-none text-white font-medium">
                {isSubmitting ? (
                  "Opening email client..."
                ) : (
                  "Start a conversation"
                )}
              </button>
              {!isSubmitting && <ArrowRight className="h-4 w-4 ml-2" />}
            </div>
          </form>
        </div>
      </section>


    </div>
  );
};

export default Index;
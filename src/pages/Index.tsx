import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, MessageCircle } from "lucide-react";
import tankaLogo from "@/assets/tanka.png";
import tauLogo from "@/assets/tau.png";
import nottaLogo from "@/assets/notta.png";
import angryMiaoLogo from "@/assets/angry-miao.png";
import heroHumanCool from "@/assets/hero-human-cool.webp";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const isMobile = useIsMobile();

  const clientLogos = useMemo(() => {
    const logos = [
      { src: "/lovable-uploads/e3245375-9a24-4ea7-89aa-f37c5c59078f.png", alt: "UFC" },
      { src: "/lovable-uploads/8ef86b72-a30c-418e-8a3c-ae16ccfa0913.png", alt: "OnePlus" },
      { src: "/lovable-uploads/4329826e-9683-4f34-b0ad-26a739aef474.png", alt: "OPPO" },
      { src: "/lovable-uploads/c9739784-e9ac-48c8-83d5-360e933fea0c.png", alt: "Ogilvy" },
      { src: "/lovable-uploads/b46ae86a-6dd8-4b8a-a25c-94658108c395.png", alt: "Weber Shandwick" },
      { src: "/lovable-uploads/37a5a0e4-49f5-4885-8cef-be0fd36337da.png", alt: "Publicis Groupe" },
      { src: tankaLogo, alt: "Tanka" },
      { src: tauLogo, alt: "Tau" },
      { src: nottaLogo, alt: "Notta" },
      { src: "/lovable-uploads/ecarx.png", alt: "ECARX" },
      { src: "/lovable-uploads/hho.png", alt: "HHO" },
      { src: angryMiaoLogo, alt: "Angry Miao" },
      { src: "/lovable-uploads/tencent.png", alt: "Tencent" },
    ];
    // On mobile: show fewer logos, smaller, in a 3-col grid
    const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const displayLogos = mobile ? logos.slice(0, 9) : logos;
    const cols = mobile ? 3 : 5;
    const rows = Math.ceil(displayLogos.length / cols);
    const minSize = mobile ? 80 : 180;
    const sizeRange = mobile ? 60 : 140;
    return displayLogos.map((logo, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const cellW = 100 / cols;
      const cellH = 100 / rows;
      const offsetX = Math.random() * (cellW * 0.25);
      const offsetY = Math.random() * (cellH * 0.2);
      return {
        ...logo,
        top: row * cellH + offsetY,
        left: col * cellW + offsetX,
        size: minSize + Math.floor(Math.random() * sizeRange),
      };
    });
  }, []);

  // Preload critical images
  useEffect(() => {
    const preloadLinks = [
      '/brands/hero-workspace.jpg',
      '/brands/weber-shandwick/hero.jpg',
      '/brands/ufc/hero.jpg'
    ];
    
    preloadLinks.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
    
    return () => {
      // Cleanup preload links
      preloadLinks.forEach(src => {
        const link = document.querySelector(`link[href="${src}"]`);
        if (link) document.head.removeChild(link);
      });
    };
  }, []);

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
    const mailtoLink = `mailto:alex@worksdigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
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
      <a 
        href="https://cal.com/works" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <section className="min-h-[100svh] md:min-h-screen flex flex-col items-center justify-between relative overflow-hidden pt-6 md:pt-16 cursor-pointer">
          
          {/* Hero Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={heroHumanCool}
              alt="Stylish professional in modern urban setting - contemporary brand communications"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/25" />
          
          {/* Elegant radial darkening */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_900px_700px_at_center,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.08)_40%,transparent_70%)]" />

          {/* Randomly placed client logos - upper portion, capped to avoid headline */}
          <div className="relative z-10 w-full flex-1 px-4 md:px-8" style={{ maxHeight: '60%' }}>
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="absolute pointer-events-none z-[1]"
                style={{
                  top: `${logo.top}%`,
                  left: `${logo.left}%`,
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="brightness-0 invert opacity-100"
                  style={{ width: logo.size, height: logo.size, objectFit: 'contain' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          {/* Hero Content - Bottom left exactly like before */}
          <div className="relative z-10 text-left max-w-2xl w-full px-4 md:px-6 ml-4 md:ml-8 lg:ml-16 pb-8 lg:pb-12">

            <div className="mb-3 md:mb-4">
              <h1 className="font-headline text-white mb-2 md:mb-3 text-4xl lg:text-6xl leading-tight">
                Where Products Meet Creators
              </h1>
              
              <p className="text-white font-medium text-base md:text-xl mb-3 md:mb-4 max-w-3xl leading-relaxed">
                AI-powered PR and Influencer Marketing services that drive growth.
              </p>
            </div>

            {/* Touch-native CTA */}
            <div>
              <Button variant="cta" size="lg" asChild>
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                  <span>Let's Work Together</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </a>


      {/* How We Can Help Section - Nothing.tech Style */}
      <section className="overflow-hidden">
        <div className="flex flex-col">
          {[
              { 
                title: "Influencer Marketing", 
                description: "Connect with authentic voices that amplify your brand message to engaged communities.",
                url: "/case-study/meizu", 
                delay: "0ms", 
                client: "Weber Shandwick", 
                clientSlug: "weber-shandwick",
                backgroundImage: "/brands/weber-shandwick/hero.jpg"
              },
              { 
                title: "Media Relations", 
                description: "Strategic media outreach that gets your story heard by the right audiences at the right time.",
                url: "/case-study/oneplus", 
                delay: "100ms", 
                client: "UFC", 
                clientSlug: "ufc",
                backgroundImage: "/brands/ufc/media-relations.jpg"
              },
              { 
                title: "Crisis Communication", 
                description: "Navigate challenging situations with expert crisis management and reputation protection.",
                url: "/case-study/oneplus", 
                delay: "200ms", 
                client: "OnePlus", 
                clientSlug: "oneplus",
                backgroundImage: "/brands/oneplus/crisis-comm.webp"
              },
              { 
                title: "Brand Communications", 
                description: "Craft compelling brand narratives that resonate with your target market and drive engagement.",
                url: "/case-study/oppo", 
                delay: "300ms", 
                client: "OPPO", 
                clientSlug: "oppo",
                backgroundImage: "/brands/oppo/hero.jpg"
              },
              { 
                title: "Content Strategy", 
                description: "Develop content that educates, entertains, and converts across all marketing channels.",
                url: "/case-study/xreal", 
                delay: "400ms", 
                client: "Content Studio", 
                clientSlug: "content-strategy",
                backgroundImage: "/brands/xreal/one-pro.webp"
              },
              { 
                title: "Event Management", 
                description: "Create memorable experiences that strengthen relationships and generate meaningful buzz.",
                url: "https://works.xyz/case-study/publicis-msl", 
                delay: "500ms",
                client: "Publicis Groupe", 
                clientSlug: "publicis-groupe",
                backgroundImage: "/brands/thaifex-event.jpg"
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
                  style={{ willChange: 'transform', opacity: 0 }}
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Content at bottom, centered horizontally */}
              <div className="absolute inset-x-0 bottom-0 flex justify-center p-8 lg:p-12">
                <div className="space-y-4 max-w-2xl text-left">
                  <h3 className="text-4xl lg:text-6xl font-medium text-white leading-tight" style={{ fontFamily: 'Reckless, serif' }}>
                    {service.title}
                  </h3>
                  <p className="text-white text-lg lg:text-xl leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button variant="cta" size="default" className="inline-flex">
                    <span>Read Case Study</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-black">
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
            <Button variant="cta" size="default" type="submit" disabled={isSubmitting} className="inline-flex">
              {isSubmitting ? (
                "Opening email client..."
              ) : (
                <>
                  <span>Start A Conversation</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>
      </section>


    </div>
  );
};

export default Index;
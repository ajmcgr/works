import { useState, useEffect, useCallback, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, ArrowLeft, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
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

  const clientLogos = useMemo(() => [
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
  ], []);

  const [logoApi, setLogoApi] = useState<CarouselApi>();
  const [logoIndex, setLogoIndex] = useState(0);

  useEffect(() => {
    if (!logoApi) return;
    setLogoIndex(logoApi.selectedScrollSnap());
    logoApi.on("select", () => setLogoIndex(logoApi.selectedScrollSnap()));
  }, [logoApi]);

  const stopProp = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
  };

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
              style={{ filter: 'saturate(0.95) contrast(1)' }}
            />
          </div>

          {/* Matte flat darken for legibility */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

          {/* Bottom stack: headline/CTA above full-width carousel */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col">
            {/* Hero Content - same position/style as other sections */}
            <div className="flex justify-center p-8 lg:p-12">
              <div className="space-y-4 max-w-2xl w-full text-left">
                <h1 className="font-headline text-white text-4xl lg:text-6xl leading-tight">
                  Where Product Meets Creative
                </h1>

                <p className="text-white font-medium text-lg lg:text-xl leading-relaxed mb-6">
                  AI-powered PR and Influencer Marketing services that drive growth.
                </p>

                <Button variant="cta" size="default" className="inline-flex" asChild>
                  <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                    <span>Let's Work Together</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Client logos carousel - full width */}
            <div
              className="w-full px-12 md:px-14 lg:px-16 pb-6 lg:pb-8"
              onClick={stopProp}
            >
              <Carousel
                setApi={setLogoApi}
                opts={{ align: "start", loop: true, slidesToScroll: 1 }}
                className="w-full"
              >
                <CarouselContent className="-ml-6">
                  {clientLogos.map((logo, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-6 basis-1/3 md:basis-1/5 lg:basis-1/6"
                    >
                      <div className="flex items-center justify-center h-16 md:h-20">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="brightness-0 invert opacity-85 hover:opacity-100 transition-opacity max-h-full max-w-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  onClick={stopProp}
                  variant="ghost"
                  className="-left-1 md:left-0 h-9 w-9 md:h-11 md:w-11 rounded-full border-0 bg-transparent text-white/70 hover:text-white hover:bg-transparent transition-all duration-300 [&_svg]:h-5 [&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6 [&_svg]:transition-transform hover:[&_svg]:-translate-x-0.5"
                />
                <CarouselNext
                  onClick={stopProp}
                  variant="ghost"
                  className="-right-1 md:right-0 h-9 w-9 md:h-11 md:w-11 rounded-full border-0 bg-transparent text-white/70 hover:text-white hover:bg-transparent transition-all duration-300 [&_svg]:h-5 [&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5"
                />
              </Carousel>
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
                backgroundImage: "/brands/influencer-marketing/hero.jpg"
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
                url: "/case-study/byd", 
                delay: "300ms", 
                client: "BYD", 
                clientSlug: "byd",
                backgroundImage: "/clients/byd/hero.jpg"
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
                  style={{
                    willChange: 'transform',
                    opacity: 0,
                    filter: 'saturate(0.95) contrast(1)'
                  }}
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                />
              </div>

              {/* Matte flat darken for legibility */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />
              
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
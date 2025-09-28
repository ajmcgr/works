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
      <section className="min-h-screen flex flex-col justify-start md:justify-center items-center relative overflow-hidden pt-24 md:pt-16 pb-16" style={{ backgroundImage: 'url(/lovable-uploads/7274cc69-8d35-40ef-ad17-033424367b56.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className="relative z-10 text-center max-w-5xl mx-auto w-full px-4 md:px-6">

          <div className="mb-6 md:mb-8">
            <h1 className="font-headline text-white mb-4 md:mb-6 text-6xl md:text-7xl lg:text-8xl" style={{ letterSpacing: '0px', fontSize: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
              PR & Influencer Marketing for Ambitious Brands
            </h1>
            
            <p className="text-white font-medium text-lg md:text-xl mb-4 md:mb-6 max-w-3xl mx-auto">
              We run high-impact PR and influencer campaigns designed to scale ambitious brands — powered by AI.
            </p>
          </div>

          {/* Touch-native CTA */}
          <div>
            <Button 
              asChild 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
            >
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Let's Work Together <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Client Logos - Now directly below hero button */}
          <div className="mt-8 md:mt-10">
            <p className="text-white/70 text-sm mb-3 md:mb-6 text-center">Trusted by agencies and marketing teams worldwide</p>
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


      {/* How We Can Help Section */}
      <section className="py-24 px-6 overflow-hidden" style={{ background: 'var(--gradient-gray-subtle)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl animate-fade-in" style={{ letterSpacing: '0px' }}>
              How we can help
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto animate-fade-in">
              Comprehensive PR solutions designed to elevate your brand and drive meaningful engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { 
                title: "Media Relations", 
                description: "Strategic media outreach that gets your story heard by the right audiences at the right time.",
                url: "/case-study/ufc", 
                delay: "0ms", 
                client: "UFC", 
                clientSlug: "ufc",
                backgroundImage: "/clients/ufc/hero.jpg"
              },
              { 
                title: "Crisis Communication", 
                description: "Navigate challenging situations with expert crisis management and reputation protection.",
                url: "/case-study/oneplus", 
                delay: "100ms", 
                client: "OnePlus", 
                clientSlug: "oneplus",
                backgroundImage: "/clients/oneplus/hero.jpg"
              },
              { 
                title: "Brand Communications", 
                description: "Craft compelling brand narratives that resonate with your target market and drive engagement.",
                url: "/case-study/oppo", 
                delay: "200ms", 
                client: "OPPO", 
                clientSlug: "oppo",
                backgroundImage: "/clients/oppo/hero.jpg"
              },
              { 
                title: "Content Strategy", 
                description: "Develop content that educates, entertains, and converts across all marketing channels.",
                url: "/case-study/ogilvy", 
                delay: "300ms", 
                client: "Ogilvy", 
                clientSlug: "ogilvy",
                backgroundImage: "/clients/ogilvy/hero.jpg"
              },
              { 
                title: "Influencer Marketing", 
                description: "Connect with authentic voices that amplify your brand message to engaged communities.",
                url: "/case-study/weber-shandwick", 
                delay: "400ms", 
                client: "Weber Shandwick", 
                clientSlug: "weber-shandwick",
                backgroundImage: "/clients/weber-shandwick/hero.jpg"
              },
              { 
                title: "Event Management", 
                description: "Create memorable experiences that strengthen relationships and generate meaningful buzz.",
                url: "/case-study/publicis-groupe", 
                delay: "500ms", 
                client: "Publicis Groupe", 
                clientSlug: "publicis-groupe",
                backgroundImage: "/clients/publicis-groupe/hero.jpg"
              }
            ].map((service, index) => {
              const hasBackground = service.backgroundImage && service.backgroundImage.length > 0;
              
              return (
                <a 
                  key={index} 
                  href={service.url} 
                  className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-out focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  style={{ 
                    animationDelay: service.delay,
                    aspectRatio: '16/9'
                  }}
                  aria-label={`${service.title} — ${service.client}`}
                >
                  {/* Background Image */}
                  {hasBackground ? (
                    <img 
                      src={service.backgroundImage}
                      alt={`${service.client} background`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding={index < 3 ? "sync" : "async"}
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      index % 3 === 0 ? 'from-red-500 to-red-700' :
                      index % 3 === 1 ? 'from-blue-600 to-blue-800' :
                      'from-emerald-600 to-emerald-800'
                    } transition-transform duration-300 ease-out group-hover:scale-105`} />
                  )}
                  
                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  
                  {/* Content Container */}
                  <div className="absolute left-0 right-0 bottom-0 p-5 lg:p-6">
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base leading-snug line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium transition-all duration-300 group-hover:bg-white/30">
                          <span>Learn More</span>
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Loading Placeholder for Background Images */}
                  {hasBackground && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse opacity-0 group-[&:not(.loaded)]:opacity-100 transition-opacity duration-300" />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA to Services page */}
          <div className="text-center mt-20">
            <Button 
              asChild 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
            >
              <a href="/services">
                View All Services 
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>


      {/* Product Showcase - Scroll Reveals */}
      <section className="min-h-screen py-20 px-6 relative overflow-hidden" style={{ background: 'var(--gradient-dark-elegant)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-white mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ letterSpacing: '0px' }}>
              Our Process
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              How we engineer influence that sticks
            </p>
          </div>

          {/* Tool Cards - Vertical Stack Layout */}
          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            {[
              {
                name: "Contact Us",
                tagline: "Start the conversation",
                description: "Tell us your ambitions. We listen, understand, and identify if we're the right fit for your vision.",
                number: "1",
                gradient: "from-primary to-blue-600",
                link: "/contact"
              },
              {
                name: "Discovery Call", 
                tagline: "Deep dive strategy",
                description: "30-minute strategy session. Market analysis. Competitive landscape. Narrative architecture blueprint.",
                number: "2",
                gradient: "from-primary to-purple-600",
                link: "https://cal.com/works",
                external: true
              },
              {
                name: "Sign & Go",
                tagline: "Execution mode",
                description: "Contracts signed. Team deployed. Influence engineering begins. Results start flowing within 30 days.",
                number: "3",
                gradient: "from-red-500 to-orange-600",
                link: "/contact"
              }
            ].map((tool, index) => (
              <div key={index}>
                <a 
                  href={tool.link}
                  {...(tool.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="block"
                >
                  <div className="group bg-white rounded-3xl p-8 shadow-md h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-md">
                        <span className="text-2xl font-bold text-white">{tool.number}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2" style={{ letterSpacing: '0px' }}>{tool.name}</h3>
                    <p className="text-muted-foreground text-lg mb-4">{tool.tagline}</p>
                    <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          {/* Contact Us CTA */}
          <div className="text-center mt-16">
            <Button 
              asChild 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
            >
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Let's Work Together <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Reel - Touch Native */}
      <section className="py-20 px-6" style={{ background: 'var(--gradient-blue-mist)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ letterSpacing: '0px' }}>
              Case Studies
            </h2>
            <p className="text-muted-foreground text-xl">
              Real campaigns. Real results. Real impact.
            </p>
          </div>

          {/* Case study cards - Vertical Stack */}
          <div className="flex flex-col gap-8 max-w-3xl mx-auto">
            <a href="/case-study/ufc" className="block">
              <div className="group bg-white rounded-3xl p-8 shadow-xl touch-hover hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-bold text-foreground text-2xl" style={{ letterSpacing: '0px' }}>UFC</h4>
                    <p className="text-muted-foreground text-sm">Global Event Launch</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Positioned UFC's expansion into new markets with strategic narrative that dominated sports media. 
                  Our crisis-proof architecture handled regulatory and cultural challenges across 47 countries.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Global Coverage</span>
                    <span className="font-bold text-foreground">ESPN, BBC, Fox Sports</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Viewership Impact</span>
                    <span className="font-bold text-foreground">+340% in new markets</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Media Sentiment</span>
                    <span className="font-bold text-foreground">92% positive</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="/case-study/oneplus" className="block">
              <div className="group bg-white rounded-3xl p-8 shadow-xl touch-hover hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-bold text-foreground text-2xl" style={{ letterSpacing: '0px' }}>OnePlus</h4>
                    <p className="text-muted-foreground text-sm">Product Launch Campaign</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1" />
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Engineered OnePlus's "Never Settle" narrative for global smartphone launch. Our influence network 
                  orchestration turned tech reviewers into brand advocates, driving unprecedented pre-order numbers.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pre-orders Day 1</span>
                    <span className="font-bold text-foreground">847K units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tech Review Score</span>
                    <span className="font-bold text-foreground">9.2/10 average</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Market Share Gain</span>
                    <span className="font-bold text-foreground">+23% in 6 months</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* CTA to Customers page */}
          <div className="text-center mt-16">
            <Button 
              asChild 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
            >
              <a href="/customers">
                View All Customers <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

        </div>
      </section>



      {/* Client Recommendations Section */}
      <section className="py-20 px-6" style={{ background: 'var(--gradient-blue-deep)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-white mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ letterSpacing: '0px' }}>
              What clients say
            </h2>
            <p className="text-white/70 text-xl">
              The words that matter most
            </p>
          </div>

          <div className="space-y-12">
            <a href="/case-study/ufc" className="block">
              <div className="group bg-white rounded-3xl p-12 shadow-xl touch-hover hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
                      <img 
                        src="/lovable-uploads/f2bdfdc8-7b25-451a-b578-82b4b38994a1.png" 
                        alt="Dana White" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg" style={{ letterSpacing: '0px' }}>Dana White</h4>
                      <p className="text-muted-foreground">President, UFC</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1" />
                  </div>
                </div>
                <blockquote className="text-xl text-foreground leading-relaxed mb-6">
                  "Works doesn't just handle our PR—they engineer our global narrative. When we expand into new markets, 
                  they make sure we're not just arriving, we're conquering."
                </blockquote>
                <div className="text-muted-foreground font-medium">
                  UFC Global Expansion Campaign
                </div>
              </div>
            </a>

            <a href="/case-study/oneplus" className="block">
              <div className="group bg-white rounded-3xl p-12 shadow-xl touch-hover hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
                      <img 
                        src="/lovable-uploads/e851873c-e437-45e4-ad7e-0b9c7d28d0f0.png" 
                        alt="Pete Lau" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg" style={{ letterSpacing: '0px' }}>Pete Lau</h4>
                      <p className="text-muted-foreground">CEO, OnePlus</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1" />
                  </div>
                </div>
                <blockquote className="text-xl text-foreground leading-relaxed mb-6">
                  "They turned our product launch into a cultural moment. The way they orchestrated influence across 
                  every touchpoint—from tech reviewers to lifestyle publications—was masterful."
                </blockquote>
                <div className="text-muted-foreground font-medium">
                  OnePlus Flagship Launch
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="py-20 px-6" style={{ background: 'var(--gradient-navy-rich)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-white mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ letterSpacing: '0px' }}>
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


    </div>
  );
};

export default Index;
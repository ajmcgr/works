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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = Math.floor(scrollY / window.innerHeight);
      setCurrentSection(section);
      
      // Show floating CTA after scrolling past hero section
      setShowFloatingCTA(scrollY > window.innerHeight * 0.8);
      
      // Reveal animations on scroll
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          reveal.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-4 pb-8 px-4 md:px-6">
        {/* Kinetic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-stone to-background">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-electric/10 rounded-full kinetic-float blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent-punch/5 rounded-full kinetic-pulse blur-lg"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
          {/* Kinetic typography */}
          <div className="mb-6 md:mb-8">
            <h1 className="font-headline text-foreground mb-4 md:mb-6 kinetic-slide in-view text-5xl md:text-6xl lg:text-7xl">
              PR & Influencer Marketing for Ambitious Brands.
            </h1>
            
            <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-12 max-w-3xl mx-auto kinetic-slide in-view" style={{ animationDelay: '0.3s' }}>
              We run high-impact AI enabled PR and influencer campaigns designed to scale ambitious brands. From strategic media placements and thought leadership to influencer partnerships and brand positioning,  we prioritize visibility, credibility, and revenue growth.
            </p>
          </div>

          {/* Touch-native CTA */}
          <div className="kinetic-slide in-view" style={{ animationDelay: '0.6s' }}>
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
          <div className="mt-8 md:mt-10" style={{ animationDelay: '0.9s' }}>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8 lg:gap-12 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
              <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e3245375-9a24-4ea7-89aa-f37c5c59078f.png" 
                  alt="UFC" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8ef86b72-a30c-418e-8a3c-ae16ccfa0913.png" 
                  alt="OnePlus" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/4329826e-9683-4f34-b0ad-26a739aef474.png" 
                  alt="OPPO" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c9739784-e9ac-48c8-83d5-360e933fea0c.png" 
                  alt="Ogilvy" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b46ae86a-6dd8-4b8a-a25c-94658108c395.png" 
                  alt="Weber Shandwick" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="eager"
                />
              </div>
              <div className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/37a5a0e4-49f5-4885-8cef-be0fd36337da.png" 
                  alt="Publicis Groupe" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* We are Works Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="font-headline text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl">
              We are Works
            </h2>
          </div>
          
          <div className="text-left max-w-3xl mx-auto">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed reveal-on-scroll">
              <p>
                We're the PR & Influencer Marketing agency built for founders, rebels, and category creators.
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
            
            <div className="text-center mt-12 reveal-on-scroll">
              <Button 
                asChild 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
              >
                <a href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="font-headline text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl">
              How we can help
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Comprehensive PR solutions designed to elevate your brand and drive meaningful engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Media Relations",
                description: "Build and maintain relationships with key journalists, influencers, and media outlets to secure strategic coverage.",
                features: ["Press Release Distribution", "Media Outreach", "Journalist Relationships", "Story Pitching"]
              },
              {
                title: "Crisis Communication", 
                description: "Rapid response strategies to protect and restore your reputation during challenging situations.",
                features: ["24/7 Crisis Support", "Reputation Management", "Stakeholder Communication", "Media Training"]
              },
              {
                title: "Brand Communications",
                description: "Develop consistent messaging that builds trust and strengthens your brand across all touchpoints.",
                features: ["Message Development", "Brand Positioning", "Thought Leadership", "Executive Communications"]
              },
              {
                title: "Content Strategy",
                description: "Create compelling narratives and content that engage your audience and drive meaningful conversations.",
                features: ["Content Planning", "Storytelling", "Editorial Calendar", "Multi-Channel Distribution"]
              },
              {
                title: "Influencer Marketing",
                description: "Connect with influential voices that authentically align with your brand to amplify your message.",
                features: ["Influencer Identification", "Partnership Management", "Campaign Strategy", "Performance Tracking"]
              },
              {
                title: "Event Management",
                description: "Create memorable experiences that strengthen relationships and position your brand as an industry leader.",
                features: ["Event Planning", "Media Events", "Product Launches", "Conference Management"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg reveal-on-scroll touch-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA to Services page */}
          <div className="text-center mt-16 reveal-on-scroll">
            <Button 
              asChild 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
            >
              <a href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>


      {/* Product Showcase - Scroll Reveals */}
      <section className="min-h-screen py-20 px-6 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="font-headline text-background mb-6 text-3xl md:text-4xl lg:text-5xl">
              Our Process
            </h2>
            <p className="text-background/70 text-xl max-w-2xl mx-auto">
              How we engineer influence that sticks
            </p>
          </div>

          {/* Tool Cards - Desktop Row Layout */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                name: "Contact Us",
                tagline: "Start the conversation",
                description: "Tell us your ambitions. We listen, understand, and identify if we're the right fit for your vision.",
                number: "1",
                gradient: "from-primary to-blue-600"
              },
              {
                name: "Discovery Call", 
                tagline: "Deep dive strategy",
                description: "30-minute strategy session. Market analysis. Competitive landscape. Narrative architecture blueprint.",
                number: "2",
                gradient: "from-primary to-purple-600"
              },
              {
                name: "Sign & Go",
                tagline: "Execution mode",
                description: "Contracts signed. Team deployed. Influence engineering begins. Results start flowing within 30 days.",
                number: "3",
                gradient: "from-red-500 to-orange-600"
              }
            ].map((tool, index) => (
              <div key={index} className="reveal-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-background/5 backdrop-blur-sm rounded-3xl p-8 touch-hover h-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <span className="text-2xl font-bold text-foreground">{tool.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-background mb-2">{tool.name}</h3>
                  <p className="text-background/70 text-lg mb-4">{tool.tagline}</p>
                  <p className="text-background/60 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Contact Us CTA */}
          <div className="text-center mt-16 reveal-on-scroll">
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
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="font-headline text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl">
              Case Studies
            </h2>
            <p className="text-muted-foreground text-xl">
              Real campaigns. Real results. Real impact.
            </p>
          </div>

          {/* Mobile-first case study cards */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl reveal-on-scroll touch-hover">
              <div className="flex items-center mb-6">
                <div>
                  <h4 className="font-bold text-foreground text-2xl">UFC</h4>
                  <p className="text-muted-foreground text-sm">Global Event Launch</p>
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

            <div className="bg-white rounded-3xl p-8 shadow-xl reveal-on-scroll touch-hover" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div>
                  <h4 className="font-bold text-foreground text-2xl">OnePlus</h4>
                  <p className="text-muted-foreground text-sm">Product Launch Campaign</p>
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
          </div>

          {/* CTA to Work page */}
          <div className="text-center mt-16 reveal-on-scroll">
            <Button 
              asChild 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
            >
              <a href="/resources/our-customers">
                View Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

        </div>
      </section>



      {/* Client Recommendations Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="font-headline text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl">
              What clients say
            </h2>
            <p className="text-muted-foreground text-xl">
              The words that matter most
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-3xl p-12 shadow-xl reveal-on-scroll touch-hover">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
                  <img 
                    src="/lovable-uploads/f2bdfdc8-7b25-451a-b578-82b4b38994a1.png" 
                    alt="Dana White" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Dana White</h4>
                  <p className="text-muted-foreground">President, UFC</p>
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

            <div className="bg-white rounded-3xl p-12 shadow-xl reveal-on-scroll touch-hover" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
                  <img 
                    src="/lovable-uploads/e851873c-e437-45e4-ad7e-0b9c7d28d0f0.png" 
                    alt="Pete Lau" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Pete Lau</h4>
                  <p className="text-muted-foreground">CEO, OnePlus</p>
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

            <div className="bg-white rounded-3xl p-12 shadow-xl reveal-on-scroll touch-hover" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
                  <img 
                    src="/lovable-uploads/5c5a6c05-1222-4931-96e1-31741231b19f.png" 
                    alt="Tina Sharkey" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Tina Sharkey</h4>
                  <p className="text-muted-foreground">Former CEO, Sheryl Sandberg & Associates</p>
                </div>
              </div>
              <blockquote className="text-xl text-foreground leading-relaxed mb-6">
                "What sets Works apart is their strategic thinking. They don't just execute campaigns—
                they architect influence systems that compound over time. The ROI speaks for itself."
              </blockquote>
              <div className="text-muted-foreground font-medium">
                Executive Brand Positioning
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="font-headline text-black mb-6 text-3xl md:text-4xl lg:text-5xl">
              Ready to shape your story?
            </h2>
            <p className="text-gray-600 text-xl">
              Let's discuss how strategic public relations can elevate your brand.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  style={{ borderRadius: '12px' }}
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
                  style={{ borderRadius: '12px' }}
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
                style={{ borderRadius: '12px' }}
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
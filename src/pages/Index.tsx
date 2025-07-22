import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Play, Mic, Database, Bot, Zap } from "lucide-react";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section = Math.floor(scrollY / window.innerHeight);
      setCurrentSection(section);
      
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

  return (
    <div className="min-h-screen">
      {/* Full-Bleed Hero - Mobile First */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        {/* Kinetic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background-stone to-background">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-electric/10 rounded-full kinetic-float blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent-punch/5 rounded-full kinetic-pulse blur-lg"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Kinetic typography */}
          <div className="mb-8">
            <h1 className="font-headline text-foreground mb-6 kinetic-slide in-view">
              Influence,
              <br />
              Engineered.
            </h1>
            
            <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto kinetic-slide in-view" style={{ animationDelay: '0.3s' }}>
              We don't pitch brands.
              <br />
              We make them unignorable.
            </p>
          </div>

          {/* Touch-native CTA */}
          <div className="kinetic-slide in-view" style={{ animationDelay: '0.6s' }}>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-foreground to-foreground hover:from-accent-electric hover:to-accent-electric text-background px-12 py-6 text-lg font-semibold rounded-full touch-target transition-all duration-500 transform hover:scale-105"
            >
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Let's Work
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 swipe-indicator">
            <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
          </div>
        </div>
      </section>

      {/* Product Showcase - Scroll Reveals */}
      <section className="min-h-screen py-20 px-6 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="font-headline text-background mb-6">
              Our Process
            </h2>
            <p className="text-background/70 text-xl max-w-2xl mx-auto">
              How we engineer influence that sticks
            </p>
          </div>

          {/* Tool Cards - Mobile First Grid */}
          <div className="space-y-12">
            {[
              {
                name: "Contact Us",
                tagline: "Start the conversation",
                description: "Tell us your ambitions. We listen, understand, and identify if we're the right fit for your vision.",
                icon: Database,
                gradient: "from-accent-electric to-blue-600"
              },
              {
                name: "Discovery Call", 
                tagline: "Deep dive strategy",
                description: "90-minute strategy session. Market analysis. Competitive landscape. Narrative architecture blueprint.",
                icon: Bot,
                gradient: "from-accent-electric to-purple-600"
              },
              {
                name: "Sign & Go",
                tagline: "Execution mode",
                description: "Contracts signed. Team deployed. Influence engineering begins. Results start flowing within 30 days.",
                icon: Mic,
                gradient: "from-red-500 to-orange-600"
              }
            ].map((tool, index) => (
              <div key={index} className={`reveal-on-scroll ${index % 2 === 0 ? '' : 'md:ml-auto'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-background/5 backdrop-blur-sm rounded-3xl p-8 max-w-md touch-hover">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tool.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-background mb-2">{tool.name}</h3>
                  <p className="text-background/70 text-lg mb-4">{tool.tagline}</p>
                  <p className="text-background/60 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Reel - Touch Native */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="font-headline text-foreground mb-6">
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
                <div className="w-12 h-12 bg-gradient-to-br from-accent-electric to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">UFC</h4>
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">OnePlus</h4>
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

          {/* Client Logos Section */}
          <div className="mt-20 reveal-on-scroll">
            <div className="text-center mb-12">
              <p className="text-muted-foreground text-lg font-medium">Trusted by ambitious brands</p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="w-20 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e3245375-9a24-4ea7-89aa-f37c5c59078f.png" 
                  alt="UFC" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="w-20 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8ef86b72-a30c-418e-8a3c-ae16ccfa0913.png" 
                  alt="OnePlus" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="w-20 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/4329826e-9683-4f34-b0ad-26a739aef474.png" 
                  alt="OPPO" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="w-20 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c9739784-e9ac-48c8-83d5-360e933fea0c.png" 
                  alt="Ogilvy" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="w-20 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b46ae86a-6dd8-4b8a-a25c-94658108c395.png" 
                  alt="Weber Shandwick" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="w-20 h-12 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/37a5a0e4-49f5-4885-8cef-be0fd36337da.png" 
                  alt="Publicis Groupe" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Recommendations Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="font-headline text-foreground mb-6">
              What clients say
            </h2>
            <p className="text-muted-foreground text-xl">
              The words that matter most
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-3xl p-12 shadow-xl reveal-on-scroll touch-hover">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-electric to-blue-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Dana White</h4>
                  <p className="text-muted-foreground">President, UFC</p>
                </div>
              </div>
              <blockquote className="text-xl text-foreground leading-relaxed mb-6">
                "Works.xyz doesn't just handle our PR—they engineer our global narrative. When we expand into new markets, 
                they make sure we're not just arriving, we're conquering."
              </blockquote>
              <div className="text-muted-foreground font-medium">
                UFC Global Expansion Campaign
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-xl reveal-on-scroll touch-hover" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-xl">P</span>
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
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Tina Sharkey</h4>
                  <p className="text-muted-foreground">Former CEO, Sheryl Sandberg & Associates</p>
                </div>
              </div>
              <blockquote className="text-xl text-foreground leading-relaxed mb-6">
                "What sets Works.xyz apart is their strategic thinking. They don't just execute campaigns—
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
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="font-headline text-background mb-6">
              Ready to be unignorable?
            </h2>
            <p className="text-background/70 text-xl">
              Tell us your story. We'll engineer the influence.
            </p>
          </div>

          <form className="space-y-6 reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-background/10 border border-background/20 rounded-2xl px-6 py-4 text-background placeholder-background/50 focus:outline-none focus:border-accent-electric transition-colors touch-target"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-background/10 border border-background/20 rounded-2xl px-6 py-4 text-background placeholder-background/50 focus:outline-none focus:border-accent-electric transition-colors touch-target"
                />
              </div>
            </div>
            
            <div>
              <input 
                type="text" 
                placeholder="Company name" 
                className="w-full bg-background/10 border border-background/20 rounded-2xl px-6 py-4 text-background placeholder-background/50 focus:outline-none focus:border-accent-electric transition-colors touch-target"
              />
            </div>
            
            <div>
              <textarea 
                placeholder="Tell us about your ambitions..." 
                rows={4}
                className="w-full bg-background/10 border border-background/20 rounded-2xl px-6 py-4 text-background placeholder-background/50 focus:outline-none focus:border-accent-electric transition-colors resize-none"
              ></textarea>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gradient-to-r from-accent-electric to-blue-600 hover:from-blue-600 hover:to-accent-electric text-white py-6 text-lg font-semibold rounded-2xl touch-target transition-all duration-500"
            >
              Start the Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-6">
        <div className="max-w-md mx-auto">
          <Button 
            asChild 
            className="w-full bg-gradient-to-r from-foreground to-accent-electric hover:from-accent-electric hover:to-foreground text-background py-4 text-lg font-semibold rounded-full shadow-xl touch-target transition-all duration-500"
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Let's Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Spacer for sticky footer */}
      <div className="h-24"></div>
    </div>
  );
};

export default Index;
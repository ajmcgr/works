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
                name: "Strategic Intelligence",
                tagline: "Know before you go",
                description: "Deep market analysis. Competitive positioning. Narrative architecture that positions you as inevitable.",
                icon: Database,
                gradient: "from-accent-electric to-blue-600"
              },
              {
                name: "Precision Execution", 
                tagline: "Every story placed",
                description: "AI-powered targeting. Human relationship craft. Media coverage that compounds over time.",
                icon: Bot,
                gradient: "from-accent-electric to-purple-600"
              },
              {
                name: "Scale & Amplify",
                tagline: "Influence that spreads",
                description: "Multi-channel orchestration. Cross-platform amplification. Results that get competitors talking.",
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
                  <h4 className="font-bold text-foreground">TechFlow</h4>
                  <p className="text-muted-foreground text-sm">Fintech Series C Launch</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Positioned TechFlow as the "future of payments" during their $85M Series C. 
                Our narrative engineering placed them in 47 countries, driving massive pipeline impact.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tier-1 Coverage</span>
                  <span className="font-bold text-foreground">TechCrunch, Forbes, WSJ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pipeline Impact</span>
                  <span className="font-bold text-foreground">$12.3M in 90 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Global Reach</span>
                  <span className="font-bold text-foreground">47 countries</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl reveal-on-scroll touch-hover" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">NeuralLabs</h4>
                  <p className="text-muted-foreground text-sm">AI Startup Product Launch</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Launched NeuralLabs' AI platform with strategic media blitz. Our crisis-proof 
                architecture helped them navigate regulatory scrutiny while maintaining momentum.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Launch Day Signups</span>
                  <span className="font-bold text-foreground">25,000+ users</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valuation Increase</span>
                  <span className="font-bold text-foreground">3.2x in 6 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Media Sentiment</span>
                  <span className="font-bold text-foreground">94% positive</span>
                </div>
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
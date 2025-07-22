import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Globe, Zap, Database, Bot, Mic, TrendingUp, Award, Clock, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// TypeScript declaration for HubSpot global object
declare global {
  interface Window {
    hbspt: any;
  }
}

const Index = () => {
  const { toast } = useToast();

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

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-bleed background with subtle animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(214_100%_55%_/_0.03)_0%,transparent_70%)]"></div>
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-accent-electric/5 to-accent-coral/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-r from-accent-coral/5 to-accent-electric/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-7xl">
          {/* Pre-headline */}
          <div className="mb-8 animate-fade-in-up">
            <span className="inline-block bg-white/60 backdrop-blur-sm border border-stone/30 rounded-full px-6 py-3 text-sm font-medium text-charcoal-light tracking-wide uppercase">
              The launch partner your brand deserves
            </span>
          </div>
          
          {/* Main headline - Apple-level hierarchy */}
          <h1 className="font-headline text-charcoal leading-none mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            PR & Influence,
            <br />
            <span className="bg-gradient-to-r from-accent-electric to-accent-coral bg-clip-text text-transparent">
              Engineered
            </span>
          </h1>
          
          {/* Supporting copy - confident and concise */}
          <p className="text-charcoal-light leading-relaxed mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            We build the stories, relationships, and platforms that turn ambitious brands into household names. 
            Less pitching, more engineering. Less hoping, more knowing.
          </p>

          {/* CTAs - Premium styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-accent-electric to-accent-electric hover:from-accent-electric/90 hover:to-accent-electric/90 text-white px-12 py-6 text-lg font-semibold rounded-2xl shadow-premium hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Start Your Campaign
                <ArrowRight className="ml-3 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="ghost"
              size="lg"
              className="text-charcoal hover:text-charcoal/80 px-12 py-6 text-lg font-medium hover:bg-stone/30 rounded-2xl transition-all duration-300"
            >
              <a href="#our-work" className="flex items-center">
                <Play className="mr-3 h-5 w-5" />
                See Our Work
              </a>
            </Button>
          </div>

          {/* Premium stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {[
              { number: "200+", label: "Brands Launched", icon: Target },
              { number: "50M+", label: "Impressions Monthly", icon: TrendingUp },
              { number: "47", label: "Countries Reached", icon: Globe },
              { number: "2.3x", label: "Avg Pipeline Growth", icon: Award },
            ].map((stat, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-stone to-warm-gray rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-cinematic">
                  <stat.icon className="w-7 h-7 text-charcoal" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">{stat.number}</div>
                <div className="text-sm text-charcoal-light font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed services section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-headline text-charcoal mb-6">
              What we build
            </h2>
            <p className="text-charcoal-light max-w-4xl mx-auto leading-relaxed">
              We don't just run campaigns. We architect influence systems that compound over time, 
              combining strategic services with proprietary tools that give you unfair advantages.
            </p>
          </div>

          {/* Services grid - Monks-level storytelling */}
          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            {[
              {
                icon: Globe,
                title: "Global Narrative Engineering",
                description: "We construct stories that transcend borders. Every narrative is designed to establish inevitable market position across continents.",
                gradient: "from-accent-electric to-accent-electric/80"
              },
              {
                icon: Zap,
                title: "Crisis-Proof Architecture",
                description: "Reputation systems built to withstand anything. When others panic, your brand emerges stronger with our engineered response protocols.",
                gradient: "from-accent-coral to-accent-coral/80"
              },
              {
                icon: Users,
                title: "Influence Network Orchestration",
                description: "Beyond partnerships—we build influence ecosystems. Authentic advocacy at scale through strategic relationship architecture.",
                gradient: "from-charcoal to-charcoal-light"
              }
            ].map((service, index) => (
              <div key={index} className="group hover-lift">
                <div className="bg-white rounded-3xl p-10 border border-stone/20 shadow-premium group-hover:shadow-cinematic">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-8`}>
                    <service.icon className="w-9 h-9 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-6 leading-tight">{service.title}</h3>
                  <p className="text-charcoal-light leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Platform showcase - full-bleed */}
          <div className="bg-gradient-to-br from-charcoal to-charcoal-light rounded-3xl overflow-hidden shadow-cinematic">
            <div className="p-16 text-white">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h3 className="text-4xl font-headline mb-6 text-white">
                  The platform that scales influence
                </h3>
                <p className="text-white/80 text-xl leading-relaxed">
                  Our proprietary tools give you the same advantages as billion-dollar brands. 
                  Built by operators, for operators who move fast.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {[
                  {
                    name: "Media AI",
                    description: "Real-time press intelligence with 200,000+ verified contacts. AI-powered pitch matching that gets you in front of the right journalists, every time.",
                    icon: Database,
                    mockup: "/lovable-uploads/295e7672-68ab-4894-8f39-da63a4aa82e9.png"
                  },
                  {
                    name: "Write AI",
                    description: "AI copywriting that learns your brand voice. Generate press releases, pitches, and content that sounds like you—but performs like a 20-year PR veteran.",
                    icon: Bot,
                    mockup: "/lovable-uploads/295e7672-68ab-4894-8f39-da63a4aa82e9.png"
                  }
                ].map((tool, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                        <tool.icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white">{tool.name}</h4>
                    </div>
                    <p className="text-white/80 leading-relaxed mb-8">{tool.description}</p>
                    
                    {/* Tool mockup placeholder */}
                    <div className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                        <p className="text-white/60 text-sm">Interactive Demo</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client showcase - editorial style */}
      <section className="py-32 bg-gradient-to-b from-background-secondary to-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-headline text-charcoal mb-6">
              Trusted by brands that move fast
            </h2>
            <p className="text-charcoal-light max-w-4xl mx-auto">
              From seed-stage startups to unicorns—we've engineered influence for brands 
              that refuse to blend in. Here's how we help ambitious companies win.
            </p>
          </div>

          {/* Featured case study */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-cinematic mb-20 hover-lift">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-16">
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-accent-electric mr-3" />
                  <span className="text-charcoal-light font-medium uppercase tracking-wide text-sm">Featured Case Study</span>
                </div>
                <h3 className="text-3xl font-bold text-charcoal mb-6 leading-tight">
                  How we helped a fintech unicorn dominate three continents
                </h3>
                <p className="text-charcoal-light leading-relaxed mb-8">
                  From TechCrunch to Financial Times—our 90-day campaign generated 2,847 mentions 
                  across 47 countries, driving $12.3M in attributed pipeline and establishing 
                  thought leadership that competitors still chase.
                </p>
                <div className="flex items-center gap-8 mb-8">
                  <div>
                    <div className="text-2xl font-bold text-charcoal">2,847</div>
                    <div className="text-sm text-charcoal-light uppercase tracking-wide">Media Mentions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-charcoal">$12.3M</div>
                    <div className="text-sm text-charcoal-light uppercase tracking-wide">Pipeline Attributed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-charcoal">47</div>
                    <div className="text-sm text-charcoal-light uppercase tracking-wide">Countries</div>
                  </div>
                </div>
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-xl font-semibold"
                >
                  <a href="/work">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-stone to-warm-gray flex items-center justify-center p-16">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-premium">
                    <TrendingUp className="w-10 h-10 text-charcoal" />
                  </div>
                  <p className="text-charcoal-light font-medium">Interactive case study dashboard</p>
                </div>
              </div>
            </div>
          </div>

          {/* HYPEWORKS podcast teaser */}
          <div className="bg-gradient-to-r from-accent-coral to-accent-coral/80 rounded-3xl p-16 text-white text-center shadow-cinematic hover-lift">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Mic className="w-8 h-8 mr-3" />
                <span className="text-white/80 font-medium uppercase tracking-wide">HYPEWORKS Podcast</span>
              </div>
              <h3 className="text-4xl font-bold mb-6">
                The stories behind the stories
              </h3>
              <p className="text-white/90 text-xl leading-relaxed mb-8">
                Go behind the scenes with founders, CMOs, and the campaigns that changed everything. 
                New episodes every Tuesday.
              </p>
              <Button 
                asChild
                variant="secondary"
                size="lg"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-xl font-semibold"
              >
                <a href="#" className="flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Listen Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Cinematic */}
      <section className="py-32 bg-charcoal text-white overflow-hidden relative">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-to-r from-accent-electric/10 to-accent-coral/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2 className="font-headline text-white mb-8">
            Ready to engineer your influence?
          </h2>
          <p className="text-white/80 text-xl leading-relaxed mb-16 max-w-3xl mx-auto">
            Join 200+ funded startups who've chosen Works.xyz to architect their path to 
            thought leadership. Let's build something legendary.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-accent-electric to-accent-electric hover:from-accent-electric/90 hover:to-accent-electric/90 text-white px-16 py-8 text-xl font-semibold rounded-2xl shadow-premium hover:shadow-hover transition-all duration-300 hover:-translate-y-2"
            >
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Let's Build Together
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-16 py-8 text-xl font-semibold rounded-2xl transition-all duration-300"
            >
              <a href="/work">
                View Our Work
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
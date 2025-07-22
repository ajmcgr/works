import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Play, Users, Globe, Zap, CheckCircle, Star, TrendingUp, Database, Bot } from "lucide-react";
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
        border: 1px solid hsl(32 6% 88%);
        border-radius: 0.75rem;
        font-size: 0.875rem;
        background: white;
        transition: all 0.2s ease;
      }
      #hubspot-form-inline .hs-input:focus {
        outline: none;
        border-color: hsl(214 100% 58%);
        box-shadow: 0 0 0 3px hsl(214 100% 58% / 0.1);
      }
      #hubspot-form-inline .hs-button {
        height: 3rem;
        padding: 0 1.5rem;
        background: hsl(214 100% 58%);
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
        background: hsl(214 100% 52%);
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

  const stats = [
    { number: "150+", label: "Brands Amplified" },
    { number: "50M+", label: "Impressions Generated" },
    { number: "25+", label: "Countries Reached" },
    { number: "95%", label: "Client Retention" },
  ];

  const services = [
    {
      icon: Globe,
      title: "Global Media Relations",
      description: "Strategic press campaigns that transcend borders. We place your story in tier-1 publications worldwide."
    },
    {
      icon: Zap,
      title: "Crisis Communication",
      description: "When reputation is on the line, we deploy rapid-response strategies that protect and restore brand equity."
    },
    {
      icon: Users,
      title: "Influencer Orchestration",
      description: "Beyond basic partnerships—we architect influence networks that drive authentic brand advocacy."
    },
    {
      icon: TrendingUp,
      title: "Narrative Engineering",
      description: "We don't just tell stories. We construct compelling narratives that position your brand as inevitable."
    }
  ];

  const tools = [
    {
      name: "Media AI",
      description: "Real-time press database with 150,000+ verified journalist contacts, powered by AI matching.",
      icon: Database,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Write AI",
      description: "AI copywriting assistant that generates press releases, pitches, and content in your brand voice.",
      icon: Bot,
      gradient: "from-coral-500 to-coral-600"
    }
  ];

  const clients = [
    "Funded startups scaling globally",
    "Challenger brands disrupting industries", 
    "Innovation-led organizations",
    "Tech companies seeking thought leadership"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-secondary to-background">
        {/* Subtle geometric elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-coral-100/30 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-coral-100/30 to-blue-100/30 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] border border-warm-gray/20 rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
          <div className="mb-6">
            <span className="inline-block bg-white/80 backdrop-blur-sm border border-warm-gray/30 rounded-full px-4 py-2 text-sm font-medium text-charcoal mb-8">
              Trusted by 150+ funded startups globally
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline text-charcoal leading-tight mb-8 tracking-tight">
            Turn your startup into a 
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-coral-600 bg-clip-text text-transparent">
              media powerhouse
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cool-gray leading-relaxed mb-12 max-w-3xl mx-auto font-normal">
            Global PR services engineered with AI precision. We don't just earn media—we architect influence that scales your brand across continents.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
            >
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-2 border-coral-400 text-coral-600 hover:bg-coral-50 px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              <a href="#how-we-work">
                See How It Works
                <Play className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-charcoal mb-2">{stat.number}</div>
                <div className="text-sm text-cool-gray font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gradient-to-b from-background-secondary to-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline text-charcoal mb-6">
              What we do
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
              We combine decades of PR expertise with cutting-edge AI tools to deliver influence at unprecedented scale and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-warm-gray/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-coral-500 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal mb-4">{service.title}</h3>
                <p className="text-cool-gray leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* AI Tools Showcase */}
          <div className="bg-white rounded-3xl p-12 border border-warm-gray/20 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-headline text-charcoal mb-4">
                Powered by AI
              </h3>
              <p className="text-lg text-cool-gray">
                Our proprietary tools give you unfair advantages in media relations and content creation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="relative">
                  <div className={`bg-gradient-to-br ${tool.gradient} rounded-2xl p-8 text-white`}>
                    <div className="flex items-center mb-4">
                      <tool.icon className="w-8 h-8 mr-3" />
                      <h4 className="text-2xl font-bold">{tool.name}</h4>
                    </div>
                    <p className="text-white/90 leading-relaxed">{tool.description}</p>
                    <div className="mt-6">
                      <Button 
                        variant="secondary" 
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      >
                        Request Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We've Helped Section */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline mb-6">
              Who we've helped
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From seed-stage startups to unicorns, we've engineered influence for brands that dare to think differently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {clients.map((client, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <p className="text-white font-medium">{client}</p>
              </div>
            ))}
          </div>

          {/* Case Study Preview */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-white/80 font-medium">Featured Case Study</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">
                How we helped a Series B fintech secure tier-1 coverage in 47 countries
              </h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                From TechCrunch to Financial Times, our 90-day campaign generated 847 mentions, 
                driving $2.3M in attributed pipeline and establishing thought leadership across three continents.
              </p>
              <Button 
                asChild
                className="bg-white text-charcoal hover:bg-white/90 rounded-xl font-semibold"
              >
                <a href="/case-studies">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-24 bg-gradient-to-b from-white to-background-secondary">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline text-charcoal mb-6">
              How we work
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Our battle-tested methodology combines strategic thinking, creative execution, and relentless optimization.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Strategic Intelligence",
                description: "Deep-dive analysis of your market position, competitive landscape, and untapped opportunities. We map your influence trajectory before the first pitch is sent."
              },
              {
                step: "02", 
                title: "Narrative Architecture",
                description: "We construct compelling storylines that position your brand as inevitable. Every angle, hook, and message is designed to break through the noise."
              },
              {
                step: "03",
                title: "Precision Execution",  
                description: "AI-powered media targeting meets human creativity. We place your stories with surgical precision while maintaining authentic relationship dynamics."
              },
              {
                step: "04",
                title: "Scale & Optimize",
                description: "Real-time performance tracking and rapid iteration. We double down on what works and pivot away from what doesn't—fast."
              }
            ].map((phase, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-coral-500 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-charcoal mb-4">{phase.title}</h3>
                  <p className="text-cool-gray text-lg leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video placeholder */}
          <div className="mt-20 relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-warm-gray/20">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 mx-auto">
                  <Play className="w-8 h-8 text-blue-600 ml-1" />
                </div>
                <h4 className="text-xl font-bold text-charcoal mb-2">See our process in action</h4>
                <p className="text-cool-gray">4-minute behind-the-scenes look at how we engineer influence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline text-charcoal mb-6">
              Why we're different
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              While others chase vanity metrics, we engineer measurable influence that drives business outcomes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Global by Design</h3>
              <p className="text-cool-gray leading-relaxed">
                Born global, not domestic. Our network spans 47 countries with native cultural intelligence in each market.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">AI-Augmented</h3>
              <p className="text-cool-gray leading-relaxed">
                Human creativity amplified by machine precision. Our AI tools give you unfair advantages at every stage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">Outcome Obsessed</h3>
              <p className="text-cool-gray leading-relaxed">
                We track attribution to pipeline, not just impressions. Every campaign is engineered for measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-charcoal to-gray-900 text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-headline mb-6">
            Ready to engineer your influence?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join 150+ funded startups who've chosen Works.xyz to amplify their voice globally. 
            Let's architect your path to thought leadership.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              asChild 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 text-lg font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
            >
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-lg font-semibold rounded-xl transition-all duration-200"
            >
              <a href="/case-studies">
                View Case Studies
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
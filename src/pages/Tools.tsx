import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, PenTool, Zap, TrendingUp, Search, Users, BarChart3, Globe, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Tools = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">AI-Powered Tools</Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">
              The Future of
              <br />
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Influence Engineering
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Proprietary AI tools that give challenger brands the competitive 
              advantage to move faster and smarter than the competition.
            </p>
            <Button size="lg" asChild className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Link to="/contact">
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Media AI Tool */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Database className="h-12 w-12 text-primary mr-4" />
                <div>
                  <div className="text-3xl font-headline font-bold text-primary">Media AI</div>
                  <div className="text-muted-foreground">Press Database Intelligence</div>
                </div>
              </div>
              <h2 className="text-4xl font-headline font-bold mb-6">
                50,000+ Journalist Contacts at Your Fingertips
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Access the world's most comprehensive media database, powered by AI 
                to help you find the right journalists, track coverage sentiment, 
                and identify trending opportunities in real-time.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: <Search className="h-6 w-6" />,
                    title: "Smart Journalist Discovery",
                    description: "AI-powered matching based on beat, interests, and writing style"
                  },
                  {
                    icon: <TrendingUp className="h-6 w-6" />,
                    title: "Trend Identification", 
                    description: "Real-time analysis of emerging stories and topics"
                  },
                  {
                    icon: <BarChart3 className="h-6 w-6" />,
                    title: "Sentiment Tracking",
                    description: "Monitor brand mentions and coverage sentiment across all media"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary mr-4 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Request Access <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <Card className="bg-gradient-card border-0 h-96">
              <CardContent className="p-8 h-full">
                <div className="bg-gradient-sophisticated rounded-lg h-full flex items-center justify-center">
                  <div className="text-center">
                    <Database className="h-20 w-20 text-primary/40 mx-auto mb-4" />
                    <div className="text-2xl font-headline font-bold text-primary mb-2">50,000+</div>
                    <div className="text-muted-foreground">Active Journalist Contacts</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Write AI Tool */}
      <section className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="bg-gradient-card border-0 h-96 lg:order-first">
              <CardContent className="p-8 h-full">
                <div className="bg-gradient-luxury rounded-lg h-full flex items-center justify-center">
                  <div className="text-center">
                    <PenTool className="h-20 w-20 text-primary/40 mx-auto mb-4" />
                    <div className="text-2xl font-headline font-bold text-primary mb-2">10x</div>
                    <div className="text-muted-foreground">Faster Content Creation</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div>
              <div className="flex items-center mb-6">
                <PenTool className="h-12 w-12 text-primary mr-4" />
                <div>
                  <div className="text-3xl font-headline font-bold text-primary">Write AI</div>
                  <div className="text-muted-foreground">Copywriting Assistant</div>
                </div>
              </div>
              <h2 className="text-4xl font-headline font-bold mb-6">
                Content That Converts, Generated Instantly
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Generate compelling press releases, social copy, and campaign content 
                that resonates with your target audience. Trained on high-performing 
                content from successful campaigns.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: <Zap className="h-6 w-6" />,
                    title: "Instant Press Releases",
                    description: "Professional PR content generated in seconds, not hours"
                  },
                  {
                    icon: <Users className="h-6 w-6" />,
                    title: "Audience Optimization",
                    description: "Content tailored to specific demographics and markets"
                  },
                  {
                    icon: <Globe className="h-6 w-6" />,
                    title: "Multi-Language Support",
                    description: "Generate content in 20+ languages with cultural context"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary mr-4 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Try Write AI <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-24 bg-gradient-sophisticated">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-6">
              Why Our Tools Are Different
            </h2>
            <p className="text-xl text-muted-foreground">
              Built specifically for PR and influence marketing, not generic solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Industry-Specific",
                description: "Built for PR professionals, not general marketing tools",
                icon: <Target className="h-8 w-8" />
              },
              {
                title: "Real-Time Data",
                description: "Live updates and trending insights, not stale databases",
                icon: <Zap className="h-8 w-8" />
              },
              {
                title: "Global Coverage",
                description: "Worldwide media contacts and multi-market intelligence",
                icon: <Globe className="h-8 w-8" />
              }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 text-center">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-headline font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-6">
              Enterprise-Grade Tools
            </h2>
            <p className="text-xl text-muted-foreground">
              Custom pricing based on your team size and usage requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-0 relative overflow-hidden">
              <CardContent className="p-8">
                <div className="text-2xl font-headline font-bold mb-2">Media AI</div>
                <div className="text-4xl font-headline font-bold text-primary mb-6">Custom</div>
                <div className="space-y-3 mb-8">
                  {[
                    "50,000+ journalist contacts",
                    "Real-time trend analysis",
                    "Sentiment tracking",
                    "Custom integrations",
                    "24/7 support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 relative overflow-hidden">
              <CardContent className="p-8">
                <div className="text-2xl font-headline font-bold mb-2">Write AI</div>
                <div className="text-4xl font-headline font-bold text-primary mb-6">Custom</div>
                <div className="space-y-3 mb-8">
                  {[
                    "Unlimited content generation",
                    "Brand voice training",
                    "Multi-language support",
                    "API access",
                    "Priority support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Ready to Engineer Your Influence?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              See how our AI tools can accelerate your PR and influence marketing efforts. 
              Book a demo to experience the future of influence engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                <Link to="/case-studies">
                  See Results
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tools;
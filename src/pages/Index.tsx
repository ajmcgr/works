import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Users, Target, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold tracking-tight mb-8">
              Influence,
              <br />
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Engineered.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              We build global influence for challenger brands through strategic PR, 
              data-driven storytelling, and AI-powered tools that scale visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Book a Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground">
              Strategic influence across every touchpoint that matters.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global PR Strategy",
                description: "Positioning that resonates across markets and cultures."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Influencer Marketing",
                description: "Authentic partnerships that drive real engagement."
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Brand Storytelling",
                description: "Narratives that stick in minds and hearts."
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "AI Tools",
                description: "Media AI & Write AI to accelerate your growth."
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-headline font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
                Our Work
              </h2>
              <p className="text-xl text-muted-foreground">
                Stories of influence, engineered to perfection.
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link to="/case-studies">
                View All Cases <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                client: "UFC",
                title: "Global Fight Night Domination",
                description: "800M+ earned impressions across 50 markets",
                image: "/lovable-uploads/ufc-case.jpg",
                metrics: "800M+ Impressions"
              },
              {
                client: "OnePlus",
                title: "Never Settle Campaign",
                description: "Challenger brand positioning in premium mobile",
                image: "/lovable-uploads/oneplus-case.jpg", 
                metrics: "150% Brand Lift"
              },
              {
                client: "OPPO",
                title: "Portrait Master Series",
                description: "AI photography narrative across global markets",
                image: "/lovable-uploads/oppo-case.jpg",
                metrics: "2.5B+ Reach"
              }
            ].map((study, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-gradient-card border-0 overflow-hidden">
                <div className="aspect-video bg-gradient-sophisticated relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium mb-1">{study.client}</div>
                    <div className="text-lg font-headline font-bold">{study.metrics}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Button variant="outline" asChild>
              <Link to="/case-studies">
                View All Cases <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Three steps to engineered influence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description: "We dive deep into your brand, market position, and growth ambitions to understand what influence means for you."
              },
              {
                step: "02", 
                title: "Strategy & Planning",
                description: "We craft a comprehensive influence strategy tailored to your audience, markets, and business objectives."
              },
              {
                step: "03",
                title: "Execute & Scale",
                description: "We implement, measure, and optimize campaigns while providing real-time insights and continuous growth."
              }
            ].map((process, index) => (
              <div key={index} className="group text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl font-headline font-bold text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                  {process.step}
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">
                  {process.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-gradient-sophisticated">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              AI-Powered Tools
            </h2>
            <p className="text-xl text-muted-foreground">
              The competitive advantage you've been looking for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-gradient-card border-0">
              <CardContent className="p-8">
                <div className="text-primary text-4xl font-headline font-bold mb-4">
                  Media AI
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">
                  Press Database Intelligence
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Access 50,000+ journalist contacts, track coverage sentiment, and identify trending opportunities in real-time.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/tools">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-gradient-card border-0">
              <CardContent className="p-8">
                <div className="text-primary text-4xl font-headline font-bold mb-4">
                  Write AI
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">
                  Copywriting Assistant
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Generate compelling press releases, social copy, and campaign content that resonates with your target audience.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/tools">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6">
              Ready to Engineer
              <br />
              Your Influence?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the challenger brands who chose to stand out. 
              Let's build something remarkable together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                <Link to="/case-studies">
                  See Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
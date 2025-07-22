import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Globe, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Former Head of Global PR at TechStart, with 10+ years building influence for challenger brands.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Rodriguez",
      role: "Head of Strategy",
      bio: "Ex-Google strategist specializing in global market entry and cross-cultural communications.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Marcus Thompson",
      role: "Head of Technology",
      bio: "AI researcher and former Microsoft engineer, building the future of influence intelligence.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision",
      description: "Every campaign is engineered with surgical precision to hit exact influence objectives."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Thinking",
      description: "We think globally while acting locally, understanding cultural nuances that matter."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Human Connection",
      description: "Technology amplifies our reach, but authentic human stories drive our impact."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We pursue excellence obsessively, treating every campaign like our reputation depends on it."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">
              About Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're the influence engineers. A team of strategists, technologists, 
              and storytellers who believe that with the right approach, any challenger 
              brand can build global influence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-headline font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Works was born from a simple observation: the brands that capture global 
                  attention aren't always the biggest or best-funded. They're the ones 
                  that engineer influence strategically.
                </p>
                <p>
                  After years working with Fortune 500 companies and emerging startups, 
                  we realized that traditional PR was too slow, too reactive, and too 
                  focused on vanity metrics instead of business impact.
                </p>
                <p>
                  So we built something different. A new kind of agency that combines 
                  strategic PR with data science, cultural intelligence with AI-powered 
                  tools, and global thinking with local execution.
                </p>
                <p>
                  Today, we're the influence engineers that challenger brands trust to 
                  build their global reputation and drive measurable business results.
                </p>
              </div>
            </div>
            
            <Card className="bg-gradient-card border-0 h-96">
              <CardContent className="p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-headline font-bold text-primary mb-4">
                    2019
                  </div>
                  <div className="text-xl text-muted-foreground">
                    Founded with a mission to engineer influence
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide every campaign we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 text-center">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-headline font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The influence engineers behind your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2">{member.name}</h3>
                  <div className="text-primary font-medium mb-4">{member.role}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-sophisticated">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-headline font-bold mb-6">
              Impact by Numbers
            </h2>
            <p className="text-xl text-muted-foreground">
              The results of engineering influence at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { metric: "50+", label: "Brands Transformed" },
              { metric: "3.3B+", label: "Impressions Generated" },
              { metric: "75+", label: "Global Markets" },
              { metric: "92%", label: "Client Retention" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-headline font-bold text-primary mb-2">
                  {stat.metric}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              To democratize global influence. We believe that with the right strategy, 
              technology, and execution, any brand can build meaningful influence 
              that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Work With Us <ArrowRight className="ml-2 h-5 w-5" />
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

export default About;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Globe, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      client: "UFC",
      title: "Global Fight Night Domination",
      description: "Engineered global influence for the world's premier fighting organization, driving 800M+ earned impressions across 50 markets through strategic PR campaigns.",
      industry: "Sports & Entertainment",
      metrics: [
        { label: "Earned Impressions", value: "800M+" },
        { label: "Global Markets", value: "50" },
        { label: "Media Mentions", value: "10,000+" },
        { label: "Sentiment Score", value: "94%" }
      ],
      challenge: "UFC needed to expand global awareness while maintaining authentic brand voice across diverse cultural markets.",
      solution: "We developed localized PR strategies for each key market, leveraging cultural insights and regional media relationships to create compelling narratives that resonated with local audiences.",
      results: "Achieved record-breaking global coverage, establishing UFC as the definitive voice in combat sports across all major markets.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      tags: ["Global PR", "Sports Marketing", "Brand Awareness"]
    },
    {
      id: 2,
      client: "OnePlus",
      title: "Never Settle Campaign",
      description: "Positioned OnePlus as the challenger brand in premium mobile through authentic storytelling and community-driven campaigns.",
      industry: "Technology",
      metrics: [
        { label: "Brand Lift", value: "150%" },
        { label: "Community Growth", value: "300%" },
        { label: "Share of Voice", value: "45%" },
        { label: "Purchase Intent", value: "+85%" }
      ],
      challenge: "Breaking into the premium smartphone market dominated by established players with massive marketing budgets.",
      solution: "Created authentic narratives around the 'Never Settle' philosophy, building genuine community engagement and leveraging user-generated content to drive organic growth.",
      results: "Successfully positioned OnePlus as a premium alternative, achieving significant market share growth and brand preference among target demographics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      tags: ["Brand Positioning", "Community Building", "Product Launch"]
    },
    {
      id: 3,
      client: "OPPO",
      title: "Portrait Master Series",
      description: "Launched OPPO's AI photography narrative across global markets, establishing the brand as the leader in mobile photography innovation.",
      industry: "Technology",
      metrics: [
        { label: "Global Reach", value: "2.5B+" },
        { label: "Engagement Rate", value: "12.5%" },
        { label: "Brand Recall", value: "+200%" },
        { label: "Sales Impact", value: "+65%" }
      ],
      challenge: "Differentiating OPPO in the crowded smartphone market while building credibility in mobile photography.",
      solution: "Developed the 'Portrait Master' narrative, showcasing AI photography capabilities through partnerships with professional photographers and visual storytelling.",
      results: "Established OPPO as the definitive mobile photography brand, driving significant sales growth and market share expansion globally.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      tags: ["Product Innovation", "Visual Storytelling", "Global Launch"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories of influence engineering. See how we've helped challenger 
              brands build global recognition and drive measurable business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Badge variant="secondary" className="mb-6">Featured Case Study</Badge>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
                  {caseStudies[0].title}
                </h2>
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="outline">{caseStudies[0].industry}</Badge>
                  <span className="text-2xl font-headline font-bold text-primary">
                    {caseStudies[0].client}
                  </span>
                </div>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {caseStudies[0].description}
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {caseStudies[0].metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-headline font-bold text-primary mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link to={`/case-study/${caseStudies[0].id}`}>
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <Card className="bg-gradient-card border-0 overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src={caseStudies[0].image}
                    alt={caseStudies[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold mb-6">
                All Case Studies
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore our complete portfolio of influence engineering successes.
              </p>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={study.id} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-card border-0 overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`aspect-video lg:aspect-square ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                      <img 
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline">{study.industry}</Badge>
                        <span className="text-xl font-headline font-bold text-primary">
                          {study.client}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {study.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {study.metrics.slice(0, 2).map((metric, metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-2xl font-headline font-bold text-primary mb-1">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" asChild>
                        <Link to={`/case-study/${study.id}`}>
                          Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-24 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-headline font-bold mb-6">
              Results That Speak
            </h2>
            <p className="text-xl text-muted-foreground mb-16">
              The numbers behind our influence engineering approach.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  metric: "3.3B+",
                  label: "Total Impressions"
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  metric: "500M+",
                  label: "People Reached"
                },
                {
                  icon: <Globe className="h-8 w-8" />,
                  metric: "75+",
                  label: "Global Markets"
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  metric: "92%",
                  label: "Client Retention"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-headline font-bold text-primary mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Let's engineer influence for your brand. Book a strategy call 
              to discuss how we can amplify your story globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
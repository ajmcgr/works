import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Clock, ArrowRight, Mic, Headphones, Rss } from "lucide-react";
import { Link } from "react-router-dom";

const Podcast = () => {
  const episodes = [
    {
      episode: 1,
      title: "The Future of AI in PR",
      guest: "Sarah Chen, CMO at TechStart",
      description: "How artificial intelligence is reshaping public relations and what it means for brands looking to scale.",
      duration: "45 min",
      date: "Jan 15, 2024",
      category: "AI & Technology"
    },
    {
      episode: 2,
      title: "Building Global Brands from Day One",
      guest: "Marcus Rodriguez, Founder of GlobalCo",
      description: "The secrets behind creating internationally recognized brands that resonate across cultures.",
      duration: "52 min", 
      date: "Jan 8, 2024",
      category: "Brand Strategy"
    },
    {
      episode: 3,
      title: "Influencer Marketing That Actually Works",
      guest: "Emma Thompson, Head of Partnerships at CreativeAgency",
      description: "Moving beyond vanity metrics to create influencer campaigns that drive real business impact.",
      duration: "38 min",
      date: "Jan 1, 2024", 
      category: "Influencer Marketing"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Mic className="h-12 w-12 text-primary mr-4" />
              <span className="text-2xl font-headline font-bold text-primary">HYPEWORKS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">
              The Influence
              <br />
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Engineering Podcast
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Deep conversations with founders, marketers, and innovators who are 
              redefining how brands build influence in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Play className="mr-2 h-5 w-5" />
                Listen Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Rss className="mr-2 h-5 w-5" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode Highlight */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Latest Episode</Badge>
              <h2 className="text-3xl font-headline font-bold mb-4">
                Now Playing
              </h2>
            </div>
            
            <Card className="bg-gradient-card border-0 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-square bg-gradient-sophisticated flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-20 h-20 bg-primary/20 hover:bg-primary/30 border-2 border-primary">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </Button>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">AI & Technology</Badge>
                  <h3 className="text-2xl font-headline font-bold mb-4">
                    The Future of AI in PR
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    How artificial intelligence is reshaping public relations and what it means 
                    for brands looking to scale their influence globally.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">Jan 15, 2024</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>45 min</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-sophisticated rounded-full mr-3" />
                    <div>
                      <div className="font-medium">Sarah Chen</div>
                      <div className="text-sm text-muted-foreground">CMO at TechStart</div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Episodes List */}
      <section className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-headline font-bold mb-6">
                Recent Episodes
              </h2>
              <p className="text-xl text-muted-foreground">
                Fresh insights from industry leaders every week.
              </p>
            </div>

            <div className="space-y-8">
              {episodes.map((episode, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gradient-sophisticated rounded-lg flex items-center justify-center mr-4">
                          <span className="text-2xl font-headline font-bold text-primary">
                            {episode.episode.toString().padStart(2, '0')}
                          </span>
                        </div>
                        <Button size="sm" variant="ghost" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="md:col-span-2">
                        <Badge variant="outline" className="mb-2">{episode.category}</Badge>
                        <h3 className="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">
                          {episode.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {episode.description}
                        </p>
                        <div className="text-sm font-medium">{episode.guest}</div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center justify-end text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          {episode.date}
                        </div>
                        <div className="flex items-center justify-end text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {episode.duration}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Headphones className="mr-2 h-5 w-5" />
                View All Episodes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-24 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-headline font-bold mb-6">
              Never Miss an Episode
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Subscribe to HYPEWORKS and get the latest insights on influence 
              engineering delivered directly to your favorite podcast app.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              {[
                { name: "Apple Podcasts", logo: "🎵" },
                { name: "Spotify", logo: "🎧" },
                { name: "Google Podcasts", logo: "📻" }
              ].map((platform, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{platform.logo}</div>
                    <div className="font-medium">{platform.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                <Link to="/contact">
                  Be a Guest <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <Rss className="mr-2 h-5 w-5" />
                RSS Feed
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Podcast;
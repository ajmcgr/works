
import { ExternalLink, Video, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Apps = () => {
  const apps = [
    {
      name: "Media AI",
      description: "Find the right voices for your stories, campaigns, and projects in just a few clicks from our database of over top 30,000 journalists and creators — powered by AI",
      icon: Video,
      url: "https://trymedia.ai",
      features: ["30,000+ Journalists & Creators", "AI-Powered Search", "Campaign Matching", "Story Voice Discovery"],
      color: "from-purple-500 to-pink-500",
      logo: "/lovable-uploads/96599754-b7c2-4982-9e8b-5cded98ef4cf.png"
    },
    {
      name: "Write AI",
      description: "Advanced AI writing assistant that helps you create compelling content, from blog posts to marketing copy, with intelligent suggestions and optimization.",
      icon: PenTool,
      url: "https://trywrite.ai",
      features: ["AI Content Generation", "Writing Enhancement", "SEO Optimization", "Multi-format Support"],
      color: "from-blue-500 to-cyan-500",
      logo: "/lovable-uploads/33bf2510-c9fc-4d3f-b495-c3f48537119b.png"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-headline text-gray-900 mb-6">
              Our apps
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our suite of AI-powered applications designed to enhance your creative and professional workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {apps.map((app, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                    <img 
                      src={app.logo} 
                      alt={app.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-headline text-gray-900">
                      {app.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base mt-2">
                      {app.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {app.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    asChild 
                    className="w-full text-white font-medium py-3"
                    style={{ backgroundColor: '#409EFF' }}
                  >
                    <a href={app.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Try {app.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solution Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl text-center">
          <h2 className="text-4xl lg:text-5xl font-headline mb-8 leading-tight">
            Need a custom solution?
          </h2>
          <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto text-gray-300 font-normal leading-relaxed">
            Looking for tailored AI technology solutions for your specific business needs? Our team specializes in creating custom applications and integrations that perfectly align with your requirements.
          </p>
          <Button 
            asChild 
            size="lg"
            className="text-white hover:opacity-90 px-8 py-3" 
            style={{ backgroundColor: '#409EFF' }}
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Contact Us for Custom Solutions
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Apps;

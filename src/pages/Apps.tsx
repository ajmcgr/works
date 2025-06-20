
import { ExternalLink, Video, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Apps = () => {
  const apps = [
    {
      name: "TryMedia.ai",
      description: "AI-powered media generation and editing platform. Create stunning visuals, videos, and multimedia content with the power of artificial intelligence.",
      icon: Video,
      url: "https://trymedia.ai",
      features: ["AI Video Generation", "Smart Editing Tools", "Media Enhancement", "Automated Production"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "TryWrite.ai",
      description: "Advanced AI writing assistant that helps you create compelling content, from blog posts to marketing copy, with intelligent suggestions and optimization.",
      icon: PenTool,
      url: "https://trywrite.ai",
      features: ["AI Content Generation", "Writing Enhancement", "SEO Optimization", "Multi-format Support"],
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Apps
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
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <app.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
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
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 group-hover:shadow-lg transition-all duration-300"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-driven creativity and productivity with our cutting-edge applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              variant="secondary" 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-8"
            >
              <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer">
                Get Started with TryMedia.ai
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-medium px-8"
            >
              <a href="https://trywrite.ai" target="_blank" rel="noopener noreferrer">
                Explore TryWrite.ai
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apps;


import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Apps = () => {
  const apps = [
    {
      name: "TryMedia.ai",
      description: "AI-powered media intelligence and monitoring platform that helps PR professionals track brand mentions, analyze sentiment, and measure campaign impact across digital channels.",
      url: "https://trymedia.ai",
      features: [
        "Real-time media monitoring",
        "Sentiment analysis",
        "Brand mention tracking",
        "Campaign performance metrics"
      ]
    },
    {
      name: "TryWrite.ai",
      description: "Advanced AI writing assistant designed for PR professionals to create compelling press releases, media pitches, and communications content that resonates with target audiences.",
      url: "https://trywrite.ai",
      features: [
        "Press release generation",
        "Media pitch creation",
        "Content optimization",
        "Brand voice consistency"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Our Apps
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Powerful AI tools designed to enhance your PR and communications workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {apps.map((app, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="p-8">
                  <CardTitle className="text-2xl font-bold text-black mb-4">
                    {app.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {app.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-black uppercase tracking-wide mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {app.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#409EFF' }}>
                    <a 
                      href={app.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center"
                    >
                      Try {app.name}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
              Ready to enhance your PR workflow?
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-normal leading-relaxed">
              Discover how our AI-powered tools can streamline your communications strategy.
            </p>
            <Button asChild className="text-white px-10 py-4 text-sm font-medium" style={{ backgroundColor: '#409EFF' }}>
              <a href="/#contact" className="hover:opacity-90 inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apps;

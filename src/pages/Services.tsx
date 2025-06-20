
import { Megaphone, Shield, Users, PenTool, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Megaphone className="h-12 w-12 text-black" />,
      title: "Media Relations",
      description: "Build and maintain relationships with key journalists, influencers, and media outlets to secure strategic coverage.",
      features: ["Press Release Distribution", "Media Outreach", "Journalist Relationships", "Story Pitching"],
      price: "Starting at $3,000/month"
    },
    {
      icon: <Shield className="h-12 w-12 text-black" />,
      title: "Crisis Communication",
      description: "Rapid response strategies to protect and restore your reputation during challenging situations.",
      features: ["24/7 Crisis Support", "Reputation Management", "Stakeholder Communication", "Media Training"],
      price: "Starting at $5,000/month"
    },
    {
      icon: <Users className="h-12 w-12 text-black" />,
      title: "Brand Communications",
      description: "Develop consistent messaging that builds trust and strengthens your brand across all touchpoints.",
      features: ["Message Development", "Brand Positioning", "Thought Leadership", "Executive Communications"],
      price: "Starting at $4,000/month"
    },
    {
      icon: <PenTool className="h-12 w-12 text-black" />,
      title: "Content Strategy",
      description: "Create compelling narratives and content that engage your audience and drive meaningful conversations.",
      features: ["Content Planning", "Storytelling", "Editorial Calendar", "Multi-Channel Distribution"],
      price: "Starting at $2,500/month"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-black" />,
      title: "Investor Relations",
      description: "Strategic communication with investors, analysts, and financial media to build confidence and transparency.",
      features: ["Financial Communications", "Earnings Support", "Analyst Relations", "Investor Events"],
      price: "Starting at $6,000/month"
    },
    {
      icon: <Clock className="h-12 w-12 text-black" />,
      title: "Ongoing Support",
      description: "Continuous PR support and strategic guidance to maintain momentum and adapt to changing landscapes.",
      features: ["Monthly Strategy Reviews", "Media Monitoring", "Performance Analytics", "Strategic Consulting"],
      price: "Starting at $2,000/month"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      description: "We analyze your current reputation, identify opportunities, and understand your unique challenges."
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a comprehensive PR strategy aligned with your business objectives and target audiences."
    },
    {
      step: "03",
      title: "Execution",
      description: "Our team implements campaigns with precision, leveraging our extensive media relationships."
    },
    {
      step: "04",
      title: "Monitoring",
      description: "We track coverage, sentiment, and engagement to ensure your message resonates effectively."
    },
    {
      step: "05",
      title: "Optimization",
      description: "We continuously refine our approach based on results and changing market dynamics."
    },
    {
      step: "06",
      title: "Growth",
      description: "We scale successful strategies and explore new opportunities to expand your influence."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive public relations solutions designed to elevate your brand, 
              protect your reputation, and drive meaningful engagement with your audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl text-black">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-black mb-4">{service.price}</div>
                    <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every campaign delivers results 
              and builds lasting value for your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Elevate Your PR Strategy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's discuss your goals and how we can help you achieve them through strategic public relations.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;

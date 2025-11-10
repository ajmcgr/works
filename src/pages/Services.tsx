import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Media Relations",
      description: "Build and maintain relationships with key journalists, influencers, and media outlets to secure strategic coverage.",
      features: ["Press Release Distribution", "Media Outreach", "Journalist Relationships", "Story Pitching"],
      price: "Starting at $3,000/month"
    },
    {
      title: "Crisis Communication",
      description: "Rapid response strategies to protect and restore your reputation during challenging situations.",
      features: ["24/7 Crisis Support", "Reputation Management", "Stakeholder Communication", "Media Training"],
      price: "Starting at $5,000/month"
    },
    {
      title: "Brand Communications",
      description: "Develop consistent messaging that builds trust and strengthens your brand across all touchpoints.",
      features: ["Message Development", "Brand Positioning", "Thought Leadership", "Executive Communications"],
      price: "Starting at $4,000/month"
    },
    {
      title: "Content Strategy",
      description: "Create compelling narratives and content that engage your audience and drive meaningful conversations.",
      features: ["Content Planning", "Storytelling", "Editorial Calendar", "Multi-Channel Distribution"],
      price: "Starting at $2,500/month"
    },
    {
      title: "Influencer Marketing",
      description: "Connect with influential voices that authentically align with your brand to amplify your message and reach new audiences.",
      features: ["Influencer Identification", "Partnership Management", "Campaign Strategy", "Performance Tracking"],
      price: "Starting at $3,500/month"
    },
    {
      title: "Event Management",
      description: "Create memorable experiences that strengthen relationships, generate buzz, and position your brand as an industry leader.",
      features: ["Event Planning", "Media Events", "Product Launches", "Conference Management"],
      price: "Starting at $4,500/month"
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
      title: "Optimization",
      description: "We continuously refine our approach based on results and changing market dynamics."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-headline text-gray-900 leading-[1.1] mb-8 tracking-tight">
              Our services
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl">
              Comprehensive public relations solutions designed to elevate your brand, 
              protect your reputation, and drive meaningful engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 lg:p-12 border border-gray-200">
                <h3 className="text-2xl lg:text-3xl font-headline text-black mb-6">{service.title}</h3>
                <p className="text-gray-600 font-normal leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <div className="w-1 h-1 bg-black rounded-full"></div>
                      <span className="text-sm text-gray-700 font-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-gray-100">
                  <div className="text-lg font-bold text-black mb-6">{service.price}</div>
                  <Button asChild>
                    <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">Get Quote</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-headline text-gray-900 mb-8 leading-tight">
              Our process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl font-normal leading-relaxed">
              We follow a proven methodology to ensure every campaign delivers results 
              and builds lasting value for your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((item, index) => (
              <div key={index} className="space-y-6">
                <div className="text-sm text-gray-500 font-normal uppercase tracking-wide">{item.step}</div>
                <h3 className="text-xl font-headline text-gray-900">{item.title}</h3>
                <p className="text-gray-600 font-normal leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gray-50 text-gray-900">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl text-center">
          <h2 className="text-4xl lg:text-5xl font-headline mb-8 leading-tight">
            Ready to elevate your PR strategy?
          </h2>
          <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto text-gray-600 font-normal leading-relaxed">
            Let's discuss your goals and how we can help you achieve them through strategic public relations.
          </p>
          <Button asChild size="lg">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">Start A Conversation</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;

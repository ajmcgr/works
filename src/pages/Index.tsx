
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      title: "Media Relations",
      description: "Strategic media outreach and relationship building with key journalists and influencers.",
      icon: "📰"
    },
    {
      title: "Crisis Communication",
      description: "Rapid response and reputation management during challenging times.",
      icon: "🛡️"
    },
    {
      title: "Brand Communications",
      description: "Consistent messaging that builds trust and strengthens your brand identity.",
      icon: "📢"
    },
    {
      title: "Content Strategy",
      description: "Compelling storytelling that engages audiences and drives meaningful conversations.",
      icon: "✍️"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "Works helped us navigate a critical moment with professionalism and strategic insight.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "Creative Studio",
      content: "Their media relations expertise opened doors we didn't even know existed.",
      rating: 5
    },
    {
      name: "Emily Davis",
      company: "Growth Co.",
      content: "The crisis communication support was invaluable. They kept our reputation intact.",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight mb-8">
              Strategic Public Relations
              <span className="block text-gray-600">That Shapes Narratives</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              We craft compelling stories and build meaningful relationships that elevate your brand 
              and protect your reputation in an ever-changing media landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white">
                <Link to="/contact">
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive PR solutions tailored to your unique challenges and opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-black">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-black">
                Why Choose Works?
              </h2>
              <div className="space-y-6">
                {[
                  "15+ years of PR expertise",
                  "Extensive media network",
                  "Crisis-tested strategies",
                  "24/7 rapid response team",
                  "Proven track record"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-black" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-black hover:bg-gray-800 text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl font-bold text-black">500+</div>
                  <div className="text-gray-600">Campaigns Launched</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl font-bold text-black">98%</div>
                  <div className="text-gray-600">Client Retention</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl font-bold text-black">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl font-bold text-black">24/7</div>
                  <div className="text-gray-600">Crisis Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by industry leaders and emerging brands alike.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-black fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-gray-400" />
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Shape Your Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Let's discuss how strategic public relations can elevate your brand 
            and protect your reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <Link to="/blog">Read Our Insights</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

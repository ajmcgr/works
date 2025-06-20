
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience.",
      icon: "🎨"
    },
    {
      title: "Digital Marketing",
      description: "Strategic campaigns that drive growth and engagement.",
      icon: "📈"
    },
    {
      title: "Brand Strategy",
      description: "Comprehensive branding solutions that tell your story.",
      icon: "🎯"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "Works transformed our digital presence completely. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "Creative Studio",
      content: "Professional, creative, and results-driven. They truly understand modern design.",
      rating: 5
    },
    {
      name: "Emily Davis",
      company: "Growth Co.",
      content: "Our website traffic increased by 300% after working with Works. Incredible team!",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We Create
                <span className="text-blue-600 block">Digital Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with cutting-edge web development, stunning design, 
                and strategic digital marketing that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg"></div>
                  <div className="flex space-x-2">
                    <div className="h-4 bg-green-200 rounded flex-1"></div>
                    <div className="h-4 bg-yellow-200 rounded flex-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the modern world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Choose Works?
              </h2>
              <div className="space-y-6">
                {[
                  "10+ years of industry experience",
                  "500+ successful projects delivered",
                  "Award-winning design team",
                  "24/7 support and maintenance",
                  "100% client satisfaction rate"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-3xl font-bold text-green-600">99%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-3xl font-bold text-purple-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="text-3xl font-bold text-orange-600">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-600" />
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing. Get in touch today 
            and let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

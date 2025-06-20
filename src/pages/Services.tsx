
import { Code, Palette, TrendingUp, Megaphone, Shield, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks like React, Next.js, and Node.js.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Mobile First"],
      price: "Starting at $5,000"
    },
    {
      icon: <Palette className="h-12 w-12 text-purple-600" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that provide exceptional user experiences and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $3,000"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that increase visibility, engagement, and drive business growth.",
      features: ["SEO Optimization", "Content Marketing", "Social Media", "Analytics"],
      price: "Starting at $2,000/month"
    },
    {
      icon: <Megaphone className="h-12 w-12 text-orange-600" />,
      title: "Brand Strategy",
      description: "Comprehensive branding solutions that tell your story and differentiate you from competitors.",
      features: ["Brand Identity", "Logo Design", "Brand Guidelines", "Marketing Materials"],
      price: "Starting at $4,000"
    },
    {
      icon: <Smartphone className="h-12 w-12 text-indigo-600" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that provide seamless user experiences.",
      features: ["iOS & Android", "Cross-Platform", "App Store Optimization", "Push Notifications"],
      price: "Starting at $15,000"
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your digital assets secure and up-to-date.",
      features: ["Security Updates", "Performance Monitoring", "Bug Fixes", "24/7 Support"],
      price: "Starting at $500/month"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create a strategic foundation."
    },
    {
      step: "02",
      title: "Strategy",
      description: "We develop a comprehensive strategy and roadmap tailored to your specific needs and objectives."
    },
    {
      step: "03",
      title: "Design",
      description: "Our designers create beautiful, functional designs that align with your brand and user needs."
    },
    {
      step: "04",
      title: "Development",
      description: "Our developers bring the designs to life using the latest technologies and best practices."
    },
    {
      step: "05",
      title: "Launch",
      description: "We carefully launch your project and ensure everything is working perfectly before going live."
    },
    {
      step: "06",
      title: "Support",
      description: "We provide ongoing support and maintenance to ensure your project continues to perform optimally."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive digital solutions designed to help your business grow, 
              engage customers, and achieve lasting success in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                    <Button asChild className="w-full">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every project is delivered on time, 
              on budget, and exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help you achieve your goals.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;

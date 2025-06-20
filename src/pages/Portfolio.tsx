
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Modern e-commerce platform with advanced filtering and payment integration.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Restaurant App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      description: "Mobile app for restaurant ordering with real-time tracking and payment processing.",
      technologies: ["React Native", "Firebase", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "Professional corporate website with CMS integration and SEO optimization.",
      technologies: ["Next.js", "Contentful", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      description: "Complete brand identity design including logo, colors, and marketing materials.",
      technologies: ["Adobe Creative Suite", "Figma"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Analytics dashboard for SaaS platform with real-time data visualization.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Fitness App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      description: "Fitness tracking app with workout plans and progress monitoring.",
      technologies: ["Flutter", "Firebase", "HealthKit"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "design", name: "Design" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our latest work and see how we've helped businesses transform 
              their digital presence and achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setFilter(category.id)}
                variant={filter === category.id ? "default" : "outline"}
                className={filter === category.id ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="bg-white">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 mt-2">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">50+</div>
              <div className="text-gray-600 mt-2">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600">10+</div>
              <div className="text-gray-600 mt-2">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600">99%</div>
              <div className="text-gray-600 mt-2">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

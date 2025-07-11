
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      slug: "future-web-development-2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to new frameworks.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
      author: "Alex Thompson",
      date: "2024-01-15",
      category: "Development",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Design Systems: Building Consistency at Scale",
      slug: "design-systems-consistency-scale",
      excerpt: "Learn how to create and implement design systems that maintain consistency across large projects.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      author: "Sarah Martinez",
      date: "2024-01-12",
      category: "Design",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "SEO Best Practices for Modern Websites",
      slug: "seo-best-practices-modern-websites",
      excerpt: "Master the fundamentals of SEO and learn advanced techniques to improve your website's search rankings.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      author: "Emily Chen",
      date: "2024-01-10",
      category: "Marketing",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Psychology of User Interface Design",
      slug: "psychology-user-interface-design",
      excerpt: "Understand how psychological principles can improve user experience and interface design decisions.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop",
      author: "Sarah Martinez",
      date: "2024-01-08",
      category: "UX/UI",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Building Scalable Applications with Microservices",
      slug: "building-scalable-applications-microservices",
      excerpt: "Learn how to architect and implement microservices for better scalability and maintainability.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
      author: "Mike Johnson",
      date: "2024-01-05",
      category: "Development",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Content Marketing Strategies That Actually Work",
      slug: "content-marketing-strategies-that-work",
      excerpt: "Discover proven content marketing strategies that drive engagement and convert visitors into customers.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      author: "Emily Chen",
      date: "2024-01-03",
      category: "Marketing",
      readTime: "9 min read"
    }
  ];

  const categories = ["All", "Development", "Design", "Marketing", "UX/UI"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-headline text-gray-900 mb-6">
              Our Updates
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Insights, tutorials, and industry updates from our team of experts. 
              Stay updated with the latest trends in web development, design, and digital marketing.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === "All" && !searchTerm && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-headline text-gray-900 mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl text-gray-900">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                      <Button asChild>
                        <Link to={`/blog/${featuredPost.slug}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline text-gray-900 mb-8">
            {selectedCategory === "All" && !searchTerm ? "Latest Articles" : "Articles"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link to={`/blog/${post.slug}`}>Read Article</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-headline mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest articles and insights 
            delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-white text-gray-900"
            />
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

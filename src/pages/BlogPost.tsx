import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BlogPost = () => {
  const { slug } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with web applications. In this comprehensive guide, we'll explore the most significant trends that developers and businesses should be aware of.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the way we write code. From GitHub Copilot to ChatGPT, AI-powered tools are becoming indispensable for developers, helping with code generation, debugging, and even architectural decisions.</p>

      <p>These tools are not replacing developers but rather augmenting their capabilities, allowing them to focus on higher-level problem-solving while AI handles repetitive tasks.</p>

      <h2>2. WebAssembly (WASM) Adoption</h2>
      <p>WebAssembly continues to gain traction as a way to run high-performance applications in the browser. With support for multiple programming languages and near-native performance, WASM is opening up new possibilities for web applications.</p>

      <p>We're seeing increased adoption in areas like:</p>
      <ul>
        <li>Gaming and multimedia applications</li>
        <li>Image and video processing</li>
        <li>Scientific computing</li>
        <li>Legacy application modernization</li>
      </ul>

      <h2>3. Micro-Frontends Architecture</h2>
      <p>As applications grow in complexity, micro-frontends are becoming a popular architectural pattern. This approach allows teams to develop, test, and deploy parts of a frontend application independently.</p>

      <p>Benefits include:</p>
      <ul>
        <li>Better team autonomy</li>
        <li>Technology diversity</li>
        <li>Easier maintenance and updates</li>
        <li>Improved scalability</li>
      </ul>

      <h2>4. Enhanced Developer Experience (DX)</h2>
      <p>The focus on developer experience continues to intensify. Modern frameworks and tools are prioritizing ease of use, fast feedback loops, and comprehensive documentation.</p>

      <p>Key areas of improvement include:</p>
      <ul>
        <li>Hot module replacement and fast refresh</li>
        <li>Zero-config setups</li>
        <li>Integrated development environments</li>
        <li>Better error messages and debugging tools</li>
      </ul>

      <h2>5. Progressive Web Apps (PWAs) Evolution</h2>
      <p>PWAs continue to bridge the gap between web and native applications. With improved capabilities and better browser support, PWAs are becoming a viable alternative to native apps for many use cases.</p>

      <p>Recent improvements include:</p>
      <ul>
        <li>Better offline functionality</li>
        <li>Enhanced push notifications</li>
        <li>Improved app store distribution</li>
        <li>Native-like user experiences</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of possibilities. By staying informed about these trends and gradually incorporating them into your projects, you can ensure that your applications remain modern, performant, and user-friendly.</p>

      <p>Remember, the key is not to adopt every new technology immediately, but to understand the problems they solve and evaluate whether they're right for your specific use case.</p>
    `,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop",
    author: "Alex Thompson",
    date: "2024-01-15",
    category: "Development",
    readTime: "5 min read"
  };

  const relatedPosts = [
    {
      title: "Design Systems: Building Consistency at Scale",
      slug: "design-systems-consistency-scale",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=300&h=200&fit=crop"
    },
    {
      title: "SEO Best Practices for Modern Websites",
      slug: "seo-best-practices-modern-websites",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=300&h=200&fit=crop"
    },
    {
      title: "Building Scalable Applications with Microservices",
      slug: "building-scalable-applications-microservices",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="pt-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button asChild variant="ghost">
          <Link to="/blog" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {blogPost.category}
              </span>
              <span>{blogPost.readTime}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-headline text-gray-900 mb-6">
              {blogPost.title}
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(blogPost.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Share:</span>
                <Button size="sm" variant="ghost">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <img 
            src={blogPost.image} 
            alt={blogPost.title}
            className="w-full h-64 lg:h-96 object-cover rounded-2xl mb-8"
          />

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Social Share */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Share this article</span>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-headline text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

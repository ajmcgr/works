
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface GhostPost {
  id: string;
  title: string;
  excerpt: string;
  published_at: string;
  slug: string;
  feature_image?: string;
  html: string;
}

interface GhostResponse {
  posts: GhostPost[];
}

const fetchGhostPosts = async (): Promise<GhostPost[]> => {
  const apiUrl = 'https://works-blog.ghost.io';
  const apiKey = 'd4aacae2afda51dc7c5702519e';
  
  try {
    const response = await fetch(`${apiUrl}/ghost/api/content/posts/?key=${apiKey}&limit=3&include=tags,authors`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: GhostResponse = await response.json();
    return data.posts;
  } catch (error) {
    console.error('Error fetching Ghost posts:', error);
    // Fallback to mock data if API fails
    return [
      {
        id: "1",
        title: "The Future of PR: How AI is Transforming Communications",
        excerpt: "Explore how artificial intelligence is revolutionizing the public relations industry and what it means for brands.",
        published_at: "2024-01-15T00:00:00.000Z",
        slug: "ai-transforming-communications",
        feature_image: "/placeholder.svg",
        html: ""
      },
      {
        id: "2", 
        title: "Building Media Relations in the Digital Age",
        excerpt: "Traditional media relations are evolving. Learn how to adapt your strategy for maximum impact.",
        published_at: "2024-01-10T00:00:00.000Z",
        slug: "media-relations-digital-age",
        feature_image: "/placeholder.svg",
        html: ""
      },
      {
        id: "3",
        title: "Crisis Communication: Lessons from Recent Brand Cases",
        excerpt: "Analyzing recent crisis communication successes and failures to extract actionable insights.",
        published_at: "2024-01-05T00:00:00.000Z",
        slug: "crisis-communication-lessons",
        feature_image: "/placeholder.svg",
        html: ""
      }
    ];
  }
};

export const NewsSection = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['ghost-posts'],
    queryFn: fetchGhostPosts,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto mb-12"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error fetching blog posts:', error);
  }

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
            Latest News
          </h2>
          <p className="text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Stay updated with the latest insights and trends in public relations and communications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts?.map((post) => (
            <Card key={post.id} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              {post.feature_image && (
                <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={post.feature_image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(post.published_at)}
                </div>
                <CardTitle className="text-xl font-semibold text-black leading-tight hover:text-gray-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-normal leading-relaxed mb-4">
                  {post.excerpt}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-black hover:text-gray-600 font-medium"
                  asChild
                >
                  <a 
                    href={`https://works-blog.ghost.io/${post.slug}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center"
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="text-black border-gray-300 hover:bg-gray-50">
            <a 
              href="https://works-blog.ghost.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              View all articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

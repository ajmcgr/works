import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Zap, Star, ArrowRight } from "lucide-react";

const PRHeadlineGenerator = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [topic, setTopic] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate lead capture
    setTimeout(() => {
      setShowResults(true);
      setIsSubmitting(false);
      toast({
        title: "Headlines Generated!",
        description: "Check your email for the full list of headlines.",
      });
    }, 2000);
  };

  const sampleHeadlines = [
    "Revolutionary AI Platform Launches to Transform [Industry] Efficiency by 300%",
    "[Company] Secures $50M Series B to Accelerate Global Expansion",
    "Industry First: [Company] Introduces Game-Changing Technology That [Benefit]",
    "Breaking: [Company] Partners with Fortune 500 Leader to Disrupt [Market]",
    "[Company] CEO Named to Forbes 30 Under 30 for Innovation in [Field]",
    "Exclusive: How [Company] Plans to Solve the $2.8B [Industry Problem]",
    "The Future is Here: [Company] Unveils [Product] That Changes Everything",
    "[Company] Achieves Unicorn Status with Groundbreaking [Technology] Solution"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Zap className="w-8 h-8 text-accent-electric" />
          </div>
          
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            PR Headline Generator
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Instantly create 10+ compelling headlines for press releases, blogs, or campaigns that grab attention and drive engagement.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          {!showResults ? (
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Get Your Headlines in 30 Seconds
                </h2>
                <p className="text-muted-foreground">
                  Enter your topic and get professional-grade headlines instantly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What's your announcement about?
                  </label>
                  <Textarea
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., New AI platform launch, Series A funding, product update..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Generating Headlines..." : "Generate Headlines"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Your Headlines Are Ready!
                </h2>
                <p className="text-muted-foreground">
                  Here are 8 compelling headlines for your topic
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {sampleHeadlines.map((headline, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 hover:shadow-sm transition-shadow">
                    <p className="text-foreground font-medium">{headline}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="mr-4"
                >
                  Generate More
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/contact">Get Custom Headlines</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold text-foreground mb-8">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center opacity-60 mb-12">
            <img src="/lovable-uploads/e3245375-9a24-4ea7-89aa-f37c5c59078f.png" alt="UFC" className="h-8 object-contain grayscale" />
            <img src="/lovable-uploads/8ef86b72-a30c-418e-8a3c-ae16ccfa0913.png" alt="OnePlus" className="h-8 object-contain grayscale" />
            <img src="/lovable-uploads/4329826e-9683-4f34-b0ad-26a739aef474.png" alt="OPPO" className="h-8 object-contain grayscale" />
            <img src="/lovable-uploads/c9739784-e9ac-48c8-83d5-360e933fea0c.png" alt="Ogilvy" className="h-8 object-contain grayscale" />
            <img src="/lovable-uploads/b46ae86a-6dd8-4b8a-a25c-94658108c395.png" alt="Weber Shandwick" className="h-8 object-contain grayscale" />
            <img src="/lovable-uploads/37a5a0e4-49f5-4885-8cef-be0fd36337da.png" alt="Publicis Groupe" className="h-8 object-contain grayscale" />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-muted-foreground italic mb-4">
              "Works.xyz helped us craft headlines that resulted in coverage from TechCrunch, Forbes, and CNN. 
              The headline generator is exactly what we needed for our product launches."
            </p>
            <p className="text-sm font-medium text-foreground">Sarah Chen, VP Marketing at TechFlow</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PRHeadlineGenerator;
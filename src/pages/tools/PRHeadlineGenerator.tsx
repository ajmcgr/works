import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Zap, Star, ArrowRight } from "lucide-react";

const PRHeadlineGenerator = () => {
  
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
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            PR Headline Generator
          </h1>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Zap className="w-8 h-8 text-accent-electric" />
          </div>
          
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

    </div>
  );
};

export default PRHeadlineGenerator;
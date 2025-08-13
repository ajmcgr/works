import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Lightbulb, ArrowRight, Target } from "lucide-react";

const PressReleaseAngleFinder = () => {
  
  const [newsDetails, setNewsDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setShowResults(true);
      setIsSubmitting(false);
      toast({
        title: "Angles Generated!",
        description: "7 unique story angles ready for your outreach.",
      });
    }, 2000);
  };

  const sampleAngles = [
    {
      category: "Innovation Angle",
      headline: "First-of-Its-Kind Technology Solves $50B Industry Problem",
      description: "Focus on the breakthrough innovation and market disruption potential"
    },
    {
      category: "Human Interest",
      headline: "Former Google Engineer's Personal Struggle Leads to Revolutionary Solution",
      description: "Emphasize the founder's story and personal motivation behind the product"
    },
    {
      category: "Market Timing",
      headline: "Perfect Storm: Why This Solution Arrives at Exactly the Right Moment",
      description: "Connect your launch to current market trends and timing factors"
    },
    {
      category: "David vs Goliath",
      headline: "Startup Takes Aim at $2B Market Dominated by Legacy Players",
      description: "Position as the scrappy underdog challenging established giants"
    },
    {
      category: "Future Impact",
      headline: "How This Technology Could Transform How We Work by 2030",
      description: "Project the long-term implications and societal benefits"
    },
    {
      category: "Behind the Scenes",
      headline: "Inside the 3-Year Journey from Concept to Commercial Success",
      description: "Share the development process, challenges overcome, and key milestones"
    },
    {
      category: "Data-Driven",
      headline: "New Research: 78% Productivity Increase with AI-Powered Workflow Tool",
      description: "Lead with compelling statistics and measurable outcomes"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Lightbulb className="w-8 h-8 text-accent-electric" />
          </div>
          
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Press Release Angle Finder
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Input your news details, and get multiple unique story angles that journalists will want to cover.
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
                  Find Your Perfect Story Angle
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your news and we'll suggest compelling angles
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Describe your news or announcement
                  </label>
                  <Textarea
                    value={newsDetails}
                    onChange={(e) => setNewsDetails(e.target.value)}
                    placeholder="e.g., We're launching an AI-powered project management tool that helps remote teams collaborate 3x faster..."
                    className="min-h-[120px]"
                    required
                  />
                </div>


                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Finding Angles..." : "Generate Story Angles"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  7 Compelling Story Angles Ready!
                </h2>
                <p className="text-muted-foreground">
                  Choose the angle that resonates most with your target audience
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {sampleAngles.map((angle, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-sm transition-shadow">
                    <div className="flex items-start space-x-3 mb-3">
                      <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            {angle.category}
                          </span>
                        </div>
                        <h3 className="font-bold text-foreground mb-2">{angle.headline}</h3>
                        <p className="text-sm text-muted-foreground">{angle.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="mr-4"
                >
                  Try Another Story
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/contact">Get Custom Angles</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PressReleaseAngleFinder;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Users, Star, ArrowRight } from "lucide-react";

const InfluencerBriefBuilder = () => {
  
  const [briefData, setBriefData] = useState({
    campaign: "",
    goals: "",
    deliverables: ""
  });
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
        title: "Brief Generated!",
        description: "Your influencer brief is ready to send.",
      });
    }, 2000);
  };

  const sampleBrief = {
    title: "Product Launch Campaign Brief",
    overview: "We're launching an innovative AI-powered productivity app and seeking creative partners to authentically showcase how it transforms daily workflows.",
    objectives: [
      "Increase brand awareness among target demographic (25-40 professionals)",
      "Drive 10K+ app downloads in first month",
      "Generate authentic user-generated content",
      "Build long-term brand partnerships"
    ],
    deliverables: [
      "2 Instagram feed posts showcasing app features",
      "3-5 Instagram Stories with interactive elements", 
      "1 TikTok video demonstrating app in use",
      "Cross-platform promotion during launch week"
    ],
    timeline: "Content creation: 2 weeks | Publishing window: March 15-22",
    guidelines: "Authentic, professional tone | Focus on productivity benefits | Include #ProductivityAI hashtag | Tag @brandhandle",
    compensation: "Flat fee + performance bonuses based on engagement metrics"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Influencer Brief Builder
          </h1>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Users className="w-8 h-8 text-accent-electric" />
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Generate a ready-to-send creative brief for influencers, including goals, deliverables, timelines, and brand guidelines.
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
                  Create Your Perfect Brief
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your campaign and we'll generate a professional brief
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Campaign Overview
                  </label>
                  <Textarea
                    value={briefData.campaign}
                    onChange={(e) => setBriefData({...briefData, campaign: e.target.value})}
                    placeholder="Describe your product/service and campaign goals..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Key Objectives
                  </label>
                  <Textarea
                    value={briefData.goals}
                    onChange={(e) => setBriefData({...briefData, goals: e.target.value})}
                    placeholder="What do you want to achieve? (awareness, downloads, sales, etc.)"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Content Types
                  </label>
                  <Textarea
                    value={briefData.deliverables}
                    onChange={(e) => setBriefData({...briefData, deliverables: e.target.value})}
                    placeholder="Instagram posts, Stories, TikTok videos, YouTube reviews..."
                    required
                  />
                </div>


                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Brief..." : "Generate Brief"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Your Influencer Brief Is Ready!
                </h2>
                <p className="text-muted-foreground">
                  Copy and customize this professional brief for your outreach
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 space-y-6 text-left">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Campaign Overview</h3>
                  <p className="text-muted-foreground">{sampleBrief.overview}</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">Key Objectives</h3>
                  <ul className="space-y-1">
                    {sampleBrief.objectives.map((obj, index) => (
                      <li key={index} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">Deliverables</h3>
                  <ul className="space-y-1">
                    {sampleBrief.deliverables.map((deliverable, index) => (
                      <li key={index} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">Timeline</h3>
                  <p className="text-muted-foreground">{sampleBrief.timeline}</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">Brand Guidelines</h3>
                  <p className="text-muted-foreground">{sampleBrief.guidelines}</p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">Compensation</h3>
                  <p className="text-muted-foreground">{sampleBrief.compensation}</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button 
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="mr-4"
                >
                  Create Another
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/contact">Get Custom Briefs</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default InfluencerBriefBuilder;
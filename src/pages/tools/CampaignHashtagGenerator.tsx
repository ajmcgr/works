import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Hash, ArrowRight, Copy, TrendingUp } from "lucide-react";

const CampaignHashtagGenerator = () => {
  
  const [campaignDetails, setCampaignDetails] = useState("");
  const [keywords, setKeywords] = useState("");
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
        title: "Hashtags Generated!",
        description: "25 campaign-ready hashtags created.",
      });
    }, 2000);
  };

  const copyToClipboard = (hashtags: string[]) => {
    const hashtagString = hashtags.join(' ');
    navigator.clipboard.writeText(hashtagString);
    toast({
      title: "Copied!",
      description: "Hashtags copied to clipboard.",
    });
  };

  const hashtagCategories = {
    branded: ["#InnovateDaily", "#FutureOfWork", "#TechLaunch2024", "#NextGenTools", "#WorkSmarter"],
    trending: ["#AI", "#Productivity", "#RemoteWork", "#DigitalTransformation", "#TechTrends"],
    community: ["#TechCommunity", "#StartupLife", "#Innovation", "#ProductLaunch", "#Entrepreneurs"],
    niche: ["#ProjectManagement", "#TeamCollaboration", "#WorkflowAutomation", "#BusinessTools", "#SaaS"],
    engagement: ["#MondayMotivation", "#TechTalk", "#ProductivityTips", "#WorkLifeBalance", "#TechNews"]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Campaign Hashtag Generator
          </h1>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Hash className="w-8 h-8 text-accent-electric" />
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Generate catchy, relevant, and brand-aligned hashtags for social campaigns based on your keywords and audience.
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
                  Create Perfect Campaign Hashtags
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your campaign and target audience
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Campaign Description
                  </label>
                  <Textarea
                    value={campaignDetails}
                    onChange={(e) => setCampaignDetails(e.target.value)}
                    placeholder="e.g., Product launch for AI productivity tool targeting remote teams and entrepreneurs..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Key Keywords & Topics
                  </label>
                  <Input
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="AI, productivity, remote work, collaboration"
                    required
                  />
                </div>


                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Generating Hashtags..." : "Generate Hashtags"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Your Campaign Hashtags Are Ready!
                </h2>
                <p className="text-muted-foreground">
                  25 strategic hashtags organized by category
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {Object.entries(hashtagCategories).map(([category, hashtags]) => (
                  <div key={category} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-foreground capitalize">{category} Hashtags</h3>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(hashtags)}
                        className="flex items-center space-x-1"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {hashtags.map((hashtag, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {hashtag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <h3 className="font-bold text-foreground mb-4">Pro Tips for Hashtag Success</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Mix branded, trending, and niche hashtags for maximum reach</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Use 5-10 hashtags per post for optimal engagement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Research hashtag popularity before using</span>
                  </li>
                </ul>
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
                  <a href="/contact">Get Custom Strategy</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CampaignHashtagGenerator;
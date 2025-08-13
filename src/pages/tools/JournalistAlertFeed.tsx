import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Bell, Star, ArrowRight, Newspaper, Clock, User } from "lucide-react";

const JournalistAlertFeed = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const topicOptions = [
    "AI & Machine Learning", "Fintech", "SaaS", "E-commerce", "Cybersecurity",
    "HealthTech", "EdTech", "Climate Tech", "Blockchain", "Consumer Tech",
    "B2B Software", "Enterprise", "Startups", "IPOs", "Funding"
  ];

  const handleTopicToggle = (topic: string) => {
    setInterests(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setShowResults(true);
      setIsSubmitting(false);
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive your first alert feed tomorrow morning.",
      });
    }, 2000);
  };

  const sampleAlerts = [
    {
      outlet: "TechCrunch",
      journalist: "Sarah Perez",
      beat: "Looking for AI startups disrupting traditional industries",
      deadline: "3 days",
      type: "Feature Story"
    },
    {
      outlet: "Forbes",
      journalist: "Alex Konrad",
      beat: "Seeking fintech founders for 30 Under 30 list",
      deadline: "1 week",
      type: "Profile Piece"
    },
    {
      outlet: "The Verge",
      journalist: "Casey Newton",
      beat: "Need sources on social media platform changes",
      deadline: "24 hours",
      type: "Breaking News"
    },
    {
      outlet: "Wall Street Journal",
      journalist: "Meghan Bobrowsky",
      beat: "Enterprise software adoption trends post-pandemic",
      deadline: "2 weeks",
      type: "Trend Analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Bell className="w-8 h-8 text-accent-electric" />
          </div>
          
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Journalist Alert Feed
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to a curated daily feed of trending media topics and open journalist beats in your industry.
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
                  Get Personalized Media Alerts
                </h2>
                <p className="text-muted-foreground">
                  Never miss a relevant opportunity to pitch your story
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Select Your Industry Interests (choose 3-5 topics)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {topicOptions.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => handleTopicToggle(topic)}
                        className={`p-3 rounded-xl text-sm font-medium transition-colors ${
                          interests.includes(topic)
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-white text-muted-foreground hover:bg-gray-100'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                  {interests.length > 0 && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Selected {interests.length} topics
                    </p>
                  )}
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

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <h4 className="font-medium text-foreground mb-2">What You'll Receive:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Daily curated journalist beats and story requests</li>
                    <li>• Trending topics in your industry</li>
                    <li>• Deadline alerts for time-sensitive opportunities</li>
                    <li>• Direct contact information when available</li>
                  </ul>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting || interests.length === 0}
                >
                  {isSubmitting ? "Subscribing..." : "Start Free Alerts"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                {interests.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center">
                    Please select at least one topic to continue
                  </p>
                )}
              </form>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Welcome to Journalist Alerts!
                </h2>
                <p className="text-muted-foreground">
                  Here's a preview of what you'll receive tomorrow
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <h3 className="font-bold text-foreground mb-4 flex items-center">
                  <Newspaper className="w-5 h-5 mr-2 text-primary" />
                  Today's Media Opportunities
                </h3>
                
                <div className="space-y-4">
                  {sampleAlerts.map((alert, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium text-foreground">{alert.journalist}</span>
                          <span className="text-muted-foreground">@</span>
                          <span className="text-muted-foreground">{alert.outlet}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{alert.deadline}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{alert.beat}</p>
                      <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {alert.type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="mr-4"
                >
                  Update Preferences
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/contact">Get Premium Alerts</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default JournalistAlertFeed;
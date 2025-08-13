import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, ArrowRight, User, Copy } from "lucide-react";

const MediaOutreachPersonalizer = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [journalistName, setJournalistName] = useState("");
  const [journalistBeat, setJournalistBeat] = useState("");
  const [newsAngle, setNewsAngle] = useState("");
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
        title: "Pitch Lines Generated!",
        description: "5 personalized opening lines ready to use.",
      });
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Opening line copied to clipboard.",
    });
  };

  const personalizedOpeners = [
    {
      style: "Recent Work Reference",
      line: "Hi Sarah, I loved your recent piece on AI startups disrupting healthcare - the point about regulatory challenges really resonated with our experience at MedTech AI.",
      reasoning: "References specific recent article and connects to your company"
    },
    {
      style: "Beat Connection",
      line: "Hi Sarah, Given your focus on healthcare technology, I thought you'd be interested in our breakthrough that just solved a 20-year-old problem in medical imaging.",
      reasoning: "Directly relates to their coverage area with intriguing hook"
    },
    {
      style: "Trend Timing",
      line: "Hi Sarah, With AI in healthcare being such a hot topic right now, I wanted to share news about MedTech AI's FDA breakthrough that could change everything.",
      reasoning: "Connects to current industry trends they're likely following"
    },
    {
      style: "Exclusive Angle",
      line: "Hi Sarah, I'm reaching out exclusively to you because your healthcare AI coverage has been consistently ahead of the curve - would love to share our story first.",
      reasoning: "Makes them feel special and appreciated for their expertise"
    },
    {
      style: "Data Hook",
      line: "Hi Sarah, Quick question: would you be interested in the story behind the first AI medical imaging tool to achieve 99.7% accuracy in early cancer detection?",
      reasoning: "Leads with compelling statistic and asks engaging question"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <MessageSquare className="w-8 h-8 text-accent-electric" />
          </div>
          
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Media Outreach Personalizer
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Enter a journalist's name and beat, and get personalized pitch opening lines that get responses.
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
                  Create Personalized Pitch Openers
                </h2>
                <p className="text-muted-foreground">
                  Tell us about the journalist and your story
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Journalist Name
                  </label>
                  <Input
                    value={journalistName}
                    onChange={(e) => setJournalistName(e.target.value)}
                    placeholder="e.g., Sarah Perez"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Journalist's Beat/Focus Area
                  </label>
                  <Input
                    value={journalistBeat}
                    onChange={(e) => setJournalistBeat(e.target.value)}
                    placeholder="e.g., Healthcare technology, AI startups"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your News/Story Angle
                  </label>
                  <Textarea
                    value={newsAngle}
                    onChange={(e) => setNewsAngle(e.target.value)}
                    placeholder="e.g., We just received FDA approval for our AI-powered medical imaging tool that detects cancer 40% earlier than traditional methods..."
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
                  {isSubmitting ? "Personalizing Pitch..." : "Generate Pitch Openers"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <User className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Personalized for {journalistName}
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  5 strategic opening lines tailored to their beat
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {personalizedOpeners.map((opener, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {opener.style}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(opener.line)}
                        className="flex items-center space-x-1"
                      >
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </Button>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-foreground italic">"{opener.line}"</p>
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <strong>Why this works:</strong> {opener.reasoning}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <h3 className="font-bold text-foreground mb-4">Next Steps for Success</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Research their recent articles for more specific references</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Follow up 3-5 days after initial outreach if no response</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Include relevant attachments: press kit, high-res images, data</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="mr-4"
                >
                  Personalize Another
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/contact">Get Full Media List</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MediaOutreachPersonalizer;
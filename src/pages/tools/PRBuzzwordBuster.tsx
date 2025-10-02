import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AlertTriangle, ArrowRight, CheckCircle, XCircle } from "lucide-react";

const PRBuzzwordBuster = () => {
  
  const [copyText, setCopyText] = useState("");
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
        title: "Analysis Complete!",
        description: "Buzzwords detected and alternatives suggested.",
      });
    }, 2000);
  };

  const buzzwordAnalysis = [
    {
      buzzword: "game-changing",
      count: 2,
      severity: "high",
      alternatives: ["transformative", "groundbreaking", "pioneering"]
    },
    {
      buzzword: "revolutionary",
      count: 1,
      severity: "medium",
      alternatives: ["innovative", "advanced", "cutting-edge"]
    },
    {
      buzzword: "seamless",
      count: 3,
      severity: "high",
      alternatives: ["smooth", "effortless", "streamlined"]
    },
    {
      buzzword: "leverage",
      count: 1,
      severity: "low",
      alternatives: ["use", "utilize", "harness"]
    },
    {
      buzzword: "synergy",
      count: 1,
      severity: "medium",
      alternatives: ["collaboration", "partnership", "cooperation"]
    }
  ];

  const improvedCopy = `Our innovative productivity platform helps remote teams collaborate more effectively, reducing project completion time by 40%. 

Built with advanced AI technology, the solution streamlines workflow management and eliminates communication bottlenecks that slow down distributed teams.

"This tool transformed how we work," says Sarah Chen, CTO at TechFlow. "Our team coordination improved dramatically, and we're delivering projects faster than ever."

The platform integrates with existing tools teams already use, making adoption effortless for organizations of any size.`;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-500 bg-red-50";
      case "medium": return "text-yellow-600 bg-yellow-50";
      case "low": return "text-green-600 bg-green-50";
      default: return "text-gray-500 bg-gray-50";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high": return <XCircle className="w-4 h-4 text-red-500" />;
      case "medium": return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "low": return <CheckCircle className="w-4 h-4 text-green-500" />;
      default: return <AlertTriangle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            PR Buzzword Buster
          </h1>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <AlertTriangle className="w-8 h-8 text-accent-electric" />
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Paste your copy to detect overused marketing buzzwords and replace them with fresher, more impactful language.
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
                  Clean Up Your Copy
                </h2>
                <p className="text-muted-foreground">
                  Paste your press release or marketing copy for instant analysis
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Paste your copy here
                  </label>
                  <Textarea
                    value={copyText}
                    onChange={(e) => setCopyText(e.target.value)}
                    placeholder="Paste your press release, pitch, or marketing copy here for analysis..."
                    className="min-h-[150px]"
                    required
                  />
                </div>


                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Analyzing Copy..." : "Bust Those Buzzwords"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Analysis Results */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Buzzword Analysis Complete
                  </h2>
                  <p className="text-muted-foreground">
                    Found 8 buzzwords that could be improved
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {buzzwordAnalysis.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          {getSeverityIcon(item.severity)}
                          <span className="font-medium text-foreground">"{item.buzzword}"</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(item.severity)}`}>
                            {item.count} times
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground capitalize">{item.severity} priority</span>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Suggested alternatives:</p>
                        <div className="flex flex-wrap gap-2">
                          {item.alternatives.map((alt, altIndex) => (
                            <span key={altIndex} className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                              {alt}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Improved Copy */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Improved Version
                </h3>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="prose text-muted-foreground whitespace-pre-line">
                    {improvedCopy}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 mt-6">
                  <h4 className="font-bold text-foreground mb-4">Key Improvements Made</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">Replaced "game-changing" with specific benefits (40% faster)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">Added concrete customer testimonial for credibility</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">Used "streamlines" instead of vague "seamless integration"</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center mt-8">
                  <Button 
                    onClick={() => setShowResults(false)}
                    variant="outline"
                    className="mr-4"
                  >
                    Analyze More Copy
                  </Button>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="/contact">Get Professional Copy Review</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PRBuzzwordBuster;
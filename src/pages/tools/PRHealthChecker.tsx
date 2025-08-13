import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Shield, Star, ArrowRight, CheckCircle, AlertCircle, XCircle } from "lucide-react";

const PRHealthChecker = () => {
  
  const [prText, setPrText] = useState("");
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
        description: "Your PR health check results are ready.",
      });
    }, 2000);
  };

  const healthResults = {
    overallScore: 78,
    tone: { score: 85, status: "good", feedback: "Professional and engaging tone" },
    readability: { score: 72, status: "warning", feedback: "Consider shorter sentences for better flow" },
    relevance: { score: 90, status: "good", feedback: "Highly relevant to current market trends" },
    structure: { score: 65, status: "warning", feedback: "Headline could be more compelling" },
    keywords: { score: 80, status: "good", feedback: "Good SEO optimization potential" }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good": return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "warning": return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "poor": return <XCircle className="w-5 h-5 text-red-500" />;
      default: return <CheckCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            PR Health Checker
          </h1>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-accent-electric" />
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Paste your press release or pitch to get instant feedback on tone, readability, and media relevance.
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
                  Analyze Your PR Content
                </h2>
                <p className="text-muted-foreground">
                  Get professional feedback in seconds
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Paste your press release or pitch
                  </label>
                  <Textarea
                    value={prText}
                    onChange={(e) => setPrText(e.target.value)}
                    placeholder="Paste your press release, media pitch, or announcement here..."
                    className="min-h-[200px]"
                    required
                  />
                </div>


                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Analyzing Content..." : "Check PR Health"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  PR Health Check Results
                </h2>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                  <span className="text-3xl font-bold text-primary">{healthResults.overallScore}</span>
                </div>
                <p className="text-muted-foreground">
                  Overall Health Score: {healthResults.overallScore}/100
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {Object.entries(healthResults).filter(([key]) => key !== 'overallScore').map(([key, result]: [string, any]) => (
                  <div key={key} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(result.status)}
                        <h3 className="font-medium text-foreground capitalize">{key}</h3>
                      </div>
                      <span className="text-sm font-bold text-foreground">{result.score}/100</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{result.feedback}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 mb-8">
                <h3 className="font-bold text-foreground mb-4">Recommended Improvements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Add more compelling statistics in the first paragraph</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Include a stronger call-to-action for journalists</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">Consider adding executive quotes for credibility</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="mr-4"
                >
                  Check Another
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/contact">Get Professional Review</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default PRHealthChecker;
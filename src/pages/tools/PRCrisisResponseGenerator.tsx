import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Shield, AlertTriangle, ArrowRight, Copy, CheckCircle } from "lucide-react";

const PRCrisisResponseGenerator = () => {
  const [scenario, setScenario] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [responses, setResponses] = useState<any[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const crisisTypes = [
    "Data Breach/Security Issue",
    "Product Recall/Quality Issue", 
    "Executive Misconduct",
    "Customer Service Failure",
    "Social Media Backlash",
    "Financial Irregularities",
    "Workplace Incident",
    "Environmental Impact",
    "Partnership Controversy",
    "Service Outage/Technical Issue"
  ];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scenario.trim()) return;

    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      const sampleResponses = [
        {
          type: "Initial Public Statement",
          tone: "Acknowledging & Responsible",
          content: `We are aware of the situation regarding ${scenario.toLowerCase()} and take this matter very seriously. We are currently investigating the full scope of the issue and will provide updates as we learn more. The safety and trust of our customers is our top priority, and we are committed to addressing this matter transparently and thoroughly.`
        },
        {
          type: "Internal Communication",
          tone: "Direct & Reassuring",
          content: `Team, we want to address the current situation regarding ${scenario.toLowerCase()}. We are handling this matter with the urgency and care it deserves. Our crisis response team is coordinating our efforts, and we will keep you updated on next steps. Please direct any external inquiries to our communications team.`
        },
        {
          type: "Customer Communication", 
          tone: "Empathetic & Solution-Focused",
          content: `We understand your concerns about ${scenario.toLowerCase()} and want to personally address this situation. We sincerely apologize for any inconvenience this may have caused. Here's what we're doing to resolve this: [specific actions]. We value your trust and are committed to making this right.`
        },
        {
          type: "Media Response",
          tone: "Professional & Factual", 
          content: `In response to questions about ${scenario.toLowerCase()}, we can confirm that we are actively investigating this matter. We are working closely with relevant authorities and experts to understand the full scope and implement appropriate measures. We will provide additional information as it becomes available.`
        }
      ];

      setResponses(sampleResponses);
      setIsGenerating(false);
      toast({
        title: "Crisis Responses Generated!",
        description: "Review and customize these templates for your situation.",
      });
    }, 2000);
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
      toast({
        title: "Copied to clipboard!",
        description: "Response template copied successfully.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the text manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            PR Crisis Response Generator
          </h1>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-accent-electric" />
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Generate professional crisis communication templates instantly. Be prepared for any situation with appropriate, measured responses.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Generate Crisis Communication Templates
              </h2>
              <p className="text-muted-foreground">
                Describe your crisis scenario and get professional response templates for different audiences
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  Crisis Scenario (be specific about the situation)
                </label>
                <Textarea
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value)}
                  placeholder="e.g., Customer data was accidentally exposed in our mobile app due to a configuration error affecting approximately 10,000 users. No financial information was compromised, but names and email addresses were visible."
                  className="min-h-[120px] resize-none"
                  maxLength={500}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  {scenario.length}/500 characters
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h4 className="font-medium text-foreground mb-2 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2 text-amber-500" />
                  Common Crisis Types:
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-muted-foreground">
                  {crisisTypes.map((type, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-1 h-1 bg-muted-foreground rounded-full mr-2"></span>
                      {type}
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isGenerating || !scenario.trim()}
              >
                {isGenerating ? "Generating Responses..." : "Generate Crisis Responses"} 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {responses.length > 0 && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Your Crisis Response Templates
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Customize these templates for your specific situation and stakeholders
                  </p>
                </div>

                <div className="grid gap-6">
                  {responses.map((response, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-sm transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-bold text-foreground">{response.type}</h4>
                          <p className="text-sm text-muted-foreground">Tone: {response.tone}</p>
                        </div>
                        <Button
                          onClick={() => copyToClipboard(response.content, index)}
                          variant="outline"
                          size="sm"
                          className="flex items-center space-x-1"
                        >
                          {copiedIndex === index ? (
                            <>
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span>Copy</span>
                            </>
                          )}
                        </Button>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                          {response.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-amber-800 mb-1">Important Reminders</h5>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li>• Review with legal counsel before publishing</li>
                        <li>• Customize for your brand voice and specific situation</li>
                        <li>• Consider timing and audience for each communication</li>
                        <li>• Follow up with concrete actions and regular updates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    onClick={() => {
                      setScenario("");
                      setResponses([]);
                    }}
                    variant="outline"
                    className="mr-4"
                  >
                    Generate New Responses
                  </Button>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="/contact">Get Crisis PR Strategy</a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PRCrisisResponseGenerator;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, ArrowRight, CheckCircle, Users, Zap } from "lucide-react";

const InfluencerCampaignTimeline = () => {
  const [campaignName, setCampaignName] = useState("");
  const [campaignType, setCampaignType] = useState("");
  const [launchDate, setLaunchDate] = useState("");
  const [influencerCount, setInfluencerCount] = useState("");
  const [contentType, setContentType] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [timeline, setTimeline] = useState<any>(null);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!campaignName || !campaignType || !launchDate || !influencerCount || !contentType) return;

    setIsGenerating(true);

    setTimeout(() => {
      const launch = new Date(launchDate);
      const today = new Date();
      const daysUntilLaunch = Math.ceil((launch.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      
      // Calculate timeline based on campaign complexity
      const influencers = parseInt(influencerCount);
      const complexity = influencers > 10 ? 'high' : influencers > 5 ? 'medium' : 'low';
      
      const baseTimelines = {
        'product-launch': {
          high: 45, medium: 35, low: 25
        },
        'brand-awareness': {
          high: 35, medium: 25, low: 20
        },
        'event-promotion': {
          high: 30, medium: 20, low: 15
        },
        'content-series': {
          high: 40, medium: 30, low: 20
        },
        'sales-campaign': {
          high: 25, medium: 20, low: 15
        }
      };

      const recommendedDays = baseTimelines[campaignType as keyof typeof baseTimelines][complexity as keyof typeof baseTimelines[keyof typeof baseTimelines]];
      
      // Generate timeline phases
      const phases = [
        {
          name: "Campaign Planning & Strategy",
          duration: Math.ceil(recommendedDays * 0.15),
          tasks: [
            "Define campaign objectives and KPIs",
            "Create influencer persona and selection criteria",
            "Develop content guidelines and brand brief",
            "Set budget allocation and approval workflows"
          ],
          color: "bg-blue-500"
        },
        {
          name: "Influencer Research & Outreach",
          duration: Math.ceil(recommendedDays * 0.25),
          tasks: [
            "Research and identify target influencers",
            "Analyze influencer audience demographics",
            "Send initial outreach and partnership proposals",
            "Negotiate rates and finalize contracts"
          ],
          color: "bg-purple-500"
        },
        {
          name: "Content Creation & Review",
          duration: Math.ceil(recommendedDays * 0.35),
          tasks: [
            "Brief influencers on campaign requirements",
            "Content creation and initial drafts",
            "Review and feedback cycles",
            "Final content approval and scheduling"
          ],
          color: "bg-green-500"
        },
        {
          name: "Campaign Launch & Monitoring",
          duration: Math.ceil(recommendedDays * 0.15),
          tasks: [
            "Content publishing and go-live",
            "Real-time campaign monitoring",
            "Community management and engagement",
            "Daily performance tracking"
          ],
          color: "bg-orange-500"
        },
        {
          name: "Analysis & Reporting",
          duration: Math.ceil(recommendedDays * 0.10),
          tasks: [
            "Compile campaign performance data",
            "Generate influencer performance reports",
            "Calculate ROI and campaign metrics",
            "Create insights and recommendations"
          ],
          color: "bg-red-500"
        }
      ];

      // Calculate dates for each phase
      let currentDate = new Date(today);
      const timelineWithDates = phases.map(phase => {
        const startDate = new Date(currentDate);
        currentDate.setDate(currentDate.getDate() + phase.duration);
        const endDate = new Date(currentDate);
        
        return {
          ...phase,
          startDate: startDate.toLocaleDateString(),
          endDate: endDate.toLocaleDateString()
        };
      });

      setTimeline({
        phases: timelineWithDates,
        totalDuration: recommendedDays,
        daysUntilLaunch,
        isRushed: daysUntilLaunch < recommendedDays,
        campaignName,
        influencerCount: influencers,
        contentType
      });

      setIsGenerating(false);
      toast({
        title: "Timeline Generated!",
        description: "Your campaign timeline is ready for planning.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Influencer Campaign Timeline Planner
          </h1>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Calendar className="w-8 h-8 text-accent-electric" />
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Create detailed timelines for your influencer campaigns. Plan every phase from research to reporting.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Generate Campaign Timeline
              </h2>
              <p className="text-muted-foreground">
                Plan your influencer campaign from start to finish with realistic timelines
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Campaign Name
                  </label>
                  <Input
                    value={campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                    placeholder="Summer Product Launch Campaign"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Campaign Type
                  </label>
                  <Select value={campaignType} onValueChange={setCampaignType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select campaign type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product-launch">Product Launch</SelectItem>
                      <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                      <SelectItem value="event-promotion">Event Promotion</SelectItem>
                      <SelectItem value="content-series">Content Series</SelectItem>
                      <SelectItem value="sales-campaign">Sales Campaign</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Target Launch Date
                  </label>
                  <Input
                    type="date"
                    value={launchDate}
                    onChange={(e) => setLaunchDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Number of Influencers
                  </label>
                  <Select value={influencerCount} onValueChange={setInfluencerCount}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select count" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1-3 Influencers</SelectItem>
                      <SelectItem value="5">4-7 Influencers</SelectItem>
                      <SelectItem value="10">8-15 Influencers</SelectItem>
                      <SelectItem value="20">15+ Influencers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Primary Content Type
                  </label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram-posts">Instagram Posts & Stories</SelectItem>
                      <SelectItem value="tiktok-videos">TikTok Videos</SelectItem>
                      <SelectItem value="youtube-content">YouTube Videos</SelectItem>
                      <SelectItem value="mixed-content">Mixed Platform Content</SelectItem>
                      <SelectItem value="blog-content">Blog Posts & Articles</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h4 className="font-medium text-foreground mb-2">Timeline Factors:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Campaign complexity and scope</li>
                  <li>• Number of influencers and coordination needs</li>
                  <li>• Content creation and review cycles</li>
                  <li>• Legal approvals and contract negotiations</li>
                </ul>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isGenerating || !campaignName || !campaignType || !launchDate || !influencerCount || !contentType}
              >
                {isGenerating ? "Generating Timeline..." : "Generate Campaign Timeline"} 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {timeline && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Timeline for "{timeline.campaignName}"
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {timeline.totalDuration} days • {timeline.influencerCount} influencers • {timeline.contentType.replace('-', ' ')}
                  </p>
                  {timeline.isRushed && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-4">
                      <p className="text-amber-800 text-sm flex items-center justify-center">
                        <Zap className="w-4 h-4 mr-2" />
                        ⚠️ Rushed Timeline: Consider extending your launch date for optimal results
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {timeline.phases.map((phase: any, index: number) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`w-4 h-4 ${phase.color} rounded-full mr-3 flex-shrink-0 mt-1`}></div>
                          <div>
                            <h4 className="font-bold text-foreground">{phase.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {phase.startDate} - {phase.endDate} ({phase.duration} days)
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{phase.duration}d</span>
                        </div>
                      </div>
                      
                      <div className="ml-7">
                        <h5 className="font-medium text-foreground mb-2">Key Tasks:</h5>
                        <ul className="space-y-1">
                          {phase.tasks.map((task: string, taskIndex: number) => (
                            <li key={taskIndex} className="text-sm text-muted-foreground flex items-start">
                              <CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0 text-green-600" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent-electric/10 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Pro Timeline Tips
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Success Factors:</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Buffer time for unexpected delays</li>
                        <li>• Clear communication channels</li>
                        <li>• Regular check-ins and progress updates</li>
                        <li>• Flexible scheduling for influencer availability</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Common Delays:</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Content revision cycles</li>
                        <li>• Influencer scheduling conflicts</li>
                        <li>• Legal and compliance reviews</li>
                        <li>• Platform algorithm changes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    onClick={() => {
                      setCampaignName("");
                      setCampaignType("");
                      setLaunchDate("");
                      setInfluencerCount("");
                      setContentType("");
                      setTimeline(null);
                    }}
                    variant="outline"
                    className="mr-4"
                  >
                    Create New Timeline
                  </Button>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="/contact">Get Campaign Management</a>
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

export default InfluencerCampaignTimeline;
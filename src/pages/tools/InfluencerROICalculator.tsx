import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calculator, TrendingUp, ArrowRight, DollarSign, Users, Eye } from "lucide-react";

const InfluencerROICalculator = () => {
  const [campaignBudget, setCampaignBudget] = useState("");
  const [followerCount, setFollowerCount] = useState("");
  const [engagementRate, setEngagementRate] = useState("");
  const [campaignType, setCampaignType] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!campaignBudget || !followerCount || !engagementRate || !campaignType) return;

    setIsCalculating(true);

    setTimeout(() => {
      const budget = parseFloat(campaignBudget);
      const followers = parseInt(followerCount);
      const engagement = parseFloat(engagementRate);
      
      // Calculate metrics based on industry averages
      const impressions = Math.round(followers * 0.15); // Organic reach estimate
      const engagements = Math.round(impressions * (engagement / 100));
      const clicks = Math.round(engagements * 0.08); // Average CTR
      const conversions = Math.round(clicks * 0.025); // Average conversion rate
      
      const costPerImpression = budget / impressions;
      const costPerEngagement = budget / engagements;
      const costPerClick = budget / clicks;
      const costPerConversion = budget / conversions;

      // ROI calculation (assuming $50 average order value)
      const estimatedRevenue = conversions * 50;
      const roi = ((estimatedRevenue - budget) / budget) * 100;

      setResults({
        impressions,
        engagements,
        clicks,
        conversions,
        costPerImpression: costPerImpression.toFixed(2),
        costPerEngagement: costPerEngagement.toFixed(2),
        costPerClick: costPerClick.toFixed(2),
        costPerConversion: costPerConversion.toFixed(2),
        estimatedRevenue,
        roi: roi.toFixed(1),
        campaignType
      });

      setIsCalculating(false);
      toast({
        title: "ROI Calculated!",
        description: "Your influencer campaign projections are ready.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Influencer ROI Calculator
          </h1>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Calculator className="w-8 h-8 text-accent-electric" />
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Calculate the expected ROI and key metrics for your influencer marketing campaigns before you invest.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Project Your Campaign Performance
              </h2>
              <p className="text-muted-foreground">
                Get data-driven insights on expected reach, engagement, and ROI
              </p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Campaign Budget ($)
                  </label>
                  <Input
                    type="number"
                    value={campaignBudget}
                    onChange={(e) => setCampaignBudget(e.target.value)}
                    placeholder="5000"
                    min="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Influencer Follower Count
                  </label>
                  <Input
                    type="number"
                    value={followerCount}
                    onChange={(e) => setFollowerCount(e.target.value)}
                    placeholder="50000"
                    min="1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Average Engagement Rate (%)
                  </label>
                  <Input
                    type="number"
                    step="0.1"
                    value={engagementRate}
                    onChange={(e) => setEngagementRate(e.target.value)}
                    placeholder="3.5"
                    min="0.1"
                    max="20"
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
                      <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                      <SelectItem value="product-launch">Product Launch</SelectItem>
                      <SelectItem value="sales-conversion">Sales/Conversion</SelectItem>
                      <SelectItem value="event-promotion">Event Promotion</SelectItem>
                      <SelectItem value="content-collaboration">Content Collaboration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h4 className="font-medium text-foreground mb-2">Calculation Notes:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Based on industry averages and typical conversion rates</li>
                  <li>• Assumes $50 average order value for revenue calculations</li>
                  <li>• Results may vary based on audience quality and content performance</li>
                  <li>• Use as a starting point for campaign planning</li>
                </ul>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isCalculating || !campaignBudget || !followerCount || !engagementRate || !campaignType}
              >
                {isCalculating ? "Calculating ROI..." : "Calculate Campaign ROI"} 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {results && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Your Campaign Projections
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Based on {campaignType.replace('-', ' ')} campaign type
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                    <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-2xl text-foreground">{results.impressions.toLocaleString()}</h4>
                    <p className="text-muted-foreground text-sm">Expected Impressions</p>
                    <p className="text-xs text-muted-foreground mt-1">${results.costPerImpression} per impression</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-2xl text-foreground">{results.engagements.toLocaleString()}</h4>
                    <p className="text-muted-foreground text-sm">Expected Engagements</p>
                    <p className="text-xs text-muted-foreground mt-1">${results.costPerEngagement} per engagement</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h4 className="font-bold text-2xl text-foreground">{results.clicks.toLocaleString()}</h4>
                    <p className="text-muted-foreground text-sm">Expected Clicks</p>
                    <p className="text-xs text-muted-foreground mt-1">${results.costPerClick} per click</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent-electric/10 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                      <h4 className="font-bold text-xl text-foreground">{results.conversions}</h4>
                      <p className="text-muted-foreground text-sm">Expected Conversions</p>
                      <p className="text-xs text-muted-foreground">${results.costPerConversion} per conversion</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-foreground">${results.estimatedRevenue.toLocaleString()}</h4>
                      <p className="text-muted-foreground text-sm">Estimated Revenue</p>
                      <p className="text-xs text-muted-foreground">Based on $50 AOV</p>
                    </div>
                    <div>
                      <h4 className={`font-bold text-2xl ${parseFloat(results.roi) > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {results.roi > 0 ? '+' : ''}{results.roi}%
                      </h4>
                      <p className="text-muted-foreground text-sm">Projected ROI</p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    onClick={() => {
                      setCampaignBudget("");
                      setFollowerCount("");
                      setEngagementRate("");
                      setCampaignType("");
                      setResults(null);
                    }}
                    variant="outline"
                    className="mr-4"
                  >
                    Calculate Another Campaign
                  </Button>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="/contact">Get Influencer Strategy</a>
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

export default InfluencerROICalculator;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { DollarSign, Users, TrendingUp, ArrowRight, Calculator, Zap } from "lucide-react";

const InfluencerRateCalculator = () => {
  const [platform, setPlatform] = useState("");
  const [followerCount, setFollowerCount] = useState("");
  const [engagementRate, setEngagementRate] = useState("");
  const [contentType, setContentType] = useState("");
  const [influencerTier, setInfluencerTier] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [rates, setRates] = useState<any>(null);
  const { toast } = useToast();

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform || !followerCount || !engagementRate || !contentType || !influencerTier) return;

    setIsCalculating(true);

    setTimeout(() => {
      const followers = parseInt(followerCount);
      const engagement = parseFloat(engagementRate);
      
      // Base rate calculation based on platform and tier
      const baseRates = {
        "instagram": {
          "nano": { post: 100, story: 50, reel: 150 },
          "micro": { post: 500, story: 200, reel: 750 },
          "macro": { post: 2500, story: 1000, reel: 3500 },
          "mega": { post: 10000, story: 4000, reel: 15000 }
        },
        "tiktok": {
          "nano": { video: 200, story: 75 },
          "micro": { video: 800, story: 300 },
          "macro": { video: 3000, story: 1200 },
          "mega": { video: 12000, story: 5000 }
        },
        "youtube": {
          "nano": { video: 500, short: 200 },
          "micro": { video: 2000, short: 800 },
          "macro": { video: 8000, short: 3000 },
          "mega": { video: 25000, short: 10000 }
        },
        "twitter": {
          "nano": { tweet: 50, thread: 100 },
          "micro": { tweet: 200, thread: 400 },
          "macro": { tweet: 800, thread: 1500 },
          "mega": { tweet: 3000, thread: 6000 }
        }
      };

      const platformRates = baseRates[platform as keyof typeof baseRates];
      const tierRates = platformRates[influencerTier as keyof typeof platformRates];
      
      // Apply engagement multiplier
      const engagementMultiplier = engagement > 5 ? 1.3 : engagement > 3 ? 1.1 : engagement > 1 ? 1.0 : 0.8;
      
      // Calculate rates for different content types
      const calculatedRates = Object.entries(tierRates).reduce((acc, [key, value]) => {
        acc[key] = Math.round((value as number) * engagementMultiplier);
        return acc;
      }, {} as Record<string, number>);

      // Calculate package deals (10-15% discount)
      const packageRates = {
        "3-post-package": Math.round(calculatedRates[Object.keys(calculatedRates)[0]] * 3 * 0.9),
        "month-long-partnership": Math.round(calculatedRates[Object.keys(calculatedRates)[0]] * 8 * 0.85),
        "brand-ambassador": Math.round(calculatedRates[Object.keys(calculatedRates)[0]] * 12 * 0.8)
      };

      setRates({
        individual: calculatedRates,
        packages: packageRates,
        platform,
        tier: influencerTier,
        engagement,
        followers
      });

      setIsCalculating(false);
      toast({
        title: "Rates Calculated!",
        description: "Fair market rates have been calculated based on industry standards.",
      });
    }, 1500);
  };

  const formatTier = (tier: string) => {
    const tierLabels = {
      "nano": "Nano (1K-10K)",
      "micro": "Micro (10K-100K)", 
      "macro": "Macro (100K-1M)",
      "mega": "Mega (1M+)"
    };
    return tierLabels[tier as keyof typeof tierLabels] || tier;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Influencer Rate Calculator
          </h1>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <DollarSign className="w-8 h-8 text-accent-electric" />
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Calculate fair market rates for influencer partnerships based on follower count, engagement, and content type.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Get Industry-Standard Rate Estimates
              </h2>
              <p className="text-muted-foreground">
                Based on current market data and industry benchmarks
              </p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Platform
                  </label>
                  <Select value={platform} onValueChange={setPlatform}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="twitter">Twitter/X</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Follower Count
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
                    Influencer Tier
                  </label>
                  <Select value={influencerTier} onValueChange={setInfluencerTier}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nano">Nano (1K-10K followers)</SelectItem>
                      <SelectItem value="micro">Micro (10K-100K followers)</SelectItem>
                      <SelectItem value="macro">Macro (100K-1M followers)</SelectItem>
                      <SelectItem value="mega">Mega (1M+ followers)</SelectItem>
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
                      <SelectItem value="single-post">Single Post/Video</SelectItem>
                      <SelectItem value="story-series">Story Series</SelectItem>
                      <SelectItem value="long-form">Long-form Content</SelectItem>
                      <SelectItem value="package-deal">Package Deal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h4 className="font-medium text-foreground mb-2">Rate Calculation Factors:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Follower count and audience quality</li>
                  <li>• Engagement rate and audience interaction</li>
                  <li>• Platform-specific content performance</li>
                  <li>• Current market rates and industry standards</li>
                </ul>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isCalculating || !platform || !followerCount || !engagementRate || !contentType || !influencerTier}
              >
                {isCalculating ? "Calculating Rates..." : "Calculate Fair Rates"} 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {rates && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Recommended Rates for {formatTier(rates.tier)} Influencer
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {rates.followers.toLocaleString()} followers • {rates.engagement}% engagement • {rates.platform}
                  </p>
                </div>

                <div className="grid gap-6">
                  {/* Individual Content Rates */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-foreground mb-4 flex items-center">
                      <Calculator className="w-5 h-5 mr-2 text-primary" />
                      Individual Content Rates
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(rates.individual).map(([type, rate]) => (
                        <div key={type} className="text-center p-4 bg-gray-50 rounded-lg">
                          <h5 className="font-medium text-foreground capitalize mb-2">
                            {type.replace('_', ' ')}
                          </h5>
                          <p className="text-2xl font-bold text-primary">${rate.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground mt-1">per piece</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Package Deal Rates */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent-electric/10 rounded-xl p-6">
                    <h4 className="font-bold text-foreground mb-4 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-primary" />
                      Package Deal Rates (Discounted)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <h5 className="font-medium text-foreground mb-2">3-Post Package</h5>
                        <p className="text-xl font-bold text-primary">${rates.packages['3-post-package'].toLocaleString()}</p>
                        <p className="text-xs text-green-600 mt-1">10% savings</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <h5 className="font-medium text-foreground mb-2">Monthly Partnership</h5>
                        <p className="text-xl font-bold text-primary">${rates.packages['month-long-partnership'].toLocaleString()}</p>
                        <p className="text-xs text-green-600 mt-1">15% savings</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <h5 className="font-medium text-foreground mb-2">Brand Ambassador</h5>
                        <p className="text-xl font-bold text-primary">${rates.packages['brand-ambassador'].toLocaleString()}</p>
                        <p className="text-xs text-green-600 mt-1">20% savings</p>
                      </div>
                    </div>
                  </div>

                  {/* Rate Breakdown */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h4 className="font-bold text-amber-800 mb-4">💡 Rate Insights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium text-amber-800 mb-2">Factors Increasing Rates:</h5>
                        <ul className="space-y-1 text-amber-700">
                          <li>• High engagement rate ({rates.engagement}% is {rates.engagement > 3 ? 'excellent' : 'good'})</li>
                          <li>• Quality audience demographics</li>
                          <li>• Niche expertise and authority</li>
                          <li>• Professional content quality</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-amber-800 mb-2">Negotiation Tips:</h5>
                        <ul className="space-y-1 text-amber-700">
                          <li>• Package deals offer better value</li>
                          <li>• Long-term partnerships reduce costs</li>
                          <li>• Usage rights affect pricing</li>
                          <li>• Exclusivity clauses increase rates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    onClick={() => {
                      setPlatform("");
                      setFollowerCount("");
                      setEngagementRate("");
                      setContentType("");
                      setInfluencerTier("");
                      setRates(null);
                    }}
                    variant="outline"
                    className="mr-4"
                  >
                    Calculate New Rates
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

export default InfluencerRateCalculator;
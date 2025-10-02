import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { BarChart, TrendingUp, ArrowRight, Eye, Heart, MessageCircle, Share } from "lucide-react";

const InfluencerPerformanceTracker = () => {
  const [platform, setPlatform] = useState("");
  const [contentType, setContentType] = useState("");
  const [impressions, setImpressions] = useState("");
  const [likes, setLikes] = useState("");
  const [comments, setComments] = useState("");
  const [shares, setShares] = useState("");
  const [followers, setFollowers] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const { toast } = useToast();

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!platform || !contentType || !impressions || !likes || !followers) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      const impressionsNum = parseInt(impressions);
      const likesNum = parseInt(likes);
      const commentsNum = parseInt(comments) || 0;
      const sharesNum = parseInt(shares) || 0;
      const followersNum = parseInt(followers);

      // Calculate key metrics
      const engagementRate = ((likesNum + commentsNum + sharesNum) / impressionsNum) * 100;
      const reachRate = (impressionsNum / followersNum) * 100;
      const likeRate = (likesNum / impressionsNum) * 100;
      const commentRate = (commentsNum / impressionsNum) * 100;
      const shareRate = (sharesNum / impressionsNum) * 100;
      const saveRate = platform === "instagram" ? Math.random() * 2 : 0; // Simulated for demo

      // Benchmark data by platform
      const benchmarks = {
        instagram: {
          engagementRate: { poor: 1, average: 3, good: 6 },
          reachRate: { poor: 10, average: 20, good: 35 },
          likeRate: { poor: 2, average: 4, good: 8 }
        },
        tiktok: {
          engagementRate: { poor: 3, average: 6, good: 12 },
          reachRate: { poor: 20, average: 40, good: 70 },
          likeRate: { poor: 4, average: 8, good: 15 }
        },
        youtube: {
          engagementRate: { poor: 2, average: 4, good: 8 },
          reachRate: { poor: 15, average: 30, good: 50 },
          likeRate: { poor: 3, average: 6, good: 12 }
        },
        twitter: {
          engagementRate: { poor: 0.5, average: 1.5, good: 3 },
          reachRate: { poor: 5, average: 15, good: 30 },
          likeRate: { poor: 1, average: 2, good: 4 }
        }
      };

      const platformBenchmarks = benchmarks[platform as keyof typeof benchmarks];

      // Performance scoring
      const getPerformanceScore = (value: number, benchmark: any) => {
        if (value >= benchmark.good) return { score: "Excellent", color: "text-green-600" };
        if (value >= benchmark.average) return { score: "Good", color: "text-yellow-600" };
        if (value >= benchmark.poor) return { score: "Average", color: "text-orange-600" };
        return { score: "Needs Improvement", color: "text-red-600" };
      };

      const engagementScore = getPerformanceScore(engagementRate, platformBenchmarks.engagementRate);
      const reachScore = getPerformanceScore(reachRate, platformBenchmarks.reachRate);

      // Generate insights
      const insights = [];
      if (engagementRate > platformBenchmarks.engagementRate.good) {
        insights.push("🎉 Outstanding engagement rate! Your content resonates well with your audience.");
      } else if (engagementRate < platformBenchmarks.engagementRate.poor) {
        insights.push("📈 Consider improving content quality or posting at optimal times to boost engagement.");
      }

      if (reachRate > platformBenchmarks.reachRate.good) {
        insights.push("🚀 Excellent reach! Your content is getting great organic distribution.");
      } else if (reachRate < platformBenchmarks.reachRate.poor) {
        insights.push("📱 Low reach suggests algorithm isn't favoring your content. Try trending hashtags or topics.");
      }

      if (commentRate > 1) {
        insights.push("💬 High comment rate indicates strong community engagement and conversation.");
      }

      if (shareRate > 1) {
        insights.push("🔄 Great share rate! Your content is compelling enough for users to share with others.");
      }

      setAnalysis({
        metrics: {
          engagementRate: engagementRate.toFixed(2),
          reachRate: reachRate.toFixed(2),
          likeRate: likeRate.toFixed(2),
          commentRate: commentRate.toFixed(2),
          shareRate: shareRate.toFixed(2),
          saveRate: saveRate.toFixed(2)
        },
        scores: {
          engagement: engagementScore,
          reach: reachScore
        },
        insights,
        platform,
        contentType,
        rawData: {
          impressions: impressionsNum,
          likes: likesNum,
          comments: commentsNum,
          shares: sharesNum,
          followers: followersNum
        }
      });

      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete!",
        description: "Your content performance has been analyzed.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Influencer Performance Tracker
          </h1>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <BarChart className="w-8 h-8 text-accent-electric" />
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Analyze influencer content performance with detailed metrics and benchmarking against industry standards.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Analyze Content Performance
              </h2>
              <p className="text-muted-foreground">
                Input your content metrics to get detailed performance analysis and insights
              </p>
            </div>

            <form onSubmit={handleAnalyze} className="space-y-6 mb-8">
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
                    Content Type
                  </label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feed-post">Feed Post</SelectItem>
                      <SelectItem value="story">Story</SelectItem>
                      <SelectItem value="reel">Reel/Short Video</SelectItem>
                      <SelectItem value="video">Long-form Video</SelectItem>
                      <SelectItem value="carousel">Carousel Post</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Impressions/Views
                  </label>
                  <Input
                    type="number"
                    value={impressions}
                    onChange={(e) => setImpressions(e.target.value)}
                    placeholder="50000"
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Likes/Reactions
                  </label>
                  <Input
                    type="number"
                    value={likes}
                    onChange={(e) => setLikes(e.target.value)}
                    placeholder="2500"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Comments (optional)
                  </label>
                  <Input
                    type="number"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="150"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Shares/Reposts (optional)
                  </label>
                  <Input
                    type="number"
                    value={shares}
                    onChange={(e) => setShares(e.target.value)}
                    placeholder="75"
                    min="0"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Total Follower Count
                  </label>
                  <Input
                    type="number"
                    value={followers}
                    onChange={(e) => setFollowers(e.target.value)}
                    placeholder="100000"
                    min="100"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 border border-gray-200">
                <h4 className="font-medium text-foreground mb-2">Metrics We'll Calculate:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Engagement Rate (total engagements / impressions)</li>
                  <li>• Reach Rate (impressions / followers)</li>
                  <li>• Individual interaction rates (likes, comments, shares)</li>
                  <li>• Performance vs. industry benchmarks</li>
                </ul>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isAnalyzing || !platform || !contentType || !impressions || !likes || !followers}
              >
                {isAnalyzing ? "Analyzing Performance..." : "Analyze Performance"} 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {analysis && (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Performance Analysis
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {analysis.platform} • {analysis.contentType.replace('-', ' ')} • {analysis.rawData.impressions.toLocaleString()} impressions
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                    <Eye className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-bold text-lg text-foreground">{analysis.metrics.reachRate}%</h4>
                    <p className="text-sm text-muted-foreground">Reach Rate</p>
                    <p className={`text-xs ${analysis.scores.reach.color} font-medium`}>{analysis.scores.reach.score}</p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                    <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-bold text-lg text-foreground">{analysis.metrics.engagementRate}%</h4>
                    <p className="text-sm text-muted-foreground">Engagement Rate</p>
                    <p className={`text-xs ${analysis.scores.engagement.color} font-medium`}>{analysis.scores.engagement.score}</p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                    <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-bold text-lg text-foreground">{analysis.metrics.likeRate}%</h4>
                    <p className="text-sm text-muted-foreground">Like Rate</p>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                    <MessageCircle className="w-6 h-6 text-primary mx-auto mb-2" />
                    <h4 className="font-bold text-lg text-foreground">{analysis.metrics.commentRate}%</h4>
                    <p className="text-sm text-muted-foreground">Comment Rate</p>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h4 className="font-bold text-foreground mb-4">Detailed Metrics Breakdown</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-foreground mb-3">Raw Numbers</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Impressions:</span>
                          <span className="font-medium text-foreground">{analysis.rawData.impressions.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Likes:</span>
                          <span className="font-medium text-foreground">{analysis.rawData.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Comments:</span>
                          <span className="font-medium text-foreground">{analysis.rawData.comments.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Shares:</span>
                          <span className="font-medium text-foreground">{analysis.rawData.shares.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-3">Performance Rates</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Share Rate:</span>
                          <span className="font-medium text-foreground">{analysis.metrics.shareRate}%</span>
                        </div>
                        {analysis.platform === "instagram" && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Save Rate:</span>
                            <span className="font-medium text-foreground">{analysis.metrics.saveRate}%</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Audience Size:</span>
                          <span className="font-medium text-foreground">{analysis.rawData.followers.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insights */}
                <div className="bg-gradient-to-r from-primary/10 to-accent-electric/10 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-4">🎯 Performance Insights</h4>
                  <div className="space-y-3">
                    {analysis.insights.map((insight: string, index: number) => (
                      <div key={index} className="bg-white rounded-lg p-3">
                        <p className="text-sm text-foreground">{insight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-bold text-blue-800 mb-4">📊 Optimization Recommendations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-blue-800 mb-2">Content Strategy:</h5>
                      <ul className="space-y-1 text-blue-700">
                        <li>• Post during peak audience activity times</li>
                        <li>• Use trending hashtags and topics</li>
                        <li>• Create more interactive content (polls, Q&As)</li>
                        <li>• Collaborate with other creators</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-800 mb-2">Engagement Tactics:</h5>
                      <ul className="space-y-1 text-blue-700">
                        <li>• Ask questions to encourage comments</li>
                        <li>• Respond to comments quickly</li>
                        <li>• Create shareable, valuable content</li>
                        <li>• Use call-to-actions effectively</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    onClick={() => {
                      setPlatform("");
                      setContentType("");
                      setImpressions("");
                      setLikes("");
                      setComments("");
                      setShares("");
                      setFollowers("");
                      setAnalysis(null);
                    }}
                    variant="outline"
                    className="mr-4"
                  >
                    Analyze New Content
                  </Button>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="/contact">Get Performance Strategy</a>
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

export default InfluencerPerformanceTracker;
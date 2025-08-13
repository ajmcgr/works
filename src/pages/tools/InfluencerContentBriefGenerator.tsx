import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FileText, Target, ArrowRight, Copy, CheckCircle, Calendar, Camera } from "lucide-react";

const InfluencerContentBriefGenerator = () => {
  const [brandName, setBrandName] = useState("");
  const [campaignObjective, setCampaignObjective] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [contentType, setContentType] = useState("");
  const [brandTone, setBrandTone] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [brief, setBrief] = useState<any>(null);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !campaignObjective || !productDescription || !targetAudience || !contentType || !brandTone) return;

    setIsGenerating(true);

    setTimeout(() => {
      const generatedBrief = {
        overview: `This campaign aims to ${campaignObjective.toLowerCase()} for ${brandName} through authentic ${contentType} content. We're looking for creative, engaging content that showcases ${productDescription} to our ${targetAudience} audience while maintaining a ${brandTone} brand voice.`,
        
        objectives: [
          `Increase brand awareness among ${targetAudience}`,
          `Drive engagement and social media following`,
          `Generate authentic user-generated content`,
          `Boost product consideration and sales conversions`
        ],

        deliverables: {
          "Instagram Post": ["1 main feed post", "3-5 Instagram Stories", "Saved story highlight"],
          "TikTok Video": ["1 primary TikTok video (15-60 seconds)", "2-3 behind-the-scenes clips"],
          "YouTube Video": ["1 main video (3-8 minutes)", "1 YouTube Short", "Community post"],
          "Blog Post": ["1 detailed blog post (800-1200 words)", "3 social media teasers"],
          "Product Review": ["Unboxing content", "Product demonstration", "Honest review and rating"]
        }[contentType] || ["1 main content piece", "2-3 supporting social posts"],

        contentGuidelines: [
          `Maintain ${brandTone} tone throughout all content`,
          `Highlight key product benefits naturally within content`,
          `Include authentic personal experiences and opinions`,
          `Use designated hashtags and brand mentions`,
          `Ensure content aligns with platform best practices`
        ],

        technicalRequirements: {
          "Instagram Post": "1080x1080px minimum, high-quality images, 2200 character limit for captions",
          "TikTok Video": "1080x1920px vertical video, engaging first 3 seconds, trending audio preferred",
          "YouTube Video": "1920x1080px minimum, good audio quality, custom thumbnail required",
          "Blog Post": "SEO optimized, minimum 800 words, high-quality images included",
          "Product Review": "Multiple angles, good lighting, honest assessment required"
        }[contentType] || "High-quality content following platform specifications",

        timeline: [
          "Content concept approval: 2-3 business days",
          "Content creation: 5-7 business days", 
          "Review and feedback: 1-2 business days",
          "Content publishing: As scheduled",
          "Performance reporting: Weekly updates"
        ],

        dosAndDonts: {
          dos: [
            "Be authentic and genuine in your content approach",
            "Disclose partnerships with #ad or #sponsored",
            "Engage with audience comments and questions",
            "Tag brand account and use provided hashtags",
            "Follow FTC guidelines for sponsored content"
          ],
          donts: [
            "Make unrealistic or false claims about the product",
            "Use competitor brands or products in content",
            "Post content that conflicts with brand values",
            "Ignore engagement or community management",
            "Miss agreed-upon deadlines without communication"
          ]
        }
      };

      setBrief(generatedBrief);
      setIsGenerating(false);
      toast({
        title: "Content Brief Generated!",
        description: "Your influencer content brief is ready to use.",
      });
    }, 2000);
  };

  const copyToClipboard = async (text: string, section: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSection(section);
      setTimeout(() => setCopiedSection(null), 2000);
      toast({
        title: "Copied to clipboard!",
        description: "Content section copied successfully.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the text manually.",
        variant: "destructive",
      });
    }
  };

  const copyFullBrief = () => {
    if (!brief) return;
    
    const fullBrief = `
INFLUENCER CONTENT BRIEF - ${brandName.toUpperCase()}

CAMPAIGN OVERVIEW:
${brief.overview}

CAMPAIGN OBJECTIVES:
${brief.objectives.map((obj: string) => `• ${obj}`).join('\n')}

DELIVERABLES:
${brief.deliverables.map((item: string) => `• ${item}`).join('\n')}

CONTENT GUIDELINES:
${brief.contentGuidelines.map((guideline: string) => `• ${guideline}`).join('\n')}

TECHNICAL REQUIREMENTS:
${brief.technicalRequirements}

PROJECT TIMELINE:
${brief.timeline.map((item: string) => `• ${item}`).join('\n')}

DO'S:
${brief.dosAndDonts.dos.map((item: string) => `• ${item}`).join('\n')}

DON'TS:
${brief.dosAndDonts.donts.map((item: string) => `• ${item}`).join('\n')}
    `.trim();

    copyToClipboard(fullBrief, 'full-brief');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Influencer Content Brief Generator
          </h1>
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-accent-electric" />
          </div>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Create comprehensive content briefs for influencer partnerships. Set clear expectations and ensure brand alignment.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Generate Professional Content Brief
              </h2>
              <p className="text-muted-foreground">
                Provide campaign details to create a detailed brief for your influencer partners
              </p>
            </div>

            <form onSubmit={handleGenerate} className="space-y-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Brand Name
                  </label>
                  <Input
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="TechStartup Inc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Campaign Objective
                  </label>
                  <Select value={campaignObjective} onValueChange={setCampaignObjective}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select objective" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="increase-brand-awareness">Increase Brand Awareness</SelectItem>
                      <SelectItem value="launch-new-product">Launch New Product</SelectItem>
                      <SelectItem value="drive-sales">Drive Sales & Conversions</SelectItem>
                      <SelectItem value="build-community">Build Community</SelectItem>
                      <SelectItem value="content-creation">Content Creation</SelectItem>
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
                      <SelectItem value="Instagram Post">Instagram Post</SelectItem>
                      <SelectItem value="TikTok Video">TikTok Video</SelectItem>
                      <SelectItem value="YouTube Video">YouTube Video</SelectItem>
                      <SelectItem value="Blog Post">Blog Post</SelectItem>
                      <SelectItem value="Product Review">Product Review</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Brand Tone
                  </label>
                  <Select value={brandTone} onValueChange={setBrandTone}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual and friendly">Casual & Friendly</SelectItem>
                      <SelectItem value="fun and playful">Fun & Playful</SelectItem>
                      <SelectItem value="luxury and sophisticated">Luxury & Sophisticated</SelectItem>
                      <SelectItem value="educational">Educational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Product/Service Description
                </label>
                <Textarea
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  placeholder="Revolutionary AI-powered productivity app that helps professionals manage tasks, schedule meetings, and optimize their daily workflows..."
                  className="min-h-[100px] resize-none"
                  maxLength={300}
                />
                <p className="text-xs text-muted-foreground mt-1">{productDescription.length}/300 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Target Audience
                </label>
                <Input
                  value={targetAudience}
                  onChange={(e) => setTargetAudience(e.target.value)}
                  placeholder="busy professionals aged 25-40, entrepreneurs, freelancers"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={isGenerating || !brandName || !campaignObjective || !productDescription || !targetAudience || !contentType || !brandTone}
              >
                {isGenerating ? "Generating Brief..." : "Generate Content Brief"} 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>

            {brief && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">
                    Content Brief for {brandName}
                  </h3>
                  <Button
                    onClick={copyFullBrief}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-1"
                  >
                    {copiedSection === 'full-brief' ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Full Brief</span>
                      </>
                    )}
                  </Button>
                </div>

                <div className="grid gap-6">
                  {/* Campaign Overview */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-foreground flex items-center">
                        <Target className="w-5 h-5 mr-2 text-primary" />
                        Campaign Overview
                      </h4>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{brief.overview}</p>
                  </div>

                  {/* Objectives */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="font-bold text-foreground mb-4">Campaign Objectives</h4>
                    <ul className="space-y-2">
                      {brief.objectives.map((objective: string, index: number) => (
                        <li key={index} className="text-sm text-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-foreground flex items-center">
                        <Camera className="w-5 h-5 mr-2 text-primary" />
                        Content Deliverables
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {brief.deliverables.map((deliverable: string, index: number) => (
                        <li key={index} className="text-sm text-foreground flex items-start">
                          <span className="w-2 h-2 bg-accent-electric rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-foreground flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-primary" />
                        Project Timeline
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {brief.timeline.map((item: string, index: number) => (
                        <li key={index} className="text-sm text-foreground flex items-start">
                          <span className="w-6 h-6 bg-primary/10 text-primary rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                            {index + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Do's and Don'ts */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <h4 className="font-bold text-green-800 mb-4">✓ Do's</h4>
                      <ul className="space-y-2">
                        {brief.dosAndDonts.dos.map((item: string, index: number) => (
                          <li key={index} className="text-sm text-green-700 flex items-start">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                      <h4 className="font-bold text-red-800 mb-4">✗ Don'ts</h4>
                      <ul className="space-y-2">
                        {brief.dosAndDonts.donts.map((item: string, index: number) => (
                          <li key={index} className="text-sm text-red-700 flex items-start">
                            <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    onClick={() => {
                      setBrandName("");
                      setCampaignObjective("");
                      setProductDescription("");
                      setTargetAudience("");
                      setContentType("");
                      setBrandTone("");
                      setBrief(null);
                    }}
                    variant="outline"
                    className="mr-4"
                  >
                    Create New Brief
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

export default InfluencerContentBriefGenerator;
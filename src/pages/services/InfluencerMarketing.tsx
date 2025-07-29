import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const InfluencerMarketing = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
            Influencer Marketing for Launches: Creator-Led Brand Amplification
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Target product drops and creator-led amplification for new brands, features, and launches. 
            Turn influential voices into your most powerful growth engine.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What Is Influencer Marketing Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">What Is Creator-Led Launch Marketing?</h2>
          <div className="prose max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Influencer marketing for launches is the strategic orchestration of creator partnerships designed to maximize awareness, social proof, and conversion during critical product or feature launch windows. Unlike traditional advertising, creator-led campaigns leverage authentic relationships and trusted voices to build genuine excitement and drive real business results.
            </p>
            <p>
              For product launches, timing and authenticity are everything. The right creators can transform a product announcement into a cultural moment, generating organic conversation that spreads far beyond their immediate audience. This is particularly powerful for tech products, consumer goods, and digital services where social proof drives adoption.
            </p>
            <p>
              Our approach combines data-driven creator selection with narrative strategy and campaign orchestration. We don't just find influencers—we build authentic partnerships that align creator expertise with brand values, ensuring every collaboration feels genuine and drives measurable impact. Learn how our process integrates with broader <Link to="/" className="text-primary hover:underline">PR and marketing strategies</Link>.
            </p>
            <p>
              From micro-influencers who drive high engagement rates to macro creators who deliver massive reach, we craft multi-tier campaigns that maximize both depth and breadth of impact while staying within budget constraints.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">How Our Launch Campaigns Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Creator Intelligence",
                description: "We analyze audience demographics, engagement rates, brand affinity, and content style to identify creators who authentically align with your product and target market."
              },
              {
                step: "2", 
                title: "Campaign Architecture",
                description: "Multi-phase campaigns with teaser content, launch day activation, and post-launch amplification. Coordinated timing maximizes social momentum."
              },
              {
                step: "3",
                title: "Performance Optimization",
                description: "Real-time monitoring of engagement metrics, reach, and conversion tracking. We optimize content and messaging throughout the campaign lifecycle."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Why Creator Partnerships Drive Launch Success</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Authentic Social Proof</h3>
                  <p className="text-muted-foreground">87% of consumers trust recommendations from people they follow more than traditional advertising. Creator endorsements provide genuine validation for new products.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Viral Momentum</h3>
                  <p className="text-muted-foreground">Strategic creator partnerships can trigger algorithm amplification across platforms, exponentially expanding reach beyond paid promotion budgets.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Niche Audience Access</h3>
                  <p className="text-muted-foreground">Creators provide direct access to highly engaged, niche communities that are often impossible to reach through traditional advertising channels.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Content Creation Scale</h3>
                  <p className="text-muted-foreground">One campaign generates dozens of unique content pieces across platforms, creating a library of authentic product demonstrations and testimonials.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Launch Day Amplification</h3>
                  <p className="text-muted-foreground">Coordinated creator posts create sustained social conversation throughout launch day, keeping your product trending and visible during critical early adoption periods.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Long-term Brand Building</h3>
                  <p className="text-muted-foreground">Strategic creator relationships extend beyond single campaigns, building ongoing brand advocacy and community that supports future launches.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">Launch Campaign Strategies We Execute</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Product Drop Campaigns</h3>
              <p className="text-muted-foreground mb-4">Coordinated launch day activations with unboxing content, first impressions, and authentic product demonstrations across platforms.</p>
              <div className="text-sm text-primary">→ Perfect for consumer tech, fashion, and lifestyle products</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Feature Announcements</h3>
              <p className="text-muted-foreground mb-4">Tutorial-focused campaigns showing creators using new features, highlighting practical benefits and use cases for existing products.</p>
              <div className="text-sm text-primary">→ Ideal for SaaS updates, app features, and platform launches</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Brand Storytelling</h3>
              <p className="text-muted-foreground mb-4">Behind-the-scenes content with founders and team members, building emotional connection and brand narrative through creator partnerships.</p>
              <div className="text-sm text-primary">→ Works for startups and companies launching new initiatives</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Educational Campaigns</h3>
              <p className="text-muted-foreground mb-4">Creators explain complex products or technologies, making them accessible and exciting for broader audiences while building thought leadership.</p>
              <div className="text-sm text-primary">→ Perfect for B2B tools, fintech, and emerging technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12 text-center">Launch Campaign Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">2.3M</div>
              <div className="text-muted-foreground">Total reach for hardware launch campaign</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">156%</div>
              <div className="text-muted-foreground">Increase in pre-orders during campaign week</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">94%</div>
              <div className="text-muted-foreground">Positive sentiment across creator content</div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-muted-foreground">Client Success Story</span>
            </div>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "Works orchestrated our smartwatch launch with 47 creators across fitness, tech, and lifestyle niches. The campaign generated 850K views in launch week and drove 23% of our first month sales. Their creator selection was perfect—every partnership felt authentic."
            </blockquote>
            <div className="font-semibold text-foreground">– Mike Torres, CMO, PulseWear</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline mb-6">Ready to Launch with Creator Power?</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Transform your next product launch with strategic creator partnerships that drive authentic engagement and real results.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground px-8 py-4">
              <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer">
                Try Media AI Free
              </a>
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-background/60 text-sm">
              Explore our <Link to="/services/ai-press-outreach" className="text-background hover:underline">AI-powered press outreach</Link> or 
              learn about our <Link to="/services/startup-pr" className="text-background hover:underline">startup PR services</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfluencerMarketing;
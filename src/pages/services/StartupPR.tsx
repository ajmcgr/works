import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";

const StartupPR = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
            Startup PR Agency: Build Brand Awareness from Day One
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Help founders build brand awareness and credibility from launch to scale. 
            Strategic PR that turns early-stage startups into category leaders.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What Is Startup PR Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">What Is Startup PR for Founders?</h2>
          <div className="prose max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Startup PR is the strategic art of building credibility and visibility for early-stage companies when every dollar counts and every mention matters. Unlike traditional corporate PR, startup public relations focuses on creating authentic narratives that resonate with investors, customers, and industry influencers while operating on lean budgets and compressed timelines.
            </p>
            <p>
              For founders, PR isn't just about media coverage—it's about establishing market position, building trust with stakeholders, and creating the social proof necessary to attract talent, funding, and customers. The right PR strategy can transform an unknown startup into a recognized player in their category.
            </p>
            <p>
              At Works, we understand that startup PR requires agility, creativity, and deep understanding of how emerging companies build influence in competitive markets. Our approach combines traditional media relations with modern digital strategies, leveraging AI-powered tools like <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Media AI</a> to maximize impact while minimizing resource drain.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">How Our Startup PR Process Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Narrative Architecture",
                description: "We craft your founding story, mission, and market positioning into compelling narratives that journalists and influencers want to share."
              },
              {
                step: "2", 
                title: "Strategic Outreach",
                description: "Using Media AI and curated media lists, we connect with journalists covering your industry, timing pitches for maximum impact."
              },
              {
                step: "3",
                title: "Momentum Building",
                description: "From first coverage to viral moments, we orchestrate campaigns that build on each other, creating sustained visibility and credibility."
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
          <h2 className="text-3xl font-headline text-foreground mb-8">Why Startup PR Matters More Than Ever</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Investor Confidence</h3>
                  <p className="text-muted-foreground">Strategic PR creates the market validation investors need to see before writing checks. Media coverage serves as third-party validation of your vision and execution.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Customer Acquisition</h3>
                  <p className="text-muted-foreground">For B2B startups, PR drives 3x more leads than paid advertising. Earned media builds trust faster than any ad campaign.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Talent Magnet</h3>
                  <p className="text-muted-foreground">Top talent wants to work for companies that matter. Media presence signals momentum and attracts candidates who want to be part of something significant.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Market Education</h3>
                  <p className="text-muted-foreground">When you're creating new categories or disrupting existing ones, PR educates the market about why your solution matters and how it changes the game.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Competitive Moat</h3>
                  <p className="text-muted-foreground">Strong brand presence makes it harder for competitors to copy your positioning and steal market share. PR builds defensible brand equity.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Crisis Prevention</h3>
                  <p className="text-muted-foreground">Established media relationships and positive coverage create goodwill that protects your reputation when challenges arise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12 text-center">Proven Results for Startup Clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">340%</div>
              <div className="text-muted-foreground">Average increase in website traffic within 90 days</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">87%</div>
              <div className="text-muted-foreground">Of clients secure funding within 6 months of launching PR</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Media mentions per campaign on average</div>
            </div>
          </div>
          
          <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-muted-foreground">Client Success Story</span>
            </div>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "Works helped us go from unknown AI startup to industry thought leaders in 4 months. Their strategic approach landed us coverage in TechCrunch, Forbes, and 12 industry publications. We closed our Series A two weeks after our biggest media hit."
            </blockquote>
            <div className="font-semibold text-foreground">– Sarah Chen, Founder, VectorAI</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline mb-6">Ready to Build Your Startup's Media Presence?</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Join the startups using strategic PR to accelerate growth, attract investors, and build category-defining brands.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground px-8 py-4">
              <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer">
                Try Media AI Free
              </a>
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-background/60 text-sm">
              Learn more about our <Link to="/" className="text-background hover:underline">comprehensive PR services</Link> or 
              explore our <Link to="/about" className="text-background hover:underline">agency approach</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartupPR;
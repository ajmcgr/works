import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check, Smartphone, Headphones, Watch } from "lucide-react";
import { Link } from "react-router-dom";

const ConsumerTechHardwarePR = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
            Consumer Tech & Hardware PR: DTC, Lifestyle Tech & Gadget Launches
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Specialized PR for direct-to-consumer brands, lifestyle technology, wearables, 
            and innovative gadgets targeting mainstream and enthusiast audiences.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What Is Consumer Tech PR Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">What Is Consumer Tech & Hardware PR?</h2>
          <div className="prose max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Consumer tech and hardware PR is the strategic promotion of physical products designed for everyday consumers, from smartphones and wearables to smart home devices and lifestyle gadgets. Unlike software or B2B tech PR, hardware campaigns require hands-on demonstrations, visual storytelling, and extensive reviewer relationships to showcase products that people can touch, feel, and experience.
            </p>
            <p>
              The consumer electronics market is intensely competitive, with shortened attention spans and rapid product cycles. Successful hardware PR requires understanding retail timing, seasonal buying patterns, influencer relationships, and the unique challenges of communicating complex technology benefits in simple, compelling ways that resonate with mainstream audiences.
            </p>
            <p>
              At Works, we specialize in the complete lifecycle of consumer tech PR: from pre-launch buzz building and exclusive review seeding to retail launch amplification and post-launch community building. Our approach combines traditional tech media relationships with modern creator partnerships, using tools like <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Media AI</a> to identify the perfect mix of reviewers, influencers, and lifestyle publications for each product category.
            </p>
            <p>
              Whether you're launching a revolutionary smartwatch, innovative headphones, or the next breakthrough in smart home technology, our consumer tech PR strategies drive awareness, generate buzz, and convert attention into sales through the channels that matter most to your target audience. This integrates seamlessly with our <Link to="/services/influencer-marketing" className="text-primary hover:underline">influencer marketing campaigns</Link> and broader <Link to="/" className="text-primary hover:underline">PR services</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">Our Consumer Tech PR Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Product Storytelling",
                description: "Craft compelling narratives that translate technical features into lifestyle benefits and emotional connections with target consumers."
              },
              {
                icon: <Headphones className="w-6 h-6" />,
                title: "Review Ecosystem",
                description: "Seed products to tech reviewers, lifestyle publications, and creator partners for authentic hands-on coverage and recommendations."
              },
              {
                icon: <Watch className="w-6 h-6" />,
                title: "Launch Amplification",
                description: "Coordinate multi-channel campaigns across traditional media, social platforms, and retail partnerships for maximum market impact."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Consumer Tech Categories We Specialize In</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Wearable Technology</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Smartwatches and fitness trackers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>AR/VR headsets and smart glasses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Health monitoring devices</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Audio & Gaming</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Premium headphones and earbuds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Gaming peripherals and accessories</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Smart speakers and home audio</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Smart Home & IoT</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Security cameras and doorbells</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Smart lighting and climate control</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Connected appliances and gadgets</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Mobile & Computing</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Smartphones and accessories</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Tablets and portable devices</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Charging solutions and power banks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Media Outlets Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8 text-center">Consumer Tech Media We Target</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Tech Review Sites</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>The Verge</div>
                <div>Engadget</div>
                <div>CNET</div>
                <div>TechCrunch</div>
                <div>Ars Technica</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Lifestyle & Design</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Wired</div>
                <div>Popular Science</div>
                <div>Cool Hunting</div>
                <div>Uncrate</div>
                <div>Gear Patrol</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Video & Creators</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Marques Brownlee (MKBHD)</div>
                <div>Unbox Therapy</div>
                <div>Dave2D</div>
                <div>iJustine</div>
                <div>Austin Evans</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Why Consumer Tech PR Drives Sales Success</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Purchase Validation</h3>
                  <p className="text-muted-foreground">73% of consumers read reviews before buying tech products. Strategic PR ensures positive coverage appears when prospects research your product.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Retail Partnership Support</h3>
                  <p className="text-muted-foreground">Strong media coverage supports negotiations with Best Buy, Amazon, and other retailers who want to carry products with proven market interest.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Visual Storytelling Power</h3>
                  <p className="text-muted-foreground">Hardware products require demonstration. PR generates photo and video content that shows products in action, supporting all marketing efforts.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Seasonal Launch Timing</h3>
                  <p className="text-muted-foreground">Consumer tech follows predictable seasonal patterns. Strategic PR ensures optimal timing for holiday shopping, back-to-school, and gift-giving periods.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Influencer Authenticity</h3>
                  <p className="text-muted-foreground">Tech reviewers build trusted relationships with audiences. Their recommendations carry more weight than traditional advertising for hardware purchases.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Competitive Differentiation</h3>
                  <p className="text-muted-foreground">In crowded categories like headphones or fitness trackers, strategic PR highlights unique features and positions products against established competitors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Campaign Types Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">Consumer Tech Campaign Strategies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Product Seeding Programs</h3>
              <p className="text-muted-foreground mb-4">Strategic distribution of review units to top-tier reviewers, lifestyle influencers, and niche communities for authentic hands-on coverage.</p>
              <div className="text-sm text-primary">→ Builds credible review ecosystem pre-launch</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Exclusive Preview Events</h3>
              <p className="text-muted-foreground mb-4">Hands-on media events and creator meetups that generate buzz through early access and behind-the-scenes content creation.</p>
              <div className="text-sm text-primary">→ Creates premium positioning and social proof</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Retail Launch Amplification</h3>
              <p className="text-muted-foreground mb-4">Coordinate media coverage with retail availability, promotional campaigns, and in-store demonstrations for maximum sales impact.</p>
              <div className="text-sm text-primary">→ Drives immediate purchase conversion</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Award & Recognition Campaigns</h3>
              <p className="text-muted-foreground mb-4">Submit products for CES Innovation Awards, design competitions, and industry recognition that provides long-term credibility.</p>
              <div className="text-sm text-primary">→ Creates lasting brand authority and sales tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12 text-center">Consumer Tech PR Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">1.8M</div>
              <div className="text-muted-foreground">Total video views for smartwatch launch</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.7</div>
              <div className="text-muted-foreground">Average review score across major outlets</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">312%</div>
              <div className="text-muted-foreground">Sales increase during launch month</div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-muted-foreground">Consumer Tech Success</span>
            </div>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "Works orchestrated our wireless earbuds launch perfectly. They secured reviews from MKBHD, The Verge, and 15 other key outlets, generating 2.3M impressions. Our Amazon sales tripled in the first week, and we sold out our initial production run in 6 days. The coverage was authentic and drove real results."
            </blockquote>
            <div className="font-semibold text-foreground">– Kevin Park, Founder, SoundFlow Audio</div>
          </div>
        </div>
      </section>

      {/* Seasonal Planning Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline text-foreground mb-8">Strategic Launch Timing</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Consumer tech success requires perfect timing. We plan campaigns around key retail seasons and industry events for maximum impact.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { season: "CES (Jan)", focus: "Industry Showcase" },
              { season: "Spring (Mar-May)", focus: "Lifestyle & Fitness" },
              { season: "Back-to-School (Aug)", focus: "Tech & Learning" },
              { season: "Holiday (Nov-Dec)", focus: "Gift & Premium" }
            ].map((period, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="font-semibold text-foreground mb-2">{period.season}</div>
                <div className="text-muted-foreground">{period.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline mb-6">Ready to Launch Your Consumer Tech Product?</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            From concept to retail success, our consumer tech PR strategies drive awareness, 
            generate reviews, and convert interest into sales.
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
              Explore our <Link to="/services/influencer-marketing" className="text-background hover:underline">influencer marketing services</Link> or 
              learn about <Link to="/services/crisis-reputation-management" className="text-background hover:underline">crisis management</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsumerTechHardwarePR;
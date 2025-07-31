import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check, BookOpen, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";

const CreativeStorytelling = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
            Creative Storytelling Services: Craft Your Origin Story & Market Position
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Help brands shape their origin story, mission, and market positioning through compelling narratives 
            that resonate with audiences and drive business growth.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What Is Creative Storytelling Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">What Is Creative Storytelling for Brands?</h2>
          <div className="prose max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Creative storytelling for brands is the strategic art of crafting compelling narratives that connect emotional resonance with business objectives. It goes beyond marketing copy to develop foundational stories that define who you are, why you exist, and why audiences should care about your mission. Great brand storytelling creates the narrative architecture that supports all other marketing and PR efforts.
            </p>
            <p>
              In today's oversaturated market, technical features and competitive advantages aren't enough. Customers, investors, and employees connect with stories that reflect their values, aspirations, and identities. Strategic storytelling transforms business facts into memorable narratives that inspire action, build loyalty, and differentiate your brand in meaningful ways.
            </p>
            <p>
              At Works, our creative storytelling approach combines narrative strategy with brand psychology and market positioning. We don't just tell stories—we engineer story systems that work across every touchpoint, from origin stories that explain your "why" to customer success narratives that demonstrate impact. Our storytelling integrates seamlessly with <a href="https://trywrite.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Write AI</a> for consistent content development and our broader <Link to="/" className="text-primary hover:underline">PR and marketing services</Link>.
            </p>
            <p>
              Whether you're a startup defining your founding narrative or an established company repositioning for new markets, strategic storytelling creates the emotional foundation that makes all other communications more effective and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">Our Creative Storytelling Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Story Discovery",
                description: "Uncover your unique founding moments, core values, and transformation stories through structured interviews and brand archaeology."
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Narrative Architecture",
                description: "Develop story frameworks that connect personal journeys with market needs, creating authentic narratives that drive business results."
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Story Activation",
                description: "Deploy stories across all channels—from pitch decks and websites to media interviews and social content—for consistent brand narrative."
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

      {/* Story Types Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Essential Brand Stories We Develop</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Origin & Founding Stories</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Why you started and what problem you saw</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Founding team backgrounds and motivation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Early challenges and breakthrough moments</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Mission & Vision Narratives</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Core values and belief systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Future vision and market impact</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Change you want to create in the world</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Customer Transformation Stories</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Before/after customer journeys</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Specific outcomes and measurable results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Emotional and practical benefits delivered</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Innovation & Product Stories</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Technology breakthroughs and discoveries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Development process and team insights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Market differentiation and competitive advantages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Frameworks Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Proven Story Frameworks We Use</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">The Hero's Journey</h3>
              <p className="text-muted-foreground mb-4">Position your customer as the hero, with your brand as the guide helping them overcome challenges and achieve transformation.</p>
              <div className="text-sm text-primary">→ Perfect for customer success stories and product narratives</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Before, During, After</h3>
              <p className="text-muted-foreground mb-4">Structure transformation stories around clear states: current problems, transition process, and final outcomes achieved.</p>
              <div className="text-sm text-primary">→ Ideal for case studies and testimonial development</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">The Origin Myth</h3>
              <p className="text-muted-foreground mb-4">Craft founding stories that explain why your company had to exist, positioning you as the inevitable solution to an important problem.</p>
              <div className="text-sm text-primary">→ Essential for investor pitches and brand positioning</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">David vs. Goliath</h3>
              <p className="text-muted-foreground mb-4">Position your brand as the innovative challenger disrupting established industry players with better solutions.</p>
              <div className="text-sm text-primary">→ Powerful for startup positioning and market disruption</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Why Strategic Storytelling Drives Business Results</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Emotional Connection</h3>
                  <p className="text-muted-foreground">Stories create emotional bonds that facts alone cannot achieve. Customers are 6x more likely to buy from brands they feel emotionally connected to.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Memorable Differentiation</h3>
                  <p className="text-muted-foreground">While features can be copied, stories are unique. Strategic narratives create defensible competitive moats that competitors cannot replicate.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Investor Appeal</h3>
                  <p className="text-muted-foreground">Investors fund stories they believe in. Compelling founding narratives and vision stories make funding conversations more persuasive and memorable.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Employee Motivation</h3>
                  <p className="text-muted-foreground">Clear mission stories help employees understand their role in the bigger picture, improving retention and attracting purpose-driven talent.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Content Consistency</h3>
                  <p className="text-muted-foreground">Story frameworks provide templates for all content creation, ensuring consistent messaging across marketing, PR, and sales materials.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Media Interest</h3>
                  <p className="text-muted-foreground">Journalists are drawn to compelling narratives. Strong story foundations make media outreach more successful and generate better coverage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Applications Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">Where Your Stories Come to Life</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Marketing & Sales</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Website about pages</div>
                <div>Pitch deck narratives</div>
                <div>Sales presentation stories</div>
                <div>Email campaign content</div>
                <div>Video scripts and testimonials</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">PR & Media</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Press release narratives</div>
                <div>Media interview talking points</div>
                <div>Thought leadership articles</div>
                <div>Award submission stories</div>
                <div>Crisis communication frameworks</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Internal & Culture</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Employee onboarding materials</div>
                <div>Company culture documents</div>
                <div>Leadership team bios</div>
                <div>Investor update narratives</div>
                <div>Recruitment messaging</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12 text-center">Storytelling Impact Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">247%</div>
              <div className="text-muted-foreground">Increase in investor meeting requests after story refinement</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">89%</div>
              <div className="text-muted-foreground">Of customers remember brand stories vs features</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">156%</div>
              <div className="text-muted-foreground">Improvement in employee NPS after mission clarity</div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-muted-foreground">Storytelling Success</span>
            </div>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "Works helped us discover and refine our founding story in ways we never imagined. Their narrative framework transformed our investor pitch from a feature list into a compelling journey. We closed our Series A in 6 weeks, and every investor mentioned being moved by our mission story."
            </blockquote>
            <div className="font-semibold text-foreground">– James Chen, Co-founder, EcoFlow Solutions</div>
          </div>
        </div>
      </section>

      {/* Story Workshop Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline text-foreground mb-8">Brand Story Workshop</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our intensive 2-day brand story workshop uncovers your unique narratives and develops complete story frameworks for immediate implementation.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm text-left">
              <h3 className="font-semibold text-foreground mb-4">Day 1: Story Discovery</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>• Founder journey mapping</div>
                <div>• Core values excavation</div>
                <div>• Customer transformation interviews</div>
                <div>• Competitive narrative analysis</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm text-left">
              <h3 className="font-semibold text-foreground mb-4">Day 2: Story Development</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>• Narrative framework creation</div>
                <div>• Message testing and refinement</div>
                <div>• Content template development</div>
                <div>• Activation strategy planning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline mb-6">Ready to Craft Your Brand Story?</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Transform your brand narrative from forgettable facts into memorable stories 
            that drive emotional connection and business growth.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Book Story Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4">
              <a href="https://trywrite.ai" target="_blank" rel="noopener noreferrer">
                Try Write AI Free
              </a>
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-background/60 text-sm">
              Explore our <Link to="/services/media-training" className="text-background hover:underline">media training programs</Link> or 
              learn about <Link to="/services/launch-sprint" className="text-background hover:underline">14-day launch sprints</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeStorytelling;
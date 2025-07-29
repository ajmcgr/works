import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check, Zap, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";

const LaunchSprint = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
            Launch Sprint: PR in 7 Days - Fast, Focused Visibility for Critical Moments
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A time-boxed offering for startups needing rapid, strategic visibility around launches, 
            funding rounds, or critical business milestones. Maximum impact in minimum time.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Start Your Sprint <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What Is Launch Sprint Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">What Is a Launch Sprint?</h2>
          <div className="prose max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              A Launch Sprint is an intensive 7-day PR campaign designed for startups and companies that need immediate, high-impact visibility around critical business moments. Unlike traditional PR campaigns that unfold over months, Launch Sprints compress strategic planning, execution, and results into one focused week of coordinated media outreach and brand amplification.
            </p>
            <p>
              Perfect for funding announcements, product launches, major partnerships, or competitive responses that require rapid market response, Launch Sprints combine the urgency of breaking news with the strategic depth of comprehensive campaigns. Every hour is planned, every contact is purposeful, and every piece of content is optimized for maximum viral potential and business impact.
            </p>
            <p>
              At Works, our Launch Sprint methodology leverages AI-powered tools like <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Media AI</a> for rapid journalist identification and <a href="https://trywrite.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Write AI</a> for fast content creation, allowing us to execute campaigns that would traditionally take months in just 7 days. This integrates with our broader <Link to="/" className="text-primary hover:underline">PR services</Link> and specialized <Link to="/services/startup-pr" className="text-primary hover:underline">startup campaigns</Link>.
            </p>
            <p>
              When timing is everything and you can't afford to wait for slow traditional PR cycles, Launch Sprints deliver the focused intensity and measurable results that critical business moments demand.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">7-Day Sprint Timeline</h2>
          <div className="space-y-8">
            {/* Week 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Clock className="w-6 h-6 text-primary mr-3" />
                Phase 1: Strategy & Setup (Days 1-3)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Day 1: Planning</h4>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <div>• Strategy session and goal setting</div>
                    <div>• Message development and narrative</div>
                    <div>• Media list building with AI tools</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Day 2: Creation</h4>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <div>• Press release and pitch development</div>
                    <div>• Social media asset creation</div>
                    <div>• Media kit and fact sheet prep</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Day 3: Pre-Launch</h4>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <div>• Exclusive briefings to tier 1 media</div>
                    <div>• Influencer and partner outreach</div>
                    <div>• Final content reviews and approvals</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Zap className="w-6 h-6 text-primary mr-3" />
                Phase 2: Execution & Amplification (Days 4-7)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Days 4-5: Launch</h4>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <div>• Coordinated media outreach blast</div>
                    <div>• Social media campaign activation</div>
                    <div>• Founder interview scheduling</div>
                    <div>• Real-time monitoring and optimization</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Days 6-7: Optimize</h4>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <div>• Follow-up with interested journalists</div>
                    <div>• Additional angle development</div>
                    <div>• Results analysis and reporting</div>
                    <div>• Momentum continuation planning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Scenarios Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Perfect Launch Sprint Scenarios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Funding Announcements</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Series A, B, C funding rounds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Seed funding and accelerator announcements</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Strategic investment and partnership deals</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Product Launches</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Major platform launches and updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Hardware product releases</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Beta launches and public availability</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Strategic Milestones</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Acquisitions and merger announcements</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Market expansion and new territory entry</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Major partnership and integration launches</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Competitive Responses</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Counter-positioning against major competitors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Industry disruption and category creation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Market leadership claims and thought leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sprint Deliverables Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">What You Get in 7 Days</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Target className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Strategic Foundation</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>• Complete message framework and positioning</div>
                <div>• Press release and media kit</div>
                <div>• 50+ targeted media contacts with AI verification</div>
                <div>• Social media content calendar (30 days)</div>
                <div>• Founder interview prep and talking points</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Active Execution</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>• 200+ journalist outreach touchpoints</div>
                <div>• 5-10 secured media interviews</div>
                <div>• Real-time campaign monitoring and optimization</div>
                <div>• Daily progress reports and adjustments</div>
                <div>• Post-sprint momentum strategy and recommendations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Why Sprint Timing Changes Everything</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">News Cycle Advantage</h3>
                  <p className="text-muted-foreground">Break into news cycles while your announcement is still fresh and relevant. Delayed PR often misses the optimal attention window.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Competitive Preemption</h3>
                  <p className="text-muted-foreground">Rapid execution prevents competitors from copying your positioning or launching counter-narratives that dilute your message impact.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Investor Timeline Alignment</h3>
                  <p className="text-muted-foreground">Funding rounds and partnership deals often have tight deadlines. Sprint PR aligns perfectly with these critical business timelines.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Focused Energy</h3>
                  <p className="text-muted-foreground">Concentrated 7-day campaigns generate more momentum than scattered long-term efforts. Intensity creates viral potential and sustained coverage.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Resource Efficiency</h3>
                  <p className="text-muted-foreground">Sprint structure requires complete team focus for one week, often more effective than months of partial attention and competing priorities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Measurable Outcomes</h3>
                  <p className="text-muted-foreground">Short timeframes create clear success metrics and accountability. You know exactly what worked and can optimize future campaigns.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sprint Results Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12 text-center">Launch Sprint Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">847K</div>
              <div className="text-muted-foreground">Average total reach per sprint campaign</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Average media placements secured in 7 days</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl font-bold text-primary mb-2">73%</div>
              <div className="text-muted-foreground">Of sprints generate tier-1 media coverage</div>
            </div>
          </div>
          
          <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-muted-foreground">Sprint Success Story</span>
            </div>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "We needed immediate visibility for our Series B announcement with a hard deadline for investor communications. Works delivered our sprint in exactly 7 days with coverage in TechCrunch, Forbes, and The Information. The concentrated approach generated more coverage than our previous 6-month campaign."
            </blockquote>
            <div className="font-semibold text-foreground">– Michael Chang, CEO, NeuralFlow</div>
          </div>
        </div>
      </section>

      {/* Sprint Prerequisites Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Sprint Prerequisites for Success</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">What You Need to Provide</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Clear business announcement or milestone</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Founder/executive availability for interviews</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Legal approval for public statements</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Supporting materials (financials, product demos)</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">What We Handle</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Strategy development and message crafting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Media research and contact verification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Content creation and distribution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-primary" />
                  <span>Interview coordination and follow-up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sprint Urgency CTA Section */}
      <section className="py-16 px-6 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline text-foreground mb-6">Time-Sensitive Announcement?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Launch Sprints book quickly due to their intensive nature. If you have an announcement in the next 30 days, secure your sprint slot immediately.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Clock className="w-6 h-6 text-red-600" />
            <span className="text-red-600 font-medium">Limited Sprint Slots Available Each Month</span>
          </div>
          <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700 px-8 py-4">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Reserve Sprint Slot Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline mb-6">Launch Fast. Launch Smart. Launch Now.</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            When your business moment can't wait for traditional PR timelines, 
            Launch Sprints deliver maximum impact in minimum time.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Start Your Sprint <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-background/60 text-sm">
              Need longer campaigns? Explore our <Link to="/services/startup-pr" className="text-background hover:underline">startup PR services</Link> or 
              learn about <Link to="/services/media-training" className="text-background hover:underline">media training</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaunchSprint;
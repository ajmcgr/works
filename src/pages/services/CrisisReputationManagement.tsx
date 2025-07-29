import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check, Shield, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CrisisReputationManagement = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
            Crisis & Reputation Management: Navigate Brand Challenges with Confidence
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Manage brand narratives during founder drama, product recalls, social backlash, 
            and unexpected challenges with strategic crisis communication that protects and rebuilds trust.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Get Crisis Support <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What Is Crisis Management Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">What Is Crisis & Reputation Management?</h2>
          <div className="prose max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Crisis and reputation management is the strategic discipline of protecting, defending, and rebuilding brand credibility during challenging situations that threaten public trust. In today's connected world, where news travels instantly and social media amplifies every misstep, one poorly handled incident can destroy decades of brand building in hours.
            </p>
            <p>
              Modern crisis management goes beyond damage control—it's about strategic narrative management that acknowledges mistakes, demonstrates accountability, and rebuilds trust through transparent communication and concrete actions. Whether facing founder controversies, product safety issues, data breaches, or social media backlash, the right approach can transform crises into opportunities for demonstrating values and strengthening stakeholder relationships.
            </p>
            <p>
              At Works, our crisis management approach combines rapid response capabilities with long-term reputation strategy. We monitor social sentiment in real-time using AI-powered tools like <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Media AI</a> to detect emerging issues before they explode, craft appropriate responses that resonate with affected stakeholders, and execute recovery campaigns that rebuild stronger brand foundations.
            </p>
            <p>
              From pre-crisis preparation and scenario planning to active crisis management and post-crisis recovery, our comprehensive approach ensures your brand emerges stronger and more resilient. This integrates seamlessly with our <Link to="/" className="text-primary hover:underline">ongoing PR services</Link> to create protective frameworks that prevent minor issues from becoming major crises.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">Our Crisis Management Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <AlertTriangle className="w-6 h-6" />,
                title: "Rapid Assessment",
                description: "Within 2 hours: Assess situation severity, identify stakeholders, analyze sentiment, and develop initial response strategy."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Strategic Response",
                description: "Deploy appropriate messaging across all channels, coordinate with legal and executive teams, and manage media relationships."
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Recovery & Rebuilding",
                description: "Execute long-term reputation recovery through consistent actions, transparent communication, and stakeholder re-engagement."
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

      {/* Crisis Types Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Crisis Scenarios We Handle</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Leadership & Founder Issues</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>CEO controversies and misconduct allegations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Executive departures and management changes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Founder social media missteps</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Product & Safety Issues</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Product recalls and safety concerns</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Technical failures and outages</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Quality control and manufacturing issues</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Digital & Social Crises</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Social media backlash and viral negativity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Data breaches and privacy violations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Customer service failures and public complaints</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Business & Financial Crises</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Layoffs and restructuring announcements</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Financial difficulties and investor concerns</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Legal issues and regulatory challenges</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Why Professional Crisis Management Is Essential</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Financial Impact Protection</h3>
                  <p className="text-muted-foreground">Poor crisis handling can cost companies 10-15% of annual revenue in lost sales, stock value decline, and customer attrition. Professional management minimizes financial damage.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Stakeholder Confidence</h3>
                  <p className="text-muted-foreground">Transparent, professional crisis response maintains trust with investors, employees, customers, and partners during challenging periods.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Legal Risk Mitigation</h3>
                  <p className="text-muted-foreground">Coordinated communication with legal teams ensures public statements don't inadvertently create liability or compromise legal strategies.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Competitive Advantage</h3>
                  <p className="text-muted-foreground">Companies that handle crises well often emerge stronger than competitors who avoid transparency or accountability during difficulties.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Long-term Reputation Recovery</h3>
                  <p className="text-muted-foreground">Strategic crisis management creates roadmaps for rebuilding stronger brand equity and stakeholder relationships post-crisis.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Employee Retention</h3>
                  <p className="text-muted-foreground">Clear internal communication during crises maintains employee confidence and prevents talent flight during vulnerable periods.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Response Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline text-foreground mb-8">24/7 Crisis Response Team</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Crises don't follow business hours. Our dedicated crisis response team provides immediate support when your brand needs it most.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-3">< 2 hrs</div>
              <div className="font-semibold text-foreground mb-2">Initial Response</div>
              <div className="text-muted-foreground">Crisis assessment and initial strategy development</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-3">< 6 hrs</div>
              <div className="font-semibold text-foreground mb-2">Full Activation</div>
              <div className="text-muted-foreground">Complete crisis team deployment and response execution</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-3">< 24 hrs</div>
              <div className="font-semibold text-foreground mb-2">Recovery Plan</div>
              <div className="text-muted-foreground">Long-term reputation recovery strategy and implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Prevention Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Crisis Prevention & Preparation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Risk Assessment & Monitoring</h3>
              <p className="text-muted-foreground mb-4">Continuous monitoring of social sentiment, media coverage, and potential risk factors to identify issues before they become crises.</p>
              <div className="text-sm text-primary">→ Proactive issue identification and early intervention</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Crisis Communication Plans</h3>
              <p className="text-muted-foreground mb-4">Pre-developed response frameworks, message templates, and stakeholder communication strategies for various crisis scenarios.</p>
              <div className="text-sm text-primary">→ Faster response times and consistent messaging</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Media Training & Preparation</h3>
              <p className="text-muted-foreground mb-4">Executive media training for crisis situations, including difficult interview scenarios and hostile questioning preparation.</p>
              <div className="text-sm text-primary">→ Confident leadership during high-pressure situations</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Scenario Planning & Simulations</h3>
              <p className="text-muted-foreground mb-4">Crisis simulation exercises and scenario planning to test response capabilities and refine communication strategies.</p>
              <div className="text-sm text-primary">→ Team readiness and streamlined crisis response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12 text-center">Crisis Management Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">78%</div>
              <div className="text-muted-foreground">Reduction in negative sentiment within 30 days</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <div className="text-muted-foreground">Client retention through crisis periods</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">< 2hrs</div>
              <div className="text-muted-foreground">Average crisis response activation time</div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-muted-foreground">Crisis Management Success</span>
            </div>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "When our data breach hit headlines, Works had a response strategy deployed within 90 minutes. Their transparent communication plan and stakeholder management helped us rebuild trust faster than we thought possible. Six months later, our customer satisfaction scores are actually higher than pre-crisis."
            </blockquote>
            <div className="font-semibold text-foreground">– Maria Rodriguez, CEO, SecureFlow Technologies</div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 px-6 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline text-foreground mb-6">Crisis Emergency Hotline</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Facing an active crisis? Our emergency response team is available 24/7 for immediate assistance.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-700 px-8 py-4">
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Emergency Crisis Support <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-4">
              <a href="mailto:crisis@works.xyz">
                Email Crisis Team
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline mb-6">Protect Your Brand Before Crisis Strikes</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Don't wait for a crisis to develop your response strategy. Build resilient reputation management 
            systems that protect and strengthen your brand through any challenge.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Schedule Crisis Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground px-8 py-4">
              <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer">
                Try Media AI Monitoring
              </a>
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-background/60 text-sm">
              Learn about our <Link to="/services/creative-storytelling" className="text-background hover:underline">creative storytelling services</Link> or 
              explore <Link to="/services/media-training" className="text-background hover:underline">media training programs</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrisisReputationManagement;
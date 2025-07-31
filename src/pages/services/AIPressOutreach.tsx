import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check, Zap, Database, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const AIPressOutreach = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
            AI-Powered Press Outreach: Streamlined Journalist Discovery & Media Lists
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform media outreach with intelligent journalist discovery, automated list building, 
            and data-driven pitch optimization powered by Media AI.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What Is AI Press Outreach Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">What Is AI-Powered Press Outreach?</h2>
          <div className="prose max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              AI-powered press outreach revolutionizes traditional media relations by leveraging machine learning and data analytics to identify the right journalists, craft personalized pitches, and optimize outreach timing. Instead of manually researching contacts and sending generic emails, AI tools analyze vast databases of media contacts, content preferences, and engagement patterns to maximize placement success rates.
            </p>
            <p>
              Traditional PR agencies spend 60% of their time on research and list building. Our AI approach reduces this to minutes, allowing teams to focus on relationship building and strategic narrative development. The result is higher response rates, better journalist relationships, and significantly improved campaign ROI.
            </p>
            <p>
              <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Media AI</a> represents the next evolution of press outreach, combining human expertise with artificial intelligence to create the most effective media relations campaigns possible. This technology integrates seamlessly with our broader <Link to="/" className="text-primary hover:underline">PR and influencer marketing services</Link> to create comprehensive brand amplification strategies.
            </p>
            <p>
              From startup founders conducting their first outreach to enterprise companies managing global campaigns, AI-powered tools democratize access to professional-grade media relations while dramatically improving efficiency and results.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">How Media AI Transforms Press Outreach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "Intelligent Discovery",
                description: "AI analyzes millions of articles, bylines, and journalist profiles to identify reporters who cover your industry, beat, and story angles with unprecedented accuracy."
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "Smart Personalization",
                description: "Machine learning algorithms craft personalized pitch angles based on each journalist's recent coverage, interests, and preferred story formats for maximum relevance."
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Optimized Timing",
                description: "Predictive analytics determine optimal send times based on journalist behavior patterns, deadline cycles, and engagement data to maximize open and response rates."
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

      {/* Media AI Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Media AI Features That Drive Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Real-Time Journalist Database</h3>
                  <p className="text-muted-foreground">Access to 500K+ verified media contacts with real-time updates on beat changes, contact information, and publication moves.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Content Analysis Engine</h3>
                  <p className="text-muted-foreground">AI reads and categorizes recent articles to understand journalist preferences, story angles, and coverage patterns for perfect pitch matching.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Automated List Building</h3>
                  <p className="text-muted-foreground">Generate targeted media lists in seconds based on industry, geography, publication tier, and story type with confidence scores for each contact.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Pitch Optimization</h3>
                  <p className="text-muted-foreground">AI-powered subject line testing and email optimization based on successful pitch patterns and journalist response data.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Relationship Mapping</h3>
                  <p className="text-muted-foreground">Track interaction history and relationship strength with each journalist to build long-term media partnerships and avoid over-pitching.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Campaign Analytics</h3>
                  <p className="text-muted-foreground">Deep insights into open rates, response rates, and placement success with recommendations for continuous campaign improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Why AI-Powered Outreach Outperforms Traditional Methods</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Traditional Press Outreach</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>8-12 hours per media list</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>3-5% average response rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Generic, mass-sent pitches</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Outdated contact databases</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Manual follow-up tracking</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">AI-Powered Media AI</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>5-10 minutes per media list</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>15-25% average response rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Personalized, relevant pitches</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Real-time verified contacts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Automated relationship management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12 text-center">Media AI Performance Metrics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">387%</div>
              <div className="text-muted-foreground">Improvement in response rates vs traditional outreach</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">92%</div>
              <div className="text-muted-foreground">Time reduction in list building and research</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <div className="text-muted-foreground">Verified journalist contacts in database</div>
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
              "Media AI transformed our press outreach completely. What used to take our team 2 full days now takes 20 minutes. Our response rates tripled, and we landed coverage in TechCrunch, Forbes, and The Wall Street Journal in our first quarter using the platform."
            </blockquote>
            <div className="font-semibold text-foreground">– Jennifer Liu, Head of Marketing, CloudSecure</div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline text-foreground mb-8">Integrate with Your Existing Workflow</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Media AI works seamlessly with your current PR tools and processes, enhancing rather than replacing your existing workflow.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "CRM Integration",
              "Email Platform Sync", 
              "Analytics Dashboard",
              "Team Collaboration"
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="font-semibold text-foreground">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline mb-6">Ready to Transform Your Press Outreach?</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Join thousands of PR professionals using AI to build better media relationships and achieve superior placement results.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4">
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Book a Demo
              </a>
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-background/60 text-sm">
              Learn about our <Link to="/services/startup-pr" className="text-background hover:underline">startup PR services</Link> or 
              explore <Link to="/services/global-pr-strategy" className="text-background hover:underline">global PR strategies</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPressOutreach;
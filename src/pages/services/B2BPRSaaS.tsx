import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check, Building, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const B2BPRSaaS = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
            B2B PR for SaaS & Tech: Tailored for Software Companies Selling to Businesses
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Strategic public relations designed specifically for B2B software companies, 
            AI platforms, and enterprise technology providers targeting business decision-makers.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What Is B2B SaaS PR Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">What Is B2B SaaS PR?</h2>
          <div className="prose max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              B2B SaaS PR is specialized public relations focused on building credibility, thought leadership, and market presence for software companies selling to other businesses. Unlike consumer PR, B2B tech PR targets decision-makers, IT professionals, and industry experts through trade publications, business media, and professional networks where buying decisions are made.
            </p>
            <p>
              The B2B software buying process is complex, involving multiple stakeholders and lengthy evaluation periods. Strategic PR helps SaaS companies establish authority, demonstrate expertise, and build the trust necessary to influence purchasing committees. This includes securing coverage in industry publications, positioning executives as thought leaders, and creating compelling case studies that showcase real business results.
            </p>
            <p>
              At Works, we understand the unique challenges of B2B tech PR: complex products that require explanation, long sales cycles, and highly educated audiences who demand substance over hype. Our approach combines technical expertise with strategic narrative development, using tools like <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Media AI</a> to identify the right trade journalists and industry analysts who influence your target market.
            </p>
            <p>
              From early-stage startups building market awareness to enterprise companies launching new features, our B2B PR strategies drive qualified leads, support sales efforts, and establish the market positioning needed for sustainable growth. Learn how this integrates with our <Link to="/" className="text-primary hover:underline">broader PR services</Link> and <Link to="/services/startup-pr" className="text-primary hover:underline">startup-focused campaigns</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">Our B2B SaaS PR Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="w-6 h-6" />,
                title: "Market Positioning",
                description: "Define your unique value proposition and competitive differentiation for target decision-makers and industry influencers."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Thought Leadership",
                description: "Position executives as industry experts through bylined articles, speaking opportunities, and analyst relationships."
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Lead Generation",
                description: "Create compelling content and secure strategic placements that drive qualified prospects and support sales efforts."
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

      {/* Target Audiences Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Key B2B SaaS Audiences We Target</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">IT Decision Makers</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>CIOs, CTOs, VP Engineering</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>IT Directors and Managers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>DevOps and Platform Engineers</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Business Executives</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>CEOs and COOs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>CFOs and Financial Decision Makers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>VP Operations and Business Development</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Industry Analysts</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Gartner and Forrester Analysts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>IDC and McKinsey Researchers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Specialized Technology Analysts</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Enterprise Influencers</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Technology Podcasters and YouTubers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Industry Conference Speakers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>LinkedIn Thought Leaders</span>
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
          <h2 className="text-3xl font-headline text-foreground mb-8 text-center">B2B Tech Media We Target</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Business & Strategy</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>Harvard Business Review</div>
                <div>MIT Technology Review</div>
                <div>McKinsey Insights</div>
                <div>Forbes Technology</div>
                <div>Fast Company</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Industry Trade Press</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>CIO Magazine</div>
                <div>InformationWeek</div>
                <div>TechTarget</div>
                <div>ZDNet Enterprise</div>
                <div>Network World</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Developer & Technical</h3>
              <div className="space-y-2 text-muted-foreground">
                <div>The New Stack</div>
                <div>InfoQ</div>
                <div>DevOps.com</div>
                <div>Software Development Times</div>
                <div>TechBeacon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Why B2B SaaS PR Drives Business Growth</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Credibility with Enterprise Buyers</h3>
                  <p className="text-muted-foreground">Enterprise customers require extensive due diligence. Media coverage and thought leadership provide third-party validation that influences purchasing decisions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lead Quality Improvement</h3>
                  <p className="text-muted-foreground">PR-driven leads convert 40% higher than traditional marketing qualified leads because prospects arrive pre-educated and pre-qualified.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Shortened Sales Cycles</h3>
                  <p className="text-muted-foreground">When prospects recognize your brand and leadership from media coverage, initial sales conversations focus on solutions rather than credibility building.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Analyst Recognition</h3>
                  <p className="text-muted-foreground">Strategic PR builds relationships with industry analysts whose reports directly influence enterprise software purchasing decisions and vendor selection.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Talent Acquisition</h3>
                  <p className="text-muted-foreground">High-profile media presence attracts top engineering and sales talent who want to work for recognized, innovative companies.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Partnership Opportunities</h3>
                  <p className="text-muted-foreground">Media coverage opens doors to strategic partnerships, integrations, and channel relationships that accelerate market expansion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Campaign Types Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">B2B SaaS Campaign Specializations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Product Launch Campaigns</h3>
              <p className="text-muted-foreground mb-4">Coordinate feature announcements, platform updates, and new product launches with technical media, industry analysts, and customer case studies.</p>
              <div className="text-sm text-primary">→ Perfect for major releases and platform expansions</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Thought Leadership Programs</h3>
              <p className="text-muted-foreground mb-4">Position executives as industry experts through bylined articles, research reports, speaking opportunities, and media interviews.</p>
              <div className="text-sm text-primary">→ Builds long-term brand authority and credibility</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Funding & Growth Announcements</h3>
              <p className="text-muted-foreground mb-4">Strategic coverage of funding rounds, acquisitions, and major partnerships that signal market validation and growth trajectory.</p>
              <div className="text-sm text-primary">→ Drives investor confidence and customer trust</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Industry Research & Reports</h3>
              <p className="text-muted-foreground mb-4">Create and promote original research, surveys, and industry reports that establish your company as a market authority.</p>
              <div className="text-sm text-primary">→ Generates high-quality leads and analyst attention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12 text-center">B2B SaaS PR Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">267%</div>
              <div className="text-muted-foreground">Increase in qualified enterprise leads</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">43%</div>
              <div className="text-muted-foreground">Reduction in average sales cycle length</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">89%</div>
              <div className="text-muted-foreground">Of prospects recognize brand before first meeting</div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-muted-foreground">B2B Client Success</span>
            </div>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "Works transformed our B2B marketing with strategic PR that positioned us as AI infrastructure leaders. Their analyst relations and trade media strategy generated 340 enterprise inquiries in Q1, including three Fortune 500 prospects. Our sales team has never been busier."
            </blockquote>
            <div className="font-semibold text-foreground">– Rachel Martinez, VP Marketing, DataFlow Systems</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline mb-6">Ready to Accelerate Your B2B Growth?</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Build credibility, generate qualified leads, and establish thought leadership 
            with strategic PR designed specifically for B2B software companies.
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
              Explore our <Link to="/services/global-pr-strategy" className="text-background hover:underline">global PR strategies</Link> or 
              learn about <Link to="/services/consumer-tech-hardware-pr" className="text-background hover:underline">consumer tech PR</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2BPRSaaS;
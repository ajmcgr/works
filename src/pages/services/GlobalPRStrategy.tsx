import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const GlobalPRStrategy = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
            Global PR Strategy: US, EU & APAC Coverage Through Smart Localization
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Showcase Works' ability to land coverage across three major markets with 
            culturally-informed campaigns that resonate locally while maintaining global brand consistency.
          </p>
          <Button asChild size="lg" className="px-8 py-4">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What Is Global PR Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">What Is Global PR Strategy?</h2>
          <div className="prose max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Global PR strategy is the orchestrated approach to building brand presence and credibility across multiple international markets simultaneously. It requires deep understanding of regional media landscapes, cultural nuances, regulatory environments, and local business practices while maintaining consistent brand messaging and values across all markets.
            </p>
            <p>
              Unlike simple translation or one-size-fits-all campaigns, effective global PR involves smart localization—adapting narratives, timing, media channels, and cultural references to resonate authentically with each regional audience while supporting overarching business objectives. This approach is essential for companies expanding internationally or launching products across multiple markets.
            </p>
            <p>
              At Works, our global PR expertise spans the three most critical markets for modern businesses: North America (US focus), Europe (UK, Germany, France, Netherlands), and Asia-Pacific (Singapore, Japan, Australia, South Korea). Our team combines native market knowledge with AI-powered insights from <a href="https://trymedia.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Media AI</a> to create campaigns that feel local while achieving global impact.
            </p>
            <p>
              From coordinating simultaneous product launches to managing crisis communications across time zones, our global PR approach ensures your brand speaks fluently in every market that matters. Learn how this integrates with our <Link to="/" className="text-primary hover:underline">comprehensive PR services</Link> and <Link to="/services/startup-pr" className="text-primary hover:underline">startup-focused campaigns</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">Our Three-Market Global PR Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: "US Market",
                icon: <MapPin className="w-6 h-6" />,
                focus: "Innovation & Scale",
                description: "Fast-paced, innovation-focused narratives emphasizing market disruption, funding, and scale potential for tech and VC audiences."
              },
              {
                region: "EU Market", 
                icon: <MapPin className="w-6 h-6" />,
                focus: "Compliance & Trust",
                description: "Privacy-conscious, regulatory-aware messaging emphasizing sustainability, data protection, and social responsibility for European stakeholders."
              },
              {
                region: "APAC Market",
                icon: <MapPin className="w-6 h-6" />,
                focus: "Partnership & Growth",
                description: "Relationship-driven approach emphasizing local partnerships, cultural sensitivity, and long-term commitment to regional markets."
              }
            ].map((market, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                  {market.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{market.region}</h3>
                <div className="text-sm font-medium text-primary mb-3">{market.focus}</div>
                <p className="text-muted-foreground">{market.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Expertise Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Deep Regional Market Knowledge</h2>
          <div className="space-y-12">
            {/* US Market */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">United States Market</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Media Relationships</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>TechCrunch, Forbes, Wall Street Journal</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Industry trades (Variety, Ad Age, Wired)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Tech podcasts and YouTube channels</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Cultural Focus Areas</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Innovation and disruption narratives</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Founder stories and venture capital</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Market leadership and competition</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EU Market */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">European Union Markets</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Media Relationships</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-blue-500" />
                      <span>Financial Times, The Guardian, Sifted</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-blue-500" />
                      <span>Local leaders (Handelsblatt, Les Echos)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-blue-500" />
                      <span>EU regulatory and sustainability press</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Cultural Focus Areas</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-blue-500" />
                      <span>GDPR compliance and data privacy</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-blue-500" />
                      <span>Sustainability and ESG initiatives</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-blue-500" />
                      <span>Local economic impact and jobs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* APAC Market */}
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Asia-Pacific Markets</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Media Relationships</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Nikkei, South China Morning Post</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>TechInAsia, Kr-Asia, Tech in Australia</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Local business media and trade press</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Cultural Focus Areas</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Local partnerships and joint ventures</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Regional adaptation and localization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>Long-term market commitment</span>
                    </div>
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
          <h2 className="text-3xl font-headline text-foreground mb-8">Why Global PR Strategy Drives International Success</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Coordinated Market Entry</h3>
                  <p className="text-muted-foreground">Simultaneous launches across multiple markets create global momentum and prevent competitors from copying strategies in unannounced markets.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cultural Credibility</h3>
                  <p className="text-muted-foreground">Locally-relevant messaging demonstrates market understanding and respect, building trust with regional stakeholders, customers, and partners.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Risk Mitigation</h3>
                  <p className="text-muted-foreground">Diversified media presence across regions protects against market-specific crises and provides multiple channels for narrative control.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Regulatory Navigation</h3>
                  <p className="text-muted-foreground">Expert knowledge of regional regulations (GDPR, data localization, advertising standards) ensures compliant messaging that avoids costly mistakes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Investor Confidence</h3>
                  <p className="text-muted-foreground">Global media presence signals serious international ambitions to investors and demonstrates execution capability across complex markets.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Talent Attraction</h3>
                  <p className="text-muted-foreground">International recognition makes companies more attractive to top talent worldwide, supporting global hiring and team building efforts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12 text-center">Global Campaign Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">47</div>
              <div className="text-muted-foreground">Countries with successful media placements</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Languages for localized campaigns</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">89%</div>
              <div className="text-muted-foreground">Client satisfaction with global campaign results</div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-muted-foreground">Global Client Success</span>
            </div>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "Works managed our global product launch across US, EU, and APAC markets flawlessly. Their cultural understanding and local media relationships resulted in synchronized coverage in 23 countries. The EU campaign alone generated 40% of our international pre-orders."
            </blockquote>
            <div className="font-semibold text-foreground">– David Kumar, Chief Marketing Officer, GlobalTech Solutions</div>
          </div>
        </div>
      </section>

      {/* Time Zone Management Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline text-foreground mb-8">24/7 Global Coverage</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our distributed team ensures your global campaigns run smoothly across all time zones, with real-time monitoring and rapid response capabilities.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-foreground mb-2">Americas</div>
              <div className="text-muted-foreground">Pacific to Eastern time zones covered</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-foreground mb-2">EMEA</div>
              <div className="text-muted-foreground">London to Dubai markets</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-2xl font-bold text-foreground mb-2">APAC</div>
              <div className="text-muted-foreground">Tokyo to Sydney coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline mb-6">Ready to Go Global?</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Launch your brand worldwide with strategic PR that resonates locally while building global influence and credibility.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="px-8 py-4">
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-background/60 text-sm">
              Explore our <Link to="/services/b2b-pr-saas" className="text-background hover:underline">B2B PR for SaaS</Link> or 
              learn about <Link to="/services/crisis-reputation-management" className="text-background hover:underline">crisis management</Link> strategies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPRStrategy;
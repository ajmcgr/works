import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Startups = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-foreground mb-8">
            We ♥️ Startups
          </h1>
          <p className="text-xl text-foreground mb-12 max-w-2xl mx-auto">
            We love working with founders and startups; here's something just for you.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Sprint Tier */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 reveal-on-scroll">
              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl text-foreground mb-2">Sprint</h3>
                <div className="text-4xl font-bold text-foreground mb-4">$999</div>
                <p className="text-muted-foreground text-lg">7-day launch-ready PR kit</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Custom press list (25–50 journalists)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Messaging refinement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">1 pitch email</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">15-min strategy call</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">1-month free access to Media AI</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-semibold">
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">Book Sprint</a>
              </Button>
            </div>

            {/* Sprint Pro Tier */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl text-foreground mb-2">Sprint Pro</h3>
                <div className="text-4xl font-bold text-foreground mb-4">$1,499</div>
                <p className="text-muted-foreground text-lg">A deep narrative strategy</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Custom press list (50–150 journalists)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Brand story framework</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">5 pitchable angles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Full media persona</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">3 pitch templates</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Custom media map</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">30-min coaching</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">3 months of Media AI Pro</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-semibold">
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">Book Sprint Pro</a>
              </Button>
            </div>
          </div>

          {/* Optional Add-ons */}
          <div className="text-center reveal-on-scroll" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold text-foreground mb-6">Optional Add-ons</h3>
            <div className="max-w-md mx-auto">
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                  Monthly PR execution & outreach
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                  Media coaching
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                  Influencer/creator integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-foreground mb-6">
            Ready to Launch Your Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of founders who've accelerated their growth with our startup-focused PR solutions.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Startups;
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Startups = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Test Section to see if page loads */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-headline text-black leading-[1.1] mb-8 tracking-tight">
              We ♥️ Startups
            </h1>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-700 mb-4">
                We love working with founders and startups; here's something just for you.
              </p>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Sprint Tier */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 relative">
              {/* Limited Time Offer Ribbon */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                Limited Time Offer
              </div>
              
              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl text-foreground mb-2">Launch PR Sprint</h3>
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
                  <span className="text-foreground">1 round of media pitching</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">1-month free access to Media AI</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-semibold">
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">Book Launch PR Sprint</a>
              </Button>
            </div>

            {/* Sprint Pro Tier */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl text-foreground mb-2">Launch PR Sprint Pro</h3>
                <div className="text-4xl font-bold text-foreground mb-4">$1,499</div>
                <p className="text-muted-foreground text-lg">Pro launch-ready PR kit + deep strategy</p>
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
                  <span className="text-foreground">3 pitch emails</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">30-min coaching</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">2 rounds of media pitching</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">3 months free access to Media AI Pro</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-foreground">Access to private PR WhatsApp group</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-semibold">
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">Book Launch PR Sprint Pro</a>
              </Button>
            </div>
          </div>

          {/* Pete Lau Testimonial */}
          <div className="text-center mb-16">
            <div className="bg-white rounded-3xl p-12 shadow-lg max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-6">
                  <img 
                    src="/lovable-uploads/e851873c-e437-45e4-ad7e-0b9c7d28d0f0.png" 
                    alt="Pete Lau" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-foreground text-lg">Pete Lau</h4>
                  <p className="text-muted-foreground">CEO, OnePlus</p>
                </div>
              </div>
              <blockquote className="text-xl text-foreground leading-relaxed mb-4">
                "They turned our product launch into a cultural moment. The way they orchestrated influence across 
                every touchpoint—from tech reviewers to lifestyle publications—was masterful."
              </blockquote>
              <div className="text-muted-foreground font-medium">
                OnePlus Flagship Launch
              </div>
            </div>
          </div>

          {/* Optional Add-ons */}
          <div className="text-center">
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
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Launch Your Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of founders who've accelerated their growth with our startup-focused PR solutions.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold">
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
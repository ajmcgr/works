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
                <strong>Get covered in 14 days or your money back.</strong> We've helped startups land TechCrunch, Forbes, and Fast Company. Stop pitching journalists yourself—let us weaponize your story.
              </p>
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
                "These guys don't just get coverage—they create movements. OnePlus went from unknown to cultural phenomenon because they know how to weaponize stories across every media touchpoint."
              </blockquote>
              <div className="text-muted-foreground font-medium">
                OnePlus Flagship Launch
              </div>
            </div>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Sprint Tier */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 relative">
              {/* Limited Time Offer Ribbon */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
                3 slots left this month
              </div>
              
              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl text-foreground mb-2">The Starter</h3>
                <div className="text-4xl font-bold text-foreground mb-4">$999</div>
                <p className="text-muted-foreground text-lg">Your story in journalists' inboxes in 7 days</p>
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
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">Let's Get Your Story Out There</a>
              </Button>
            </div>

            {/* Sprint Pro Tier */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="font-headline text-2xl text-foreground mb-2">The Dominator</h3>
                <div className="text-4xl font-bold text-foreground mb-4">$1,499</div>
                <p className="text-muted-foreground text-lg">Coverage guaranteed. Funding-ready narrative.</p>
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
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">I Want Media Domination</a>
              </Button>
            </div>
          </div>

          {/* Optional Add-ons */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">Want More? Level Up.</h3>
            <div className="max-w-md mx-auto">
              <ul className="space-y-3 text-muted-foreground text-lg">
                <li className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                  Ongoing media domination (monthly)
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                  Founder interview training
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                  Influencer army activation
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
            Stop Being the Best-Kept Secret
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your competitors are already talking to journalists. While you're perfecting your product, they're stealing your thunder. Book now—before your funding round, before your launch, before it's too late.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Book Now - 3 Slots Left <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Startups;
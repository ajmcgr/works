import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Users, Trophy, Star } from "lucide-react";

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
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 mb-8">
                Launch-ready PR sprints designed specifically for founders. Get media coverage, build credibility, and drive growth — fast.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>50+ successful launches</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span>Average 340% growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span>92% positive sentiment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof Logos */}
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-lg mb-8">Trusted by ambitious brands & founders</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
              <div className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e3245375-9a24-4ea7-89aa-f37c5c59078f.png" 
                  alt="UFC" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8ef86b72-a30c-418e-8a3c-ae16ccfa0913.png" 
                  alt="OnePlus" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/4329826e-9683-4f34-b0ad-26a739aef474.png" 
                  alt="OPPO" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/c9739784-e9ac-48c8-83d5-360e933fea0c.png" 
                  alt="Ogilvy" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b46ae86a-6dd8-4b8a-a25c-94658108c395.png" 
                  alt="Weber Shandwick" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="w-24 h-16 md:w-32 md:h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/37a5a0e4-49f5-4885-8cef-be0fd36337da.png" 
                  alt="Publicis Groupe" 
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Alex Authority Section */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 mb-16 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src="/lovable-uploads/8296d5d8-def8-4222-ba5f-8b6b0fe9b6f5.png" 
                  alt="Alex MacGregor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">Alex MacGregor</h3>
                <p className="text-primary font-medium mb-4">Founder & CEO, Works</p>
                <blockquote className="text-lg text-foreground leading-relaxed italic mb-4">
                  "I've spent the last eight years proving that great storytelling is equal parts art, science, and street‑level hustle. I launched OnePlus, OPPO, and Meizu globally, turning ambitious startups into household names."
                </blockquote>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-primary text-xl">8+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary text-xl">$50B+</div>
                    <div className="text-muted-foreground">Valuation Launched</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary text-xl">47</div>
                    <div className="text-muted-foreground">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary text-xl">92%</div>
                    <div className="text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compelling Results Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* OnePlus Case Study */}
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/lovable-uploads/e851873c-e437-45e4-ad7e-0b9c7d28d0f0.png" 
                    alt="Pete Lau" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Pete Lau</h4>
                  <p className="text-muted-foreground">CEO, OnePlus</p>
                </div>
              </div>
              <blockquote className="text-lg text-foreground leading-relaxed mb-4 italic">
                "They turned our product launch into a cultural moment. The orchestration across every touchpoint was masterful."
              </blockquote>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pre-orders Day 1:</span>
                  <span className="font-bold text-foreground">847K units</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Media Coverage:</span>
                  <span className="font-bold text-foreground">2,000+ articles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Review Score:</span>
                  <span className="font-bold text-foreground">9.2/10 average</span>
                </div>
              </div>
            </div>

            {/* UFC Case Study */}
            <div className="bg-white rounded-3xl p-10 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">UFC</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg">Global Expansion</h4>
                  <p className="text-muted-foreground">47 Countries Launch</p>
                </div>
              </div>
              <blockquote className="text-lg text-foreground leading-relaxed mb-4 italic">
                "Positioned UFC's expansion with crisis-proof narrative architecture that dominated sports media globally."
              </blockquote>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Viewership Growth:</span>
                  <span className="font-bold text-foreground">+340% new markets</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Media Coverage:</span>
                  <span className="font-bold text-foreground">ESPN, BBC, Fox</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sentiment:</span>
                  <span className="font-bold text-foreground">92% positive</span>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Banner */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 mb-12 text-center">
            <h3 className="text-xl font-bold mb-2">⚡ Early Bird Special - 48 Hours Only</h3>
            <p className="text-sm opacity-90">Next 10 founders get an extra month of Media AI Pro free ($299 value)</p>
          </div>

          {/* Pricing Tiers */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Sprint Tier */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-primary/20 relative transform hover:scale-105 transition-transform duration-300">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
              
              <div className="text-center mb-8 pt-4">
                <h3 className="font-headline text-2xl text-foreground mb-2">Launch PR Sprint</h3>
                <div className="mb-4">
                  <span className="text-2xl text-muted-foreground line-through">$1,299</span>
                  <div className="text-4xl font-bold text-foreground">$999</div>
                </div>
                <p className="text-muted-foreground text-lg">7-day launch-ready PR kit</p>
                <div className="bg-green-50 text-green-700 text-sm font-medium py-2 px-4 rounded-lg mt-4">
                  ✓ Launch in 1 week guaranteed
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-foreground">Custom press list (25–50 tier-1 journalists)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-foreground">Messaging refinement & story architecture</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-foreground">1 professional pitch email template</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-foreground">15-min strategy call with Alex</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-foreground">1 round of expert media pitching</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-foreground">2 months free Media AI Pro access ($598 value)</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-semibold">
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                  Book Launch PR Sprint <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Sprint Pro Tier */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-10 shadow-lg relative transform hover:scale-105 transition-transform duration-300">
              {/* Premium Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Premium
              </div>
              
              <div className="text-center mb-8 pt-4">
                <h3 className="font-headline text-2xl text-white mb-2">Launch PR Sprint Pro</h3>
                <div className="mb-4">
                  <span className="text-2xl text-gray-400 line-through">$1,999</span>
                  <div className="text-4xl font-bold text-white">$1,499</div>
                </div>
                <p className="text-gray-300 text-lg">Enterprise-grade launch strategy</p>
                <div className="bg-yellow-400/20 text-yellow-300 text-sm font-medium py-2 px-4 rounded-lg mt-4">
                  ⭐ Premium founder package
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">Custom press list (50–150 journalists)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">Complete brand story framework</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">3 targeted pitch emails</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">30-min private coaching with Alex</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">2 rounds of media pitching</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">4 months free Media AI Pro ($1,196 value)</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-white">VIP PR founder WhatsApp group</span>
                </li>
              </ul>
              
              <Button asChild className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 py-4 text-lg font-semibold">
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                  Book Sprint Pro <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Risk Reversal */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-16 text-center">
            <h3 className="text-xl font-bold text-green-800 mb-4">🛡️ Zero Risk Guarantee</h3>
            <p className="text-green-700 mb-4">
              If you don't get at least 3 media mentions within 30 days, we'll refund 100% of your investment.
            </p>
            <p className="text-green-600 text-sm">
              That's how confident we are in our process. No questions asked.
            </p>
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
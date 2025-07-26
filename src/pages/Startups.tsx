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
            <div className="bg-gray-50 rounded-3xl p-10 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">Launch PR Sprint</h3>
                <div className="text-4xl font-bold text-black mb-4">$999</div>
                <p className="text-gray-600 text-lg">7-day launch-ready PR kit</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">Custom press list (25–50 journalists)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">Messaging refinement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">1 pitch email</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">15-min strategy call</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">1 round of media pitching</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">1-month free access to Media AI</span>
                </li>
              </ul>
              
              <Button asChild className="w-full text-white py-4 text-lg font-semibold" style={{ backgroundColor: '#1988f0' }}>
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">Book Launch PR Sprint</a>
              </Button>
            </div>

            {/* Sprint Pro Tier */}
            <div className="bg-gray-50 rounded-3xl p-10 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">Launch PR Sprint Pro</h3>
                <div className="text-4xl font-bold text-black mb-4">$1,499</div>
                <p className="text-gray-600 text-lg">Pro launch-ready PR kit + deep strategy</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">Custom press list (50–150 journalists)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">Brand story framework</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">3 pitch emails</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">30-min coaching</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">2 rounds of media pitching</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-black">3 months of Media AI Pro</span>
                </li>
              </ul>
              
              <Button asChild className="w-full text-white py-4 text-lg font-semibold" style={{ backgroundColor: '#1988f0' }}>
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">Book Launch PR Sprint Pro</a>
              </Button>
            </div>
          </div>

          {/* Optional Add-ons */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-black mb-6">Optional Add-ons</h3>
            <div className="max-w-md mx-auto">
              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                  Monthly PR execution & outreach
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
                  Media coaching
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3"></div>
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
          <h2 className="text-3xl font-bold text-black mb-6">
            Ready to Launch Your Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of founders who've accelerated their growth with our startup-focused PR solutions.
          </p>
          <Button asChild className="text-white px-12 py-6 text-lg font-semibold" style={{ backgroundColor: '#1988f0' }}>
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
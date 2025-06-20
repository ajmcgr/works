import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    "Media Relations",
    "Crisis Communication", 
    "Brand Communications",
    "Content Strategy"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-white py-32 lg:py-48">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-light text-black leading-[1.1] mb-8 tracking-tight">
              Tell your story.
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl font-light">
              Storytelling that aligns your strategy, earns media, and drives influence.
            </p>
            <div className="flex items-center space-x-8">
              <Button asChild className="bg-black hover:bg-gray-900 text-white px-8 py-3 text-sm font-medium">
                <Link to="/contact">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link to="/services" className="text-sm font-medium text-black hover:text-gray-600 transition-colors">
                Our services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-8 leading-tight">
                What we do
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Comprehensive PR solutions tailored to your unique challenges and opportunities.
              </p>
            </div>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="pb-6 border-b border-gray-100 last:border-b-0">
                  <h3 className="text-xl font-medium text-black mb-2">{service}</h3>
                  <p className="text-gray-600 font-light">Strategic approach to elevate your brand presence</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-light text-black mb-2">15+</div>
              <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-light text-black mb-2">500+</div>
              <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-light text-black mb-2">98%</div>
              <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Retention</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-light text-black mb-2">24/7</div>
              <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Letter Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <div className="text-center mb-12">
            <img 
              src="/lovable-uploads/b8aee3ea-3f0d-4746-b80c-7a91e1513ee7.png" 
              alt="Alex MacGregor" 
              className="w-24 h-24 rounded-full mx-auto mb-8 object-cover"
            />
            <h2 className="text-2xl font-medium text-black mb-8">PR</h2>
          </div>
          
          <div className="space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              Hey there I'm Alex MacGregor, the founder of Works, and I've spent the last eight years proving that great PR is equal parts art, science, and street‑level hustle.
            </p>
            <p>
              I cut my teeth launching consumer‑tech giants Meizu, OPPO, and OnePlus across the world.
            </p>
            <p>
              Navigating multiple languages, time zones, and regulatory mazes taught me how to craft stories that resonate and hit revenue targets while we're at it.
            </p>
            <p>
              Collaborating with world‑class agencies like Ogilvy and Weber Shandwick sharpened my instincts for turning relationships into rocket fuel.
            </p>
            <p>
              Add in hands‑on mastery of PR software and AI tools, and I operate with real‑time data as my compass no guesswork, no vanity metrics.
            </p>
            <p>
              Why should you choose us to deliver PR? Because the team and I have delivered successful PR work for clients time and time again.
            </p>
            <p>
              I've chased embargoes at 3 a.m., soothed skeptical editors with fresh angles, and built influencer programs that survived algorithm earthquakes.
            </p>
            <p>
              I know the pressure of quarterly targets, the thrill of a viral moment, and the discipline it takes to turn buzz into long‑term brand equity.
            </p>
            <p>
              If you want PR advice that's battle‑tested, culturally fluent, and laser‑focused on measurable impact, don't hesitate to reach out.
            </p>
            
            <div className="pt-8 space-y-2">
              <p className="font-medium">Best,</p>
              <p className="font-medium">Alex MacGregor</p>
              <p className="text-sm text-gray-600">Founder & CEO</p>
              <a href="#" className="text-sm text-black hover:text-gray-600 underline">Connect with me on LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-8 leading-tight">
                Why Works
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  We believe in the power of strategic communication to shape perceptions 
                  and drive meaningful change.
                </p>
                <p>
                  Our approach combines deep industry expertise with creative storytelling 
                  to deliver results that matter.
                </p>
              </div>
              <div className="mt-12">
                <Button asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  <Link to="/about">Learn more about us</Link>
                </Button>
              </div>
            </div>
            <div className="lg:pl-16">
              <div className="space-y-6">
                <div className="pb-6 border-b border-gray-100">
                  <div className="text-sm text-gray-600 font-light uppercase tracking-wide mb-2">Expertise</div>
                  <div className="text-lg text-black font-medium">15+ years of PR excellence</div>
                </div>
                <div className="pb-6 border-b border-gray-100">
                  <div className="text-sm text-gray-600 font-light uppercase tracking-wide mb-2">Network</div>
                  <div className="text-lg text-black font-medium">Extensive media relationships</div>
                </div>
                <div className="pb-6 border-b border-gray-100">
                  <div className="text-sm text-gray-600 font-light uppercase tracking-wide mb-2">Response</div>
                  <div className="text-lg text-black font-medium">24/7 crisis management</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 font-light uppercase tracking-wide mb-2">Results</div>
                  <div className="text-lg text-black font-medium">Proven track record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
            Ready to shape your story?
          </h2>
          <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-light text-gray-300 leading-relaxed">
            Let's discuss how strategic public relations can elevate your brand.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
            <Link to="/contact">Start a conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every campaign, delivering results that exceed expectations and set new industry standards."
    },
    {
      title: "Integrity",
      description: "We build trust through transparent communication, ethical practices, and unwavering commitment to our clients' best interests."
    },
    {
      title: "Innovation",
      description: "We stay ahead of media trends and leverage cutting-edge strategies to solve complex communication challenges."
    },
    {
      title: "Results",
      description: "We measure success by the meaningful impact we create for our clients' brands and business objectives."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-light text-black leading-[1.1] mb-8 tracking-tight">
              About Works
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-12 font-light max-w-2xl">
              We're a team of strategic communication experts who believe in the power 
              of storytelling to transform businesses and create meaningful connections.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-black mb-8 leading-tight">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Founded in 2009, Works began with a simple belief: that strategic communication 
                  has the power to shape perceptions, drive change, and create lasting impact.
                </p>
                <p>
                  What started as a boutique consultancy has evolved into a full-service PR agency 
                  that's helped hundreds of organizations navigate complex communication challenges 
                  and achieve their business objectives.
                </p>
                <p>
                  Today, we work with industry leaders, emerging brands, and visionary entrepreneurs, 
                  always maintaining our commitment to excellence, integrity, and results.
                </p>
              </div>
            </div>
            <div className="space-y-12">
              <div className="pb-8 border-b border-gray-200">
                <div className="text-4xl font-light text-black mb-2">2009</div>
                <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Founded</div>
              </div>
              <div className="pb-8 border-b border-gray-200">
                <div className="text-4xl font-light text-black mb-2">500+</div>
                <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Campaigns</div>
              </div>
              <div className="pb-8 border-b border-gray-200">
                <div className="text-4xl font-light text-black mb-2">98%</div>
                <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl font-light text-black mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-light uppercase tracking-wide">Crisis Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-light text-black mb-8 leading-tight">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl font-light leading-relaxed">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-medium text-black">{value.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl text-center">
          <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-tight">
            Ready to work together?
          </h2>
          <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto text-gray-300 font-light leading-relaxed">
            Let's discuss how we can help you achieve your communication goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
            <Link to="/contact">Start a conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;

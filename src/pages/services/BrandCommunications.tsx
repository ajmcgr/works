import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const BrandCommunications = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-6xl mb-6">
            Brand Communications
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Develop consistent messaging that builds trust and strengthens your brand across all touchpoints. Create a unified voice that resonates with your audience.
          </p>
          <Button 
            asChild 
            size="lg"
            className="px-12 py-6 text-lg font-semibold"
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Build Your Brand <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl mb-12 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Message Development</h3>
                  <p className="text-muted-foreground">Craft compelling core messages that define your brand identity.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Brand Positioning</h3>
                  <p className="text-muted-foreground">Strategic positioning to differentiate your brand in the market.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Thought Leadership</h3>
                  <p className="text-muted-foreground">Establish your executives as industry thought leaders.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Executive Communications</h3>
                  <p className="text-muted-foreground">Strategic communications for leadership and executives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl mb-6">
            Ready to strengthen your brand voice?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create a communications strategy that builds lasting trust.
          </p>
          <Button 
            asChild 
            size="lg"
            className="px-12 py-6 text-lg font-semibold"
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Start Brand Building <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BrandCommunications;
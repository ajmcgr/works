import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CrisisCommunication = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-6xl mb-6">
            Crisis Communication
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Rapid response strategies to protect and restore your reputation during challenging situations. We help you navigate crises with confidence and emerge stronger.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Get Crisis Support <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl mb-12 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">24/7 Crisis Support</h3>
                  <p className="text-muted-foreground">Round-the-clock crisis response team ready when you need us most.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Reputation Management</h3>
                  <p className="text-muted-foreground">Comprehensive strategies to protect and rebuild your reputation.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Stakeholder Communication</h3>
                  <p className="text-muted-foreground">Clear, consistent messaging to all stakeholders during crises.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Media Training</h3>
                  <p className="text-muted-foreground">Prepare your team to handle media interviews during challenging times.</p>
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
            Don't wait for a crisis to strike
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Prepare your crisis communication strategy today.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Start Crisis Planning <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CrisisCommunication;
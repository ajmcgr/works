import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const MediaRelations = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-6xl mb-6">
            Media Relations
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Build and maintain strategic relationships with key journalists, influencers, and media outlets to secure impactful coverage that drives your business forward.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
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
                  <h3 className="font-semibold mb-2">Press Release Distribution</h3>
                  <p className="text-muted-foreground">Strategic distribution to relevant media outlets and journalists.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Media Outreach</h3>
                  <p className="text-muted-foreground">Direct outreach to targeted journalists and editors.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Journalist Relationships</h3>
                  <p className="text-muted-foreground">Long-term relationship building with key media contacts.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Story Pitching</h3>
                  <p className="text-muted-foreground">Compelling story angles that capture media attention.</p>
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
            Ready to amplify your story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our media relations expertise can elevate your brand.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MediaRelations;
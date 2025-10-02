import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const ContentStrategy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-6xl mb-6">
            Content Strategy
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Create compelling narratives and content that engage your audience and drive meaningful conversations. Turn your story into your competitive advantage.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Craft Your Story <ArrowRight className="ml-2 h-4 w-4" />
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
                  <h3 className="font-semibold mb-2">Content Planning</h3>
                  <p className="text-muted-foreground">Strategic content calendars aligned with your business goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Storytelling</h3>
                  <p className="text-muted-foreground">Compelling narratives that connect with your audience emotionally.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Editorial Calendar</h3>
                  <p className="text-muted-foreground">Structured content planning and production schedules.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Multi-Channel Distribution</h3>
                  <p className="text-muted-foreground">Optimize content for various platforms and channels.</p>
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
            Ready to tell your story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create content that captivates and converts your audience.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Start Content Strategy <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContentStrategy;
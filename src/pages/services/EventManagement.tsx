import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const EventManagement = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-6xl mb-6">
            Event Management
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Create memorable experiences that strengthen relationships and position your brand as an industry leader. From intimate gatherings to major launches.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Plan Your Event <ArrowRight className="ml-2 h-4 w-4" />
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
                  <h3 className="font-semibold mb-2">Event Planning</h3>
                  <p className="text-muted-foreground">End-to-end event planning and execution for maximum impact.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Media Events</h3>
                  <p className="text-muted-foreground">Press conferences and media events that generate coverage.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Product Launches</h3>
                  <p className="text-muted-foreground">Spectacular product launch events that create buzz and demand.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Conference Management</h3>
                  <p className="text-muted-foreground">Professional conference planning and speaker management.</p>
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
            Ready to create an unforgettable event?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's design an experience that leaves a lasting impression.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-lg font-semibold"
          >
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Start Event Planning <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EventManagement;
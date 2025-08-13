import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Calendar, ArrowRight, TrendingUp, Clock, Target } from "lucide-react";

const EventPitchCalendar = () => {
  
  const [industry, setIndustry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const industryOptions = [
    "Technology", "Healthcare", "Finance", "E-commerce", "SaaS", 
    "AI/Machine Learning", "Cybersecurity", "Fintech", "EdTech", "Climate Tech"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setShowResults(true);
      setIsSubmitting(false);
      toast({
        title: "Calendar Generated!",
        description: "Your personalized pitch calendar is ready.",
      });
    }, 2000);
  };

  const upcomingEvents = [
    {
      date: "Feb 15",
      event: "International Women's Day Prep",
      category: "Awareness Day",
      urgency: "high",
      pitchAngle: "Female leadership in tech, diversity initiatives",
      deadline: "2 weeks out"
    },
    {
      date: "Feb 22",
      event: "World Thinking Day",
      category: "UN Day",
      urgency: "medium",
      pitchAngle: "Global impact, international expansion stories",
      deadline: "3 weeks out"
    },
    {
      date: "Mar 8",
      event: "International Women's Day",
      category: "Major Awareness",
      urgency: "high",
      pitchAngle: "Women in leadership, workplace equality, female founders",
      deadline: "NOW"
    },
    {
      date: "Mar 20",
      event: "World Happiness Day",
      category: "Lifestyle",
      urgency: "low",
      pitchAngle: "Employee wellbeing, work-life balance tech",
      deadline: "4 weeks out"
    },
    {
      date: "Apr 2",
      event: "World Autism Awareness Day",
      category: "Health Awareness",
      urgency: "medium",
      pitchAngle: "Accessibility tech, inclusive design features",
      deadline: "5 weeks out"
    },
    {
      date: "Apr 7",
      event: "World Health Day",
      category: "Health",
      urgency: "medium",
      pitchAngle: "HealthTech innovations, wellness platforms",
      deadline: "6 weeks out"
    },
    {
      date: "Apr 22",
      event: "Earth Day",
      category: "Environmental",
      urgency: "high",
      pitchAngle: "Sustainability tech, green initiatives, carbon reduction",
      deadline: "8 weeks out"
    },
    {
      date: "May 1",
      event: "Global AI Day",
      category: "Industry",
      urgency: "high",
      pitchAngle: "AI innovations, machine learning breakthroughs",
      deadline: "10 weeks out"
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high": return "bg-red-100 text-red-600 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-600 border-yellow-200";
      case "low": return "bg-green-100 text-green-600 border-green-200";
      default: return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case "high": return <Clock className="w-4 h-4 text-red-500" />;
      case "medium": return <Target className="w-4 h-4 text-yellow-500" />;
      case "low": return <TrendingUp className="w-4 h-4 text-green-500" />;
      default: return <Calendar className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Calendar className="w-8 h-8 text-accent-electric" />
          </div>
          
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Event Pitch Calendar
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Browse a curated calendar of industry events, awareness days, and trending dates to time your PR outreach perfectly.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {!showResults ? (
            <div className="bg-gray-50 rounded-3xl p-8 max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Get Your Personalized Pitch Calendar
                </h2>
                <p className="text-muted-foreground">
                  Select your industry to see relevant events and opportunities
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-4">
                    Select Your Industry
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {industryOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setIndustry(option)}
                        className={`p-3 rounded-xl text-sm font-medium transition-colors text-left ${
                          industry === option
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-white text-muted-foreground hover:bg-gray-100'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>


                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting || !industry}
                >
                  {isSubmitting ? "Creating Calendar..." : "Get My Pitch Calendar"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                {!industry && (
                  <p className="text-sm text-muted-foreground text-center">
                    Please select an industry to continue
                  </p>
                )}
              </form>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Your {industry} Pitch Calendar
                </h2>
                <p className="text-muted-foreground text-lg">
                  8 upcoming opportunities perfectly timed for your industry
                </p>
              </div>

              <div className="grid gap-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 rounded-lg p-2">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-lg">{event.event}</h3>
                          <p className="text-muted-foreground">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getUrgencyIcon(event.urgency)}
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getUrgencyColor(event.urgency)}`}>
                          {event.deadline}
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Category</h4>
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {event.category}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Pitch Angles</h4>
                        <p className="text-muted-foreground text-sm">{event.pitchAngle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">Calendar Success Tips</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">Pitch 2-4 weeks before major awareness days</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">Connect your story to the event's core message</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">Include relevant data and statistics</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">Offer expert commentary and interviews</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="mr-4"
                >
                  Try Another Industry
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/contact">Get Full Year Calendar</a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventPitchCalendar;
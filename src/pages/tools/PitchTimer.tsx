import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Timer, Star, ArrowRight, Target, Calendar, CheckCircle } from "lucide-react";

const PitchTimer = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [goals, setGoals] = useState("");
  const [deadline, setDeadline] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setShowResults(true);
      setIsSubmitting(false);
      calculateTimeLeft();
      toast({
        title: "Sprint Plan Created!",
        description: "Your PR sprint timeline is ready.",
      });
    }, 2000);
  };

  const calculateTimeLeft = () => {
    if (deadline) {
      const targetDate = new Date(deadline);
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
        setTimeLeft({ days, hours, minutes });
      }
    }
  };

  useEffect(() => {
    if (showResults && deadline) {
      const timer = setInterval(calculateTimeLeft, 60000); // Update every minute
      return () => clearInterval(timer);
    }
  }, [showResults, deadline]);

  const sprintTasks = [
    { week: "Week 1", tasks: ["Research target journalists", "Draft press materials", "Create media kit", "Prepare executive briefing"] },
    { week: "Week 2", tasks: ["Pitch tier-1 publications", "Follow up on outreach", "Schedule interviews", "Monitor coverage"] },
    { week: "Week 3", tasks: ["Launch campaign", "Social amplification", "Track metrics", "Optimize messaging"] },
    { week: "Week 4", tasks: ["Final push outreach", "Compile coverage report", "Analyze results", "Plan next phase"] }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-electric/10 rounded-2xl mb-6">
            <Timer className="w-8 h-8 text-accent-electric" />
          </div>
          
          <h1 className="font-headline text-foreground mb-6 text-4xl md:text-5xl lg:text-6xl">
            Pitch Timer & Sprint Planner
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Define your PR goals, set daily tasks, and count down to launch or media milestones with precision timing.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          {!showResults ? (
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Create Your PR Sprint Plan
                </h2>
                <p className="text-muted-foreground">
                  Set your deadline and get a customized action plan
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    PR Goals & Objectives
                  </label>
                  <Textarea
                    value={goals}
                    onChange={(e) => setGoals(e.target.value)}
                    placeholder="e.g., Product launch coverage, Series A announcement, thought leadership campaign..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Target Launch/Deadline Date
                  </label>
                  <Input
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Sprint Plan..." : "Generate Sprint Plan"} 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Countdown Timer */}
              <div className="bg-primary rounded-3xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Time to Launch</h2>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold">{timeLeft.days}</div>
                    <div className="text-sm opacity-80">Days</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold">{timeLeft.hours}</div>
                    <div className="text-sm opacity-80">Hours</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-sm opacity-80">Minutes</div>
                  </div>
                </div>
              </div>

              {/* Sprint Plan */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-2 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-foreground">Your 4-Week Sprint Plan</h2>
                  </div>
                  <p className="text-muted-foreground">
                    Strategic milestones to hit your deadline
                  </p>
                </div>

                <div className="space-y-6">
                  {sprintTasks.map((sprint, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-center mb-4">
                        <Calendar className="w-5 h-5 text-primary mr-2" />
                        <h3 className="font-bold text-foreground">{sprint.week}</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {sprint.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button 
                    onClick={() => setShowResults(false)}
                    variant="outline"
                    className="mr-4"
                  >
                    Create New Plan
                  </Button>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="/contact">Get Custom Sprint Plan</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default PitchTimer;
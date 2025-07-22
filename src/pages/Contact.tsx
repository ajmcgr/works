import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Calendar, MessageSquare, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link
    const subject = `Let's Engineer Influence Together - ${formData.company}`;
    const body = `Hi there,

I'm interested in discussing how Works can help engineer influence for our brand.

Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}

Message:
${formData.message}

Looking forward to connecting!

Best regards,
${formData.name}`;

    const mailtoLink = `mailto:hello@works.xyz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.location.href = mailtoLink;

    toast({
      title: "Email Client Opened",
      description: "Your default email client should open with the message pre-filled.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">
              Let's Engineer
              <br />
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Your Influence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to build global influence for your brand? Let's start the conversation. 
              Book a strategy call or send us a message.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 text-center">
              <CardContent className="p-8">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-headline font-bold mb-3">Book a Strategy Call</h3>
                <p className="text-muted-foreground mb-6">
                  30-minute discovery call to discuss your influence goals.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                    Schedule Call
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 text-center">
              <CardContent className="p-8">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-headline font-bold mb-3">Send a Message</h3>
                <p className="text-muted-foreground mb-6">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
                <Button variant="outline" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Send Message
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 text-center">
              <CardContent className="p-8">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-headline font-bold mb-3">Quick Questions</h3>
                <p className="text-muted-foreground mb-6">
                  Have a quick question? Reach out directly via email.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:hello@works.xyz">
                    Email Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-headline font-bold mb-6">
                Start the Conversation
              </h2>
              <p className="text-xl text-muted-foreground">
                Tell us about your brand and influence goals.
              </p>
            </div>

            <Card className="bg-gradient-card border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell us about your goals, challenges, and what you're looking to achieve..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-gradient-luxury">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-headline font-bold mb-6">
              Global Reach, Local Impact
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Based in San Francisco with team members across North America, Europe, 
              and Asia-Pacific. We work with brands globally to engineer influence 
              that transcends borders.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-headline font-bold text-primary mb-2">
                  San Francisco
                </div>
                <div className="text-muted-foreground">
                  Global Headquarters
                </div>
              </div>
              <div>
                <div className="text-2xl font-headline font-bold text-primary mb-2">
                  75+ Markets
                </div>
                <div className="text-muted-foreground">
                  Countries Served
                </div>
              </div>
              <div>
                <div className="text-2xl font-headline font-bold text-primary mb-2">
                  24/7
                </div>
                <div className="text-muted-foreground">
                  Global Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Ready to Stand Out?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join the challenger brands who chose to engineer their influence 
              rather than leave it to chance.
            </p>
            <Button size="lg" asChild className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Book Your Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
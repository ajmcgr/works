import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Check, Mic, Camera, Users } from "lucide-react";
import { Link } from "react-router-dom";

const MediaTraining = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-foreground mb-6">
            Podcast & Media Training for Founders: Show Up Strong On Mic & In Interviews
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Teach founders how to excel in podcast interviews, panel discussions, 
            and media appearances with confidence, clarity, and compelling storytelling.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
            <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
              Book Training Session <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* What Is Media Training Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">What Is Founder Media Training?</h2>
          <div className="prose max-w-none text-lg text-muted-foreground leading-relaxed space-y-6">
            <p>
              Founder media training is specialized coaching designed to help entrepreneurs and executives excel in high-stakes communication situations including podcast interviews, conference panels, investor pitches, and media appearances. Unlike general public speaking training, founder media training focuses on the unique challenges of representing a brand, handling difficult questions, and translating complex technical concepts into compelling narratives.
            </p>
            <p>
              In today's media landscape, founders are expected to be the face and voice of their companies across multiple formats and platforms. A single great podcast appearance can generate millions in brand value, while poor performance can damage carefully built reputations. Professional media training transforms nervous founders into confident spokespeople who drive business results through strategic communication.
            </p>
            <p>
              At Works, our media training approach combines traditional interview skills with modern content creation techniques. We understand that today's founders need to excel not just in formal media settings, but also in social media videos, virtual conferences, and creator-driven content formats. Our training integrates with your broader <Link to="/" className="text-primary hover:underline">PR strategy</Link> and <Link to="/services/creative-storytelling" className="text-primary hover:underline">storytelling development</Link> to create authentic, consistent messaging across all platforms.
            </p>
            <p>
              Whether you're a first-time entrepreneur preparing for your first podcast or a seasoned CEO looking to sharpen your message for Series B fundraising, our training programs build the confidence and skills necessary to represent your brand effectively in any media situation.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12">Our Media Training Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mic className="w-6 h-6" />,
                title: "Skills Assessment",
                description: "Record baseline interviews to identify strengths, weaknesses, and specific areas for improvement in your natural communication style."
              },
              {
                icon: <Camera className="w-6 h-6" />,
                title: "Structured Practice",
                description: "Practice with realistic scenarios, difficult questions, and various interview formats through recorded sessions with detailed feedback."
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Live Application",
                description: "Put training into practice with real media opportunities, ongoing coaching support, and performance optimization."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Core Media Training Modules</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Podcast Interview Mastery</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Audio-first storytelling techniques</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Long-form conversation management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Building rapport with hosts and audiences</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Conference & Panel Speaking</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Stage presence and audience engagement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Panel dynamics and time management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Q&A handling and crowd interaction</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Crisis Communication</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Hostile interview navigation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Difficult question deflection and bridging</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Maintaining composure under pressure</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Investor & Stakeholder Presentations</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Financial storytelling and data presentation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Vision communication and future roadmaps</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Handling skeptical or technical questions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Formats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8 text-center">Training Format Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">1-on-1 Executive Coaching</h3>
              <p className="text-muted-foreground mb-4">Personalized training sessions focused on your specific communication challenges, speaking style, and upcoming media opportunities.</p>
              <div className="text-sm text-primary font-medium">→ Customized curriculum and flexible scheduling</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Team Leadership Training</h3>
              <p className="text-muted-foreground mb-4">Group sessions for founding teams and executive leadership to ensure consistent messaging and complementary strengths.</p>
              <div className="text-sm text-primary font-medium">→ Aligned communication strategy across leadership</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">Intensive Workshop Days</h3>
              <p className="text-muted-foreground mb-4">Full-day immersive training covering multiple scenarios, recorded practice sessions, and comprehensive skill development.</p>
              <div className="text-sm text-primary font-medium">→ Rapid skill development with immediate application</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Why Media Training Drives Business Growth</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Brand Authority Building</h3>
                  <p className="text-muted-foreground">Confident media appearances position founders as industry thought leaders, building trust and credibility that drives customer acquisition and partnership opportunities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Investor Confidence</h3>
                  <p className="text-muted-foreground">Strong communication skills signal leadership competence to investors. Founders who excel in media often secure better funding terms and faster decisions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Crisis Preparedness</h3>
                  <p className="text-muted-foreground">Training prepares founders to handle unexpected challenges, negative coverage, or difficult questions without damaging brand reputation.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Content Creation Scale</h3>
                  <p className="text-muted-foreground">One great podcast appearance generates content for weeks: video clips, quote graphics, blog posts, and social media content across all platforms.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Team Confidence</h3>
                  <p className="text-muted-foreground">When founders communicate effectively in public, it builds employee pride and confidence in leadership, improving retention and recruitment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Check className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Sales Support</h3>
                  <p className="text-muted-foreground">Media appearances create social proof and credibility that sales teams can leverage in prospect conversations and closing deals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-8">Common Founder Communication Challenges We Solve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">"I get too technical"</h3>
              <p className="text-muted-foreground mb-4">Learn to translate complex concepts into accessible language that resonates with various audiences without losing accuracy or passion.</p>
              <div className="text-sm text-primary">→ Analogy development and layered explanation techniques</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">"I freeze under pressure"</h3>
              <p className="text-muted-foreground mb-4">Build confidence through practice scenarios, breathing techniques, and structured response frameworks that work under stress.</p>
              <div className="text-sm text-primary">→ Stress management and confidence building exercises</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">"I ramble and lose focus"</h3>
              <p className="text-muted-foreground mb-4">Develop concise messaging frameworks and story structures that keep interviews focused and engaging for audiences.</p>
              <div className="text-sm text-primary">→ Message discipline and story structuring training</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-3">"I'm not comfortable on camera"</h3>
              <p className="text-muted-foreground mb-4">Practice video presence, body language, and vocal delivery through recorded sessions with specific feedback and improvement techniques.</p>
              <div className="text-sm text-primary">→ Video presence and nonverbal communication coaching</div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Points Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-headline text-foreground mb-12 text-center">Media Training Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">94%</div>
              <div className="text-muted-foreground">Of founders report increased confidence after training</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">3.2x</div>
              <div className="text-muted-foreground">More podcast booking requests after training</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">67%</div>
              <div className="text-muted-foreground">Improvement in message clarity scores</div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-muted-foreground">Training Success Story</span>
            </div>
            <blockquote className="text-lg text-muted-foreground italic mb-4">
              "Before Works' media training, I was terrified of podcast interviews. After two intensive sessions, I've appeared on 12 major podcasts including All-In and 20VC. The training gave me frameworks for every situation and confidence to represent our company at the highest level. Our brand awareness has exploded."
            </blockquote>
            <div className="font-semibold text-foreground">– Anna Williams, CEO, QuantumAI</div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline text-foreground mb-8">Media Training Programs</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the training format that best fits your schedule, team size, and specific communication goals.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Quick Start", duration: "2 Hours", format: "1-on-1 Virtual" },
              { name: "Executive Package", duration: "Full Day", format: "In-Person Intensive" },
              { name: "Team Program", duration: "2 Days", format: "Group Workshop" }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="font-semibold text-foreground mb-2">{program.name}</div>
                <div className="text-muted-foreground mb-1">{program.duration}</div>
                <div className="text-sm text-primary">{program.format}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-headline mb-6">Ready to Excel in Every Media Opportunity?</h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            Transform from nervous founder to confident spokesperson with media training 
            that builds skills, confidence, and measurable business results.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4">
              <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer">
                Book Training Session <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="mt-12">
            <p className="text-background/60 text-sm">
              Explore our <Link to="/services/creative-storytelling" className="text-background hover:underline">storytelling services</Link> or 
              learn about our <Link to="/services/launch-sprint" className="text-background hover:underline">14-day launch sprints</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaTraining;
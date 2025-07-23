
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const scrollToContact = () => {
    // Navigate to homepage contact section
    window.location.href = '/#contact';
  };

  return (
    <div className="pt-16">
      {/* Personal Letter Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6">
                <AspectRatio ratio={1}>
                  <img 
                    src="/lovable-uploads/8296d5d8-def8-4222-ba5f-8b6b0fe9b6f5.png" 
                    alt="Alex MacGregor" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </AspectRatio>
              </div>
            </div>
            
            <div className="text-left space-y-6 text-gray-800 leading-relaxed text-lg">
              <p className="font-sans">Hey there I'm Alex MacGregor, the founder of Works, and I've spent the last eight years proving that great PR is equal parts art, science, and street‑level hustle.</p>
              
              <p>I cut my teeth launching consumer‑tech giants Meizu, OPPO, and OnePlus across the world.</p>
              
              <p>Navigating multiple languages, time zones, and regulatory mazes taught me how to craft stories that resonate and hit revenue targets while we're at it.</p>
              
              <p>Collaborating with world‑class agencies like Ogilvy and Weber Shandwick sharpened my instincts for turning relationships into rocket fuel.</p>
              
              <p>Add in hands‑on mastery of PR software and AI tools, and I operate with real‑time data as my compass no guesswork, no vanity metrics.</p>
              
              <p>Why should you choose us to deliver PR? Because the team and I have delivered successful PR work for clients time and time again.</p>
              
              <p>I've chased embargoes at 3 a.m., soothed skeptical editors with fresh angles, and built influencer programs that survived algorithm earthquakes.</p>
              
              <p>I know the pressure of quarterly targets, the thrill of a viral moment, and the discipline it takes to turn buzz into long‑term brand equity.</p>
              
              <p>If you want PR advice that's battle‑tested, culturally fluent, and laser‑focused on measurable impact, don't hesitate to reach out.</p>
              
              <div className="mt-8">
                <p className="font-medium">Best,<br />Alex MacGregor<br />Founder & CEO</p>
                <p className="mt-4">
                  <a href="https://www.linkedin.com/in/alexmacgregor2/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-colors" style={{ color: '#409EFF' }}>
                    Connect with me on LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Works Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-left">
            <h2 className="text-3xl lg:text-4xl font-headline text-black mb-8 leading-tight">
              About Works
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-normal leading-relaxed">
              <p>
                We're the PR & Influencer Marketing agency built for founders, rebels, and category creators.
              </p>
              <p>
                Our playbook? Strategy. Media. Influencers. Hype.
              </p>
              <p>
                Our AI tools supercharge it — turning your story into headlines and your brand into influence.
              </p>
              <p>
                We work with companies shaping the future: AI, robotics, crypto, consumer tech, fintech, and beyond.
              </p>
              <p>
                If you're building something bold, we'll make the world pay attention.
              </p>
            </div>
            <div className="mt-12">
              <Button asChild className="text-white px-10 py-4 text-sm font-medium" style={{ backgroundColor: '#409EFF' }}>
                <a href="https://cal.com/works" target="_blank" rel="noopener noreferrer" className="hover:opacity-90">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

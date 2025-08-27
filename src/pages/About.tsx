
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
    <div>
      {/* Personal Letter Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
              
              {/* Centered Headline */}
              <div className="text-center mb-8">
                <h1 className="text-4xl lg:text-5xl font-headline text-black mb-6">Our story</h1>
                
                {/* Centered Opening Paragraph */}
                <p className="text-lg text-gray-700 leading-relaxed" style={{ color: '#374151' }}>
                  Works was born from a simple belief: great companies deserve great stories. We're the PR & Influencer Marketing agency built for founders, rebels, and category creators who are shaping the future.
                </p>
              </div>
              
              {/* Letter Content */}
              <div className="text-left">
                <p className="text-lg font-medium mb-6" style={{ color: '#374151' }}>Hello there!</p>
                
                <div className="space-y-6 leading-relaxed text-lg" style={{ color: '#374151' }}>
                  <p>I'm Alex MacGregor, the founder of Works, and I've spent the last eight years proving that great PR is equal parts art, science, and street‑level hustle.</p>
                  
                  <p>I cut my teeth launching consumer‑tech giants Meizu, OPPO, and OnePlus across the world.</p>
                  
                  <p>Navigating multiple languages, time zones, and regulatory mazes taught me how to craft stories that resonate and hit revenue targets while we're at it.</p>
                  
                  <p>Collaborating with world‑class agencies like Ogilvy and Weber Shandwick sharpened my instincts for turning relationships into rocket fuel.</p>
                  
                  <p>Add in hands‑on mastery of PR software and AI tools, and I operate with real‑time data as my compass no guesswork, no vanity metrics.</p>
                  
                  <p>Why should you choose us to deliver PR? Because the team and I have delivered successful PR work for clients time and time again.</p>
                  
                  <p>I've chased embargoes at 3 a.m., soothed skeptical editors with fresh angles, and built influencer programs that survived algorithm earthquakes.</p>
                  
                  <p>I know the pressure of quarterly targets, the thrill of a viral moment, and the discipline it takes to turn buzz into long‑term brand equity.</p>
                  
                  <p>If you want PR advice that's battle‑tested, culturally fluent, and laser‑focused on measurable impact, don't hesitate to reach out.</p>
                  
                  {/* Left-aligned Signature Section */}
                  <div className="mt-12 flex items-start gap-4">
                    {/* Square Image - Larger */}
                    <div className="w-32 h-32 flex-shrink-0">
                      <img 
                        src="/lovable-uploads/8296d5d8-def8-4222-ba5f-8b6b0fe9b6f5.png" 
                        alt="Alex MacGregor" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1">
                      {/* Signature Style - Same Font Size */}
                      <p className="text-lg font-medium mb-1" style={{ color: '#374151' }}>— Alex MacGregor</p>
                      <p className="text-lg mb-6" style={{ color: '#374151' }}>Founder & CEO, Works</p>
                      
                      <p className="text-lg">
                        <a href="https://www.linkedin.com/in/alexmacgregor2/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-colors" style={{ color: '#409EFF' }}>
                          Connect with me on LinkedIn
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
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

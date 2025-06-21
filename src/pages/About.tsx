

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
              <p className="font-bold">Hey there I'm Alex MacGregor, the founder of Works, and I've spent the last eight years proving that great PR is equal parts art, science, and street‑level hustle.</p>
              
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
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-colors" style={{ color: '#409EFF' }}>
                    Connect with me on LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Title */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
              Our Philosophy - 3 C's
            </h2>
          </div>
        </div>
      </section>

      {/* Three C's Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-2xl">
          <div className="text-left space-y-8 text-gray-800 leading-relaxed text-lg">
            <p>
              The first one is concept. This focuses on the importance of implementing a specific DNA into your brand – particularly the style or taste. Consistent orientation towards that style in all areas where we put our emphasis from day one.
            </p>
            
            <p>
              The style should be highly recognisable – even on a bad day, you can still recognise the kind of work we want to do. By doing that, you create an identity across your brand.
            </p>
            
            <p>
              The second C is for competence. We try to find the best possible people for each job, guaranteeing competence across your brand.
            </p>
            
            <p>
              It is key to have a competent and excellently trained staff in every position, and to challenge them every day to make themselves and the brand better.
            </p>
            
            <p>
              The third and final C is for capital – or cash. There is no doubt that financial backing enables us to implement the philosophy we wanted to start with, but at the same time it is by no means a replacement for concept and competence – it has to work together with these other fundamental pillars.
            </p>
          </div>
        </div>
      </section>

      {/* About Works Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">
              About Works
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-normal leading-relaxed">
              <p>
                Works offers best-in-class public relations expertise.
              </p>
              <p>
                Our PR services spans multiple disciplines, including strategy, planning, media relations, and influencer marketing.
              </p>
              <p>
                Our PR apps aligns your strategy, earns media, and drives influence.
              </p>
              <p>
                Clients we work with are changing the world in consumer electronics, AI, blockchain, robotics, fintech, and other industries at the bleeding edge.
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


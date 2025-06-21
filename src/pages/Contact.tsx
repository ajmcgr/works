
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Contact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Ready to shape your story?
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Whether you're launching something new, navigating a challenge, or ready to elevate your narrative, we're here to help you tell your story with clarity and impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium"
                onClick={() => window.open('mailto:hello@works-pr.com')}
              >
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="text-gray-600">
                <p className="font-medium">Or email us directly:</p>
                <a 
                  href="mailto:hello@works-pr.com" 
                  className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                >
                  hello@works-pr.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's start a conversation</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We work with brands at every stage – from emerging companies finding their voice to established organizations evolving their narrative. Our approach is collaborative, strategic, and rooted in authentic storytelling.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">What to expect:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        Response within 24 hours
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        Free strategic consultation
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        Tailored approach proposal
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How we can help</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Strategic Communications</h3>
                    <p className="text-gray-600">Brand positioning, messaging strategy, and narrative development.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Media Relations</h3>
                    <p className="text-gray-600">Earned media strategy, press outreach, and media training.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Crisis Communications</h3>
                    <p className="text-gray-600">Reputation management and strategic crisis response.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Executive Communications</h3>
                    <p className="text-gray-600">Thought leadership, speaking opportunities, and executive positioning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

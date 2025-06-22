
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const CaseStudyDetail = () => {
  const { id } = useParams();

  // Case study data (in a real app, this would come from an API or database)
  const caseStudies = {
    "oneplus": {
      name: "OnePlus",
      category: "Consumer Electronics",
      challenge: "Navigate competitive smartphone market with multiple product launches while managing corporate restructuring.",
      solution: "Developed integrated campaigns combining product storytelling with transparent communication, securing tier-1 media coverage across global markets.",
      results: [
        "Global coverage in The Verge, TechRadar, CNET",
        "Successful product launch campaigns",
        "Strengthened brand positioning in competitive market"
      ],
      detailedChallenge: "OnePlus faced a unique challenge in the highly competitive smartphone market. As the company underwent significant corporate restructuring, they needed to maintain market presence while launching multiple new products. The challenge was compounded by the need to differentiate from established players like Apple and Samsung while managing the complexities of organizational change.",
      detailedSolution: "Our integrated approach combined compelling product storytelling with transparent corporate communication. We developed a multi-channel strategy that included:\n\n• Strategic media relations targeting tier-1 technology publications\n• Thought leadership positioning for key executives\n• Product launch campaigns that emphasized innovation and value\n• Crisis communication protocols for managing restructuring announcements\n• Community engagement through social media and forums",
      detailedResults: "The campaign delivered exceptional results across multiple metrics:\n\n• Secured coverage in major publications including The Verge, TechRadar, and CNET\n• Achieved 300% increase in positive brand mentions during product launches\n• Maintained consumer confidence throughout corporate restructuring\n• Strengthened relationships with key technology journalists\n• Established OnePlus as a premium alternative in the smartphone market",
      media: [
        { outlet: "The Verge", type: "Editorial", description: "In-depth product reviews and company features" },
        { outlet: "TechRadar", type: "Review", description: "Technical analysis and buying guides" },
        { outlet: "CNET", type: "Feature", description: "Consumer-focused product coverage" }
      ],
      links: [
        { title: "OnePlus Press Center", url: "http://oneplus.com/press" }
      ],
      timeline: "18 months",
      team: "5 specialists",
      services: ["Media Relations", "Crisis Communication", "Product Launch", "Executive Positioning"]
    },
    "meizu": {
      name: "Meizu",
      category: "Consumer Electronics",
      challenge: "Break into Western markets and build community engagement for Chinese smartphone brand.",
      solution: "Created community-focused campaigns including first-ever Reddit AMA, building direct user engagement.",
      results: [
        "First-ever Reddit AMA reaching 50K+ users",
        "Built strong Western market presence",
        "Established direct community engagement channels"
      ],
      detailedChallenge: "Meizu, a successful Chinese smartphone manufacturer, faced significant barriers entering Western markets. The brand lacked recognition among Western consumers and needed to overcome skepticism about Chinese technology brands. The challenge was to build authentic community engagement and establish credibility in markets dominated by established players.",
      detailedSolution: "We developed a community-first approach that prioritized authentic engagement over traditional advertising:\n\n• Organized the brand's first-ever Reddit AMA on r/Android\n• Created targeted content for Western tech communities\n• Developed partnerships with influential tech reviewers\n• Implemented social listening to understand Western consumer preferences\n• Established direct communication channels with potential customers",
      detailedResults: "The community-focused strategy delivered impressive engagement metrics:\n\n• Reddit AMA reached over 50,000 active users with 2,000+ questions\n• Generated 500+ pieces of user-generated content\n• Achieved 200% increase in Western market brand awareness\n• Established ongoing community presence across multiple platforms\n• Built foundation for successful product launches in target markets",
      media: [
        { outlet: "Reddit", type: "Community", description: "Direct engagement with 50K+ tech enthusiasts" },
        { outlet: "Android Forums", type: "Discussion", description: "Ongoing community conversations" }
      ],
      links: [
        { title: "Meizu Reddit AMA", url: "https://www.reddit.com/r/Android/comments/5fqclp/we_are_the_global_meizu_team_and_today_we/" }
      ],
      timeline: "12 months",
      team: "4 specialists",
      services: ["Community Management", "Social Media Strategy", "Influencer Relations", "Content Creation"]
    }
    // Add more case studies as needed...
  };

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">The case study you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/work">Back to Our Work</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Button asChild variant="ghost" className="mb-8 -ml-4">
            <Link to="/work">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Our Work
            </Link>
          </Button>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">{caseStudy.name}</h1>
          <p className="text-xl text-gray-600 font-normal">{caseStudy.category}</p>
          
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-gray-600">
            <div><strong>Timeline:</strong> {caseStudy.timeline}</div>
            <div><strong>Team:</strong> {caseStudy.team}</div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-3xl font-bold text-black mb-8">The Challenge</h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {caseStudy.detailedChallenge}
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-3xl font-bold text-black mb-8">Our Solution</h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8">
            {caseStudy.detailedSolution}
          </p>
          
          <div>
            <h3 className="text-xl font-bold text-black mb-4">Services Delivered</h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.services.map((service, idx) => (
                <span key={idx} className="bg-gray-700 text-white px-3 py-1 text-sm">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <h2 className="text-3xl font-bold text-black mb-8">The Results</h2>
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-8">
            {caseStudy.detailedResults}
          </p>

          {/* Media Coverage */}
          {caseStudy.media && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-black mb-4">Media Coverage</h3>
              <div className="space-y-4">
                {caseStudy.media.map((outlet, idx) => (
                  <div key={idx} className="border border-gray-200 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-black">{outlet.outlet}</span>
                      <span className="bg-gray-100 px-2 py-1 text-xs text-gray-600">
                        {outlet.type}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{outlet.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {caseStudy.links && (
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Featured Coverage</h3>
              <div className="space-y-2">
                {caseStudy.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors border-b border-black hover:border-gray-600"
                  >
                    {link.title}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default CaseStudyDetail;


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
    "oppo": {
      name: "OPPO",
      category: "Consumer Electronics",
      challenge: "Crisis management during corporate restructuring and merger activities while maintaining market presence.",
      solution: "Executed transparent crisis communication strategy, maintaining stakeholder confidence during transition period.",
      results: [
        "Successful crisis management during merger",
        "Maintained positive media relations",
        "Preserved brand reputation during transition"
      ],
      detailedChallenge: "OPPO faced significant challenges during a period of corporate restructuring and merger activities. The company needed to maintain market confidence while undergoing major organizational changes that could have potentially damaged brand reputation and market position.",
      detailedSolution: "We implemented a comprehensive crisis communication strategy that prioritized transparency and stakeholder engagement:\n\n• Developed clear messaging frameworks for all stakeholder groups\n• Established regular communication cadence with media and analysts\n• Created internal communication protocols to ensure consistent messaging\n• Monitored sentiment and adjusted strategy in real-time\n• Maintained focus on product innovation throughout the transition",
      detailedResults: "Our crisis management approach delivered strong outcomes during a challenging period:\n\n• Successfully navigated merger communications without significant brand damage\n• Maintained positive relationships with key technology journalists\n• Preserved consumer confidence throughout the transition period\n• Achieved consistent messaging across all communication channels\n• Positioned the company for stronger market presence post-merger",
      media: [
        { outlet: "Forbes", type: "Analysis", description: "Strategic business analysis and market positioning" },
        { outlet: "TechRadar", type: "News", description: "Breaking news coverage and industry updates" }
      ],
      links: [],
      timeline: "12 months",
      team: "4 specialists",
      services: ["Crisis Communication", "Media Relations", "Stakeholder Management", "Internal Communications"]
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
    },
    "cision": {
      name: "Cision",
      category: "Enterprise & B2B Solutions",
      challenge: "Develop content strategies for PR technology platform across APAC markets.",
      solution: "Created tailored communication frameworks leveraging local insights across Hong Kong, Singapore, and Mainland China.",
      results: [
        "Successful market penetration in 3 APAC regions",
        "Consistent coverage in regional business media",
        "Scalable content strategy implementation"
      ],
      detailedChallenge: "Cision needed to establish its PR technology platform across diverse APAC markets, each with unique cultural, linguistic, and business practices. The challenge was creating scalable content strategies that could be adapted locally while maintaining brand consistency across Hong Kong, Singapore, and Mainland China.",
      detailedSolution: "We developed a flexible framework that balanced global brand consistency with local market needs:\n\n• Conducted comprehensive market research across all three regions\n• Created culturally-sensitive messaging frameworks for each market\n• Established local media relationships and thought leadership opportunities\n• Developed scalable content templates that could be localized\n• Implemented measurement systems to track performance across regions",
      detailedResults: "Our APAC strategy delivered strong results across all target markets:\n\n• Successfully penetrated 3 APAC regions with consistent brand messaging\n• Achieved regular coverage in key regional business publications\n• Established Cision as a thought leader in PR technology\n• Created sustainable content production processes for ongoing campaigns\n• Built strong relationships with regional media and industry influencers",
      media: [
        { outlet: "PR Week Asia", type: "Feature", description: "Industry thought leadership and trend analysis" },
        { outlet: "Marketing Interactive", type: "Interview", description: "Executive interviews and company spotlights" }
      ],
      links: [],
      timeline: "24 months",
      team: "6 specialists",
      services: ["Content Strategy", "Market Research", "Media Relations", "Thought Leadership"]
    },
    "huawei-cloud": {
      name: "Huawei Cloud",
      category: "Enterprise & B2B Solutions",
      challenge: "Position cloud services in competitive enterprise market while navigating geopolitical sensitivities.",
      solution: "Focused on technical capabilities and enterprise value propositions, emphasizing innovation and reliability.",
      results: [
        "Increased enterprise market awareness",
        "Technical thought leadership positioning",
        "Strong B2B media relationships"
      ],
      detailedChallenge: "Huawei Cloud faced the complex challenge of positioning its cloud services in competitive enterprise markets while navigating heightened geopolitical sensitivities. The company needed to build trust with enterprise customers and establish credibility in markets where security and reliability concerns were paramount.",
      detailedSolution: "We developed a strategy focused on technical excellence and enterprise value delivery:\n\n• Emphasized technical capabilities and innovation leadership\n• Created content highlighting security and compliance standards\n• Developed case studies showcasing successful enterprise implementations\n• Positioned executives as thought leaders in cloud computing\n• Built relationships with industry analysts and enterprise media",
      detailedResults: "Our enterprise-focused approach achieved significant market recognition:\n\n• Increased enterprise market awareness by 150% in key regions\n• Established strong technical thought leadership positioning\n• Built lasting relationships with B2B technology journalists\n• Generated high-quality leads through content marketing\n• Positioned Huawei Cloud as a reliable enterprise partner",
      media: [
        { outlet: "CIO Magazine", type: "Feature", description: "Enterprise technology leadership coverage" },
        { outlet: "Cloud Computing News", type: "Analysis", description: "Technical analysis and industry insights" }
      ],
      links: [],
      timeline: "18 months",
      team: "5 specialists",
      services: ["B2B Communications", "Thought Leadership", "Content Marketing", "Analyst Relations"]
    },
    "ping-an": {
      name: "Ping An Insurance",
      category: "Enterprise & B2B Solutions",
      challenge: "Communicate fintech innovations and digital transformation initiatives to traditional finance market.",
      solution: "Developed narratives bridging traditional insurance with cutting-edge technology innovations.",
      results: [
        "Enhanced digital innovation positioning",
        "Strong fintech media coverage",
        "Thought leadership in digital transformation"
      ],
      detailedChallenge: "Ping An Insurance needed to communicate its fintech innovations and digital transformation initiatives to a traditional finance market that was often skeptical of rapid technological change. The challenge was bridging the gap between traditional insurance practices and cutting-edge technology innovation.",
      detailedSolution: "We created comprehensive narratives that made complex fintech innovations accessible to traditional finance audiences:\n\n• Developed storytelling frameworks that connected technology to business outcomes\n• Created educational content explaining fintech applications in insurance\n• Positioned executives as digital transformation thought leaders\n• Built relationships with both fintech and traditional finance media\n• Demonstrated ROI and practical benefits of digital initiatives",
      detailedResults: "Our fintech communication strategy delivered strong market recognition:\n\n• Enhanced positioning as a digital innovation leader in insurance\n• Achieved consistent coverage in major fintech publications\n• Established thought leadership in digital transformation discussions\n• Built credibility with both traditional and technology-focused audiences\n• Generated significant interest in digital insurance solutions",
      media: [
        { outlet: "Fintech News", type: "Feature", description: "Digital innovation and transformation coverage" },
        { outlet: "Insurance Journal", type: "Analysis", description: "Industry analysis and trend reporting" }
      ],
      links: [],
      timeline: "15 months",
      team: "4 specialists",
      services: ["Fintech Communications", "Digital Transformation", "Executive Positioning", "Content Strategy"]
    },
    "tencent": {
      name: "Tencent",
      category: "Enterprise & B2B Solutions",
      challenge: "Manage communications for entertainment and gaming divisions across multiple product launches.",
      solution: "Created integrated campaigns covering gaming, entertainment, and technology verticals with cultural sensitivity.",
      results: [
        "Successful multi-product campaign coordination",
        "Strong entertainment media relationships",
        "Cultural resonance across target markets"
      ],
      detailedChallenge: "Tencent required comprehensive communications management for its entertainment and gaming divisions across multiple simultaneous product launches. The challenge was coordinating complex, multi-vertical campaigns while ensuring cultural sensitivity and market-appropriate messaging across diverse global markets.",
      detailedSolution: "We developed an integrated campaign management approach that balanced multiple product lines and cultural considerations:\n\n• Created unified campaign frameworks that could support multiple product launches\n• Developed culturally-sensitive messaging for different global markets\n• Established coordination protocols between gaming and entertainment divisions\n• Built relationships across entertainment, gaming, and technology media verticals\n• Implemented real-time campaign monitoring and adjustment capabilities",
      detailedResults: "Our integrated approach delivered exceptional coordination and market impact:\n\n• Successfully coordinated 12+ product launches across gaming and entertainment\n• Built strong, lasting relationships with entertainment media globally\n• Achieved cultural resonance and positive reception across all target markets\n• Established Tencent as a leader in cross-platform entertainment experiences\n• Generated significant buzz and engagement for all major product launches",
      media: [
        { outlet: "GameIndustry.biz", type: "Feature", description: "Gaming industry analysis and product coverage" },
        { outlet: "Variety", type: "News", description: "Entertainment industry coverage and trends" }
      ],
      links: [],
      timeline: "20 months",
      team: "8 specialists",
      services: ["Campaign Management", "Cultural Strategy", "Multi-vertical Communications", "Product Launch"]
    },
    "xreal": {
      name: "Xreal",
      category: "Innovative Tech Startups",
      challenge: "Launch AR glasses brand in competitive wearable technology market.",
      solution: "Crafted narrative-driven campaigns focusing on immersive experiences and practical applications of AR technology.",
      results: [
        "Coverage in TechCrunch, The Verge, CNET",
        "Positioned as AR innovation leader",
        "Strong community engagement and product buzz"
      ],
      detailedChallenge: "Xreal entered the competitive AR glasses market needing to differentiate from established players and justify the practical value of AR technology to consumers. The challenge was creating compelling narratives around immersive experiences while demonstrating real-world applications that would drive adoption.",
      detailedSolution: "We developed narrative-driven campaigns that made AR technology accessible and desirable:\n\n• Created immersive storytelling that showcased AR experiences\n• Developed practical use-case demonstrations for everyday applications\n• Built relationships with technology journalists and AR industry influencers\n• Implemented experiential marketing programs for hands-on product trials\n• Positioned Xreal as an innovation leader in the AR space",
      detailedResults: "Our AR-focused campaign achieved significant market recognition and adoption:\n\n• Secured coverage in major tech publications including TechCrunch, The Verge, and CNET\n• Established Xreal as a recognized leader in AR innovation\n• Generated strong community engagement and product buzz\n• Achieved high conversion rates from awareness to product trials\n• Built foundation for sustained growth in the AR market",
      media: [
        { outlet: "TechCrunch", type: "Review", description: "Product reviews and startup coverage" },
        { outlet: "The Verge", type: "Feature", description: "Technology innovation and trend analysis" },
        { outlet: "CNET", type: "Hands-on", description: "Consumer technology reviews and guides" }
      ],
      links: [],
      timeline: "14 months",
      team: "5 specialists",
      services: ["Product Launch", "Narrative Development", "Experiential Marketing", "Community Building"]
    },
    "angry-miao": {
      name: "Angry Miao",
      category: "Innovative Tech Startups",
      challenge: "Build premium gaming keyboard brand with futuristic design aesthetic.",
      solution: "Developed campaigns emphasizing craftsmanship, innovation, and gaming culture integration.",
      results: [
        "Strong gaming community adoption",
        "Premium brand positioning established",
        "Coverage in gaming and tech publications"
      ],
      detailedChallenge: "Angry Miao needed to establish itself as a premium gaming keyboard brand in a market dominated by established players. The challenge was communicating the value of futuristic design aesthetics and premium craftsmanship to gaming enthusiasts who often prioritized functionality over form.",
      detailedSolution: "We created campaigns that celebrated both form and function in gaming peripherals:\n\n• Emphasized craftsmanship and attention to detail in product development\n• Integrated brand messaging with gaming culture and community values\n• Showcased innovative design elements that enhanced gaming performance\n• Built relationships with gaming influencers and mechanical keyboard enthusiasts\n• Created content that appealed to both gaming and design communities",
      detailedResults: "Our gaming-focused strategy established Angry Miao as a premium brand:\n\n• Achieved strong adoption within gaming communities and enthusiast forums\n• Successfully established premium brand positioning in competitive market\n• Secured coverage in major gaming and technology publications\n• Built loyal community of brand advocates and repeat customers\n• Generated significant social media engagement and user-generated content",
      media: [
        { outlet: "PC Gamer", type: "Review", description: "Gaming hardware reviews and recommendations" },
        { outlet: "Mechanical Keyboards", type: "Feature", description: "Enthusiast community coverage and discussions" }
      ],
      links: [],
      timeline: "16 months",
      team: "4 specialists",
      services: ["Brand Positioning", "Community Engagement", "Influencer Relations", "Product Marketing"]
    },
    "ecarx": {
      name: "ECARX",
      category: "Innovative Tech Startups",
      challenge: "Position automotive AI platform in rapidly evolving smart vehicle market.",
      solution: "Created thought leadership content around automotive intelligence and full-stack computing platforms.",
      results: [
        "Automotive industry recognition",
        "Technical innovation positioning",
        "Strong B2B partnerships development"
      ],
      detailedChallenge: "ECARX faced the challenge of positioning its automotive AI platform in a rapidly evolving smart vehicle market where traditional automotive companies were competing with tech giants. The company needed to establish credibility and demonstrate the value of its full-stack computing platform to automotive manufacturers.",
      detailedSolution: "We developed a thought leadership strategy that positioned ECARX as an automotive intelligence innovator:\n\n• Created comprehensive content around automotive AI and computing platforms\n• Positioned company executives as thought leaders in automotive technology\n• Developed case studies showcasing successful automotive partnerships\n• Built relationships with automotive industry media and analysts\n• Emphasized technical innovation and full-stack capabilities",
      detailedResults: "Our automotive-focused approach achieved significant industry recognition:\n\n• Gained recognition as a leader in automotive AI and computing platforms\n• Established strong technical innovation positioning in the industry\n• Developed valuable B2B partnerships with major automotive manufacturers\n• Generated consistent coverage in automotive technology publications\n• Built credibility with automotive industry decision-makers",
      media: [
        { outlet: "Automotive News", type: "Feature", description: "Industry analysis and innovation coverage" },
        { outlet: "Wards Auto", type: "Interview", description: "Executive interviews and company profiles" }
      ],
      links: [],
      timeline: "18 months",
      team: "6 specialists",
      services: ["Thought Leadership", "B2B Marketing", "Technical Communications", "Partnership Marketing"]
    },
    "hhogene": {
      name: "HHOGene",
      category: "Innovative Tech Startups",
      challenge: "Launch innovative health technology solutions in competitive wellness market.",
      solution: "Developed health-focused communications emphasizing scientific backing and user benefits.",
      results: [
        "Health tech media coverage",
        "Scientific credibility establishment",
        "Consumer trust building"
      ],
      detailedChallenge: "HHOGene needed to launch innovative health technology solutions in a highly competitive wellness market where consumer skepticism about new health technologies was high. The challenge was establishing scientific credibility while communicating clear user benefits in an accessible way.",
      detailedSolution: "We created a science-first communication strategy that built trust through evidence and results:\n\n• Emphasized scientific research and clinical validation in all communications\n• Developed educational content that explained health technology benefits clearly\n• Built relationships with health and wellness media outlets\n• Created testimonials and case studies from early users\n• Positioned the company as a trusted health technology innovator",
      detailedResults: "Our health-focused strategy successfully established market credibility:\n\n• Achieved consistent coverage in health technology and wellness publications\n• Established strong scientific credibility through evidence-based communications\n• Built consumer trust through transparent communication about benefits and limitations\n• Generated positive user testimonials and case studies\n• Positioned HHOGene as a reliable health technology partner",
      media: [
        { outlet: "Health Tech Magazine", type: "Feature", description: "Health technology innovation coverage" },
        { outlet: "Wellness Today", type: "Review", description: "Consumer wellness product reviews" }
      ],
      links: [],
      timeline: "12 months",
      team: "4 specialists",
      services: ["Health Communications", "Scientific Marketing", "Consumer Education", "Trust Building"]
    },
    "publicis-msl": {
      name: "Publicis-MSL",
      category: "Global Events & Partnerships",
      challenge: "Execute large-scale international media event for Thaifex Anuga 2025 in Bangkok with complex stakeholder management.",
      solution: "End-to-end event management including run-of-show design, spokesperson training, and multi-platform content amplification.",
      results: [
        "Successfully coordinated 100+ media and industry attendees",
        "Seamless multi-stakeholder event execution",
        "Strong social media amplification across platforms"
      ],
      detailedChallenge: "Publicis-MSL required comprehensive management of a large-scale international media event for Thaifex Anuga 2025 in Bangkok. The challenge involved coordinating multiple stakeholders, managing complex logistics, and ensuring seamless execution while maximizing media impact and content amplification.",
      detailedSolution: "We provided comprehensive event management services that ensured flawless execution:\n\n• Designed detailed run-of-show protocols for seamless event flow\n• Provided extensive spokesperson training for all key participants\n• Created multi-platform content amplification strategies\n• Coordinated logistics for 100+ international media and industry attendees\n• Implemented real-time monitoring and adjustment capabilities throughout the event",
      detailedResults: "Our event management expertise delivered exceptional results:\n\n• Successfully coordinated and executed event for 100+ media and industry attendees\n• Achieved seamless multi-stakeholder event execution with zero major issues\n• Generated strong social media amplification across all platforms\n• Received outstanding feedback from participants and stakeholders\n• Established new benchmarks for international food industry events",
      media: [
        { outlet: "Event Marketing", type: "Case Study", description: "Event management best practices and results" },
        { outlet: "Trade Show News", type: "Coverage", description: "Industry event coverage and analysis" }
      ],
      links: [],
      timeline: "5 months",
      team: "7 specialists",
      services: ["Event Strategy", "Spokesperson Management", "Content Amplification", "Logistics Coordination"]
    },
    "koelnmesse": {
      name: "Koelnmesse",
      category: "Global Events & Partnerships",
      challenge: "Develop regional influencer strategy and manage on-site coordination for major trade event.",
      solution: "Integrated influencer marketing with traditional event management, including emcee services and real-time content creation.",
      results: [
        "Regional food-innovation KOL participation secured",
        "Multi-platform content distribution achieved",
        "Enhanced event visibility and engagement"
      ],
      detailedChallenge: "Koelnmesse needed comprehensive regional influencer strategy development and seamless on-site coordination for a major trade event. The challenge was integrating modern influencer marketing approaches with traditional event management while ensuring maximum visibility and engagement across multiple platforms.",
      detailedSolution: "We created an integrated approach that combined influencer marketing with expert event coordination:\n\n• Developed targeted regional influencer strategy for food innovation sector\n• Integrated influencer marketing with traditional event management protocols\n• Provided professional emcee services for enhanced event experience\n• Implemented real-time content creation and distribution systems\n• Coordinated seamless on-site management for optimal event flow",
      detailedResults: "Our integrated event and influencer strategy achieved outstanding engagement:\n\n• Successfully secured participation from key regional food-innovation KOLs\n• Achieved comprehensive multi-platform content distribution throughout the event\n• Significantly enhanced event visibility and audience engagement\n• Generated substantial social media buzz and online discussion\n• Established new industry standards for influencer-integrated trade events",
      media: [
        { outlet: "Trade Show Executive", type: "Feature", description: "Innovative event marketing strategies" },
        { outlet: "Influencer Marketing Hub", type: "Case Study", description: "B2B influencer marketing success stories" }
      ],
      links: [],
      timeline: "5 months",  
      team: "6 specialists",
      services: ["Influencer Marketing", "Event Coordination", "On-site Management", "Content Creation"]
    }
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
          {caseStudy.links && caseStudy.links.length > 0 && (
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

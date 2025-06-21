
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Meizu Technology",
      company: "Chinese Consumer Electronics Manufacturer",
      description: "Organized the company's first Reddit 'AMA' session with fellow Marketing colleagues for global users.",
      links: [
        {
          title: "Reddit AMA Session",
          url: "https://www.reddit.com/r/Android/comments/5fqclp/we_are_the_global_meizu_team_and_today_we/"
        }
      ],
      social: [
        { platform: "Instagram", url: "https://instagram.com/meizutech" },
        { platform: "Facebook", url: "https://www.facebook.com/meizu/" }
      ]
    },
    {
      title: "OPPO",
      company: "Chinese Consumer Electronics Manufacturer",
      description: "Secured global media coverage of various product launches including Find Series, Reno Series and MWC events. Worked directly with editors, reporters, and influencers.",
      highlights: [
        "OPPO Find X Series coverage in TechRadar, CNET, The Verge, Android Authority, Forbes, Mashable",
        "OPPO Reno Series featured in Trusted Reviews, T3, CNET, Wired",
        "MWC Events coverage by The Verge, Engadget, and tech YouTubers"
      ],
      links: [
        {
          title: "Partnership with Vodafone",
          url: "https://www.oppo.com/uk/newsroom/press/oppo-and-vodafone-announce-partnership-agreement-to-bring-a-broa/"
        },
        {
          title: "Roland Garros Partnership",
          url: "https://www.oppo.com/uk/newsroom/press/oppo-roland-garros/"
        }
      ]
    },
    {
      title: "OnePlus",
      company: "Chinese Consumer Electronics Manufacturer",
      description: "Secured global media coverage for product launches and managed crisis communications during leadership transitions and company merger with OPPO.",
      highlights: [
        "OnePlus 9 Series coverage in The Verge, PC Mag, TechRadar, CNET, AndroidCentral",
        "Crisis management during co-founder departures and OPPO merger",
        "Concept phone coverage in major tech publications"
      ],
      links: [
        {
          title: "OnePlus Press Center",
          url: "http://oneplus.com/press"
        }
      ]
    },
    {
      title: "Cision APAC",
      company: "Global Media Intelligence & Communications",
      description: "Developed tailored content strategies for key clients across the APAC region, working on press releases, sponsored content, and various Cision products.",
      clients: [
        { name: "Lendary", region: "Hong Kong/Macau", industry: "Crypto Finance" },
        { name: "WeBull", region: "Hong Kong/Macau", industry: "Investment Platform" },
        { name: "QBE", region: "Hong Kong/Macau", industry: "Insurance" },
        { name: "K11", region: "Hong Kong/Macau", industry: "Luxury Retail" },
        { name: "Huawei Cloud", region: "Hong Kong/Macau", industry: "Cloud Computing" },
        { name: "Hilti", region: "Hong Kong/Macau", industry: "Construction" },
        { name: "Geberit", region: "Singapore", industry: "Sanitary Solutions" },
        { name: "Farrer Park Hospital", region: "Singapore", industry: "Healthcare" },
        { name: "Reeracoen", region: "Singapore", industry: "Recruitment" },
        { name: "Tencent", region: "Mainland China", industry: "Entertainment/Investment" },
        { name: "Ping An Insurance", region: "Mainland China", industry: "Insurance" },
        { name: "Weichai Group", region: "Mainland China", industry: "Manufacturing" }
      ]
    },
    {
      title: "Independent PR Consulting",
      company: "Freelance Consultant",
      description: "Provided strategic PR services for innovative technology companies across various sectors.",
      clients: [
        {
          name: "Angry Miao",
          industry: "Gaming Hardware",
          description: "Futuristic mechanical keyboard designs",
          coverage: "The Verge, Android Central, HackerNoon, TechCrunch"
        },
        {
          name: "ECARX",
          industry: "Automotive Technology",
          description: "Full stack automotive computing platform",
          coverage: "CNBC, TechNode, Bloomberg"
        },
        {
          name: "Xreal",
          industry: "AR Technology",
          description: "AR glasses and immersive visual experiences",
          coverage: "Stuff.tv, The Verge, TechCrunch, CNET"
        },
        {
          name: "HHOGene",
          industry: "Consumer Electronics",
          description: "World's first light earbuds",
          coverage: "TechNode, KnowTechie, Digital Trends"
        },
        {
          name: "Hikmicro",
          industry: "Thermal Imaging",
          description: "Led press website redevelopment and content strategy",
          coverage: "HVP Magazine, Forbes Georgia, PR Newswire"
        },
        {
          name: "Bitazza",
          industry: "Cryptocurrency",
          description: "Digital asset management platform",
          coverage: "CoinDesk, CoinTelegraph"
        },
        {
          name: "Tanka AI",
          industry: "Enterprise AI",
          description: "AI-powered workplace communication platform",
          coverage: "Reuters"
        }
      ]
    },
    {
      title: "Publicis-MSL",
      company: "Senior PR Consultant",
      description: "Led end-to-end event management for Koelnmesse's Thaifex Anuga 2025 media event in Bangkok, managing 100+ attendees and serving as emcee and moderator.",
      highlights: [
        "Event management from concept to execution",
        "Spokesperson management and executive briefings",
        "Influencer marketing and social media amplification",
        "Content creation and media relations"
      ],
      period: "February 2025 – June 2025"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-light mb-6">Case Studies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive portfolio of strategic communications work across technology, consumer electronics, 
            and enterprise sectors, delivering measurable results for global brands.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-gray-100">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-semibold mb-2">{study.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-600">{study.company}</CardDescription>
                    {study.period && (
                      <p className="text-sm text-gray-500 mt-1">{study.period}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">{study.description}</p>

                {/* Highlights */}
                {study.highlights && (
                  <div>
                    <h4 className="font-medium mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {study.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Clients (for Cision) */}
                {study.clients && study.title === "Cision APAC" && (
                  <div>
                    <h4 className="font-medium mb-4">Key Clients Served:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {study.clients.map((client, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium">{client.name}</h5>
                          <p className="text-sm text-gray-600">{client.region}</p>
                          <p className="text-sm text-gray-500">{client.industry}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Clients (for Independent Consulting) */}
                {study.clients && study.title === "Independent PR Consulting" && (
                  <div>
                    <h4 className="font-medium mb-4">Client Portfolio:</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {study.clients.map((client, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                          <div className="flex items-start justify-between mb-3">
                            <h5 className="font-medium text-lg">{client.name}</h5>
                            <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                              {client.industry}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm mb-3">{client.description}</p>
                          <p className="text-xs text-gray-500">
                            <strong>Coverage:</strong> {client.coverage}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                {study.links && (
                  <div>
                    <h4 className="font-medium mb-3">Featured Coverage:</h4>
                    <div className="flex flex-wrap gap-3">
                      {study.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
                        >
                          {link.title}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Media */}
                {study.social && (
                  <div>
                    <h4 className="font-medium mb-3">Social Presence:</h4>
                    <div className="flex gap-3">
                      {study.social.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors"
                        >
                          {social.platform}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-20 pt-16 border-t border-gray-100">
          <h2 className="text-3xl font-light mb-4">Ready to discuss your next campaign?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            From product launches to crisis management, let's create communications strategies that deliver results.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;

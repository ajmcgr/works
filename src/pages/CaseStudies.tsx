
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Users, Globe, TrendingUp, Award } from "lucide-react";

const CaseStudies = () => {
  const portfolioStats = [
    { icon: Users, label: "Global Brands Served", value: "50+" },
    { icon: Globe, label: "Markets Covered", value: "15+" },
    { icon: TrendingUp, label: "Successful Campaigns", value: "200+" },
    { icon: Award, label: "Years Experience", value: "8+" }
  ];

  const featuredWork = [
    {
      client: "Consumer Electronics Giants",
      category: "Product Launch & Crisis Management",
      brands: [
        { name: "OnePlus", logo: "https://logos-world.net/wp-content/uploads/2020/11/OnePlus-Logo.png" },
        { name: "OPPO", logo: "https://logos-world.net/wp-content/uploads/2020/11/Oppo-Logo.png" },
        { name: "Meizu", logo: "https://logos-world.net/wp-content/uploads/2020/12/Meizu-Logo.png" }
      ],
      challenge: "Navigate competitive smartphone market with multiple product launches while managing corporate restructuring and crisis communications.",
      solution: "Developed integrated campaigns combining product storytelling with transparent crisis communication, securing tier-1 media coverage across global markets.",
      results: [
        "Global coverage in The Verge, TechRadar, CNET, Forbes",
        "Successful crisis management during OPPO merger",
        "First-ever Reddit AMA for Meizu reaching 50K+ users"
      ],
      media: [
        { outlet: "The Verge", type: "Editorial" },
        { outlet: "TechRadar", type: "Review" },
        { outlet: "CNET", type: "Feature" },
        { outlet: "Forbes", type: "Analysis" }
      ],
      links: [
        { title: "OnePlus Press Center", url: "http://oneplus.com/press" },
        { title: "Meizu Reddit AMA", url: "https://www.reddit.com/r/Android/comments/5fqclp/we_are_the_global_meizu_team_and_today_we/" }
      ]
    },
    {
      client: "Enterprise & B2B Solutions",
      category: "Strategic Communications - APAC",
      brands: [
        { name: "Cision", logo: "https://logos-world.net/wp-content/uploads/2023/01/Cision-Logo.png" },
        { name: "Huawei Cloud", logo: "https://logos-world.net/wp-content/uploads/2020/07/Huawei-Logo.png" },
        { name: "Ping An", logo: "https://logos-world.net/wp-content/uploads/2022/05/Ping-An-Logo.png" },
        { name: "Tencent", logo: "https://logos-world.net/wp-content/uploads/2021/09/Tencent-Logo.png" }
      ],
      challenge: "Develop content strategies for diverse portfolio of 12+ enterprise clients across finance, technology, and healthcare sectors in APAC markets.",
      solution: "Created tailored communication frameworks for each market, leveraging local insights and cultural nuances to drive engagement across Hong Kong, Singapore, and Mainland China.",
      results: [
        "Successfully managed 12+ high-profile accounts simultaneously",
        "Achieved consistent coverage in regional business media",
        "Developed scalable content strategies across 3 major APAC markets"
      ],
      clients: [
        { name: "Huawei Cloud", sector: "Technology", region: "HK/Macau" },
        { name: "Ping An Insurance", sector: "Finance", region: "China" },
        { name: "Tencent", sector: "Entertainment", region: "China" },
        { name: "Farrer Park Hospital", sector: "Healthcare", region: "Singapore" }
      ]
    },
    {
      client: "Innovative Tech Startups",
      category: "Brand Building & Market Entry",
      brands: [
        { name: "Xreal", logo: "https://logos-world.net/wp-content/uploads/2023/08/Xreal-Logo.png" },
        { name: "Angry Miao", logo: "/api/placeholder/120/60" },
        { name: "ECARX", logo: "/api/placeholder/120/60" },
        { name: "HHOGene", logo: "/api/placeholder/120/60" }
      ],
      challenge: "Launch cutting-edge technology brands in competitive markets, from AR glasses to gaming keyboards to automotive AI.",
      solution: "Crafted narrative-driven campaigns focusing on innovation stories, securing coverage in top-tier tech publications and building community engagement.",
      results: [
        "Coverage in TechCrunch, The Verge, CNET, Android Central",
        "Successfully positioned brands as innovation leaders",
        "Built strong community engagement and product buzz"
      ],
      innovations: [
        { company: "Xreal", product: "AR Glasses", highlight: "Immersive visual experiences" },
        { company: "Angry Miao", product: "Gaming Keyboards", highlight: "Futuristic mechanical designs" },
        { company: "ECARX", product: "Automotive AI", highlight: "Full-stack computing platform" }
      ]
    },
    {
      client: "Global Events & Partnerships",
      category: "Event Management & Corporate Communications",
      brands: [
        { name: "Publicis-MSL", logo: "https://logos-world.net/wp-content/uploads/2023/01/Publicis-Logo.png" },
        { name: "Koelnmesse", logo: "/api/placeholder/120/60" }
      ],
      challenge: "Execute large-scale international media event for Thaifex Anuga 2025 in Bangkok with 100+ attendees and multiple stakeholders.",
      solution: "End-to-end event management including run-of-show design, spokesperson training, influencer outreach, and on-site coordination as emcee.",
      results: [
        "Successfully coordinated 100+ media and industry attendees",
        "Secured regional food-innovation KOL participation",
        "Amplified event content across LinkedIn, X, and Instagram"
      ],
      period: "February 2025 – June 2025",
      services: ["Event Strategy", "Spokesperson Management", "Influencer Marketing", "Content Amplification"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-[1.1] mb-8 tracking-tight">
              Our Work
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl">
              From global product launches to crisis management, we deliver integrated communications 
              strategies that build brands, manage reputation, and drive meaningful engagement across markets.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {portfolioStats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 border border-gray-200">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-black" />
                <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Work */}
          <div className="space-y-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8 leading-tight">Featured Work</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
                Case studies showcasing strategic communications across technology, enterprise, and innovation sectors.
              </p>
            </div>

            {featuredWork.map((work, index) => (
              <Card key={index} className="bg-white border border-gray-300 shadow-none overflow-hidden">
                <CardHeader className="bg-gray-100 text-black p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl font-bold mb-3">{work.client}</CardTitle>
                      <CardDescription className="text-gray-600 text-lg font-normal">{work.category}</CardDescription>
                      {work.period && (
                        <p className="text-gray-500 text-sm mt-2 font-normal">{work.period}</p>
                      )}
                    </div>
                    {work.brands && (
                      <div className="flex flex-wrap gap-4 items-center">
                        {work.brands.map((brand, idx) => (
                          <div key={idx} className="bg-white p-3 flex items-center justify-center min-w-[100px] h-12 border border-gray-200">
                            <img 
                              src={brand.logo} 
                              alt={brand.name}
                              className="max-h-8 max-w-[80px] object-contain filter grayscale"
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                const sibling = target.nextElementSibling as HTMLSpanElement;
                                target.style.display = 'none';
                                if (sibling) {
                                  sibling.style.display = 'block';
                                }
                              }}
                            />
                            <span className="text-black text-sm font-medium hidden">{brand.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-black border-b border-gray-300 pb-2">Challenge</h4>
                      <p className="text-gray-700 leading-relaxed font-normal">{work.challenge}</p>
                    </div>
                    
                    {/* Solution */}
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-black border-b border-gray-300 pb-2">Solution</h4>
                      <p className="text-gray-700 leading-relaxed font-normal">{work.solution}</p>
                    </div>
                    
                    {/* Results */}
                    <div>
                      <h4 className="font-bold text-lg mb-3 text-black border-b border-gray-300 pb-2">Results</h4>
                      <ul className="space-y-2">
                        {work.results.map((result, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start font-normal">
                            <span className="w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    {/* Media Coverage */}
                    {work.media && (
                      <div className="mb-6">
                        <h5 className="font-bold text-black mb-3">Media Coverage</h5>
                        <div className="flex flex-wrap gap-3">
                          {work.media.map((outlet, idx) => (
                            <div key={idx} className="bg-gray-100 px-4 py-2 border border-gray-300">
                              <span className="font-bold text-black">{outlet.outlet}</span>
                              <span className="text-gray-600 text-sm ml-2 font-normal">({outlet.type})</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Client Portfolio */}
                    {work.clients && (
                      <div className="mb-6">
                        <h5 className="font-bold text-black mb-4">Client Portfolio</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {work.clients.map((client, idx) => (
                            <div key={idx} className="bg-gray-50 p-4 border border-gray-200">
                              <div className="font-bold text-black">{client.name}</div>
                              <div className="text-sm text-gray-600 font-normal">{client.sector} • {client.region}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Innovation Highlights */}
                    {work.innovations && (
                      <div className="mb-6">
                        <h5 className="font-bold text-black mb-4">Innovation Highlights</h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {work.innovations.map((innovation, idx) => (
                            <div key={idx} className="bg-gray-100 p-4 border border-gray-300">
                              <div className="font-bold text-black">{innovation.company}</div>
                              <div className="text-sm text-gray-700 font-normal">{innovation.product}</div>
                              <div className="text-xs text-gray-600 mt-1 font-normal">{innovation.highlight}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Services */}
                    {work.services && (
                      <div className="mb-6">
                        <h5 className="font-bold text-black mb-3">Services Delivered</h5>
                        <div className="flex flex-wrap gap-2">
                          {work.services.map((service, idx) => (
                            <span key={idx} className="bg-gray-700 text-white px-3 py-1 text-sm font-normal">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Links */}
                    {work.links && (
                      <div>
                        <h5 className="font-bold text-black mb-3">Featured Coverage</h5>
                        <div className="flex flex-wrap gap-3">
                          {work.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors border-b border-black hover:border-gray-600 font-normal"
                            >
                              {link.title}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-700 text-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Ready to Tell Your Story?</h2>
          <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto text-gray-300 font-normal leading-relaxed">
            Let's create communications strategies that build your brand, engage your audience, 
            and deliver measurable results across global markets.
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
            className="px-8 py-4 hover:opacity-90 transition-opacity text-lg font-bold border border-white text-white"
            style={{ backgroundColor: '#409EFF' }}
          >
            Start Your Campaign
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Users, Globe, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const portfolioStats = [
    { icon: Users, label: "Years", value: "2+" },
    { icon: Globe, label: "Campaigns", value: "50+" },
    { icon: TrendingUp, label: "Retention", value: "98%" },
    { icon: Award, label: "Support", value: "24/7" }
  ];

  const workByClient = [
    // Consumer Electronics Group
    {
      groupTitle: "Consumer Electronics Giants",
      groupCategory: "Product Launch & Crisis Management",
      clients: [
        {
          id: "oneplus",
          name: "OnePlus",
          challenge: "Navigate competitive smartphone market with multiple product launches while managing corporate restructuring.",
          solution: "Developed integrated campaigns combining product storytelling with transparent communication, securing tier-1 media coverage across global markets.",
          results: [
            "Global coverage in The Verge, TechRadar, CNET",
            "Successful product launch campaigns",
            "Strengthened brand positioning in competitive market"
          ],
          media: [
            { outlet: "The Verge", type: "Editorial" },
            { outlet: "TechRadar", type: "Review" },
            { outlet: "CNET", type: "Feature" }
          ],
          links: [
            { title: "OnePlus Press Center", url: "http://oneplus.com/press" }
          ]
        },
        {
          id: "oppo",
          name: "OPPO",
          challenge: "Crisis management during corporate restructuring and merger activities while maintaining market presence.",
          solution: "Executed transparent crisis communication strategy, maintaining stakeholder confidence during transition period.",
          results: [
            "Successful crisis management during merger",
            "Maintained positive media relations",
            "Preserved brand reputation during transition"
          ],
          media: [
            { outlet: "Forbes", type: "Analysis" },
            { outlet: "TechRadar", type: "News" }
          ]
        },
        {
          id: "meizu",
          name: "Meizu",
          challenge: "Break into Western markets and build community engagement for Chinese smartphone brand.",
          solution: "Created community-focused campaigns including first-ever Reddit AMA, building direct user engagement.",
          results: [
            "First-ever Reddit AMA reaching 50K+ users",
            "Built strong Western market presence",
            "Established direct community engagement channels"
          ],
          links: [
            { title: "Meizu Reddit AMA", url: "https://www.reddit.com/r/Android/comments/5fqclp/we_are_the_global_meizu_team_and_today_we/" }
          ]
        }
      ]
    },
    // Enterprise & B2B Group
    {
      groupTitle: "Enterprise & B2B Solutions",
      groupCategory: "Strategic Communications - APAC",
      clients: [
        {
          id: "tencent",
          name: "Tencent",
          challenge: "Manage communications for entertainment and gaming divisions across multiple product launches.",
          solution: "Created integrated campaigns covering gaming, entertainment, and technology verticals with cultural sensitivity.",
          results: [
            "Successful multi-product campaign coordination",
            "Strong entertainment media relationships",
            "Cultural resonance across target markets"
          ],
          sector: "Entertainment",
          region: "China"
        }
      ]
    },
    // Innovative Tech Startups Group
    {
      groupTitle: "Innovative Tech Startups",
      groupCategory: "Brand Building & Market Entry",
      clients: [
        {
          id: "xreal",
          name: "Xreal",
          challenge: "Launch AR glasses brand in competitive wearable technology market.",
          solution: "Crafted narrative-driven campaigns focusing on immersive experiences and practical applications of AR technology.",
          results: [
            "Coverage in TechCrunch, The Verge, CNET",
            "Positioned as AR innovation leader",
            "Strong community engagement and product buzz"
          ],
          innovation: "AR Glasses - Immersive visual experiences"
        },
        {
          id: "angry-miao",
          name: "Angry Miao",
          challenge: "Build premium gaming keyboard brand with futuristic design aesthetic.",
          solution: "Developed campaigns emphasizing craftsmanship, innovation, and gaming culture integration.",
          results: [
            "Strong gaming community adoption",
            "Premium brand positioning established",
            "Coverage in gaming and tech publications"
          ],
          innovation: "Gaming Keyboards - Futuristic mechanical designs"
        },
        {
          id: "ecarx",
          name: "ECARX",
          challenge: "Position automotive AI platform in rapidly evolving smart vehicle market.",
          solution: "Created thought leadership content around automotive intelligence and full-stack computing platforms.",
          results: [
            "Automotive industry recognition",
            "Technical innovation positioning",
            "Strong B2B partnerships development"
          ],
          innovation: "Automotive AI - Full-stack computing platform"
        },
        {
          id: "hhogene",
          name: "HHOGene",
          challenge: "Launch innovative health technology solutions in competitive wellness market.",
          solution: "Developed health-focused communications emphasizing scientific backing and user benefits.",
          results: [
            "Health tech media coverage",
            "Scientific credibility establishment",
            "Consumer trust building"
          ],
          innovation: "Health Technology - Innovative wellness solutions"
        }
      ]
    },
    // Global Events & Partnerships Group
    {
      groupTitle: "Global Events & Partnerships",
      groupCategory: "Event Management & Corporate Communications",
      clients: [
        {
          id: "publicis-msl",
          name: "Publicis-MSL",
          challenge: "Execute large-scale international media event for Thaifex Anuga 2025 in Bangkok with complex stakeholder management.",
          solution: "End-to-end event management including run-of-show design, spokesperson training, and multi-platform content amplification.",
          results: [
            "Successfully coordinated 100+ media and industry attendees",
            "Seamless multi-stakeholder event execution",
            "Strong social media amplification across platforms"
          ],
          period: "February 2025 – June 2025",
          services: ["Event Strategy", "Spokesperson Management", "Content Amplification"]
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-32 lg:py-48 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-headline text-black leading-[1.1] mb-8 tracking-tight">
              Our customers
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl">
              From global product launches to crisis management, we deliver integrated communications 
              strategies that build brands, manage reputation, and drive meaningful engagement across markets.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {portfolioStats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 border border-gray-200">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-black" />
                <div className="text-3xl font-headline text-black mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Work by Client Groups */}
          <div className="space-y-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-headline text-black mb-8 leading-tight">Customer portfolio</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
                Strategic communications delivered across technology, enterprise, and innovation sectors.
              </p>
            </div>

            {workByClient.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-8">
                {/* Group Header */}
                <div className="text-center mb-12">
                  <h3 className="text-2xl lg:text-3xl font-headline text-black mb-4">{group.groupTitle}</h3>
                  <p className="text-lg text-gray-600 font-normal">{group.groupCategory}</p>
                </div>

                {/* Client Cards */}
                <div className="grid gap-8">
                  {group.clients.map((client, clientIndex) => (
                    <Card key={clientIndex} className="bg-white border border-gray-300 shadow-none overflow-hidden">
                      <CardHeader className="bg-gray-100 text-black p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                          <div>
                            <CardTitle className="text-2xl lg:text-3xl font-headline mb-2">{client.name}</CardTitle>
                            {client.sector && client.region && (
                              <CardDescription className="text-gray-600 text-lg font-normal">
                                {client.sector} • {client.region}
                              </CardDescription>
                            )}
                            {client.innovation && (
                              <CardDescription className="text-gray-600 text-lg font-normal">
                                {client.innovation}
                              </CardDescription>
                            )}
                            {client.period && (
                              <p className="text-gray-500 text-sm mt-2 font-normal">{client.period}</p>
                            )}
                          </div>
                          <div>
                            <Button asChild className="text-white hover:opacity-90" style={{ backgroundColor: '#409EFF' }}>
                              <Link to={`/case-study/${client.id}`}>Read Case Study</Link>
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="p-8">
                        <div className="grid lg:grid-cols-3 gap-8">
                          {/* Challenge */}
                          <div>
                            <h4 className="font-headline text-lg mb-3 text-black border-b border-gray-300 pb-2">Challenge</h4>
                            <p className="text-gray-700 leading-relaxed font-normal">{client.challenge}</p>
                          </div>
                          
                          {/* Solution */}
                          <div>
                            <h4 className="font-headline text-lg mb-3 text-black border-b border-gray-300 pb-2">Solution</h4>
                            <p className="text-gray-700 leading-relaxed font-normal">{client.solution}</p>
                          </div>
                          
                          {/* Results */}
                          <div>
                            <h4 className="font-headline text-lg mb-3 text-black border-b border-gray-300 pb-2">Results</h4>
                            <ul className="space-y-2">
                              {client.results.map((result, idx) => (
                                <li key={idx} className="text-gray-700 flex items-start font-normal">
                                  <span className="w-2 h-2 bg-black mt-2 mr-3 flex-shrink-0"></span>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                          {/* Media Coverage */}
                          {client.media && (
                            <div className="mb-6">
                              <h5 className="font-headline text-black mb-3">Media Coverage</h5>
                              <div className="flex flex-wrap gap-3">
                                {client.media.map((outlet, idx) => (
                                  <div key={idx} className="bg-gray-100 px-4 py-2 border border-gray-300">
                                    <span className="font-headline text-black">{outlet.outlet}</span>
                                    <span className="text-gray-600 text-sm ml-2 font-normal">({outlet.type})</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Services */}
                          {client.services && (
                            <div className="mb-6">
                              <h5 className="font-headline text-black mb-3">Services Delivered</h5>
                              <div className="flex flex-wrap gap-2">
                                {client.services.map((service, idx) => (
                                  <span key={idx} className="bg-gray-700 text-white px-3 py-1 text-sm font-normal">
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Links */}
                          {client.links && (
                            <div>
                              <h5 className="font-headline text-black mb-3">Featured Coverage</h5>
                              <div className="flex flex-wrap gap-3">
                                {client.links.map((link, idx) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-black">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl text-center">
          <h2 className="text-4xl lg:text-5xl font-headline mb-8 leading-tight text-black">
            Ready to tell your story?
          </h2>
          <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto text-gray-600 font-normal leading-relaxed">
            Let's discuss your goals and how we can help you achieve them through strategic public relations.
          </p>
          <Button asChild size="lg" className="text-white hover:opacity-90 px-8 py-3" style={{ backgroundColor: '#409EFF' }}>
            <Link to="/contact">Start a conversation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

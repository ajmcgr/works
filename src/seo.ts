export const SITE_URL = "https://works.xyz";
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export type SeoPage = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

const pages: SeoPage[] = [
  { path: "/", title: "Works | PR & Influencer Marketing Agency", description: "AI-powered PR and influencer marketing for ambitious brands. Works builds buzz, earns media coverage, and turns product launches into growth." },
  { path: "/about", title: "About Works | Global PR & Influencer Experts", description: "Meet Works, an independent PR and influencer marketing agency combining senior communications expertise, creative storytelling, and AI-powered execution." },
  { path: "/services", title: "PR & Influencer Marketing Services | Works", description: "Explore Works services spanning media relations, influencer marketing, crisis communications, brand strategy, content, and global product launches." },
  { path: "/services/media-relations", title: "Media Relations Agency | Works", description: "Earn relevant media coverage with strategic positioning, journalist relationships, news development, and targeted press outreach from Works." },
  { path: "/services/crisis-communication", title: "Crisis Communication Services | Works", description: "Protect brand reputation with crisis planning, rapid-response messaging, stakeholder communications, and senior media counsel." },
  { path: "/services/brand-communications", title: "Brand Communications Agency | Works", description: "Build a clear, consistent brand narrative across media, executives, campaigns, and every audience touchpoint." },
  { path: "/services/content-strategy", title: "Content Strategy Services | Works", description: "Turn brand expertise into a focused content system with editorial strategy, storytelling, thought leadership, and distribution planning." },
  { path: "/services/event-management", title: "PR Event Management | Works", description: "Plan and deliver media events, product launches, conferences, and stakeholder experiences that create attention and lasting value." },
  { path: "/services/influencer-marketing", title: "Influencer Marketing Agency | Works", description: "Launch creator-led campaigns with strategic influencer selection, authentic partnerships, campaign management, and measurable performance." },
  { path: "/contact", title: "Contact Works | Start a PR Project", description: "Tell Works about your launch, PR, influencer marketing, or reputation challenge and start a conversation with our team." },
  { path: "/startups", title: "Startup PR Services | Works", description: "PR strategy and launch support for startups that need to build credibility, sharpen their story, and earn attention from customers and investors." },
  { path: "/customers", title: "PR & Influencer Marketing Case Studies | Works", description: "See how Works has supported global brands and technology companies with launches, media relations, crisis communications, and creator campaigns." },
  { path: "/resources/startup-pr-guide", title: "Startup PR Agency Guide | Works", description: "Learn how startups can build awareness, credibility, and media momentum with a focused PR strategy from day one." },
  { path: "/resources/ai-media-tools", title: "AI-Powered Media Outreach | Works", description: "Combine human PR expertise with AI-powered research and personalization to find relevant journalists and improve media outreach." },
  { path: "/resources/international-expansion", title: "International PR Strategy | Works", description: "Build a coordinated global PR strategy with market-specific messaging, local media relationships, and consistent brand positioning." },
  { path: "/resources/saas-marketing", title: "B2B PR for SaaS Companies | Works", description: "B2B PR for SaaS brands that need stronger category positioning, executive authority, qualified awareness, and sales-supporting coverage." },
  { path: "/resources/hardware-launches", title: "Consumer Technology & Hardware PR | Works", description: "Launch consumer technology and hardware with product storytelling, reviews, media relations, events, and creator-led campaigns." },
  { path: "/resources/reputation-defense", title: "Crisis & Reputation Management | Works", description: "Prepare for, manage, and recover from reputation risks with scenario planning, response strategy, stakeholder communications, and media support." },
  { path: "/resources/brand-storytelling", title: "Brand Storytelling Services | Works", description: "Create a distinctive brand narrative that connects product value, founder vision, customer proof, and culture across every channel." },
  { path: "/resources/founder-training", title: "Founder Media Training | Works", description: "Prepare founders and executives for interviews, presentations, difficult questions, and confident communication across modern media formats." },
  { path: "/resources/launch-amplification", title: "Product Launch PR Sprint | Works", description: "Build launch momentum quickly with a focused PR sprint combining positioning, media outreach, content, and creator amplification." },
  { path: "/tools/pr-headline-generator", title: "Free PR Headline Generator | Works", description: "Generate clear, newsworthy press release headline ideas with this free PR headline tool from Works." },
  { path: "/tools/influencer-brief-builder", title: "Free Influencer Brief Builder | Works", description: "Create a structured influencer campaign brief covering objectives, audience, deliverables, messaging, and timing." },
  { path: "/tools/pr-health-checker", title: "Free PR Health Checker | Works", description: "Assess your brand's PR readiness and identify practical opportunities to strengthen positioning, media outreach, and credibility." },
  { path: "/tools/pitch-timer", title: "Free PR Pitch Timer | Works", description: "Test and tighten your media pitch with a simple timer designed for clearer, more concise PR storytelling." },
  { path: "/tools/pr-crisis-response-generator", title: "Free PR Crisis Response Generator | Works", description: "Draft a structured first-response statement for a communications crisis, then refine it with expert review." },
  { path: "/tools/influencer-roi-calculator", title: "Influencer Marketing ROI Calculator | Works", description: "Estimate influencer campaign return, compare investment with campaign value, and plan performance targets." },
  { path: "/tools/influencer-content-brief-generator", title: "Influencer Content Brief Generator | Works", description: "Generate a practical creator content brief with campaign context, messaging, deliverables, and brand guidance." },
  { path: "/tools/influencer-rate-calculator", title: "Influencer Rate Calculator | Works", description: "Estimate creator fees using platform, audience size, engagement, content format, usage rights, and campaign requirements." },
  { path: "/tools/influencer-campaign-timeline", title: "Influencer Campaign Timeline Generator | Works", description: "Build a realistic influencer campaign timeline from creator discovery and contracting through publishing and reporting." },
  { path: "/tools/influencer-performance-tracker", title: "Influencer Performance Tracker | Works", description: "Track creator campaign reach, engagement, conversions, cost efficiency, and overall performance in one free tool." },
  { path: "/privacy-policy", title: "Privacy Policy | Works", description: "Read the Works privacy policy and learn how information is collected, used, stored, and protected." },
  { path: "/terms-of-service", title: "Terms of Service | Works", description: "Read the terms governing use of the Works website and services." },
];

export const caseStudies: Record<string, { name: string; description: string }> = {
  oneplus: { name: "OnePlus", description: "How Works supported OnePlus with product launches, tier-one technology coverage, and communications through corporate change." },
  byd: { name: "BYD", description: "How Works built a unified global brand platform for BYD across product storytelling, auto shows, thought leadership, and sponsorship activation." },
  oppo: { name: "OPPO", description: "How Works helped OPPO protect stakeholder confidence and brand reputation through corporate restructuring." },
  meizu: { name: "Meizu", description: "How Works helped Meizu enter Western markets and build direct community engagement with technology audiences." },
  cision: { name: "Cision", description: "How Works developed adaptable PR technology content and media strategies for Cision across APAC markets." },
  "huawei-cloud": { name: "Huawei Cloud", description: "How Works positioned Huawei Cloud around technical capability, enterprise value, innovation, and reliability." },
  "ping-an": { name: "Ping An", description: "How Works supported Ping An with strategic communications and market positioning." },
  tencent: { name: "Tencent", description: "How Works managed integrated communications for Tencent entertainment, gaming, and technology launches." },
  xreal: { name: "XREAL", description: "How Works launched XREAL's augmented-reality products with narrative-led media and creator campaigns." },
  "angry-miao": { name: "Angry Miao", description: "How Works built premium positioning and technology media attention for Angry Miao's design-led gaming hardware." },
  ecarx: { name: "ECARX", description: "How Works positioned ECARX as an automotive intelligence and full-stack computing innovator." },
  hhogene: { name: "HHOGene", description: "How Works launched HHOGene's health technology with evidence-led consumer communications." },
  "publicis-msl": { name: "Publicis MSL", description: "How Works delivered media event strategy, spokesperson support, and content amplification for Publicis MSL." },
  koelnmesse: { name: "Koelnmesse", description: "How Works supported Koelnmesse with international event and media communications." },
};

export const indexableRoutes = [
  ...pages.map((page) => page.path),
  ...Object.keys(caseStudies).map((id) => `/case-study/${id}`),
];

const pageMap = new Map(pages.map((page) => [page.path, page]));

export function getSeoForPath(pathname: string): SeoPage {
  const path = pathname !== "/" ? pathname.replace(/\/$/, "") : pathname;
  const page = pageMap.get(path);
  if (page) return page;

  const caseStudyMatch = path.match(/^\/case-study\/([^/]+)$/);
  if (caseStudyMatch && caseStudies[caseStudyMatch[1]]) {
    const study = caseStudies[caseStudyMatch[1]];
    return {
      path,
      title: `${study.name} PR Case Study | Works`,
      description: study.description,
      type: "article",
    };
  }

  if (path === "/blog") {
    return {
      path,
      title: "Works Blog",
      description: "PR, communications, marketing, and technology perspectives from Works.",
      noindex: true,
    };
  }

  return {
    path,
    title: "Page Not Found | Works",
    description: "The page you requested could not be found.",
    noindex: true,
  };
}

export function canonicalUrl(page: SeoPage) {
  return `${SITE_URL}${page.path === "/" ? "/" : page.path}`;
}

export function structuredDataForPage(page: SeoPage) {
  const canonical = canonicalUrl(page);
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Works",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/lovable-uploads/works-black-logo.png`,
    sameAs: ["https://www.linkedin.com/company/worksxyz"],
  };

  if (page.path === "/") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        organization,
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: "Works",
          url: `${SITE_URL}/`,
          publisher: { "@id": `${SITE_URL}/#organization` },
        },
      ],
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": page.type === "article" ? "CreativeWork" : "WebPage",
    name: page.title,
    description: page.description,
    url: canonical,
    publisher: organization,
  };
}

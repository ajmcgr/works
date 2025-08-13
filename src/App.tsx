
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import StartupPR from "./pages/services/StartupPR";
import InfluencerMarketing from "./pages/services/InfluencerMarketing";
import AIPressOutreach from "./pages/services/AIPressOutreach";
import GlobalPRStrategy from "./pages/services/GlobalPRStrategy";
import B2BPRSaaS from "./pages/services/B2BPRSaaS";
import ConsumerTechHardwarePR from "./pages/services/ConsumerTechHardwarePR";
import CrisisReputationManagement from "./pages/services/CrisisReputationManagement";
import CreativeStorytelling from "./pages/services/CreativeStorytelling";
import MediaTraining from "./pages/services/MediaTraining";
import LaunchSprint from "./pages/services/LaunchSprint";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Startups from "./pages/Startups";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Free Tools
import PRHeadlineGenerator from "./pages/tools/PRHeadlineGenerator";
import InfluencerBriefBuilder from "./pages/tools/InfluencerBriefBuilder";
import PRHealthChecker from "./pages/tools/PRHealthChecker";
import PitchTimer from "./pages/tools/PitchTimer";
import PRCrisisResponseGenerator from "./pages/tools/PRCrisisResponseGenerator";
import InfluencerROICalculator from "./pages/tools/InfluencerROICalculator";
import InfluencerContentBriefGenerator from "./pages/tools/InfluencerContentBriefGenerator";
import InfluencerRateCalculator from "./pages/tools/InfluencerRateCalculator";
import InfluencerCampaignTimeline from "./pages/tools/InfluencerCampaignTimeline";
import InfluencerPerformanceTracker from "./pages/tools/InfluencerPerformanceTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/startups" element={<Startups />} />
              <Route path="/resources/our-customers" element={<CaseStudies />} />
              <Route path="/case-study/:id" element={<CaseStudyDetail />} />
              <Route path="/resources/startup-pr-guide" element={<StartupPR />} />
              <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
              <Route path="/resources/ai-media-tools" element={<AIPressOutreach />} />
              <Route path="/resources/international-expansion" element={<GlobalPRStrategy />} />
              <Route path="/resources/saas-marketing" element={<B2BPRSaaS />} />
              <Route path="/resources/hardware-launches" element={<ConsumerTechHardwarePR />} />
              <Route path="/resources/reputation-defense" element={<CrisisReputationManagement />} />
              <Route path="/resources/brand-storytelling" element={<CreativeStorytelling />} />
              <Route path="/resources/founder-training" element={<MediaTraining />} />
              <Route path="/resources/launch-amplification" element={<LaunchSprint />} />
              
              {/* Free Tools */}
            <Route path="/tools/pr-headline-generator" element={<PRHeadlineGenerator />} />
            <Route path="/tools/influencer-brief-builder" element={<InfluencerBriefBuilder />} />
            <Route path="/tools/pr-health-checker" element={<PRHealthChecker />} />
            <Route path="/tools/pitch-timer" element={<PitchTimer />} />
            <Route path="/tools/pr-crisis-response-generator" element={<PRCrisisResponseGenerator />} />
            <Route path="/tools/influencer-roi-calculator" element={<InfluencerROICalculator />} />
            <Route path="/tools/influencer-content-brief-generator" element={<InfluencerContentBriefGenerator />} />
            <Route path="/tools/influencer-rate-calculator" element={<InfluencerRateCalculator />} />
            <Route path="/tools/influencer-campaign-timeline" element={<InfluencerCampaignTimeline />} />
            <Route path="/tools/influencer-performance-tracker" element={<InfluencerPerformanceTracker />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

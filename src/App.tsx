
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
              <Route path="/work" element={<CaseStudies />} />
              <Route path="/case-study/:id" element={<CaseStudyDetail />} />
              <Route path="/services/startup-pr" element={<StartupPR />} />
              <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
              <Route path="/services/ai-press-outreach" element={<AIPressOutreach />} />
              <Route path="/services/global-pr-strategy" element={<GlobalPRStrategy />} />
              <Route path="/services/b2b-pr-saas" element={<B2BPRSaaS />} />
              <Route path="/services/consumer-tech-hardware-pr" element={<ConsumerTechHardwarePR />} />
              <Route path="/services/crisis-reputation-management" element={<CrisisReputationManagement />} />
              <Route path="/services/creative-storytelling" element={<CreativeStorytelling />} />
              <Route path="/services/media-training" element={<MediaTraining />} />
              <Route path="/services/launch-sprint" element={<LaunchSprint />} />
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

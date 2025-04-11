
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CollaborationDetail from "./pages/CollaborationDetail";
import CoordinationDetail from "./pages/CoordinationDetail";
import ProjectReviewDetail from "./pages/use-cases/ProjectReviewDetail";
import ARSiteVerificationDetail from "./pages/use-cases/ARSiteVerificationDetail";
import MEPOptimizationDetail from "./pages/use-cases/MEPOptimizationDetail";
import ImmersiveTrainingDetail from "./pages/use-cases/ImmersiveTrainingDetail";
import AutoReportingDetail from "./pages/use-cases/AutoReportingDetail";
import PredictiveMaintenanceDetail from "./pages/use-cases/PredictiveMaintenanceDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collaboration" element={<CollaborationDetail />} />
          <Route path="/coordination" element={<CoordinationDetail />} />
          <Route path="/use-cases/project-review" element={<ProjectReviewDetail />} />
          <Route path="/use-cases/ar-site-verification" element={<ARSiteVerificationDetail />} />
          <Route path="/use-cases/mep-optimization" element={<MEPOptimizationDetail />} />
          <Route path="/use-cases/immersive-training" element={<ImmersiveTrainingDetail />} />
          <Route path="/use-cases/auto-reporting" element={<AutoReportingDetail />} />
          <Route path="/use-cases/predictive-maintenance" element={<PredictiveMaintenanceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

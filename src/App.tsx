import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ProjectM2T from "./pages/ProjectM2T.tsx";
import ProjectFundinDashboard from "./pages/ProjectFundinDashboard.tsx";

import ProjectChaiHatii from "./pages/ProjectChaiHatii.tsx";
import ProjectUniversus from "./pages/ProjectUniversus.tsx";
import ProjectUnlockIvy from "./pages/ProjectUnlockIvy.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/docbot" element={<ProjectM2T />} />
          <Route path="/project/fundin-bharat" element={<ProjectFundinBharat />} />
          <Route path="/product/fundin-bharat-dashboard" element={<ProjectFundinDashboard />} />
          <Route path="/product/gigpot" element={<ProjectGigpot />} />
          <Route path="/product/crypto-lottery" element={<ProjectCryptoLottery />} />
          <Route path="/product/chaihatii" element={<ProjectChaiHatii />} />
          <Route path="/product/universus" element={<ProjectUniversus />} />
          <Route path="/product/unlockivy" element={<ProjectUnlockIvy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

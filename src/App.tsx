import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProblemStatements from "./pages/ProblemStatements";
import ProblemDetail from "./pages/ProblemDetail";
import Overview from "./pages/Overview";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
  <TooltipProvider>
    <Toaster />
    <Sonner />
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/overview" element={<Overview />} />
        {/* <Route path="/problem-statements" element={<ProblemStatements />} /> */}
        {/* <Route path="/problem-statements/:id" element={<ProblemDetail />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
</QueryClientProvider>

  );
};

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DepartmentQuiz from "./pages/DepartmentQuiz";
import CSETopics from "./pages/CSETopics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cse/topics" element={<CSETopics />} />
          <Route path="/department/cse/topic/:topicId" element={<DepartmentQuiz />} />
          <Route path="/department/:department" element={<DepartmentQuiz />} />
          <Route path="/department/:department/quiz/:weekId" element={<Index />} />
          <Route path="/department/cse/topic/:topicId/quiz/:weekId" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import DepartmentQuiz from "./pages/DepartmentQuiz";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#f8f9fe] via-[#f1f3fa] to-[#edeef8] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-foreground transition-colors">
          <main className="flex-1 flex flex-col justify-center items-center w-full px-4 py-8 sm:py-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/department/:department" element={<DepartmentQuiz />} />
              <Route path="/department/:department/quiz/:weekId" element={<Index />} />
              <Route path="/department/cse/topic/:topicId" element={<DepartmentQuiz />} />
              <Route path="/department/cse/topic/:topicId/quiz/:weekId" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Simple, Neat TechRookz Footer */}
          <footer className="w-full py-6 text-center text-sm text-muted-foreground mt-auto">
            Designed and Developed by{' '}
            <a
              href="https://techrookz.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center ml-1 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary transition-all font-semibold shadow-sm"
            >
              TechRookz
            </a>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

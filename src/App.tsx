
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Industries from "./pages/Industries";
import ProductsServices from "./pages/ProductsServices";
import InvestorRelations from "./pages/InvestorRelations";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import VaraFoods from "./pages/industries/VaraFoods";
import VaraElectronics from "./pages/industries/VaraElectronics";
import VaraRealEstate from "./pages/industries/VaraRealEstate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/foods" element={<VaraFoods />} />
          <Route path="/industries/electronics" element={<VaraElectronics />} />
          <Route path="/industries/real-estate" element={<VaraRealEstate />} />
          <Route path="/products" element={<ProductsServices />} />
          <Route path="/investors" element={<InvestorRelations />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

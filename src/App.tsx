import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Newsroom from "./pages/Newsroom";
import Partners from "./pages/Partners";
import Ads from "./pages/Ads";
import AdsSolutions from "./pages/ads/AdsSolutions";
import AdsBrands from "./pages/ads/AdsBrands";
import AdsCaseStudies from "./pages/ads/AdsCaseStudies";
import AdsContact from "./pages/ads/AdsContact";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import Cart from "./pages/Cart";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";
import Login from "./pages/Login";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/newsroom" element={<Newsroom />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/ads" element={<Ads />}>
                  <Route path="solutions" element={<AdsSolutions />} />
                  <Route path="brands" element={<AdsBrands />} />
                  <Route path="case-studies" element={<AdsCaseStudies />} />
                  <Route path="contact" element={<AdsContact />} />
                </Route>
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/location" element={<Location />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/restaurants/:id" element={<RestaurantDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/help" element={<Help />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;

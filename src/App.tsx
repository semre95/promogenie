
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";

// Pages
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Demos from "./pages/Demos";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Cookies from "./pages/Cookies";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

// This is a simple authentication check
// In a real app, you would use a proper auth system
const isAuthenticated = () => {
  // For testing purposes, we'll consider the test account always authenticated
  const testEmail = "test@promogenie.co";
  const testPassword = "prmgn2025*"; // Note: In a real app, never store passwords in code
  
  // Check if the user is logged in via localStorage or session
  return localStorage.getItem("isAuthenticated") === "true";
};

// A simple protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const App = () => {
  // Setup test account on first load
  useEffect(() => {
    // In a real app, this would be handled securely on the server
    // This is only for demo purposes
    if (process.env.NODE_ENV === 'development') {
      // Set up the test account in localStorage (encrypted in a real app)
      localStorage.setItem("testEmail", btoa("test@promogenie.co"));
      localStorage.setItem("testPassword", btoa("prmgn2025*"));
      
      // Auto-login for demo purposes
      localStorage.setItem("isAuthenticated", "true");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/demos" element={<Demos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookies" element={<Cookies />} />
              
              {/* Protected dashboard route */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;

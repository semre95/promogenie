
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

// Dashboard Components
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import DashboardHome from "./pages/dashboard/DashboardHome";

import './index.css'

const queryClient = new QueryClient();

// This is a simple authentication check
const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};

// A simple protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const DashboardApp = () => {
  // Setup test account on first load
  useEffect(() => {
    // In a real app, this would be handled securely on the server
    // This is only for demo purposes
    localStorage.setItem("testEmail", btoa("test@promogenie.co"));
    localStorage.setItem("testPassword", btoa("prmgn2025*"));
    
    // Auto-login for demo purposes (comment out in production)
    localStorage.setItem("isAuthenticated", "true");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={
                  <ProtectedRoute>
                    <DashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<DashboardHome />} />
                {/* Add more dashboard routes here as needed */}
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("dashboard-root")!).render(<DashboardApp />);

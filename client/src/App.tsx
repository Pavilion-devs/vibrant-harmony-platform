import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route } from "wouter";
import UnderConstruction from "./pages/UnderConstruction";
import DevAccess from "./components/DevAccess";
import MainApp from "./components/MainApp";

const queryClient = new QueryClient();

const App = () => {
  const [isDevMode, setIsDevMode] = useState(false);
  const [showDevAccess, setShowDevAccess] = useState(false);

  // Check if user has dev access on load
  useEffect(() => {
    const devAccess = localStorage.getItem("vara-dev-access");
    if (devAccess === "true") {
      setIsDevMode(true);
    }
  }, []);

  // Check for dev access route
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/dev-access" && !isDevMode) {
      setShowDevAccess(true);
      // Clean up the URL without reloading
      window.history.replaceState({}, "", "/");
    }
  }, [isDevMode]);

  const handleDevAuthenticated = () => {
    setIsDevMode(true);
    setShowDevAccess(false);
  };

  const handleDevLogout = () => {
    setIsDevMode(false);
    setShowDevAccess(false);
    // Redirect to home after logout
    window.location.href = "/";
  };

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
        
        {/* Show dev access page if triggered */}
        {showDevAccess && (
          <DevAccess onAuthenticated={handleDevAuthenticated} />
        )}
        
        {/* Show main app if in dev mode */}
        {isDevMode && !showDevAccess && (
          <MainApp onLogout={handleDevLogout} />
        )}
        
        {/* Show under construction for everyone else */}
        {!isDevMode && !showDevAccess && (
      <Router>
            <Route path="*" component={UnderConstruction} />
      </Router>
        )}
    </TooltipProvider>
  </QueryClientProvider>
);
};

export default App;

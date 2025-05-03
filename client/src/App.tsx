import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import EventManagement from "@/pages/EventManagement";
import About from "@/pages/About";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/manage" component={EventManagement} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [eventFilters, setEventFilters] = useState({
    competition: true,
    meeting: true,
    deadline: true,
    social: true
  });

  const toggleFilter = (type: keyof typeof eventFilters) => {
    setEventFilters(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar 
              eventFilters={eventFilters} 
              toggleFilter={toggleFilter}
            />
            <div className="flex-1 overflow-auto">
              <main className="p-4 md:p-6">
                <Router />
              </main>
            </div>
          </div>
          <Footer />
          <MobileNav />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

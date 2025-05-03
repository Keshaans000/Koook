import { Switch, Route, RouteComponentProps } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home, { HomeProps } from "@/pages/Home";
import EventManagement from "@/pages/EventManagement";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Competitions from "@/pages/Competitions";
import EventsCategory from "@/pages/EventsCategory";
import DecaHelp from "@/pages/DecaHelp";
import Meetings from "@/pages/Meetings";
import Deadlines from "@/pages/Deadlines";
import TeacherCorner from "@/pages/TeacherCorner";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

// Route wrapper components
const HomeWrapper = (props: RouteComponentProps) => {
  // Extract the eventFilters from the parent App component's state
  const { eventFilters } = useAppState();
  return <Home eventFilters={eventFilters} />;
};

// App state context
const useAppState = () => {
  // This is a simplified approach - we're using the parent component state directly
  const app = document.getElementById('root')?.__REACT_APP_STATE as { 
    eventFilters: { competition: boolean; meeting: boolean; deadline: boolean; social: boolean };
    toggleFilter: (type: "competition" | "meeting" | "deadline" | "social") => void; 
  } | undefined;
  
  return {
    eventFilters: app?.eventFilters || { competition: true, meeting: true, deadline: true, social: true },
    toggleFilter: app?.toggleFilter || (() => {})
  };
};

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeWrapper} />
      <Route path="/manage" component={EventManagement} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/competitions" component={Competitions} />
      <Route path="/events-category" component={EventsCategory} />
      <Route path="/deca-help" component={DecaHelp} />
      <Route path="/meetings" component={Meetings} />
      <Route path="/deadlines" component={Deadlines} />
      <Route path="/teacher-corner" component={TeacherCorner} />
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

  const toggleFilter = (type: "competition" | "meeting" | "deadline" | "social") => {
    setEventFilters(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };
  
  // Make state available to the entire app
  if (typeof document !== 'undefined') {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      (rootElement as any).__REACT_APP_STATE = { eventFilters, toggleFilter };
    }
  }

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

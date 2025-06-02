import { Switch, Route, RouteComponentProps, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home, { HomeProps } from "@/pages/Home";
import Homepage from "@/pages/Homepage";
import EventManagement from "@/pages/EventManagement";
import About from "@/pages/About";
import Team from "@/pages/Team";
import CurrentWinners from "@/pages/CurrentWinners";
import Competitions from "@/pages/Competitions";
import EventsCategory from "@/pages/EventsCategory";
import DecaHelp from "@/pages/DecaHelp";
import Meetings from "@/pages/Meetings";
import StudentVolunteering from "@/pages/StudentVolunteering";
import TeacherCorner from "@/pages/TeacherCorner";
import Sponsorships from "@/pages/Sponsorships";
import GrantsDonations from "@/pages/GrantsDonations";
import Judging from "@/pages/Judging";
import DecaAdvice from "@/pages/DecaAdvice";
import LockerRoom from "@/pages/LockerRoom";
import SimpleAdmin from "@/pages/SimpleAdmin";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

// Route wrapper components
const HomeWrapper = (props: any) => {
  const { eventFilters } = useAppState();
  return <Home eventFilters={eventFilters} />;
};

// App state context
const useAppState = () => {
  const app = (document.getElementById('root') as any)?.__REACT_APP_STATE as { 
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
      <Route path="/" component={Homepage} />
      <Route path="/calendar" component={HomeWrapper} />
      <Route path="/manage" component={EventManagement} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/current-winners" component={CurrentWinners} />
      <Route path="/competitions" component={Competitions} />
      <Route path="/events-category" component={EventsCategory} />
      <Route path="/deca-help" component={DecaHelp} />
      <Route path="/meetings" component={Meetings} />
      <Route path="/student-volunteering" component={StudentVolunteering} />
      <Route path="/teacher-corner" component={TeacherCorner} />
      <Route path="/sponsorships" component={Sponsorships} />
      <Route path="/grants-donations" component={GrantsDonations} />
      <Route path="/judging" component={Judging} />
      <Route path="/deca-advice" component={DecaAdvice} />
      <Route path="/locker-room" component={LockerRoom} />
      <Route path="/admin" component={SimpleAdmin} />
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
  const [location] = useLocation();

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

  // Show sidebar for all pages
  const showSidebar = true;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar only visible on medium screens and larger, and not on homepage */}
            {showSidebar && (
              <div className="hidden md:block">
                <Sidebar 
                  eventFilters={eventFilters} 
                  toggleFilter={toggleFilter}
                />
              </div>
            )}
            <div className="flex-1 overflow-auto w-full">
              <main className={showSidebar ? "p-3 md:p-6 max-w-full" : "max-w-full"}>
                <Router />
              </main>
            </div>
          </div>
          <Footer />
          {/* Mobile navigation only visible on small screens */}
          <div className="block md:hidden">
            <MobileNav 
              eventFilters={eventFilters}
              toggleFilter={toggleFilter}
            />
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

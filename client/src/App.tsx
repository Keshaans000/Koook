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
import CurrentWinners from "@/pages/CurrentWinners";
import Competitions from "@/pages/Competitions";
import EventsCategory from "@/pages/EventsCategory";
import DecaHelp from "@/pages/DecaHelp";
import Meetings from "@/pages/Meetings";
import Deadlines from "@/pages/Deadlines";
import TeacherCorner from "@/pages/TeacherCorner";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Profile from "@/pages/Profile";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

// Route wrapper components - simplified to pass filters correctly
const HomeWrapper = (props: RouteComponentProps & { eventFilters: any }) => {
  return <Home eventFilters={props.eventFilters} />;
};

function Router({ eventFilters }: { eventFilters: any }) {
  return (
    <Switch>
      <Route path="/">
        {() => <Home eventFilters={eventFilters} />}
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Route path="/manage" component={EventManagement} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/current-winners" component={CurrentWinners} />
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
        <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar only visible on medium screens and larger */}
            <div className="hidden md:block">
              <Sidebar 
                eventFilters={eventFilters} 
                toggleFilter={toggleFilter}
              />
            </div>
            <div className="flex-1 overflow-auto w-full">
              <main className="p-3 md:p-6 max-w-full">
                <Router eventFilters={eventFilters} />
              </main>
            </div>
          </div>
          <Footer />
          {/* Mobile navigation only visible on small screens */}
          <div className="block md:hidden">
            <MobileNav />
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

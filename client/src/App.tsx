import { Switch, Route, RouteComponentProps } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomeNew, { HomeProps } from "@/pages/HomeNew";
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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useState } from "react";

// Simple wrapper for HomeNew
const HomeWrapper = () => <HomeNew />;

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeWrapper} />
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
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen">
          <Header />
          <Router />
          <Footer />
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

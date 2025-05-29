import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import EventCalendar from "@/components/EventCalendar";
import DayEventsView from "@/components/DayEventsView";
import UpcomingEvents from "@/components/UpcomingEvents";
import QuickAddEvent from "@/components/QuickAddEvent";
import ResourcesCard from "@/components/ResourcesCard";
import EventReminders from "@/components/EventReminders";
import AnnouncementsBanner from "@/components/AnnouncementsBanner";
import TeachersCorner from "@/components/TeachersCorner";
import { Event } from "@shared/schema";

export interface HomeProps {
  eventFilters?: {
    competition: boolean;
    meeting: boolean;
    deadline: boolean;
    social: boolean;
  };
}

const Home = ({ eventFilters = { competition: true, meeting: true, deadline: true, social: true } }: HomeProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const { data: events = [], isLoading, error } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003366]"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-50 text-red-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Error loading events</h3>
        <p>{(error as Error).message || "Please try again later."}</p>
      </div>
    );
  }
  
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 relative">
        {/* Decorative elements */}
        <div className="absolute -left-8 -top-6 h-20 w-20 bg-[#FFD700] opacity-5 rounded-full"></div>
        <div className="absolute right-[20%] -bottom-8 h-24 w-24 bg-[#003366] opacity-5 rounded-full"></div>
        <div className="absolute left-[30%] -top-10 h-16 w-40 bg-[#E63946] opacity-5 transform rotate-45"></div>
        
        {/* Decorative trophy icons */}
        <div className="absolute -left-2 top-0 text-[#FFD700] opacity-15 transform rotate-12">
          <i className="ri-trophy-fill text-5xl"></i>
        </div>
        <div className="absolute right-10 bottom-0 text-[#003366] opacity-15 transform -rotate-12">
          <i className="ri-medal-line text-4xl"></i>
        </div>
        <div className="absolute right-[40%] top-2 text-[#2C7BE5] opacity-10">
          <i className="ri-medal-fill text-3xl"></i>
        </div>
        <div className="absolute left-[40%] -bottom-2 text-[#FFD700] opacity-10 transform rotate-45">
          <i className="ri-government-line text-3xl"></i>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">Events Calendar</h1>
            <div className="ml-2 bg-[#FFD700] bg-opacity-20 rounded-full px-2 py-0.5 text-xs text-[#003366] font-medium border border-[#FFD700] border-opacity-30">
              DECA 2025
            </div>
          </div>
          <p className="text-gray-600 mt-1">Stay updated with all Wayzata DECA events and deadlines</p>
        </div>

      </div>
      
      {/* Announcements Banner */}
      <AnnouncementsBanner />
      
      {/* Event Reminders - will only display if there are upcoming deadline events */}
      <EventReminders events={events} daysThreshold={7} />
      
      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        {/* Main content - calendar and day view */}
        <div className="lg:w-3/4 overflow-x-auto">
          {/* Calendar with horizontal scrolling on small screens */}
          <div className="min-w-full overflow-x-auto pb-2">
            <EventCalendar 
              events={events} 
              selectedDate={selectedDate} 
              setSelectedDate={setSelectedDate} 
              eventFilters={eventFilters}
            />
          </div>
          
          <DayEventsView 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate} 
            events={events}
            eventFilters={eventFilters}
          />
        </div>
        
        {/* Sidebar content */}
        <div className="lg:w-1/4">
          {/* Mobile order: QuickAddEvent first, then resources */}
          <div className="block lg:hidden mb-4">
            <QuickAddEvent defaultDate={selectedDate} />
          </div>
          
          <UpcomingEvents events={events} eventFilters={eventFilters} />
          
          {/* Desktop order: QuickAddEvent after upcoming events */}
          <div className="hidden lg:block">
            <QuickAddEvent defaultDate={selectedDate} />
          </div>
          
          <ResourcesCard />
          <TeachersCorner />
          
          {/* Add extra padding at bottom on mobile for the navigation bar */}
          <div className="h-16 md:h-0 block md:hidden"></div>
        </div>
      </div>
    </>
  );
};

export default Home;

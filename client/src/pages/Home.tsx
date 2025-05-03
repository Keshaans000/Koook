import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import EventCalendar from "@/components/EventCalendar";
import DayEventsView from "@/components/DayEventsView";
import UpcomingEvents from "@/components/UpcomingEvents";
import QuickAddEvent from "@/components/QuickAddEvent";
import ResourcesCard from "@/components/ResourcesCard";
import EventReminders from "@/components/EventReminders";
import AnnouncementsBanner from "@/components/AnnouncementsBanner";
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
        {/* Decorative trophy icons */}
        <div className="absolute -left-2 top-0 text-[#FFD700] opacity-10 transform rotate-12">
          <i className="ri-trophy-fill text-5xl"></i>
        </div>
        <div className="absolute right-10 bottom-0 text-[#003366] opacity-10 transform -rotate-12">
          <i className="ri-medal-line text-4xl"></i>
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
        <div className="flex mt-4 md:mt-0 space-x-2 relative z-10">
          <button className="text-gray-600 hover:bg-gray-200 px-3 py-2 rounded-lg flex items-center shadow-sm">
            <i className="ri-filter-3-line mr-1"></i>
            <span>Filter</span>
          </button>
          <div className="flex rounded-lg overflow-hidden border border-gray-300 shadow-sm">
            <button className="bg-white px-3 py-2 text-[#003366] text-sm font-medium">Month</button>
            <button className="bg-gray-100 px-3 py-2 text-gray-600 text-sm">Week</button>
            <button className="bg-gray-100 px-3 py-2 text-gray-600 text-sm">List</button>
          </div>
        </div>
      </div>
      
      {/* Announcements Banner */}
      <AnnouncementsBanner />
      
      {/* Event Reminders - will only display if there are upcoming deadline events */}
      <EventReminders events={events} daysThreshold={7} />
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          <EventCalendar 
            events={events} 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate} 
            eventFilters={eventFilters}
          />
          
          <DayEventsView 
            selectedDate={selectedDate} 
            setSelectedDate={setSelectedDate} 
            events={events}
            eventFilters={eventFilters}
          />
        </div>
        
        <div className="lg:w-1/4">
          <UpcomingEvents events={events} eventFilters={eventFilters} />
          <QuickAddEvent defaultDate={selectedDate} />
          <ResourcesCard />
        </div>
      </div>
    </>
  );
};

export default Home;

import { useState, useEffect } from "react";
import { Link } from "wouter";
import EventCalendar from "@/components/EventCalendar";
import DayEventsView from "@/components/DayEventsView";
import UpcomingEvents from "@/components/UpcomingEvents";
import ResourcesCard from "@/components/ResourcesCard";
import EventReminders from "@/components/EventReminders";
import AnnouncementsBanner from "@/components/AnnouncementsBanner";
import TeachersCorner from "@/components/TeachersCorner";
import { StaticEventStorage, type StaticEvent } from "@/lib/staticEventStorage";

export interface HomeProps {
  eventFilters?: {
    competition: boolean;
    meeting: boolean;
    deadline: boolean;
    social: boolean;
  };
}

// Static events data for the calendar
const staticEvents: Event[] = [
  {
    id: 1,
    title: "District Competition Preparation",
    description: "Final preparation session for the upcoming district DECA competition. Review presentation materials and practice roleplays.",
    startTime: new Date("2025-01-15T15:30:00"),
    endTime: new Date("2025-01-15T17:00:00"),
    location: "Room 204",
    type: "competition",
    organizer: "Wayzata DECA",
    imageUrl: null,
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Chapter Meeting",
    description: "Monthly chapter meeting to discuss upcoming events and competition results.",
    startTime: new Date("2025-01-10T07:00:00"),
    endTime: new Date("2025-01-10T07:45:00"),
    location: "Cafeteria",
    type: "meeting",
    organizer: "Wayzata DECA",
    imageUrl: null,
    createdAt: new Date()
  },
  {
    id: 3,
    title: "State Competition Registration Deadline",
    description: "Final deadline to register for state DECA competition. Submit all required forms and fees.",
    startTime: new Date("2025-01-20T23:59:00"),
    endTime: new Date("2025-01-20T23:59:00"),
    location: "Online",
    type: "deadline",
    organizer: "Minnesota DECA",
    imageUrl: null,
    createdAt: new Date()
  },
  {
    id: 4,
    title: "DECA Social Night",
    description: "Team building event with games, food, and DECA trivia. All members welcome!",
    startTime: new Date("2025-01-25T18:00:00"),
    endTime: new Date("2025-01-25T20:00:00"),
    location: "School Commons",
    type: "social",
    organizer: "Wayzata DECA",
    imageUrl: null,
    createdAt: new Date()
  },
  {
    id: 5,
    title: "Business Plan Workshop",
    description: "Workshop on developing effective business plans for DECA competitions.",
    startTime: new Date("2025-02-05T15:30:00"),
    endTime: new Date("2025-02-05T17:00:00"),
    location: "Room 150",
    type: "competition",
    organizer: "Wayzata DECA",
    imageUrl: null,
    createdAt: new Date()
  },
  {
    id: 6,
    title: "District Competition",
    description: "District DECA competition at Minneapolis Convention Center. Good luck to all participants!",
    startTime: new Date("2025-02-15T08:00:00"),
    endTime: new Date("2025-02-15T17:00:00"),
    location: "Minneapolis Convention Center",
    type: "competition",
    organizer: "Minnesota DECA",
    imageUrl: null,
    createdAt: new Date()
  },
  {
    id: 7,
    title: "Fundraising Meeting",
    description: "Planning session for upcoming fundraising events and sponsor outreach.",
    startTime: new Date("2025-02-01T07:00:00"),
    endTime: new Date("2025-02-01T07:45:00"),
    location: "Room 204",
    type: "meeting",
    organizer: "Wayzata DECA",
    imageUrl: null,
    createdAt: new Date()
  },
  {
    id: 8,
    title: "State Competition",
    description: "Minnesota DECA State Career Development Conference. Represent Wayzata with pride!",
    startTime: new Date("2025-03-10T08:00:00"),
    endTime: new Date("2025-03-10T17:00:00"),
    location: "Minneapolis Convention Center",
    type: "competition",
    organizer: "Minnesota DECA",
    imageUrl: null,
    createdAt: new Date()
  }
];

const Home = ({ eventFilters = { competition: true, meeting: true, deadline: true, social: true } }: HomeProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Load events from static storage
  const [events, setEvents] = useState<StaticEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get events from static storage
    const loadEvents = () => {
      const allEvents = StaticEventStorage.getAllEvents();
      setEvents(allEvents);
      setIsLoading(false);
    };
    
    loadEvents();
    
    // Refresh events when window gains focus (returning from admin page)
    const handleFocus = () => {
      loadEvents();
    };
    
    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, []);
  
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
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-800">Events Calendar</h1>
                <div className="ml-2 bg-[#FFD700] bg-opacity-20 rounded-full px-2 py-0.5 text-xs text-[#003366] font-medium border border-[#FFD700] border-opacity-30">
                  DECA 2025
                </div>
              </div>
              <p className="text-gray-600 mt-1">Stay updated with all Wayzata DECA events and deadlines</p>
            </div>
            <div className="flex gap-2">
              <Link 
                href="/teacher-corner"
                className="bg-[#003366] hover:bg-[#002244] text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Teacher Portal
              </Link>
            </div>
          </div>
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
          <UpcomingEvents events={events} eventFilters={eventFilters} />
          
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

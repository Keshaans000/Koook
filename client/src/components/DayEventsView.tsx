import { format, addDays, subDays } from "date-fns";
import { Event, EventType } from "@shared/schema";
import { Button } from "@/components/ui/button";
import EventItem from "./EventItem";

interface DayEventsViewProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  events: Event[];
  eventFilters: {
    competition: boolean;
    meeting: boolean;
    deadline: boolean;
    social: boolean;
  };
}

const DayEventsView = ({ selectedDate, setSelectedDate, events, eventFilters }: DayEventsViewProps) => {
  const prevDay = () => {
    setSelectedDate(subDays(selectedDate, 1));
  };
  
  const nextDay = () => {
    setSelectedDate(addDays(selectedDate, 1));
  };
  
  // Filter events for the selected day
  const filteredEvents = events.filter(event => {
    // Skip events that don't match active filters
    const eventType = event.type as EventType;
    if (!eventFilters[eventType as keyof typeof eventFilters]) return false;
    
    const eventDate = new Date(event.startTime);
    return (
      eventDate.getFullYear() === selectedDate.getFullYear() &&
      eventDate.getMonth() === selectedDate.getMonth() &&
      eventDate.getDate() === selectedDate.getDate()
    );
  });
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20">
        <div className="absolute top-0 right-0 w-full h-full bg-[#FFD700] opacity-5 transform rotate-45"></div>
      </div>
      <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-[#003366] opacity-5"></div>
      
      <div className="p-4 border-b border-gray-200 flex justify-between items-center relative">
        <div className="flex items-center">
          <div className="bg-[#003366] bg-opacity-10 p-1.5 rounded-md mr-3">
            <i className="ri-calendar-event-fill text-[#003366]"></i>
          </div>
          <h2 className="text-lg font-semibold text-gray-800">{format(selectedDate, 'MMMM d, yyyy')} Events</h2>
          {format(selectedDate, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd') && (
            <span className="ml-2 px-2 py-0.5 bg-[#003366] text-white text-xs rounded-full">Today</span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevDay}
            className="p-1.5 rounded-lg hover:bg-gray-100"
          >
            <i className="ri-arrow-left-s-line text-gray-700"></i>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextDay}
            className="p-1.5 rounded-lg hover:bg-gray-100"
          >
            <i className="ri-arrow-right-s-line text-gray-700"></i>
          </Button>
        </div>
      </div>
      
      <div className="p-4 relative">
        {filteredEvents.length > 0 ? (
          <div>
            {/* Subtle decorative trophy in the background when events exist */}
            <div className="absolute right-6 bottom-6 text-[#003366] opacity-5 transform rotate-12">
              <i className="ri-trophy-fill text-6xl"></i>
            </div>
            
            <div className="relative z-10">
              {filteredEvents.map((event) => (
                <EventItem key={event.id} event={event} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500 bg-gray-50 bg-opacity-50 rounded-lg">
            <div className="bg-white p-3 rounded-full inline-flex items-center justify-center mb-2 shadow-sm">
              <i className="ri-calendar-line text-4xl text-[#003366] opacity-40"></i>
            </div>
            <p className="font-medium">No events scheduled for this day</p>
            <p className="text-sm mt-1">Select another day to view events</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayEventsView;

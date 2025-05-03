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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">{format(selectedDate, 'MMMM d, yyyy')} Events</h2>
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
      
      <div className="p-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventItem key={event.id} event={event} />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <i className="ri-calendar-line text-4xl mb-2 block"></i>
            <p>No events scheduled for this day</p>
            <p className="text-sm mt-1">Select another day or add a new event</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayEventsView;

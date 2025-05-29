import { useState, useEffect } from "react";
import { Event, EventType } from "@shared/schema";
import { differenceInDays, differenceInHours, format } from "date-fns";
import { cn } from "@/lib/utils";

interface UpcomingEventsProps {
  events: Event[];
  eventFilters: {
    competition: boolean;
    meeting: boolean;
    deadline: boolean;
    social: boolean;
  };
}

const UpcomingEvents = ({ events, eventFilters }: UpcomingEventsProps) => {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  
  useEffect(() => {
    const now = new Date();
    const filtered = events
      .filter(event => {
        // Skip events that don't match active filters
        const eventType = event.type as EventType;
        if (!eventFilters[eventType as keyof typeof eventFilters]) return false;
        
        // Only show future events
        const eventDate = new Date(event.startTime);
        return eventDate > now;
      })
      .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
      .slice(0, 5);
    
    setUpcomingEvents(filtered);
  }, [events, eventFilters]);
  
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'competition': return 'ri-trophy-line';
      case 'meeting': return 'ri-team-line';
      case 'deadline': return 'ri-alarm-line';
      case 'social': return 'ri-user-star-line';
      default: return 'ri-calendar-line';
    }
  };
  
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'competition': return 'bg-[#003366] bg-opacity-10 text-[#003366]';
      case 'meeting': return 'bg-[#2C7BE5] bg-opacity-10 text-[#2C7BE5]';
      case 'deadline': return 'bg-[#E63946] bg-opacity-10 text-[#E63946]';
      case 'social': return 'bg-[#FFD700] bg-opacity-10 text-[#FFD700]';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getEventIconColor = (type: string) => {
    switch (type) {
      case 'competition': return 'text-[#003366]';
      case 'meeting': return 'text-[#2C7BE5]';
      case 'deadline': return 'text-[#E63946]';
      case 'social': return 'text-[#FFD700]';
      default: return 'text-gray-500';
    }
  };
  
  const getRelativeTime = (date: Date) => {
    const now = new Date();
    const diffDays = differenceInDays(date, now);
    
    if (diffDays === 0) {
      const diffHours = differenceInHours(date, now);
      if (diffHours < 1) return 'Less than an hour';
      return `In ${diffHours} hour${diffHours === 1 ? '' : 's'}`;
    }
    
    if (diffDays === 1) return 'Tomorrow';
    return `In ${diffDays} days`;
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Upcoming Events</h2>
      </div>
      
      <div className="divide-y divide-gray-200">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => {
            const eventDate = new Date(event.startTime);
            const relativeTime = getRelativeTime(eventDate);
            
            return (
              <div key={event.id} className="p-4 hover:bg-gray-50 transition duration-150">
                <div className="flex justify-between items-start">
                  <div>
                    <span className={cn("inline-block px-2 py-1 text-xs font-medium rounded-md", getEventTypeColor(event.type))}>
                      {format(eventDate, 'MMM dd').toUpperCase()}
                    </span>
                    <h3 className="font-medium text-gray-800 mt-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                  </div>
                  <div className="flex-shrink-0 ml-3">
                    <span className={cn("inline-flex items-center justify-center w-8 h-8 rounded-full", getEventTypeColor(event.type))}>
                      <i className={cn(getEventIcon(event.type), getEventIconColor(event.type))}></i>
                    </span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  <div className="flex items-center">
                    <i className="ri-time-line mr-1"></i>
                    <span>{relativeTime} {format(eventDate, 'at h:mm a')}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center mt-1">
                      <i className="ri-map-pin-line mr-1"></i>
                      <span>{event.location}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-8 text-center text-gray-500">
            <i className="ri-calendar-line text-3xl mb-2"></i>
            <p>No upcoming events</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;

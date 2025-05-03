import { Event } from "@shared/schema";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface EventItemProps {
  event: Event;
}

const EventItem = ({ event }: EventItemProps) => {
  const getEventBorderColor = () => {
    switch (event.type) {
      case 'competition': return 'border-[#003366]';
      case 'meeting': return 'border-[#2C7BE5]';
      case 'deadline': return 'border-[#E63946]';
      case 'social': return 'border-[#FFD700]';
      default: return 'border-gray-300';
    }
  };
  
  const getEventBadgeColor = () => {
    switch (event.type) {
      case 'competition': return 'bg-[#003366] bg-opacity-10 text-[#003366]';
      case 'meeting': return 'bg-[#2C7BE5] bg-opacity-10 text-[#2C7BE5]';
      case 'deadline': return 'bg-[#E63946] bg-opacity-10 text-[#E63946]';
      case 'social': return 'bg-[#FFD700] bg-opacity-10 text-[#FFD700]';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Capitalize first letter of event type
  const eventTypeDisplay = event.type.charAt(0).toUpperCase() + event.type.slice(1);
  
  // Format times
  const startTime = format(new Date(event.startTime), 'h:mm a');
  const endTime = format(new Date(event.endTime), 'h:mm a');
  const timeDisplay = `${startTime} - ${endTime}`;
  
  // Check if this is a deadline event
  const isDeadline = event.type === 'deadline';
  
  return (
    <div 
      className={cn(
        "border-l-4 rounded-r-lg bg-white shadow-sm p-4 mb-4 animate-fade-in",
        getEventBorderColor()
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <span className={cn(
              "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
              getEventBadgeColor()
            )}>
              {eventTypeDisplay}
            </span>
            <span className="text-gray-500 text-sm">{timeDisplay}</span>
          </div>
          <h3 className="font-semibold text-gray-800 mt-1">{event.title}</h3>
          <p className="text-gray-600 text-sm mt-1 mb-2">
            {event.description}
          </p>
          <div className="flex items-center mt-2 space-x-4">
            {event.location && (
              <div className="flex items-center text-gray-500 text-xs">
                <i className="ri-map-pin-line mr-1"></i>
                <span>{event.location}</span>
              </div>
            )}
            {event.organizer && (
              <div className="flex items-center text-gray-500 text-xs">
                <i className="ri-user-line mr-1"></i>
                <span>{event.organizer}</span>
              </div>
            )}
          </div>
          {isDeadline && (
            <div className="flex items-center mt-2">
              <span className="bg-[#E63946] text-white text-xs px-2 py-1 rounded">Due Today</span>
            </div>
          )}
        </div>
        {event.imageUrl && (
          <div className="flex-shrink-0">
            <img 
              src={event.imageUrl} 
              alt={event.title} 
              className="w-16 h-16 rounded-lg object-cover" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventItem;

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
  
  // Icon based on event type
  const getEventIcon = () => {
    switch (event.type) {
      case 'competition': return 'ri-trophy-line';
      case 'meeting': return 'ri-team-line';
      case 'deadline': return 'ri-alarm-warning-line';
      case 'social': return 'ri-group-line';
      default: return 'ri-calendar-event-line';
    }
  };
  
  // Background color for icon
  const getIconBgColor = () => {
    switch (event.type) {
      case 'competition': return 'bg-[#003366]';
      case 'meeting': return 'bg-[#2C7BE5]';
      case 'deadline': return 'bg-[#E63946]';
      case 'social': return 'bg-[#FFD700]';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div 
      className={cn(
        "border-l-4 rounded-r-lg bg-white hover:bg-gray-50 shadow-sm p-4 mb-4 transition-all duration-200 relative group",
        getEventBorderColor()
      )}
    >
      {/* Subtle decoration */}
      <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
        <div className={`absolute top-0 right-0 w-full h-full ${getIconBgColor()} transform rotate-45`}></div>
      </div>
      
      <div className="flex items-start justify-between relative z-10">
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <div className={cn(
              "flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
              getEventBadgeColor()
            )}>
              <i className={`${getEventIcon()} mr-1`}></i>
              <span>{eventTypeDisplay}</span>
            </div>
            <span className="text-gray-500 text-sm">{timeDisplay}</span>
          </div>
          
          <h3 className="font-semibold text-gray-800 mt-1 flex items-center">
            {event.title}
            {isDeadline && (
              <span className="ml-2 bg-[#E63946] text-white text-xs px-1.5 py-0.5 rounded-full flex items-center">
                <i className="ri-time-line mr-0.5 text-[10px]"></i>
                <span>Due</span>
              </span>
            )}
          </h3>
          
          <p className="text-gray-600 text-sm mt-1 mb-2 line-clamp-2">
            {event.description}
          </p>
          
          <div className="flex flex-wrap items-center mt-2 gap-4">
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
        </div>
        
        {event.imageUrl ? (
          <div className="flex-shrink-0 ml-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
          </div>
        ) : (
          <div className="flex-shrink-0 ml-4 opacity-30 hidden md:block">
            <div className={`w-10 h-10 rounded-full ${getIconBgColor()} flex items-center justify-center text-white`}>
              <i className={`${getEventIcon()} text-lg`}></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventItem;

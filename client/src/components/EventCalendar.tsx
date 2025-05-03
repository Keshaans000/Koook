import { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, getDay, addDays } from "date-fns";
import { Event, EventType } from "@shared/schema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface EventCalendarProps {
  events: Event[];
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  eventFilters: {
    competition: boolean;
    meeting: boolean;
    deadline: boolean;
    social: boolean;
  };
}

const EventCalendar = ({ events, selectedDate, setSelectedDate, eventFilters }: EventCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  
  const goToToday = () => {
    setCurrentMonth(new Date());
    setSelectedDate(new Date());
  };
  
  // Prepare days for calendar
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const startDate = monthStart;
  const endDate = monthEnd;
  
  const daysByWeek = [];
  let startingDayOfWeek = getDay(startDate);
  let currentDay = startDate;
  
  // Add previous month's days
  const prevMonthDays = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    prevMonthDays.unshift(addDays(startDate, -i - 1));
  }
  
  for (const day of prevMonthDays.reverse()) {
    if (!daysByWeek.length) daysByWeek.push([]);
    daysByWeek[0].push(day);
  }
  
  // Add current month's days
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  for (const day of days) {
    if (!daysByWeek.length || daysByWeek[daysByWeek.length - 1].length === 7) {
      daysByWeek.push([]);
    }
    daysByWeek[daysByWeek.length - 1].push(day);
  }
  
  // Add next month's days to fill the last week
  const lastWeek = daysByWeek[daysByWeek.length - 1];
  if (lastWeek.length < 7) {
    let nextMonthDay = 1;
    while (lastWeek.length < 7) {
      lastWeek.push(addDays(monthEnd, nextMonthDay));
      nextMonthDay++;
    }
  }
  
  // Add one more week if needed to make 6 rows
  if (daysByWeek.length < 6) {
    const lastDay = daysByWeek[daysByWeek.length - 1][6];
    const nextWeek = [];
    for (let i = 1; i <= 7; i++) {
      nextWeek.push(addDays(lastDay, i));
    }
    daysByWeek.push(nextWeek);
  }
  
  // Filter events for the current day
  const getEventsForDay = (day: Date) => {
    return events.filter(event => {
      // Skip events that don't match active filters
      const eventType = event.type as EventType;
      if (!eventFilters[eventType as keyof typeof eventFilters]) return false;
      
      const eventDate = new Date(event.startTime);
      return isSameDay(eventDate, day);
    });
  };
  
  // Get event color class based on event type
  const getEventColorClass = (type: string) => {
    switch (type) {
      case 'competition': return 'bg-[#003366]'; // DECA Blue
      case 'meeting': return 'bg-[#2C7BE5]'; // DECA Light Blue
      case 'deadline': return 'bg-[#E63946]'; // DECA Red
      case 'social': return 'bg-[#FFD700]'; // DECA Gold
      default: return 'bg-gray-400';
    }
  };
  
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={prevMonth}
            className="p-1.5 rounded-lg hover:bg-gray-100"
          >
            <i className="ri-arrow-left-s-line text-gray-700 text-xl"></i>
          </Button>
          <h2 className="text-lg font-semibold text-gray-800">
            {format(currentMonth, 'MMMM yyyy')}
          </h2>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={nextMonth}
            className="p-1.5 rounded-lg hover:bg-gray-100"
          >
            <i className="ri-arrow-right-s-line text-gray-700 text-xl"></i>
          </Button>
        </div>
        <Button 
          variant="link" 
          onClick={goToToday}
          className="text-sm text-[#003366] font-medium hover:underline"
        >
          Today
        </Button>
      </div>
      
      <div className="calendar-grid grid border-b border-gray-200">
        {/* Calendar header */}
        {weekdays.map((day, index) => (
          <div key={index} className="text-gray-600 font-medium text-center py-3 text-sm">
            {day}
          </div>
        ))}
        
        {/* Calendar grid */}
        {daysByWeek.map((week, weekIndex) => (
          week.map((day, dayIndex) => {
            const dayEvents = getEventsForDay(day);
            const isCurrentMonth = isSameMonth(day, currentMonth);
            const isSelected = isSameDay(day, selectedDate);
            const isToday = isSameDay(day, new Date());
            
            return (
              <div 
                key={`${weekIndex}-${dayIndex}`}
                onClick={() => setSelectedDate(day)}
                className={cn(
                  "calendar-day border-t border-r last:border-r-0 border-gray-200 p-1 cursor-pointer",
                  !isCurrentMonth && "bg-gray-100 text-gray-400",
                  isSelected && "bg-[#003366] bg-opacity-5",
                  isToday && !isSelected && "font-medium"
                )}
              >
                <div className={cn(
                  "p-1 text-right",
                  isSelected && "font-medium text-[#003366]",
                  isToday && !isSelected && "font-semibold"
                )}>
                  {format(day, 'd')}
                </div>
                {dayEvents.length > 0 && (
                  <div className="flex justify-center mt-1">
                    {dayEvents.slice(0, 3).map((event, index) => (
                      <div 
                        key={index} 
                        className={cn("event-dot", getEventColorClass(event.type))}
                      />
                    ))}
                    {dayEvents.length > 3 && (
                      <div className="text-xs text-gray-500 ml-1">+{dayEvents.length - 3}</div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ))}
      </div>
      
      <div className="p-4 flex justify-end">
        <div className="flex items-center space-x-4 text-sm flex-wrap">
          <div className="flex items-center mr-4 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#003366] mr-2"></div>
            <span className="text-gray-600">Competition</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#2C7BE5] mr-2"></div>
            <span className="text-gray-600">Meeting</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#E63946] mr-2"></div>
            <span className="text-gray-600">Deadline</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-[#FFD700] mr-2"></div>
            <span className="text-gray-600">Social</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;

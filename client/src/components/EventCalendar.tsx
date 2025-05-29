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
  const [viewMode, setViewMode] = useState<'month' | 'list'>('month');
  
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
  
  const daysByWeek: Date[][] = [];
  let startingDayOfWeek = getDay(startDate);
  
  // Add previous month's days
  const prevMonthDays: Date[] = [];
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
    const nextWeek: Date[] = [];
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
  const shortWeekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-2 sm:p-4 border-b border-gray-200">
        {/* Top row with navigation */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 sm:space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={prevMonth}
              className="p-1 sm:p-1.5 rounded-lg hover:bg-gray-100 h-8 w-8"
            >
              <i className="ri-arrow-left-s-line text-gray-700 text-lg sm:text-xl"></i>
            </Button>
            <h2 className="text-sm sm:text-lg font-semibold text-gray-800">
              {format(currentMonth, 'MMM yyyy')}
              <span className="hidden sm:inline"> {format(currentMonth, 'MMMM').slice(3)}</span>
            </h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={nextMonth}
              className="p-1 sm:p-1.5 rounded-lg hover:bg-gray-100 h-8 w-8"
            >
              <i className="ri-arrow-right-s-line text-gray-700 text-lg sm:text-xl"></i>
            </Button>
          </div>
          <Button 
            variant="link" 
            onClick={goToToday}
            className="text-xs sm:text-sm text-[#003366] font-medium hover:underline p-0 sm:p-2 h-auto"
          >
            Today
          </Button>
        </div>
        
        {/* View mode buttons */}
        <div className="flex items-center justify-center gap-1">
          <Button
            onClick={() => setViewMode('month')}
            variant={viewMode === 'month' ? 'default' : 'outline'}
            size="sm"
            className={cn(
              "text-xs px-3 py-1.5",
              viewMode === 'month' ? 'bg-[#003366] text-white hover:bg-[#003366]' : 'text-gray-600 border-gray-300 hover:bg-gray-50'
            )}
          >
            Month
          </Button>
          <Button
            onClick={() => setViewMode('list')}
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            className={cn(
              "text-xs px-3 py-1.5",
              viewMode === 'list' ? 'bg-[#003366] text-white hover:bg-[#003366]' : 'text-gray-600 border-gray-300 hover:bg-gray-50'
            )}
          >
            List
          </Button>
        </div>
      </div>
      
      {/* Conditional rendering based on view mode */}
      {viewMode === 'month' && (
        <>
          <div className="grid grid-cols-7 border-b border-gray-200">
            {/* Calendar header - full day names on desktop, abbreviated on mobile */}
            {weekdays.map((day, index) => (
              <div key={index} className="text-gray-600 font-medium text-center py-2 sm:py-3 text-xs sm:text-sm border-r border-gray-200 last:border-r-0">
                <span className="hidden sm:inline">{day}</span>
                <span className="inline sm:hidden">{shortWeekdays[index]}</span>
              </div>
            ))}
          </div>
          
          {/* Calendar grid */}
          <div className="grid grid-cols-7">
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
                      "border-t border-r last:border-r-0 border-gray-200 p-0.5 sm:p-1 cursor-pointer min-h-[40px] sm:min-h-[60px]",
                      !isCurrentMonth && "bg-gray-100 text-gray-400",
                      isSelected && "bg-[#003366] bg-opacity-5",
                      isToday && !isSelected && "font-medium"
                    )}
                  >
                    <div className={cn(
                      "p-0.5 sm:p-1 text-right",
                      isSelected && "font-medium text-[#003366]",
                      isToday && !isSelected && "font-semibold"
                    )}>
                      {format(day, 'd')}
                    </div>
                    {dayEvents.length > 0 && (
                      <div className="flex justify-center mt-0 sm:mt-1">
                        {/* Show event dots on both mobile and desktop */}
                        <div className="flex flex-wrap justify-center gap-[2px]">
                          {dayEvents.slice(0, 3).map((event, index) => (
                            <div 
                              key={index} 
                              className={cn(
                                "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full", 
                                getEventColorClass(event.type)
                              )}
                            />
                          ))}
                        </div>
                        {dayEvents.length > 3 && (
                          <div className="text-[10px] sm:text-xs text-gray-500 ml-1">+{dayEvents.length - 3}</div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            ))}
          </div>
        </>
      )}



      {viewMode === 'list' && (
        <div className="p-4">
          <div className="space-y-2">
            {events
              .filter(event => {
                const eventType = event.type as EventType;
                return eventFilters[eventType as keyof typeof eventFilters];
              })
              .slice(0, 10)
              .map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className={cn("w-3 h-3 rounded-full mr-3", getEventColorClass(event.type))}></div>
                    <div>
                      <p className="font-medium text-gray-800">{event.title}</p>
                      <p className="text-sm text-gray-600">{format(new Date(event.startTime), 'MMM d, yyyy')}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      
      {/* Legend - rearranged for mobile */}
      <div className="p-2 sm:p-4">
        <div className="flex flex-wrap justify-center sm:justify-end gap-x-3 sm:gap-x-4 gap-y-1 text-xs sm:text-sm">
          <div className="flex items-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#003366] mr-1.5"></div>
            <span className="text-gray-600">Competition</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#2C7BE5] mr-1.5"></div>
            <span className="text-gray-600">Meeting</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#E63946] mr-1.5"></div>
            <span className="text-gray-600">Deadline</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFD700] mr-1.5"></div>
            <span className="text-gray-600">Social</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
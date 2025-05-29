import { useState, useEffect } from "react";
import { Event, EventType } from "@shared/schema";
import { differenceInDays, isBefore, isToday, isPast, format } from "date-fns";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface EventRemindersProps {
  events: Event[];
  daysThreshold?: number;
}

const EventReminders = ({ events, daysThreshold = 7 }: EventRemindersProps) => {
  const { toast } = useToast();
  const [upcomingDeadlines, setUpcomingDeadlines] = useState<Event[]>([]);
  const [dismissedEvents, setDismissedEvents] = useState<number[]>([]);
  
  useEffect(() => {
    // Initialize dismissed events from localStorage
    const savedDismissed = localStorage.getItem('dismissedEvents');
    if (savedDismissed) {
      setDismissedEvents(JSON.parse(savedDismissed));
    }
  }, []);

  useEffect(() => {
    const now = new Date();
    
    // Get upcoming deadline events within threshold
    const deadlines = events
      .filter(event => {
        // Only include deadlines that are in the future or today
        const eventDate = new Date(event.startTime);
        const isDeadline = event.type === 'deadline';
        const isUpcoming = differenceInDays(eventDate, now) <= daysThreshold;
        const isNotPast = !isPast(eventDate) || isToday(eventDate);
        const isNotDismissed = !dismissedEvents.includes(event.id);
        
        return isDeadline && isUpcoming && isNotPast && isNotDismissed;
      })
      .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
    
    setUpcomingDeadlines(deadlines);
  }, [events, daysThreshold, dismissedEvents]);
  
  const getUrgencyLabel = (eventDate: Date) => {
    const now = new Date();
    const daysLeft = differenceInDays(eventDate, now);
    
    if (isToday(eventDate)) return 'today';
    if (daysLeft === 1) return 'tomorrow';
    if (daysLeft <= 3) return 'soon';
    return 'upcoming';
  };
  
  const getUrgencyClass = (urgency: string) => {
    switch (urgency) {
      case 'today': return 'bg-red-100 text-red-800 border-red-300';
      case 'tomorrow': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'soon': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };
  
  const dismissEvent = (eventId: number) => {
    const newDismissed = [...dismissedEvents, eventId];
    setDismissedEvents(newDismissed);
    localStorage.setItem('dismissedEvents', JSON.stringify(newDismissed));
    
    toast({
      title: "Reminder dismissed",
      description: "This reminder won't show up again.",
    });
  };
  
  // If no deadlines, don't render the component
  if (upcomingDeadlines.length === 0) {
    return null;
  }
  
  return (
    <Card className="mb-6 border-l-4 border-l-[#E63946]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center">
          <i className="ri-alarm-warning-line mr-2 text-[#E63946]"></i>
          Upcoming Deadlines
        </CardTitle>
        <CardDescription>
          Don't forget these important deadlines
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingDeadlines.map((event) => {
            const eventDate = new Date(event.startTime);
            const urgency = getUrgencyLabel(eventDate);
            
            return (
              <div key={event.id} className="flex items-start justify-between bg-gray-50 p-3 rounded-lg">
                <div>
                  <div className="flex items-center">
                    <Badge className={getUrgencyClass(urgency)}>
                      {urgency === 'today' ? 'Due Today' : 
                       urgency === 'tomorrow' ? 'Due Tomorrow' : 
                       `Due in ${differenceInDays(eventDate, new Date())} days`}
                    </Badge>
                    <span className="text-sm text-gray-500 ml-2">
                      {format(eventDate, 'MMM dd')}
                    </span>
                  </div>
                  <h4 className="font-medium mt-1">{event.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => dismissEvent(event.id)}
                >
                  <i className="ri-close-line"></i>
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventReminders;
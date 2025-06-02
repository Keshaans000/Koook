// Static event storage using localStorage - works without any backend
export interface StaticEvent {
  id: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  type: string;
  organizer: string;
  location: string | null;
  createdAt: Date;
  imageUrl: string | null;
  createdBy: string | null;
}

const STORAGE_KEY = 'wayzata-deca-events';

// Initialize with default events
const getDefaultEvents = (): StaticEvent[] => [
  {
    id: 1,
    title: "District Competition Preparation",
    description: "Join the final preparation session for the upcoming district competition. Bring your presentation materials.",
    startTime: new Date("2025-06-02T09:00:00.000Z"),
    endTime: new Date("2025-06-02T15:00:00.000Z"),
    type: "competition",
    organizer: "Ms. Johnson",
    location: "Room 156",
    createdAt: new Date(),
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    createdBy: null
  },
  {
    id: 2,
    title: "Be The One",
    description: "DECA's annual motivational kickoff - Elevate your DECA experience and prepare to be the difference-maker in this year's competitions.",
    startTime: new Date("2025-06-05T14:00:00.000Z"),
    endTime: new Date("2025-06-05T16:00:00.000Z"),
    type: "meeting",
    organizer: "DECA Executive Team",
    location: "School Auditorium",
    createdAt: new Date(),
    imageUrl: "https://glass-award.com/cdn/shop/products/bz-1_1024x1024.jpg?v=1571710249",
    createdBy: null
  },
  {
    id: 3,
    title: "State Competition Registration Deadline",
    description: "Last day to submit registration forms and payment for state DECA competition. Don't miss this important deadline!",
    startTime: new Date("2025-06-10T17:00:00.000Z"),
    endTime: new Date("2025-06-10T17:00:00.000Z"),
    type: "deadline",
    organizer: "DECA Advisors",
    location: null,
    createdAt: new Date(),
    imageUrl: null,
    createdBy: null
  },
  {
    id: 4,
    title: "Monthly DECA Meeting",
    description: "Regular monthly meeting to discuss upcoming events and competition preparation.",
    startTime: new Date("2025-06-15T15:30:00.000Z"),
    endTime: new Date("2025-06-15T16:30:00.000Z"),
    type: "meeting",
    organizer: "DECA Officers",
    location: "Room 200",
    createdAt: new Date(),
    imageUrl: null,
    createdBy: null
  },
  {
    id: 5,
    title: "Business Presentation Workshop",
    description: "Learn effective presentation techniques for DECA competitions. Guest speaker from local business community.",
    startTime: new Date("2025-06-18T14:00:00.000Z"),
    endTime: new Date("2025-06-18T16:00:00.000Z"),
    type: "meeting",
    organizer: "Ms. Anderson",
    location: "Business Lab",
    createdAt: new Date(),
    imageUrl: null,
    createdBy: null
  },
  {
    id: 6,
    title: "Regional Competition",
    description: "Regional DECA competition - all qualified members participate. Transportation provided.",
    startTime: new Date("2025-06-25T08:00:00.000Z"),
    endTime: new Date("2025-06-25T17:00:00.000Z"),
    type: "competition",
    organizer: "DECA Chapter",
    location: "Convention Center",
    createdAt: new Date(),
    imageUrl: null,
    createdBy: null
  },
  {
    id: 7,
    title: "End of Year Celebration",
    description: "Celebrate a successful DECA year with awards ceremony and social activities.",
    startTime: new Date("2025-06-30T18:00:00.000Z"),
    endTime: new Date("2025-06-30T20:00:00.000Z"),
    type: "social",
    organizer: "DECA Executive Board",
    location: "School Cafeteria",
    createdAt: new Date(),
    imageUrl: null,
    createdBy: null
  }
];

export class StaticEventStorage {
  // Get all events
  static getAllEvents(): StaticEvent[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Convert string dates back to Date objects
      return parsed.map((event: any) => ({
        ...event,
        startTime: new Date(event.startTime),
        endTime: new Date(event.endTime),
        createdAt: new Date(event.createdAt)
      }));
    } else {
      // Initialize with defaults
      const defaults = getDefaultEvents();
      this.saveEvents(defaults);
      return defaults;
    }
  }

  // Save events to localStorage
  static saveEvents(events: StaticEvent[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }

  // Add a new event
  static addEvent(eventData: Omit<StaticEvent, 'id' | 'createdAt'>): StaticEvent {
    const events = this.getAllEvents();
    const newId = Math.max(...events.map(e => e.id), 0) + 1;
    
    const newEvent: StaticEvent = {
      ...eventData,
      id: newId,
      createdAt: new Date()
    };
    
    events.push(newEvent);
    this.saveEvents(events);
    return newEvent;
  }

  // Delete an event
  static deleteEvent(id: number): boolean {
    const events = this.getAllEvents();
    const filteredEvents = events.filter(event => event.id !== id);
    
    if (filteredEvents.length < events.length) {
      this.saveEvents(filteredEvents);
      return true;
    }
    return false;
  }

  // Get events by date range
  static getEventsByDateRange(startDate: Date, endDate: Date): StaticEvent[] {
    const events = this.getAllEvents();
    return events.filter(event => 
      event.startTime >= startDate && event.startTime <= endDate
    );
  }
}
import { events, type Event, type InsertEvent, users, type User, type InsertUser } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  getEventsByDateRange(startDate: Date, endDate: Date): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: number, event: Partial<InsertEvent>): Promise<Event | undefined>;
  deleteEvent(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private events: Map<number, Event>;
  private userCurrentId: number;
  private eventCurrentId: number;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.userCurrentId = 1;
    this.eventCurrentId = 1;
    
    // Initialize with some demo events
    const now = new Date();
    const oneMonthLater = new Date(now);
    oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
    
    // Initialize storage with sample events
    this.initializeSampleEvents();
  }

  private initializeSampleEvents() {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Create some sample events
    const sampleEvents: InsertEvent[] = [
      {
        title: "District Competition Preparation",
        description: "Join the final preparation session for the upcoming district competition. Bring your presentation materials.",
        location: "Room 156",
        organizer: "Ms. Johnson",
        startTime: new Date(todayStart.getTime() + 9 * 60 * 60 * 1000), // 9 AM today
        endTime: new Date(todayStart.getTime() + 15 * 60 * 60 * 1000), // 3 PM today
        type: "competition",
        imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
      },
      {
        title: "Be The One",
        description: "DECA's annual motivational kickoff - Elevate your DECA experience and prepare to be the difference-maker in this year's competitions.",
        location: "School Auditorium",
        organizer: "DECA Executive Team",
        startTime: new Date(todayStart.getTime() + 3 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000), // 2:00 PM in 3 days
        endTime: new Date(todayStart.getTime() + 3 * 24 * 60 * 60 * 1000 + 16 * 60 * 60 * 1000), // 4:00 PM in 3 days
        type: "meeting",
        imageUrl: "https://www.deca.org/wp-content/uploads/2018/07/icdc_trophy-768x1024.jpg"
      },
      {
        title: "ICDC Written Entry Deadline",
        description: "Final deadline for ICDC written entry submissions. All papers must be submitted via the DECA portal.",
        location: "Online",
        organizer: "DECA International",
        startTime: new Date(2025, 2, 1, 23, 59, 59), // March 1, 2025 at 11:59 PM
        endTime: new Date(2025, 2, 1, 23, 59, 59), 
        type: "deadline",
        imageUrl: ""
      },
      {
        title: "State Career Development Conference",
        description: "State competition for all competitive events. Winners advance to ICDC.",
        location: "State Convention Center",
        organizer: "State DECA",
        startTime: new Date(2025, 1, 15, 8, 0, 0), // February 15, 2025 at 8:00 AM
        endTime: new Date(2025, 1, 17, 17, 0, 0), // February 17, 2025 at 5:00 PM
        type: "competition",
        imageUrl: ""
      },
      {
        title: "Chapter Meeting - Competition Prep",
        description: "Monthly chapter meeting with workshop on competition preparation strategies",
        location: "Room 204",
        organizer: "Chapter President",
        startTime: new Date(todayStart.getTime() + 7 * 24 * 60 * 60 * 1000 + 15.5 * 60 * 60 * 1000), // 3:30 PM in 7 days
        endTime: new Date(todayStart.getTime() + 7 * 24 * 60 * 60 * 1000 + 17 * 60 * 60 * 1000), // 5:00 PM in 7 days
        type: "meeting",
        imageUrl: ""
      },
      {
        title: "DECA Business Networking Night",
        description: "Connect with business professionals and DECA alumni. Professional attire required.",
        location: "Community Business Center",
        organizer: "DECA Alumni Association",
        startTime: new Date(todayStart.getTime() + 21 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000), // 6:00 PM in 21 days
        endTime: new Date(todayStart.getTime() + 21 * 24 * 60 * 60 * 1000 + 20 * 60 * 60 * 1000), // 8:00 PM in 21 days
        type: "social",
        imageUrl: ""
      },
      {
        title: "ICDC Competition",
        description: "DECA International Career Development Conference - Global competition and leadership conference",
        location: "Orlando, Florida",
        organizer: "DECA Inc.",
        startTime: new Date(2025, 3, 26, 8, 0, 0), // April 26, 2025 at 8:00 AM
        endTime: new Date(2025, 3, 30, 17, 0, 0), // April 30, 2025 at 5:00 PM 
        type: "competition",
        imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80"
      }
    ];
    
    for (const event of sampleEvents) {
      this.createEvent(event);
    }
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(id: number): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async getEventsByDateRange(startDate: Date, endDate: Date): Promise<Event[]> {
    return Array.from(this.events.values()).filter(event => {
      return event.startTime >= startDate && event.startTime <= endDate;
    });
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = this.eventCurrentId++;
    const createdAt = new Date();
    // Ensure all fields are properly set to avoid type issues
    const event: Event = { 
      ...insertEvent, 
      id, 
      createdAt,
      description: insertEvent.description || null,
      location: insertEvent.location || null,
      organizer: insertEvent.organizer || null,
      imageUrl: insertEvent.imageUrl || null
    };
    this.events.set(id, event);
    return event;
  }

  async updateEvent(id: number, eventUpdate: Partial<InsertEvent>): Promise<Event | undefined> {
    const event = this.events.get(id);
    if (!event) return undefined;
    
    const updatedEvent: Event = { ...event, ...eventUpdate };
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }

  async deleteEvent(id: number): Promise<boolean> {
    return this.events.delete(id);
  }
}

export const storage = new MemStorage();

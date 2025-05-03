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
        title: "Project Submission Due",
        description: "Final deadline for submitting your business project documentation through the DECA portal.",
        location: "Online",
        organizer: "DECA Advisor",
        startTime: new Date(todayStart.getTime() + 23 * 60 * 60 * 59 * 60 * 1000), // 11:59 PM today
        endTime: new Date(todayStart.getTime() + 23 * 60 * 60 * 59 * 60 * 1000), // 11:59 PM today
        type: "deadline",
        imageUrl: ""
      },
      {
        title: "State Competition Registration",
        description: "Registration deadline for the state competition",
        location: "Online Portal",
        organizer: "DECA Advisor",
        startTime: new Date(todayStart.getTime() + 13 * 24 * 60 * 60 * 1000), // 13 days from now
        endTime: new Date(todayStart.getTime() + 13 * 24 * 60 * 60 * 1000), // 13 days from now
        type: "competition",
        imageUrl: ""
      },
      {
        title: "Chapter Meeting",
        description: "Monthly chapter meeting with guest speaker",
        location: "Room 204",
        organizer: "Chapter President",
        startTime: new Date(todayStart.getTime() + 7 * 24 * 60 * 60 * 1000 + 15.5 * 60 * 60 * 1000), // 3:30 PM in 7 days
        endTime: new Date(todayStart.getTime() + 7 * 24 * 60 * 60 * 1000 + 17 * 60 * 60 * 1000), // 5:00 PM in 7 days
        type: "meeting",
        imageUrl: ""
      },
      {
        title: "Holiday Networking Event",
        description: "Connect with business professionals and alumni",
        location: "Community Center",
        organizer: "DECA Club",
        startTime: new Date(todayStart.getTime() + 21 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000), // 6:00 PM in 21 days
        endTime: new Date(todayStart.getTime() + 21 * 24 * 60 * 60 * 1000 + 20 * 60 * 60 * 1000), // 8:00 PM in 21 days
        type: "social",
        imageUrl: ""
      },
      {
        title: "Regional Leadership Conference",
        description: "Annual leadership conference for all DECA members",
        location: "Downtown Convention Center",
        organizer: "Regional DECA Board",
        startTime: new Date(todayStart.getTime() + 30 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000), // 8:00 AM in 30 days
        endTime: new Date(todayStart.getTime() + 31 * 24 * 60 * 60 * 1000 + 17 * 60 * 60 * 1000), // 5:00 PM next day
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
    const event: Event = { ...insertEvent, id, createdAt };
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

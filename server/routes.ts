import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./emailService";
import archiver from "archiver";
import fs from "fs";
import path from "path";
import { z } from "zod";
import { insertEventSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for event management
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid event ID" });
      }
      
      const event = await storage.getEvent(id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });

  app.get("/api/events/range/:start/:end", async (req, res) => {
    try {
      const startDate = new Date(req.params.start);
      const endDate = new Date(req.params.end);
      
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return res.status(400).json({ message: "Invalid date format" });
      }
      
      const events = await storage.getEventsByDateRange(startDate, endDate);
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events by date range" });
    }
  });

  app.post("/api/events", async (req, res) => {
    try {
      const validatedData = insertEventSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid event data", 
          errors: validatedData.error.format() 
        });
      }
      
      const event = await storage.createEvent(validatedData.data);
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ message: "Failed to create event" });
    }
  });

  app.put("/api/events/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid event ID" });
      }
      
      // Validate the update data allowing partial updates
      const updateSchema = insertEventSchema.partial();
      const validatedData = updateSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: "Invalid event data", 
          errors: validatedData.error.format() 
        });
      }
      
      const updatedEvent = await storage.updateEvent(id, validatedData.data);
      if (!updatedEvent) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.json(updatedEvent);
    } catch (error) {
      res.status(500).json({ message: "Failed to update event" });
    }
  });

  app.delete("/api/events/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid event ID" });
      }
      
      const success = await storage.deleteEvent(id);
      if (!success) {
        return res.status(404).json({ message: "Event not found" });
      }
      
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete event" });
    }
  });

  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      const contactSchema = z.object({
        organizationName: z.string().min(1),
        industryType: z.string().min(1),
        businessWebsite: z.string().optional(),
        socialMediaHandles: z.string().optional(),
        fullName: z.string().min(1),
        title: z.string().optional(),
        email: z.string().email(),
        phone: z.string().optional(),
        interest: z.string().min(1),
        sponsorshipBenefits: z.array(z.string()),
        budgetTier: z.string().min(1),
        formType: z.enum(['sponsorship', 'grants'])
      });

      const validatedData = contactSchema.parse(req.body);
      const emailSent = await sendContactEmail(validatedData);

      if (emailSent) {
        res.json({ success: true, message: "Your inquiry has been sent successfully!" });
      } else {
        res.status(500).json({ success: false, message: "Failed to send email. Please try again." });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ success: false, message: "Invalid form data." });
    }
  });

  // Private download endpoint for development use
  app.get("/api/private-download-website", async (req, res) => {
    try {
      const archive = archiver('zip', {
        zlib: { level: 9 }
      });

      res.attachment('wayzata-deca-website.zip');
      archive.pipe(res);

      // Add all source files
      archive.directory('client/', 'client/');
      archive.directory('server/', 'server/');
      archive.directory('shared/', 'shared/');
      
      if (fs.existsSync('attached_assets/')) {
        archive.directory('attached_assets/', 'attached_assets/');
      }
      
      // Add config files
      const files = ['package.json', 'package-lock.json', 'tsconfig.json', 'vite.config.ts', 'tailwind.config.ts', 'postcss.config.js', 'drizzle.config.ts', 'components.json', '.replit'];
      for (const file of files) {
        if (fs.existsSync(file)) {
          archive.file(file, { name: file });
        }
      }
      
      const readme = `# Wayzata DECA Website Files

Complete website export generated on ${new Date().toISOString()}

Setup: npm install && npm run dev
`;
      archive.append(readme, { name: 'README.md' });
      archive.finalize();
      
    } catch (error) {
      console.error("Download error:", error);
      res.status(500).json({ error: "Download failed" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

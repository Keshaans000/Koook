import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./emailService";
import { validateTeacherCredentials } from "./adminAuth";
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

  // Complete website download endpoint
  app.get("/download-complete-website", async (req, res) => {
    try {
      const archive = archiver('zip', {
        zlib: { level: 9 }
      });

      res.attachment('wayzata-deca-complete-updated.zip');
      archive.pipe(res);

      // Add all source files
      archive.directory('client/', 'client/');
      archive.directory('server/', 'server/');
      archive.directory('shared/', 'shared/');
      
      if (fs.existsSync('attached_assets/')) {
        archive.directory('attached_assets/', 'attached_assets/');
      }
      
      // Add built static files if they exist
      if (fs.existsSync('dist/')) {
        archive.directory('dist/', 'dist/');
      }
      
      // Add any other assets
      if (fs.existsSync('assets/')) {
        archive.directory('assets/', 'assets/');
      }
      
      // Add config files
      const files = [
        'package.json', 
        'package-lock.json', 
        'tsconfig.json', 
        'vite.config.ts', 
        'tailwind.config.ts', 
        'postcss.config.js', 
        'drizzle.config.ts', 
        'components.json'
      ];
      
      for (const file of files) {
        if (fs.existsSync(file)) {
          archive.file(file, { name: file });
        }
      }
      
      // Add setup instructions
      const readme = `# Wayzata DECA Website - Complete Source Code

## Setup Instructions
1. Extract this ZIP file
2. Open the folder in Visual Studio Code
3. Install dependencies: npm install
4. Start development: npm run dev
5. Open browser to http://localhost:5000

## Environment Setup
Create a .env file with:
WEB3FORMS_ACCESS_KEY=fd1929ef-7f8d-4551-ae99-45aa464c1c33

## Contact Forms
Forms send emails to: wayzata.deca@gmail.com

## Social Media Links
- Instagram: https://www.instagram.com/wayzatadeca/
- Facebook: https://www.facebook.com/wayzata.deca.16/

## Deployment Options

### Option 1: Vercel (Recommended)
1. Create account at vercel.com
2. Connect your GitHub repository
3. Add environment variable: WEB3FORMS_ACCESS_KEY=fd1929ef-7f8d-4551-ae99-45aa464c1c33
4. Deploy automatically

### Option 2: Netlify
1. Create account at netlify.com
2. Drag and drop the built files
3. Add environment variable in site settings
4. Deploy

### Option 3: Traditional Web Host
1. Run npm run build
2. Upload the dist folder contents to your web host
3. Ensure environment variables are configured

## Technical Support
Ansh Kesharwani: Keshaans000@isd284.com | 651-382-5377

Generated: ${new Date().toISOString()}
Website: wayzatadeca.org
`;
      
      archive.append(readme, { name: 'README.md' });
      
      // Add .env template
      const envTemplate = `# Environment Variables for Wayzata DECA Website
WEB3FORMS_ACCESS_KEY=fd1929ef-7f8d-4551-ae99-45aa464c1c33
CONTACT_EMAIL=wayzata.deca@gmail.com
`;
      archive.append(envTemplate, { name: '.env.example' });
      
      archive.finalize();
      
    } catch (error) {
      console.error("Download error:", error);
      res.status(500).json({ error: "Download failed" });
    }
  });

  // Admin authentication routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!password) {
        return res.status(400).json({ message: "Password required" });
      }

      const isValid = validateTeacherCredentials(username || "teacher", password);
      
      if (isValid) {
        res.json({ success: true, message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ message: "Login failed" });
    }
  });

  // Admin event creation
  app.post("/api/admin/events", async (req, res) => {
    try {
      const validation = insertEventSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ message: "Invalid event data" });
      }

      const event = await storage.createEvent({
        ...validation.data,
        createdBy: null,
      });
      
      res.status(201).json(event);
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ message: "Failed to create event" });
    }
  });

  // Admin event deletion
  app.delete("/api/admin/events/:id", async (req, res) => {
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
      console.error("Error deleting event:", error);
      res.status(500).json({ message: "Failed to delete event" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

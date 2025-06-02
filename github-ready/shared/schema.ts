import { pgTable, text, serial, timestamp, varchar, boolean, jsonb, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table for teacher authentication
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Teacher accounts
export const teachers = pgTable("teachers", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const eventTypes = ["competition", "meeting", "deadline", "social"] as const;

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  description: text("description"),
  location: varchar("location", { length: 100 }),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  type: varchar("type", { length: 20 }).notNull(),
  organizer: varchar("organizer", { length: 100 }),
  imageUrl: text("image_url"),
  createdBy: varchar("created_by").references(() => teachers.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertEventSchema = createInsertSchema(events)
  .omit({ id: true, createdAt: true })
  .extend({
    type: z.enum(eventTypes),
    startTime: z.coerce.date(),
    endTime: z.coerce.date(),
  });

export type EventType = typeof eventTypes[number];
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;
export type Teacher = typeof teachers.$inferSelect;
export type UpsertTeacher = typeof teachers.$inferInsert;

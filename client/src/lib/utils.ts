import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  if (typeof date === "string") {
    date = new Date(date);
  }
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatTime(date: Date | string): string {
  if (typeof date === "string") {
    date = new Date(date);
  }
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function getEventColor(type: string): string {
  switch (type) {
    case 'competition': return '#003366'; // DECA Blue
    case 'meeting': return '#2C7BE5'; // DECA Light Blue
    case 'deadline': return '#E63946'; // DECA Red
    case 'social': return '#FFD700'; // DECA Gold
    default: return '#6c757d'; // Default gray
  }
}

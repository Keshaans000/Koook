import { Event } from "@shared/schema";

export interface CalendarDay {
  date: Date;
  events: Event[];
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
}

export interface CalendarMonth {
  days: CalendarDay[][];
  month: Date;
}

export interface EventFilters {
  competition: boolean;
  meeting: boolean;
  deadline: boolean;
  social: boolean;
}

import { useState } from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertEventSchema, eventTypes } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { queryClient } from "@/lib/queryClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface QuickAddEventProps {
  onSuccess?: () => void;
  defaultDate?: Date;
}

const formSchema = insertEventSchema.extend({
  date: z.coerce.date(),
  startTimeStr: z.string(),
  endTimeStr: z.string(),
}).omit({ startTime: true, endTime: true });

type FormValues = z.infer<typeof formSchema>;

const QuickAddEvent = ({ onSuccess, defaultDate = new Date() }: QuickAddEventProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTeacherAuthenticated, setIsTeacherAuthenticated] = useState(false);
  const [teacherPassword, setTeacherPassword] = useState("");
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const handleTeacherLogin = () => {
    // Simple password check (in production, this should be more secure)
    if (teacherPassword === "WayzataDECA2025") {
      setIsTeacherAuthenticated(true);
      setShowPasswordPrompt(false);
      toast({
        title: "Access granted",
        description: "You can now add events to the calendar.",
      });
    } else {
      toast({
        title: "Access denied",
        description: "Incorrect password. Please contact Mr. Kimbler for access.",
        variant: "destructive",
      });
    }
    setTeacherPassword("");
  };

  const handleAddEventClick = () => {
    if (!isTeacherAuthenticated) {
      setShowPasswordPrompt(true);
    }
  };
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      date: defaultDate,
      startTimeStr: "09:00",
      endTimeStr: "10:00",
      type: "meeting",
      organizer: "",
      imageUrl: "",
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Convert form data to API format
      const dateStr = format(data.date, "yyyy-MM-dd");
      const startTime = new Date(`${dateStr}T${data.startTimeStr}:00`);
      const endTime = new Date(`${dateStr}T${data.endTimeStr}:00`);
      
      const eventData = {
        title: data.title,
        description: data.description,
        location: data.location,
        startTime,
        endTime,
        type: data.type,
        organizer: data.organizer,
        imageUrl: data.imageUrl,
      };
      
      await apiRequest("POST", "/api/events", eventData);
      
      toast({
        title: "Event Created",
        description: "Your event has been successfully added.",
      });
      
      // Invalidate events query to refresh data
      queryClient.invalidateQueries({ queryKey: ['/api/events'] });
      
      // Reset form
      form.reset({
        title: "",
        description: "",
        location: "",
        date: new Date(),
        startTimeStr: "09:00",
        endTimeStr: "10:00",
        type: "meeting",
        organizer: "",
        imageUrl: "",
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Failed to create event:", error);
      toast({
        title: "Error",
        description: "Failed to create event. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (showPasswordPrompt) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <i className="ri-lock-line mr-2 text-[#E63946]"></i>
            Teacher Access Required
          </h2>
        </div>
        <div className="p-4">
          <p className="text-gray-600 mb-4">
            Only teachers can add events to the calendar. Please enter the teacher password to continue.
          </p>
          <div className="space-y-3">
            <Input
              type="password"
              placeholder="Enter teacher password"
              value={teacherPassword}
              onChange={(e) => setTeacherPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleTeacherLogin()}
            />
            <div className="flex gap-2">
              <Button onClick={handleTeacherLogin} className="bg-[#003366] hover:bg-[#004080]">
                <i className="ri-login-circle-line mr-2"></i>
                Access Event Management
              </Button>
              <Button variant="outline" onClick={() => setShowPasswordPrompt(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isTeacherAuthenticated) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Quick Add Event</h2>
        </div>
        <div className="p-4 text-center">
          <i className="ri-lock-line text-4xl text-gray-400 mb-3"></i>
          <p className="text-gray-600 mb-4">
            Event management is restricted to teachers only.
          </p>
          <Button onClick={handleAddEventClick} className="bg-[#003366] hover:bg-[#004080]">
            <i className="ri-key-line mr-2"></i>
            Teacher Login
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <i className="ri-check-line mr-2 text-[#28A745]"></i>
          Quick Add Event (Teacher Access)
        </h2>
      </div>
      <div className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter event title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Event Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      value={field.value ? format(field.value, "yyyy-MM-dd") : ""}
                      onChange={(e) => {
                        field.onChange(e.target.value ? new Date(e.target.value) : null);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex space-x-3">
              <FormField
                control={form.control}
                name="startTimeStr"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="endTimeStr"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter event description"
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button
              type="submit"
              className="w-full bg-[#003366] hover:bg-[#00264d]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add Event"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default QuickAddEvent;

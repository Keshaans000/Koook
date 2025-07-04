import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { StaticEventStorage, type StaticEvent } from "@/lib/staticEventStorage";

interface EventFormData {
  title: string;
  description: string;
  startTime: string;
}

export default function StaticTeacherAdmin() {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [events, setEvents] = useState<StaticEvent[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [eventForm, setEventForm] = useState<EventFormData>({
    title: '',
    description: '',
    startTime: new Date().toISOString().slice(0, 16)
  });

  // Load events from static storage
  useEffect(() => {
    const allEvents = StaticEventStorage.getAllEvents();
    setEvents(allEvents);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "wayzata2024") {
      setIsLoggedIn(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel.",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid password. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!eventForm.title.trim()) {
      toast({
        title: "Missing Information", 
        description: "Please enter an event name.",
        variant: "destructive",
      });
      return;
    }
    
    if (!eventForm.startTime) {
      toast({
        title: "Missing Information",
        description: "Please select a date and time.",
        variant: "destructive",
      });
      return;
    }

    const selectedDate = new Date(eventForm.startTime);
    if (isNaN(selectedDate.getTime())) {
      toast({
        title: "Invalid Date",
        description: "Please select a valid date and time.",
        variant: "destructive",
      });
      return;
    }
    
    if (selectedDate < new Date()) {
      toast({
        title: "Invalid Date",
        description: "Please select a future date and time.",
        variant: "destructive",
      });
      return;
    }

    const eventDate = new Date(eventForm.startTime);
    const endTime = new Date(eventDate.getTime() + (2 * 60 * 60 * 1000));
    
    StaticEventStorage.addEvent({
      title: eventForm.title,
      description: eventForm.description,
      startTime: eventDate,
      endTime: endTime,
      type: "meeting",
      organizer: "Teacher",
      location: null,
      imageUrl: null,
      createdBy: null
    });

    // Refresh the events list
    const updatedEvents = StaticEventStorage.getAllEvents();
    setEvents(updatedEvents);

    toast({
      title: "Event Created",
      description: "The event has been added successfully.",
    });

    setEventForm({
      title: '',
      description: '',
      startTime: new Date().toISOString().slice(0, 16)
    });
    setShowAddForm(false);
  };

  const handleDeleteEvent = (eventId: number) => {
    if (confirm("Are you sure you want to delete this event?")) {
      StaticEventStorage.deleteEvent(eventId);
      
      // Refresh the events list
      const updatedEvents = StaticEventStorage.getAllEvents();
      setEvents(updatedEvents);
      
      toast({
        title: "Event Deleted",
        description: "The event has been removed successfully.",
      });
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-[#003366]">Teacher Admin</CardTitle>
            <p className="text-gray-600">Sign in to manage DECA events</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Teacher Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#003366] hover:bg-[#004488]">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#003366]">Event Management</h1>
          <Button
            onClick={() => setIsLoggedIn(false)}
            variant="outline"
          >
            Logout
          </Button>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Add New Event</CardTitle>
                <Button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="bg-[#003366] hover:bg-[#004488]"
                >
                  {showAddForm ? "Cancel" : "Add Event"}
                </Button>
              </div>
            </CardHeader>
            {showAddForm && (
              <CardContent>
                <form onSubmit={handleCreateEvent} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Event Name</label>
                    <Input
                      type="text"
                      placeholder="Enter event name"
                      value={eventForm.title}
                      onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Date & Time</label>
                    <input
                      type="datetime-local"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={eventForm.startTime}
                      onChange={(e) => setEventForm({ ...eventForm, startTime: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      className="w-full p-3 border rounded-md resize-none"
                      rows={4}
                      placeholder="Enter event description"
                      value={eventForm.description}
                      onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowAddForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#003366] hover:bg-[#004488]"
                    >
                      Create Event
                    </Button>
                  </div>
                </form>
              </CardContent>
            )}
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Events ({events.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {events.map((event) => (
                  <Card key={event.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#003366]">{event.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {new Date(event.startTime).toLocaleDateString()} at {new Date(event.startTime).toLocaleTimeString()}
                          </p>
                          <p className="text-gray-700 mt-2">{event.description}</p>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteEvent(event.id)}
                          className="ml-4"
                        >
                          Delete
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
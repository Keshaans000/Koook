import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface EventFormData {
  title: string;
  description: string;
  startTime: string;
}

export default function SimpleAdminNew() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ password: '' });
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [eventForm, setEventForm] = useState<EventFormData>({
    title: '',
    description: '',
    startTime: ''
  });

  // Get events
  const { data: events = [] } = useQuery({
    queryKey: ["/api/events"],
    enabled: isLoggedIn,
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: async (credentials: { password: string }) => {
      return apiRequest("POST", "/api/admin/login", { username: "teacher", ...credentials });
    },
    onSuccess: () => {
      setIsLoggedIn(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel.",
      });
    },
    onError: () => {
      toast({
        title: "Login Failed",
        description: "Invalid password. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Create event mutation
  const createEventMutation = useMutation({
    mutationFn: async (data: EventFormData) => {
      const eventDate = new Date(data.startTime);
      const endTime = new Date(eventDate.getTime() + (2 * 60 * 60 * 1000)); // Default 2 hours duration
      
      return apiRequest("POST", "/api/admin/events", {
        title: data.title,
        description: data.description,
        type: "meeting",
        startTime: eventDate,
        endTime: endTime,
        location: null,
        organizer: "Teacher"
      });
    },
    onSuccess: () => {
      toast({
        title: "Event Created",
        description: "The event has been added successfully.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
      setEventForm({
        title: '',
        description: '',
        startTime: ''
      });
      setShowAddForm(false);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create event. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(loginForm);
  };

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    createEventMutation.mutate(eventForm);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-[#003366]">Teacher Admin</CardTitle>
            <CardDescription>Sign in to manage DECA events</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Teacher Password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ password: e.target.value })}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#003366] hover:bg-[#002244]"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Signing in..." : "Sign In"}
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
            onClick={() => setShowAddForm(true)}
            className="bg-[#003366] hover:bg-[#002244]"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </div>

        {showAddForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Add New Event</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateEvent} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Event Name"
                    value={eventForm.title}
                    onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <Input
                    type="datetime-local"
                    value={eventForm.startTime}
                    onChange={(e) => setEventForm({ ...eventForm, startTime: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    className="w-full p-3 border rounded-md resize-none"
                    rows={4}
                    placeholder="Event Description"
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
                    className="bg-[#003366] hover:bg-[#002244]"
                    disabled={createEventMutation.isPending}
                  >
                    {createEventMutation.isPending ? "Creating..." : "Create Event"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-4">
          {Array.isArray(events) && events.map((event: any) => (
            <Card key={event.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-[#003366]">{event.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {new Date(event.startTime).toLocaleDateString()} at {new Date(event.startTime).toLocaleTimeString()}
                    </p>
                    <p className="text-gray-700 mt-2">{event.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
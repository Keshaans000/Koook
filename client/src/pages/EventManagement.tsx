import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Event, eventTypes } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import QuickAddEvent from "@/components/QuickAddEvent";

const EventManagement = () => {
  const { toast } = useToast();
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [deleteEventId, setDeleteEventId] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  
  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });
  
  const deleteEventMutation = useMutation({
    mutationFn: (id: number) => {
      return apiRequest("DELETE", `/api/events/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Event Deleted",
        description: "The event has been successfully deleted.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/events'] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete event. Please try again.",
        variant: "destructive",
      });
      console.error("Delete error:", error);
    },
  });
  
  const handleDeleteEvent = (id: number) => {
    setDeleteEventId(id);
  };
  
  const confirmDelete = () => {
    if (deleteEventId) {
      deleteEventMutation.mutate(deleteEventId);
      setDeleteEventId(null);
    }
  };
  
  const cancelDelete = () => {
    setDeleteEventId(null);
  };
  
  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.type === filter);
  
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Event Management</h1>
          <p className="text-gray-600 mt-1">Add, edit, and manage Wayzata DECA events</p>
        </div>
        <div className="flex items-center mt-4 md:mt-0 space-x-3">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
          >
            <option value="all">All Events</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
          <Button
            className="bg-[#003366] hover:bg-[#00264d]"
            onClick={() => setIsAddEventOpen(true)}
          >
            <i className="ri-add-line mr-1"></i> Add Event
          </Button>
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003366]"></div>
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <i className="ri-calendar-line text-5xl text-gray-300 mb-4"></i>
          <h3 className="text-xl font-medium text-gray-700">No events found</h3>
          <p className="text-gray-500 mt-2">
            {filter === "all" 
              ? "Start by adding your first event" 
              : `No ${filter} events found. Try a different filter or add a new event.`}
          </p>
          <Button
            className="mt-4 bg-[#003366] hover:bg-[#00264d]"
            onClick={() => setIsAddEventOpen(true)}
          >
            <i className="ri-add-line mr-1"></i> Add New Event
          </Button>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredEvents.map((event) => {
                  const startDate = new Date(event.startTime);
                  const endDate = new Date(event.endTime);
                  
                  return (
                    <TableRow key={event.id}>
                      <TableCell className="font-medium">{event.title}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          event.type === 'competition' ? 'bg-[#003366] bg-opacity-10 text-[#003366]' :
                          event.type === 'meeting' ? 'bg-[#2C7BE5] bg-opacity-10 text-[#2C7BE5]' :
                          event.type === 'deadline' ? 'bg-[#E63946] bg-opacity-10 text-[#E63946]' :
                          'bg-[#FFD700] bg-opacity-10 text-[#FFD700]'
                        }`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </TableCell>
                      <TableCell>{format(startDate, 'MMM dd, yyyy')}</TableCell>
                      <TableCell>{`${format(startDate, 'h:mm a')} - ${format(endDate, 'h:mm a')}`}</TableCell>
                      <TableCell>{event.location || 'N/A'}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" size="sm">
                            <i className="ri-edit-line mr-1"></i> Edit
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteEvent(event.id)}
                          >
                            <i className="ri-delete-bin-line mr-1"></i> Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
      
      {/* Add Event Dialog */}
      <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
            <DialogDescription>
              Create a new event for the Wayzata DECA calendar
            </DialogDescription>
          </DialogHeader>
          <QuickAddEvent 
            onSuccess={() => setIsAddEventOpen(false)}
          />
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteEventId !== null} onOpenChange={() => deleteEventId && setDeleteEventId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the event.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelDelete}>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="bg-[#E63946] hover:bg-[#c4303b]"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EventManagement;

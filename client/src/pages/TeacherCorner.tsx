import { useState, useEffect } from "react";
import { StaticEventStorage } from "@/lib/staticEventStorage";
import type { StaticEvent } from "@/lib/staticEventStorage";

export default function TeacherCorner() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [events, setEvents] = useState<StaticEvent[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startTime: "",
    endTime: "",
    location: "",
    organizer: "",
    type: "meeting"
  });

  useEffect(() => {
    // Check if already logged in
    const loggedIn = localStorage.getItem("teacherLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      loadEvents();
    }
  }, []);

  const loadEvents = () => {
    const allEvents = StaticEventStorage.getAllEvents();
    setEvents(allEvents);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === "wayzata2024") {
      localStorage.setItem("teacherLoggedIn", "true");
      setIsLoggedIn(true);
      setError("");
      loadEvents();
    } else {
      setError("Incorrect password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("teacherLoggedIn");
    setIsLoggedIn(false);
    setPassword("");
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const eventData = {
      title: formData.title,
      description: formData.description,
      startTime: new Date(formData.startTime),
      endTime: new Date(formData.endTime || formData.startTime),
      location: formData.location || null,
      organizer: formData.organizer || "Wayzata DECA",
      type: formData.type,
      imageUrl: null,
      createdBy: "teacher"
    };

    StaticEventStorage.addEvent(eventData);
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      startTime: "",
      endTime: "",
      location: "",
      organizer: "",
      type: "meeting"
    });
    
    setShowForm(false);
    loadEvents();
    
    // Show success message
    alert("Event added successfully!");
  };

  const [deleteConfirm, setDeleteConfirm] = useState<{ show: boolean; eventId: number; eventTitle: string }>({ 
    show: false, 
    eventId: 0, 
    eventTitle: "" 
  });

  const showDeleteConfirm = (id: number, title: string) => {
    setDeleteConfirm({ show: true, eventId: id, eventTitle: title });
  };

  const confirmDelete = () => {
    StaticEventStorage.deleteEvent(deleteConfirm.eventId);
    loadEvents();
    setDeleteConfirm({ show: false, eventId: 0, eventTitle: "" });
    
    // Show success message with better styling
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    successDiv.textContent = 'Event deleted successfully!';
    document.body.appendChild(successDiv);
    setTimeout(() => document.body.removeChild(successDiv), 3000);
  };

  const cancelDelete = () => {
    setDeleteConfirm({ show: false, eventId: 0, eventTitle: "" });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-blue-900">Teacher Admin</h1>
            <p className="text-gray-600">Sign in to manage DECA events</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Teacher Password"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            {error && (
              <div className="text-red-600 text-sm">{error}</div>
            )}
            
            <button 
              type="submit" 
              className="w-full bg-blue-900 text-white p-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-900">Event Management</h1>
          <button onClick={handleLogout} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">
            Logout
          </button>
        </div>

        <div className="grid gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Event</h2>
              <button 
                onClick={() => setShowForm(!showForm)}
                className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              >
                {showForm ? "Cancel" : "Add Event"}
              </button>
            </div>

            {showForm && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Event Title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Event Description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date & Time</label>
                    <input
                      type="datetime-local"
                      value={formData.startTime}
                      onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date & Time (Optional)</label>
                    <input
                      type="datetime-local"
                      value={formData.endTime}
                      onChange={(e) => setFormData({...formData, endTime: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="meeting">Meeting</option>
                      <option value="competition">Competition</option>
                      <option value="deadline">Deadline</option>
                      <option value="social">Social Event</option>
                    </select>
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      placeholder="Location (optional)"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Organizer"
                    value={formData.organizer}
                    onChange={(e) => setFormData({...formData, organizer: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <button type="submit" className="w-full bg-blue-900 text-white p-3 rounded-md hover:bg-blue-800 transition-colors">
                  Add Event
                </button>
              </form>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Current Events</h2>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {events.length} events
              </span>
            </div>
            
            <div className="space-y-4">
              {events.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No events found. Add your first event above!</p>
              ) : (
                events.map(event => (
                  <div key={event.id} className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-blue-900">{event.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {event.startTime.toLocaleDateString()} at {event.startTime.toLocaleTimeString()}
                        </p>
                        <p className="text-gray-700 mt-2">{event.description}</p>
                        {event.location && (
                          <p className="text-sm text-gray-500 mt-1">📍 {event.location}</p>
                        )}
                      </div>
                      <button
                        onClick={() => showDeleteConfirm(event.id, event.title)}
                        className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Delete Confirmation Dialog */}
      {deleteConfirm.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Event</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete "<span className="font-medium">{deleteConfirm.eventTitle}</span>"? This action cannot be undone.
              </p>
              <div className="flex space-x-3 justify-center">
                <button
                  onClick={cancelDelete}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Delete Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
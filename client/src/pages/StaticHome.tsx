import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { Link } from "wouter";

// Same localStorage interface as StaticTeacherAdmin
interface LocalEvent {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  type: string;
  organizer: string;
  location: string | null;
  createdAt: string;
  imageUrl: string | null;
  createdBy: string | null;
}

const EVENTS_KEY = 'wayzata-deca-static-events';

// Default events for initial load
const getDefaultEvents = (): LocalEvent[] => [
  {
    id: 1,
    title: "District Competition Preparation",
    description: "Join the final preparation session for the upcoming district competition. Bring your presentation materials.",
    startTime: "2025-06-02T09:00:00.000Z",
    endTime: "2025-06-02T15:00:00.000Z",
    type: "competition",
    organizer: "Ms. Johnson",
    location: "Room 156",
    createdAt: new Date().toISOString(),
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    createdBy: null
  },
  {
    id: 2,
    title: "Be The One",
    description: "DECA's annual motivational kickoff - Elevate your DECA experience and prepare to be the difference-maker in this year's competitions.",
    startTime: "2025-06-05T14:00:00.000Z",
    endTime: "2025-06-05T16:00:00.000Z",
    type: "meeting",
    organizer: "DECA Executive Team",
    location: "School Auditorium",
    createdAt: new Date().toISOString(),
    imageUrl: "https://glass-award.com/cdn/shop/products/bz-1_1024x1024.jpg?v=1571710249",
    createdBy: null
  },
  {
    id: 3,
    title: "State Competition Registration Deadline",
    description: "Last day to submit registration forms and payment for state DECA competition. Don't miss this important deadline!",
    startTime: "2025-06-10T17:00:00.000Z",
    endTime: "2025-06-10T17:00:00.000Z",
    type: "deadline",
    organizer: "DECA Advisors",
    location: null,
    createdAt: new Date().toISOString(),
    imageUrl: null,
    createdBy: null
  },
  {
    id: 4,
    title: "Monthly DECA Meeting",
    description: "Regular monthly meeting to discuss upcoming events and competition preparation.",
    startTime: "2025-06-15T15:30:00.000Z",
    endTime: "2025-06-15T16:30:00.000Z",
    type: "meeting",
    organizer: "DECA Officers",
    location: "Room 200",
    createdAt: new Date().toISOString(),
    imageUrl: null,
    createdBy: null
  },
  {
    id: 5,
    title: "Business Presentation Workshop",
    description: "Learn effective presentation techniques for DECA competitions. Guest speaker from local business community.",
    startTime: "2025-06-18T14:00:00.000Z",
    endTime: "2025-06-18T16:00:00.000Z",
    type: "meeting",
    organizer: "Ms. Anderson",
    location: "Business Lab",
    createdAt: new Date().toISOString(),
    imageUrl: null,
    createdBy: null
  }
];

export default function StaticHome() {
  const [events, setEvents] = useState<LocalEvent[]>([]);

  // Load events from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(EVENTS_KEY);
    if (stored) {
      try {
        setEvents(JSON.parse(stored));
      } catch (error) {
        console.error('Error loading events:', error);
        initializeDefaultEvents();
      }
    } else {
      initializeDefaultEvents();
    }
  }, []);

  const initializeDefaultEvents = () => {
    const defaults = getDefaultEvents();
    setEvents(defaults);
    localStorage.setItem(EVENTS_KEY, JSON.stringify(defaults));
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'competition':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'meeting':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'deadline':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'social':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const upcomingEvents = events
    .filter(event => new Date(event.startTime) >= new Date())
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime())
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004488] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Wayzata DECA
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Empowering the next generation of business leaders through competitive events, 
            professional development, and community engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#003366] hover:bg-gray-100 px-8 py-3 text-lg">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#003366] px-8 py-3 text-lg">
              <Link href="/competitions">View Competitions</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-[#003366] mb-2">150+</div>
              <div className="text-gray-600">Active Members</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-[#003366] mb-2">25+</div>
              <div className="text-gray-600">State Qualifiers</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-[#003366] mb-2">10+</div>
              <div className="text-gray-600">International Competitors</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#003366] mb-2">Upcoming Events</h2>
            <p className="text-gray-600">Stay updated with the latest DECA activities and deadlines</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/calendar">View Calendar</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-[#003366] line-clamp-2">
                      {event.title}
                    </CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.startTime).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(event.startTime).toLocaleTimeString()}</span>
                    </div>
                    {event.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{event.organizer}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-500 mb-4">No upcoming events found</div>
              <Button asChild>
                <Link href="/admin">Add Events</Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#003366] text-center mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link href="/competitions">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-[#003366] mb-2">Competitions</h3>
                  <p className="text-sm text-gray-600">View upcoming competitions and results</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link href="/team">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <User className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-[#003366] mb-2">Our Team</h3>
                  <p className="text-sm text-gray-600">Meet the officers and advisors</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link href="/teacher-corner">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-[#003366] mb-2">Teacher Corner</h3>
                  <p className="text-sm text-gray-600">Resources for educators</p>
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <Link href="/sponsorships">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-[#003366] mb-2">Sponsorships</h3>
                  <p className="text-sm text-gray-600">Partner with us</p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#003366] to-[#004488] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Go the Extra Mile?</h2>
          <p className="text-xl mb-8">
            Join Wayzata DECA and unlock your potential in the world of business and entrepreneurship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#003366] hover:bg-gray-100">
              <Link href="/about">Learn More About DECA</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-[#003366]">
              <Link href="/teacher-corner">For Teachers</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
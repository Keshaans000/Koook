import { useState, useEffect } from "react";
import { AlertCircle, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Announcement {
  id: number;
  title: string;
  content: string;
  important?: boolean;
  link?: {
    url: string;
    label: string;
  };
}

// Sample announcements data - in a real app, this would come from an API
const sampleAnnouncements: Announcement[] = [
  {
    id: 1,
    title: "DECA District Competition",
    content: "District competition registrations are due by January 15. Sign up through your DECA advisor.",
    important: true,
    link: {
      url: "https://www.mndeca.org/conferences/district-conferences/",
      label: "Registration Info"
    }
  },
  {
    id: 2,
    title: "Practice Sessions",
    content: "Weekly role-play practice sessions will be held every Tuesday after school in room 304.",
  },
  {
    id: 3,
    title: "DECA Social",
    content: "Join us for our winter social event on December 15 at 6pm in the school cafeteria!",
    link: {
      url: "#",
      label: "RSVP"
    }
  }
];

const AnnouncementsBanner = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>(sampleAnnouncements);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dismissed, setDismissed] = useState<number[]>([]);
  
  // Filter out dismissed announcements
  const visibleAnnouncements = announcements.filter(a => !dismissed.includes(a.id));
  
  // If all announcements are dismissed, don't render the component
  if (visibleAnnouncements.length === 0) {
    return null;
  }
  
  const currentAnnouncement = visibleAnnouncements[currentIndex];
  
  const nextAnnouncement = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === visibleAnnouncements.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevAnnouncement = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? visibleAnnouncements.length - 1 : prevIndex - 1
    );
  };
  
  const dismissAnnouncement = (id: number) => {
    setDismissed((prev) => [...prev, id]);
    
    // Reset index if needed
    if (currentIndex >= visibleAnnouncements.length - 1) {
      setCurrentIndex(0);
    }
  };
  
  return (
    <div className={`mb-6 rounded-lg p-4 flex items-center ${
      currentAnnouncement.important 
        ? 'bg-[#E63946] bg-opacity-10 border border-[#E63946] border-opacity-20' 
        : 'bg-[#003366] bg-opacity-5 border border-[#003366] border-opacity-10'
    }`}>
      {/* Announcement icon */}
      <div className={`flex-shrink-0 p-2 rounded-full ${
        currentAnnouncement.important 
          ? 'bg-[#E63946] bg-opacity-10 text-[#E63946]' 
          : 'bg-[#003366] bg-opacity-10 text-[#003366]'
      }`}>
        {currentAnnouncement.important 
          ? <AlertCircle className="h-5 w-5" /> 
          : <i className="ri-megaphone-line text-xl"></i>}
      </div>
      
      {/* Announcement content */}
      <div className="ml-4 flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className={`font-semibold ${
              currentAnnouncement.important ? 'text-[#E63946]' : 'text-[#003366]'
            }`}>
              {currentAnnouncement.title}
            </h3>
            <p className="text-gray-700 text-sm mt-1">{currentAnnouncement.content}</p>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => dismissAnnouncement(currentAnnouncement.id)}
            className="text-gray-500 hover:text-gray-700 -mt-1 -mr-1"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Link and navigation section */}
        <div className="flex justify-between items-center mt-2">
          {currentAnnouncement.link ? (
            <a 
              href={currentAnnouncement.link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-sm font-medium underline ${
                currentAnnouncement.important ? 'text-[#E63946]' : 'text-[#003366]'
              }`}
            >
              {currentAnnouncement.link.label}
            </a>
          ) : (
            <div></div>
          )}
          
          {visibleAnnouncements.length > 1 && (
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={prevAnnouncement}
                className="p-1 h-auto text-gray-600 hover:text-gray-900"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-xs text-gray-500">
                {currentIndex + 1}/{visibleAnnouncements.length}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={nextAnnouncement}
                className="p-1 h-auto text-gray-600 hover:text-gray-900"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsBanner;
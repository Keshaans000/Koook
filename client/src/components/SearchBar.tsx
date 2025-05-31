import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "event" | "page" | "resource";
  url: string;
  date?: string;
}

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className = "" }: SearchBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [, setLocation] = useLocation();
  const searchRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const { data: events = [] } = useQuery({
    queryKey: ["/api/events"],
  });

  // Create search results
  const results = searchQuery.trim()
    ? [
        // Event results
        ...events
          .filter((event: any) => 
            event.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description?.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((event: any) => ({
            id: `event-${event.id}`,
            title: event.title,
            description: event.description,
            type: "event" as const,
            url: `/`,
            date: event.date,
          })),
        
        // Page results
        ...[
          { title: "Home", description: "Main dashboard with events and announcements", url: "/" },
          { title: "About", description: "Learn about Wayzata DECA", url: "/about" },
          { title: "Team", description: "Meet our officers and members", url: "/team" },
          { title: "Competitions", description: "View upcoming competitions and events", url: "/competitions" },
          { title: "Current Winners", description: "See our latest achievements and awards", url: "/current-winners" },
          { title: "Meetings", description: "General meetings and schedules", url: "/meetings" },
          { title: "Deadlines", description: "Important dates and deadlines", url: "/deadlines" },
          { title: "Student Volunteering", description: "Volunteer opportunities for students", url: "/student-volunteering" },
          { title: "Teacher Corner", description: "Resources and information for teachers", url: "/teacher-corner" },
          { title: "Event Management", description: "Manage and create events", url: "/event-management" },
          { title: "DECA Advice", description: "Tips and advice for DECA success", url: "/deca-advice" },
          { title: "DECAcheive", description: "Study resources and materials", url: "/deca-advice" },
          { title: "Grants & Donations", description: "Information about funding opportunities", url: "/grants-donations" },
          { title: "Sponsorships", description: "Partnership and sponsorship information", url: "/sponsorships" },
          { title: "Judging", description: "Information about judging opportunities", url: "/judging" },
          { title: "Locker Room", description: "Member resources and materials", url: "/locker-room" },
        ]
          .filter(page => 
            page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            page.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(page => ({
            id: `page-${page.url}`,
            title: page.title,
            description: page.description,
            type: "page" as const,
            url: page.url,
          })),

        // Resource results
        ...[
          { title: "Official DECA Guide", description: "Comprehensive guide to DECA competitions", url: "/deca-advice" },
          { title: "Study Materials", description: "Flashcards and practice tests", url: "/deca-advice" },
          { title: "Google Drive Resources", description: "Shared files and documents", url: "/deca-advice" },
          { title: "Practice Exams", description: "Test preparation materials", url: "/deca-advice" },
          { title: "Competition Poster", description: "Event information and guidelines", url: "/deca-advice" },
        ]
          .filter(resource => 
            resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(resource => ({
            id: `resource-${resource.title}`,
            title: resource.title,
            description: resource.description,
            type: "resource" as const,
            url: resource.url,
          })),
      ].slice(0, 8)
    : [];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setSearchQuery("");
        setSelectedIndex(0);
      } else if (e.metaKey && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter" && results[selectedIndex]) {
      handleResultClick(results[selectedIndex]);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setLocation(result.url);
    setIsOpen(false);
    setSearchQuery("");
    setSelectedIndex(0);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center bg-white/10 hover:bg-white/20 text-white/70 hover:text-white px-4 py-2 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/30 ${className}`}
      >
        <i className="ri-search-line mr-2"></i>
        <span className="text-sm">Search...</span>
        <div className="hidden sm:flex items-center space-x-1 text-xs ml-auto">
          <kbd className="px-1.5 py-0.5 bg-white/20 border border-white/30 rounded text-white/80">⌘</kbd>
          <kbd className="px-1.5 py-0.5 bg-white/20 border border-white/30 rounded text-white/80">K</kbd>
        </div>
      </button>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-start justify-center pt-20" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 999999 
      }}
      onClick={() => setIsOpen(false)}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl border border-gray-200 w-full max-w-2xl mx-4 overflow-hidden" 
        style={{ zIndex: 9999999 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center border-b border-gray-200 px-4 py-3">
          <i className="ri-search-line text-gray-400 mr-3"></i>
          <input
            ref={searchRef}
            type="text"
            placeholder="Search events, pages, and resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 outline-none text-gray-900 placeholder-gray-500"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="ml-3 p-1 text-gray-400 hover:text-gray-600"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Search Results */}
        <div ref={resultsRef} className="max-h-96 overflow-y-auto">
          {results.length === 0 && searchQuery.trim() && (
            <div className="px-4 py-8 text-center text-gray-500">
              <i className="ri-search-line text-3xl mb-2 block"></i>
              <p>No results found for "{searchQuery}"</p>
            </div>
          )}

          {results.length === 0 && !searchQuery.trim() && (
            <div className="px-4 py-8 text-center text-gray-500">
              <i className="ri-lightbulb-line text-3xl mb-2 block"></i>
              <p>Start typing to search events, pages, and resources</p>
              <p className="text-sm mt-1">Try searching for "team", "winners", "deadlines", or event names</p>
            </div>
          )}

          {results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => handleResultClick(result)}
              className={`w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                index === selectedIndex ? "bg-blue-50 border-blue-100" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <div className="mr-3">
                      {result.type === "event" && (
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                          <i className="ri-calendar-event-line text-sm"></i>
                        </div>
                      )}
                      {result.type === "page" && (
                        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                          <i className="ri-file-text-line text-sm"></i>
                        </div>
                      )}
                      {result.type === "resource" && (
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                          <i className="ri-links-line text-sm"></i>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate">{result.title}</p>
                      <p className="text-sm text-gray-500 truncate">{result.description}</p>
                      {result.date && (
                        <p className="text-xs text-blue-600 mt-1">{new Date(result.date).toLocaleDateString()}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="ml-3 flex-shrink-0">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 capitalize">
                    {result.type}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded mr-1">↵</kbd>
              to select
            </span>
            <span className="flex items-center">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded mr-1">↑↓</kbd>
              to navigate
            </span>
          </div>
          <span className="flex items-center">
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded mr-1">esc</kbd>
            to close
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
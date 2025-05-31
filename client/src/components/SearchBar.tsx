import { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import type { Event } from "@shared/schema";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "event" | "page" | "resource";
  url: string;
  date?: string;
}

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const { data: events = [] } = useQuery<Event[]>({
    queryKey: ["/api/events"],
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Static searchable content
  const staticContent: SearchResult[] = [
    {
      id: "homepage",
      title: "Wayzata DECA Homepage",
      description: "Main page with chapter information, membership, and resources",
      type: "page",
      url: "/"
    },
    {
      id: "team",
      title: "DECA Leadership Team",
      description: "Meet our 2025-2026 officers and team members",
      type: "page",
      url: "/team"
    },
    {
      id: "current-winners",
      title: "Current Winners",
      description: "ICDC 2025 3rd place winners in Integrated Marketing",
      type: "page",
      url: "/current-winners"
    },
    {
      id: "competitions",
      title: "Competitions",
      description: "Upcoming DECA competitions and deadlines",
      type: "page",
      url: "/competitions"
    },
    {
      id: "events-category",
      title: "Event Categories",
      description: "Browse events by category and type",
      type: "page",
      url: "/events-category"
    },
    {
      id: "deca-help",
      title: "DECA Help",
      description: "Resources, tips, and competition guides",
      type: "page",
      url: "/deca-help"
    },
    {
      id: "deca-advice",
      title: "DECAcheive",
      description: "Study guides, flashcards, and competition resources",
      type: "page",
      url: "/deca-advice"
    },
    {
      id: "sponsorships",
      title: "Sponsorships",
      description: "Partnership opportunities and sponsor information",
      type: "page",
      url: "/sponsorships"
    },
    {
      id: "grants-donations",
      title: "Grants & Donations",
      description: "Financial support and donation opportunities",
      type: "page",
      url: "/grants-donations"
    },
    {
      id: "judging",
      title: "Judging",
      description: "Competition judging schedule and information",
      type: "page",
      url: "/judging"
    },
    {
      id: "student-volunteering",
      title: "Student Volunteering",
      description: "Volunteer opportunities and community service",
      type: "page",
      url: "/student-volunteering"
    },
    {
      id: "locker-room",
      title: "Locker Room",
      description: "Member resources and exclusive content",
      type: "page",
      url: "/locker-room"
    },
    {
      id: "meetings",
      title: "Meetings",
      description: "DECA meeting schedules and information",
      type: "page",
      url: "/meetings"
    },
    {
      id: "deadlines",
      title: "Deadlines",
      description: "Important DECA deadlines and due dates",
      type: "page",
      url: "/deadlines"
    },
    {
      id: "about",
      title: "About DECA",
      description: "Learn about DECA and our mission",
      type: "page",
      url: "/about"
    },
    {
      id: "teacher-corner",
      title: "Teacher's Corner",
      description: "Resources and tools for teachers",
      type: "page",
      url: "/teacher-corner"
    }
  ];

  // Keyboard shortcut to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearchQuery("");
        setSelectedIndex(0);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  // Search functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const query = searchQuery.toLowerCase();
    
    // Search static content first (prioritize homepage for site searches)
    const pageResults = staticContent.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );

    // Search events
    const eventResults: SearchResult[] = events
      .filter((event: Event) => 
        event.title.toLowerCase().includes(query) ||
        event.description?.toLowerCase().includes(query) ||
        event.type.toLowerCase().includes(query)
      )
      .map((event: Event) => ({
        id: `event-${event.id}`,
        title: event.title,
        description: event.description || `${event.type} event`,
        type: "event" as const,
        url: `/`,
        date: new Date(event.startTime).toLocaleDateString()
      }));

    const allResults = [...pageResults, ...eventResults];
    setResults(allResults.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(0);
  }, [searchQuery, events]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleResultClick(results[selectedIndex]);
      }
    }
  };

  const handleResultClick = (result: SearchResult) => {
    setIsOpen(false);
    setSearchQuery("");
    setSelectedIndex(0);
    // Navigate to the result
    window.location.href = result.url;
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
      >
        <i className="ri-search-line"></i>
        <span>Search...</span>
        <div className="hidden sm:flex items-center space-x-1 text-xs">
          <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-gray-600">⌘</kbd>
          <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-gray-600">K</kbd>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[99999] bg-black bg-opacity-90 flex items-start justify-center pt-20" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-full max-w-2xl mx-4 overflow-hidden relative z-[100000]">
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
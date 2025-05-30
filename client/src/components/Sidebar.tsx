import { Link, useLocation } from "wouter";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

interface SidebarProps {
  eventFilters: {
    competition: boolean;
    meeting: boolean;
    deadline: boolean;
    social: boolean;
  };
  toggleFilter: (type: "competition" | "meeting" | "deadline" | "social") => void;
}

const Sidebar = ({ eventFilters, toggleFilter }: SidebarProps) => {
  const [location] = useLocation();
  const [aboutOpen, setAboutOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <div className="hidden md:block bg-white w-64 border-r border-gray-200 flex-shrink-0">
      <div className="p-4">
        <nav>
          <ul className="space-y-2">
            {/* Homepage */}
            <li>
              <Link href="/">
                <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  location === "/" 
                    ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                    : "hover:bg-gray-100 text-gray-700"
                }`}>
                  <i className="ri-home-4-line text-xl"></i>
                  <span>Homepage</span>
                </div>
              </Link>
            </li>

            {/* About Us Tab */}
            <li>
              <Collapsible open={aboutOpen} onOpenChange={setAboutOpen}>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <i className="ri-information-line text-xl"></i>
                      <span>About Us</span>
                    </div>
                    <i className={`ri-arrow-${aboutOpen ? 'up' : 'down'}-s-line text-lg`}></i>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="ml-8 space-y-1 mt-1">
                    <Link href="/about">
                      <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        location === "/about" 
                          ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                          : "hover:bg-gray-50 text-gray-600"
                      }`}>
                        <span>About DECA</span>
                      </div>
                    </Link>
                    <Link href="/team">
                      <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        location === "/team" 
                          ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                          : "hover:bg-gray-50 text-gray-600"
                      }`}>
                        <span>Officer Team</span>
                      </div>
                    </Link>
                    <Link href="/current-winners">
                      <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        location === "/current-winners" 
                          ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                          : "hover:bg-gray-50 text-gray-600"
                      }`}>
                        <span>Current Winners</span>
                      </div>
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </li>

            {/* Support DECA Tab */}
            <li>
              <Collapsible open={supportOpen} onOpenChange={setSupportOpen}>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <i className="ri-hand-heart-line text-xl"></i>
                      <span>Support DECA</span>
                    </div>
                    <i className={`ri-arrow-${supportOpen ? 'up' : 'down'}-s-line text-lg`}></i>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="ml-8 space-y-1 mt-1">
                    <Link href="/sponsorships">
                      <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        location === "/sponsorships" 
                          ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                          : "hover:bg-gray-50 text-gray-600"
                      }`}>
                        <span>Sponsorships</span>
                      </div>
                    </Link>
                    <Link href="/grants-donations">
                      <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        location === "/grants-donations" 
                          ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                          : "hover:bg-gray-50 text-gray-600"
                      }`}>
                        <span>Grants & Donations</span>
                      </div>
                    </Link>
                    <Link href="/judging">
                      <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        location === "/judging" 
                          ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                          : "hover:bg-gray-50 text-gray-600"
                      }`}>
                        <span>Judging</span>
                      </div>
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </li>

            {/* Student Resources Tab */}
            <li>
              <Collapsible open={resourcesOpen} onOpenChange={setResourcesOpen}>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <i className="ri-book-line text-xl"></i>
                      <span>Student Resources</span>
                    </div>
                    <i className={`ri-arrow-${resourcesOpen ? 'up' : 'down'}-s-line text-lg`}></i>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="ml-8 space-y-1 mt-1">
                    <Link href="/calendar">
                      <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        location === "/calendar" 
                          ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                          : "hover:bg-gray-50 text-gray-600"
                      }`}>
                        <span>Calendar</span>
                      </div>
                    </Link>
                    <Link href="/competitions">
                      <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        location === "/competitions" 
                          ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                          : "hover:bg-gray-50 text-gray-600"
                      }`}>
                        <span>Competitions</span>
                      </div>
                    </Link>
                    <Link href="/events-category">
                      <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        location === "/events-category" 
                          ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                          : "hover:bg-gray-50 text-gray-600"
                      }`}>
                        <span>Event Categories</span>
                      </div>
                    </Link>
                    <Link href="/deca-help">
                      <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        location === "/deca-help" 
                          ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                          : "hover:bg-gray-50 text-gray-600"
                      }`}>
                        <span>DECA Help</span>
                      </div>
                    </Link>
                    <Link href="/additional-resources">
                      <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                        location === "/additional-resources" 
                          ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                          : "hover:bg-gray-50 text-gray-600"
                      }`}>
                        <span>Additional Resources</span>
                      </div>
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </li>

            {/* Individual pages */}
            <li>
              <Link href="/meetings">
                <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  location === "/meetings" 
                    ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                    : "hover:bg-gray-100 text-gray-700"
                }`}>
                  <i className="ri-team-line text-xl"></i>
                  <span>Meetings</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/student-volunteering">
                <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  location === "/student-volunteering" 
                    ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                    : "hover:bg-gray-100 text-gray-700"
                }`}>
                  <i className="ri-hand-heart-line text-xl"></i>
                  <span>Student Volunteering</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/teacher-corner">
                <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  location === "/teacher-corner" 
                    ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                    : "hover:bg-gray-100 text-gray-700"
                }`}>
                  <i className="ri-user-settings-line text-xl"></i>
                  <span>Teacher Portal</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4 border-t border-gray-200">
        <h3 className="font-medium text-gray-700 mb-2">Event Types</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input 
              type="checkbox" 
              checked={eventFilters.competition} 
              onChange={() => toggleFilter('competition')}
              className="rounded text-[#003366]" 
            />
            <span>Competitions</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input 
              type="checkbox" 
              checked={eventFilters.meeting} 
              onChange={() => toggleFilter('meeting')}
              className="rounded text-[#2C7BE5]" 
            />
            <span>Meetings</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input 
              type="checkbox" 
              checked={eventFilters.deadline} 
              onChange={() => toggleFilter('deadline')}
              className="rounded text-[#E63946]" 
            />
            <span>Deadlines</span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input 
              type="checkbox" 
              checked={eventFilters.social} 
              onChange={() => toggleFilter('social')}
              className="rounded text-[#FFD700]" 
            />
            <span>Social Events</span>
          </label>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-100 p-3 rounded-lg">
          <h3 className="font-medium text-gray-800 text-sm mb-1">Admin Controls</h3>
          <Link href="/manage">
            <div className="bg-[#003366] text-white text-sm py-2 px-3 rounded flex items-center justify-center w-full mt-2 cursor-pointer">
              <i className="ri-add-line mr-1"></i> Manage Events
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

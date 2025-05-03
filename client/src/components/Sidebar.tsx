import { Link, useLocation } from "wouter";

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

  return (
    <div className="hidden md:block bg-white w-64 border-r border-gray-200 flex-shrink-0">
      <div className="p-4">
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  location === "/" 
                    ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                    : "hover:bg-gray-100 text-gray-700"
                }`}>
                  <i className="ri-calendar-line text-xl"></i>
                  <span>Events Calendar</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  location === "/about" 
                    ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                    : "hover:bg-gray-100 text-gray-700"
                }`}>
                  <i className="ri-information-line text-xl"></i>
                  <span>About DECA</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/competitions">
                <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  location === "/competitions" 
                    ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                    : "hover:bg-gray-100 text-gray-700"
                }`}>
                  <i className="ri-trophy-line text-xl"></i>
                  <span>Competitions</span>
                </div>
              </Link>
            </li>
            <li>
              <button className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 w-full text-left">
                <i className="ri-team-line text-xl"></i>
                <span>Meetings</span>
              </button>
            </li>
            <li>
              <button className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 w-full text-left">
                <i className="ri-alarm-line text-xl"></i>
                <span>Deadlines</span>
              </button>
            </li>
            <li>
              <Link href="/team">
                <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                  location === "/team" 
                    ? "bg-[#003366] bg-opacity-10 text-[#003366] font-medium" 
                    : "hover:bg-gray-100 text-gray-700"
                }`}>
                  <i className="ri-group-line text-xl"></i>
                  <span>My Team</span>
                </div>
              </Link>
            </li>
            <li>
              <button className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-gray-700 w-full text-left">
                <i className="ri-file-list-3-line text-xl"></i>
                <span>Resources</span>
              </button>
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

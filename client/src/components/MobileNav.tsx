import { Link, useLocation } from "wouter";

const MobileNav = () => {
  const [location] = useLocation();
  
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around">
        <Link href="/">
          <div className={`flex flex-col items-center py-2 px-4 ${location === "/" ? "text-[#003366]" : "text-gray-600"}`}>
            <i className="ri-calendar-line text-xl"></i>
            <span className="text-xs mt-1">Calendar</span>
          </div>
        </Link>
        <button className="flex flex-col items-center py-2 px-4 text-gray-600">
          <i className="ri-trophy-line text-xl"></i>
          <span className="text-xs mt-1">Competitions</span>
        </button>
        <button className="flex flex-col items-center py-2 px-4 text-gray-600">
          <i className="ri-team-line text-xl"></i>
          <span className="text-xs mt-1">Meetings</span>
        </button>
        <Link href="/manage">
          <div className={`flex flex-col items-center py-2 px-4 ${location === "/manage" ? "text-[#003366]" : "text-gray-600"}`}>
            <i className="ri-settings-line text-xl"></i>
            <span className="text-xs mt-1">Manage</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;

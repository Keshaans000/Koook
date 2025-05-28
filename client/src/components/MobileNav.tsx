import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const MobileNav = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="flex justify-around">
          <Link href="/">
            <div className={`flex flex-col items-center py-2 px-3 ${location === "/" ? "text-[#003366] font-medium" : "text-gray-600"}`}>
              <i className="ri-calendar-line text-xl"></i>
              <span className="text-xs mt-1">Home</span>
            </div>
          </Link>
          
          <Link href="/competitions">
            <div className={`flex flex-col items-center py-2 px-3 ${location === "/competitions" ? "text-[#E63946] font-medium" : "text-gray-600"}`}>
              <i className="ri-trophy-line text-xl"></i>
              <span className="text-xs mt-1">Competitions</span>
            </div>
          </Link>
          
          <Link href="/meetings">
            <div className={`flex flex-col items-center py-2 px-3 ${location === "/meetings" ? "text-[#003366] font-medium" : "text-gray-600"}`}>
              <i className="ri-team-line text-xl"></i>
              <span className="text-xs mt-1">Meetings</span>
            </div>
          </Link>
          
          <Link href="/deadlines">
            <div className={`flex flex-col items-center py-2 px-3 ${location === "/deadlines" ? "text-[#E63946] font-medium" : "text-gray-600"}`}>
              <i className="ri-alarm-line text-xl"></i>
              <span className="text-xs mt-1">Deadlines</span>
            </div>
          </Link>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <div className="flex flex-col items-center py-2 px-3 text-gray-600 cursor-pointer">
                <i className="ri-menu-line text-xl"></i>
                <span className="text-xs mt-1">More</span>
              </div>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-xl">
              <div className="py-4 px-1">
                <div className="grid grid-cols-3 gap-4">
                  <Link href="/team" onClick={() => setIsMenuOpen(false)}>
                    <div className={`flex flex-col items-center p-3 rounded-lg ${location === "/team" ? "bg-blue-50 text-[#003366]" : "bg-gray-50 text-gray-700"}`}>
                      <i className="ri-group-line text-2xl mb-1"></i>
                      <span className="text-xs text-center">My Team</span>
                    </div>
                  </Link>
                  
                  <Link href="/current-winners" onClick={() => setIsMenuOpen(false)}>
                    <div className={`flex flex-col items-center p-3 rounded-lg ${location === "/current-winners" ? "bg-blue-50 text-[#003366]" : "bg-gray-50 text-gray-700"}`}>
                      <i className="ri-trophy-fill text-2xl mb-1 text-[#FFD700]"></i>
                      <span className="text-xs text-center">Winners</span>
                    </div>
                  </Link>
                  
                  <Link href="/events-category" onClick={() => setIsMenuOpen(false)}>
                    <div className={`flex flex-col items-center p-3 rounded-lg ${location === "/events-category" ? "bg-blue-50 text-[#003366]" : "bg-gray-50 text-gray-700"}`}>
                      <i className="ri-file-list-3-line text-2xl mb-1"></i>
                      <span className="text-xs text-center">Event Categories</span>
                    </div>
                  </Link>
                  
                  <Link href="/deca-help" onClick={() => setIsMenuOpen(false)}>
                    <div className={`flex flex-col items-center p-3 rounded-lg ${location === "/deca-help" ? "bg-blue-50 text-[#003366]" : "bg-gray-50 text-gray-700"}`}>
                      <i className="ri-question-answer-line text-2xl mb-1"></i>
                      <span className="text-xs text-center">DECA Help</span>
                    </div>
                  </Link>
                  
                  <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                    <div className={`flex flex-col items-center p-3 rounded-lg ${location === "/about" ? "bg-blue-50 text-[#003366]" : "bg-gray-50 text-gray-700"}`}>
                      <i className="ri-information-line text-2xl mb-1"></i>
                      <span className="text-xs text-center">About</span>
                    </div>
                  </Link>
                  
                  <Link href="/manage" onClick={() => setIsMenuOpen(false)}>
                    <div className={`flex flex-col items-center p-3 rounded-lg ${location === "/manage" ? "bg-blue-50 text-[#003366]" : "bg-gray-50 text-gray-700"}`}>
                      <i className="ri-settings-line text-2xl mb-1"></i>
                      <span className="text-xs text-center">Manage</span>
                    </div>
                  </Link>
                  
                  <Link href="/teacher-corner" onClick={() => setIsMenuOpen(false)}>
                    <div className={`flex flex-col items-center p-3 rounded-lg ${location === "/teacher-corner" ? "bg-blue-50 text-[#003366]" : "bg-gray-50 text-gray-700"}`}>
                      <i className="ri-user-settings-line text-2xl mb-1"></i>
                      <span className="text-xs text-center">Teacher Portal</span>
                    </div>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default MobileNav;

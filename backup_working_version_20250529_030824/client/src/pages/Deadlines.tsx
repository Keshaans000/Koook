import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Deadlines = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-64 bg-gradient-to-br from-red-50 to-white rounded-br-3xl opacity-70"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tl from-[#003366] to-blue-100 rounded-full opacity-20"></div>
      <div className="absolute top-40 left-20 w-32 h-32 bg-gradient-to-br from-[#FFD700] to-yellow-100 rounded-full opacity-10"></div>
      
      {/* Decorative icons */}
      <div className="absolute top-6 left-10 text-[#E63946] opacity-20 transform -rotate-12">
        <i className="ri-time-line text-5xl"></i>
      </div>
      <div className="absolute top-40 right-10 text-[#003366] opacity-15">
        <i className="ri-calendar-check-line text-4xl"></i>
      </div>
      <div className="absolute bottom-20 left-1/4 text-[#FFD700] opacity-10">
        <i className="ri-hourglass-line text-3xl"></i>
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-[#E63946] to-[#FF8C94] bg-clip-text text-transparent">
              DECA Important Deadlines
            </h1>
            <p className="text-gray-600">
              Critical dates and submission deadlines for DECA members
            </p>
          </div>
          <Link href="/">
            <Button variant="outline" className="flex items-center space-x-2 mt-4 md:mt-0 border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:bg-opacity-5 rounded-full">
              <i className="ri-arrow-left-line"></i>
              <span>Back to Calendar</span>
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#E63946] to-[#FF6B6B] p-6 text-white relative">
            <div className="absolute top-0 right-0 mt-4 mr-4 text-white opacity-20">
              <i className="ri-calendar-todo-line text-5xl"></i>
            </div>
            <h2 className="text-xl font-bold mb-2">Deadline Information</h2>
            <p className="text-red-100 max-w-2xl">
              For the most accurate and up-to-date information about DECA deadlines and submission dates, 
              please contact Mr. Kimbler directly. He maintains the official deadline schedule and can provide 
              you with important details about upcoming due dates.
            </p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-red-50 p-6 rounded-xl border border-red-100">
              <div className="bg-[#E63946] text-white p-4 rounded-full flex items-center justify-center">
                <i className="ri-user-3-line text-3xl"></i>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">Paul Kimbler</h3>
                <p className="text-gray-600 mb-2">DECA Faculty Advisor</p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-sm">
                    <i className="ri-mail-line text-[#E63946] mr-2"></i>
                    <span>paul.kimbler@wayzataschools.org</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="ri-map-pin-line text-[#E63946] mr-2"></i>
                    <span>Room 254, Wayzata High School</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="ri-time-line text-[#E63946] mr-2"></i>
                    <span>Office Hours: Mon-Fri, 7:30 AM - 3:30 PM</span>
                  </div>
                </div>
              </div>
              
              <Button className="bg-[#E63946] hover:bg-[#d62c3a] text-white rounded-full px-6">
                Contact Now
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-tr from-[#f8f9fa] to-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-[#003366] bg-opacity-20 p-3 rounded-full">
                    <i className="ri-alarm-warning-line text-[#003366] text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800">Why Deadlines Matter</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Meeting DECA deadlines is crucial for competition eligibility and ensures you won't 
                  miss important opportunities. Late submissions are typically not accepted for 
                  competitive events.
                </p>
              </div>
              
              <div className="bg-gradient-to-tr from-[#f8f9fa] to-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-[#FFD700] bg-opacity-20 p-3 rounded-full">
                    <i className="ri-notification-3-line text-[#FFD700] text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800">Deadline Reminders</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Set personal reminders at least one week before official deadlines to ensure 
                  you have buffer time for unexpected issues. Consider using the calendar feature on 
                  your phone or computer.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#E63946] bg-opacity-5 rounded-xl border border-[#E63946] border-opacity-10">
              <div className="flex items-start space-x-4">
                <div className="text-[#FFD700] mt-1">
                  <i className="ri-lightbulb-line text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Key Deadlines To Be Aware Of</h3>
                  <p className="text-gray-600 mb-4">
                    While specific dates change annually, these are the typical deadlines you should prepare for:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#E63946] mr-2 mt-0.5"></i>
                      <span>DECA membership registration (early fall)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#E63946] mr-2 mt-0.5"></i>
                      <span>Competition registration deadlines (varies by event)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#E63946] mr-2 mt-0.5"></i>
                      <span>Written event submission deadlines (typically 1-2 weeks before competition)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#E63946] mr-2 mt-0.5"></i>
                      <span>State and ICDC registration deadlines</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#E63946] mr-2 mt-0.5"></i>
                      <span>Scholarship application deadlines (winter/early spring)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deadlines;
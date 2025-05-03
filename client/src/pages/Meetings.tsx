import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Meetings = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/4 h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-bl-3xl opacity-70"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-[#FFD700] to-yellow-100 rounded-full opacity-20"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#E63946] to-red-100 rounded-full opacity-10"></div>
      
      {/* Trophy decorations */}
      <div className="absolute top-6 right-10 text-[#FFD700] opacity-20 transform rotate-12">
        <i className="ri-trophy-fill text-5xl"></i>
      </div>
      <div className="absolute top-40 left-10 text-[#003366] opacity-15">
        <i className="ri-award-line text-4xl"></i>
      </div>
      <div className="absolute bottom-20 right-1/4 text-[#E63946] opacity-10">
        <i className="ri-calendar-check-line text-3xl"></i>
      </div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-[#003366] to-[#2C7BE5] bg-clip-text text-transparent">
              DECA Meeting Schedule
            </h1>
            <p className="text-gray-600">
              Important meetings and organizational gatherings
            </p>
          </div>
          <Link href="/">
            <Button variant="outline" className="flex items-center space-x-2 mt-4 md:mt-0 border-[#003366] text-[#003366] hover:bg-[#003366] hover:bg-opacity-5 rounded-full">
              <i className="ri-arrow-left-line"></i>
              <span>Back to Calendar</span>
            </Button>
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#003366] to-[#004080] p-6 text-white relative">
            <div className="absolute top-0 right-0 mt-4 mr-4 text-white opacity-20">
              <i className="ri-user-voice-line text-5xl"></i>
            </div>
            <h2 className="text-xl font-bold mb-2">Contact For Meeting Information</h2>
            <p className="text-blue-100 max-w-2xl">
              For the most up-to-date information about DECA meetings and schedules, please contact Mr. Kimbler directly.
              He maintains the official meeting calendar and can provide you with details about upcoming meetings.
            </p>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-blue-50 p-6 rounded-xl border border-blue-100">
              <div className="bg-[#003366] text-white p-4 rounded-full flex items-center justify-center">
                <i className="ri-user-3-line text-3xl"></i>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">Paul Kimbler</h3>
                <p className="text-gray-600 mb-2">DECA Faculty Advisor</p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-sm">
                    <i className="ri-mail-line text-[#003366] mr-2"></i>
                    <span>paul.kimbler@wayzataschools.org</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="ri-map-pin-line text-[#003366] mr-2"></i>
                    <span>Room 254, Wayzata High School</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <i className="ri-time-line text-[#003366] mr-2"></i>
                    <span>Office Hours: Mon-Fri, 7:30 AM - 3:30 PM</span>
                  </div>
                </div>
              </div>
              
              <Button className="bg-[#003366] hover:bg-[#00264d] text-white rounded-full px-6">
                Contact Now
              </Button>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-tr from-[#f8f9fa] to-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-[#FFD700] bg-opacity-20 p-3 rounded-full">
                    <i className="ri-calendar-line text-[#003366] text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800">Typical Meeting Schedule</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Weekly meetings are typically held on Wednesday afternoons from 2:45 PM to 3:45 PM. 
                  Special planning sessions may be scheduled before major competitions or events.
                </p>
              </div>
              
              <div className="bg-gradient-to-tr from-[#f8f9fa] to-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-[#E63946] bg-opacity-20 p-3 rounded-full">
                    <i className="ri-notification-3-line text-[#E63946] text-xl"></i>
                  </div>
                  <h3 className="font-semibold text-gray-800">Meeting Notifications</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Meeting announcements are sent through Schoology and the DECA group chat. 
                  Make sure you're connected to both platforms to receive timely updates.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#003366] bg-opacity-5 rounded-xl border border-[#003366] border-opacity-10">
              <div className="flex items-start space-x-4">
                <div className="text-[#FFD700] mt-1">
                  <i className="ri-lightbulb-line text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Why Attend DECA Meetings?</h3>
                  <p className="text-gray-600 mb-4">
                    Regular attendance at DECA meetings provides valuable opportunities for networking, 
                    skill development, and competition preparation. Don't miss important announcements 
                    and collaborative learning experiences.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#003366] mr-2 mt-0.5"></i>
                      <span>Stay informed about upcoming competitions and deadlines</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#003366] mr-2 mt-0.5"></i>
                      <span>Collaborate with peers on group projects and presentations</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#003366] mr-2 mt-0.5"></i>
                      <span>Gain valuable insights from experienced DECA members</span>
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

export default Meetings;
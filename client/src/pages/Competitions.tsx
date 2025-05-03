import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const Competitions = () => {
  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -right-16 top-0 h-32 w-48 bg-[#FFD700] opacity-5 transform rotate-12"></div>
      <div className="absolute -left-20 -bottom-10 h-20 w-40 bg-[#003366] opacity-5 rounded-full"></div>
      
      {/* Trophy decorations */}
      <div className="absolute right-[5%] top-20 text-[#FFD700] opacity-10">
        <i className="ri-trophy-fill text-5xl"></i>
      </div>
      <div className="absolute left-[30%] bottom-10 text-[#003366] opacity-10 transform -rotate-12">
        <i className="ri-award-line text-4xl"></i>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 relative z-10">
        <div className="relative z-10">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">DECA Competitions</h1>
            <div className="ml-2 bg-[#FFD700] bg-opacity-20 rounded-full px-2 py-0.5 text-xs text-[#003366] font-medium border border-[#FFD700] border-opacity-30">
              2024-2025
            </div>
          </div>
          <p className="text-gray-600 mt-1">Upcoming competitions and conference information</p>
        </div>
        <Link href="/">
          <Button variant="outline" className="flex items-center space-x-2 mt-4 md:mt-0 border-[#003366] text-[#003366] hover:bg-[#003366] hover:bg-opacity-5">
            <i className="ri-arrow-left-line"></i>
            <span>Back to Calendar</span>
          </Button>
        </Link>
      </div>
      
      {/* Heading for primary competitions */}
      <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4 flex items-center">
        <i className="ri-trophy-fill text-[#FFD700] mr-2"></i>
        <span>Major Competitions</span>
        <div className="ml-2 h-px bg-gray-200 flex-grow"></div>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* District Competition */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-24 bg-[#003366] opacity-5 transform -skew-y-6"></div>
          <div className="p-6 relative">
            <div className="flex justify-between items-start">
              <div className="bg-[#003366] bg-opacity-10 p-3 rounded-lg">
                <i className="ri-trophy-line text-2xl text-[#003366]"></i>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#FFD700] bg-opacity-10 text-xs font-medium text-[#003366] border border-[#FFD700] border-opacity-30">
                January 30-31, 2025
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mt-4">District DECA Competition</h3>
            <p className="text-gray-600 text-sm mt-2">
              The District competition is your first step toward qualifying for the State Conference. Compete in your chosen event category against students from neighboring schools.
            </p>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <i className="ri-map-pin-line text-[#003366] mr-2"></i>
                <span>Wayzata High School, Plymouth, MN</span>
              </div>
              <div className="flex items-center text-sm">
                <i className="ri-time-line text-[#003366] mr-2"></i>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex items-center text-sm">
                <i className="ri-user-follow-line text-[#003366] mr-2"></i>
                <span>Registration deadline: January 15, 2025</span>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="text-[#003366] hover:underline text-sm font-medium flex items-center">
                <i className="ri-file-list-3-line mr-1"></i>
                <span>View Event Categories</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* State Competition */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-24 bg-[#2C7BE5] opacity-5 transform -skew-y-6"></div>
          <div className="p-6 relative">
            <div className="flex justify-between items-start">
              <div className="bg-[#2C7BE5] bg-opacity-10 p-3 rounded-lg">
                <i className="ri-trophy-line text-2xl text-[#2C7BE5]"></i>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#2C7BE5] bg-opacity-10 text-xs font-medium text-[#2C7BE5] border border-[#2C7BE5] border-opacity-30">
                March 15-17, 2025
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mt-4">Minnesota DECA State Conference</h3>
            <p className="text-gray-600 text-sm mt-2">
              The State Career Development Conference brings together top performers from district competitions. Winners at this level qualify for the International Career Development Conference.
            </p>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <i className="ri-map-pin-line text-[#2C7BE5] mr-2"></i>
                <span>Hyatt Regency Minneapolis, MN</span>
              </div>
              <div className="flex items-center text-sm">
                <i className="ri-time-line text-[#2C7BE5] mr-2"></i>
                <span>Full day events (3-day conference)</span>
              </div>
              <div className="flex items-center text-sm">
                <i className="ri-user-follow-line text-[#2C7BE5] mr-2"></i>
                <span>Qualification required from District</span>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="text-[#2C7BE5] hover:underline text-sm font-medium flex items-center">
                <i className="ri-hotel-line mr-1"></i>
                <span>Accommodation Details</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* ICDC Competition */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-24 bg-[#FFD700] opacity-5 transform -skew-y-6"></div>
          <div className="p-6 relative">
            <div className="flex justify-between items-start">
              <div className="bg-[#FFD700] bg-opacity-20 p-3 rounded-lg">
                <i className="ri-trophy-fill text-2xl text-[#003366]"></i>
              </div>
              <div className="px-3 py-1 rounded-full bg-[#FFD700] bg-opacity-10 text-xs font-medium text-[#003366] border border-[#FFD700] border-opacity-30">
                April 26-29, 2025
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mt-4">DECA ICDC 2025</h3>
            <p className="text-gray-600 text-sm mt-2">
              The International Career Development Conference (ICDC) is DECA's pinnacle event, bringing together 20,000+ students and advisors from all 50 states and several countries.
            </p>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-sm">
                <i className="ri-map-pin-line text-[#003366] mr-2"></i>
                <span>Orlando, Florida</span>
              </div>
              <div className="flex items-center text-sm">
                <i className="ri-time-line text-[#003366] mr-2"></i>
                <span>4-day conference with competitions</span>
              </div>
              <div className="flex items-center text-sm">
                <i className="ri-user-follow-line text-[#003366] mr-2"></i>
                <span>State qualification required</span>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://www.deca.org/conferences/icdc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#003366] hover:underline text-sm font-medium flex items-center"
              >
                <i className="ri-external-link-line mr-1"></i>
                <span>ICDC Official Website</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Competition Preparation Section */}
      <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gradient-to-br from-[#003366] to-[#002244] p-6 text-white relative overflow-hidden">
            <div className="absolute -right-8 bottom-0 opacity-10">
              <i className="ri-trophy-line text-9xl"></i>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">Competition Preparation</h3>
              <p className="text-blue-100 mb-6">
                Effective preparation is the key to success in DECA competitions. Start early and utilize all available resources.
              </p>
              <div className="flex items-center text-sm text-blue-100">
                <i className="ri-calendar-check-line mr-2"></i>
                <span>Preparation timeline: 8-12 weeks</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-6">
            <h4 className="font-bold text-gray-800 mb-4">Preparation Resources</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-[#003366] bg-opacity-10 p-2 rounded mr-3 mt-1">
                  <i className="ri-book-open-line text-[#003366]"></i>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Study Materials</h5>
                  <p className="text-sm text-gray-600">Access practice tests, case studies, and sample presentations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#2C7BE5] bg-opacity-10 p-2 rounded mr-3 mt-1">
                  <i className="ri-team-line text-[#2C7BE5]"></i>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Practice Sessions</h5>
                  <p className="text-sm text-gray-600">Weekly practice with peers and advisors for roleplay events.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#E63946] bg-opacity-10 p-2 rounded mr-3 mt-1">
                  <i className="ri-presentation-line text-[#E63946]"></i>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Presentation Skills</h5>
                  <p className="text-sm text-gray-600">Develop confidence, clarity, and professional speaking skills.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FFD700] bg-opacity-10 p-2 rounded mr-3 mt-1">
                  <i className="ri-briefcase-line text-[#003366]"></i>
                </div>
                <div>
                  <h5 className="font-medium text-gray-800">Business Knowledge</h5>
                  <p className="text-sm text-gray-600">Study industry trends, marketing principles, and business concepts.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <a 
                href="https://www.deca.org/wp-content/uploads/2023/08/HS_Competitive_Events_Guide.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#003366] text-white px-4 py-2 rounded text-sm flex items-center"
              >
                <i className="ri-file-list-3-line mr-1"></i>
                Competitive Events Guide
              </a>
              
              <button className="bg-white border border-[#003366] text-[#003366] px-4 py-2 rounded text-sm flex items-center">
                <i className="ri-calendar-event-line mr-1"></i>
                Practice Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Competition Tips */}
      <div className="mt-10 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <i className="ri-lightbulb-line text-[#FFD700] mr-2"></i>
          <span>Competition Success Tips</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="text-[#003366] font-medium mb-2">Before the Competition</div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <i className="ri-checkbox-circle-line text-[#003366] mr-2 mt-0.5"></i>
                <span>Research your event thoroughly and understand scoring</span>
              </li>
              <li className="flex items-start">
                <i className="ri-checkbox-circle-line text-[#003366] mr-2 mt-0.5"></i>
                <span>Practice with various scenarios and time yourself</span>
              </li>
              <li className="flex items-start">
                <i className="ri-checkbox-circle-line text-[#003366] mr-2 mt-0.5"></i>
                <span>Prepare professional attire according to DECA dress code</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="text-[#2C7BE5] font-medium mb-2">During the Competition</div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <i className="ri-checkbox-circle-line text-[#2C7BE5] mr-2 mt-0.5"></i>
                <span>Arrive early and bring all required materials</span>
              </li>
              <li className="flex items-start">
                <i className="ri-checkbox-circle-line text-[#2C7BE5] mr-2 mt-0.5"></i>
                <span>Maintain professional demeanor and confident body language</span>
              </li>
              <li className="flex items-start">
                <i className="ri-checkbox-circle-line text-[#2C7BE5] mr-2 mt-0.5"></i>
                <span>Listen carefully to instructions and questions from judges</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="text-[#E63946] font-medium mb-2">After the Competition</div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <i className="ri-checkbox-circle-line text-[#E63946] mr-2 mt-0.5"></i>
                <span>Reflect on your performance and note areas for improvement</span>
              </li>
              <li className="flex items-start">
                <i className="ri-checkbox-circle-line text-[#E63946] mr-2 mt-0.5"></i>
                <span>Network with other competitors and attend workshops</span>
              </li>
              <li className="flex items-start">
                <i className="ri-checkbox-circle-line text-[#E63946] mr-2 mt-0.5"></i>
                <span>Review judges' feedback when available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
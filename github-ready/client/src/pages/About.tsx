import { Link } from "wouter";
import DecaFAQ from "@/components/DecaFAQ";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const About = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">About Wayzata DECA</h1>
        <p className="text-gray-600 max-w-3xl">
          Learn about our chapter, mission, and how you can get involved with one of the largest DECA chapters in Minnesota.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <Card className="bg-gradient-to-br from-[#003366] to-[#004080] text-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Wayzata DECA prepares emerging leaders and entrepreneurs in marketing, finance, 
              hospitality, and management. We provide opportunities for students to develop 
              skills that will help them excel in their future careers.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-[#FFD700] to-[#FFC000] text-[#003366]">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Competitions</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Wayzata DECA members compete at district, state, and international levels in 
              various business-related events. Our chapter has a strong track record of success 
              at all competition levels.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-[#2C7BE5] to-[#1A68D1] text-white">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Leadership</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              DECA offers numerous leadership opportunities through officer positions, 
              community service projects, and business partnerships. Develop the skills 
              that colleges and employers value.
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Be The One Section */}
      <div className="mb-10 relative overflow-hidden">
        <div className="absolute -right-20 -top-10 opacity-5">
          <i className="ri-trophy-fill text-9xl text-[#FFD700]"></i>
        </div>
        <div className="absolute -left-10 -bottom-10 opacity-5">
          <i className="ri-award-fill text-8xl text-[#003366]"></i>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">Go the Extra</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                <span className="font-bold text-[#003366]">Go the Extra</span> is DECA's inspirational call to action, 
                challenging each member to step up and make a difference. It's about embodying the entrepreneurial 
                and leadership spirit that defines DECA.
              </p>
              <p className="text-gray-700 mb-4">
                As a DECA member, you're encouraged to:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <div className="text-[#FFD700] mr-2 mt-1"><i className="ri-checkbox-circle-fill"></i></div>
                  <span>Go the extra mile to inspire others through your achievements and character</span>
                </li>
                <li className="flex items-start">
                  <div className="text-[#FFD700] mr-2 mt-1"><i className="ri-checkbox-circle-fill"></i></div>
                  <span>Go the extra step to innovate new ideas and solutions in business</span>
                </li>
                <li className="flex items-start">
                  <div className="text-[#FFD700] mr-2 mt-1"><i className="ri-checkbox-circle-fill"></i></div>
                  <span>Go the extra distance to take initiative in your chapter and community</span>
                </li>
                <li className="flex items-start">
                  <div className="text-[#FFD700] mr-2 mt-1"><i className="ri-checkbox-circle-fill"></i></div>
                  <span>Go the extra effort to make a lasting impact in your DECA journey</span>
                </li>
              </ul>
              <p className="text-gray-700">
                This mindset prepares you not just for DECA competitions, but for success in business 
                and leadership throughout your future career.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center items-center">
              <img 
                src="/deca-trophy.svg" 
                alt="DECA Trophy" 
                className="max-h-64 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Chapter History</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <p className="text-gray-700 mb-4">
              Wayzata DECA has been a prominent chapter in Minnesota for many years, consistently 
              producing state and international finalists and winners. Our chapter focuses on 
              creating real-world business experiences and developing future business leaders.
            </p>
            <p className="text-gray-700 mb-4">
              With dedicated advisors and motivated student officers, Wayzata DECA provides a 
              supportive environment for members to explore business interests and develop 
              professional skills. Our alumni have gone on to successful careers in business, 
              entrepreneurship, and leadership roles in various industries.
            </p>
            <p className="text-gray-700">
              Each year, our chapter participates in community service projects, business partnerships, 
              and competitive events that enhance members' business knowledge and leadership abilities.
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Wayzata DECA</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <p className="text-gray-700 mb-4">
              Membership is open to all Wayzata High School students interested in business, 
              marketing, finance, hospitality, or entrepreneurship. No prior experience is required!
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#003366] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span>1</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Attend an Information Session</h3>
                  <p className="text-gray-600 text-sm">
                    Watch for announcements at the beginning of the school year for meeting dates.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#003366] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span>2</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Complete Registration</h3>
                  <p className="text-gray-600 text-sm">
                    Fill out the membership form and pay dues to become an official member.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#003366] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  <span>3</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Get Involved</h3>
                  <p className="text-gray-600 text-sm">
                    Attend meetings, participate in activities, and prepare for competitions.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button className="bg-[#003366] hover:bg-[#002244]">
                <i className="ri-mail-line mr-2"></i>
                Contact Us For Information
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-8 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">DECA Advisor Contact</h2>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-gray-100 p-5 rounded-lg flex-1">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white text-xl font-bold">PK</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Paul Kimbler</h3>
                  <p className="text-gray-600">DECA Advisor</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="ri-mail-line text-[#003366] mr-2"></i>
                  <a href="mailto:paul.kimbler@wayzataschools.org" className="text-[#003366] hover:underline">
                    paul.kimbler@wayzataschools.org
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="ri-map-pin-line text-[#003366] mr-2"></i>
                  <span className="text-gray-700">Room 256, Wayzata High School</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line text-[#003366] mr-2"></i>
                  <span className="text-gray-700">Office Hours: School days 7:30am - 3:30pm</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-700">
                  For questions about DECA membership, competitions, or events, please 
                  contact Mr. Kimbler via email or stop by his classroom during office hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <DecaFAQ />
      
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to see what's happening?</h2>
        <Link href="/">
          <Button size="lg" className="bg-[#003366] hover:bg-[#002244]">
            View Events Calendar
          </Button>
        </Link>
      </div>
    </>
  );
};

export default About;
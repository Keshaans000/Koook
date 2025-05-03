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